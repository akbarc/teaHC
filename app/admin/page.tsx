"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { toast } from "sonner"

interface Stats {
  lastHour: number
  last6Hours: number
  last24Hours: number
  totalSubscribers: number
  totalReservations: number
  totalContacts: number
  recentSubscribers: { email: string; created_at: string; source: string }[]
  recentReservations: { id: string; created_at: string; fullName: string; email: string; totalCost: number }[]
  recentContacts: { id: string; created_at: string; name: string; email: string; subject: string }[]
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats>({
    lastHour: 0,
    last6Hours: 0,
    last24Hours: 0,
    totalSubscribers: 0,
    totalReservations: 0,
    totalContacts: 0,
    recentSubscribers: [],
    recentReservations: [],
    recentContacts: []
  })
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated and has admin role
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/login?redirect=/admin')
        return
      }

      // Check if user has admin role
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single()

      if (profile?.role !== 'admin') {
        await supabase.auth.signOut()
        router.push('/login?redirect=/admin')
        return
      }

      // If authenticated and admin, fetch stats
      fetchStats()
    }

    checkAuth()
  }, [router])

  const fetchStats = async () => {
    try {
      setIsLoading(true)
      const now = new Date()
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000)
      const sixHoursAgo = new Date(now.getTime() - 6 * 60 * 60 * 1000)
      const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

      // Fetch subscribers
      const { data: subscribers, error: subError } = await supabase
        .from('subscribers')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

      if (subError) throw subError

      // Fetch reservations
      const { data: reservations, error: resError } = await supabase
        .from('reservations')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

      if (resError) throw resError

      // Fetch contact submissions
      const { data: contacts, error: contactError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

      if (contactError) throw contactError

      // Calculate stats
      const stats = {
        lastHour: subscribers.filter(s => new Date(s.created_at) > oneHourAgo).length,
        last6Hours: subscribers.filter(s => new Date(s.created_at) > sixHoursAgo).length,
        last24Hours: subscribers.filter(s => new Date(s.created_at) > twentyFourHoursAgo).length,
        totalSubscribers: subscribers.length,
        totalReservations: reservations.length,
        totalContacts: contacts.length,
        recentSubscribers: subscribers.map(s => ({
          email: s.email,
          created_at: s.created_at,
          source: s.source || 'unknown'
        })),
        recentReservations: reservations.map(r => ({
          id: r.id,
          created_at: r.created_at,
          fullName: r.fullName,
          email: r.email,
          totalCost: r.totalCost
        })),
        recentContacts: contacts.map(c => ({
          id: c.id,
          created_at: c.created_at,
          name: c.name,
          email: c.email,
          subject: c.subject
        }))
      }

      setStats(stats)
    } catch (error) {
      console.error("Error fetching stats:", error)
      toast.error("Failed to fetch dashboard stats")
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading dashboard...</h1>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
          <Button
            onClick={() => supabase.auth.signOut()}
            variant="outline"
            className="text-red-600 hover:text-red-700"
          >
            Sign Out
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Subscribers</h3>
            <div className="space-y-2">
              <p>Last Hour: {stats.lastHour}</p>
              <p>Last 6 Hours: {stats.last6Hours}</p>
              <p>Last 24 Hours: {stats.last24Hours}</p>
              <p className="font-bold">Total: {stats.totalSubscribers}</p>
              <Button
                onClick={() => router.push("/admin/subscribers")}
                className="w-full mt-4 bg-amber-600 hover:bg-amber-700"
              >
                View Subscribers
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Reservations</h3>
            <div className="space-y-2">
              <p>Total Reservations: {stats.totalReservations}</p>
              <p>Recent Orders: {stats.recentReservations.length}</p>
              <Button
                onClick={() => router.push("/admin/reservations")}
                className="w-full mt-4 bg-amber-600 hover:bg-amber-700"
              >
                View Reservations
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Contact Submissions</h3>
            <div className="space-y-2">
              <p>Total Submissions: {stats.totalContacts}</p>
              <p>Recent Messages: {stats.recentContacts.length}</p>
              <Button
                onClick={() => router.push("/admin/contact")}
                className="w-full mt-4 bg-amber-600 hover:bg-amber-700"
              >
                View Submissions
              </Button>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recent Subscribers */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Recent Subscribers</h2>
              <Button
                onClick={() => router.push("/admin/subscribers")}
                variant="ghost"
                className="text-amber-600 hover:text-amber-700"
              >
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {stats.recentSubscribers.map((subscriber) => (
                <div key={subscriber.email} className="border-b pb-2 last:border-0">
                  <p className="font-medium">{subscriber.email}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(subscriber.created_at).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400">Source: {subscriber.source}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Reservations */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Recent Reservations</h2>
              <Button
                onClick={() => router.push("/admin/reservations")}
                variant="ghost"
                className="text-amber-600 hover:text-amber-700"
              >
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {stats.recentReservations.map((reservation) => (
                <div key={reservation.id} className="border-b pb-2 last:border-0">
                  <p className="font-medium">{reservation.fullName}</p>
                  <p className="text-sm text-gray-500">{reservation.email}</p>
                  <p className="text-sm">
                    Total: ${reservation.totalCost.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(reservation.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Contact Submissions */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Recent Messages</h2>
              <Button
                onClick={() => router.push("/admin/contact")}
                variant="ghost"
                className="text-amber-600 hover:text-amber-700"
              >
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {stats.recentContacts.map((contact) => (
                <div key={contact.id} className="border-b pb-2 last:border-0">
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-gray-500">{contact.email}</p>
                  <p className="text-sm">{contact.subject}</p>
                  <p className="text-xs text-gray-400">
                    {new Date(contact.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
} 