import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    console.log('🔧 Attempting to fix subscribers table...')
    
    // Create a fresh client with admin privileges if available
    const supabaseUrl = process.env.SUPABASE_URL || 'https://oximmrzfhtkdgfykrtjy.supabase.co'
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aW1tcnpmaHRrZGdmeWtydGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NTU1NjMsImV4cCI6MjA2MjMzMTU2M30.ieWFaNGnwiSngyEYiwmg6JimpCe16OlnVZJhymljcKw'
    
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: false
      }
    })
    
    console.log('Testing Supabase connection...')
    // First check if we can access the table
    const { data: tableData, error: tableError } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)
    
    if (tableError && tableError.message.includes('does not exist')) {
      console.error('Table does not exist. Creating from scratch')
      return NextResponse.json({
        success: false,
        message: 'Subscribers table does not exist. Please create it first.',
        error: tableError.message
      }, { status: 500 })
    } else if (tableError) {
      console.error('Error accessing table:', tableError)
      return NextResponse.json({
        success: false,
        message: 'Error accessing subscribers table',
        error: tableError.message
      }, { status: 500 })
    }
    
    // We can access the table, check columns
    const currentColumns = tableData && tableData.length > 0 ? Object.keys(tableData[0]) : []
    console.log('Current columns:', currentColumns)
    
    const operations = []
    
    // Use simple REST API calls to update the table if needed
    // 1. Add metadata column if it doesn't exist
    if (!currentColumns.includes('metadata')) {
      console.log('Adding metadata column...')
      
      // First try: Use custom SQL to add the column via a direct HTTP request
      try {
        const requestBody = {
          command: `ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}'::jsonb`
        }
        
        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseKey}`,
            'apikey': supabaseKey
          },
          body: JSON.stringify(requestBody)
        })
        
        const result = await response.json()
        operations.push({
          column: 'metadata',
          method: 'direct_http',
          success: response.ok,
          result: result
        })
      } catch (e) {
        console.error('Error adding metadata column via HTTP:', e)
        operations.push({
          column: 'metadata',
          method: 'direct_http',
          success: false,
          error: e instanceof Error ? e.message : String(e)
        })
      }
    } else {
      operations.push({
        column: 'metadata',
        exists: true
      })
    }
    
    // 2. Add reservation_completed column if it doesn't exist
    if (!currentColumns.includes('reservation_completed')) {
      console.log('Adding reservation_completed column...')
      
      // Try direct HTTP request
      try {
        const requestBody = {
          command: `ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS reservation_completed BOOLEAN DEFAULT FALSE`
        }
        
        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseKey}`,
            'apikey': supabaseKey
          },
          body: JSON.stringify(requestBody)
        })
        
        const result = await response.json()
        operations.push({
          column: 'reservation_completed',
          method: 'direct_http',
          success: response.ok,
          result: result
        })
      } catch (e) {
        console.error('Error adding reservation_completed column via HTTP:', e)
        operations.push({
          column: 'reservation_completed',
          method: 'direct_http',
          success: false,
          error: e instanceof Error ? e.message : String(e)
        })
      }
    } else {
      operations.push({
        column: 'reservation_completed',
        exists: true
      })
    }
    
    // 3. Try to create a helper function
    try {
      console.log('Creating helper function...')
      const requestBody = {
        command: `
          CREATE OR REPLACE FUNCTION update_subscriber_reservation(
            p_email TEXT,
            p_reservation_data JSONB
          ) RETURNS VOID AS $$
          BEGIN
            UPDATE subscribers
            SET reservation_completed = TRUE,
                metadata = COALESCE(metadata, '{}'::jsonb) || p_reservation_data,
                updated_at = NOW()
            WHERE email = p_email;
            
            IF NOT FOUND THEN
              INSERT INTO subscribers (email, metadata, reservation_completed)
              VALUES (p_email, p_reservation_data, TRUE);
            END IF;
          END;
          $$ LANGUAGE plpgsql;
        `
      }
      
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseKey}`,
          'apikey': supabaseKey
        },
        body: JSON.stringify(requestBody)
      })
      
      const result = await response.json()
      operations.push({
        action: 'create_helper_function',
        method: 'direct_http',
        success: response.ok,
        result: result
      })
    } catch (e) {
      console.error('Error creating helper function:', e)
      operations.push({
        action: 'create_helper_function',
        method: 'direct_http',
        success: false,
        error: e instanceof Error ? e.message : String(e)
      })
    }
    
    // Check final structure
    const { data: finalData, error: finalError } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)
    
    const finalColumns = finalData && finalData.length > 0 ? Object.keys(finalData[0]) : []
    
    return NextResponse.json({
      success: true,
      message: 'Fix operations completed',
      initialColumns: currentColumns,
      finalColumns,
      operations,
      hasMetadataColumn: finalColumns.includes('metadata'),
      hasReservationCompletedColumn: finalColumns.includes('reservation_completed')
    })
  } catch (error) {
    console.error('Error in fix-subscribers-table API:', error)
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 