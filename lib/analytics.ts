import { track as vercelTrack } from '@vercel/analytics'

export const track = (eventName: string, properties?: Record<string, any>) => {
  // Track with Vercel Analytics
  vercelTrack(eventName, properties)

  // Add any additional tracking providers here
  // For example: Google Analytics, Facebook Pixel, etc.
} 