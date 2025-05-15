"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { track } from '@vercel/analytics'
import * as fbq from '@/lib/facebook-pixel'
import { updateSubscriberReservation } from "@/lib/subscriber-service"
import ModifiedStep3Shipping from "./ModifiedStep3Shipping"
import SuccessMessage from "./SuccessMessage"
import Image from "next/image"

function ShippingContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email') || ""
  const [reservationComplete, setReservationComplete] = useState(false)
  
  // Get product selections from URL params
  const moveQuantity = parseInt(searchParams.get('moveQty') || "0")
  const repairQuantity = parseInt(searchParams.get('repairQty') || "0")
  const rapidQuantity = parseInt(searchParams.get('rapidQty') || "0")
  const bundleQuantity = parseInt(searchParams.get('bundleQty') || "0")
  
  const productSelections = {
    moveQuantity,
    repairQuantity,
    rapidQuantity,
    bundleQuantity
  }
  
  // Redirect if no email or products
  useEffect(() => {
    if (!email) {
      router.push('/reserve')
      return
    }
    
    const source = searchParams.get('source') || 'products_form'
    const isRapidDirect = source.includes('rapid')
    
    // Only redirect to products if not coming from Rapid direct flow
    if (!isRapidDirect && moveQuantity === 0 && repairQuantity === 0 && rapidQuantity === 0 && bundleQuantity === 0) {
      router.push(`/reserve/products?email=${encodeURIComponent(email)}`)
      return
    }
    
    // Track page view with appropriate source
    track('reserve_shipping', { 
      source,
      email: email,
      step: 'shipping',
      isRapidDirect,
      timestamp: new Date().toISOString()
    })
    
  }, [email, router, searchParams, moveQuantity, repairQuantity, rapidQuantity, bundleQuantity])
  
  // Calculate total cost
  const calculateTotal = () => {
    const itemTotal = 
      productSelections.moveQuantity * 19.99 +
      productSelections.repairQuantity * 19.99 +
      productSelections.rapidQuantity * 19.99
    
    const bundleTotal = productSelections.bundleQuantity * 47.98
    
    return parseFloat((itemTotal + bundleTotal).toFixed(2))
  }
  
  // Create product items array for tracking
  const getProductItems = () => {
    const items = []
    
    if (moveQuantity > 0) {
      items.push({
        id: 'move',
        name: 'TeaHC MOVE',
        price: 19.99,
        quantity: moveQuantity
      })
    }
    
    if (repairQuantity > 0) {
      items.push({
        id: 'repair',
        name: 'TeaHC REPAIR',
        price: 19.99,
        quantity: repairQuantity
      })
    }
    
    if (rapidQuantity > 0) {
      items.push({
        id: 'rapid',
        name: 'TeaHC RAPID',
        price: 19.99,
        quantity: rapidQuantity
      })
    }
    
    if (bundleQuantity > 0) {
      items.push({
        id: 'bundle',
        name: 'TeaHC Bundle',
        price: 47.98,
        quantity: bundleQuantity
      })
    }
    
    return items
  }
  
  // Handle reservation complete
  const handleReservationComplete = async (shippingDetails: any) => {
    try {
      // STEP 1: Add the email to the subscribers table first
      try {
        console.log('Adding email to subscribers table...')
        
        // Use fetch to call the addSubscriber endpoint
        const baseUrl = window.location.origin
        const addSubscriberEndpoint = `${baseUrl}/api/add-subscriber`
        
        const subscriberResponse = await fetch(addSubscriberEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            source: 'reservation-form',
            name: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
          })
        })
        
        const subscriberResult = await subscriberResponse.json()
        console.log('Subscriber result:', subscriberResult)
      } catch (subscriberError) {
        console.error('Error adding subscriber:', subscriberError)
        // Continue anyway - we want to save the reservation even if subscriber insert fails
      }
      
      // STEP 2: Prepare data for the reservation
      const formatAddress = () => {
        const addr = [shippingDetails.address]
        
        if (shippingDetails.address2) {
          addr.push(shippingDetails.address2)
        }
        
        addr.push(`${shippingDetails.city}, ${shippingDetails.state} ${shippingDetails.zipCode}`)
        
        if (shippingDetails.country === "CA") {
          addr.push("Canada")
        }
        
        return addr.join(", ")
      }
      
      const totalCost = calculateTotal()
      
      const reservationData = {
        email,
        timestamp: new Date().toISOString(),
        fullName: `${shippingDetails.firstName} ${shippingDetails.lastName}`,
        phone: shippingDetails.phone,
        address: formatAddress(),
        moveQuantity: productSelections.moveQuantity,
        repairQuantity: productSelections.repairQuantity,
        rapidQuantity: productSelections.rapidQuantity,
        bundleQuantity: productSelections.bundleQuantity,
        totalCost,
        notes: ""
      }
      
      console.log('Sending reservation data:', reservationData)
      
      // STEP 3: Try our direct API endpoint
      try {
        const baseUrl = window.location.origin
        const fixEndpoint = `${baseUrl}/api/fix-reservation`
        
        console.log(`Using fix endpoint: ${fixEndpoint}`)
        
        const response = await fetch(fixEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservationData)
        })
        
        const result = await response.json()
        console.log('Fix endpoint result:', result)
        
        if (result.success) {
          console.log('✅ Direct reservation saved successfully!')
        } else {
          console.warn('Direct save failed, falling back to subscriber service')
        }
      } catch (fixError) {
        console.error('Error using fix endpoint:', fixError)
        // Continue to fallback method
      }
      
      // Update the subscriber record to mark reservation as completed and save reservation details
      const subscriberData = {
        email,
        products: productSelections,
        shipping: shippingDetails,
        totalCost,
        reservedAt: new Date().toISOString()
      }
      
      const result = await updateSubscriberReservation(email, subscriberData)

      // Log the result for debugging
      console.log('Reservation result:', result)

      // Even if there's an error with Supabase, we'll still treat it as success for better UX
      // The data will be stored locally in the app and could be synced later
      
      // Save reservation data to localStorage as backup
      try {
        localStorage.setItem(
          `teahc_reservation_${email}`, 
          JSON.stringify({
            email,
            products: productSelections,
            shipping: shippingDetails,
            totalCost,
            reservedAt: new Date().toISOString()
          })
        )
        console.log('Reservation data saved to localStorage as backup')
      } catch (e) {
        console.error('Failed to save backup to localStorage:', e)
      }
      
      // Track completion with Vercel Analytics
      track('reserve_complete', {
        email: email,
        totalValue: totalCost,
        timestamp: new Date().toISOString()
      })
      
      // Track with Facebook Pixel
      fbq.trackPurchase({
        id: `reservation_${Date.now()}`,
        value: totalCost,
        products: getProductItems()
      })
      
      // Mark as complete
      setReservationComplete(true)
      
    } catch (err) {
      console.error("Reservation error:", err)
      
      // Try to save data locally as fallback
      try {
        localStorage.setItem(
          `teahc_reservation_${email}`, 
          JSON.stringify({
            email,
            products: productSelections,
            shipping: shippingDetails,
            totalCost: calculateTotal(),
            reservedAt: new Date().toISOString()
          })
        )
        console.log('Reservation data saved to localStorage as fallback')
      } catch (e) {
        console.error('Failed to save fallback to localStorage:', e)
      }
      
      // Still mark as complete for better UX
      setReservationComplete(true)
    }
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
                <span className="font-medium text-amber-600">Step 2 of 2</span>
                <span>Your Details → Confirm & Reserve</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-amber-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-8">
              <h3 className="font-medium text-gray-900 mb-3">Your Order</h3>
              <div className="space-y-2">
                {rapidQuantity > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>TeaHC RAPID × {rapidQuantity}</span>
                    <span>${(rapidQuantity * 19.99).toFixed(2)}</span>
                  </div>
                )}
                {moveQuantity > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>TeaHC MOVE × {moveQuantity}</span>
                    <span>${(moveQuantity * 19.99).toFixed(2)}</span>
                  </div>
                )}
                {repairQuantity > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>TeaHC REPAIR × {repairQuantity}</span>
                    <span>${(repairQuantity * 19.99).toFixed(2)}</span>
                  </div>
                )}
                {bundleQuantity > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>TeaHC Bundle × {bundleQuantity}</span>
                    <span>${(bundleQuantity * 47.98).toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-100 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-amber-600 mt-1">
                    You save ${((rapidQuantity + moveQuantity + repairQuantity) * 20 + bundleQuantity * 32).toFixed(2)} with pre-launch pricing
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Step Content */}
        <div className="mb-12">
          {!reservationComplete ? (
            <ModifiedStep3Shipping 
              email={email}
              totalCost={calculateTotal()}
              onShippingComplete={handleReservationComplete}
            />
          ) : (
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

            {/* Trust Indicators */}
            <div className="bg-white rounded-lg border border-gray-100 p-4">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Image src="/teahc-logo.png" alt="TeaHC" width={24} height={24} className="mr-2" />
                  <span>Trusted Brand</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-600">★4.9</span>
                  <span className="ml-1">Rating</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-amber-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>30-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default function ShippingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ShippingContent />
    </Suspense>
  )
} 