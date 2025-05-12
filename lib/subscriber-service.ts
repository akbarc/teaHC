import { supabase } from './supabase'

export interface SubscriberData {
  email: string
  source?: string
  name?: string
  ip_address?: string
  user_agent?: string
}

/**
 * Add an email subscriber to the Supabase 'subscribers' table
 */
export async function addSubscriberToSupabase(subscriber: SubscriberData) {
  try {
    console.log('🔵 Adding subscriber to Supabase...', {
      email: subscriber.email,
      source: subscriber.source
    })

    // Check if the subscribers table exists
    const { error: tableCheck } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)

    if (tableCheck) {
      console.error('❌ Supabase subscribers table check failed:', tableCheck)
      console.log('This may be normal if the table does not exist yet.')
      // Return an error indicating the table needs to be created
      return { error: 'subscribers table does not exist', needsSetup: true }
    }
    
    // Add timestamp
    const subscriberWithTimestamp = {
      ...subscriber,
      created_at: new Date().toISOString()
    }

    // Log the exact data being sent to Supabase
    console.log('📦 Data being sent to Supabase:', JSON.stringify(subscriberWithTimestamp, null, 2))

    const { data, error } = await supabase
      .from('subscribers')
      .insert([subscriberWithTimestamp])
      .select()

    if (error) {
      console.error('❌ Error inserting subscriber to Supabase:', error)
      return { error }
    }

    console.log('✅ Successfully inserted subscriber to Supabase:', data)
    return { data }
  } catch (error) {
    console.error('❌❌ Exception adding subscriber to Supabase:', error)
    return { error }
  }
}

/**
 * Check if a subscriber email already exists
 */
export async function checkSubscriberExists(email: string) {
  try {
    const { data, error } = await supabase
      .from('subscribers')
      .select('email')
      .eq('email', email)
      .maybeSingle()

    if (error) {
      console.error('❌ Error checking if subscriber exists:', error)
      return { error }
    }

    return { exists: !!data, data }
  } catch (error) {
    console.error('❌❌ Exception checking if subscriber exists:', error)
    return { error, exists: false }
  }
}

/**
 * Setup the subscribers table if it doesn't exist
 * This function can be called from an admin panel or setup script
 */
export async function setupSubscribersTable() {
  try {
    // This requires RLS policies to be configured properly in Supabase
    // Typically, table creation would be done through the Supabase dashboard
    // This is just a fallback

    // Check for table first
    const { error: checkError } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)

    // If no error, table exists
    if (!checkError) {
      return { message: 'Table already exists' }
    }

    // Create table (requires proper permissions)
    // In most cases, manually creating the table in Supabase dashboard is preferred
    const { error } = await supabase.rpc('create_subscribers_table')

    if (error) {
      console.error('❌ Failed to create subscribers table:', error)
      return { 
        error,
        message: 'Failed to create subscribers table. Please create it manually in Supabase dashboard.'
      }
    }

    return { message: 'Successfully created subscribers table' }
  } catch (error) {
    console.error('❌❌ Exception setting up subscribers table:', error)
    return { error }
  }
} 