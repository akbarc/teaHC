"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

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

interface Step3ShippingProps {
  email: string
  totalCost: number
  onShippingSubmit: (shippingDetails: ShippingDetails) => void
}

export default function Step3Shipping({ email, totalCost, onShippingSubmit }: Step3ShippingProps) {
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

  const [errors, setErrors] = useState<Partial<Record<keyof ShippingDetails, string>>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when field is edited
    if (errors[name as keyof ShippingDetails]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleCheckboxChange = (name: keyof ShippingDetails) => {
    setShippingDetails(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  const handleSelectChange = (name: keyof ShippingDetails, value: string) => {
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ShippingDetails, string>> = {}
    
    // Required fields
    const requiredFields: (keyof ShippingDetails)[] = ['firstName', 'lastName', 'address', 'city', 'state', 'zipCode', 'phone']
    
    requiredFields.forEach(field => {
      if (!shippingDetails[field]) {
        newErrors[field] = 'This field is required'
      }
    })
    
    // ZIP code validation (basic)
    if (shippingDetails.zipCode && !/^\d{5}(-\d{4})?$/.test(shippingDetails.zipCode)) {
      newErrors.zipCode = 'Please enter a valid ZIP code'
    }
    
    // Phone validation (basic)
    if (shippingDetails.phone && !/^\d{10}$/.test(shippingDetails.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      onShippingSubmit(shippingDetails)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
        <h2 className="text-2xl font-bold">Shipping Details</h2>
        <p className="opacity-90">Step 3: Where should we ship your products?</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Reserving for: <span className="font-medium text-gray-800">{email}</span>
            </p>
            <p className="font-medium">
              Total: <span className="text-orange-600">${totalCost.toFixed(2)}</span>
            </p>
          </div>
          <div className="mt-2 bg-amber-50 p-4 rounded-lg border border-amber-100">
            <p className="text-sm text-amber-800">
              <span className="font-medium">Remember:</span> No payment is required today. You'll only be charged when your order ships.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">Personal Information</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={shippingDetails.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              
              <div>
                <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={shippingDetails.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 555-5555"
                  value={shippingDetails.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                <p className="text-sm text-gray-500 mt-1">For shipping updates only</p>
              </div>
            </div>
          </div>
          
          {/* Shipping Address */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">Shipping Address</h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="address">Address <span className="text-red-500">*</span></Label>
                <Input
                  id="address"
                  name="address"
                  value={shippingDetails.address}
                  onChange={handleChange}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              
              <div>
                <Label htmlFor="address2">Apartment, suite, etc. (optional)</Label>
                <Input
                  id="address2"
                  name="address2"
                  value={shippingDetails.address2}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
                <Input
                  id="city"
                  name="city"
                  value={shippingDetails.city}
                  onChange={handleChange}
                  className={errors.city ? "border-red-500" : ""}
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
                  <Select
                    value={shippingDetails.state}
                    onValueChange={(value) => handleSelectChange('state', value)}
                  >
                    <SelectTrigger 
                      id="state" 
                      className={errors.state ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="AK">Alaska</SelectItem>
                      <SelectItem value="AZ">Arizona</SelectItem>
                      <SelectItem value="AR">Arkansas</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="CO">Colorado</SelectItem>
                      <SelectItem value="CT">Connecticut</SelectItem>
                      <SelectItem value="DE">Delaware</SelectItem>
                      <SelectItem value="FL">Florida</SelectItem>
                      <SelectItem value="GA">Georgia</SelectItem>
                      <SelectItem value="HI">Hawaii</SelectItem>
                      <SelectItem value="ID">Idaho</SelectItem>
                      <SelectItem value="IL">Illinois</SelectItem>
                      <SelectItem value="IN">Indiana</SelectItem>
                      <SelectItem value="IA">Iowa</SelectItem>
                      <SelectItem value="KS">Kansas</SelectItem>
                      <SelectItem value="KY">Kentucky</SelectItem>
                      <SelectItem value="LA">Louisiana</SelectItem>
                      <SelectItem value="ME">Maine</SelectItem>
                      <SelectItem value="MD">Maryland</SelectItem>
                      <SelectItem value="MA">Massachusetts</SelectItem>
                      <SelectItem value="MI">Michigan</SelectItem>
                      <SelectItem value="MN">Minnesota</SelectItem>
                      <SelectItem value="MS">Mississippi</SelectItem>
                      <SelectItem value="MO">Missouri</SelectItem>
                      <SelectItem value="MT">Montana</SelectItem>
                      <SelectItem value="NE">Nebraska</SelectItem>
                      <SelectItem value="NV">Nevada</SelectItem>
                      <SelectItem value="NH">New Hampshire</SelectItem>
                      <SelectItem value="NJ">New Jersey</SelectItem>
                      <SelectItem value="NM">New Mexico</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="NC">North Carolina</SelectItem>
                      <SelectItem value="ND">North Dakota</SelectItem>
                      <SelectItem value="OH">Ohio</SelectItem>
                      <SelectItem value="OK">Oklahoma</SelectItem>
                      <SelectItem value="OR">Oregon</SelectItem>
                      <SelectItem value="PA">Pennsylvania</SelectItem>
                      <SelectItem value="RI">Rhode Island</SelectItem>
                      <SelectItem value="SC">South Carolina</SelectItem>
                      <SelectItem value="SD">South Dakota</SelectItem>
                      <SelectItem value="TN">Tennessee</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                      <SelectItem value="UT">Utah</SelectItem>
                      <SelectItem value="VT">Vermont</SelectItem>
                      <SelectItem value="VA">Virginia</SelectItem>
                      <SelectItem value="WA">Washington</SelectItem>
                      <SelectItem value="WV">West Virginia</SelectItem>
                      <SelectItem value="WI">Wisconsin</SelectItem>
                      <SelectItem value="WY">Wyoming</SelectItem>
                      <SelectItem value="DC">District of Columbia</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>
                
                <div>
                  <Label htmlFor="zipCode">ZIP Code <span className="text-red-500">*</span></Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={shippingDetails.zipCode}
                    onChange={handleChange}
                    className={errors.zipCode ? "border-red-500" : ""}
                  />
                  {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                </div>
              </div>
              
              <div>
                <Label htmlFor="country">Country</Label>
                <Select
                  value={shippingDetails.country}
                  onValueChange={(value) => handleSelectChange('country', value)}
                >
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">United States</SelectItem>
                    <SelectItem value="CA">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        
        {/* Preferences */}
        <div className="border-t border-gray-200 pt-6 mb-8">
          <h3 className="text-lg font-medium mb-4 text-gray-800">Preferences</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="saveInfo"
                checked={shippingDetails.saveInfo}
                onCheckedChange={() => handleCheckboxChange('saveInfo')}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="saveInfo" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Save my information for future orders
                </Label>
                <p className="text-sm text-gray-500">We'll securely store your shipping details</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox
                id="emailUpdates"
                checked={shippingDetails.emailUpdates}
                onCheckedChange={() => handleCheckboxChange('emailUpdates')}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="emailUpdates" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email me about new products and special offers
                </Label>
                <p className="text-sm text-gray-500">You can unsubscribe any time</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            className="px-8 py-4 text-xl rounded-xl shadow-lg transition-transform bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105"
          >
            Review & Confirm
          </Button>
          
          <p className="text-gray-600 mt-4 text-sm">
            By proceeding, you agree to our <a href="/terms" className="text-orange-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-orange-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </form>
    </div>
  )
} 