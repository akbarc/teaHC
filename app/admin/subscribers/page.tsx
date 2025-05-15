"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

interface Subscriber {
  id: string
  email: string
  source: string
  created_at: string
  user_agent: string
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem("adminAuth")
    if (auth !== "true") {
      router.push("/admin")
      return
    }

    fetchSubscribers()
  }, [])

  useEffect(() => {
    // Filter subscribers based on search term
    const filtered = subscribers.filter(sub => 
      sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.source.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredSubscribers(filtered)
  }, [searchTerm, subscribers])

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from("subscribers")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error

      setSubscribers(data || [])
      setFilteredSubscribers(data || [])
    } catch (error) {
      console.error("Error fetching subscribers:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleExport = () => {
    // Convert subscribers to CSV
    const headers = ["Email", "Source", "Date Subscribed", "User Agent"]
    const csvContent = [
      headers.join(","),
      ...filteredSubscribers.map(sub => [
        sub.email,
        sub.source,
        new Date(sub.created_at).toLocaleString(),
        sub.user_agent
      ].join(","))
    ].join("\n")

    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `subscribers-${new Date().toISOString().split("T")[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading subscribers...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Subscribers</h1>
          <div className="flex gap-4">
            <Button
              onClick={() => router.push("/admin")}
              variant="outline"
            >
              Back to Dashboard
            </Button>
            <Button
              onClick={handleExport}
              className="bg-amber-600 hover:bg-amber-700"
            >
              Export CSV
            </Button>
          </div>
        </div>

        <Card className="p-6 mb-8">
          <div className="flex gap-4 mb-6">
            <Input
              type="text"
              placeholder="Search by email or source..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Email</th>
                  <th className="text-left py-2">Source</th>
                  <th className="text-left py-2">Date Subscribed</th>
                  <th className="text-left py-2">User Agent</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="border-b">
                    <td className="py-2">{subscriber.email}</td>
                    <td className="py-2">{subscriber.source}</td>
                    <td className="py-2">{new Date(subscriber.created_at).toLocaleString()}</td>
                    <td className="py-2 text-sm text-gray-600 max-w-md truncate">
                      {subscriber.user_agent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredSubscribers.length} of {subscribers.length} subscribers
          </div>
        </Card>
      </div>
    </div>
  )
} 