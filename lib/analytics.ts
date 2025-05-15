import { track as vercelTrack } from '@vercel/analytics'

export const track = (eventName: string, properties?: Record<string, any>) => {
  try {
    vercelTrack(eventName, properties)
  } catch (error) {
    // Silently fail in development or if analytics is not available
    console.debug('Analytics error:', error)
  }
} 