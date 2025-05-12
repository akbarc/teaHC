import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    // Create Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://oximmrzfhtkdgfykrtjy.supabase.co'
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aW1tcnpmaHRrZGdmeWtydGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NTU1NjMsImV4cCI6MjA2MjMzMTU2M30.ieWFaNGnwiSngyEYiwmg6JimpCe16OlnVZJhymljcKw'
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    // Get data from request
    const data = await req.json()
    
    if (!data.email) {
      return NextResponse.json({
        success: false,
        message: 'Email is required'
      }, { status: 400 })
    }
    
    console.log('Adding subscriber:', data)
    
    // Check if subscriber already exists
    const { data: existingData, error: checkError } = await supabase
      .from('subscribers')
      .select('*')
      .eq('email', data.email)
      .maybeSingle()
    
    if (checkError) {
      console.error('Error checking for existing subscriber:', checkError)
      
      // Try to create the table if it doesn't exist
      if (checkError.message && checkError.message.includes('does not exist')) {
        try {
          console.log('Attempting to create subscribers table...')
          const createTableSQL = `
            CREATE TABLE IF NOT EXISTS public.subscribers (
              id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
              email TEXT NOT NULL UNIQUE,
              created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
              source TEXT,
              name TEXT
            );
          `
          
          // Try to create table
          const { error: createError } = await supabase.rpc('exec_sql', { sql: createTableSQL })
          if (createError) {
            console.error('Error creating table:', createError)
          }
        } catch (createError) {
          console.error('Exception creating table:', createError)
        }
      }
    }
    
    // Prepare the data to insert or update
    const subscriber = {
      email: data.email,
      source: data.source || 'api',
      name: data.name || null,
      updated_at: new Date().toISOString()
    }
    
    // If the subscriber exists, update it
    if (existingData) {
      console.log('Subscriber exists, updating:', existingData.id)
      
      const { data: updateData, error: updateError } = await supabase
        .from('subscribers')
        .update(subscriber)
        .eq('email', data.email)
        .select()
      
      if (updateError) {
        console.error('Error updating subscriber:', updateError)
        return NextResponse.json({
          success: false,
          message: 'Error updating subscriber',
          error: updateError.message
        }, { status: 500 })
      }
      
      return NextResponse.json({
        success: true,
        message: 'Subscriber updated',
        data: updateData
      })
    }
    
    // Otherwise, insert a new subscriber
    const { data: insertData, error: insertError } = await supabase
      .from('subscribers')
      .insert([subscriber])
      .select()
    
    if (insertError) {
      console.error('Error inserting subscriber:', insertError)
      return NextResponse.json({
        success: false,
        message: 'Error inserting subscriber',
        error: insertError.message
      }, { status: 500 })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Subscriber added',
      data: insertData
    })
  } catch (error) {
    console.error('Exception in add-subscriber API:', error)
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 