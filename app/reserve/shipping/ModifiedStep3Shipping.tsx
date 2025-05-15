"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { track } from '@vercel/analytics'

// Define interfaces for our data structures
export interface ShippingDetails {
  firstName: string
  lastName: string
  address: string
  address2: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
  saveInfo: boolean
  emailUpdates: boolean
}

interface ModifiedStep3ShippingProps {
  email: string
  totalCost: number
  onShippingComplete: (shippingDetails: ShippingDetails) => void
}

export default function ModifiedStep3Shipping({ 
  email, 
  totalCost, 
  onShippingComplete 
}: ModifiedStep3ShippingProps) {
  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Inline validation
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'zipCode':
        return /^\d{5}(-\d{4})?$/.test(value) ? '' : 'Please enter a valid ZIP code'
      case 'phone':
        return value ? /^\+?[\d\s-()]{10,}$/.test(value) ? '' : 'Please enter a valid phone number' : ''
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address'
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }

    // Validate on change for specific fields
    if (['zipCode', 'phone'].includes(name)) {
      const error = validateField(name, value)
      if (error) {
        setErrors(prev => ({
          ...prev,
          [name]: error
        }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate required fields
    const newErrors: Record<string, string> = {}
    if (!formData.address) {
      newErrors.address = 'Please enter your shipping address'
    }
    if (!formData.city) {
      newErrors.city = 'Please enter your city'
    }
    if (!formData.state) {
      newErrors.state = 'Please enter your state'
    }
    if (!formData.zipCode) {
      newErrors.zipCode = 'Please enter your ZIP code'
    } else {
      const zipError = validateField('zipCode', formData.zipCode)
      if (zipError) newErrors.zipCode = zipError
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      await onShippingComplete(formData)
    } catch (error) {
      console.error('Error submitting shipping details:', error)
      setErrors(prev => ({
        ...prev,
        submit: 'Something went wrong. Please try again.'
      }))
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Shipping Information</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              placeholder="First name"
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
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              placeholder="Last name"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`block w-full px-4 py-2 rounded-lg border ${
                errors.address ? 'border-red-300' : 'border-gray-300'
              } focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20`}
              placeholder="Street address"
              required
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address}</p>
            )}
          </div>

          <div>
            <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
              Apartment, suite, etc. (optional)
            </label>
            <input
              type="text"
              id="address2"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              className="block w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              placeholder="Apt, suite, unit, etc."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`block w-full px-4 py-2 rounded-lg border ${
                  errors.city ? 'border-red-300' : 'border-gray-300'
                } focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20`}
                placeholder="City"
                required
              />
              {errors.city && (
                <p className="mt-1 text-sm text-red-600">{errors.city}</p>
              )}
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`block w-full px-4 py-2 rounded-lg border ${
                  errors.state ? 'border-red-300' : 'border-gray-300'
                } focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20`}
                placeholder="State"
                required
              />
              {errors.state && (
                <p className="mt-1 text-sm text-red-600">{errors.state}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={`block w-full px-4 py-2 rounded-lg border ${
                  errors.zipCode ? 'border-red-300' : 'border-gray-300'
                } focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20`}
                placeholder="ZIP code"
                required
                pattern="[0-9]{5}(-[0-9]{4})?"
                inputMode="numeric"
              />
              {errors.zipCode && (
                <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`block w-full px-4 py-2 rounded-lg border ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                } focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20`}
                placeholder="Phone number"
                inputMode="tel"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="space-y-4">
          <label className="flex items-start">
            <input
              type="checkbox"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">
              Save my information for faster checkout
            </span>
          </label>

          <label className="flex items-start">
            <input
              type="checkbox"
              name="emailUpdates"
              checked={formData.emailUpdates}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">
              Keep me updated with exclusive offers and product news
            </span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="space-y-4">
        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Lock My 50% Off"
          )}
        </button>

        {errors.submit && (
          <p className="text-sm text-red-600 text-center">{errors.submit}</p>
        )}

        <p className="text-xs text-gray-500 text-center">
          By clicking "Lock My 50% Off", you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </form>
  )
} 