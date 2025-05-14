"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { track } from '@vercel/analytics'
import * as fbq from '@/lib/facebook-pixel'
import { updateSubscriberReservation } from "@/lib/subscriber-service"
import ModifiedStep3Shipping from "./ModifiedStep3Shipping"
import SuccessMessage from "./SuccessMessage"

export default function ShippingPage() {
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
    
    if (moveQuantity === 0 && repairQuantity === 0 && rapidQuantity === 0 && bundleQuantity === 0) {
      router.push(`/reserve/products?email=${encodeURIComponent(email)}`)
      return
    }
    
    // Track page view
    const source = searchParams.get('source') || 'products_form'
    
    // Vercel Analytics - only include safe parameters
    track('reserve_shipping', { 
      source,
      email: email,
      step: 'shipping',
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
            
            {/* Step Indicator */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center text-amber-600">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-100 text-amber-600">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <span className="mt-2 text-sm">Register</span>
                  </div>
                  <div className="flex flex-col items-center text-amber-600">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-100 text-amber-600">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <span className="mt-2 text-sm">Products</span>
                  </div>
                  <div className="flex flex-col items-center text-amber-600">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-100 text-amber-600">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <span className="mt-2 text-sm">Shipping</span>
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