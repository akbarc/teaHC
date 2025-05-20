import { NextResponse } from 'next/server'

// Mock data for reservations
const mockReservations = [
  {
    id: '1',
    email: 'customer1@example.com',
    created_at: '2023-05-10T09:20:00Z',
    product: 'rapid',
    quantity: 2,
    status: 'completed'
  },
  {
    id: '2',
    email: 'customer2@example.com',
    created_at: '2023-05-12T14:15:00Z',
    product: 'move',
    quantity: 1,
    status: 'pending'
  },
  {
    id: '3',
    email: 'customer3@example.com',
    created_at: '2023-05-18T11:30:00Z',
    product: 'rapid',
    quantity: 3,
    status: 'completed'
  },
  {
    id: '4',
    email: 'customer4@example.com',
    created_at: '2023-05-22T16:45:00Z',
    product: 'bundle',
    quantity: 1,
    status: 'pending'
  },
  {
    id: '5',
    email: 'customer5@example.com',
    created_at: '2023-05-30T10:10:00Z',
    product: 'repair',
    quantity: 2,
    status: 'completed'
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
    reservations: mockReservations
  })
} 