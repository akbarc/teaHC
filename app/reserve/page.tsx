"use client"

import { useState } from "react"
import Step1Email from "./components/step1-email"

export default function ReservePage() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  
  const handleEmailSubmit = (email: string) => {
    setEmail(email)
    setStep(2)
  }
  
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
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
                  <span className="mt-2 text-sm">Details</span>
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
        
        {/* Step Content */}
        <div className="mb-12">
          {step === 1 && (
            <Step1Email onEmailSubmit={handleEmailSubmit} />
          )}
          
          {step === 2 && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Step 2: Product Selection</h2>
              <p>Email: {email}</p>
              <p>This is where the product selection will go in the next update.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
