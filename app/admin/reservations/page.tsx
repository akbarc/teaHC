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

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([])
  const [filteredReservations, setFilteredReservations] = useState<Reservation[]>([])
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

    fetchReservations()
  }, [])

  useEffect(() => {
    // Filter reservations based on search term
    const filtered = reservations.filter(res => 
      res.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.phone.includes(searchTerm) ||
      res.address.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredReservations(filtered)
  }, [searchTerm, reservations])

  const fetchReservations = async () => {
    try {
      const { data, error } = await supabase
        .from("reservations")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error

      setReservations(data || [])
      setFilteredReservations(data || [])
    } catch (error) {
      console.error("Error fetching reservations:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleExport = () => {
    // Convert reservations to CSV
    const headers = [
      "Date",
      "Name",
      "Email",
      "Phone",
      "Address",
      "RAPID Qty",
      "MOVE Qty",
      "REPAIR Qty",
      "BUNDLE Qty",
      "Total Cost",
      "Notes"
    ]
    const csvContent = [
      headers.join(","),
      ...filteredReservations.map(res => [
        new Date(res.created_at).toLocaleString(),
        res.fullName,
        res.email,
        res.phone,
        res.address,
        res.rapidQuantity,
        res.moveQuantity,
        res.repairQuantity,
        res.bundleQuantity,
        res.totalCost,
        res.notes
      ].join(","))
    ].join("\n")

    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `reservations-${new Date().toISOString().split("T")[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const calculateTotalRevenue = () => {
    return filteredReservations.reduce((sum, res) => sum + res.totalCost, 0)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading reservations...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Reservations</h1>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Total Reservations</h3>
            <p className="text-2xl font-bold">{filteredReservations.length}</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
            <p className="text-2xl font-bold">${calculateTotalRevenue().toFixed(2)}</p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2">Average Order Value</h3>
            <p className="text-2xl font-bold">
              ${(calculateTotalRevenue() / (filteredReservations.length || 1)).toFixed(2)}
            </p>
          </Card>
        </div>

        <Card className="p-6 mb-8">
          <div className="flex gap-4 mb-6">
            <Input
              type="text"
              placeholder="Search by name, email, phone, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Date</th>
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Email</th>
                  <th className="text-left py-2">Phone</th>
                  <th className="text-left py-2">Products</th>
                  <th className="text-left py-2">Total</th>
                  <th className="text-left py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredReservations.map((reservation) => (
                  <tr key={reservation.id} className="border-b">
                    <td className="py-2">{new Date(reservation.created_at).toLocaleString()}</td>
                    <td className="py-2">{reservation.fullName}</td>
                    <td className="py-2">{reservation.email}</td>
                    <td className="py-2">{reservation.phone}</td>
                    <td className="py-2">
                      {[
                        reservation.rapidQuantity > 0 && `${reservation.rapidQuantity} RAPID`,
                        reservation.moveQuantity > 0 && `${reservation.moveQuantity} MOVE`,
                        reservation.repairQuantity > 0 && `${reservation.repairQuantity} REPAIR`,
                        reservation.bundleQuantity > 0 && `${reservation.bundleQuantity} BUNDLE`
                      ].filter(Boolean).join(", ")}
                    </td>
                    <td className="py-2">${reservation.totalCost}</td>
                    <td className="py-2 text-sm text-gray-600 max-w-xs truncate">
                      {reservation.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredReservations.length} of {reservations.length} reservations
          </div>
        </Card>
      </div>
    </div>
  )
} 