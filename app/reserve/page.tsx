"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Step1Email from "./components/step1-email"
import Step2Products from "./components/step2-products"
import Step3Shipping from "./components/step3-shipping"
import Step4Confirm from "./components/step4-confirm"
import type { ShippingDetails } from "./components/step3-shipping"
import { track } from '@vercel/analytics'
import * as fbq from '@/lib/facebook-pixel'

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
      value: 0, // No value yet
      currency: 'USD'
    })
  }, [searchParams])
  
  const handleEmailSubmit = (email: string) => {
    setEmail(email)
    
    // Track step completion
    track('reserve_email_complete', {
      step: 'email',
      timestamp: new Date().toISOString()
    })
    
    const product = searchParams.get('product')
    if (product === 'rapid') {
      // For Rapid product, skip product selection and go straight to shipping
      const rapidSelections = {
        moveQuantity: 0,
        repairQuantity: 0,
        rapidQuantity: 1,
        bundleQuantity: 0
      }
      setProductSelections(rapidSelections)
      
      // Redirect to shipping page with Rapid product pre-selected
      const params = new URLSearchParams({
        email: email,
        moveQty: '0',
        repairQty: '0',
        rapidQty: '1',
        bundleQty: '0',
        source: searchParams.get('source') || 'rapid_direct'
      })
      router.push(`/reserve/shipping?${params.toString()}`)
    } else {
      // For other products, go to product selection
      router.push(`/reserve/products?email=${encodeURIComponent(email)}`)
    }
  }
  
  const handleProductsSubmit = (products: typeof productSelections) => {
    setProductSelections(products)
    setStep(3)
  }
  
  const handleShippingSubmit = (shipping: ShippingDetails) => {
    setShippingDetails(shipping)
    setStep(4)
  }
  
  const handleConfirmation = () => {
    setReservationComplete(true)
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
            
            {/* Step Indicator */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-between">
                  <div className={`flex flex-col items-center ${step >= 1 ? "text-amber-600" : "text-gray-400"}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-400"}`}>
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <span className="mt-2 text-sm">Register</span>
                  </div>
                  <div className={`flex flex-col items-center ${step >= 2 ? "text-amber-600" : "text-gray-400"}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-400"}`}>
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <span className="mt-2 text-sm">Products</span>
                  </div>
                  <div className={`flex flex-col items-center ${step >= 3 ? "text-amber-600" : "text-gray-400"}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-400"}`}>
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <span className="mt-2 text-sm">Shipping</span>
                  </div>
                  <div className={`flex flex-col items-center ${step >= 4 ? "text-amber-600" : "text-gray-400"}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 4 ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-400"}`}>
                      <span className="text-lg font-bold">4</span>
                    </div>
                    <span className="mt-2 text-sm">Confirm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Step Content */}
        <div className="mb-12">
          {step === 1 && (
            <Step1Email onEmailSubmit={handleEmailSubmit} />
          )}
          
          {step === 2 && (
            <Step2Products 
              email={email} 
              onProductsSubmit={handleProductsSubmit} 
            />
          )}
          
          {step === 3 && (
            <Step3Shipping 
              email={email}
              totalCost={calculateTotal()}
              onShippingSubmit={handleShippingSubmit}
            />
          )}
          
          {step === 4 && (
            <Step4Confirm
              email={email}
              productSelections={productSelections}
              shippingDetails={shippingDetails}
              totalCost={calculateTotal()}
              onConfirmation={handleConfirmation}
              onEditShipping={() => setStep(3)}
              onEditProducts={() => setStep(2)}
            />
          )}
        </div>
        
        {/* Info Box (only show when not on confirmation or completed state) */}
        {step < 4 && !reservationComplete && (
          <div className="max-w-4xl mx-auto mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Reservation Information</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                  <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">No Payment Today</h4>
                  <p className="text-sm text-gray-600">You'll only pay when your products are ready to ship</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                  <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Lock In Your Pricing</h4>
                  <p className="text-sm text-gray-600">Pre-launch pricing guaranteed when you reserve now</p>
                </div>
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
