"use client"

import type React from "react"

import { useState, useCallback, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CountdownTimer } from "@/components/countdown-timer"
import { LoadingSpinner } from "@/components/ui/loading"
import { submitReservation } from "../actions/reservation"
import { formatPrice, calculateSavings, calculateDiscountPercentage } from "@/lib/utils"

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
              formState.moveQuantity * 19.99 +
              formState.repairQuantity * 19.99 +
              formState.rapidQuantity * 19.99 +
              formState.bundleQuantity * 47.98,
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

  // Calculate total cost with memoization to prevent unnecessary recalculations
  const { total, savings, discountPercentage, hasSavings } = useMemo(() => {
    const regularPricePerItem = 39.99;
    const regularPriceBundle = 59.97;
    const discountPricePerItem = 19.99;
    const discountPriceBundle = 47.98;
    
    const total = 
      formState.moveQuantity * discountPricePerItem +
      formState.repairQuantity * discountPricePerItem +
      formState.rapidQuantity * discountPricePerItem +
      formState.bundleQuantity * discountPriceBundle;
      
    const regularTotal = 
      formState.moveQuantity * regularPricePerItem +
      formState.repairQuantity * regularPricePerItem +
      formState.rapidQuantity * regularPricePerItem +
      formState.bundleQuantity * regularPriceBundle;
      
    const savings = regularTotal - total;
    const discountPercentage = regularTotal > 0 ? 
      Math.round((savings / regularTotal) * 100) : 0;
      
    return {
      total: total.toFixed(2),
      savings: savings.toFixed(2),
      discountPercentage,
      hasSavings: savings > 0
    };
  }, [
    formState.moveQuantity, 
    formState.repairQuantity, 
    formState.rapidQuantity, 
    formState.bundleQuantity
  ]);

  // Memoize product handlers to prevent re-renders
  const incrementQuantity = useCallback((product: string) => {
    setFormState(prev => {
      const field = `${product}Quantity` as keyof typeof prev;
      const currentValue = prev[field] as number;
      const maxValue = product === 'bundle' ? 5 : 10;
      return {
        ...prev,
        [field]: Math.min(maxValue, currentValue + 1)
      };
    });
  }, []);

  const decrementQuantity = useCallback((product: string) => {
    setFormState(prev => {
      const field = `${product}Quantity` as keyof typeof prev;
      const currentValue = prev[field] as number;
      return {
        ...prev,
        [field]: Math.max(0, currentValue - 1)
      };
    });
  }, []);

  // Calculate total cost
  const calculateTotal = () => {
    return total;
  }

  // Check if any products are selected
  const hasProducts =
    formState.moveQuantity > 0 ||
    formState.repairQuantity > 0 ||
    formState.rapidQuantity > 0 ||
    formState.bundleQuantity > 0

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            Limited Time Offer
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Reserve Your TeaHC</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Be among the first to experience our revolutionary nano-cannabinoid products at exclusive pre-launch pricing
          </p>
          <p className="text-lg text-amber-700 font-medium max-w-3xl mx-auto mb-4">
            No payment required now - simply reserve and pay when your products ship!
          </p>
          <div className="mt-4 max-w-lg mx-auto">
            <div className="bg-gradient-to-r from-amber-100 to-amber-50 p-6 rounded-lg border border-amber-200 shadow-sm">
              <div className="flex items-center justify-center mb-2">
                <div className="bg-amber-500 text-white p-2 rounded-full mr-3">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-amber-800 font-bold text-lg">Flash Sale Ends In:</p>
              </div>
              <CountdownTimer />
              <p className="text-sm text-amber-700 mt-3 flex items-center justify-center">
                <svg className="h-4 w-4 mr-1 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Save 50% with our special pre-launch price of $19.99 per box! (Regular price $39.99)
              </p>
            </div>
          </div>
        </div>

        {submissionResult?.success ? (
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center shadow-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
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
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Reservation Successful!</h2>
            <p className="text-xl mb-4 text-gray-700">{submissionResult.message}</p>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6 max-w-md mx-auto">
              <h3 className="font-bold text-lg mb-2 text-gray-800">What's Next?</h3>
              <ul className="space-y-3 text-left text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You'll receive a confirmation email shortly</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We'll notify you when your products are ready to ship</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>You'll have the opportunity to confirm and pay for your order before shipping</span>
                </li>
              </ul>
            </div>
            <Button 
              onClick={() => setSubmissionResult(null)} 
              className="bg-amber-500 hover:bg-amber-600 text-lg px-8 py-3"
            >
              Make Another Reservation
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              <div className="p-6 bg-gradient-to-r from-amber-500 to-amber-400 border-b border-amber-400">
                <h2 className="text-2xl font-bold text-white">Select Your Products</h2>
                <p className="text-white/90">Choose the products you'd like to reserve</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Product Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* MOVE Product */}
                  <div className="border rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
                    <div className="p-4 bg-gradient-to-r from-amber-500 to-amber-400 text-white">
                      <h3 className="font-bold text-lg">TeaHC MOVE</h3>
                      <p className="text-white/90 text-sm">Daytime Mobility Support</p>
                    </div>
                    <div className="p-4">
                      <div className="aspect-square relative mb-4 bg-white rounded-lg border border-gray-100">
                        <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          BESTSELLER
                        </div>
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.36%20PM-XBaNZDmhr6evYOpKU6cIueASqrlgp4.png"
                          alt="TeaHC MOVE"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="font-bold text-lg">$19.99</span>
                          <span className="text-sm text-gray-500 line-through ml-2">$39.99</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">50% OFF</span>
                      </div>
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-start">
                          <svg className="h-4 w-4 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Supports joint mobility</span>
                        </div>
                        <div className="flex items-start">
                          <svg className="h-4 w-4 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Daytime formula, non-drowsy</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="moveQuantity" className="flex justify-between items-center">
                          <span>Quantity:</span>
                          <span className="text-xs text-gray-500">(10 satchets per box)</span>
                        </Label>
                        <div className="flex mt-1 border border-gray-200 rounded-md overflow-hidden">
                          <button 
                            type="button"
                            onClick={() => decrementQuantity('move')}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                          >
                            -
                          </button>
                          <select
                            id="moveQuantity"
                            name="moveQuantity"
                            value={formState.moveQuantity}
                            onChange={handleChange}
                            className="flex-1 border-0 focus:ring-0 text-center"
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <button 
                            type="button"
                            onClick={() => incrementQuantity('move')}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* REPAIR Product */}
                  <div className="border rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
                    <div className="p-4 bg-gradient-to-r from-blue-800 to-blue-700 text-white">
                      <h3 className="font-bold text-lg">TeaHC REPAIR</h3>
                      <p className="text-white/90 text-sm">Nighttime Recovery Support</p>
                    </div>
                    <div className="p-4">
                      <div className="aspect-square relative mb-4 bg-white rounded-lg border border-gray-100">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.29%20PM-rWPKTVqK3SvROr879dEKKfD6xqCLrB.png"
                          alt="TeaHC REPAIR"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="font-bold text-lg">$19.99</span>
                          <span className="text-sm text-gray-500 line-through ml-2">$39.99</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">50% OFF</span>
                      </div>
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-start">
                          <svg className="h-4 w-4 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Promotes overnight recovery</span>
                        </div>
                        <div className="flex items-start">
                          <svg className="h-4 w-4 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Soothing evening formula</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="repairQuantity" className="flex justify-between items-center">
                          <span>Quantity:</span>
                          <span className="text-xs text-gray-500">(10 satchets per box)</span>
                        </Label>
                        <div className="flex mt-1 border border-gray-200 rounded-md overflow-hidden">
                          <button 
                            type="button"
                            onClick={() => decrementQuantity('repair')}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                          >
                            -
                          </button>
                          <select
                            id="repairQuantity"
                            name="repairQuantity"
                            value={formState.repairQuantity}
                            onChange={handleChange}
                            className="flex-1 border-0 focus:ring-0 text-center"
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <button 
                            type="button"
                            onClick={() => incrementQuantity('repair')}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RAPID Product */}
                  <div className="border rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
                    <div className="p-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white">
                      <h3 className="font-bold text-lg">TeaHC RAPID</h3>
                      <p className="text-white/90 text-sm">10 Pack of 2oz Nano Shots</p>
                    </div>
                    <div className="p-4">
                      <div className="aspect-square relative mb-4 bg-white rounded-lg border border-gray-100">
                        <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          NEW
                        </div>
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/May%207%2C%202025%2C%2001_11_20%20PM-gb2jU5JUzudXtpUv0TK9w0Y9cqBJy0.png"
                          alt="TeaHC RAPID"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="font-bold text-lg">$19.99</span>
                          <span className="text-sm text-gray-500 line-through ml-2">$39.99</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">50% OFF</span>
                      </div>
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-start">
                          <svg className="h-4 w-4 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Fast-acting formula</span>
                        </div>
                        <div className="flex items-start">
                          <svg className="h-4 w-4 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Portable on-the-go shots</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="rapidQuantity" className="flex justify-between items-center">
                          <span>Quantity:</span>
                          <span className="text-xs text-gray-500">(10 shots per pack)</span>
                        </Label>
                        <div className="flex mt-1 border border-gray-200 rounded-md overflow-hidden">
                          <button 
                            type="button"
                            onClick={() => decrementQuantity('rapid')}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                          >
                            -
                          </button>
                          <select
                            id="rapidQuantity"
                            name="rapidQuantity"
                            value={formState.rapidQuantity}
                            onChange={handleChange}
                            className="flex-1 border-0 focus:ring-0 text-center"
                          >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <button 
                            type="button"
                            onClick={() => incrementQuantity('rapid')}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bundle */}
                  <div className="border rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl bg-gradient-to-r from-amber-50 to-blue-50">
                    <div className="p-4 bg-gradient-to-r from-amber-500 to-blue-700 text-white">
                      <h3 className="font-bold text-lg">Complete Bundle</h3>
                      <p className="text-white/90 text-sm">Best Value - Save 20%</p>
                    </div>
                    <div className="p-4">
                      <div className="aspect-square relative mb-4 bg-white rounded-lg border border-gray-100">
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          BEST VALUE
                        </div>
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%203.09.15%20PM-6h3WfOWBo8AUSJ6cxYXYpKhiTlFrCg.png"
                          alt="TeaHC Bundle"
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="font-bold text-lg">$47.98</span>
                          <span className="text-sm text-gray-500 line-through ml-2">$59.97</span>
                        </div>
                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">SAVE $11.99</span>
                      </div>
                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-start">
                          <svg className="h-4 w-4 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>All 3 products at a discount</span>
                        </div>
                        <div className="flex items-start">
                          <svg className="h-4 w-4 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Complete 24-hour support system</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <Label htmlFor="bundleQuantity" className="flex justify-between items-center">
                          <span>Quantity:</span>
                          <span className="text-xs text-gray-500">(One of each product)</span>
                        </Label>
                        <div className="flex mt-1 border border-gray-200 rounded-md overflow-hidden">
                          <button 
                            type="button"
                            onClick={() => decrementQuantity('bundle')}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                          >
                            -
                          </button>
                          <select
                            id="bundleQuantity"
                            name="bundleQuantity"
                            value={formState.bundleQuantity}
                            onChange={handleChange}
                            className="flex-1 border-0 focus:ring-0 text-center"
                          >
                            {[0, 1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <button 
                            type="button"
                            onClick={() => incrementQuantity('bundle')}
                            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                {hasProducts && (
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200 shadow-sm">
                    <h3 className="font-bold text-xl mb-4 flex items-center">
                      <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Order Summary
                    </h3>
                    <div className="space-y-3 mb-4">
                      {formState.moveQuantity > 0 && (
                        <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                          <div className="flex items-center">
                            <span className="bg-amber-500 h-3 w-3 rounded-full mr-2"></span>
                            <span>TeaHC MOVE (x{formState.moveQuantity})</span>
                          </div>
                          <span className="font-medium">${(formState.moveQuantity * 19.99).toFixed(2)}</span>
                        </div>
                      )}
                      {formState.repairQuantity > 0 && (
                        <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                          <div className="flex items-center">
                            <span className="bg-blue-800 h-3 w-3 rounded-full mr-2"></span>
                            <span>TeaHC REPAIR (x{formState.repairQuantity})</span>
                          </div>
                          <span className="font-medium">${(formState.repairQuantity * 19.99).toFixed(2)}</span>
                        </div>
                      )}
                      {formState.rapidQuantity > 0 && (
                        <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                          <div className="flex items-center">
                            <span className="bg-amber-700 h-3 w-3 rounded-full mr-2"></span>
                            <span>TeaHC RAPID (x{formState.rapidQuantity})</span>
                          </div>
                          <span className="font-medium">${(formState.rapidQuantity * 19.99).toFixed(2)}</span>
                        </div>
                      )}
                      {formState.bundleQuantity > 0 && (
                        <div className="flex justify-between items-center border-b border-amber-200 pb-2">
                          <div className="flex items-center">
                            <span className="bg-gradient-to-r from-amber-500 to-blue-700 h-3 w-3 rounded-full mr-2"></span>
                            <span>Complete Bundle (x{formState.bundleQuantity})</span>
                          </div>
                          <span className="font-medium">${(formState.bundleQuantity * 47.98).toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Calculate savings */}
                    {hasSavings ? (
                      <div className="bg-green-50 p-3 rounded-md border border-green-100 mb-4">
                        <div className="flex justify-between items-center text-green-800">
                          <span className="font-medium flex items-center">
                            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Your Savings:
                          </span>
                          <span className="font-bold">${savings}</span>
                        </div>
                        <div className="text-xs text-green-700 text-right mt-1">
                          {discountPercentage}% off regular prices
                        </div>
                      </div>
                    ) : null}
                    
                    <div className="border-t border-amber-300 pt-3 font-bold flex justify-between text-lg">
                      <span>Total:</span>
                      <span className="text-amber-700">${calculateTotal()}</span>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-amber-800 mb-2">
                        <svg className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Lock in these prices before the timer expires!
                      </p>
                      <Button
                        type="button"
                        onClick={() => document.getElementById('customer-info')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-lg font-medium py-3"
                      >
                        Continue to Checkout
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {hasProducts && (
              <div id="customer-info" className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="p-6 bg-gradient-to-r from-amber-500 to-amber-400 border-b border-amber-400">
                  <h2 className="text-2xl font-bold text-white">Your Information</h2>
                  <p className="text-white/90">Please provide your contact and shipping details</p>
                </div>

                <div className="p-6 space-y-8">
                  {/* Step indicator */}
                  <div className="flex items-center justify-between max-w-lg mx-auto mb-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <span className="text-xs mt-1 text-gray-600">Products</span>
                    </div>
                    <div className="h-1 flex-1 bg-amber-300 mx-2"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <span className="text-xs mt-1 text-gray-600">Information</span>
                    </div>
                    <div className="h-1 flex-1 bg-gray-300 mx-2"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                        3
                      </div>
                      <span className="text-xs mt-1 text-gray-600">Review</span>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-gray-700">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formState.fullName}
                          onChange={handleChange}
                          required
                          className="mt-1 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="mt-1 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 flex justify-between">
                          <span>Phone Number</span>
                          <span className="text-xs text-gray-500">(Recommended for shipping updates)</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          className="mt-1 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <svg className="h-5 w-5 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Shipping Address
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address" className="text-gray-700">Street Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formState.address}
                          onChange={handleChange}
                          required
                          className="mt-1 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="123 Main St, Apt 4B"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-gray-700">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formState.city}
                            onChange={handleChange}
                            required
                            className="mt-1 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="New York"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state" className="text-gray-700">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formState.state}
                            onChange={handleChange}
                            required
                            className="mt-1 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="NY"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode" className="text-gray-700">Zip Code *</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formState.zipCode}
                            onChange={handleChange}
                            required
                            className="mt-1 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="10001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="notes" className="text-gray-700 flex items-center">
                      <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formState.notes}
                      onChange={handleChange}
                      className="mt-1 h-24 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      placeholder="Any special requests or information we should know about your order?"
                    />
                  </div>
                  
                  {/* Privacy note */}
                  <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
                    <p className="flex items-start">
                      <svg className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>
                        Your information is secure and will only be used to process your reservation. See our 
                        <a href="/privacy" className="text-amber-600 hover:text-amber-700 ml-1">Privacy Policy</a> for details.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submissionResult?.success === false && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 text-red-800 shadow-sm">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-red-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-bold text-lg mb-2">{submissionResult.message}</p>
                    {submissionResult.errors && submissionResult.errors.length > 0 && (
                      <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                        {submissionResult.errors.map((error, index) => (
                          <li key={index}>{error.message}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center mb-8">
              <Button
                type="submit"
                disabled={isSubmitting || !hasProducts}
                className={`px-8 py-4 text-xl rounded-xl shadow-lg transition-transform ${
                  hasProducts 
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 hover:scale-105" 
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <LoadingSpinner text="Processing..." />
                ) : (
                  "Complete Reservation"
                )}
              </Button>
              {!hasProducts && (
                <p className="text-gray-500 mt-3 flex items-center justify-center">
                  <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Please select at least one product to continue
                </p>
              )}
              {hasProducts && (
                <p className="text-amber-700 font-medium mt-3 flex items-center justify-center">
                  <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  No payment required now - pay only when your order ships
                </p>
              )}
            </div>
          </form>
        )}

        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Reservation Details
            </h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 text-gray-700">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">No Payment Required Now</h4>
                  <p>This is a reservation only. You'll be notified before shipping to confirm your order and make payment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Limited Quantities</h4>
                  <p>Our initial production run is limited. Reservations are fulfilled on a first-come, first-served basis.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Guaranteed Pricing</h4>
                  <p>By reserving now, you lock in our special pre-launch pricing - 50% off the regular retail price.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Estimated Shipping</h4>
                  <p>We expect to begin shipping orders in July 2025. You'll receive updates on production and shipping timelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
