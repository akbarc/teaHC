import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    // Get the data from the request
    const data = await req.json()
    
    // Log all incoming data
    console.log('🔍 RESERVATION ATTEMPT LOGGED:')
    console.log(JSON.stringify(data, null, 2))
    
    // Return success
    return NextResponse.json({
      success: true,
      message: 'Reservation data logged',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error in log-reservation API:', error)
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 