"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CountdownTimer } from "@/components/countdown-timer"
import { submitReservation } from "../actions/reservation"

export default function ReservePage() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    moveQuantity: 0,
    repairQuantity: 0,
    rapidQuantity: 0,
    bundleQuantity: 0,
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionResult, setSubmissionResult] = useState<{
    success?: boolean
    message?: string
    errors?: Array<{ field: string; message: string }>
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: name.includes("Quantity") ? Number.parseInt(value) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionResult(null)

    const formData = new FormData()
    Object.entries(formState).forEach(([key, value]) => {
      formData.append(key, value.toString())
    })

    try {
      // Submit using server action
      const result = await submitReservation(formData)

      // Backup submission to API endpoint
      try {
        await fetch("/api/backup-reservation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...formState,
            totalCost:
              formState.moveQuantity * 26.99 +
              formState.repairQuantity * 26.99 +
              formState.rapidQuantity * 26.99 +
              formState.bundleQuantity * 69.99,
          }),
        })
      } catch (backupError) {
        console.error("Backup submission failed:", backupError)
        // Continue even if backup fails
      }

      setSubmissionResult(result)

      if (result.success) {
        // Reset form on success
        setFormState({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          moveQuantity: 0,
          repairQuantity: 0,
          rapidQuantity: 0,
          bundleQuantity: 0,
          notes: "",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionResult({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate total cost
  const calculateTotal = () => {
    return (
      formState.moveQuantity * 26.99 +
      formState.repairQuantity * 26.99 +
      formState.rapidQuantity * 26.99 +
      formState.bundleQuantity * 69.99
    ).toFixed(2)
  }

  // Check if any products are selected
  const hasProducts =
    formState.moveQuantity > 0 ||
    formState.repairQuantity > 0 ||
    formState.rapidQuantity > 0 ||
    formState.bundleQuantity > 0

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Reserve Your TeaHC</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be among the first to experience our revolutionary nano-cannabinoid products
          </p>
          <div className="mt-4 max-w-md mx-auto">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <p className="text-amber-800 font-medium mb-1">🔥 Flash Sale: Early Access Pricing Ends In:</p>
              <CountdownTimer />
              <p className="text-sm text-amber-700 mt-2">
                Reserve now to lock in our special pre-launch price of $26.99 per box!
              </p>
            </div>
          </div>
        </div>

        {submissionResult?.success ? (
          <div className="max-w-3xl mx-auto bg-green-50 border border-green-200 rounded-xl p-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-green-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold mb-4">Reservation Successful!</h2>
            <p className="text-lg mb-6">{submissionResult.message}</p>
            <p className="text-gray-600 mb-6">
              We've received your reservation request. We'll contact you when your products are ready to ship.
            </p>
            <Button onClick={() => setSubmissionResult(null)} className="bg-amber-500 hover:bg-amber-600">
              Make Another Reservation
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6 bg-amber-50 border-b border-amber-100">
                <h2 className="text-2xl font-bold">Select Your Products</h2>
                <p className="text-gray-600">Choose the products you'd like to reserve</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Product Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* MOVE Product */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-amber-500 text-white">
                      <h3 className="font-bold">TeaHC MOVE</h3>
                    </div>
                    <div className="p-4">
                      <div className="aspect-square relative mb-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.36%20PM-XBaNZDmhr6evYOpKU6cIueASqrlgp4.png"
                          alt="TeaHC MOVE"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">$26.99</span>
                        <span className="text-sm text-gray-500 line-through">$39.99</span>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="moveQuantity">Quantity:</Label>
                        <select
                          id="moveQuantity"
                          name="moveQuantity"
                          value={formState.moveQuantity}
                          onChange={handleChange}
                          className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                        >
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* REPAIR Product */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-blue-800 text-white">
                      <h3 className="font-bold">TeaHC REPAIR</h3>
                    </div>
                    <div className="p-4">
                      <div className="aspect-square relative mb-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.29%20PM-rWPKTVqK3SvROr879dEKKfD6xqCLrB.png"
                          alt="TeaHC REPAIR"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">$26.99</span>
                        <span className="text-sm text-gray-500 line-through">$39.99</span>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="repairQuantity">Quantity:</Label>
                        <select
                          id="repairQuantity"
                          name="repairQuantity"
                          value={formState.repairQuantity}
                          onChange={handleChange}
                          className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                        >
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* RAPID Product */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-amber-700 text-white">
                      <h3 className="font-bold">TeaHC RAPID</h3>
                    </div>
                    <div className="p-4">
                      <div className="aspect-square relative mb-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/May%207%2C%202025%2C%2001_11_20%20PM-gb2jU5JUzudXtpUv0TK9w0Y9cqBJy0.png"
                          alt="TeaHC RAPID"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">$26.99</span>
                        <span className="text-sm text-gray-500 line-through">$39.99</span>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="rapidQuantity">Quantity:</Label>
                        <select
                          id="rapidQuantity"
                          name="rapidQuantity"
                          value={formState.rapidQuantity}
                          onChange={handleChange}
                          className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                        >
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Bundle */}
                  <div className="border rounded-lg overflow-hidden bg-gradient-to-r from-amber-50 to-blue-50">
                    <div className="p-4 bg-gradient-to-r from-amber-500 to-blue-700 text-white">
                      <h3 className="font-bold">Complete Bundle</h3>
                    </div>
                    <div className="p-4">
                      <div className="aspect-square relative mb-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%203.09.15%20PM-6h3WfOWBo8AUSJ6cxYXYpKhiTlFrCg.png"
                          alt="TeaHC Bundle"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">$69.99</span>
                        <span className="text-sm text-gray-500 line-through">$80.97</span>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="bundleQuantity">Quantity:</Label>
                        <select
                          id="bundleQuantity"
                          name="bundleQuantity"
                          value={formState.bundleQuantity}
                          onChange={handleChange}
                          className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                        >
                          {[0, 1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                {hasProducts && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Order Summary</h3>
                    <div className="space-y-2 mb-4">
                      {formState.moveQuantity > 0 && (
                        <div className="flex justify-between">
                          <span>TeaHC MOVE (x{formState.moveQuantity})</span>
                          <span>${(formState.moveQuantity * 26.99).toFixed(2)}</span>
                        </div>
                      )}
                      {formState.repairQuantity > 0 && (
                        <div className="flex justify-between">
                          <span>TeaHC REPAIR (x{formState.repairQuantity})</span>
                          <span>${(formState.repairQuantity * 26.99).toFixed(2)}</span>
                        </div>
                      )}
                      {formState.rapidQuantity > 0 && (
                        <div className="flex justify-between">
                          <span>TeaHC RAPID (x{formState.rapidQuantity})</span>
                          <span>${(formState.rapidQuantity * 26.99).toFixed(2)}</span>
                        </div>
                      )}
                      {formState.bundleQuantity > 0 && (
                        <div className="flex justify-between">
                          <span>Complete Bundle (x{formState.bundleQuantity})</span>
                          <span>${(formState.bundleQuantity * 69.99).toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    <div className="border-t pt-2 font-bold flex justify-between">
                      <span>Total:</span>
                      <span>${calculateTotal()}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {hasProducts && (
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6 bg-amber-50 border-b border-amber-100">
                  <h2 className="text-2xl font-bold">Your Information</h2>
                  <p className="text-gray-600">Please provide your contact and shipping details</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formState.fullName}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formState.address}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formState.city}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formState.state}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">Zip Code *</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formState.zipCode}
                            onChange={handleChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formState.notes}
                      onChange={handleChange}
                      className="mt-1 h-24"
                      placeholder="Any special requests or information we should know?"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submissionResult?.success === false && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-red-800">
                <p className="font-medium">{submissionResult.message}</p>
                {submissionResult.errors && submissionResult.errors.length > 0 && (
                  <ul className="mt-2 list-disc list-inside text-sm">
                    {submissionResult.errors.map((error, index) => (
                      <li key={index}>{error.message}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting || !hasProducts}
                className={`px-8 py-3 text-lg ${
                  hasProducts ? "bg-amber-500 hover:bg-amber-600" : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Processing..." : "Complete Reservation"}
              </Button>
              {!hasProducts && <p className="text-gray-500 mt-2">Please select at least one product to continue</p>}
            </div>
          </form>
        )}

        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold mb-4">Reservation Information</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>No payment required now:</strong> This is a reservation only. You'll be notified when products
                are ready to ship, and payment will be collected at that time.
              </p>
              <p>
                <strong>Limited quantities available:</strong> Our initial production run is limited. Reservations are
                fulfilled on a first-come, first-served basis.
              </p>
              <p>
                <strong>Guaranteed pricing:</strong> By reserving now, you lock in our special pre-launch pricing of
                $26.99 per product (regular price $39.99).
              </p>
              <p>
                <strong>Estimated shipping:</strong> We expect to begin shipping orders in July 2025. You'll receive
                updates on production and shipping timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
