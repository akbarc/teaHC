import { NextResponse } from 'next/server'

// Mock data for subscribers
const mockSubscribers = [
  {
    id: '1',
    email: 'customer1@example.com',
    created_at: '2023-05-15T10:00:00Z',
    source: 'rapid_landing_sticky'
  },
  {
    id: '2',
    email: 'customer2@example.com',
    created_at: '2023-05-18T14:30:00Z',
    source: 'rapid_hero_section'
  },
  {
    id: '3',
    email: 'customer3@example.com',
    created_at: '2023-05-20T09:45:00Z',
    source: 'rapid_landing_footer'
  },
  {
    id: '4',
    email: 'customer4@example.com',
    created_at: '2023-05-25T16:20:00Z',
    source: 'direct'
  },
  {
    id: '5',
    email: 'customer5@example.com',
    created_at: '2023-06-01T11:10:00Z',
    source: 'rapid_landing_sticky'
  }
]

export async function GET(request: Request) {
  // In a real app, check authentication here
  const authCookie = request.headers.get('cookie')
  if (!authCookie || !authCookie.includes('admin_auth=true')) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    )
  }

  // Return mock data
  return NextResponse.json({
    success: true,
    subscribers: mockSubscribers
  })
} 