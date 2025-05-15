"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface SuccessMessageProps {
  email: string
}

export default function SuccessMessage({ email }: SuccessMessageProps) {
  const router = useRouter()

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Reservation Complete!</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-lg mx-auto">
          Thank you for reserving TeaHC products. We've sent a confirmation email to {email}.
        </p>
        
        <div className="bg-amber-50 p-6 rounded-lg mb-8 max-w-md mx-auto">
          <h3 className="font-bold text-amber-800 mb-2">What happens next?</h3>
          <ol className="text-left text-amber-700 space-y-2">
            <li className="flex items-start">
              <span className="bg-amber-200 rounded-full h-5 w-5 flex items-center justify-center text-amber-800 mr-2 flex-shrink-0 mt-0.5">1</span>
              <span>We'll notify you as soon as your products are ready to ship</span>
            </li>
            <li className="flex items-start">
              <span className="bg-amber-200 rounded-full h-5 w-5 flex items-center justify-center text-amber-800 mr-2 flex-shrink-0 mt-0.5">2</span>
              <span>You'll receive a payment link to complete your purchase</span>
            </li>
            <li className="flex items-start">
              <span className="bg-amber-200 rounded-full h-5 w-5 flex items-center justify-center text-amber-800 mr-2 flex-shrink-0 mt-0.5">3</span>
              <span>Your order will ship with free expedited delivery</span>
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => router.push("/")}
            className="w-full bg-amber-600 hover:bg-amber-700"
          >
            Return to Homepage
          </Button>
          
          <Button
            onClick={() => router.push("/products/bundle")}
            variant="outline"
            className="w-full"
          >
            Learn More About Our Products
          </Button>
        </div>
      </div>
    </div>
  )
} 