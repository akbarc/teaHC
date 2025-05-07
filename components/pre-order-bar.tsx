"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

export function PreOrderBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-amber-500 py-3 px-4 transition-all duration-300 ease-in-out">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="text-white font-medium">
            <span className="hidden md:inline">🔥 Flash Sale: Early Access Pricing Ends In:</span>
            <span className="md:hidden">Sale Ends In:</span>
          </div>
          <CountdownTimer />
        </div>
        <Button asChild className="w-full md:w-auto bg-white text-amber-500 hover:bg-white/90">
          <Link href="/reserve">Reserve Your Spot</Link>
        </Button>
      </div>
    </div>
  )
}
