import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('🔍 Testing all tables in Supabase...')
    
    // Test basic connection
    console.log('Step 1: Testing connection...')
    const connectionTest = await supabase.from('subscribers').select('count').limit(1)
    
    // Check for reservations table
    console.log('Step 2: Testing reservations table...')
    const reservationsTest = await supabase.from('reservations').select('count').limit(1)
    
    // Check for all available tables
    console.log('Step 3: Testing for all tables via SQL...')
    let tablesResult = null
    try {
      const { data, error } = await supabase
        .rpc('exec_sql', { 
          sql: "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'" 
        })
      
      if (error) {
        console.log('Could not get tables via SQL:', error)
      } else {
        tablesResult = data
      }
    } catch (e) {
      console.log('Exception getting tables via SQL:', e)
    }
    
    // Try to test "teahc-pre-reservations" table
    console.log('Step 4: Testing teahc-pre-reservations table...')
    const preReservationsTest = await supabase.from('teahc-pre-reservations').select('count').limit(1)
    
    // Return all results
    return NextResponse.json({
      timestamp: new Date().toISOString(),
      subscribersTableResult: {
        exists: !connectionTest.error,
        error: connectionTest.error
      },
      reservationsTableResult: {
        exists: !reservationsTest.error,
        error: reservationsTest.error
      },
      preReservationsTableResult: {
        exists: !preReservationsTest.error,
        error: preReservationsTest.error
      },
      tablesViaSql: tablesResult,
      recommendation: !reservationsTest.error 
        ? "Reservations table exists - check column names and permissions" 
        : "Reservations table does not exist - create it first"
    })
  } catch (error) {
    console.error('Error in test-tables API:', error)
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 