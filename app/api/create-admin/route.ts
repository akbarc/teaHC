import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    // Create admin user
    const { data, error } = await supabase.auth.signUp({
      email: 'admin@tryteahc.com',
      password: '2000Akbar!',
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/login`
      }
    })

    if (error) {
      console.error('Error creating admin user:', error)
      return NextResponse.json({
        success: false,
        message: 'Failed to create admin user',
        error: error.message
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Admin user created successfully',
      data
    })
  } catch (error) {
    console.error('Error in create-admin route:', error)
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
} 