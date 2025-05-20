"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type Subscriber = {
  id: string
  email: string
  created_at: string
  source?: string
}

type Reservation = {
  id: string
  email: string
  created_at: string
  product: string
  quantity: number
  status: string
}

export default function AdminDashboard() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = document.cookie.includes('admin_auth=true')
    
    if (!isAuthenticated) {
      router.push('/admin/login')
      return
    }
    
    // Fetch data
    const fetchData = async () => {
      try {
        // Fetch subscribers
        const subsResponse = await fetch('/api/subscribers')
        const subsData = await subsResponse.json()
        
        // Fetch reservations
        const resResponse = await fetch('/api/reservations')
        const resData = await resResponse.json()
        
        setSubscribers(subsData.subscribers || [])
        setReservations(resData.reservations || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }, [router])
  
  const handleLogout = () => {
    // Clear the admin auth cookie
    document.cookie = 'admin_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;'
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>
      
      <Tabs defaultValue="subscribers">
        <TabsList className="mb-6">
          <TabsTrigger value="subscribers">Subscribers ({subscribers.length})</TabsTrigger>
          <TabsTrigger value="reservations">Reservations ({reservations.length})</TabsTrigger>
        </TabsList>
        
        <TabsContent value="subscribers">
          <Card>
            <CardHeader>
              <CardTitle>Email Subscribers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Source</th>
                      <th className="p-3 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="p-3 text-center">No subscribers found</td>
                      </tr>
                    ) : (
                      subscribers.map((sub) => (
                        <tr key={sub.id} className="border-b border-gray-200">
                          <td className="p-3">{sub.email}</td>
                          <td className="p-3">{sub.source || 'direct'}</td>
                          <td className="p-3">{new Date(sub.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reservations">
          <Card>
            <CardHeader>
              <CardTitle>Reservations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">Product</th>
                      <th className="p-3 text-left">Quantity</th>
                      <th className="p-3 text-left">Status</th>
                      <th className="p-3 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-3 text-center">No reservations found</td>
                      </tr>
                    ) : (
                      reservations.map((res) => (
                        <tr key={res.id} className="border-b border-gray-200">
                          <td className="p-3">{res.email}</td>
                          <td className="p-3">{res.product}</td>
                          <td className="p-3">{res.quantity}</td>
                          <td className="p-3">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                              res.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              res.status === 'completed' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {res.status}
                            </span>
                          </td>
                          <td className="p-3">{new Date(res.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 