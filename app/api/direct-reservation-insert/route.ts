import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    // Create a fresh client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://oximmrzfhtkdgfykrtjy.supabase.co'
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aW1tcnpmaHRrZGdmeWtydGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NTU1NjMsImV4cCI6MjA2MjMzMTU2M30.ieWFaNGnwiSngyEYiwmg6JimpCe16OlnVZJhymljcKw'
    
    if (!supabaseKey) {
      return NextResponse.json({
        success: false,
        message: 'Supabase key not found'
      }, { status: 500 })
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    // Test data
    const testEmail = `direct-test-${Date.now()}@example.com`
    
    // Simple insertion test
    const testData = {
      email: testEmail,
      timestamp: new Date().toISOString(),
      fullName: 'Direct Test User'
    }
    
    console.log('Sending test data:', testData)
    
    // Insert data
    const { data, error } = await supabase
      .from('reservations')
      .insert([testData])
      .select()
    
    if (error) {
      console.error('Insert error:', error)
      
      return NextResponse.json({
        success: false,
        message: 'Insert failed',
        error
      }, { status: 500 })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Direct insertion worked!',
      data,
      testEmail
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({
      success: false,
      message: 'Exception occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 