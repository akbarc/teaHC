"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Suspense } from "react"
import { track } from '@vercel/analytics'

// Analytics tracking function
const trackPageView = (page: string, source?: string) => {
  // Use Vercel Analytics for tracking
  track(page, { 
    source: source || 'direct',
    timestamp: new Date().toISOString()
  })
  
  // Log to console for development
  console.log(`Page view: ${page}, Source: ${source || 'direct'}`)
}

function ProductsPageContent() {
  const searchParams = useSearchParams()
  const source = searchParams.get('source')
  
  useEffect(() => {
    // Track page view when component mounts
    trackPageView('products_overview', source || undefined)
  }, [source])
  
  const products = [
    {
      id: 'move',
      name: 'MOVE Formula',
      image: '/product-images/move-formula.png',
      description: 'Enhanced mobility and flexibility support with rapid-absorption nano-cannabinoids.',
      color: 'amber',
      price: 19.99,
      link: '/products/move'
    },
    {
      id: 'repair',
      name: 'REPAIR Formula',
      image: '/product-images/repair-formula.png',
      description: 'Advanced recovery support for muscles and joints with breakthrough nano-technology.',
      color: 'blue',
      price: 19.99,
      link: '/products/repair'
    },
    {
      id: 'rapid',
      name: 'RAPID Formula',
      image: '/product-images/rapid-formula.png',
      description: 'Fast-acting relief when you need it most. 17× better absorption than traditional products.',
      color: 'green',
      price: 19.99,
      link: '/products/rapid'
    },
    {
      id: 'bundle',
      name: 'Complete Bundle',
      image: '/product-images/product-trio.png',
      description: 'Get all three formulas and save 20%. The complete solution for your wellness needs.',
      color: 'orange',
      price: 47.98,
      link: '/products/bundle',
      isBest: true
    }
  ]
  
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">TeaHC Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Revolutionary nano-cannabinoid formulas with 17× better absorption
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <Link href="/reserve" passHref>
              <Button 
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl"
                onClick={() => trackPageView('products_to_reserve', 'products_overview')}
              >
                Reserve Now
              </Button>
            </Link>
            <Link href="/science" passHref>
              <Button 
                variant="outline" 
                className="px-6 py-3 text-orange-600 border-orange-300 hover:bg-orange-50 rounded-xl"
                onClick={() => trackPageView('products_to_science', 'products_overview')}
              >
                Learn the Science
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1 relative ${product.isBest ? 'border-2 border-orange-400' : ''}`}
            >
              {product.isBest && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                  Best Value
                </div>
              )}
              
              <div className={`h-48 flex items-center justify-center bg-${product.color}-100 p-4`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 h-24">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-600">${product.price}</span>
                  <Link 
                    href={`${product.link}?source=products_overview`}
                    onClick={() => trackPageView(`products_to_${product.id}`, 'products_overview')}
                    passHref
                  >
                    <Button 
                      size="sm"
                      className="bg-gray-800 hover:bg-gray-700"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-orange-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience the difference?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Reserve your TeaHC products today at exclusive pre-launch pricing. No payment required until your order ships.
          </p>
          <Link 
            href="/reserve" 
            passHref
            onClick={() => trackPageView('products_footer_to_reserve', 'products_overview')}
          >
            <Button 
              size="lg" 
              className="px-8 py-4 text-xl bg-orange-500 hover:bg-orange-600 rounded-xl"
            >
              Reserve Your TeaHC Products
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductsPageContent />
    </Suspense>
  )
}
