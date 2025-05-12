import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    console.log('🛠️ Fix Reservation System Test')
    
    // Get data from request or use test data
    let data
    try {
      data = await req.json()
      console.log('Using provided data:', data)
    } catch (e) {
      // Generate test data
      data = {
        timestamp: new Date().toISOString(),
        fullName: `Test User ${Date.now()}`,
        email: `test-${Date.now()}@example.com`,
        phone: '555-1234',
        address: '123 Test St, Test City, TS 12345',
        moveQuantity: 1,
        repairQuantity: 1,
        rapidQuantity: 1,
        bundleQuantity: 1,
        totalCost: 123.96,
        notes: 'Fix test'
      }
      console.log('Using test data:', data)
    }
    
    // Get list of columns from reservations table
    const { data: tableInfo, error: tableError } = await supabase
      .from('reservations')
      .select('*')
      .limit(1)
    
    const existingColumns = tableInfo && tableInfo.length > 0 
      ? Object.keys(tableInfo[0]) 
      : []
    
    console.log('Table columns:', existingColumns)
    
    // Create a new object with only columns that exist in the table
    const cleanData: any = {}
    Object.keys(data).forEach(key => {
      if (existingColumns.includes(key)) {
        cleanData[key] = data[key]
      } else {
        console.log(`Column '${key}' doesn't exist in table and will be skipped`)
      }
    })
    
    console.log('Clean data being sent:', cleanData)
    
    // Direct insert using Supabase client
    const { data: insertData, error: insertError } = await supabase
      .from('reservations')
      .insert([cleanData])
      .select()
    
    if (insertError) {
      console.error('Insert failed:', insertError)
      
      // Try with only critical fields
      const minimalData = {
        email: data.email,
        timestamp: data.timestamp
      }
      
      console.log('Trying minimal data:', minimalData)
      
      const { data: minData, error: minError } = await supabase
        .from('reservations')
        .insert([minimalData])
        .select()
      
      if (minError) {
        return NextResponse.json({
          success: false,
          message: 'All insert attempts failed',
          errors: {
            original: insertError,
            minimal: minError
          },
          tableColumns: existingColumns
        }, { status: 500 })
      }
      
      return NextResponse.json({
        success: true,
        message: 'Minimal insert succeeded',
        data: minData,
        tableColumns: existingColumns
      })
    }
    
    return NextResponse.json({
      success: true,
      message: 'Insert succeeded',
      data: insertData,
      tableColumns: existingColumns
    })
  } catch (error) {
    console.error('Error in fix-reservation API:', error)
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 