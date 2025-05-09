import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Test basic Supabase connection without accessing a table
    const { data, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('Supabase health check - Auth error:', error)
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to connect to Supabase auth service',
          error 
        },
        { status: 500 }
      )
    }
    
    // Check if we can communicate with Supabase auth API
    return NextResponse.json({
      success: true,
      message: 'Supabase connection is healthy',
      session: data.session ? 'Active' : 'None'
    })
  } catch (error) {
    console.error('Error checking Supabase health:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error when checking Supabase connection',
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
} 