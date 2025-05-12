import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    console.log('🛠️ Fix Reservation System Test')
    
    // Create a fresh client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || 'https://oximmrzfhtkdgfykrtjy.supabase.co'
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aW1tcnpmaHRrZGdmeWtydGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NTU1NjMsImV4cCI6MjA2MjMzMTU2M30.ieWFaNGnwiSngyEYiwmg6JimpCe16OlnVZJhymljcKw'
    
    console.log('Using Supabase URL:', supabaseUrl)
    console.log('Key available:', !!supabaseKey)
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    
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
    console.log('⚠️ IMPORTANT - Attempting insert with data:', JSON.stringify(cleanData))
    
    const { data: insertData, error: insertError } = await supabase
      .from('reservations')
      .insert([cleanData])
      .select()
    
    if (insertError) {
      console.error('Insert failed:', insertError)
      
      // Try with only critical fields
      const minimalData = {
        email: data.email,
        timestamp: data.timestamp || new Date().toISOString()
      }
      
      console.log('Trying minimal data:', minimalData)
      
      const { data: minData, error: minError } = await supabase
        .from('reservations')
        .insert([minimalData])
        .select()
      
      if (minError) {
        // Get RLS settings to help diagnose the issue
        let rlsInfo = null
        try {
          const { data: rlsData, error: rlsError } = await supabase
            .from('reservations')
            .select('*')
            .limit(1)
          
          rlsInfo = {
            canSelect: !rlsError,
            selectError: rlsError ? rlsError.message : null
          }
        } catch (e) {}
        
        return NextResponse.json({
          success: false,
          message: 'All insert attempts failed',
          errors: {
            original: insertError,
            minimal: minError
          },
          tableColumns: existingColumns,
          supabaseInfo: {
            url: supabaseUrl,
            keyAvailable: !!supabaseKey,
            rls: rlsInfo
          }
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