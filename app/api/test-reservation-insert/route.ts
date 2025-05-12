import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('🔍 Testing insert into reservations table...')
    
    // Create test data
    const testData = {
      timestamp: new Date().toISOString(),
      fullName: 'Test User',
      email: `test-${Date.now()}@example.com`,
      phone: '555-1234',
      address: '123 Test St, Test City, TS 12345',
      moveQuantity: 1,
      repairQuantity: 1,
      rapidQuantity: 1,
      bundleQuantity: 1,
      totalCost: 123.96,
      notes: 'Direct test insertion'
    }
    
    console.log('Test data:', testData)
    
    // First, get the columns of the reservations table
    const { data: columnData, error: columnError } = await supabase
      .from('reservations')
      .select('*')
      .limit(1)
    
    const columns = columnData && columnData.length > 0 
      ? Object.keys(columnData[0]) 
      : []
    
    console.log('Table columns:', columns)
    
    // Attempt to insert
    const { data, error } = await supabase
      .from('reservations')
      .insert([testData])
      .select()
    
    if (error) {
      console.error('Insert error:', error)
      
      // If there was an error, try another approach with columns we know
      console.log('Trying fallback insert with limited columns...')
      
      // Create a minimal data object with just essential fields
      const minimalData: any = {
        email: testData.email
      }
      
      // Add other fields if the table has them
      if (columns.includes('timestamp')) minimalData.timestamp = testData.timestamp
      if (columns.includes('fullName')) minimalData.fullName = testData.fullName
      if (columns.includes('phone')) minimalData.phone = testData.phone
      if (columns.includes('address')) minimalData.address = testData.address
      
      console.log('Minimal data:', minimalData)
      
      const { data: minimalData2, error: minimalError } = await supabase
        .from('reservations')
        .insert([minimalData])
        .select()
      
      return NextResponse.json({
        success: !minimalError,
        message: minimalError ? 'Both insert attempts failed' : 'Minimal insert succeeded',
        attempt1: { error },
        attempt2: { data: minimalData2, error: minimalError },
        tableColumns: columns
      })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Insert succeeded',
      data,
      tableColumns: columns
    })
  } catch (error) {
    console.error('Error in test-reservation-insert API:', error)
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 