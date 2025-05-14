"use client"

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { trackPageView } from '@/components/product-detail-template'
import { Suspense } from 'react'

function SciencePageContent() {
  const searchParams = useSearchParams()
  const source = searchParams.get('source')
  
  useEffect(() => {
    trackPageView('science_page', source || undefined)
  }, [source])
  
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            Breakthrough Technology
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">The Science of TeaHC</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            Our revolutionary nano-emulsion technology delivers cannabinoids with <span className="font-semibold text-amber-600">17× better absorption</span> than conventional products
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-100">
              Scientifically Formulated
            </span>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100">
              Clinically Tested
            </span>
            <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-100">
              Lab Verified
            </span>
            <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium border border-amber-100">
              Precision Engineered
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <Tabs defaultValue="technology" className="w-full">
            <TabsList className="grid w-full grid-cols-3 p-1 bg-gray-50 rounded-xl">
              <TabsTrigger value="technology" className="text-base py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg">Nano Technology</TabsTrigger>
              <TabsTrigger value="ingredients" className="text-base py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg">Key Ingredients</TabsTrigger>
              <TabsTrigger value="research" className="text-base py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg">Research & Testing</TabsTrigger>
            </TabsList>

            <TabsContent value="technology" className="mt-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3 shadow-md">
                          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h2 className="text-3xl font-bold">Nano-Emulsion Technology</h2>
                      </div>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        TeaHC's proprietary nano-emulsion technology breaks down cannabinoids into ultra-small particles (15-50 nanometers) that can be easily absorbed by your body, providing relief in as little as 15 minutes.
                      </p>
                      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Traditional cannabinoid products use oil-based delivery systems that are poorly absorbed by the body's water-based systems. Our nano-emulsion technology creates water-compatible particles that provide up to <span className="font-bold text-amber-600">17× better absorption</span> and faster onset of effects.
                      </p>
                      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 shadow-sm">
                        <div className="flex items-center mb-2">
                          <svg className="h-5 w-5 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-bold text-amber-900">Size Matters</span>
                        </div>
                        <p className="text-amber-800">
                          Our nano-particles are 40-1000× smaller than traditional emulsions, allowing them to pass through cell membranes more efficiently.
                        </p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200 shadow-inner">
                      <div className="relative h-80 w-full">
                        <Image
                          src="/nano-absorption.png"
                          alt="Nano-Emulsion Technology Absorption Comparison"
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          quality={95}
                        />
                      </div>
                      <div className="bg-white/70 backdrop-blur-sm p-3 rounded-lg border border-amber-200 mt-2">
                        <p className="text-sm font-medium text-amber-900 text-center">
                          Comparison of absorption rates: <span className="text-green-600">Nano</span> vs. <span className="text-red-500">Traditional</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-blue-800">Faster Onset</h3>
                      <p className="text-gray-700">
                        Effects begin in 10-30 minutes compared to 1-2 hours for traditional products, providing relief when you need it most.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100 shadow-sm">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-green-800">Higher Bioavailability</h3>
                      <p className="text-gray-700">
                        Up to 17× more cannabinoids reach your system compared to oil-based formulations, creating more effective relief with lower doses.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 shadow-sm">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                        <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-purple-800">Precise Dosing</h3>
                      <p className="text-gray-700">
                        Consistent effects with every dose due to our standardized nano-particle size distribution and quality control procedures.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-10">
                    <h3 className="text-2xl font-bold mb-6">How Our Nano-Technology Works</h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold text-amber-600">1</span>
                        </div>
                        <h4 className="font-bold mb-2">Nano-Encapsulation</h4>
                        <p className="text-sm text-gray-600">
                          Cannabinoid molecules are surrounded with a water-compatible shell at nano-scale (15-50nm)
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold text-amber-600">2</span>
                        </div>
                        <h4 className="font-bold mb-2">Enhanced Absorption</h4>
                        <p className="text-sm text-gray-600">
                          Tiny particles bypass digestive breakdown and are absorbed directly through tissue
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold text-amber-600">3</span>
                        </div>
                        <h4 className="font-bold mb-2">Rapid Delivery</h4>
                        <p className="text-sm text-gray-600">
                          Active compounds reach the bloodstream quickly for fast-acting, effective relief
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our nano-emulsification process dramatically increases cannabinoids' ability to pass through your digestive system and cell membranes, delivering more of the active ingredients where they're needed. The result is a fast-acting, highly bioavailable product that provides maximum benefits with lower doses.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-6">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-3 shadow-md">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold">Key Ingredients & Their Benefits</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 max-w-4xl">
                    Our formulas combine precisely dosed cannabinoids with synergistic botanicals, creating a multi-pathway approach to inflammation and discomfort that conventional products can't match.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-10 mb-12">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-amber-800">Cannabinoids</h3>
                      </div>
                      <p className="text-amber-800 mb-5 italic font-medium">
                        Precision-formulated nano-cannabinoids providing targeted relief without psychoactive effects
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-amber-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">CBD (Cannabidiol)</span> 
                              <p className="text-gray-700 text-sm">Anti-inflammatory, analgesic, non-psychoactive. Acts on CB1, CB2 receptors and TRPV1 channels.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-amber-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">THCV (Tetrahydrocannabivarin)</span> 
                              <p className="text-gray-700 text-sm">Energizing, anti-inflammatory, non-intoxicating. Blocks CB1 receptors at low doses.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-amber-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">CBG (Cannabigerol)</span> 
                              <p className="text-gray-700 text-sm">Anti-inflammatory, neuroprotective. The "mother cannabinoid" from which other cannabinoids are synthesized.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-amber-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">CBN (Cannabinol)</span> 
                              <p className="text-gray-700 text-sm">Mildly sedative, promotes sleep and recovery. Used exclusively in our REPAIR formula for nighttime use.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-green-800">Complementary Botanicals</h3>
                      </div>
                      <p className="text-green-800 mb-5 italic font-medium">
                        Scientifically-backed botanical ingredients that work synergistically with cannabinoids
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">Curcumin Phytosome (Meriva®)</span> 
                              <p className="text-gray-700 text-sm">Highly bioavailable turmeric extract with proven anti-inflammatory effects. 29× better absorption than standard curcumin.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">Boswellia Serrata</span> 
                              <p className="text-gray-700 text-sm">Traditional anti-inflammatory agent that blocks 5-LOX pathway, complementing the COX-2 inhibition from other ingredients.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">Gingerols</span> 
                              <p className="text-gray-700 text-sm">Active compounds in ginger that inhibit COX-2 enzymes responsible for inflammation and pain signaling.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">Tart Cherry Extract</span> 
                              <p className="text-gray-700 text-sm">Natural source of melatonin and antioxidants for improved recovery and sleep quality (in REPAIR formula).</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-10 mb-8">
                    <h3 className="text-2xl font-bold mb-6">The Entourage Effect</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2">
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                          Our formulas take advantage of the "entourage effect" — the scientifically validated phenomenon where cannabinoids and other plant compounds work better together than in isolation.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          By combining specific cannabinoids with complementary botanicals, we create formulations that provide more comprehensive relief than single-compound approaches.
                        </p>
                        <div className="bg-gradient-to-r from-amber-50 to-blue-50 p-6 rounded-xl border border-amber-100 shadow-sm">
                          <h4 className="text-xl font-bold mb-3 text-gray-800">Multi-Pathway Anti-Inflammatory Action</h4>
                          <p className="text-gray-700 mb-3">
                            TeaHC products target inflammation through multiple biological pathways simultaneously:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                              <span className="text-sm">Endocannabinoid system</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                              <span className="text-sm">COX-2 enzyme inhibition</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                              <span className="text-sm">5-LOX enzyme inhibition</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
                              <span className="text-sm">NF-κB modulation</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                              <span className="text-sm">Cytokine reduction</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-indigo-500 mr-2"></div>
                              <span className="text-sm">Antioxidant action</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <div className="relative h-80 w-full">
                          <Image
                            src="/entourage-effect.png"
                            alt="The Entourage Effect visualization"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <p className="text-sm text-gray-500 text-center mt-2">
                          Visualization of how multiple compounds work together for enhanced effects
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-800">Product-Specific Formulation</h3>
                    </div>
                    <p className="text-blue-800 mb-5 italic font-medium">
                      Each TeaHC product is specifically formulated for its intended use case
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-100">
                        <h4 className="font-bold text-amber-600 mb-2">MOVE Formula</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Daytime mobility support with energizing THCV and rapid-absorption curcumin. Non-drowsy formulation.
                        </p>
                        <div className="flex justify-center">
                          <span className="bg-amber-100 text-amber-600 text-xs font-medium px-2 py-1 rounded-full">
                            Morning Use
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-100">
                        <h4 className="font-bold text-amber-600 mb-2">RAPID Formula</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Fast-acting nano shot for immediate relief with maximum absorption through liquid delivery.
                        </p>
                        <div className="flex justify-center">
                          <span className="bg-amber-100 text-amber-600 text-xs font-medium px-2 py-1 rounded-full">
                            On-Demand Relief
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-100">
                        <h4 className="font-bold text-blue-600 mb-2">REPAIR Formula</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          Nighttime recovery blend with CBN and tart cherry for enhanced sleep quality and overnight repair.
                        </p>
                        <div className="flex justify-center">
                          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                            Evening Use
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="research" className="mt-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8 md:p-10">
                  <div className="flex items-center mb-6">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-3 shadow-md">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold">Research & Testing</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed">
                    At TeaHC, all our formulations are based on rigorous science and undergo comprehensive testing to ensure safety, potency, and consistency. We regularly validate our products through both internal and third-party testing.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-10 mb-12">
                    <div>
                      <div className="flex items-center mb-5">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-800">Clinical Studies</h3>
                      </div>
                      
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-sm mb-6">
                        <h4 className="font-bold mb-4 text-blue-800 text-lg">Key Research Findings:</h4>
                        <div className="space-y-4">
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-200">
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-gray-700">
                                  Nano-emulsified CBD shows <span className="font-bold text-blue-700">17× higher bioavailability</span> compared to standard CBD oil (Pharmacokinetic study, 2022)
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-200">
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-gray-700">
                                  Combination of CBD and THCV demonstrates <span className="font-bold text-blue-700">enhanced anti-inflammatory effects</span> versus either compound alone (Journal of Pain Research, 2021)
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-200">
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-gray-700">
                                  Curcumin phytosomes show <span className="font-bold text-blue-700">29× higher absorption rates</span> than standard curcumin powder (Bioavailability study, 2020)
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-200">
                            <div className="flex items-start">
                              <div className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-gray-700">
                                  Cannabinoid-terpene combinations demonstrate <span className="font-bold text-blue-700">synergistic effects</span> on inflammation markers (Frontiers in Neuroscience, 2020)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                        <div className="flex items-center mb-4">
                          <svg className="h-6 w-6 text-indigo-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-bold text-indigo-900">Scientific Advisory Board</span>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Our formulas are developed in collaboration with leading cannabinoid researchers, pharmacologists, and physicians who specialize in inflammation and pain management.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-5">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-green-800">Quality Testing</h3>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 shadow-sm mb-8">
                        <p className="text-green-800 mb-5 italic font-medium">
                          Every batch of TeaHC products undergoes rigorous testing for purity, potency, and consistency
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                            <div className="flex items-start">
                              <div className="bg-green-100 p-2 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium">Potency Testing</h4>
                                <p className="text-sm text-gray-600">HPLC analysis verifies exact cannabinoid content in each batch</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                            <div className="flex items-start">
                              <div className="bg-green-100 p-2 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium">Purity Testing</h4>
                                <p className="text-sm text-gray-600">Screening for pesticides, heavy metals, residual solvents, and microbial contaminants</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                            <div className="flex items-start">
                              <div className="bg-green-100 p-2 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium">Consistency Testing</h4>
                                <p className="text-sm text-gray-600">DLS (Dynamic Light Scattering) analysis confirms nano-particle size and distribution</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                            <div className="flex items-start">
                              <div className="bg-green-100 p-2 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-medium">Stability Testing</h4>
                                <p className="text-sm text-gray-600">Products are tested over time to ensure nano-emulsion stability and shelf life</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative w-full h-48 md:h-64 mt-6">
                          <Image
                            src="/thermal-knee-scan.png"
                            alt="Thermal imaging showing reduced inflammation"
                            fill
                            className="object-contain rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            quality={90}
                          />
                        </div>
                        <p className="text-sm text-center mt-2 text-green-800">
                          Thermal imaging showing reduced inflammation after TeaHC use (clinical study)
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-10">
                    <h3 className="text-2xl font-bold mb-6">The Wasted Supplements Problem</h3>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-xl p-6 border border-red-100 shadow-sm">
                          <h4 className="text-xl font-bold mb-3 text-red-800">The Problem with Traditional Supplements</h4>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Most traditional supplements have extremely poor bioavailability. This means that up to <span className="font-bold text-red-600">90%</span> of what you consume is simply wasted, passing through your body without being absorbed.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            Oil-based cannabinoids in particular struggle to be absorbed by the human body's water-based systems, leading to inefficient delivery and unpredictable effects.
                          </p>
                          
                          <div className="mt-4 pt-4 border-t border-red-100">
                            <h4 className="font-bold mb-2 text-green-800">The TeaHC Solution</h4>
                            <p className="text-gray-700">
                              Our nano-emulsion technology solves this problem by dramatically increasing the amount of active ingredients your body can actually use, giving you more benefits from smaller doses and faster onset of effects.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="bg-white p-4 rounded-xl shadow-md">
                          <div className="relative h-64 w-full">
                            <Image
                              src="/wasted-supplements.png"
                              alt="Comparison of absorption rates"
                              fill
                              className="object-contain rounded-lg"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              quality={90}
                            />
                          </div>
                          <p className="text-sm text-gray-600 text-center mt-3 italic font-medium">
                            Visualization of traditional vs. TeaHC nano-emulsified absorption rates
                          </p>
                          
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                              <p className="text-center font-bold text-red-600 text-2xl">10%</p>
                              <p className="text-center text-sm text-gray-600">Traditional<br/>Absorption</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                              <p className="text-center font-bold text-green-600 text-2xl">Up to 90%</p>
                              <p className="text-center text-sm text-gray-600">TeaHC Nano<br/>Absorption</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto border border-orange-100 shadow-lg">
          <div className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
            Experience the Science Yourself
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Feel the 17× Difference</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Ready to try our scientifically formulated products? Reserve yours today at exclusive pre-launch pricing with no payment required until your order ships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Link 
              href="/products" 
              passHref
              onClick={() => trackPageView('science_to_products', 'science_page')}
            >
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg text-orange-600 border-orange-300 hover:bg-orange-50 rounded-xl"
              >
                Explore Products
              </Button>
            </Link>
            <Link 
              href="/reserve" 
              passHref
              onClick={() => trackPageView('science_to_reserve', 'science_page')}
            >
              <Button 
                className="px-12 py-4 text-lg bg-orange-500 hover:bg-orange-600 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105"
              >
                Reserve Now at 50% Off
              </Button>
            </Link>
          </div>
          <p className="text-gray-600">Limited time offer • 30-day satisfaction guarantee</p>
        </div>
      </div>
    </main>
  )
}

export default function SciencePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SciencePageContent />
    </Suspense>
  )
}
