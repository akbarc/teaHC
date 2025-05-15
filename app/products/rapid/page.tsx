"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { track } from '@vercel/analytics'
import ProductDetailTemplate, { IngredientType } from "@/components/product-detail-template"
import EmailSignup from '@/app/components/email-signup'
import * as fbq from '@/lib/facebook-pixel'

// RAPID product active ingredients
const activeIngredients: IngredientType[] = [
  {
    name: "Curcumin Phytosome",
    dose: "400 mg",
    function: "Fast-acting anti-inflammatory for acute joint or muscle flare-ups"
  },
  {
    name: "Nano-cannabinoid emulsion (40nm droplet)",
    dose: "CBD 30mg • THCV 10mg • CBG 10mg • Δ9-THC 1mg",
    function: "Rapid absorption; targets inflammatory cytokines and pain pathways"
  },
  {
    name: "Devil's-claw extract",
    dose: "≥50mg harpagoside",
    function: "Natural anti-inflammatory and pain relief"
  },
  {
    name: "Gingerols",
    dose: "45mg (std. extract)",
    function: "Activates circulation, desensitizes TRPV1 pain receptors"
  },
  {
    name: "Piperine",
    dose: "5mg",
    function: "Enhances curcumin and cannabinoid absorption via inhibition of liver metabolism"
  }
]

// RAPID product other ingredients
const otherIngredients: IngredientType[] = [
  {
    name: "Purified water",
    function: "Base liquid (qs to 60mL)"
  },
  {
    name: "Black-tea solids (decaf)",
    function: "Provides 15mg caffeine, natural base"
  },
  {
    name: "Cinnamon bark extract",
    function: "Anti-inflammatory spice, flavor component"
  },
  {
    name: "Ginger juice concentrate",
    function: "Natural anti-inflammatory, flavor enhancer"
  },
  {
    name: "Cardamom CO₂ extract",
    function: "Digestive support, flavor component"
  },
  {
    name: "Clove oil (natural, 10% emulsion)",
    function: "Anti-inflammatory, flavor component"
  },
  {
    name: "Black-pepper oleoresin",
    function: "Enhances absorption, flavor component"
  },
  {
    name: "Madagascar vanilla extract",
    function: "Natural flavor harmonizer"
  },
  {
    name: "Date-syrup solids",
    function: "Natural sweetener"
  },
  {
    name: "Oat-milk powder",
    function: "Provides smooth mouthfeel"
  },
  {
    name: "Natural chai flavor harmonizer",
    function: "Flavor enhancement"
  },
  {
    name: "Potassium sorbate / citric acid",
    function: "Preservative system (pH 3.8)"
  }
]

// RAPID product science description paragraphs
const scienceDescription = [
  "TeaHC RAPID is our fastest-acting formula, designed for immediate relief when you need it most. The combination of nano-emulsified cannabinoids (40nm droplets) and curcumin phytosomes creates a powerful anti-inflammatory effect that can be felt in as little as 10 minutes.",
  "Our proprietary nano-emulsification technology breaks down the active compounds into ultra-small particles that are rapidly absorbed through the tissues. The addition of piperine and gingerols enhances this absorption while providing complementary anti-inflammatory benefits. The chai-spice flavor profile not only masks the natural bitterness of some ingredients but also contributes additional therapeutic compounds."
]

// RAPID product benefits
const benefits = [
  "Ultra-fast acting (onset in ~10 minutes)",
  "Targeted relief for acute discomfort",
  "Maintains mental clarity and focus",
  "Portable, on-the-go format"
]

// Specific use cases for RAPID
const useCases = [
  {
    title: "Post-Workout Recovery",
    description: "Take immediately after intense exercise to support muscle recovery and reduce soreness",
    icon: "dumbbell"
  },
  {
    title: "Sudden Joint Flare-Ups",
    description: "Keep in your bag or desk for unexpected discomfort during daily activities",
    icon: "flash"
  },
  {
    title: "On-the-Go Support",
    description: "Perfect travel companion when you need fast relief away from home",
    icon: "bag"
  }
]

