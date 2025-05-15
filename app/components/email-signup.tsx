"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { addSubscriberToSupabase } from "@/lib/subscriber-service"
import { useRouter } from "next/navigation"

interface EmailSignupProps {
  source: string
  buttonText?: string
  className?: string
  onSuccess?: (email: string) => void
  showConfirmation?: boolean
}

export default function EmailSignup({ 
  source, 
  buttonText = "Subscribe", 
  className = "",
  onSuccess,
  showConfirmation = true
}: EmailSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Add to Supabase subscribers
      const subscriberData = {
        email,
        source,
        user_agent: navigator.userAgent,
      }

      const result = await addSubscriberToSupabase(subscriberData)

      if (result.error || result.needsSetup) {
        console.error("Error adding subscriber:", result.error || "Table needs setup")
        
        // Try the direct API endpoint as fallback
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
              source,
            })
          })
          
          const apiResult = await response.json()
          console.log('Direct API result:', apiResult)
        } catch (apiError) {
          console.error('Error using direct API:', apiError)
        }
      }

      toast({
        title: "Thanks for subscribing!",
        description: "You'll be the first to know about our product launch.",
      })

      setEmail("")
      setIsSubmitted(true)
      if (onSuccess) onSuccess(email)

      // If showConfirmation is true, show the success state
      if (showConfirmation) {
        // Wait a moment before redirecting to give user time to see the success message
        setTimeout(() => {
          router.push(`/reserve?email=${encodeURIComponent(email)}&source=${source}`)
        }, 1500)
      }
    } catch (error) {
      console.error("Exception in email capture:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted && showConfirmation) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">You're In! 🎉</h3>
        <p className="text-sm text-gray-600 text-center mb-4">
          Redirecting you to reserve your TeaHC products...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-2 ${className}`}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-grow"
      />
      <Button 
        type="submit" 
        className="bg-amber-600 hover:bg-amber-700 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : buttonText}
      </Button>
    </form>
  )
} 