"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { track } from '@vercel/analytics'
import { IngredientType } from "@/components/product-detail-template"

// RAPID product active ingredients
const activeIngredients: IngredientType[] = [
  {
    name: "Curcumin Phytosome (Meriva®)",
    dose: "200 mg",
    function: "Fast-acting anti-inflammatory for acute joint or muscle flare-ups"
  },
  {
    name: "CBD (nano)",
    dose: "15 mg",
    function: "Rapid absorption; targets inflammatory cytokines and pain pathways"
  },
  {
    name: "THCV (nano)",
    dose: "10 mg",
    function: "Energizing, non-sedating relief agent"
  },
  {
    name: "Gingerol Complex",
    dose: "50 mg",
    function: "Activates circulation, desensitizes TRPV1 pain receptors"
  },
  {
    name: "Piperine (Black Pepper Extract)",
    dose: "5 mg",
    function: "Enhances curcumin and cannabinoid absorption via inhibition of liver metabolism"
  },
  {
    name: "Electrolyte Blend (Mg, K, Na)",
    dose: "50 mg",
    function: "Replenishes minerals lost during inflammation, exercise, or stress"
  }
]

// RAPID product other ingredients
const otherIngredients: IngredientType[] = [
  {
    name: "Purified Water",
    function: "Liquid base"
  },
  {
    name: "Chai Natural Flavor",
    function: "Premium spiced flavor profile (cinnamon, cardamom, clove)"
  },
  {
    name: "Lemon Juice Concentrate",
    function: "Natural acidity and flavor"
  },
  {
    name: "Monk Fruit Sweetener",
    function: "Sugar-free sweetness (natural, low-calorie)"
  },
  {
    name: "Coconut MCT Oil",
    function: "Carrier for nano cannabinoids; enhances absorption"
  },
  {
    name: "Citric Acid",
    function: "Preservative and pH control"
  },
  {
    name: "Xanthan Gum",
    function: "Natural thickener and stabilizer"
  },
  {
    name: "Potassium Sorbate",
    function: "Shelf-life stabilizer (minimal, FDA-safe levels)"
  },
  {
    name: "Beta-Carotene",
    function: "Natural colorant (vitamin A precursor)"
  }
]

// RAPID product science description paragraphs
const scienceDescription = [
  "TeaHC RAPID utilizes our most advanced nano-emulsification technology to create ultra-small particles (15-25 nanometers) that are absorbed directly through the oral mucosa and digestive tract for immediate action.",
  "The liquid format allows for maximum surface area contact and rapid absorption. We've included piperine (black pepper extract) which has been shown in clinical studies to enhance the bioavailability of curcumin by up to 2000%. The addition of gingerol from ginger extract provides complementary anti-inflammatory action through COX-2 inhibition."
]

// RAPID product benefits
const benefits = [
  "Ultra-fast relief in just 15 minutes",
  "Target pain with precision nano-technology",
  "17× better absorption than traditional supplements",
  "No drowsiness or mental fog - stay sharp",
  "Pocket-sized convenience for on-the-go relief"
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
                <Image
                  src="/product-images/rapid-formula.png"
                  alt="TeaHC RAPID - Fast-Acting Relief Nano Shot"
                  width={400}
                  height={400}
                  className="relative z-10 drop-shadow-xl"
                />
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  15 MIN
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
              <div className="grid md:grid-cols-5 items-center">
                <div className="md:col-span-2 p-6 md:p-10">
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
                <div className="md:col-span-3 relative h-full">
                  <div className="h-60 md:h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center">
                      <div className="p-6 text-center">
                        <h4 className="text-xl font-bold text-amber-800 mb-2">Premium Chai Spices</h4>
                        <p className="text-amber-700">Cinnamon, Cardamom, and Clove</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-100/80 to-transparent"></div>
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
                    The liquid format allows for maximum surface area contact and rapid absorption. We've included piperine (black pepper extract) which has been shown in clinical studies to enhance the bioavailability of curcumin by up to 2000%. The addition of gingerol from ginger extract provides complementary anti-inflammatory action through COX-2 inhibition.
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
                <div className="w-32 h-32 relative mb-4">
                  <Image
                    src="/product-images/move-formula.png"
                    alt="TeaHC MOVE"
                    fill
                    className="object-contain"
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
                <div className="w-32 h-32 relative mb-4">
                  <Image
                    src="/product-images/rapid-formula.png"
                    alt="TeaHC RAPID"
                    fill
                    className="object-contain"
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
                <div className="w-32 h-32 relative mb-4">
                  <Image
                    src="/product-images/repair-formula.png"
                    alt="TeaHC REPAIR"
                    fill
                    className="object-contain"
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
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <RapidContentPage />
    </Suspense>
  )
} 