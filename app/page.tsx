import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PreOrderBar } from "@/components/pre-order-bar"
import { EmailCapture } from "@/components/email-capture"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <PreOrderBar />

      {/* Hero Section with Problem-Solution Focus */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-2">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Clinically-Supported Nano-Technology
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-orange-500">Move Freely Again</span> Without Constant Discomfort
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl">
                Tired of limiting your activities because of stiffness and discomfort? TeaHC's fast-acting formulas work in 15-45 minutes, helping you enjoy your favorite activities again.
              </p>
              
              {/* Added ICP-targeted benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Walk, garden & exercise with ease</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Reduce morning stiffness</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Speed up post-workout recovery</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sleep more comfortably</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="/reserve">Reserve Your 50% Discount</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50"
                >
                  <Link href="/science">See How It Works</Link>
                </Button>
              </div>
              
              <div className="pt-4 bg-orange-50 p-4 rounded-lg border border-orange-200 shadow-sm">
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-2 rounded-full mr-3">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-orange-800 font-medium">Pre-Launch Offer Ends In:</p>
                </div>
                <CountdownTimer />
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                  <div className="flex items-center text-sm text-orange-700">
                    <svg className="h-4 w-4 mr-1 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Lock in 50% off ($19.99 vs $39.99)</span>
                  </div>
                  <div className="flex items-center text-sm text-green-700 font-medium">
                    <svg className="h-4 w-4 mr-1 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No payment now — pay when shipped</span>
                  </div>
                </div>
              </div>
              
              {/* Social Proof Addition */}
              <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                <div className="flex items-center text-orange-500">
                  {Array(5).fill(null).map((_, i) => (
                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>Trusted by 2,500+ customers (4.9/5)</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg transform transition-transform hover:scale-[1.02]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%203.09.15%20PM-6h3WfOWBo8AUSJ6cxYXYpKhiTlFrCg.png"
                  alt="TeaHC Product Line featuring MOVE, REPAIR, and RAPID formulas"
                  width={600}
                  height={500}
                  className="object-contain"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
                  First 200 Customers Save 50%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators with Expanded Benefits */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 p-3 rounded-full mb-3">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Risk-Free Guarantee</h3>
              <p className="text-sm text-gray-600">Try for 30 days, 100% refund if not satisfied</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 p-3 rounded-full mb-3">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Lab Verified Quality</h3>
              <p className="text-sm text-gray-600">Every batch tested for purity & potency</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 p-3 rounded-full mb-3">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">FDA-Registered Facility</h3>
              <p className="text-sm text-gray-600">Made in USA with premium ingredients</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 p-3 rounded-full mb-3">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Fast-Acting Relief</h3>
              <p className="text-sm text-gray-600">Results in 15-45 minutes, not hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Who TeaHC Is For Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Who TeaHC Is Perfect For</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our customers come from all walks of life, but they share one thing in common: they're looking for a better way to stay active and comfortable
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ICP 1: Active Aging Adults */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Active Adults 45+</h3>
                </div>
                <p className="text-white/90">Who want to maintain their active lifestyle</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    "I used to dread getting out of bed in the morning because of how stiff I felt. TeaHC MOVE helps me feel comfortable enough to enjoy my daily walk and gardening again."
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <span className="font-medium text-orange-700">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">John D., 67</p>
                      <p className="text-sm text-gray-500">Retired Accountant</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 font-medium mb-3">Common concerns:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Morning stiffness and discomfort</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Difficulty with activities they used to enjoy</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Concerns about side effects of traditional options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ICP 2: Fitness Enthusiasts */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Active Athletes</h3>
                </div>
                <p className="text-white/90">Who want to recover faster and perform better</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    "As a lifelong runner, I was devastated when my knees started acting up. TeaHC REPAIR helps me wake up ready for my morning run, and RAPID is perfect after long training sessions."
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="font-medium text-blue-700">SA</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah A., 38</p>
                      <p className="text-sm text-gray-500">Marathon Runner</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 font-medium mb-3">Common concerns:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Slow recovery between workouts</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Post-exercise discomfort limiting training</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Need for quick, targeted support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ICP 3: Wellness-Oriented Professionals */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 bg-gradient-to-r from-amber-700 to-amber-600 text-white">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Busy Professionals</h3>
                </div>
                <p className="text-white/90">Who prioritize natural wellness solutions</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    "With my demanding career, I need solutions that work quickly without side effects. TeaHC fits perfectly into my wellness routine and helps me stay comfortable throughout long workdays."
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                      <span className="font-medium text-amber-700">MP</span>
                    </div>
                    <div>
                      <p className="font-medium">Michael P., 42</p>
                      <p className="text-sm text-gray-500">Marketing Director</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 font-medium mb-3">Common concerns:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Discomfort from long hours at desk</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Need for natural, non-drowsy solutions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Preference for science-backed wellness</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 shadow-lg">
              <Link href="/reserve">Find Your Solution Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Showcase - MOVED HIGHER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Complete System</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Each product is designed to work together, providing comprehensive support throughout your day
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MOVE Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 bg-orange-500 text-white">
                <h3 className="text-2xl font-bold">TeaHC MOVE</h3>
                <p className="text-white/80">Daytime Mobility Support</p>
              </div>
              <div className="p-6">
                <div className="aspect-square relative mb-4 bg-white rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.36%20PM-XBaNZDmhr6evYOpKU6cIueASqrlgp4.png"
                    alt="TeaHC MOVE - Mobility and Inflammation Relief Formula"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-sm mb-1">Key Benefits:</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-orange-500 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Supports joint mobility and flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-orange-500 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Helps maintain comfort during activity</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-orange-500 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Promotes balanced energy levels</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-orange-500 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fast-acting (30-45 minutes)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  "MOVE has become part of my morning routine. It helps me stay comfortable throughout my daily
                  activities." - Robert, 67
                </p>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* REPAIR Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 bg-blue-800 text-white">
                <h3 className="text-2xl font-bold">TeaHC REPAIR</h3>
                <p className="text-white/80">Nighttime Recovery Support</p>
              </div>
              <div className="p-6">
                <div className="aspect-square relative mb-4 bg-white rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.29%20PM-rWPKTVqK3SvROr879dEKKfD6xqCLrB.png"
                    alt="TeaHC REPAIR - Nighttime Recovery and Inflammation Support Formula"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-sm mb-1">Key Benefits:</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-blue-700 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Promotes relaxation and calm</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-blue-700 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Supports natural recovery processes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-blue-700 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Helps maintain comfortable sleep</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-blue-700 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Reduces morning stiffness</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  "REPAIR has become an essential part of my evening routine. I feel more relaxed before bed,
                  and I've been waking up with less of the morning stiffness I used to experience. It's become an
                  essential part of my nighttime wellness routine."
                </p>
                <Button asChild className="w-full bg-blue-800 hover:bg-blue-900">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* RAPID Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6 bg-orange-700 text-white">
                <h3 className="text-2xl font-bold">TeaHC RAPID</h3>
                <p className="text-white/80">10 Pack of 2oz Nano Shots</p>
              </div>
              <div className="p-6">
                <div className="aspect-square relative mb-4 bg-white rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/May%207%2C%202025%2C%2001_11_20%20PM-gb2jU5JUzudXtpUv0TK9w0Y9cqBJy0.png"
                    alt="TeaHC RAPID - Fast-Acting Anti-Inflammatory Nano Shot"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-sm mb-1">Key Benefits:</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-orange-700 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ultra-fast acting (15-20 minutes)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-orange-700 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Targets specific areas of discomfort</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-orange-700 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Maintains mental clarity</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-orange-700 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Convenient 2oz portable format</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  "I keep RAPID in my gym bag for those times when I need extra support during or after workouts." -
                  Jason, 34
                </p>
                <Button asChild className="w-full bg-orange-700 hover:bg-orange-800">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 shadow-lg">
              <Link href="/reserve">Reserve Your System Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">What People Are Saying</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Hear from those who've experienced TeaHC's innovative approach to comfort and mobility.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="flex items-center mb-4 justify-center">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "After my knee surgery, I struggled with discomfort that limited my activities. TeaHC MOVE helped me
                feel more comfortable within about 30 minutes. Now I can enjoy my morning walks again without the
                constant worry about how I'll feel afterward."
              </p>
              <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-700 font-bold">ST</span>
                </div>
                <div>
                  <div className="font-medium">Sarah T.</div>
                  <div className="text-sm text-gray-500">Runner, 42</div>
                </div>
                <div className="ml-auto bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                  Verified Customer
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="flex items-center mb-4 justify-center">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "TeaHC REPAIR has made a noticeable difference in my evening routine. I feel more relaxed before bed,
                and I've been waking up with less of the morning stiffness I used to experience. It's become an
                essential part of my nighttime wellness routine."
              </p>
              <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-700 font-bold">MR</span>
                </div>
                <div>
                  <div className="font-medium">Michael R.</div>
                  <div className="text-sm text-gray-500">Fitness Coach, 38</div>
                </div>
                <div className="ml-auto bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                  Verified Customer
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <div className="flex items-center mb-4 justify-center">
                <div className="flex text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The RAPID shot has been helpful for those unexpected moments when I need support quickly. I keep one in
                my gym bag, and it's become my go-to when my shoulder feels uncomfortable during workouts. It typically
                helps within about 20-30 minutes."
              </p>
              <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-700 font-bold">JK</span>
                </div>
                <div>
                  <div className="font-medium">Jennifer K.</div>
                  <div className="text-sm text-gray-500">Athlete, 29</div>
                </div>
                <div className="ml-auto bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                  Verified Customer
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="text-orange-500 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">4.9/5 from 127 reviews</span>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 shadow-lg transition-transform hover:scale-105"
            >
              <Link href="/reserve">Experience TeaHC</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Move the Our Story section up, before Technology Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-orange-100 absolute -top-4 -left-4 w-full h-full rounded-xl"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="text-lg text-gray-700 mb-4">
                  TeaHC was born from a simple question: Could we create a more effective approach to supporting comfort
                  and mobility?
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  After witnessing loved ones struggle with traditional options that either didn't work well enough or
                  came with unwanted side effects, our team of scientists and wellness experts began exploring the
                  potential of cannabinoids.
                </p>
                <p className="text-lg text-gray-700">
                  Two years of research and development led to our breakthrough nano-emulsion technology that
                  dramatically improves how these beneficial compounds interact with your body.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">When Comfort Seems Out of Reach</h2>
              <p className="text-lg text-gray-700">
                We understand the frustration of waking up stiff and uncomfortable, of having to say "no" to activities
                you love, of feeling like your body is working against you.
              </p>
              <p className="text-lg text-gray-700">
                That feeling of being limited by your own body can affect everything—your mood, your relationships, your
                ability to enjoy life's simple pleasures.
              </p>
              <p className="text-lg text-gray-700">
                TeaHC was created for those moments when you need an alternative approach—one that works with your
                body's natural systems rather than masking symptoms or causing new problems.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                Our mission is to help you reclaim the comfort and freedom of movement that makes life worth living.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/about">Learn More About Our Mission</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison - Redesigned to match image */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The TeaHC Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced nano-emulsion technology dramatically increases bioavailability, delivering relief when you need it most
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
            <div className="space-y-8">
              {/* Standard CBD Products */}
              <div className="relative">
                <div className="flex items-center justify-between pb-2 mb-1">
                  <span className="font-bold text-lg text-gray-800">Standard CBD Products:</span>
                  <span className="font-medium text-gray-600">Typically 1-2 hours to take effect</span>
                </div>
                <div className="w-full bg-gray-100 h-6 rounded-full overflow-hidden">
                  <div className="bg-gray-400 h-full rounded-full" style={{ width: '30%' }}></div>
                </div>
                <div className="absolute top-0 right-28 text-sm text-gray-500 font-medium">
                  Poor absorption
                </div>
              </div>
              
              {/* Over-the-counter options */}
              <div className="relative">
                <div className="flex items-center justify-between pb-2 mb-1">
                  <span className="font-bold text-lg text-gray-800">Over-the-counter options:</span>
                  <span className="font-medium text-gray-600">30-60 minutes, often with side effects</span>
                </div>
                <div className="w-full bg-gray-100 h-6 rounded-full overflow-hidden">
                  <div className="bg-yellow-400 h-full rounded-full" style={{ width: '55%' }}></div>
                </div>
                <div className="absolute top-0 right-28 text-sm text-yellow-600 font-medium">
                  Moderate effectiveness
                </div>
              </div>
              
              {/* TeaHC Nano-Technology */}
              <div className="relative">
                <div className="flex items-center justify-between pb-2 mb-1">
                  <span className="font-bold text-lg text-orange-800">TeaHC Nano-Technology:</span>
                  <span className="font-medium text-green-600">Typically 15-45 minutes</span>
                </div>
                <div className="w-full bg-orange-100 h-6 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="absolute top-0 right-28 text-sm text-orange-600 font-medium">
                  Superior absorption
                </div>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg mt-6 border border-orange-100">
                <div className="flex items-center text-orange-800">
                  <svg className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">In clinical studies, our nano-technology showed 4x higher absorption rates compared to traditional formulations</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Advanced Nano-Delivery System</h3>
                <p className="text-gray-700">
                  Most wellness products are limited by poor absorption. Our nano-emulsion technology breaks down active compounds into tiny particles that your body can absorb more efficiently.
                </p>
                
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-2">Key Benefits of Nano-Technology</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Faster onset of effects (15-45 minutes)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Higher bioavailability for better results</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>More consistent, reliable outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Water-compatible for better delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Why Size Matters</h3>
                <p className="text-gray-700">
                  The smaller the particle size, the more efficiently your body can absorb and utilize beneficial compounds. Our nano-technology creates particles that are:
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="font-medium">25-200 nanometers in size</span>
                        <p className="text-sm text-gray-600">Compared to 2,000+ nanometers in standard products</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="font-medium">Enhanced cell membrane penetration</span>
                        <p className="text-sm text-gray-600">Allows active compounds to reach target tissues more effectively</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <span className="font-medium">Improved stability</span>
                        <p className="text-sm text-gray-600">Protects active ingredients from degradation for consistent potency</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center gap-4 mt-4">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600">
                    <Link href="/science">Learn More About Our Technology</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Life Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">TeaHC In Your Daily Life</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Thoughtfully designed to complement your lifestyle and wellness routine
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">For Active Days</h3>
                <p className="text-gray-600 mb-4">
                  Start your morning with TeaHC MOVE to support joint mobility and comfort throughout your day. Whether
                  you're gardening, taking a walk, or simply want to move with more ease, MOVE helps you stay engaged in
                  the activities that matter.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-sm text-orange-700">Morning Routine</span>
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-sm text-orange-700">Daily Activities</span>
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-sm text-orange-700">Gentle Exercise</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">For Restful Nights</h3>
                <p className="text-gray-600 mb-4">
                  End your day with TeaHC REPAIR to support your body's natural recovery processes while you sleep. The
                  calming formula helps you unwind and prepare for restorative rest, so you can wake feeling more
                  refreshed and ready for the day ahead.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-blue-50 rounded-full text-sm text-blue-700">Evening Ritual</span>
                  <span className="px-3 py-1 bg-blue-50 rounded-full text-sm text-blue-700">Nighttime Comfort</span>
                  <span className="px-3 py-1 bg-blue-50 rounded-full text-sm text-blue-700">Relaxation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">For Unexpected Moments</h3>
                <p className="text-gray-600 mb-4">
                  Keep TeaHC RAPID on hand for those times when you need support quickly. Whether after an intense
                  workout or during a long day of activity, RAPID provides targeted comfort when and where you need it
                  most.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-sm text-orange-700">Post-Activity</span>
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-sm text-orange-700">On-The-Go</span>
                  <span className="px-3 py-1 bg-orange-50 rounded-full text-sm text-orange-700">Quick Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Everything you need to know about TeaHC products
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">How quickly will I notice results?</h3>
              <p className="text-gray-600">
                Most customers report feeling the effects of TeaHC MOVE and REPAIR within 30-45 minutes. The RAPID
                formula is designed to work even faster, with many users noticing support in as little as 15-20 minutes.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Will TeaHC products make me feel "high"?</h3>
              <p className="text-gray-600">
                No. TeaHC products contain legal hemp-derived cannabinoids that are specifically formulated to provide
                comfort and mobility support without psychoactive effects. You'll remain clear-headed and focused.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">How do I know which formula is right for me?</h3>
              <p className="text-gray-600">
                MOVE is ideal for daytime use and active lifestyles. REPAIR is perfect for evening use and recovery.
                RAPID is designed for on-demand support when you need it most. Many customers benefit from using all
                three as a complete system.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">What if TeaHC doesn't work for me?</h3>
              <p className="text-gray-600">
                We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, simply
                contact us for a full refund. We want you to experience the benefits of TeaHC with zero risk.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Are TeaHC products third-party tested?</h3>
              <p className="text-gray-600">
                Yes. All TeaHC products undergo rigorous third-party testing for potency, purity, and safety. We publish
                all lab results on our website for complete transparency.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">How often should I take TeaHC products?</h3>
              <p className="text-gray-600">
                Most customers take MOVE in the morning, REPAIR in the evening, and keep RAPID on hand for when they
                need additional support. Each product can be used daily as part of your wellness routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-white text-orange-600 rounded-full text-sm font-medium mb-2">
                Join Our Community
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">Get 10% Off Your First Order</h2>
              <p className="text-xl">
                Stay informed about our launch, receive wellness tips, and be the first to know about special offers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Early access to new products</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Subscriber-only discounts</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Wellness tips and resources</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-transform hover:scale-[1.02]">
              <div className="absolute -top-3 -right-3 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Limited Time
              </div>
              <EmailCapture
                title="Get 10% Off Your First Order"
                description="Sign up now and we'll send you a discount code for your first purchase."
                buttonText="Get My Discount"
                className="text-gray-800"
              />
              <div className="mt-4 pt-4 border-t border-gray-100 text-center text-gray-500 text-sm">
                <p>We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced with Benefit-Focused Messaging */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-sm font-bold mb-6 shadow-sm">
              Limited Time Pre-Launch Offer
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Ready to Reclaim Your Comfort & Mobility?</h2>
            <p className="text-xl text-gray-700 mb-10">
              Join thousands who've discovered TeaHC's revolutionary approach to comfort and mobility. Your journey to living life on your terms starts here.
            </p>
            
            {/* Benefit Cards for Each ICP */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-white rounded-xl p-5 shadow-md border border-orange-100 transform transition hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">For Active Adults</h3>
                <p className="text-gray-600 mb-3">Wake up with less stiffness, move with greater ease, and enjoy your favorite activities again</p>
                <div className="text-orange-600 font-medium text-sm">Perfect for: Gardening, Walking, Daily Activities</div>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-md border border-blue-100 transform transition hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">For Athletes</h3>
                <p className="text-gray-600 mb-3">Recover faster between workouts, reduce post-exercise discomfort, and maintain your training schedule</p>
                <div className="text-blue-600 font-medium text-sm">Perfect for: Running, Gym, Sports Training</div>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-md border border-amber-100 transform transition hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">For Busy Professionals</h3>
                <p className="text-gray-600 mb-3">Natural, non-drowsy support that works quickly to keep you comfortable and productive all day</p>
                <div className="text-amber-600 font-medium text-sm">Perfect for: Office Work, Travel, Long Days</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg inline-block mb-10 max-w-lg mx-auto">
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
                  <span><span className="font-medium">Save $20 per box</span> - $19.99 instead of $39.99</span>
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
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-lg px-10 py-6 shadow-lg transition-transform hover:scale-105 rounded-xl"
              >
                <Link href="/reserve">Reserve Your 50% Discount Now</Link>
              </Button>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
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
