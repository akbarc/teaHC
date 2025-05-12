import { supabase } from './supabase'

export interface SubscriberData {
  email: string
  source?: string
  name?: string
  ip_address?: string
  user_agent?: string
}

export interface ReservationData {
  email: string
  products: any
  shipping: any
  totalCost: number
  reservedAt: string
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
      return { 
        error: 'Subscribers table does not exist',
        needsSetup: true
      }
    }

    // Check if the subscriber already exists
    const { data: existingSubscriber } = await supabase
      .from('subscribers')
      .select('*')
      .eq('email', subscriber.email)
      .maybeSingle()

    if (existingSubscriber) {
      console.log('⚠️ Subscriber already exists:', existingSubscriber)
      // Update the existing subscriber
      const { error: updateError } = await supabase
        .from('subscribers')
        .update({
          source: subscriber.source || existingSubscriber.source,
          user_agent: subscriber.user_agent || existingSubscriber.user_agent,
        })
        .eq('email', subscriber.email)

      if (updateError) {
        console.error('❌ Error updating subscriber:', updateError)
        return { error: updateError.message }
      }

      return { success: true, message: 'Subscriber updated' }
    }

    // Insert the new subscriber
    const { error: insertError } = await supabase
      .from('subscribers')
      .insert([
        {
          email: subscriber.email,
          source: subscriber.source,
          name: subscriber.name,
          ip_address: subscriber.ip_address,
          user_agent: subscriber.user_agent,
        },
      ])

    if (insertError) {
      console.error('❌ Error adding subscriber:', insertError)
      return { error: insertError.message }
    }

    console.log('✅ Subscriber added successfully!')
    return { success: true }
  } catch (error) {
    console.error('❌ Exception in addSubscriberToSupabase:', error)
    return { error: error instanceof Error ? error.message : String(error) }
  }
}

/**
 * Check if a subscriber with the given email already exists
 */
export async function checkSubscriberExists(email: string) {
  try {
    // Check if the subscribers table exists
    const { error: tableCheck } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)

    if (tableCheck) {
      return { 
        error: 'Subscribers table does not exist',
        exists: false
      }
    }

    // Check if the subscriber exists
    const { data, error } = await supabase
      .from('subscribers')
      .select('email')
      .eq('email', email)
      .maybeSingle()

    if (error) {
      console.error('❌ Error checking subscriber:', error)
      return { error: error.message, exists: false }
    }

    return { exists: !!data }
  } catch (error) {
    console.error('❌ Exception in checkSubscriberExists:', error)
    return { error: error instanceof Error ? error.message : String(error), exists: false }
  }
}

/**
 * Update a subscriber's reservation status and details
 */
export async function updateSubscriberReservation(email: string, reservationData: ReservationData) {
  try {
    console.log('🔵 Updating subscriber reservation...', { email })

    // Check if the subscribers table exists
    const { error: tableCheck } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)

    if (tableCheck) {
      console.error('❌ Supabase subscribers table check failed:', tableCheck)
      return { 
        error: 'Subscribers table does not exist',
        needsSetup: true
      }
    }

    // Check if the subscriber exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('subscribers')
      .select('*')
      .eq('email', email)
      .maybeSingle()

    if (checkError) {
      console.error('❌ Error checking subscriber:', checkError)
      return { error: checkError.message }
    }

    if (!existingSubscriber) {
      console.log('⚠️ Subscriber does not exist, creating new record')
      // Insert the new subscriber with reservation details
      const { error: insertError } = await supabase
        .from('subscribers')
        .insert([
          {
            email: email,
            reservation_completed: true,
            metadata: {
              reservation: reservationData
            }
          },
        ])

      if (insertError) {
        console.error('❌ Error adding subscriber with reservation:', insertError)
        return { error: insertError.message }
      }
    } else {
      // Update the existing subscriber
      const { error: updateError } = await supabase
        .from('subscribers')
        .update({
          reservation_completed: true,
          metadata: {
            ...existingSubscriber.metadata,
            reservation: reservationData
          }
        })
        .eq('email', email)

      if (updateError) {
        console.error('❌ Error updating subscriber reservation:', updateError)
        return { error: updateError.message }
      }
    }

    console.log('✅ Subscriber reservation updated successfully!')
    return { success: true }
  } catch (error) {
    console.error('❌ Exception in updateSubscriberReservation:', error)
    return { error: error instanceof Error ? error.message : String(error) }
  }
}

/**
 * Setup the subscribers table in Supabase
 * This should only be called from a secure admin endpoint
 */
export async function setupSubscribersTable() {
  try {
    console.log('🔵 Setting up subscribers table...')
    
    // Check if the table already exists
    const { error: tableCheckError } = await supabase
      .from('subscribers')
      .select('*')
      .limit(1)
    
    if (!tableCheckError) {
      console.log('✅ Subscribers table already exists')
      return { 
        success: true, 
        message: 'Table already exists' 
      }
    }
    
    // Create the table using RPC (would typically be done through migrations or SQL)
    // This is a simplified example - in production you should use proper migrations
    const { error } = await supabase.rpc('setup_subscribers_table')
    
    if (error) {
      console.error('❌ Error setting up subscribers table:', error)
      return { 
        error: error.message,
        message: 'Failed to create table. Please run the SQL script manually.'
      }
    }
    
    console.log('✅ Subscribers table created successfully!')
    return { success: true }
  } catch (error) {
    console.error('❌ Exception in setupSubscribersTable:', error)
    return { 
      error: error instanceof Error ? error.message : String(error),
      message: 'Exception occurred. Please run the SQL script manually.'
    }
  }
} 