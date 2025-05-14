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
      bgColorClass: 'bg-amber-100',
      textColorClass: 'text-amber-600',
      price: 19.99,
      link: '/products/move'
    },
    {
      id: 'repair',
      name: 'REPAIR Formula',
      image: '/product-images/repair-formula.png',
      description: 'Advanced recovery support for muscles and joints with breakthrough nano-technology.',
      bgColorClass: 'bg-blue-100',
      textColorClass: 'text-blue-600',
      price: 19.99,
      link: '/products/repair'
    },
    {
      id: 'rapid',
      name: 'RAPID Formula',
      image: '/product-images/rapid_new_image.png',
      description: 'Fast-acting relief when you need it most. 17× better absorption than traditional products.',
      bgColorClass: 'bg-amber-100',
      textColorClass: 'text-amber-600',
      price: 19.99,
      link: '/products/rapid'
    },
    {
      id: 'bundle',
      name: 'Complete Bundle',
      image: '/product-images/product-trio.png',
      description: 'Get all three formulas and save 20%. The complete solution for your wellness needs.',
      bgColorClass: 'bg-orange-100',
      textColorClass: 'text-orange-600',
      price: 47.98,
      link: '/products/bundle',
      isBest: true
    }
  ]
  
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">TeaHC Products</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Revolutionary nano-cannabinoid formulas with 17× better absorption
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/reserve" passHref>
              <Button 
                className="px-8 py-4 text-lg bg-orange-500 hover:bg-orange-600 rounded-xl shadow-md hover:shadow-lg"
                onClick={() => trackPageView('products_to_reserve', 'products_overview')}
              >
                Reserve Now
              </Button>
            </Link>
            <Link href="/science" passHref>
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg text-orange-600 border-orange-300 hover:bg-orange-50 rounded-xl"
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
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg z-10">
                  Best Value
                </div>
              )}

              <div className={`h-72 md:h-80 flex items-center justify-center ${product.bgColorClass} p-6 md:p-8 relative`}>
                <div className="relative w-56 h-56 md:w-64 md:h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 70vw, (max-width: 1200px) 30vw, 250px"
                    className="object-contain"
                    style={{ objectFit: 'contain' }}
                    quality={95}
                    priority={index < 2}
                  />
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-5 min-h-[5rem]">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-xl md:text-2xl font-bold ${product.textColorClass}`}>${product.price}</span>
                  <Link 
                    href={`${product.link}?source=products_overview`}
                    onClick={() => trackPageView(`products_to_${product.id}`, 'products_overview')}
                    passHref
                  >
                    <Button 
                      size="sm"
                      className="bg-gray-800 hover:bg-gray-700 px-4 py-2"
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
        <div className="bg-orange-50 rounded-2xl p-8 md:p-12 text-center border border-orange-100 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience the difference?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Reserve your TeaHC products today at exclusive pre-launch pricing. No payment required until your order ships.
          </p>
          <Link 
            href="/reserve" 
            passHref
            onClick={() => trackPageView('products_footer_to_reserve', 'products_overview')}
          >
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl bg-orange-500 hover:bg-orange-600 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              Reserve Your TeaHC Products
            </Button>
          </Link>
          <p className="mt-6 text-gray-600">
            Limited time offer • Satisfaction guaranteed
          </p>
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
