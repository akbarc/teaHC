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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

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
      onEmailSubmit(email)
    } catch (error) {
      console.error("Exception in email capture:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      })
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
                Your Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full"
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue to Product Selection"}
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