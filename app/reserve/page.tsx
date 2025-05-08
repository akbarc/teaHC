"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PreOrderBar } from "@/components/pre-order-bar"

interface FormState {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  moveQuantity: number
  repairQuantity: number
  rapidQuantity: number
}

export default function ReservePage() {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    moveQuantity: 1,
    repairQuantity: 1,
    rapidQuantity: 1,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleQuantityChange = (product: keyof Pick<FormState, "moveQuantity" | "repairQuantity" | "rapidQuantity">, value: number) => {
    setFormState((prev) => ({
      ...prev,
      [product]: Math.max(0, value),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
    } catch (err) {
      setError("There was an error submitting your reservation. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const calculateTotal = () => {
    const moveTotal = formState.moveQuantity * 26.99
    const repairTotal = formState.repairQuantity * 26.99
    const rapidTotal = formState.rapidQuantity * 26.99
    return (moveTotal + repairTotal + rapidTotal).toFixed(2)
  }

  if (submitSuccess) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <PreOrderBar />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Reservation Confirmed!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for reserving your TeaHC products. We'll send you an email with your order details and next
              steps.
            </p>
            <div className="bg-orange-50 p-6 rounded-xl mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h2>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Check your email for your order confirmation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>We'll notify you when your order is ready to ship</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Your early access pricing is locked in</span>
                </li>
              </ul>
            </div>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <PreOrderBar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Reserve Your TeaHC Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure your early access pricing and be among the first to experience our innovative formulas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Selection */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Products</h2>
                <div className="space-y-6">
                  {/* MOVE Product */}
                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.36%20PM-XBaNZDmhr6evYOpKU6cIueASqrlgp4.png"
                        alt="TeaHC MOVE"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">TeaHC MOVE</h3>
                      <p className="text-sm text-gray-600 mb-2">Daytime Mobility Support</p>
                      <div className="flex items-center justify-between">
                        <span className="text-orange-600 font-semibold">$26.99</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange("moveQuantity", formState.moveQuantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{formState.moveQuantity}</span>
                          <button
                            onClick={() => handleQuantityChange("moveQuantity", formState.moveQuantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* REPAIR Product */}
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.29%20PM-rWPKTVqK3SvROr879dEKKfD6xqCLrB.png"
                        alt="TeaHC REPAIR"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">TeaHC REPAIR</h3>
                      <p className="text-sm text-gray-600 mb-2">Nighttime Recovery Support</p>
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 font-semibold">$26.99</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange("repairQuantity", formState.repairQuantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{formState.repairQuantity}</span>
                          <button
                            onClick={() => handleQuantityChange("repairQuantity", formState.repairQuantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RAPID Product */}
                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.22%20PM-8h3WfOWBo8AUSJ6cxYXYpKhiTlFrCg.png"
                        alt="TeaHC RAPID"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900">TeaHC RAPID</h3>
                      <p className="text-sm text-gray-600 mb-2">On-Demand Support</p>
                      <div className="flex items-center justify-between">
                        <span className="text-orange-600 font-semibold">$26.99</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange("rapidQuantity", formState.rapidQuantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{formState.rapidQuantity}</span>
                          <button
                            onClick={() => handleQuantityChange("rapidQuantity", formState.rapidQuantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-orange-600">${calculateTotal()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-500 text-white p-2 rounded-full mr-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-orange-800 font-medium text-lg">Early Access Pricing Ends In:</p>
                </div>
                <CountdownTimer hours={48} />
                <p className="text-sm text-orange-700 mt-4 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reserve now to lock in our special pre-launch price of $26.99 per box. Regular price $39.99.
                </p>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formState.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formState.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formState.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formState.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6"
                >
                  {isSubmitting ? "Processing..." : "Complete Reservation"}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By completing your reservation, you agree to our{" "}
                  <Link href="/terms" className="text-orange-600 hover:text-orange-700">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-orange-600 hover:text-orange-700">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
