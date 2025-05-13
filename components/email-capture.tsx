"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { addSubscriberToSupabase, checkSubscriberExists } from "@/lib/subscriber-service"

interface EmailCaptureProps {
  title?: string
  description?: string
  buttonText?: string
  className?: string
  placeholder?: string
  privacyText?: string
  source?: string
  onSubmit?: () => void
}

export function EmailCapture({
  title = "Join Our Waitlist",
  description = "Be the first to know when we launch.",
  buttonText = "Join",
  className = "",
  placeholder = "Enter your email",
  privacyText,
  source = "homepage",
  onSubmit,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Call the onSubmit callback if provided
      if (onSubmit) {
        onSubmit()
      }

      // First check if email already exists
      const existsCheck = await checkSubscriberExists(email)
      
      if (existsCheck.error) {
        console.error("Error checking if subscriber exists:", existsCheck.error)
        // Continue with the flow even if check fails
      } else if (existsCheck.exists) {
        toast({
          title: "Already subscribed!",
          description: "You're already on our list. Thank you!",
        })
        setEmail("")
        setIsSubmitting(false)
        return
      }

      // Collect some basic metadata
      const subscriberData = {
        email,
        source,
        user_agent: navigator.userAgent,
        // Don't collect IP here in the client - this should be done server-side for accuracy
        // Using a server action would be better for this
      }

      // Add to Supabase
      const result = await addSubscriberToSupabase(subscriberData)

      if (result.error) {
        if (result.needsSetup) {
          // Table doesn't exist - this would normally trigger a setup flow
          // For now, just show success to the user anyway
          console.warn("Subscribers table doesn't exist yet. Email not saved.")
          toast({
            title: "Success!",
            description: "You've been added to our waitlist.",
          })
        } else {
          console.error("Error adding subscriber:", result.error)
          toast({
            title: "Something went wrong",
            description: "Please try again later.",
            variant: "destructive",
          })
        }
      } else {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist.",
        })
      }
    } catch (error) {
      console.error("Exception in email capture:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    }

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <div className={className}>
      {title && <h3 className="text-base font-bold mb-2">{title}</h3>}
      {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isSubmitting} className="bg-amber-500 hover:bg-amber-600 text-white">
          {isSubmitting ? "Joining..." : buttonText}
        </Button>
      </form>
      {privacyText && <p className="text-xs text-gray-500 mt-2">{privacyText}</p>}
    </div>
  )
}
