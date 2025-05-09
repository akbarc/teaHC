import { Metadata } from 'next'

// Base metadata configuration for the entire site
export const baseMetadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://teahcwellness.com'
  ),
  title: {
    template: '%s | TeaHC Wellness',
    default: 'TeaHC Wellness | Revolutionary Nano-Cannabinoid Products',
  },
  description:
    'TeaHC offers revolutionary nano-cannabinoid products for mobility, recovery, and rapid relief. Our scientifically formulated products provide superior bioavailability for maximum effectiveness.',
  keywords: [
    'TeaHC',
    'cannabinoid',
    'nano-cannabinoid',
    'mobility',
    'anti-inflammatory',
    'wellness',
    'CBD',
    'CBG',
    'THCV',
    'health',
    'recovery',
  ],
  authors: [{ name: 'TeaHC Wellness' }],
  creator: 'TeaHC Wellness',
  publisher: 'TeaHC Wellness',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://teahcwellness.com',
    title: 'TeaHC Wellness | Revolutionary Nano-Cannabinoid Products',
    description:
      'TeaHC offers revolutionary nano-cannabinoid products for mobility, recovery, and rapid relief. Our scientifically formulated products provide superior bioavailability for maximum effectiveness.',
    siteName: 'TeaHC Wellness',
    images: [
      {
        url: 'https://teahcwellness.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TeaHC Wellness Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeaHC Wellness | Revolutionary Nano-Cannabinoid Products',
    description:
      'TeaHC offers revolutionary nano-cannabinoid products for mobility, recovery, and rapid relief. Our scientifically formulated products provide superior bioavailability for maximum effectiveness.',
    images: ['https://teahcwellness.com/twitter-image.jpg'],
    creator: '@teahcwellness',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Generate metadata for specific pages
export function generateMetadata(
  title: string,
  description?: string,
  imageUrl?: string,
  imageAlt?: string
): Metadata {
  const desc = description || baseMetadata.description as string
  const ogImages = baseMetadata.openGraph?.images || []
  
  const image = imageUrl
    ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt || 'TeaHC Wellness',
        },
      ]
    : ogImages
  
  const twitterImages = baseMetadata.twitter?.images || []

  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      images: image,
    },
    twitter: {
      title,
      description: desc,
      images: imageUrl ? [imageUrl] : twitterImages,
    },
  }
} 