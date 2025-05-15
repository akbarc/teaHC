"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Step1Email from "./components/step1-email"
import Step3Shipping from "./components/step3-shipping"
import SuccessMessage from "./components/success-message"
import type { ShippingDetails } from "./components/step3-shipping"
import { track } from '@vercel/analytics'
import * as fbq from '@/lib/facebook-pixel'
import Image from "next/image"

// Create a client component that wraps the search params usage
function ReserveContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [productSelections, setProductSelections] = useState({
    moveQuantity: 0,
    repairQuantity: 0,
    rapidQuantity: 0,
    bundleQuantity: 0
  })
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    phone: "",
    saveInfo: true,
    emailUpdates: true
  })
  const [reservationComplete, setReservationComplete] = useState(false)
  
  // Track page view
  useEffect(() => {
    const source = searchParams.get('source') || 'direct'
    const product = searchParams.get('product') || 'unknown'
    
    // Vercel Analytics
    track('reserve_start', { 
      source,
      product,
      step: 'email',
      timestamp: new Date().toISOString()
    })
    
    // Facebook Pixel
    fbq.trackEvent('InitiateCheckout', {
      content_type: 'product',
      value: 0,
      currency: 'USD'
    })
  }, [searchParams])
  
  const handleEmailSubmit = (email: string) => {
    setEmail(email)
    setStep(2)
    
    // Track step completion
    track('reserve_email_complete', {
      step: 'email',
      timestamp: new Date().toISOString()
    })
    
    const product = searchParams.get('product')
    if (product === 'rapid') {
      // For Rapid product, pre-select it
      setProductSelections({
        moveQuantity: 0,
        repairQuantity: 0,
        rapidQuantity: 1,
        bundleQuantity: 0
      })
    }
  }
  
  const handleShippingSubmit = (shipping: ShippingDetails) => {
    setShippingDetails(shipping)
    setReservationComplete(true)
    
    // Track completion
    track('reserve_complete', {
      step: 'shipping',
      timestamp: new Date().toISOString()
    })
  }
  
  const calculateTotal = () => {
    const itemTotal = 
      productSelections.moveQuantity * 19.99 +
      productSelections.repairQuantity * 19.99 +
      productSelections.rapidQuantity * 19.99
    
    const bundleTotal = productSelections.bundleQuantity * 47.98
    
    return parseFloat((itemTotal + bundleTotal).toFixed(2))
  }

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        {!reservationComplete && (
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              Limited Time Offer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Reserve Your TeaHC</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Be among the first to experience our revolutionary nano-cannabinoid products at exclusive pre-launch pricing
            </p>
            
            {/* Progress Indicator */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span className="font-medium text-amber-600">Step {step} of 2</span>
                <span>{step === 1 ? "Your Email → Shipping Details" : "Shipping Details → Confirm & Reserve"}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-amber-600 h-1.5 rounded-full transition-all duration-300" 
                  style={{ width: `${(step / 2) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>No Payment Required Today</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Pre-Launch Pricing Locked In</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <svg className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        )}
        
        {/* Step Content */}
        <div className="mb-12">
          {step === 1 && (
            <Step1Email onEmailSubmit={handleEmailSubmit} />
          )}
          
          {step === 2 && !reservationComplete && (
            <Step3Shipping 
              email={email}
              totalCost={calculateTotal()}
              onShippingSubmit={handleShippingSubmit}
              productSelections={productSelections}
              onEditProducts={() => setStep(1)}
            />
          )}
          
          {reservationComplete && (
            <SuccessMessage email={email} />
          )}
        </div>
        
        {/* Info Box (only show when not completed) */}
        {!reservationComplete && (
          <div className="max-w-4xl mx-auto mt-8 space-y-6">
            {/* Billing Reassurance */}
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-sm text-amber-800">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>You're NOT billed today—your card is saved and charged only when TeaHC ships (est. July).</p>
              </div>
            </div>

            {/* Trust Footer */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
              <Image
                src="/teahc-logo.png"
                alt="TeaHC Logo"
                width={80}
                height={24}
                className="opacity-75"
              />
              <div className="flex items-center">
                <span className="text-amber-600 font-medium">★4.9</span>
                <span className="mx-1">•</span>
                <span>30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

// Main component with Suspense
export default function ReservePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ReserveContent />
    </Suspense>
  )
}
