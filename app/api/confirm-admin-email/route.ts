import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  // Make sure we have Supabase credentials
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json({ success: false, message: 'Missing Supabase credentials' }, { status: 500 })
  }

  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 })
    }

    // If we have a service role key, use it for admin operations
    if (supabaseServiceRoleKey) {
      const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      })

      // First, try to find the user
      // Instead of using filters which aren't fully supported in the TS types,
      // let's get all users and filter manually
      const { data, error: listError } = await supabaseAdmin.auth.admin.listUsers()

      if (listError) {
        console.error('Error listing users:', listError)
        return NextResponse.json({ success: false, message: 'Failed to find user', error: listError.message }, { status: 500 })
      }

      // Find the user with the matching email
      const user = data.users.find(u => u.email === email)

      if (!user) {
        // User not found, create with auto confirmation
        const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
          email,
          password: '2000Akbar!',
          email_confirm: true,
          user_metadata: { role: 'admin' }
        })

        if (createError) {
          console.error('Error creating user:', createError)
          return NextResponse.json({ success: false, message: 'Failed to create user', error: createError.message }, { status: 500 })
        }

        return NextResponse.json({ success: true, message: 'User created and confirmed' })
      } else {
        // User found, confirm email if not already confirmed
        if (!user.email_confirmed_at) {
          const { error: updateError } = await supabaseAdmin.auth.admin.updateUserById(
            user.id,
            { email_confirm: true }
          )

          if (updateError) {
            console.error('Error confirming email:', updateError)
            return NextResponse.json({ success: false, message: 'Failed to confirm email', error: updateError.message }, { status: 500 })
          }
        }

        return NextResponse.json({ success: true, message: 'Email confirmed' })
      }
    } else {
      // No service role key, can't perform admin operations
      return NextResponse.json({ success: false, message: 'Service role key is required for this operation' }, { status: 500 })
    }
  } catch (error: any) {
    console.error('Error confirming admin email:', error)
    return NextResponse.json({ success: false, message: 'Internal server error', error: error.message }, { status: 500 })
  }
} 