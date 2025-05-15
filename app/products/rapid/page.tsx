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
      <section className="relative py-12 md:py-24 bg-gradient-to-b from-amber-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                Fast-Acting Relief
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Recover faster—back to training in 15 minutes
              </h1>
              <p className="text-xl text-gray-700 mb-6 max-w-xl mx-auto md:mx-0">
                TeaHC RAPID delivers targeted relief in minutes, not hours. Our proprietary nano-technology ensures maximum absorption and effectiveness.
              </p>

              {/* Discount Ribbon */}
              <div className="mb-6 bg-amber-50 p-5 rounded-lg border border-amber-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-amber-800 font-medium">50% Pre-Launch Discount</p>
                    <p className="text-sm text-amber-600">Ships July 2025 • Pay Later</p>
                  </div>
                  <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Limited Time
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
                  onClick={() => {
                    trackButtonClick('rapid_landing_hero_cta');
                    window.location.href = '/products/bundle?product=rapid&source=rapid_landing';
                  }}
                >
                  Get 3-Pack 50% Off
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-6 text-lg"
                  onClick={() => {
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                    trackButtonClick('rapid_landing_hero_learn_more');
                  }}
                >
                  See How It Works
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute -inset-10 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative z-10">
                <Image
                  src="/product-images/rapid_new_image.png"
                  alt="TeaHC RAPID - Fast-Acting Relief Nano Shot"
                  width={450}
                  height={600}
                  className="mx-auto object-contain drop-shadow-2xl max-h-[70vh] w-auto"
                  priority
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 450px"
                  quality={95}
                />
                <div className="absolute top-5 right-5 bg-amber-600 text-white px-4 py-2 rounded-full font-bold shadow-lg transform rotate-6">
                  15 MIN
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formula Details Section - Moved up */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center items-center"
              >
                <div className="relative w-full max-w-[400px] aspect-square">
                  <Image
                    src="/product-images/rapid-formula.png"
                    alt="TeaHC RAPID Formula"
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 400px"
                    className="object-contain drop-shadow-xl"
                    quality={90}
                  />
                  {/* Animated Callouts */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="absolute top-1/4 -left-4 bg-white p-3 rounded-lg shadow-lg"
                  >
                    <p className="text-sm font-medium text-amber-800">Nano-CBD</p>
                    <p className="text-xs text-gray-600">30mg • Enhanced Absorption</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 -right-4 bg-white p-3 rounded-lg shadow-lg"
                  >
                    <p className="text-sm font-medium text-amber-800">Boswellia</p>
                    <p className="text-xs text-gray-600">400mg • Natural Anti-Inflammatory</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute bottom-1/4 -left-4 bg-white p-3 rounded-lg shadow-lg"
                  >
                    <p className="text-sm font-medium text-amber-800">Curcumin</p>
                    <p className="text-xs text-gray-600">500mg • Enhanced Bioavailability</p>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-3">
                  Precision-Engineered Formula
                </div>
                <h2 className="text-3xl font-bold mb-4">The RAPID Formula</h2>
                <p className="text-gray-700 mb-6">
                  Scientifically formulated with clinically-dosed ingredients and our proprietary nano-emulsion technology for maximum effectiveness:
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Curcumin Phytosome:</span>
                    <span>400 mg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Nano-CBD:</span>
                    <span>30 mg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Boswellia Extract:</span>
                    <span>300 mg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Nano-THCV:</span>
                    <span>10 mg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Δ9-THC:</span>
                    <span>1 mg</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="/product-images/wasted-supplements.png"
                  alt="Comparison of supplement effectiveness"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-medium">90% Absorption vs 10%</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Cost-Per-Shot vs Pills</h2>
                <p className="text-lg text-gray-700">
                  Traditional supplements waste your money with poor absorption. TeaHC RAPID delivers more active ingredients where they're needed most.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-gray-900">Traditional Stack</p>
                        <p className="text-sm text-gray-600">CBD + Curcumin + Boswellia</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">$4-6</p>
                        <p className="text-sm text-red-500">per dose</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-amber-800">TeaHC RAPID</p>
                        <p className="text-sm text-gray-600">All-in-one nano formula</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-amber-600">$1.70</p>
                        <p className="text-sm text-green-600">per shot</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800">
                    <span className="font-medium">Save up to 65%</span> with our nano-technology that ensures 90% of active ingredients reach their target
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Will this show up on a standard cannabinoid sports test?</h3>
                <p className="text-gray-600">
                  No. TeaHC RAPID contains 0% Δ9-THC and is formulated to be compliant with standard drug testing protocols. Each batch is tested and comes with a Certificate of Analysis (COA) available in the footer.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">How fast does RAPID work?</h3>
                <p className="text-gray-600">
                  Most users report feeling relief within 15 minutes, thanks to our nano-emulsion technology that ensures rapid absorption and targeted delivery.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">What's the difference between RAPID and other products?</h3>
                <p className="text-gray-600">
                  RAPID uses proprietary nano-technology to achieve 17× better absorption than standard supplements. This means more active ingredients reach their target, working faster and more effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Selection */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Choose Your Bundle</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Select the perfect pack size for your needs
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-transparent hover:border-amber-200 transition-colors"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">10-Pack</h3>
                  <p className="text-gray-600 mb-4">30-Day Supply</p>
                  <div className="text-2xl font-bold mb-4">
                    <span className="text-amber-500">$169.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$399.90</span>
                  </div>
                  <Button 
                    className="w-full bg-amber-500 hover:bg-amber-600"
                    onClick={() => {
                      trackButtonClick('rapid_bundle_10pack');
                      window.location.href = '/products/bundle?product=rapid&pack=10&source=rapid_landing';
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-amber-300 relative"
              >
                <div className="absolute -top-3 -right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Subscribe & Save
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Monthly Subscription</h3>
                  <p className="text-gray-600 mb-4">Auto-delivery every 30 days</p>
                  <div className="text-2xl font-bold mb-4">
                    <span className="text-amber-500">$144.49</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$399.90</span>
                  </div>
                  <p className="text-sm text-amber-600 mb-4">Save 15% + Free Shipping</p>
                  <Button 
                    className="w-full bg-amber-500 hover:bg-amber-600"
                    onClick={() => {
                      trackButtonClick('rapid_bundle_subscribe');
                      window.location.href = '/products/bundle?product=rapid&subscribe=true&source=rapid_landing';
                    }}
                  >
                    Subscribe & Save
                  </Button>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                All bundles include free shipping • 30-day satisfaction guarantee • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Footer Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-medium text-gray-900">
                50% Pre-Launch Discount • Ships July 2025
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => {
                  trackButtonClick('rapid_sticky_footer_cta');
                  window.location.href = '/products/bundle?product=rapid&source=rapid_sticky_footer';
                }}
              >
                Get 10-Pack 50% Off
              </Button>
            </div>
          </div>
        </div>
      </div>
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