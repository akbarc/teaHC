'use client'

import { useState, useEffect } from 'react'
import { getReservations } from '@/lib/supabase-service'

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadReservations() {
      try {
        setLoading(true)
        const result = await getReservations()
        
        if (!result.success) {
          setError('Failed to load reservations')
          return
        }
        
        setReservations(result.data || [])
      } catch (err) {
        setError('An error occurred while loading reservations')
        console.error('Error loading reservations:', err)
      } finally {
        setLoading(false)
      }
    }

    loadReservations()
  }, [])

  // Format date from ISO string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Reservation Management</h1>
      
      {loading && <div className="text-center p-8">Loading reservations...</div>}
      
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      {!loading && !error && reservations.length === 0 && (
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          No reservations found
        </div>
      )}
      
      {!loading && !error && reservations.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left border">Date</th>
                <th className="p-2 text-left border">Name</th>
                <th className="p-2 text-left border">Email</th>
                <th className="p-2 text-left border">Phone</th>
                <th className="p-2 text-left border">Address</th>
                <th className="p-2 text-left border">Products</th>
                <th className="p-2 text-left border">Total</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-2 border">{formatDate(reservation.timestamp)}</td>
                  <td className="p-2 border">{reservation.fullName}</td>
                  <td className="p-2 border">{reservation.email}</td>
                  <td className="p-2 border">{reservation.phone || '-'}</td>
                  <td className="p-2 border">{reservation.address}</td>
                  <td className="p-2 border">
                    <ul className="list-disc list-inside">
                      {reservation.moveQuantity > 0 && (
                        <li>MOVE: {reservation.moveQuantity}</li>
                      )}
                      {reservation.repairQuantity > 0 && (
                        <li>REPAIR: {reservation.repairQuantity}</li>
                      )}
                      {reservation.rapidQuantity > 0 && (
                        <li>RAPID: {reservation.rapidQuantity}</li>
                      )}
                      {reservation.bundleQuantity > 0 && (
                        <li>Bundle: {reservation.bundleQuantity}</li>
                      )}
                    </ul>
                  </td>
                  <td className="p-2 border">${reservation.totalCost.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  )
} 