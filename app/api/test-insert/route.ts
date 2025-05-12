import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, metadata = {}, test_field = 'test value' } = body || {}
    
    if (!email) {
      return NextResponse.json({ 
        success: false,
        error: 'Email is required' 
      }, { status: 400 })
    }
    
    console.log('📝 Testing direct insert to Supabase with email:', email)
    
    // First, let's check if we can query the table at all
    console.log('Step 1: Checking if table exists...')
    const { data: tableData, error: tableError } = await supabase
      .from('subscribers')
      .select('count(*)')
      .limit(1)
    
    console.log('Table check result:', { data: tableData, error: tableError })
    
    if (tableError) {
      // If the error is about the table not existing, we need to create it
      if (tableError.message && tableError.message.includes('does not exist')) {
        console.log('Attempting to create table...')
        // Try to create the table directly - depends on Supabase permissions
        const createTableSQL = `
          CREATE TABLE IF NOT EXISTS public.subscribers (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            email TEXT NOT NULL UNIQUE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            source TEXT DEFAULT 'api_test',
            name TEXT,
            ip_address TEXT,
            user_agent TEXT,
            metadata JSONB DEFAULT '{}'::JSONB,
            test_field TEXT,
            is_verified BOOLEAN DEFAULT FALSE,
            reservation_completed BOOLEAN DEFAULT FALSE
          );
        `
        
        const { error: createError } = await supabase.rpc('exec_sql', { sql: createTableSQL })
        console.log('Create table result:', { error: createError })
        
        if (createError) {
          return NextResponse.json({
            success: false,
            message: 'Table does not exist and could not be created',
            error: { tableError: tableError.message, createError: createError.message }
          }, { status: 500 })
        }
      } else {
        return NextResponse.json({
          success: false,
          message: 'Error checking table',
          error: tableError.message
        }, { status: 500 })
      }
    }
    
    // Now try to insert a record
    console.log('Step 2: Inserting test record...')
    
    // Include timestamp for easier debugging
    const timestamp = new Date().toISOString()
    
    const { data: insertData, error: insertError } = await supabase
      .from('subscribers')
      .insert([
        {
          email,
          source: 'api_test',
          test_field: `${test_field || 'test'} - ${timestamp}`,
          metadata: {
            test: true,
            timestamp,
            ...metadata
          }
        }
      ])
      .select()
    
    console.log('Insert result:', { data: insertData, error: insertError })
    
    if (insertError) {
      // If it's a unique constraint error, the email already exists
      if (insertError.code === '23505') {
        console.log('Email already exists, updating instead...')
        
        // Try to update instead
        const { data: updateData, error: updateError } = await supabase
          .from('subscribers')
          .update({
            source: 'api_test_update',
            test_field: `${test_field || 'updated'} - ${timestamp}`,
            metadata: {
              test: true,
              timestamp,
              updated: true,
              ...metadata
            }
          })
          .eq('email', email)
          .select()
        
        console.log('Update result:', { data: updateData, error: updateError })
        
        if (updateError) {
          return NextResponse.json({
            success: false,
            message: 'Could not insert or update record',
            error: { insertError: insertError.message, updateError: updateError.message }
          }, { status: 500 })
        }
        
        return NextResponse.json({
          success: true,
          message: 'Record updated successfully',
          data: updateData
        })
      }
      
      return NextResponse.json({
        success: false,
        message: 'Error inserting record',
        error: insertError
      }, { status: 500 })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Record inserted successfully',
      data: insertData
    })
  } catch (error) {
    console.error('Exception in test-insert API:', error)
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 