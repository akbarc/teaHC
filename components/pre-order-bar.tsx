"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

export function PreOrderBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [showFullBar, setShowFullBar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling down 400px (faster than before)
      if (window.scrollY > 400) {
        setIsVisible(true)
        
        // Collapse bar when scrolling down, expand when scrolling up
        if (window.scrollY > lastScrollY) {
          setShowFullBar(false)
        } else {
          setShowFullBar(true)
        }
      } else {
        setIsVisible(false)
      }
      
      // Update last scroll position
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  if (!isVisible) return null

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg transition-all duration-300 ease-in-out ${
        showFullBar ? 'py-3 px-4' : 'py-2 px-4'
      }`}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        {showFullBar ? (
          <>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="text-white font-medium flex items-center">
                <svg className="w-4 h-4 mr-1.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hidden md:inline">Flash Sale: 50% Off Pre-Launch Pricing Ends In:</span>
                <span className="md:hidden">50% Off Ends In:</span>
              </div>
              <CountdownTimer className="text-white font-bold" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button asChild className="w-full md:w-auto bg-white text-orange-500 hover:bg-white/90 shadow-md font-medium transition-transform hover:scale-105">
                <Link href="/reserve">Reserve Your 50% Discount</Link>
              </Button>
              <button 
                onClick={() => setShowFullBar(false)} 
                className="hidden md:flex items-center justify-center h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="Minimize bar"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white text-sm font-medium">50% Off Ends In: </span>
              <CountdownTimer className="text-white text-sm font-bold ml-1" />
            </div>
            <div className="flex items-center gap-2">
              <Button 
                asChild 
                size="sm" 
                className="bg-white text-orange-500 hover:bg-white/90 shadow-md font-medium"
              >
                <Link href="/reserve">Reserve Now</Link>
              </Button>
              <button 
                onClick={() => setShowFullBar(true)} 
                className="flex items-center justify-center h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 text-white"
                aria-label="Expand bar"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
