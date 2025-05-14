"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { CountdownTimer } from '@/components/countdown-timer'
import EmailSignup from '@/app/components/email-signup'

export default function RapidLandingPage() {
  useEffect(() => {
    // Track page view when component mounts
    track('rapid_landing_view', { 
      source: 'direct',
      timestamp: new Date().toISOString()
    })
  }, [])

  // Function to track button clicks
  const trackButtonClick = (action: string) => {
    track(action, {
      page: 'rapid_landing',
      timestamp: new Date().toISOString()
    })
  }

  return (
    <main className="min-h-screen">
      {/* Sticky Announcement Bar */}
      <div className="sticky top-0 z-50 bg-amber-900 text-white py-3 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-center md:text-left">
              <p className="font-medium">
                <span className="hidden md:inline">🔥 </span>
                <span className="md:hidden">🔥</span>
                Reserve RAPID Now & Save 50% 
                <span className="hidden md:inline"> • Limited Pre-Launch Special</span>
              </p>
            </div>
            <div className="w-full md:w-auto">
              <EmailSignup 
                source="rapid_landing_sticky" 
                buttonText="Get Early Access" 
                className="max-w-md mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
      
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
                Target Pain. Move Fast.
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-amber-600">15 Minutes</span> to Calm
              </h1>
              <p className="text-xl text-gray-700 mb-6 max-w-xl mx-auto md:mx-0">
                Introducing TeaHC RAPID — the fast-acting anti-inflammatory nano shot with 
                <span className="font-semibold"> 17× better absorption</span> than traditional products.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start justify-center md:justify-start">
                  <div className="bg-amber-100 p-1.5 rounded-full mr-3 mt-1.5">
                    <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-left">Feel relief in as little as <span className="font-medium">15 minutes</span>, not hours</p>
                </div>
                <div className="flex items-start justify-center md:justify-start">
                  <div className="bg-amber-100 p-1.5 rounded-full mr-3 mt-1.5">
                    <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-left">Nano-particles deliver <span className="font-medium">17× better absorption</span></p>
                </div>
                <div className="flex items-start justify-center md:justify-start">
                  <div className="bg-amber-100 p-1.5 rounded-full mr-3 mt-1.5">
                    <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-left">Pocket-sized for <span className="font-medium">on-demand relief</span> anywhere</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 inline-block">
                  <div className="flex items-center space-x-3 mb-2">
                    <svg className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="font-medium text-orange-800">Limited Time Offer Ends In:</p>
                  </div>
                  <CountdownTimer />
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg text-gray-700 font-medium mb-3">Join our newsletter for special offers:</p>
                <EmailSignup 
                  source="rapid_hero_section" 
                  buttonText="Get 10% Off"
                  className="max-w-md"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/reserve?product=rapid&source=rapid_landing" passHref>
                  <Button 
                    size="lg" 
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
                    onClick={() => trackButtonClick('rapid_landing_hero_reserve')}
                  >
                    Reserve Now at 50% Off
                  </Button>
                </Link>
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
                  width={300}
                  height={500}
                  className="mx-auto object-contain drop-shadow-2xl"
                  priority
                />
                <div className="absolute top-5 right-5 bg-amber-600 text-white px-4 py-2 rounded-full font-bold shadow-lg transform rotate-6">
                  15 MIN
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Mobile Trust Indicators */}
        <div className="mt-8 py-4 bg-white shadow-sm overflow-x-auto md:hidden">
          <div className="flex space-x-6 px-4 min-w-max">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-100 p-1.5 rounded-full">
                <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium whitespace-nowrap">17× Better Absorption</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-amber-100 p-1.5 rounded-full">
                <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium whitespace-nowrap">15-Minute Relief</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-amber-100 p-1.5 rounded-full">
                <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm font-medium whitespace-nowrap">Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How RAPID Works <span className="text-amber-600">Fast</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proprietary nano-emulsion technology delivers relief in 3 simple steps:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-xl p-6 text-center relative"
            >
              <div className="absolute -top-5 -left-5 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                1
              </div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Take One Shot</h3>
              <p className="text-gray-600">
                Enjoy the premium chai flavor that transforms relief into a delicious experience
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-xl p-6 text-center relative"
            >
              <div className="absolute -top-5 -left-5 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                2
              </div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Nano-Absorption</h3>
              <p className="text-gray-600">
                Ultra-small particles (15-25nm) are absorbed directly through tissues for rapid action
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-xl p-6 text-center relative"
            >
              <div className="absolute -top-5 -left-5 bg-amber-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                3
              </div>
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Feel Relief</h3>
              <p className="text-gray-600">
                Experience calm comfort in as little as 15 minutes, not hours
              </p>
            </motion.div>
          </div>
          
          {/* Nano-Technology Visualization */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">The Science of Speed</h3>
                  <p className="text-gray-700 mb-6">
                    RAPID's breakthrough technology creates tiny nano-particles (40nm) that are absorbed 
                    <span className="font-semibold text-amber-600"> 17× better</span> than traditional supplements.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-1.5 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Direct Tissue Absorption</p>
                        <p className="text-sm text-gray-600">Bypasses digestive breakdown that wastes 90% of traditional supplements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-1.5 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Enhanced Bioavailability</p>
                        <p className="text-sm text-gray-600">Up to 90% absorption vs. just 10% for standard cannabinoids and curcumin</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-amber-100 p-1.5 rounded-full mr-3 mt-1">
                        <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Liquid Format Advantage</p>
                        <p className="text-sm text-gray-600">Maximum surface contact area for rapid onset of action</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-8 flex flex-col justify-center">
                  <div className="relative h-64 md:h-72">
                    <Image 
                      src="/product-images/nano-absorption.png"
                      alt="Nano absorption technology visualization"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="mt-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-amber-200">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Standard Absorption:</span>
                      <span className="text-sm font-medium text-red-500">Only 10%</span>
                    </div>
                    <div className="w-full h-4 bg-gray-100 rounded-full mb-4">
                      <div className="h-4 bg-red-400 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">RAPID Nano-Technology:</span>
                      <span className="text-sm font-medium text-green-600">Up to 90%</span>
                    </div>
                    <div className="w-full h-4 bg-gray-100 rounded-full">
                      <div className="h-4 bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* When to Use RAPID Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">When To Use RAPID</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Post-Workout Recovery</h3>
                <p className="text-gray-600 mb-5">
                  Take immediately after intense exercise to support muscle recovery and reduce soreness. No waiting hours for relief.
                </p>
                <div className="pt-3 border-t border-gray-100">
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
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Sudden Discomfort</h3>
                <p className="text-gray-600 mb-5">
                  Keep in your bag or desk for unexpected flare-ups during daily activities. Get back to what matters in minutes.
                </p>
                <div className="pt-3 border-t border-gray-100">
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
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-7 w-7 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">On-the-Go Support</h3>
                <p className="text-gray-600 mb-5">
                  Perfect travel companion when you need fast relief away from home. No drowsiness, just targeted comfort.
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-500 italic">
                    "I never travel without RAPID - it's pocket-sized peace of mind." - Sarah, 42
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Formula Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/product-images/rapid_new_image.png"
                  alt="TeaHC RAPID Formula"
                  width={350}
                  height={350}
                  className="mx-auto drop-shadow-xl"
                />
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
                    <span className="font-medium">Nano-THCV:</span>
                    <span>10 mg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Nano-CBG:</span>
                    <span>10 mg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Δ9-THC:</span>
                    <span>1 mg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Devil's-claw extract:</span>
                    <span>100 mg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Gingerol Complex:</span>
                    <span>45 mg</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-100">
                    <span className="font-medium">Piperine (Black Pepper Extract):</span>
                    <span>5 mg</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-gray-700 italic">
                    <span className="font-semibold">Usage:</span> Shake, drink, and feel relief in as little as 15 minutes thanks to our
                    nano-delivery system enhanced with piperine for maximum absorption.
                  </p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/products/rapid"
                className="text-amber-600 hover:text-amber-700 font-medium underline"
                onClick={() => trackButtonClick('rapid_landing_to_product_page')}
              >
                View Complete Formula Details
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results from Real People</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here's what people are saying about RAPID's 15-minute difference:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <div className="absolute -top-4 -left-4 bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="flex text-amber-500 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "After my intense CrossFit sessions, RAPID is the first thing I reach for. The difference is noticeable in about 15 minutes, and I'm back to feeling comfortable for the rest of my day."
              </p>
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-700 font-bold">MK</span>
                </div>
                <div>
                  <div className="font-medium">Mike K.</div>
                  <div className="text-sm text-gray-500">Fitness Coach, 36</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <div className="absolute -top-4 -left-4 bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="flex text-amber-500 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "When I'm traveling for business and my back acts up from those uncomfortable plane seats, RAPID is my lifesaver. It fits easily in my bag and works so much faster than anything else I've tried."
              </p>
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-700 font-bold">JR</span>
                </div>
                <div>
                  <div className="font-medium">Jennifer R.</div>
                  <div className="text-sm text-gray-500">Sales Executive, 45</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <div className="absolute -top-4 -left-4 bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="flex text-amber-500 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "At 62, I've tried countless products for my knee discomfort. RAPID is the first one that actually works quickly enough to make a difference when I need it. The taste is pleasant too - not medicinal at all."
              </p>
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-amber-700 font-bold">TS</span>
                </div>
                <div>
                  <div className="font-medium">Tom S.</div>
                  <div className="text-sm text-gray-500">Retired Teacher, 62</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Competitive Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why RAPID Outperforms Alternatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how RAPID's breakthrough nano-technology compares to traditional options:
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto overflow-hidden bg-white rounded-xl shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="bg-amber-600 text-white">
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">TeaHC RAPID</th>
                    <th className="px-6 py-4 text-center">Traditional Pain Relievers</th>
                    <th className="px-6 py-4 text-center">Standard CBD Products</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-amber-50">
                    <td className="px-6 py-4 font-medium">Onset Time</td>
                    <td className="px-6 py-4 text-center bg-green-50 text-green-700 font-medium">15 minutes</td>
                    <td className="px-6 py-4 text-center">30-60 minutes</td>
                    <td className="px-6 py-4 text-center">45-90 minutes</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="px-6 py-4 font-medium">Absorption Rate</td>
                    <td className="px-6 py-4 text-center bg-green-50 text-green-700 font-medium">Up to 90%</td>
                    <td className="px-6 py-4 text-center">Variable</td>
                    <td className="px-6 py-4 text-center">As low as 10%</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="px-6 py-4 font-medium">Side Effects</td>
                    <td className="px-6 py-4 text-center bg-green-50 text-green-700 font-medium">Minimal to none</td>
                    <td className="px-6 py-4 text-center">Common (digestive issues, drowsiness)</td>
                    <td className="px-6 py-4 text-center">Minimal, but slow to work</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="px-6 py-4 font-medium">Targeting</td>
                    <td className="px-6 py-4 text-center bg-green-50 text-green-700 font-medium">Precise nano-delivery</td>
                    <td className="px-6 py-4 text-center">System-wide</td>
                    <td className="px-6 py-4 text-center">Poor bioavailability</td>
                  </tr>
                  <tr className="hover:bg-amber-50">
                    <td className="px-6 py-4 font-medium">Convenience</td>
                    <td className="px-6 py-4 text-center bg-green-50 text-green-700 font-medium">Pocket-sized, ready to use</td>
                    <td className="px-6 py-4 text-center">Requires water</td>
                    <td className="px-6 py-4 text-center">Various formats</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Complete System Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Your System</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              RAPID works best as part of your complete 24/7 anti-inflammatory solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-amber-500 p-4 text-white">
                <h3 className="text-xl font-bold">MOVE Formula</h3>
                <p className="text-white/80">Morning Support</p>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 relative mb-4 flex items-center justify-center">
                  <Image
                    src="/product-images/move-formula.png"
                    alt="TeaHC MOVE"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Begin your day with mobility and comfort that lasts
                </p>
                <Link 
                  href="/products/move?source=rapid_landing" 
                  passHref
                  className="text-amber-600 hover:text-amber-700 underline text-sm"
                  onClick={() => trackButtonClick('rapid_landing_to_move')}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden transform md:scale-110 z-10 border-2 border-amber-300"
            >
              <div className="bg-amber-600 p-4 text-white relative">
                <div className="absolute -top-3 -right-3 bg-amber-100 text-amber-800 px-2 py-1 rounded-lg text-xs font-bold shadow">
                  YOU ARE HERE
                </div>
                <h3 className="text-xl font-bold">RAPID Formula</h3>
                <p className="text-white/80">On-Demand Relief</p>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 relative mb-4 flex items-center justify-center">
                  <Image
                    src="/product-images/rapid_new_image.png"
                    alt="TeaHC RAPID"
                    width={100}
                    height={100}
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
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-blue-700 p-4 text-white">
                <h3 className="text-xl font-bold">REPAIR Formula</h3>
                <p className="text-white/80">Nighttime Recovery</p>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-32 h-32 relative mb-4 flex items-center justify-center">
                  <Image
                    src="/product-images/repair-formula.png"
                    alt="TeaHC REPAIR"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-center mb-4">
                  Support recovery and comfort while you sleep
                </p>
                <Link 
                  href="/products/repair?source=rapid_landing" 
                  passHref
                  className="text-blue-700 hover:text-blue-800 underline text-sm"
                  onClick={() => trackButtonClick('rapid_landing_to_repair')}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-md border border-amber-100">
              <h4 className="text-xl font-bold mb-4">Save 20% with the Complete Bundle</h4>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-amber-600">$47.98</span>
                <span className="text-xl text-gray-500 line-through ml-4">$59.97</span>
              </div>
              <Link href="/products/bundle?source=rapid_landing" passHref>
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => trackButtonClick('rapid_landing_to_bundle')}
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
              Your Fast Relief Awaits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Target Pain. Move Fast.</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience the 15-minute difference with TeaHC RAPID. Reserve yours today at our exclusive pre-launch pricing.
            </p>
            
            <div className="bg-white/10 p-6 rounded-xl mb-8 backdrop-blur-sm max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-left">
                  <div className="text-white/80 text-sm">Regular Price:</div>
                  <div className="text-2xl line-through opacity-70">$39.99</div>
                </div>
                <div className="text-left">
                  <div className="text-white/80 text-sm">Pre-Launch Price:</div>
                  <div className="text-3xl font-bold">$19.99</div>
                </div>
              </div>
              <div className="bg-white/20 p-2 rounded text-center mb-4">
                <p className="font-medium">Pre-Launch Special Ends Soon:</p>
                <CountdownTimer />
              </div>
            </div>
            
            <Link href="/reserve?product=rapid&source=rapid_landing_footer" passHref>
              <Button 
                size="lg" 
                className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-6 text-xl"
                onClick={() => trackButtonClick('rapid_landing_footer_reserve')}
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
      
      {/* Bottom Email Capture */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-medium text-gray-800">
                Get notified when RAPID launches and receive exclusive offers
              </p>
            </div>
            <div className="w-full md:w-auto">
              <EmailSignup 
                source="rapid_landing_footer" 
                buttonText="Get Updates" 
                className="max-w-md mx-auto md:mx-0"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 