function RapidContentPage() {
  const searchParams = useSearchParams()
  const source = searchParams.get('source')
  
  useEffect(() => {
    // Track page view when component mounts
    track('product_rapid_view', { 
      source: source || 'direct',
      timestamp: new Date().toISOString()
    })
    
    // Track Facebook Pixel ViewContent event
    fbq.trackProductView({
      id: 'rapid',
      name: 'TeaHC RAPID Formula',
      price: 19.99,
      category: 'Products'
    })
  }, [source])

  // Function to track button clicks
  const trackButtonClick = (action: string) => {
    track(action, {
      page: 'product_rapid',
      timestamp: new Date().toISOString()
    })
  }
  
  return (
    <main className="min-h-screen">
      {/* Announcement bar with email signup */}
      <section className="bg-amber-900 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-medium">
                🔥 Be the first to know when RAPID launches. <span className="hidden md:inline">Get exclusive early access!</span>
              </p>
            </div>
            <div className="w-full md:w-auto">
              <EmailSignup 
                source="rapid_product_page" 
                buttonText="Get Early Access" 
                className="max-w-md mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                  Target Pain. Move Fast.
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  15 Minutes <span className="text-amber-600">to Calm</span>
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  Pocket-sized relief engineered to penetrate tissue fast with delicious chai flavor.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Feel the difference before your coffee cools</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Nano-particles deliver 17× better absorption</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Premium chai flavor for a delicious experience</p>
                  </div>
                </div>
                <div className="space-x-4">
                  <Link href="/reserve?product=rapid" passHref>
                    <Button 
                      size="lg" 
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => trackButtonClick('rapid_hero_reserve')}
                    >
                      Reserve Now
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                    onClick={() => {
                      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                      trackButtonClick('rapid_hero_learn_more');
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full blur-2xl opacity-50"></div>
                <div className="relative z-10">
                  <Image
                    src="/product-images/rapid_new_image.png"
                    alt="TeaHC RAPID - Fast-Acting Relief Nano Shot"
                    width={450}
                    height={450}
                    className="mx-auto drop-shadow-xl"
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 450px"
                    quality={95}
                  />
                  <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    15 MIN
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How RAPID Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you need relief now, not later. Our fastest-acting formula works in 3 simple steps:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-xl p-6 text-center"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Take One Shot</h3>
              <p className="text-gray-600">
                Enjoy the premium chai flavor that makes relief a delicious experience
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-xl p-6 text-center"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Nano-Absorption</h3>
              <p className="text-gray-600">
                Ultra-small particles (15-25nm) are absorbed directly through tissues
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-xl p-6 text-center"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Feel Relief</h3>
              <p className="text-gray-600">
                Experience calm comfort in as little as 15 minutes, not hours
              </p>
            </motion.div>
          </div>
          
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-6 md:p-10">
                  <h3 className="text-2xl font-bold mb-4">The Chai Experience</h3>
                  <p className="text-gray-700 mb-6">
                    We've crafted RAPID with a premium chai flavor profile that transforms relief into an enjoyable experience. The warm notes of cinnamon, cardamom, and clove complement the formula's potent ingredients.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="bg-amber-200 p-1.5 rounded-full mr-3">
                        <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">Warming cinnamon notes</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-amber-200 p-1.5 rounded-full mr-3">
                        <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">Aromatic cardamom spice</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-amber-200 p-1.5 rounded-full mr-3">
                        <svg className="h-4 w-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">Subtle clove undertones</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-200 to-amber-100 p-10 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-amber-800 mb-2">Premium Chai Flavor</h4>
                    <p className="text-amber-700">Expertly blended for taste and function</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">When To Use RAPID</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your pocket-sized solution for these key moments:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-amber-600 h-2"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Post-Workout Recovery</h3>
                <p className="text-gray-600 mb-4">
                  Take immediately after intense exercise to support muscle recovery and reduce soreness. No waiting hours for relief.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 italic">
                    "I keep RAPID in my gym bag - it's my post-lifting secret weapon." - Jason, 34
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-amber-600 h-2"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sudden Joint Flare-Ups</h3>
                <p className="text-gray-600 mb-4">
                  Keep in your bag or desk for unexpected discomfort during daily activities. Get back to what matters in minutes.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 italic">
                    "When my knee suddenly acts up, RAPID is my go-to solution." - Margaret, 58
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-amber-600 h-2"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">On-the-Go Support</h3>
                <p className="text-gray-600 mb-4">
                  Perfect travel companion when you need fast relief away from home. No drowsiness, just targeted comfort.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 italic">
                    "I never travel without RAPID - it's pocket-sized peace of mind." - Sarah, 42
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Product Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes RAPID Different</h2>
                <p className="text-gray-700 mb-6">
                  RAPID isn't just another supplement. It's precision-engineered for those moments when you need relief now, not later.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-amber-100 p-1.5 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center space-x-6 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-600">15</div>
                    <div className="text-sm text-gray-600">minutes to relief</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-600">17×</div>
                    <div className="text-sm text-gray-600">better absorption</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-600">2oz</div>
                    <div className="text-sm text-gray-600">pocket-sized shots</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 md:p-8"
              >
                <h3 className="text-xl font-bold mb-4">Product Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                    <span className="font-medium">Format:</span>
                    <span>2oz Liquid Nano Shots</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                    <span className="font-medium">Flavor:</span>
                    <span>Premium Chai Blend</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                    <span className="font-medium">Quantity:</span>
                    <span>10 shots per box</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                    <span className="font-medium">Usage:</span>
                    <span>As needed for fast relief</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                    <span className="font-medium">Price:</span>
                    <div>
                      <span className="font-bold">$19.99</span>
                      <span className="text-sm text-gray-500 line-through ml-2">$39.99</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Sugar-Free", "Gluten-Free", "Vegan", "Non-GMO", "Lab Tested"].map((badge, index) => (
                    <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-gray-700">
                      {badge}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link href="/reserve?product=rapid&source=product_details" passHref>
                    <Button 
                      size="lg" 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => trackButtonClick('rapid_details_reserve')}
                    >
                      Reserve Your Supply
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">The Science Behind RAPID</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    TeaHC RAPID utilizes our most advanced nano-emulsification technology to create ultra-small particles (15-25 nanometers) that are absorbed directly through the oral mucosa and digestive tract for immediate action.
                  </p>
                  <p className="text-gray-700">
                    The liquid format allows for maximum surface area contact and rapid absorption. We've included piperine (black pepper extract) which has been shown in clinical studies to enhance the bioavailability of curcumin by up to 2000%. The addition of gingerols from ginger extract provides complementary anti-inflammatory action through COX-2 inhibition.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Key Active Ingredients:</h4>
                  <ul className="space-y-2">
                    {activeIngredients.slice(0, 4).map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-amber-200 p-1 rounded-full mr-2 mt-1">
                          <svg className="h-3 w-3 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">{ingredient.name}</span>
                          <span className="text-sm text-gray-600 ml-2">({ingredient.dose})</span>
                          <p className="text-sm text-gray-600">{ingredient.function}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <Link href="/science" passHref>
                  <Button 
                    variant="outline" 
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                    onClick={() => trackButtonClick('rapid_details_science')}
                  >
                    Learn More About Our Science
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Complete Formula Section */}
            <div className="mt-16 bg-white rounded-xl p-6 md:p-8 border border-amber-200">
              <h3 className="text-2xl font-bold mb-6 text-amber-800">Complete Formula Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-amber-100">
                      <th className="px-4 py-2 text-amber-800">Component</th>
                      <th className="px-4 py-2 text-amber-800">wt. (mg) / vol.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    <tr>
                      <td className="px-4 py-2">Purified water</td>
                      <td className="px-4 py-2">qs to 60 mL</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="px-4 py-2">Black‑tea solids (decaf, provides 15 mg caffeine)</td>
                      <td className="px-4 py-2">250</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Cinnamon bark extract</td>
                      <td className="px-4 py-2">120</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="px-4 py-2">Ginger juice concentrate</td>
                      <td className="px-4 py-2">100</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Cardamom CO₂ extract</td>
                      <td className="px-4 py-2">50</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="px-4 py-2">Clove oil (natural, 10 % emulsion)</td>
                      <td className="px-4 py-2">20</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Black‑pepper oleoresin</td>
                      <td className="px-4 py-2">10</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="px-4 py-2">Madagascar vanilla extract</td>
                      <td className="px-4 py-2">10</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Date‑syrup solids (sweetener)</td>
                      <td className="px-4 py-2">2,000</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="px-4 py-2">Oat‑milk powder (mouthfeel)</td>
                      <td className="px-4 py-2">1,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Curcumin Phytosome</td>
                      <td className="px-4 py-2">400</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="px-4 py-2">Nano‑cannabinoid emulsion (40 nm droplet): CBD 30 mg • THCV 10 mg • CBG 10 mg • Δ9‑THC 1 mg</td>
                      <td className="px-4 py-2">180</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Devil's‑claw extract (≥50 mg harpagoside)</td>
                      <td className="px-4 py-2">100</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="px-4 py-2">Gingerols 45 mg (std. extract)</td>
                      <td className="px-4 py-2">45</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Piperine</td>
                      <td className="px-4 py-2">5</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="px-4 py-2">Natural chai flavor harmonizer</td>
                      <td className="px-4 py-2">120</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Potassium sorbate / citric acid (pH 3.8)</td>
                      <td className="px-4 py-2">60</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-gray-700 italic">
                  <span className="font-medium">Usage:</span> Shake, shoot; onset in ~10 min thanks to nano‑delivery + piperine. Warm, sweet‑spicy chai lights up the curcumin and masks devil's‑claw bitterness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Complete System Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Your System</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RAPID works best as part of your complete 24/7 anti-inflammatory solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-amber-500 p-4 text-white">
                <h3 className="text-xl font-bold">MOVE Formula</h3>
                <p className="text-white/80">Morning Support</p>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-48 h-48 relative mb-4">
                  <Image
                    src="/product-images/move-formula.png"
                    alt="TeaHC MOVE"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 192px"
                    className="object-contain"
                    quality={85}
                  />
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Begin your day with mobility and comfort that lasts
                </p>
                <Link 
                  href="/products/move?source=rapid_page" 
                  passHref
                  className="text-amber-600 hover:text-amber-700 underline text-sm"
                  onClick={() => trackButtonClick('rapid_to_move')}
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform md:scale-110 z-10 border-2 border-amber-300">
              <div className="bg-amber-600 p-4 text-white relative">
                <div className="absolute -top-3 -right-3 bg-amber-100 text-amber-800 px-2 py-1 rounded-lg text-xs font-bold shadow">
                  YOU ARE HERE
                </div>
                <h3 className="text-xl font-bold">RAPID Formula</h3>
                <p className="text-white/80">On-Demand Relief</p>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-48 h-48 relative mb-4">
                  <Image
                    src="/product-images/rapid_new_image.png"
                    alt="TeaHC RAPID"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 192px"
                    className="object-contain"
                    quality={85}
                  />
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Fast-acting support whenever you need it most
                </p>
                <span className="text-amber-800 bg-amber-100 px-3 py-1 rounded-full text-sm">
                  Current Product
                </span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-700 p-4 text-white">
                <h3 className="text-xl font-bold">REPAIR Formula</h3>
                <p className="text-white/80">Nighttime Recovery</p>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-48 h-48 relative mb-4">
                  <Image
                    src="/product-images/repair-formula.png"
                    alt="TeaHC REPAIR"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 192px"
                    className="object-contain"
                    quality={85}
                  />
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Support recovery and comfort while you sleep
                </p>
                <Link 
                  href="/products/repair?source=rapid_page" 
                  passHref
                  className="text-blue-700 hover:text-blue-800 underline text-sm"
                  onClick={() => trackButtonClick('rapid_to_repair')}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-md border border-amber-100">
              <h4 className="text-xl font-bold mb-4">Save 20% with the Complete Bundle</h4>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-amber-600">$47.98</span>
                <span className="text-xl text-gray-500 line-through ml-4">$59.97</span>
              </div>
              <Link href="/products/bundle?source=rapid_page" passHref>
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => trackButtonClick('rapid_to_bundle')}
                >
                  View Bundle Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              Fast Relief Awaits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Target Pain. Move Fast.</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the 15-minute difference with TeaHC RAPID. Reserve yours today at our exclusive pre-launch pricing.
            </p>
            <Link href="/reserve?product=rapid&source=footer_cta" passHref>
              <Button 
                size="lg" 
                className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-6 text-xl"
                onClick={() => trackButtonClick('rapid_footer_reserve')}
              >
                Reserve Your RAPID Supply
              </Button>
            </Link>
            <p className="mt-4 text-white/80">
              No payment required until your order ships • 30-day satisfaction guarantee
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function RapidProductPage() {
  return (
    <ProductDetailTemplate
      id="rapid"
      name="RAPID"
      tagline="Instant Relief Formula"
      description="Our fastest-acting formula designed for immediate relief when you need it most. Combines nano-emulsified cannabinoids with curcumin phytosomes in a convenient 60mL shot format."
      image="/product-images/rapid_new_image.png"
      format="Chai-Spice Liquid Shot"
      quantity="60mL PET mini bottle"
      usage="As needed for fast relief"
      colorClass="text-amber-600"
      colorBgClass="bg-amber-50"
      colorTextClass="text-amber-800"
      price={19.99}
      badges={["Sugar-Free", "Gluten-Free", "Vegan", "Non-GMO", "Lab Tested"]}
      activeIngredients={activeIngredients}
      otherIngredients={otherIngredients}
      benefits={benefits}
      scienceDescription={scienceDescription}
    />
  )
} 