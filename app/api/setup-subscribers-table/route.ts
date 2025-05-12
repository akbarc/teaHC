import { NextResponse } from 'next/server'
import { setupSubscribersTable } from '@/lib/subscriber-service'

export async function GET() {
  try {
    // This endpoint should be secured in a production environment
    // Here we'd check for an admin token or other form of authentication
    
    const result = await setupSubscribersTable()
    
    return NextResponse.json({
      success: !result.error,
      message: result.message || 'Operation completed',
      error: result.error
    })
  } catch (error) {
    console.error('Error in setup-subscribers-table API route:', error)
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 