import { NextResponse } from 'next/server'
import { testSupabaseConnection } from '@/lib/supabase-service'

export async function GET() {
  try {
    // Test the Supabase connection
    const testResult = await testSupabaseConnection()
    
    if (!testResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to connect to Supabase',
          error: testResult.error 
        },
        { status: 500 }
      )
    }
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: testResult.message,
      data: testResult.data
    })
  } catch (error) {
    console.error('Error testing Supabase connection:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    )
  }
} 