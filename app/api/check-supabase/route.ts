import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Test basic connection
    const { data, error } = await supabase.from('subscribers').select('count').limit(1)
    
    // If there's an error but it's specifically that the table doesn't exist
    if (error && error.message.includes("relation") && error.message.includes("does not exist")) {
      return NextResponse.json({
        success: true,
        connection: true,
        tableExists: false,
        message: 'Connected to Supabase but subscribers table does not exist'
      })
    }
    
    // If there's any other error, the connection might have issues
    if (error) {
      return NextResponse.json({
        success: false,
        connection: false,
        message: 'Error connecting to Supabase',
        error: error.message
      })
    }
    
    // If no error, connection is good and table exists
    return NextResponse.json({
      success: true, 
      connection: true,
      tableExists: true,
      message: 'Connected to Supabase and subscribers table exists'
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      connection: false,
      message: 'Exception checking Supabase connection',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 