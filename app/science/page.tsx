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
                    Our formulas combine precisely dosed cannabinoids with synergistic botanicals, creating a multi-pathway approach to inflammation and discomfort that conventional products can't match. Scientific studies confirm these ingredients provide complementary mechanisms of action.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-10 mb-12">
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-amber-800">Nano-Cannabinoids</h3>
                      </div>
                      <p className="text-amber-800 mb-5 italic font-medium">
                        Research-backed nano-cannabinoids providing targeted relief through the body's endocannabinoid system
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-amber-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">CBD (Cannabidiol)</span> 
                              <p className="text-gray-700 text-sm">
                                Anti-inflammatory, analgesic, non-psychoactive. Scientific studies show CBD influences the endocannabinoid system indirectly, activates TRPV1 pain receptors, and modulates 5-HT1A serotonin receptors for enhanced comfort.
                              </p>
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
                              <p className="text-gray-700 text-sm">
                                Energizing, anti-inflammatory, non-intoxicating. Research shows THCV directly down-regulates inflammatory enzymes like COX-2 and suppresses cytokine production. Studies demonstrate potent anti-inflammatory action via multiple pathways.
                              </p>
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
                              <p className="text-gray-700 text-sm">
                                Anti-inflammatory, neuroprotective. The "mother cannabinoid" works as a partial agonist at CB1/CB2 receptors while also activating alpha-2 adrenergic receptors. Studies show CBG has stronger effects than CBD in certain inflammatory pain models.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-amber-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">The Entourage Effect</span> 
                              <p className="text-gray-700 text-sm">
                                Scientific research confirms that combinations of cannabinoids work better together than in isolation. Cell studies show CBD+CBG+THCV combinations can alleviate inflammatory cytokine release more effectively than individual compounds.
                              </p>
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
                        Clinically-validated botanical ingredients that work synergistically with cannabinoids through different pathways
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">Curcumin Phytosome (Meriva®)</span> 
                              <p className="text-gray-700 text-sm">
                                Highly bioavailable turmeric extract with proven anti-inflammatory effects. Clinical research shows it inhibits the NF-κB pathway and reduces pro-inflammatory cytokines. Meta-analyses found significant improvement in arthritis symptoms and inflammatory markers vs. placebo.
                              </p>
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
                              <p className="text-gray-700 text-sm">
                                Traditional anti-inflammatory agent that blocks the 5-LOX pathway, complementing the COX-2 inhibition from other ingredients. Scientific studies confirm it reduces inflammatory mediators through mechanisms different from cannabinoids.
                              </p>
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
                              <p className="text-gray-700 text-sm">
                                Active compounds in ginger that inhibit COX-2 enzymes responsible for inflammation and pain signaling. Meta-analyses of clinical trials show ginger extract yields significant pain reduction in osteoarthritis patients compared to placebo.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                          <div className="flex items-start">
                            <svg className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div>
                              <span className="font-bold">Green Tea (EGCG)</span> 
                              <p className="text-gray-700 text-sm">
                                EGCG from decaffeinated green tea has been shown in studies to selectively inhibit IL-6 and other inflammatory signals in arthritic joints. Research confirms it can block cartilage breakdown and provide antioxidant protection.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-10 mb-8">
                    <h3 className="text-2xl font-bold mb-6">The Multi-Pathway Approach</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/2">
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                          Scientific research confirms our formulas leverage the "entourage effect" — the phenomenon where cannabinoids and other plant compounds work better together than in isolation, creating broader spectrum relief.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          Clinical studies show that combining specific cannabinoids with complementary botanicals targets multiple inflammatory pathways simultaneously, providing more comprehensive relief than single-compound approaches.
                        </p>
                        <div className="bg-gradient-to-r from-amber-50 to-blue-50 p-6 rounded-xl border border-amber-100 shadow-sm">
                          <h4 className="text-xl font-bold mb-3 text-gray-800">Research-Backed Multi-Pathway Relief</h4>
                          <p className="text-gray-700 mb-3">
                            Studies confirm TeaHC ingredients target these key inflammatory pathways:
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                              <span className="text-sm">CB1/CB2 receptors</span>
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
                              <span className="text-sm">NF-κB transcription factor</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                              <span className="text-sm">Pro-inflammatory cytokines</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-2 w-2 rounded-full bg-indigo-500 mr-2"></div>
                              <span className="text-sm">TRPV1 pain receptors</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/2">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <h4 className="font-bold text-xl mb-4 text-gray-800">Scientific Evidence of Synergy</h4>
                          <div className="space-y-4">
                            <div className="flex items-start">
                              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">1</span>
                              </div>
                              <p className="text-gray-700 text-sm">
                                Cell studies show CBD+CBG+THCV combinations reduce inflammatory cytokine release more effectively than isolated compounds
                              </p>
                            </div>
                            <div className="flex items-start">
                              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">2</span>
                              </div>
                              <p className="text-gray-700 text-sm">
                                Curcumin acts on inflammatory pathways distinct from cannabinoids, creating complementary mechanisms of action
                              </p>
                            </div>
                            <div className="flex items-start">
                              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">3</span>
                              </div>
                              <p className="text-gray-700 text-sm">
                                Research in the Journal of Pain shows combined botanical compounds provide more comprehensive relief than single-ingredient approaches
                              </p>
                            </div>
                            <div className="flex items-start">
                              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs font-bold">4</span>
                              </div>
                              <p className="text-gray-700 text-sm">
                                Nano-emulsification technology enhances the synergistic effects by ensuring all active compounds reach their targets efficiently
                              </p>
                            </div>
                          </div>
                        </div>
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
                      <h3 className="text-2xl font-bold text-blue-800">Research-Based Product Formulations</h3>
                    </div>
                    <p className="text-blue-800 mb-5 italic font-medium">
                      Each TeaHC product contains a scientifically optimized blend of ingredients for its specific purpose
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-blue-100">
                        <h4 className="font-bold text-amber-600 mb-2">MOVE Formula</h4>
                        <p className="text-sm text-gray-700 mb-2">
                          25mg CBD + 5mg CBG + 5mg THCV with curcumin phytosome in a sencha green tea base. Research shows this combination provides non-drowsy daytime relief through multiple inflammatory pathways.
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
                          15mg nano-CBD + 10mg THCV + 200mg curcumin phytosome with gingerol and piperine. Studies show liquid nano-delivery provides peak absorption in 15-30 minutes versus 1-2 hours for traditional products.
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
                          30mg CBD + 2mg CBG + 2mg CBN with tart cherry extract in a chamomile tea base. Research confirms this blend promotes tissue recovery and improved sleep quality for overnight healing.
                        </p>
                        <div className="flex justify-center">
                          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                            Evening Use
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <div className="flex items-center mb-2">
                        <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-bold text-blue-900">Research-Backed Complete System</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Clinical studies show that addressing inflammation throughout the day with targeted formulations provides more comprehensive relief than single-product approaches. The TeaHC Complete System supports your body's natural healing process 24/7 with scientifically synergistic ingredients.
                      </p>
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
                    <h2 className="text-3xl font-bold">Research & Clinical Evidence</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed">
                    At TeaHC, our formulations are backed by rigorous scientific research. Studies show our nano-emulsion technology delivers up to 17× better absorption than traditional products, providing faster onset and more effective relief through multiple biological pathways.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-10 mb-12">
                    <div>
                      <div className="flex items-center mb-5">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-800">Cannabinoid Studies</h3>
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
                                  A 2023 study found CBD nano-emulsion achieved <span className="font-bold text-blue-700">3-4× higher blood levels</span> than traditional oil-based CBD, with much faster onset of action (Pharmacokinetic study, 2023)
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
                                  In a 2022 randomized controlled trial, CBD significantly <span className="font-bold text-blue-700">improved pain and function</span> in arthritis patients compared to placebo with no adverse events (Journal of Pain Research)
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
                                  Combination of CBD, CBG and THCV demonstrated <span className="font-bold text-blue-700">enhanced anti-inflammatory effects</span> via the "entourage effect" versus individual compounds (Frontiers in Neuroscience, 2020)
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
                                  THCV directly <span className="font-bold text-blue-700">down-regulates inflammatory enzymes</span> and cytokines in preclinical studies (Frontiers in Pharmacology, 2021)
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
                          <span className="font-bold text-indigo-900">Multi-Receptor Approach</span>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Scientific research confirms our formula ingredients target multiple biological pathways simultaneously:
                        </p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700">
                          <li className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></div>
                            <span>CB2 receptors on immune cells reduce pro-inflammatory cytokines</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></div>
                            <span>TRPV1 receptor activation modulates pain perception</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></div>
                            <span>5-HT1A serotonin receptor influences anxiety and mood</span>
                          </li>
                          <li className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></div>
                            <span>Alpha-2 adrenergic activation by CBG enhances comfort</span>
                          </li>
                        </ul>
                      </div>
                      </div>
                    
                      <div>
                      <div className="flex items-center mb-5">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-green-800">Botanical Efficacy</h3>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 shadow-sm mb-8">
                        <h4 className="font-bold mb-4 text-green-800 text-lg">Clinical Evidence:</h4>
                        <div className="space-y-4">
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                        <div className="flex items-start">
                              <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <div>
                                <p className="text-gray-700">
                                  In a clinical trial with 139 knee osteoarthritis patients, curcumin was <span className="font-bold text-green-700">as effective as the NSAID diclofenac</span> for pain relief with significantly fewer side effects (Trials Journal, 2019)
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                        <div className="flex items-start">
                              <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <div>
                                <p className="text-gray-700">
                                  Curcumin phytosomes show <span className="font-bold text-green-700">29× higher absorption rates</span> than standard curcumin powder and significantly reduce inflammatory markers in patients (Bioavailability study, 2020)
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                            <div className="flex items-start">
                              <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                              <div>
                                <p className="text-gray-700">
                                  Meta-analysis of 5 trials found ginger extract <span className="font-bold text-green-700">yielded superior pain reduction</span> and mobility improvements versus placebo in osteoarthritis patients (Osteoarthritis Research Society)
                                </p>
                              </div>
                          </div>
                        </div>
                          
                          <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-green-200">
                        <div className="flex items-start">
                              <div className="bg-green-100 p-1 rounded-full mr-3 mt-0.5 flex-shrink-0">
                                <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                      </div>
                          <div>
                                <p className="text-gray-700">
                                  Green tea polyphenols (EGCG) <span className="font-bold text-green-700">selectively inhibit IL-6</span> and other inflammatory signals in arthritic joints, blocking cartilage breakdown (Journal of Inflammation)
                                </p>
                              </div>
                            </div>
                  </div>
                </div>
              </div>

                      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center mb-4">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mr-3 shadow-sm">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold">Superior Safety Profile</h4>
                        </div>
                        <p className="text-gray-700 mb-4">
                          Scientific research confirms our ingredients have an outstanding safety profile:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="bg-green-100 p-1 rounded-full mr-2 flex-shrink-0">
                              <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-700">The World Health Organization states CBD is "generally well tolerated with a good safety profile"</p>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-green-100 p-1 rounded-full mr-2 flex-shrink-0">
                              <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-700">Clinical trials reported no adverse events with CBD treatment</p>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-green-100 p-1 rounded-full mr-2 flex-shrink-0">
                              <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-700">Curcumin showed 3× fewer side effects than NSAIDs in head-to-head studies</p>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-green-100 p-1 rounded-full mr-2 flex-shrink-0">
                              <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <p className="text-sm text-gray-700">All TeaHC products are manufactured in an FDA-registered facility with thorough quality testing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-10">
                    <h3 className="text-2xl font-bold mb-6">Nano-Emulsion Technology: The 17× Difference</h3>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                          <h4 className="text-xl font-bold mb-3 text-blue-800">The Problem with Traditional Supplements</h4>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Scientific research confirms that conventional cannabinoids like CBD are hydrophobic (oil-soluble) and normally have low oral bioavailability—often <span className="font-bold text-red-600">less than 10%</span> of the dose reaches your bloodstream.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            Our pharmaceutical-grade nano-emulsification process creates microscopic particles (15-50 nanometers) that are 40-1000× smaller than traditional emulsions, allowing them to pass through cell membranes more efficiently.
                          </p>
                          
                          <div className="mt-4 pt-4 border-t border-blue-100">
                            <h4 className="font-bold mb-2 text-green-800">Research-Backed Benefits of Nano-Emulsion</h4>
                            <ul className="space-y-1">
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Faster onset (15-30 minutes vs. 1-2 hours for traditional oils)</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Enhanced bioavailability shown in independent pharmacokinetic studies</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Water-compatible particles bypass digestive breakdown</span>
                              </li>
                              <li className="flex items-start">
                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-700">Precise 15-50nm particle size ensures consistent delivery</span>
                              </li>
                            </ul>
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
                              <p className="text-center font-bold text-red-600 text-2xl">~10%</p>
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
            Clinically Researched Formula
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the 17× Absorption Difference</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Our scientifically formulated products combine nano-cannabinoids with proven botanicals for superior relief. Pharmacokinetic studies confirm up to 17× better absorption than traditional products with faster onset of action.
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
          <p className="text-gray-600">Developed with leading cannabinoid researchers • Manufactured in FDA-registered facility • 30-day satisfaction guarantee</p>
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
