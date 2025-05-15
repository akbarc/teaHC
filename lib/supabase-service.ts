import { supabase } from './supabase'

// Type for reservation data
export type ReservationData = {
  timestamp: string
  fullName: string
  email: string
  phone: string
  address: string
  moveQuantity: number
  repairQuantity: number
  rapidQuantity: number
  bundleQuantity: number
  totalCost: number
  notes: string
}

/**
 * Ensure the reservations table exists
 */
export async function ensureReservationsTableExists() {
  try {
    console.log('Checking if reservations table exists...')
    
    // First check if the table exists by attempting to query it
    const { error } = await supabase
      .from('reservations')
      .select('count', { count: 'exact', head: true })
    
    // If there's no error, the table exists
    if (!error) {
      console.log('Reservations table exists')
      return { success: true }
    }
    
    console.error('Error checking table existence:', error)
    
    // If the table doesn't exist, we'd typically use SQL here to create it
    // However, with Supabase, it's better to create the table through the Supabase dashboard
    // This provides proper UI for setting up indexes, relationships, etc.
    
    return { 
      success: false, 
      message: 'Reservations table does not exist or is not accessible',
      error 
    }
  } catch (error) {
    console.error('Exception checking reservations table:', error)
    return { success: false, error }
  }
}

/**
 * Add a reservation to the Supabase 'reservations' table
 */
export async function addReservationToSupabase(reservation: ReservationData) {
  try {
    console.log('🔵 Adding reservation to Supabase...', { 
      name: reservation.fullName,
      email: reservation.email,
      date: reservation.timestamp
    })
    
    // First ensure the table exists
    const tableCheck = await ensureReservationsTableExists()
    if (!tableCheck.success) {
      console.error('❌ Supabase table check failed:', tableCheck.error)
      return tableCheck
    }
    
    console.log('✅ Table exists, proceeding with insert...')
    
    // Log the exact data being sent to Supabase
    console.log('📦 Data being sent to Supabase:', JSON.stringify(reservation, null, 2))
    
    const { data, error } = await supabase
      .from('reservations')
      .insert([reservation])
      .select()
    
    if (error) {
      console.error('❌ Error inserting reservation to Supabase:', error)
      return { success: false, error }
    }
    
    console.log('✅ Successfully inserted reservation to Supabase:', data)
    return { success: true, data }
  } catch (error) {
    console.error('❌❌ Exception adding reservation to Supabase:', error)
    return { success: false, error }
  }
}

/**
 * Get all reservations from the Supabase 'reservations' table
 */
export async function getReservations() {
  try {
    console.log('🔍 Fetching reservations from Supabase...')
    
    // First ensure the table exists
    const tableCheck = await ensureReservationsTableExists()
    if (!tableCheck.success) {
      console.error('❌ Table check failed when fetching reservations:', tableCheck.error)
      return tableCheck
    }
    
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .order('timestamp', { ascending: false })
    
    if (error) {
      console.error('❌ Error fetching reservations from Supabase:', error)
      return { success: false, error }
    }
    
    // Filter out test data (emails containing 'test')
    const filteredData = (data || []).filter(
      (row) => !row.email?.toLowerCase().includes('test')
    )
    
    console.log(`📋 Retrieved ${filteredData.length} reservations from Supabase (filtered)`)
    return { success: true, data: filteredData }
  } catch (error) {
    console.error('❌❌ Exception fetching reservations from Supabase:', error)
    return { success: false, error }
  }
}

/**
 * Check if the Supabase connection is working and the reservations table exists
 */
export async function testSupabaseConnection() {
  try {
    // First test the basic connection by getting Supabase service status
    console.log('🔄 Testing Supabase connection...')
    
    // Check if the table exists
    const tableCheck = await ensureReservationsTableExists()
    if (!tableCheck.success) {
      console.error('❌ Table check failed during connection test:', tableCheck.error)
      return {
        success: false,
        message: 'Supabase connection successful but reservations table does not exist',
        error: tableCheck.error
      }
    }
    
    console.log('✅ Table exists and connection is working')
    return {
      success: true,
      message: 'Successfully connected to Supabase and verified table exists'
    }
  } catch (error) {
    console.error('❌❌ Exception testing Supabase connection:', error)
    return {
      success: false,
      message: 'Failed to connect to Supabase: Exception occurred',
      error: error instanceof Error ? error.message : String(error)
    }
  }
} 