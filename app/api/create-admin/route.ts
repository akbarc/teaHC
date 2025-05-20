import { NextResponse } from 'next/server'
import { createClient, User } from '@supabase/supabase-js'

const ADMIN_EMAIL = 'admin@tryteahc.com'
const ADMIN_PASSWORD = '2000Akbar!'

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase credentials')
      return NextResponse.json(
        { 
          success: false, 
          message: 'Missing Supabase credentials',
          error: 'Configuration error'
        },
        { status: 500 }
      )
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    // Try to sign in first to check if user exists
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD
    })

    // If sign in succeeds, user exists with correct password
    if (signInData?.user) {
      return NextResponse.json({ 
        success: true, 
        message: 'Admin user exists and is properly configured',
        userId: signInData.user.id
      })
    }

    // If user doesn't exist or password is wrong, create/update the user
    const { data, error: createError } = await supabase.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      email_confirm: true,
      user_metadata: {
        role: 'admin'
      }
    })

    if (createError) {
      // If user exists but password is wrong, update the password
      if (createError.message.includes('already registered')) {
        const user = data?.user as unknown as User | undefined
        if (!user?.id) {
          throw new Error('User ID not found')
        }

        const { error: updateError } = await supabase.auth.admin.updateUserById(
          user.id,
          { password: ADMIN_PASSWORD }
        )
        
        if (updateError) {
          console.error('Error updating password:', updateError)
          throw updateError
        }
        
        return NextResponse.json({ 
          success: true, 
          message: 'Admin password updated successfully',
          userId: user.id
        })
      }
      
      console.error('Error creating admin user:', createError)
      throw createError
    }

    if (!data?.user) {
      throw new Error('No user data returned after creation')
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Admin user created successfully',
      userId: data.user.id
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