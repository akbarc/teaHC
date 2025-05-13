"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { track } from '@vercel/analytics'

// Analytics tracking function
export const trackPageView = (page: string, source?: string) => {
  // Use Vercel Analytics for tracking
  track(page, { 
    source: source || 'direct',
    timestamp: new Date().toISOString()
  })
  
  // Log to console for development
  console.log(`Page view: ${page}, Source: ${source || 'direct'}`)
}

export interface IngredientType {
  name: string
  dose?: string
  function: string
}

export interface ProductDetailProps {
  id: string 
  name: string
  tagline: string
  description: string
  image: string
  format: string
  quantity: string
  usage: string
  colorClass: string
  colorBgClass: string
  colorTextClass: string
  price: number
  badges: string[]
  activeIngredients: IngredientType[]
  otherIngredients: IngredientType[]
  benefits: string[]
  scienceDescription: string[]
}

function ProductDetailContent({ 
  id,
  name, 
  tagline,
  description,
  image,
  format,
  quantity,
  usage,
  colorClass,
  colorBgClass,
  colorTextClass, 
  price,
  badges,
  activeIngredients,
  otherIngredients,
  benefits,
  scienceDescription
}: ProductDetailProps) {
  const searchParams = useSearchParams()
  const source = searchParams.get('source')
  
  useEffect(() => {
    // Track page view when component mounts
    trackPageView(`product_${id}`, source || undefined)
  }, [id, source])
  
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link 
            href="/products" 
            className="text-orange-600 hover:text-orange-700 flex items-center"
            onClick={() => trackPageView(`${id}_to_products`, `product_${id}`)}
          >
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Products
          </Link>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className={`bg-white p-8 rounded-xl shadow-md`}>
              <Image
                src={image}
                alt={`TeaHC ${name} - ${tagline}`}
                width={400}
                height={400}
                className="mx-auto object-contain"
              />
            </div>
            <div className="space-y-6">
              <div className={`inline-block px-3 py-1 ${colorBgClass} ${colorTextClass} rounded-full text-sm font-medium`}>
                {tagline}
              </div>
              <h1 className={`text-3xl font-bold ${colorClass}`}>TeaHC {name}</h1>
              <p className="text-gray-700 text-lg">{description}</p>

              <div className="border-t border-b py-4 space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Format:</span>
                  <span>{format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Quantity:</span>
                  <span>{quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Suggested Use:</span>
                  <span>{usage}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {badges.map((badge, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center p-2 bg-white shadow rounded">
                  <span>Single Purchase</span>
                  <div>
                    <span className="font-bold text-lg">${price.toFixed(2)}</span>
                    <span className="text-gray-500 text-sm line-through ml-2">$39.99</span>
                  </div>
                </div>

                <div className="flex justify-between items-center p-2 bg-orange-50 shadow rounded border border-orange-200">
                  <span className="font-medium">Complete System</span>
                  <div>
                    <span className="font-bold text-lg">$47.98</span>
                    <span className="text-gray-500 text-sm line-through ml-2">$59.97</span>
                  </div>
                </div>
              </div>

              <Link 
                href={`/reserve?product=${id}&source=product_${id}`}
                onClick={() => trackPageView(`${id}_to_reserve`, `product_${id}`)}
                passHref
              >
                <Button 
                  size="lg" 
                  className={`w-full ${colorClass.includes('amber') ? 'bg-amber-500 hover:bg-amber-600' : 
                    colorClass.includes('blue') ? 'bg-blue-600 hover:bg-blue-700' : 
                    'bg-orange-500 hover:bg-orange-600'}`}
                >
                  Reserve Now
                </Button>
              </Link>
            </div>
          </motion.div>

          <Tabs defaultValue="formula" className="max-w-5xl mx-auto mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="formula">Complete Formula</TabsTrigger>
              <TabsTrigger value="science">The Science</TabsTrigger>
            </TabsList>

            <TabsContent value="formula" className="mt-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Complete Formula</h3>

                <div className="mb-6">
                  <h4 className={`font-semibold text-lg ${colorClass} mb-3`}>
                    Active Ingredients
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className={colorBgClass}>
                          <th className="p-3 text-left">Ingredient</th>
                          <th className="p-3 text-left">Dose</th>
                          <th className="p-3 text-left">Function / Mechanism</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeIngredients.map((ingredient, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-3 font-medium">{ingredient.name}</td>
                            <td className="p-3">{ingredient.dose || ''}</td>
                            <td className="p-3">{ingredient.function}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className={`font-semibold text-lg ${colorClass} mb-3`}>
                    Non-Active (Other) Ingredients
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className={colorBgClass}>
                          <th className="p-3 text-left">Ingredient</th>
                          <th className="p-3 text-left">Function</th>
                        </tr>
                      </thead>
                      <tbody>
                        {otherIngredients.map((ingredient, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-3 font-medium">{ingredient.name}</td>
                            <td className="p-3">{ingredient.function}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="science" className="mt-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">The Science Behind {name}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    {scienceDescription.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className={`h-5 w-5 ${colorTextClass} mr-2 mt-0.5`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products Section */}
          <div className="bg-white p-6 rounded-xl shadow-md mt-8">
            <h3 className="text-xl font-bold mb-6">Complete Your System</h3>
            <div className="flex justify-center gap-4 mb-6">
              <Link 
                href="/products/bundle?source=product_related" 
                onClick={() => trackPageView(`${id}_to_bundle`, `product_${id}`)}
                passHref
              >
                <Button className="bg-orange-500 hover:bg-orange-600">
                  View Bundle & Save 20%
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-orange-50 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Ready to experience the difference?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Reserve your TeaHC products today at exclusive pre-launch pricing. No payment required until your order ships.
            </p>
            <Link 
              href={`/reserve?product=${id}&source=product_${id}_footer`}
              onClick={() => trackPageView(`${id}_footer_to_reserve`, `product_${id}`)}
              passHref
            >
              <Button 
                size="lg" 
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600"
              >
                Reserve Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function ProductDetailTemplate(props: ProductDetailProps) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductDetailContent {...props} />
    </Suspense>
  )
} 