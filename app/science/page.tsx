"use client"

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { trackPageView } from '@/components/product-detail-template'

export default function SciencePage() {
  const searchParams = useSearchParams()
  const source = searchParams.get('source')
  
  useEffect(() => {
    trackPageView('science_page', source || undefined)
  }, [source])
  
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">The Science of TeaHC</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our breakthrough nano-emulsion technology delivers cannabinoids 17× more effectively
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <Tabs defaultValue="technology" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="technology">Nano Technology</TabsTrigger>
              <TabsTrigger value="ingredients">Key Ingredients</TabsTrigger>
              <TabsTrigger value="research">Research & Testing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technology" className="mt-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Nano-Emulsion Technology</h2>
                      <p className="text-gray-700 mb-4">
                        TeaHC's proprietary nano-emulsion technology breaks down cannabinoids into ultra-small particles (15-50 nanometers) that can be easily absorbed by your body.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Traditional cannabinoid products use oil-based delivery systems that are poorly absorbed by the body's water-based systems. Our nano-emulsion technology creates water-compatible particles that provide up to 17× better absorption and faster onset of effects.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <Image
                        src="/nano-absorption.png"
                        alt="Nano-Emulsion Technology Absorption Comparison"
                        width={400}
                        height={300}
                        className="mx-auto"
                      />
                      <p className="text-sm text-gray-500 text-center mt-2">
                        Comparison of absorption rates: Nano vs. Traditional
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h3 className="font-bold mb-2 text-blue-800">Faster Onset</h3>
                      <p className="text-gray-700 text-sm">
                        Effects begin in 10-30 minutes compared to 1-2 hours for traditional products.
                      </p>
                    </div>
                    <div className="bg-green-50 p-5 rounded-lg">
                      <h3 className="font-bold mb-2 text-green-800">Higher Bioavailability</h3>
                      <p className="text-gray-700 text-sm">
                        Up to 17× more cannabinoids reach your system compared to oil-based formulations.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-5 rounded-lg">
                      <h3 className="font-bold mb-2 text-purple-800">Precise Dosing</h3>
                      <p className="text-gray-700 text-sm">
                        Consistent effects with every dose due to our standardized nano-particle size.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold mb-4">How It Works</h3>
                    <p className="text-gray-700 mb-4">
                      Our nano-emulsification process surrounds cannabinoid molecules with a water-compatible shell that protects them until they're absorbed. This dramatically increases their ability to pass through your digestive system and cell membranes, delivering more of the active ingredients where they're needed.
                    </p>
                    <p className="text-gray-700">
                      The result is a fast-acting, highly bioavailable product that provides maximum benefits with lower doses of cannabinoids.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Key Ingredients & Their Benefits</h2>
                  
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6 pb-6 border-b">
                      <div>
                        <h3 className="text-xl font-bold text-amber-600 mb-3">Cannabinoids</h3>
                        <p className="text-gray-700 mb-4">
                          Our products contain carefully selected cannabinoids that work synergistically to provide targeted relief without psychoactive effects.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <span className="font-medium">CBD (Cannabidiol):</span> 
                              <span className="text-gray-600"> Anti-inflammatory, analgesic, non-psychoactive</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <span className="font-medium">THCV (Tetrahydrocannabivarin):</span> 
                              <span className="text-gray-600"> Energizing, anti-inflammatory, non-intoxicating</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <span className="font-medium">CBG (Cannabigerol):</span> 
                              <span className="text-gray-600"> Anti-inflammatory, neuroprotective</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <span className="font-medium">CBN (Cannabinol):</span> 
                              <span className="text-gray-600"> Mildly sedative, promotes sleep and recovery</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-600 mb-3">Complementary Botanicals</h3>
                        <p className="text-gray-700 mb-4">
                          We enhance our formulations with scientifically-backed botanical ingredients that work synergistically with cannabinoids.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <span className="font-medium">Curcumin Phytosome (Meriva®):</span> 
                              <span className="text-gray-600"> Highly bioavailable turmeric extract with proven anti-inflammatory effects</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <span className="font-medium">Boswellia Serrata:</span> 
                              <span className="text-gray-600"> Traditional anti-inflammatory agent that blocks 5-LOX pathway</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <span className="font-medium">Gingerols:</span> 
                              <span className="text-gray-600"> Active compounds in ginger that inhibit COX-2 enzymes</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <div>
                              <span className="font-medium">Tart Cherry Extract:</span> 
                              <span className="text-gray-600"> Natural source of melatonin and antioxidants</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4">The Entourage Effect</h3>
                      <p className="text-gray-700 mb-4">
                        Our formulas take advantage of the "entourage effect" — the phenomenon where cannabinoids and other plant compounds work better together than in isolation. By combining specific cannabinoids with complementary botanicals, we create formulations that provide more comprehensive relief than single-compound approaches.
                      </p>
                      <div className="bg-amber-50 p-5 rounded-lg">
                        <h4 className="font-bold mb-2">Multi-Pathway Anti-Inflammatory Action</h4>
                        <p className="text-gray-700 text-sm">
                          TeaHC products target inflammation through multiple biological pathways simultaneously:
                        </p>
                        <ul className="text-sm text-gray-700 mt-2 space-y-1">
                          <li>• Endocannabinoid system (CB1 and CB2 receptors)</li>
                          <li>• COX-2 enzyme inhibition</li>
                          <li>• 5-LOX enzyme inhibition</li>
                          <li>• NF-κB transcription factor modulation</li>
                          <li>• Pro-inflammatory cytokine reduction</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="research" className="mt-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Research & Testing</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-amber-600 mb-3">Clinical Studies</h3>
                      <p className="text-gray-700 mb-4">
                        Our formulations are based on established research on cannabinoids and their interactions with the human endocannabinoid system.
                      </p>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Key Research Findings:</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>Nano-emulsified CBD shows 17× higher bioavailability compared to standard CBD oil (Pharmacokinetic study, 2022)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>Combination of CBD and THCV demonstrates enhanced anti-inflammatory effects versus either compound alone (Journal of Pain Research, 2021)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <span>Curcumin phytosomes show 29× higher absorption rates than standard curcumin powder (Bioavailability study, 2020)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-600 mb-3">Quality Testing</h3>
                      <p className="text-gray-700 mb-4">
                        Every batch of TeaHC products undergoes rigorous testing for purity, potency, and consistency.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="bg-green-100 p-2 rounded-full mr-3">
                            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Potency Testing</h4>
                            <p className="text-sm text-gray-600">HPLC analysis verifies exact cannabinoid content in each batch</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-green-100 p-2 rounded-full mr-3">
                            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Purity Testing</h4>
                            <p className="text-sm text-gray-600">Screening for pesticides, heavy metals, residual solvents, and microbial contaminants</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-green-100 p-2 rounded-full mr-3">
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
                      
                      <div className="mt-6">
                        <Image
                          src="/thermal-knee-scan.png"
                          alt="Thermal imaging showing reduced inflammation"
                          width={400}
                          height={200}
                          className="mx-auto rounded-lg"
                        />
                        <p className="text-sm text-gray-500 text-center mt-2">
                          Thermal imaging showing reduced inflammation after TeaHC use
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold mb-4">Wasted Supplements Problem</h3>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <p className="text-gray-700 mb-4">
                          Most traditional supplements have extremely poor bioavailability. This means that the majority of what you consume is simply wasted, passing through your body without being absorbed.
                        </p>
                        <p className="text-gray-700">
                          Our nano-emulsion technology solves this problem by dramatically increasing the amount of active ingredients your body can actually use, giving you more benefits from smaller doses.
                        </p>
                      </div>
                      <div>
                        <Image
                          src="/wasted-supplements.png"
                          alt="Comparison of absorption rates"
                          width={400}
                          height={250}
                          className="mx-auto rounded-lg"
                        />
                        <p className="text-sm text-gray-500 text-center mt-2">
                          Traditional vs. Nano-Emulsified absorption comparison
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        {/* CTA Section */}
        <div className="bg-orange-50 rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference Yourself</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to try our scientifically formulated products? Reserve yours today at exclusive pre-launch pricing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/products" 
              passHref
              onClick={() => trackPageView('science_to_products', 'science_page')}
            >
              <Button 
                variant="outline" 
                className="px-6 py-3 text-orange-600 border-orange-300 hover:bg-orange-50"
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
