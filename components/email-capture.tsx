"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

interface EmailCaptureProps {
  title?: string
  description?: string
  buttonText?: string
  className?: string
}

export function EmailCapture({
  title = "Join Our Waitlist",
  description = "Be the first to know when we launch.",
  buttonText = "Join",
  className = "",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Success!",
      description: "You've been added to our waitlist.",
    })

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
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" disabled={isSubmitting} className="bg-amber-500 hover:bg-amber-600 text-white">
          {isSubmitting ? "Joining..." : buttonText}
        </Button>
      </form>
    </div>
  )
}
