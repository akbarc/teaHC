import { supabase } from '../supabase'
import { ContactSubmission } from '../contact-service'

export interface ContactSubmissionWithId extends ContactSubmission {
  id: string
  created_at: string
  status: 'new' | 'in_progress' | 'resolved' | 'archived'
  notes?: string
}

export type ContactSubmissionStatus = 'new' | 'in_progress' | 'resolved' | 'archived'

export async function getContactSubmissions(page = 1, pageSize = 10, status?: ContactSubmissionStatus) {
  try {
    let query = supabase
      .from('contact_submissions')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })

    if (status) {
      query = query.eq('status', status)
    }

    const { data, error, count } = await query
      .range((page - 1) * pageSize, page * pageSize - 1)

    if (error) throw error

    return {
      submissions: data as ContactSubmissionWithId[],
      totalCount: count || 0,
      success: true
    }
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return {
      success: false,
      error: 'Failed to fetch contact submissions'
    }
  }
}

export async function updateSubmissionStatus(id: string, status: ContactSubmissionStatus, notes?: string) {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .update({ status, notes })
      .eq('id', id)

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error('Error updating submission status:', error)
    return {
      success: false,
      error: 'Failed to update submission status'
    }
  }
}

export async function deleteSubmission(id: string) {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .delete()
      .eq('id', id)

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error('Error deleting submission:', error)
    return {
      success: false,
      error: 'Failed to delete submission'
    }
  }
} 