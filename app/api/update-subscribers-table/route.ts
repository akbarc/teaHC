import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    console.log('🔄 Updating subscribers table schema...')
    
    // First get the current columns
    const { data, error } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)
    
    if (error) {
      return NextResponse.json({
        success: false,
        message: 'Error checking table structure',
        error: error.message
      }, { status: 500 })
    }
    
    // Extract column info
    const existingColumns = data && data.length > 0 ? Object.keys(data[0]) : []
    console.log('Existing columns:', existingColumns)
    
    // Collect changes made
    const changes = []
    
    // Add missing columns
    // This requires direct SQL execution
    
    // 1. Add metadata column if missing
    if (!existingColumns.includes('metadata')) {
      try {
        console.log('Adding metadata column...')
        const { error: addMetadataError } = await supabase.rpc('alter_table', {
          sql: 'ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT \'{}\''
        })
        
        if (addMetadataError) {
          console.error('Error adding metadata column:', addMetadataError)
          // Try direct SQL
          const { error: directError } = await supabase.rpc('exec_sql', {
            sql: 'ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT \'{}\''
          })
          
          if (directError) {
            console.error('Failed with direct SQL too:', directError)
            changes.push({
              column: 'metadata',
              success: false,
              error: directError.message
            })
          } else {
            changes.push({
              column: 'metadata',
              success: true,
              method: 'direct_sql'
            })
          }
        } else {
          changes.push({
            column: 'metadata',
            success: true,
            method: 'alter_table'
          })
        }
      } catch (e) {
        console.error('Exception adding metadata column:', e)
        changes.push({
          column: 'metadata',
          success: false,
          error: e instanceof Error ? e.message : String(e)
        })
      }
    } else {
      changes.push({
        column: 'metadata',
        success: true,
        existed: true
      })
    }
    
    // 2. Add reservation_completed column if missing
    if (!existingColumns.includes('reservation_completed')) {
      try {
        console.log('Adding reservation_completed column...')
        const { error: addReservationError } = await supabase.rpc('alter_table', {
          sql: 'ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS reservation_completed BOOLEAN DEFAULT FALSE'
        })
        
        if (addReservationError) {
          console.error('Error adding reservation_completed column:', addReservationError)
          // Try direct SQL
          const { error: directError } = await supabase.rpc('exec_sql', {
            sql: 'ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS reservation_completed BOOLEAN DEFAULT FALSE'
          })
          
          if (directError) {
            console.error('Failed with direct SQL too:', directError)
            changes.push({
              column: 'reservation_completed',
              success: false,
              error: directError.message
            })
          } else {
            changes.push({
              column: 'reservation_completed',
              success: true,
              method: 'direct_sql'
            })
          }
        } else {
          changes.push({
            column: 'reservation_completed',
            success: true,
            method: 'alter_table'
          })
        }
      } catch (e) {
        console.error('Exception adding reservation_completed column:', e)
        changes.push({
          column: 'reservation_completed',
          success: false,
          error: e instanceof Error ? e.message : String(e)
        })
      }
    } else {
      changes.push({
        column: 'reservation_completed',
        success: true,
        existed: true
      })
    }
    
    // Try to create a supabase function to help with updates
    try {
      console.log('Creating helper function...')
      const createFunction = `
        CREATE OR REPLACE FUNCTION update_subscribers_table() RETURNS void AS $$
        BEGIN
          -- Add columns if they don't exist
          ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}';
          ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS reservation_completed BOOLEAN DEFAULT FALSE;
          ALTER TABLE subscribers ADD COLUMN IF NOT EXISTS test_field TEXT;
        END;
        $$ LANGUAGE plpgsql;
      `
      
      const { error: functionError } = await supabase.rpc('exec_sql', {
        sql: createFunction
      })
      
      if (!functionError) {
        console.log('Helper function created successfully')
        // Try to execute the function
        const { error: execError } = await supabase.rpc('exec_sql', {
          sql: 'SELECT update_subscribers_table();'
        })
        
        if (!execError) {
          console.log('Helper function executed successfully')
          changes.push({
            action: 'create_helper_function',
            success: true
          })
        }
      }
    } catch (e) {
      console.warn('Exception creating helper function:', e)
      // This is just a nice-to-have, so continue
    }
    
    // Check if changes were made
    const successfulChanges = changes.filter(change => change.success && !change.existed)
    const isSuccess = successfulChanges.length > 0 || changes.every(change => change.success)
    
    // Check final structure
    const { data: finalData, error: finalError } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)
    
    const finalColumns = finalData && finalData.length > 0 ? Object.keys(finalData[0]) : 
                         (finalError ? [] : existingColumns)
    
    return NextResponse.json({
      success: isSuccess,
      message: isSuccess ? 'Table schema updated successfully' : 'Failed to update table schema',
      initialColumns: existingColumns,
      finalColumns,
      changes,
      hasMetadataColumn: finalColumns.includes('metadata'),
      hasReservationCompletedColumn: finalColumns.includes('reservation_completed')
    })
  } catch (error) {
    console.error('Error in update-subscribers-table API:', error)
    return NextResponse.json({
      success: false,
      message: 'An unexpected error occurred',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 