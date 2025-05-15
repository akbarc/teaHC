"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CountdownTimer } from "@/components/countdown-timer"
import { useRouter, useSearchParams } from "next/navigation"
import { track } from "@/lib/analytics"

interface Step1EmailProps {
  onEmailSubmit: (email: string) => void
}

export default function Step1Email({ onEmailSubmit }: Step1EmailProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }
    
    setIsLoading(true)
    
    try {
      // Track email submission
      track('reserve_email_submit', {
        email: email,
        source: searchParams.get('source') || 'direct',
        timestamp: new Date().toISOString()
      })
      
      onEmailSubmit(email)
    } catch (err) {
      setError("Something went wrong. Please try again.")
      console.error("Error submitting email:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
        <h2 className="text-2xl font-bold">Reserve Your TeaHC</h2>
        <p className="opacity-90">Step 1: Enter your email to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-6">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-6">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-amber-800 font-medium mb-1">Limited Time Offer</p>
                <p className="text-amber-700 text-sm">
                  Reserve now to lock in pre-launch pricing and get a free bonus shot with your first order.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-lg">Email Address <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={error ? "border-red-500" : ""}
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">No Payment Required Today</span> — You'll only be charged when your order ships (est. July).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            className="px-8 py-4 text-xl rounded-xl shadow-lg transition-transform bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Continue to Reserve"}
          </Button>
          
          <p className="text-gray-600 mt-4 text-sm">
            By proceeding, you agree to our <a href="/terms" className="text-orange-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</a>
          </p>
        </div>

        {/* Trust Footer */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="text-amber-600 font-medium">★4.9</span>
              <span className="mx-1">•</span>
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center">
              <svg className="h-4 w-4 text-amber-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure & Encrypted</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
} 