"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { addSubscriberToSupabase, checkSubscriberExists } from "@/lib/subscriber-service"
import { CountdownTimer } from "@/components/countdown-timer"

interface Step1EmailProps {
  onEmailSubmit: (email: string) => void
}

export default function Step1Email({ onEmailSubmit }: Step1EmailProps) {
  const [email, setEmail] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  // Add inline validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
    if (newEmail) {
      setIsValid(validateEmail(newEmail))
    } else {
      setIsValid(true) // Reset validation state when empty
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError("Please enter your email address")
      return
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setError(null)
    
    try {
      // First check if email already exists
      const existsCheck = await checkSubscriberExists(email)
      
      if (existsCheck.error) {
        console.error("Error checking if subscriber exists:", existsCheck.error)
        // Continue with the flow even if check fails
      } else if (existsCheck.exists) {
        toast({
          title: "Already subscribed!",
          description: "You're already on our list. We'll still proceed with your reservation.",
        })
        // Continue with the reservation process even if already subscribed
      } else {
        // Add to Supabase subscribers
        const subscriberData = {
          email,
          source: "reservation_step1",
          user_agent: navigator.userAgent,
        }

        // FIRST ATTEMPT: Try the traditional way
        const result = await addSubscriberToSupabase(subscriberData)

        if (result.error || result.needsSetup) {
          console.error("Error adding subscriber:", result.error || "Table needs setup")
          
          // SECOND ATTEMPT: Try the direct API endpoint
          try {
            const baseUrl = window.location.origin
            const addSubscriberEndpoint = `${baseUrl}/api/add-subscriber`
            
            console.log(`Using direct API endpoint: ${addSubscriberEndpoint}`)
            
            const response = await fetch(addSubscriberEndpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email,
                source: "reservation_step1",
              })
            })
            
            const apiResult = await response.json()
            console.log('Direct API result:', apiResult)
          } catch (apiError) {
            console.error('Error using direct API:', apiError)
            // Continue anyway - we don't want to block the reservation flow
          }
        }
      }

      // Move to the next step regardless of subscription status
      await onEmailSubmit(email)
    } catch (err) {
      setError("Something went wrong. Please try again.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
        <h2 className="text-2xl font-bold">Start Your TeaHC Reservation</h2>
        <p className="opacity-90">The first step to experiencing 17× better absorption</p>
      </div>
      
      <div className="p-8">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <Image 
                src="/product-images/product-trio.png" 
                alt="TeaHC Products" 
                width={40} 
                height={40} 
                className="object-contain"
              />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-center mb-2">Reserve Your Pre-Launch Discount</h3>
          <p className="text-gray-600 text-center mb-6">
            Enter your email to begin your reservation and secure our exclusive pre-launch pricing
          </p>
          
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-6">
            <div className="flex items-center mb-2">
              <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-medium text-orange-800">Limited Time Offer Ends In:</p>
            </div>
            <CountdownTimer />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`block w-full px-4 py-3 rounded-lg border ${
                    isValid ? 'border-gray-300 focus:border-amber-500' : 'border-red-300 focus:border-red-500'
                  } focus:ring-2 focus:ring-amber-500/20 transition-colors`}
                  placeholder="you@example.com"
                  required
                />
                {email && isValid && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
              {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
              )}
            </div>
            
            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-colors"
              disabled={isSubmitting || !isValid}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Continue to Reserve »"
              )}
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to our <a href="/terms" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>
            </p>
          </form>
        </div>
        
        <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
          <div className="text-center">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">Save up to 50% off retail</p>
          </div>
          
          <div className="text-center">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">No payment required today</p>
          </div>
          
          <div className="text-center">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xs text-gray-600">Early access to TeaHC</p>
          </div>
        </div>
      </div>
    </div>
  )
} 