"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { addSubscriberToSupabase } from "@/lib/subscriber-service"

interface EmailSignupProps {
  source: string
  buttonText?: string
  className?: string
  onSuccess?: (email: string) => void
}

export default function EmailSignup({ 
  source, 
  buttonText = "Subscribe", 
  className = "",
  onSuccess 
}: EmailSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

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
      if (onSuccess) onSuccess(email)
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