import { NextResponse } from 'next/server'
import { createClient, User } from '@supabase/supabase-js'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Missing Supabase credentials')
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    // Create admin user with hardcoded email and specified password
    const { data, error } = await supabase.auth.signUp({
      email: 'admin@tryteahc.com',
      password: '2000Akbar!',
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/admin`
      }
    })

    if (error) {
      // If user already exists, try to update password
      if (error.message.includes('already registered')) {
        const user = data?.user as unknown as User | undefined
        if (!user?.id) {
          throw new Error('User ID not found')
        }
        
        const { error: updateError } = await supabase.auth.admin.updateUserById(
          user.id,
          { password: '2000Akbar!' }
        )
        
        if (updateError) {
          throw updateError
        }
        
        return NextResponse.json({ 
          success: true, 
          message: 'Admin password updated successfully' 
        })
      }
      throw error
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Admin user created successfully' 
    })
  } catch (error: any) {
    console.error('Error in create-admin route:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error.message 
      },
      { status: 500 }
    )
  }
} 