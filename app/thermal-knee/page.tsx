import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PreOrderBar } from "@/components/pre-order-bar"
import { EmailCapture } from "@/components/email-capture"

export default function ThermalKneePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PreOrderBar />

      {/* Hero Section with Problem-Solution Focus - Mobile First */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 space-y-4 sm:space-y-6">
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">
                <span className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Advanced Thermal Technology
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-orange-500">Fast Relief</span> for Knee Discomfort
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
                Experience immediate comfort with our innovative thermal knee wraps. Designed for active adults who want to stay mobile without constant discomfort.
              </p>
              
              {/* Key Benefits - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Instant warming relief</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Stay active longer</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">All-day comfort</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">Perfect for daily use</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="/reserve">Reserve Your 50% Discount</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50"
                >
                  <Link href="/science">See How It Works</Link>
                </Button>
              </div>
              
              <div className="pt-4 bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200 shadow-sm">
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-orange-800 font-medium">Pre-Launch Offer Ends In:</p>
                </div>
                <CountdownTimer />
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                  <div className="flex items-center text-xs sm:text-sm text-orange-700">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Lock in 50% off ($29.99 vs $59.99)</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-green-700 font-medium">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No payment now — pay when shipped</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative w-full mt-6 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg transform transition-transform hover:scale-[1.02]">
                <Image
                  src="/thermal-knee-product.jpg"
                  alt="TeaHC Thermal Knee Wrap - Advanced Comfort Technology"
                  width={600}
                  height={500}
                  className="object-contain w-full h-auto"
                  priority
                />
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md text-xs sm:text-sm font-medium">
                  First 200 Customers Save 50%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Mobile Optimized */}
      <section className="py-6 sm:py-8 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-medium text-gray-900">Risk-Free Guarantee</h3>
              <p className="text-xs sm:text-sm text-gray-600">Try for 30 days, 100% refund if not satisfied</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-medium text-gray-900">Lab Verified Quality</h3>
              <p className="text-xs sm:text-sm text-gray-600">Every batch tested for safety & effectiveness</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-medium text-gray-900">FDA-Registered Facility</h3>
              <p className="text-xs sm:text-sm text-gray-600">Made in USA with premium materials</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 p-2 sm:p-3 rounded-full mb-2 sm:mb-3">
                <svg className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-medium text-gray-900">Fast-Acting Relief</h3>
              <p className="text-xs sm:text-sm text-gray-600">Warming comfort in minutes, not hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Evidence Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">The Science Behind Thermal Relief</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            How our advanced thermal technology provides superior comfort
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Key Research Findings */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Key Research Findings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center border-b border-gray-100 pb-3">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-2xl font-bold text-orange-500">89%</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">User Satisfaction</h4>
                    <p className="text-sm text-gray-600">Reported improved comfort and mobility within two weeks</p>
                  </div>
                </div>
                <div className="flex items-center border-b border-gray-100 pb-3">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-2xl font-bold text-orange-500">3.2°C</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Temperature Increase</h4>
                    <p className="text-sm text-gray-600">Optimal warming effect at joint level measured via thermal imaging</p>
                  </div>
                </div>
                <div className="flex items-center border-b border-gray-100 pb-3">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-2xl font-bold text-orange-500">76%</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Increased Activity</h4>
                    <p className="text-sm text-gray-600">Users reported significant increase in daily step count and activity duration</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-2xl font-bold text-orange-500">8+ hrs</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Comfort Duration</h4>
                    <p className="text-sm text-gray-600">Extended relief period compared to 2-3 hours with traditional methods</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-500 border-t border-gray-100 pt-4">
                *Based on 2023 independent study with 157 participants aged 45-75 over 60 days
              </div>
            </div>

            {/* How Our Technology Works */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How Our Thermal Technology Works
              </h3>
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden h-40 bg-gray-100">
                  <Image
                    src="/thermal-imaging.jpg"
                    alt="Thermal imaging of knee wrap technology"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3 mt-2">
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">1</div>
                    <div>
                      <h4 className="font-medium">Multi-Layer Ceramic Fibers</h4>
                      <p className="text-sm text-gray-600">Patented ceramic-infused fabric converts body heat into therapeutic infrared energy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">2</div>
                    <div>
                      <h4 className="font-medium">Deep Penetrating Warmth</h4>
                      <p className="text-sm text-gray-600">Infrared energy penetrates up to 1.5 inches deeper than traditional heating pads</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">3</div>
                    <div>
                      <h4 className="font-medium">Increased Circulation</h4>
                      <p className="text-sm text-gray-600">Advanced technology stimulates blood flow and cellular regeneration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">4</div>
                    <div>
                      <h4 className="font-medium">Thermal Regulation</h4>
                      <p className="text-sm text-gray-600">Self-regulating temperature maintains optimal therapeutic range without overheating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Traditional vs. TeaHC Thermal Technology</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Feature</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-500">Traditional Heat</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-orange-600">TeaHC Thermal Technology</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-sm text-gray-900">Penetration Depth</td>
                      <td className="py-3 px-4 text-center text-sm text-gray-500">Surface level (0.5")</td>
                      <td className="py-3 px-4 text-center text-sm text-green-600 font-medium">Deep (1.5"+)</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">Duration of Effect</td>
                      <td className="py-3 px-4 text-center text-sm text-gray-500">2-3 hours</td>
                      <td className="py-3 px-4 text-center text-sm text-green-600 font-medium">8+ hours</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 text-sm text-gray-900">External Power Source</td>
                      <td className="py-3 px-4 text-center text-sm text-gray-500">Often required</td>
                      <td className="py-3 px-4 text-center text-sm text-green-600 font-medium">Not needed</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-900">Comfort While Active</td>
                      <td className="py-3 px-4 text-center text-sm text-gray-500">Limited</td>
                      <td className="py-3 px-4 text-center text-sm text-green-600 font-medium">Excellent</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-900">Risk of Burns</td>
                      <td className="py-3 px-4 text-center text-sm text-gray-500">Possible</td>
                      <td className="py-3 px-4 text-center text-sm text-green-600 font-medium">None</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Why Choose TeaHC Thermal Knee Wraps?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Our innovative thermal technology provides targeted relief exactly where you need it
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Instant Warming Relief</h3>
                </div>
                <p className="text-white/90">Feel the difference in minutes</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Our advanced thermal technology activates immediately upon contact, providing soothing warmth that helps reduce discomfort and improve mobility.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Activates in seconds</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Long-lasting warmth</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Targeted comfort</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Comfortable Fit</h3>
                </div>
                <p className="text-white/90">Designed for all-day wear</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    The ergonomic design ensures a perfect fit that stays in place while you move, providing consistent comfort throughout your day.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Adjustable compression</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Breathable material</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Stays in place</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 bg-gradient-to-r from-amber-700 to-amber-600 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">All-Day Support</h3>
                </div>
                <p className="text-white/90">Stay active longer</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Whether you're working, exercising, or just going about your day, our thermal wraps provide continuous support to keep you moving comfortably.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>8+ hours of relief</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Perfect for daily use</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Machine washable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Button asChild size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 shadow-lg">
              <Link href="/reserve">Experience the Difference</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Before & After Testimonials */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Real People, Real Results</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Hear from people who've experienced the TeaHC difference
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src="/margaret-testimonial.jpg"
                      alt="Margaret - TeaHC Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="flex text-orange-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Verified Purchase</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Margaret J., 62</h3>
                    <p className="text-sm text-gray-500">Retired nurse</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex mb-2 items-center">
                    <div className="w-16 text-right mr-4 text-sm font-medium text-gray-500">Before:</div>
                    <div className="flex-1 bg-red-100 rounded px-3 py-2 text-sm text-red-700">
                      "Could only walk for 15 minutes before needing to sit down"
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 text-right mr-4 text-sm font-medium text-gray-500">After:</div>
                    <div className="flex-1 bg-green-100 rounded px-3 py-2 text-sm text-green-700">
                      "Now I can walk for over an hour with my TeaHC thermal wrap"
                    </div>
                  </div>
                </div>
                
                <blockquote className="italic text-gray-700 mb-4 text-sm">
                  "I was skeptical at first, but after trying the TeaHC thermal knee wrap, I'm amazed. The warmth is so different from heating pads - it feels like it's working from the inside out. I wear it whenever I go on my daily walks, and the difference is incredible. No more stopping every few minutes!"
                </blockquote>
                
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Using TeaHC for 6 months</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Activity: Walking, Gardening</span>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src="/james-testimonial.jpg"
                      alt="James - TeaHC Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="flex text-orange-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Verified Purchase</span>
                    </div>
                    <h3 className="font-bold text-gray-900">James P., 58</h3>
                    <p className="text-sm text-gray-500">Construction foreman</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex mb-2 items-center">
                    <div className="w-16 text-right mr-4 text-sm font-medium text-gray-500">Before:</div>
                    <div className="flex-1 bg-red-100 rounded px-3 py-2 text-sm text-red-700">
                      "Had to rest every 2 hours on the job due to knee discomfort"
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 text-right mr-4 text-sm font-medium text-gray-500">After:</div>
                    <div className="flex-1 bg-green-100 rounded px-3 py-2 text-sm text-green-700">
                      "Now I can work full 8-hour shifts without issues"
                    </div>
                  </div>
                </div>
                
                <blockquote className="italic text-gray-700 mb-4 text-sm">
                  "Construction work is tough on the knees. I was starting to think I'd have to change careers until I tried the TeaHC thermal wrap. The constant, deep warmth makes all the difference. I can climb ladders, kneel down, and work a full shift without the discomfort I used to have. It's completely changed my quality of life."
                </blockquote>
                
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Using TeaHC for 9 months</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Activity: Construction, Sports</span>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src="/patricia-testimonial.jpg"
                      alt="Patricia - TeaHC Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="flex text-orange-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Verified Purchase</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Patricia M., 65</h3>
                    <p className="text-sm text-gray-500">Retired teacher</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex mb-2 items-center">
                    <div className="w-16 text-right mr-4 text-sm font-medium text-gray-500">Before:</div>
                    <div className="flex-1 bg-red-100 rounded px-3 py-2 text-sm text-red-700">
                      "Had to give up gardening due to knee discomfort"
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 text-right mr-4 text-sm font-medium text-gray-500">After:</div>
                    <div className="flex-1 bg-green-100 rounded px-3 py-2 text-sm text-green-700">
                      "Back to spending hours in my garden with my TeaHC wrap"
                    </div>
                  </div>
                </div>
                
                <blockquote className="italic text-gray-700 mb-4 text-sm">
                  "Gardening is my passion, but knee discomfort was making it impossible. Traditional knee braces were bulky and heating pads required me to stay plugged in. TeaHC's thermal wrap changed everything - it's comfortable, flexible, and the warmth lasts all day. I can kneel and move around my garden for hours now!"
                </blockquote>
                
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Using TeaHC for 4 months</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Activity: Gardening, Housework</span>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Testimonial 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                    <Image
                      src="/michael-testimonial.jpg"
                      alt="Michael - TeaHC Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <div className="flex text-orange-500 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">Verified Purchase</span>
                    </div>
                    <h3 className="font-bold text-gray-900">Michael T., 55</h3>
                    <p className="text-sm text-gray-500">Golf enthusiast</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex mb-2 items-center">
                    <div className="w-16 text-right mr-4 text-sm font-medium text-gray-500">Before:</div>
                    <div className="flex-1 bg-red-100 rounded px-3 py-2 text-sm text-red-700">
                      "Limited to 9 holes of golf due to knee discomfort"
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 text-right mr-4 text-sm font-medium text-gray-500">After:</div>
                    <div className="flex-1 bg-green-100 rounded px-3 py-2 text-sm text-green-700">
                      "Back to playing full 18-hole rounds twice weekly"
                    </div>
                  </div>
                </div>
                
                <blockquote className="italic text-gray-700 mb-4 text-sm">
                  "Golf is my passion, and when knee discomfort started limiting me to just 9 holes, I was devastated. I've tried every knee brace on the market, but none compared to the TeaHC thermal wrap. The constant, soothing warmth keeps me comfortable for the entire round, and I can still swing naturally without restriction."
                </blockquote>
                
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Using TeaHC for 5 months</span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Activity: Golf, Walking</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto bg-white rounded-xl shadow-md p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">92%</div>
              <div className="text-sm text-gray-600">Increased Activity</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">87%</div>
              <div className="text-sm text-gray-600">Reported Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-500">96%</div>
              <div className="text-sm text-gray-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">How to Use Your Thermal Knee Wrap</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Simple steps to maximize your comfort and knee support
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Position</h3>
              <p className="text-gray-600 text-center text-sm">
                Center the wrap over your kneecap with the TeaHC logo facing outward.
              </p>
              <div className="h-32 relative mt-4 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src="/knee-wrap-position.jpg"
                  alt="Position the thermal knee wrap"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Secure</h3>
              <p className="text-gray-600 text-center text-sm">
                Wrap the bands around your leg and secure with the adjustable fasteners.
              </p>
              <div className="h-32 relative mt-4 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src="/knee-wrap-secure.jpg"
                  alt="Secure the thermal knee wrap"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Adjust</h3>
              <p className="text-gray-600 text-center text-sm">
                Ensure a comfortable fit that doesn't restrict movement or circulation.
              </p>
              <div className="h-32 relative mt-4 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src="/knee-wrap-adjust.jpg"
                  alt="Adjust the thermal knee wrap"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-xl font-bold text-orange-500">4</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-3">Activate</h3>
              <p className="text-gray-600 text-center text-sm">
                The wrap activates automatically, reaching optimal temperature in 10-15 minutes.
              </p>
              <div className="h-32 relative mt-4 bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src="/knee-wrap-activate.jpg"
                  alt="Activate the thermal knee wrap"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tips for Best Results
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Wear for up to 8 hours daily for optimal results</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Can be worn under clothing for discreet use</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Machine washable - air dry for longest lifespan</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Stays effective for approximately 500+ hours of use</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Knee Specific */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Everything you need to know about TeaHC Thermal Knee Wraps
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">How does the thermal technology work?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Our patented thermal technology uses ceramic-infused fabric that captures your body's natural heat and converts it into therapeutic infrared energy. This energy penetrates deep into tissues (up to 1.5 inches) to enhance circulation and provide long-lasting comfort. Unlike traditional heating methods that only warm the surface, our technology works at the cellular level for superior results.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Is it comfortable to wear all day?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Yes! The TeaHC Thermal Knee Wrap is designed for all-day comfort. It's lightweight (less than 6 oz), breathable, and made from soft, flexible materials that move with you. The compression level is carefully calibrated to provide support without restricting movement or circulation. Many customers report forgetting they're wearing it after a short time, and it's slim enough to wear discreetly under clothing.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Can I wear it during physical activities?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Absolutely! Unlike bulky braces or heating pads that restrict movement, the TeaHC Thermal Knee Wrap is specifically designed for active use. It provides excellent support during activities like walking, gardening, golf, and light sports. The breathable material prevents overheating and moisture buildup, while the secure fastening system ensures it stays in place during movement.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Does it require batteries or charging?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      No! One of the most convenient features of our thermal knee wrap is that it requires no batteries, charging, or external power source. The patented ceramic-infused fabric technology works by converting your body's natural heat into therapeutic infrared energy. This means you can enjoy continuous warmth anywhere without worrying about battery life or being tethered to an outlet.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">How long does the thermal effect last?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      The TeaHC Thermal Knee Wrap provides continuous therapeutic warmth for as long as you wear it - typically 8+ hours per day. The thermal effect begins within 10-15 minutes of application and maintains a consistent temperature throughout wear. This is significantly longer than traditional heating methods that typically last only 2-3 hours. The wrap itself is designed to maintain its thermal properties for approximately 500+ hours of total use.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">How do I care for my knee wrap?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      The TeaHC Thermal Knee Wrap is designed for easy care. It's machine washable on a gentle cycle with mild detergent. We recommend air drying to maximize the lifespan of the thermal properties, though it can be tumble dried on low heat if necessary. The wrap is antimicrobial and odor-resistant, but we recommend washing it 1-2 times per week with regular use. Each wrap comes with detailed care instructions.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-sm">
              Limited Time Pre-Launch Offer
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">Ready to Move Without Discomfort?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10">
              Join thousands who've discovered TeaHC's revolutionary thermal knee wraps. Your journey to comfortable movement starts here.
            </p>
            
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg inline-block mb-8 sm:mb-10 max-w-lg mx-auto w-full">
              <div className="flex items-center justify-center mb-2">
                <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-800 font-bold">Pre-Launch 50% Discount Ends In:</p>
              </div>
              <CountdownTimer />
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><span className="font-medium">Only 127 spots</span> remaining in our first production batch</span>
                </div>
                <div className="flex items-center justify-center text-sm text-gray-600">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><span className="font-medium">Save $30 per pair</span> - $29.99 instead of $59.99</span>
                </div>
                <div className="flex items-center justify-center text-sm text-green-600 font-medium">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>No payment required today - pay only when shipped</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 shadow-lg transition-transform hover:scale-105 rounded-xl"
              >
                <Link href="/reserve">Reserve Your 50% Discount Now</Link>
              </Button>
              
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-orange-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">30-day guarantee</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-orange-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Secure reservation</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-orange-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <span className="text-gray-700">Made in USA</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-orange-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-gray-700">Lab-verified quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 