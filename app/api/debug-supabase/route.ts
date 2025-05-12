import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  // Build up a results object with detailed diagnostics
  const results: any = {
    timestamp: new Date().toISOString(),
    versions: {
      node: process.version,
      platform: process.platform
    },
    checks: {},
    tables: {},
    testQueries: {}
  }
  
  try {
    // Test 1: Basic connection 
    try {
      console.log('🔍 Testing Supabase connection...')
      results.checks.connectionAttempted = true
      
      // Simple query that should work with any table
      const { data, error } = await supabase.from('subscribers').select('*').limit(1)
      
      results.checks.connectionResult = {
        success: !error,
        data,
        error: error ? {
          message: error.message,
          code: error.code,
          hint: error.hint,
          details: error.details
        } : null
      }
      
      if (error && error.message && error.message.includes('does not exist')) {
        results.checks.tableExists = false
        results.checks.connectionWorking = true
      } else if (error) {
        results.checks.connectionWorking = false
        results.checks.connectionError = error.message
      } else {
        results.checks.tableExists = true
        results.checks.connectionWorking = true
      }
    } catch (e) {
      results.checks.connectionException = e instanceof Error ? e.message : String(e)
      results.checks.connectionWorking = false
    }
    
    // Test 2: Auth check (without credentials)
    try {
      console.log('🔍 Testing anonymous auth...')
      const { data: authData, error: authError } = await supabase.auth.getSession()
      
      results.checks.authResult = {
        success: !authError,
        session: authData?.session ? 'Present' : 'None',
        error: authError ? authError.message : null
      }
    } catch (e) {
      results.checks.authException = e instanceof Error ? e.message : String(e)
    }
    
    // Test 3: Try simple insert without jsonb fields
    try {
      console.log('🔍 Testing simple insert operation...')
      const testEmail = `test-${Date.now()}@example.com`
      
      const { data: insertData, error: insertError } = await supabase
        .from('subscribers')
        .insert([
          {
            email: testEmail,
            source: 'debug_api'
          }
        ])
        .select()
      
      results.testQueries.simpleInsertResult = {
        success: !insertError,
        data: insertData,
        error: insertError ? {
          message: insertError.message,
          code: insertError.code,
          details: insertError.details
        } : null,
        email: testEmail
      }
    } catch (e) {
      results.testQueries.simpleInsertException = e instanceof Error ? e.message : String(e)
    }
    
    // Test 4: Examine table structure if it exists
    if (results.checks.tableExists) {
      try {
        console.log('🔍 Testing table structure...')
        
        // Get data from the subscribers table to examine structure
        const { data: columnData, error: columnError } = await supabase
          .from('subscribers')
          .select('*')
          .limit(1)
        
        if (columnError) {
          results.tables.structure = {
            success: false,
            error: columnError.message
          }
        } else if (columnData && columnData.length > 0) {
          // We have data, extract the column names
          const columns = Object.keys(columnData[0])
          results.tables.structure = {
            success: true,
            columns,
            hasMetadataColumn: columns.includes('metadata'),
            hasReservationCompletedColumn: columns.includes('reservation_completed')
          }
        } else {
          // Table exists but no data
          results.tables.structure = {
            success: true,
            isEmpty: true
          }
          
          // Let's try a simple insert with reservation fields
          console.log('Table empty, testing insert with reservation fields...')
          const testEmail = `empty-test-${Date.now()}@example.com`
          
          const { data: emptyInsertData, error: emptyInsertError } = await supabase
            .from('subscribers')
            .insert([
              {
                email: testEmail,
                source: 'debug_api_empty',
                reservation_completed: true
              }
            ])
            .select()
          
          results.tables.emptyInsertTest = {
            success: !emptyInsertError,
            data: emptyInsertData,
            error: emptyInsertError ? emptyInsertError.message : null
          }
        }
      } catch (e) {
        results.tables.structureException = e instanceof Error ? e.message : String(e)
      }
    }
    
    // Test 5: Try direct SQL if available
    try {
      console.log('🔍 Checking direct SQL functionality...')
      const { data: sqlData, error: sqlError } = await supabase.rpc('exec_sql', {
        sql: 'SELECT current_timestamp as time, current_database() as db'
      })
      
      results.checks.directSqlResult = {
        success: !sqlError,
        data: sqlData,
        error: sqlError ? sqlError.message : null
      }
    } catch (e) {
      results.checks.directSqlException = e instanceof Error ? e.message : String(e)
    }
    
    // Final conclusion
    if (results.checks.connectionWorking) {
      if (results.checks.tableExists) {
        if (results.testQueries.simpleInsertResult?.success) {
          results.diagnosis = "✅ Connection working, table exists, and can insert data"
          
          if (results.tables.structure?.hasMetadataColumn) {
            results.recommendation = "Check the reservation flow - ensure metadata is properly formatted as JSONB"
          } else {
            results.recommendation = "The subscribers table exists but may be missing required columns"
          }
        } else {
          results.diagnosis = "⚠️ Connection working, table exists, but INSERT operation failed" 
          results.recommendation = "Check RLS policies or permissions for the insert operation"
        }
      } else {
        results.diagnosis = "⚠️ Connection working but subscribers table doesn't exist"
        results.recommendation = "Create the table using the setup endpoint or manual SQL"
      }
    } else {
      results.diagnosis = "❌ Connection to Supabase failed" 
      results.recommendation = "Check Supabase URL, API key, or network connectivity"
    }
    
    // Return the detailed results
    return NextResponse.json(results)
  } catch (error) {
    console.error('Exception in debug-supabase:', error)
    return NextResponse.json({
      success: false,
      message: 'Debug process failed with an exception',
      error: error instanceof Error ? error.message : String(error),
      partialResults: results
    }, { status: 500 })
  }
} 