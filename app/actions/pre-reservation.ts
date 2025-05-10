'use server';

import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';

const preReservationSchema = z.object({
  email: z.string().email(),
  landingPage: z.string(),
  metadata: z.record(z.unknown()).optional(),
});

export type PreReservationFormData = z.infer<typeof preReservationSchema>;

export async function submitPreReservation(formData: PreReservationFormData) {
  try {
    // Validate the form data
    const validatedData = preReservationSchema.parse(formData);

    // Create Supabase client
    const supabase = await createClient();

    // Check if email already exists
    const { data: existingReservation } = await supabase
      .from('pre_reservations')
      .select('id')
      .eq('email', validatedData.email)
      .single();

    if (existingReservation) {
      return {
        success: false,
        error: 'You have already reserved your spot!',
      };
    }

    // Insert the pre-reservation
    const { error } = await supabase.from('pre_reservations').insert({
      email: validatedData.email,
      landing_page: validatedData.landingPage,
      metadata: validatedData.metadata || {},
    });

    if (error) {
      console.error('Error submitting pre-reservation:', error);
      return {
        success: false,
        error: 'Failed to submit reservation. Please try again.',
      };
    }

    return {
      success: true,
      message: 'Thank you for your reservation! We will contact you soon.',
    };
  } catch (error) {
    console.error('Error in submitPreReservation:', error);
    return {
      success: false,
      error: 'Invalid form data. Please check your input.',
    };
  }
} 