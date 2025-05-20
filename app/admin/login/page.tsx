"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

const ADMIN_PASSWORD = '2000Akbar!' // This should be moved to an environment variable in production
const ADMIN_EMAIL = 'admin@tryteahc.com'

// Create a single Supabase client instance outside of the component to avoid multiple instances
const supabase = typeof window !== 'undefined' ? createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
) : null

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [supabaseInitialized, setSupabaseInitialized] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Only run on client side
    if (!supabase) return

    // Check if environment variables are available
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase environment variables')
      toast.error('Configuration error. Please contact support.')
      return
    }

    // Verify Supabase connection
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        if (error) throw error
        setSupabaseInitialized(true)
      } catch (error) {
        console.error('Failed to initialize Supabase client:', error)
        toast.error('Failed to initialize authentication. Please try again.')
      }
    }

    checkConnection()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase || !supabaseInitialized) {
      toast.error('Authentication system not ready. Please try again.')
      return
    }

    setLoading(true)
    console.log('Starting login process...')

    try {
      // Simple password check
      if (password !== ADMIN_PASSWORD) {
        throw new Error('Invalid password')
      }

      console.log('Password verified, attempting Supabase authentication...')
      
      // Try to sign in with the admin account
      const { data, error } = await supabase.auth.signInWithPassword({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD
      })

      if (error) {
        console.error('Supabase auth error:', error)
        
        // Handle "Email not confirmed" error or other auth errors
        if (error.message.includes('Email not confirmed') || error.message.includes('Invalid login credentials')) {
          // Attempt to create/update admin user with auto_confirm set to true
          const { error: createError } = await supabase.auth.admin.createUser({
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD,
            email_confirm: true,
            user_metadata: { role: 'admin' }
          })
          
          if (createError) {
            // If we can't create as admin, try regular signup
            console.log('Admin create failed, trying regular signup:', createError)
            
            // Try regular signup with auto confirmation
            const { error: signUpError } = await supabase.auth.signUp({
              email: ADMIN_EMAIL,
              password: ADMIN_PASSWORD,
              options: {
                data: { role: 'admin' },
                emailRedirectTo: `${window.location.origin}/admin`
              }
            })
            
            if (signUpError) {
              throw signUpError
            }
            
            // Try to manually confirm the email
            try {
              // This is a last resort - use a direct API call to confirm the email
              const response = await fetch('/api/confirm-admin-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: ADMIN_EMAIL })
              })
              
              if (!response.ok) {
                throw new Error('Failed to confirm email')
              }
            } catch (confirmError) {
              console.error('Email confirmation failed:', confirmError)
            }
            
            // Try signing in again
            const { error: retryError } = await supabase.auth.signInWithPassword({
              email: ADMIN_EMAIL,
              password: ADMIN_PASSWORD
            })
            
            if (retryError) {
              throw retryError
            }
          }
        } else {
          throw error
        }
      }

      // Success! Let's get the user
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        console.error('No user data returned from Supabase')
        throw new Error('Authentication failed')
      }

      console.log('Login successful, user:', user.id)
      toast.success('Login successful')
      
      // Wait a moment for the session to be established
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Navigate to admin dashboard
      console.log('Navigating to admin dashboard...')
      router.push('/admin')
      router.refresh()
    } catch (error: any) {
      console.error('Login failed:', error)
      if (error.message === 'Invalid password') {
        toast.error('Invalid password')
      } else {
        toast.error('Login failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Access
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter admin password to continue
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                placeholder="Enter admin password"
                disabled={!supabaseInitialized || loading}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              disabled={!supabaseInitialized || loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {!supabaseInitialized ? 'Initializing...' : loading ? 'Verifying...' : 'Access Dashboard'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 