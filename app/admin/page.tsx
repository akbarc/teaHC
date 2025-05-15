"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

interface Reservation {
  id: string
  created_at: string
  timestamp: string
  fullName: string
  email: string
  phone: string
  address: string
  moveQuantity: number
  repairQuantity: number
  rapidQuantity: number
  bundleQuantity: number
  totalCost: number
  notes: string
}

interface Stats {
  lastHour: number
  last6Hours: number
  last24Hours: number
  totalSubscribers: number
  totalReservations: number
  recentReservations: Reservation[]
  recentSubscribers: { email: string; created_at: string; source: string }[]
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [stats, setStats] = useState<Stats>({
    lastHour: 0,
    last6Hours: 0,
    last24Hours: 0,
    totalSubscribers: 0,
    totalReservations: 0,
    recentReservations: [],
    recentSubscribers: []
  })
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
      fetchStats()
    }
  }, [])

  const fetchStats = async () => {
    try {
      // Get current timestamp and calculate time ranges
      const now = new Date()
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000)
      const sixHoursAgo = new Date(now.getTime() - 6 * 60 * 60 * 1000)
      const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

      // Fetch subscribers stats
      const { data: subscribers, error: subError } = await supabase
        .from("subscribers")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5)

      if (subError) throw subError

      // Fetch reservations stats
      const { data: reservations, error: resError } = await supabase
        .from("reservations")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5)

      if (resError) throw resError

      // Calculate stats
      const stats = {
        lastHour: subscribers.filter(s => new Date(s.created_at) > oneHourAgo).length,
        last6Hours: subscribers.filter(s => new Date(s.created_at) > sixHoursAgo).length,
        last24Hours: subscribers.filter(s => new Date(s.created_at) > twentyFourHoursAgo).length,
        totalSubscribers: subscribers.length,
        totalReservations: reservations.length,
        recentReservations: reservations,
        recentSubscribers: subscribers.map(s => ({
          email: s.email,
          created_at: s.created_at,
          source: s.source
        }))
      }

      setStats(stats)
    } catch (error) {
      console.error("Error fetching stats:", error)
      toast({
        title: "Error fetching stats",
        description: "Please try again later",
        variant: "destructive"
      })
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (password === "2000Akbar!") {
      localStorage.setItem("adminAuth", "true")
      setIsAuthenticated(true)
      fetchStats()
      toast({
        title: "Welcome to Admin Dashboard",
        description: "You have successfully logged in"
      })
    } else {
      toast({
        title: "Invalid password",
        description: "Please try again",
        variant: "destructive"
      })
    }

    setIsLoading(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    setIsAuthenticated(false)
    router.push("/admin")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="text-red-600 hover:text-red-700"
          >
            Logout
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">New Subscribers</h3>
            <div className="space-y-2">
              <p>Last Hour: {stats.lastHour}</p>
              <p>Last 6 Hours: {stats.last6Hours}</p>
              <p>Last 24 Hours: {stats.last24Hours}</p>
              <p className="font-bold">Total: {stats.totalSubscribers}</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Reservations</h3>
            <div className="space-y-2">
              <p>Total Reservations: {stats.totalReservations}</p>
              <p>Recent Orders: {stats.recentReservations.length}</p>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
            <div className="space-y-2">
              <Button
                onClick={() => router.push("/admin/subscribers")}
                className="w-full bg-amber-600 hover:bg-amber-700"
              >
                View Subscribers
              </Button>
              <Button
                onClick={() => router.push("/admin/reservations")}
                className="w-full bg-amber-600 hover:bg-amber-700"
              >
                View Reservations
              </Button>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Source</th>
                    <th className="text-left py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentSubscribers.map((subscriber) => (
                    <tr key={subscriber.email} className="border-b">
                      <td className="py-2">{subscriber.email}</td>
                      <td className="py-2">{subscriber.source}</td>
                      <td className="py-2">{new Date(subscriber.created_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Name</th>
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentReservations.map((reservation) => (
                    <tr key={reservation.id} className="border-b">
                      <td className="py-2">{new Date(reservation.created_at).toLocaleString()}</td>
                      <td className="py-2">{reservation.fullName}</td>
                      <td className="py-2">{reservation.email}</td>
                      <td className="py-2">${reservation.totalCost.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
} 