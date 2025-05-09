"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ReservationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 border-b border-amber-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <svg 
                className="h-5 w-5 text-green-700"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-gray-900">
                Reserve TeaHC Today, Pay Later!
                <span className="hidden sm:inline"> • </span>
                <span className="block sm:inline text-green-700 font-semibold">
                  No payment required until shipping
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button 
              asChild 
              size="sm" 
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              <Link href="/reserve">Reserve Now</Link>
            </Button>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close banner"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 