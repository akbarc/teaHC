import { supabase } from './supabase'

export interface ContactSubmission {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert([data])

    if (error) {
      console.error('Error submitting contact form:', error)
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error('Exception in contact form submission:', error)
    return { 
      success: false, 
      error: 'Failed to submit contact form. Please try again.' 
    }
  }
} 