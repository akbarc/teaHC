import { NextRequest, NextResponse } from 'next/server'
import { setupSubscribersTable } from '@/lib/subscriber-service'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  try {
    // In a production environment, this endpoint should be secured
    // Here we'd check for an admin token or other form of authentication
    
    // First try using our helper function
    const result = await setupSubscribersTable()
    
    if (result.error && !result.success) {
      console.log('Trying direct SQL as fallback')
      
      // If the helper failed, try executing SQL directly
      const { error: sqlError } = await supabase.from('subscribers').select('count').limit(1)
      
      // If we got an error, the table likely doesn't exist, so create it
      if (sqlError) {
        const createTableSQL = `
          CREATE TABLE IF NOT EXISTS public.subscribers (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            email TEXT NOT NULL UNIQUE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            source TEXT,
            name TEXT,
            ip_address TEXT,
            user_agent TEXT,
            metadata JSONB DEFAULT '{}'::JSONB,
            is_verified BOOLEAN DEFAULT FALSE,
            reservation_completed BOOLEAN DEFAULT FALSE
          );
          
          -- Add indexes
          CREATE INDEX IF NOT EXISTS subscribers_email_idx ON public.subscribers (email);
          CREATE INDEX IF NOT EXISTS subscribers_source_idx ON public.subscribers (source);
        `
        
        // Execute the SQL directly
        const { error: createError } = await supabase.rpc('exec_sql', { sql: createTableSQL })
        
        if (createError) {
          return NextResponse.json({
            success: false,
            message: 'Could not create table using direct SQL',
            error: createError.message
          }, { status: 500 })
        }
        
        return NextResponse.json({
          success: true,
          message: 'Table created using direct SQL'
        })
      }
      
      // Table already exists
      return NextResponse.json({
        success: true,
        message: 'Table already exists (checked via direct SQL)'
      })
    }
    
    return NextResponse.json({
      success: result.success,
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