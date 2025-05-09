import { createClient } from '@supabase/supabase-js'

// Supabase client with the provided URL and anon key
const supabaseUrl = 'https://oximmrzfhtkdgfykrtjy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aW1tcnpmaHRrZGdmeWtydGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NTU1NjMsImV4cCI6MjA2MjMzMTU2M30.ieWFaNGnwiSngyEYiwmg6JimpCe16OlnVZJhymljcKw'

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true
  }
}) 