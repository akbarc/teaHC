"use client"

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { trackPageView } from '@/components/product-detail-template'
import { Suspense } from 'react'

function BundlePageContent() {
  const searchParams = useSearchParams()
  const source = searchParams.get('source')
  
  useEffect(() => {
    trackPageView('product_bundle', source || undefined)
  }, [source])
  
  const products = [
    {
      id: 'move',
      name: 'MOVE Formula',
      description: 'Enhanced mobility and flexibility support with rapid-absorption nano-cannabinoids.',
      image: '/product-images/move-formula.png',
      color: 'amber'
    },
    {
      id: 'repair',
      name: 'REPAIR Formula',
      description: 'Advanced recovery support for muscles and joints with breakthrough nano-technology.',
      image: '/product-images/repair-formula.png',
      color: 'blue'
    },
    {
      id: 'rapid',
      name: 'RAPID Formula',
      description: 'Fast-acting relief when you need it most. 17× better absorption than traditional products.',
      image: '/product-images/rapid-formula.png',
      color: 'green'
    }
  ]
  
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link 
            href="/products" 
            className="text-orange-600 hover:text-orange-700 flex items-center"
            onClick={() => trackPageView('bundle_to_products', 'product_bundle')}
          >
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Products
          </Link>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-orange-50 p-8 rounded-xl">
                <Image
                  src="/product-images/product-trio.png"
                  alt="TeaHC Complete Bundle - All Three Products"
                  width={400}
                  height={400}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Best Value Package
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Complete Bundle</h1>
                <p className="text-gray-700 text-lg">
                  Experience the full TeaHC system with our complete bundle. Get all three products at a special bundle
                  price and discover the perfect combination for your wellness routine.
                </p>

                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Scientific Synergy:</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Our products are designed to work together as a complete system. Research shows that addressing
                    inflammation through multiple pathways and at different times of day provides more comprehensive
                    relief than single-product approaches.
                  </p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>TeaHC MOVE (10 satchets)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>TeaHC REPAIR (10 satchets)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>TeaHC RAPID (10 2oz nano shots)</span>
                  </li>
                </ul>

                <div className="border-t border-b py-4 space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Individual Purchase Value:</span>
                    <span className="line-through text-gray-500">$59.97</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Bundle Price:</span>
                    <span className="text-orange-600">$47.98</span>
                  </div>
                  <div className="flex justify-between text-green-600 text-sm font-medium">
                    <span>Your Savings:</span>
                    <span>$11.99 (20%)</span>
                  </div>
                </div>

                <Link 
                  href="/reserve?product=bundle&source=product_bundle"
                  onClick={() => trackPageView('bundle_to_reserve', 'product_bundle')}
                  passHref
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    Reserve Bundle Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold text-center">Bundle Includes These Products</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              The bundle combines daytime support (MOVE), nighttime recovery (REPAIR), and on-demand relief (RAPID)
              for a complete 24-hour anti-inflammatory solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
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
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link 
                    href={`/products/${product.id}?source=bundle_page`}
                    onClick={() => trackPageView(`bundle_to_${product.id}`, 'product_bundle')}
                    passHref
                  >
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-300"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-orange-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to experience the difference?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Reserve your TeaHC bundle today at exclusive pre-launch pricing. No payment required until your order ships.
            </p>
            <Link 
              href="/reserve?product=bundle&source=product_bundle_footer" 
              onClick={() => trackPageView('bundle_footer_to_reserve', 'product_bundle')}
              passHref
            >
              <Button 
                size="lg" 
                className="px-8 py-4 text-xl bg-orange-500 hover:bg-orange-600 rounded-xl"
              >
                Reserve Your Bundle
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function BundlePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BundlePageContent />
    </Suspense>
  )
} 