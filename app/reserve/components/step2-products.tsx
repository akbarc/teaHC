"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  description: string
  price: number
  regularPrice: number
  discount: number
  image: string
  color: string
  benefits: string[]
  unit: string
}

interface Step2ProductsProps {
  email: string
  onProductsSubmit: (products: {
    moveQuantity: number
    repairQuantity: number
    rapidQuantity: number
    bundleQuantity: number
  }) => void
}

export default function Step2Products({ email, onProductsSubmit }: Step2ProductsProps) {
  const [quantities, setQuantities] = useState({
    moveQuantity: 0,
    repairQuantity: 0,
    rapidQuantity: 0,
    bundleQuantity: 0
  })

  const products: Product[] = [
    {
      id: "move",
      name: "TeaHC MOVE",
      description: "Daytime Mobility Support",
      price: 19.99,
      regularPrice: 39.99,
      discount: 50,
      image: "/product-images/move-formula.png",
      color: "from-amber-500 to-amber-400",
      benefits: ["Supports joint mobility", "Daytime formula, non-drowsy"],
      unit: "10 satchets per box"
    },
    {
      id: "repair",
      name: "TeaHC REPAIR",
      description: "Nighttime Recovery Support",
      price: 19.99,
      regularPrice: 39.99,
      discount: 50,
      image: "/product-images/repair-formula.png", 
      color: "from-blue-800 to-blue-700",
      benefits: ["Promotes overnight recovery", "Soothing evening formula"],
      unit: "10 satchets per box"
    },
    {
      id: "rapid",
      name: "TeaHC RAPID",
      description: "10 Pack of 2oz Nano Shots",
      price: 19.99,
      regularPrice: 39.99,
      discount: 50,
      image: "/product-images/rapid_new_image.png",
      color: "from-amber-700 to-amber-600",
      benefits: ["Fast-acting formula", "Portable on-the-go shots"],
      unit: "10 shots per pack"
    }
  ]

  const handleIncrement = (productId: string) => {
    setQuantities(prev => {
      const field = `${productId}Quantity` as keyof typeof prev
      const currentValue = prev[field] as number
      const maxValue = productId === 'bundle' ? 5 : 10
      return {
        ...prev,
        [field]: Math.min(maxValue, currentValue + 1)
      }
    })
  }

  const handleDecrement = (productId: string) => {
    setQuantities(prev => {
      const field = `${productId}Quantity` as keyof typeof prev
      const currentValue = prev[field] as number
      return {
        ...prev,
        [field]: Math.max(0, currentValue - 1)
      }
    })
  }

  const calculateTotal = () => {
    const itemTotal = 
      quantities.moveQuantity * 19.99 +
      quantities.repairQuantity * 19.99 +
      quantities.rapidQuantity * 19.99
    
    const bundleTotal = quantities.bundleQuantity * 47.98
    
    return (itemTotal + bundleTotal).toFixed(2)
  }

  const hasProducts = 
    quantities.moveQuantity > 0 || 
    quantities.repairQuantity > 0 || 
    quantities.rapidQuantity > 0 || 
    quantities.bundleQuantity > 0

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (hasProducts) {
      onProductsSubmit(quantities)
    }
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
        <h2 className="text-2xl font-bold">Select Your Products</h2>
        <p className="opacity-90">Step 2: Choose the products you'd like to reserve</p>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-6">
          <p className="text-gray-600">
            Reserving for: <span className="font-medium text-gray-800">{email}</span>
          </p>
        </div>
        
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {products.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className={`p-4 bg-gradient-to-r ${product.color} text-white`}>
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-white/90 text-sm">{product.description}</p>
              </div>
              <div className="p-4">
                <div className="aspect-square relative mb-4 bg-white rounded-lg border border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${product.regularPrice.toFixed(2)}</span>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                    {product.discount}% OFF
                  </span>
                </div>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="h-4 w-4 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Quantity:</span>
                    <span>({product.unit})</span>
                  </div>
                  <div className="flex mt-1 border border-gray-200 rounded-md overflow-hidden">
                    <button
                      type="button"
                      onClick={() => handleDecrement(product.id)}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                    >
                      -
                    </button>
                    <div className="flex-1 text-center py-2">
                      {quantities[`${product.id}Quantity` as keyof typeof quantities]}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleIncrement(product.id)}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bundle Product */}
          <div className="border rounded-lg overflow-hidden shadow-md bg-gradient-to-r from-amber-50 to-blue-50">
            <div className="p-4 bg-gradient-to-r from-amber-500 to-blue-700 text-white">
              <h3 className="font-bold text-lg">Complete Bundle</h3>
              <p className="text-white/90 text-sm">Best Value - Save 20%</p>
            </div>
            <div className="p-4">
              <div className="aspect-square relative mb-4 bg-white rounded-lg border border-gray-100">
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  BEST VALUE
                </div>
                <Image
                  src="/product-images/product-trio.png"
                  alt="TeaHC Bundle"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <span className="font-bold text-lg">$47.98</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$59.97</span>
                </div>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">SAVE $11.99</span>
              </div>
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-start">
                  <svg className="h-4 w-4 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All 3 products at a discount</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-4 w-4 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete 24-hour support system</span>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Quantity:</span>
                  <span>(One of each product)</span>
                </div>
                <div className="flex mt-1 border border-gray-200 rounded-md overflow-hidden">
                  <button
                    type="button"
                    onClick={() => handleDecrement('bundle')}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center py-2">
                    {quantities.bundleQuantity}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleIncrement('bundle')}
                    className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        {hasProducts && (
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 mb-6">
            <h3 className="font-bold text-xl mb-4">Your Selection</h3>
            
            <div className="space-y-3 mb-4">
              {quantities.moveQuantity > 0 && (
                <div className="flex justify-between items-center border-b border-orange-100 pb-2">
                  <div className="flex items-center">
                    <span className="bg-amber-500 h-3 w-3 rounded-full mr-2"></span>
                    <span>TeaHC MOVE (x{quantities.moveQuantity})</span>
                  </div>
                  <span>${(quantities.moveQuantity * 19.99).toFixed(2)}</span>
                </div>
              )}
              
              {quantities.repairQuantity > 0 && (
                <div className="flex justify-between items-center border-b border-orange-100 pb-2">
                  <div className="flex items-center">
                    <span className="bg-blue-700 h-3 w-3 rounded-full mr-2"></span>
                    <span>TeaHC REPAIR (x{quantities.repairQuantity})</span>
                  </div>
                  <span>${(quantities.repairQuantity * 19.99).toFixed(2)}</span>
                </div>
              )}
              
              {quantities.rapidQuantity > 0 && (
                <div className="flex justify-between items-center border-b border-orange-100 pb-2">
                  <div className="flex items-center">
                    <span className="bg-amber-700 h-3 w-3 rounded-full mr-2"></span>
                    <span>TeaHC RAPID (x{quantities.rapidQuantity})</span>
                  </div>
                  <span>${(quantities.rapidQuantity * 19.99).toFixed(2)}</span>
                </div>
              )}
              
              {quantities.bundleQuantity > 0 && (
                <div className="flex justify-between items-center border-b border-orange-100 pb-2">
                  <div className="flex items-center">
                    <span className="bg-gradient-to-r from-amber-500 to-blue-700 h-3 w-3 rounded-full mr-2"></span>
                    <span>Complete Bundle (x{quantities.bundleQuantity})</span>
                  </div>
                  <span>${(quantities.bundleQuantity * 47.98).toFixed(2)}</span>
                </div>
              )}
            </div>
            
            <div className="border-t border-orange-200 pt-3 font-bold flex justify-between text-lg">
              <span>Total:</span>
              <span className="text-orange-700">${calculateTotal()}</span>
            </div>
          </div>
        )}
        
        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            disabled={!hasProducts}
            className={`px-8 py-4 text-xl rounded-xl shadow-lg transition-transform ${
              hasProducts
                ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Continue to Shipping Details
          </Button>
          
          {!hasProducts && (
            <p className="text-orange-600 mt-4">
              Please select at least one product to continue
            </p>
          )}
          
          <p className="text-gray-600 mt-4 text-sm">
            No payment required now - you'll only pay when your order ships
          </p>
        </div>
      </form>
    </div>
  )
} 