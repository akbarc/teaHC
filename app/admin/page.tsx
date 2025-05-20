"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

// Types
type Subscriber = {
  id: string
  email: string
  created_at: string
  source: string
  product: string
  status: 'pending' | 'approved' | 'rejected'
}

type Reservation = {
  id: string
  email: string
  created_at: string
  product: string
  quantity: number
  status: 'pending' | 'approved' | 'rejected'
  shipping_address: string
  notes: string
}

export default function AdminDashboard() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/admin/login')
        return
      }
      fetchData()
    }

    checkAuth()
  }, [router])

  const fetchData = async () => {
    try {
      const [subscribersResponse, reservationsResponse] = await Promise.all([
        supabase
          .from('subscribers')
          .select('*')
          .order('created_at', { ascending: false }),
        supabase
          .from('reservations')
          .select('*')
          .order('created_at', { ascending: false }),
      ])

      if (subscribersResponse.error) throw subscribersResponse.error
      if (reservationsResponse.error) throw reservationsResponse.error

      setSubscribers(subscribersResponse.data)
      setReservations(reservationsResponse.data)
    } catch (error: any) {
      toast.error(error.message || 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  const updateSubscriberStatus = async (id: string, status: Subscriber['status']) => {
    try {
      const { error } = await supabase
        .from('subscribers')
        .update({ status })
        .eq('id', id)

      if (error) throw error

      setSubscribers(subscribers.map(sub => 
        sub.id === id ? { ...sub, status } : sub
      ))
      toast.success('Subscriber status updated')
    } catch (error: any) {
      toast.error(error.message || 'Failed to update status')
    }
  }

  const updateReservationStatus = async (id: string, status: Reservation['status']) => {
    try {
      const { error } = await supabase
        .from('reservations')
        .update({ status })
        .eq('id', id)

      if (error) throw error

      setReservations(reservations.map(res => 
        res.id === id ? { ...res, status } : res
      ))
      toast.success('Reservation status updated')
    } catch (error: any) {
      toast.error(error.message || 'Failed to update status')
    }
  }

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      router.push('/admin/login')
      router.refresh()
    } catch (error: any) {
      toast.error(error.message || 'Failed to logout')
    }
  }

  const filteredSubscribers = subscribers.filter(sub =>
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.product.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredReservations = reservations.filter(res =>
    res.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    res.product.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
          >
            Logout
          </Button>
        </div>

        <Card className="p-6">
          <div className="mb-6">
            <Input
              type="text"
              placeholder="Search by email or product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          <Tabs defaultValue="subscribers" className="w-full">
            <TabsList>
              <TabsTrigger value="subscribers">
                Subscribers ({filteredSubscribers.length})
              </TabsTrigger>
              <TabsTrigger value="reservations">
                Reservations ({filteredReservations.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="subscribers">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Product</th>
                      <th className="text-left py-3 px-4">Source</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubscribers.map((subscriber) => (
                      <tr key={subscriber.id} className="border-b">
                        <td className="py-3 px-4">{subscriber.email}</td>
                        <td className="py-3 px-4">{subscriber.product}</td>
                        <td className="py-3 px-4">{subscriber.source}</td>
                        <td className="py-3 px-4">
                          {new Date(subscriber.created_at).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            subscriber.status === 'approved' ? 'bg-green-100 text-green-800' :
                            subscriber.status === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {subscriber.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateSubscriberStatus(subscriber.id, 'approved')}
                              disabled={subscriber.status === 'approved'}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateSubscriberStatus(subscriber.id, 'rejected')}
                              disabled={subscriber.status === 'rejected'}
                            >
                              Reject
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="reservations">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Email</th>
                      <th className="text-left py-3 px-4">Product</th>
                      <th className="text-left py-3 px-4">Quantity</th>
                      <th className="text-left py-3 px-4">Shipping Address</th>
                      <th className="text-left py-3 px-4">Notes</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReservations.map((reservation) => (
                      <tr key={reservation.id} className="border-b">
                        <td className="py-3 px-4">{reservation.email}</td>
                        <td className="py-3 px-4">{reservation.product}</td>
                        <td className="py-3 px-4">{reservation.quantity}</td>
                        <td className="py-3 px-4">{reservation.shipping_address}</td>
                        <td className="py-3 px-4">{reservation.notes}</td>
                        <td className="py-3 px-4">
                          {new Date(reservation.created_at).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            reservation.status === 'approved' ? 'bg-green-100 text-green-800' :
                            reservation.status === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {reservation.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateReservationStatus(reservation.id, 'approved')}
                              disabled={reservation.status === 'approved'}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateReservationStatus(reservation.id, 'rejected')}
                              disabled={reservation.status === 'rejected'}
                            >
                              Reject
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
} 