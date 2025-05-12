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

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Column: Headline and Form */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Experience Relief With <span className="text-orange-500">17× Better Absorption</span> Technology
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl">
                TeaHC's proprietary nano-emulsion delivers comfort in as little as 15 minutes while standard supplements are still dissolving
              </p>

              {/* Email Capture Form */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <EmailCapture 
                  placeholder="Enter your email to secure discount"
                  buttonText="RESERVE YOUR 50% DISCOUNT"
                  privacyText="We respect your privacy. No spam."
                  source="homepage_hero"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Limited Pre-Launch Offer • No Payment Today • Ships June 2025
                </p>
              </div>

              {/* Trust Elements */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="flex items-center space-x-2">
                  <div className="bg-orange-50 p-2 rounded-full">
                    <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">17× Better Absorption</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-orange-50 p-2 rounded-full">
                    <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">FDA-Registered Facility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-orange-50 p-2 rounded-full">
                    <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="bg-orange-50 p-2 rounded-full">
                    <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Lab Verified</span>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="text-orange-800 font-medium mb-2">Pre-Launch Discount Ends In:</p>
                <CountdownTimer />
              </div>
            </div>

            {/* Right Column: Split Design */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left: Thermal Visualization */}
              <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 shadow-lg">
                <Image
                  src="/product-images/thermal-knee-scan.png"
                  alt="Thermal visualization of TeaHC's targeted relief"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-900">Targeted Relief Visualization</p>
                  <p className="text-xs text-gray-600">Heat map shows rapid absorption and targeted delivery</p>
                </div>
              </div>

              {/* Right: Product Trio */}
              <div className="relative bg-white rounded-xl p-4 shadow-lg">
                <Image
                  src="/product-images/product-trio.png"
                  alt="TeaHC Product Line featuring MOVE, REPAIR, and RAPID formulas"
                  width={400}
                  height={400}
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
                  Complete System: 30-Day Supply
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Visualization Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Science of 17× Better Absorption</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Our proprietary technology is backed by pharmaceutical science and real-world results
          </p>
          
          {/* Key Scientific Points */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="bg-orange-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Nano-Sized Particles</h3>
              <p className="text-gray-600">Our proprietary nano-emulsion technology creates 25-200nm particles that are easily absorbed by your body's cells (vs. 2,000+ nm in standard products)</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="bg-orange-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Enhanced Cell Penetration</h3>
              <p className="text-gray-600">Nano-sized particles easily pass through cell membranes, delivering active ingredients where they're needed most with 90% bioavailability (vs. 10% in traditional supplements)</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="bg-orange-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast-Acting Relief</h3>
              <p className="text-gray-600">Experience the difference with rapid absorption and targeted delivery, working in as little as 15 minutes compared to 45-60+ minutes with traditional supplements</p>
            </div>
          </div>

          {/* Scientific Authority Statement */}
          <div className="mt-12 text-center">
            <div className="bg-blue-50 max-w-3xl mx-auto p-6 rounded-xl border border-blue-100">
              <p className="text-lg text-gray-700 italic">
                "Developed by pharmaceutical scientists using advanced nano-emulsion technology for maximum bioavailability and targeted relief"
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-6 border-orange-500 text-orange-500 hover:bg-orange-50"
              >
                <Link href="/science">See The Complete Science</Link>
              </Button>
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
                    src="/product-images/move-formula.png"
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
                    src="/product-images/repair-formula.png"
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
                    src="/product-images/rapid-formula.png"
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

      {/* Direct Comparison Section - Completely Redesigned */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Why TeaHC Outperforms Traditional Supplements</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our advanced nano-technology delivers active ingredients more efficiently than traditional formulations
          </p>

          {/* Visual Comparison Cards */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <h3 className="text-2xl font-bold text-white text-center">Why Our Nano-Technology Makes The Difference</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-x-8">
                {/* Image Column */}
                <div className="p-6">
                  <div className="relative h-80 mb-4">
                    <Image
                      src="/product-images/nano-absorption.png"
                      alt="TeaHC nano-emulsion vs standard absorption visualization"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg mt-4 border border-orange-100">
                    <p className="text-gray-700">
                      <span className="font-semibold text-orange-600">The Science:</span> Our proprietary nano-emulsion technology breaks down active ingredients into microscopic particles (25-200nm) that easily pass through cell membranes, resulting in 17× better bioavailability than traditional supplements.
                    </p>
                  </div>
                </div>
                
                {/* Comparison Column */}
                <div className="p-6 space-y-6">
                  {/* Standard vs TeaHC comparison */}
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Absorption Rate</h4>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">Standard Supplements</span>
                        <span className="text-red-500 font-medium">Only 10% reaches target</span>
                      </div>
                      <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden">
                        <div className="bg-gray-400 h-full rounded-full" style={{ width: '10%' }}></div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 mb-2">
                        <span className="text-sm text-gray-500">TeaHC Nano-Formula</span>
                        <span className="text-green-600 font-bold">90% reaches target</span>
                      </div>
                      <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-full rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-100 pb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Onset Time</h4>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-500">Standard:</span>
                          <span className="text-red-500 font-medium ml-2">45-60+ minutes</span>
                        </div>
                        <div>
                          <span className="text-gray-500">TeaHC:</span>
                          <span className="text-green-600 font-bold ml-2">As little as 15 min</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm">Precision</h4>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Standard:</span>
                          <span className="text-sm">Limited</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">TeaHC:</span>
                          <span className="text-sm font-medium text-green-600">Precise</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm">Value</h4>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Standard:</span>
                          <span className="text-sm text-red-500">90% wasted</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">TeaHC:</span>
                          <span className="text-sm font-medium text-green-600">Maximum benefit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Differentiators */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">The 17× Difference in Action</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Faster Relief</h4>
                <p className="text-gray-600">Feel the difference in as little as 15 minutes, not hours</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Superior Targeting</h4>
                <p className="text-gray-600">Nano-particles deliver active ingredients directly where needed</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600">Lab-verified 17× higher bioavailability vs. standard supplements</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Experience the difference that 17× better absorption makes in your daily life
              </p>
              <a
                href="/reserve"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 shadow-md hover:shadow-xl transition-all duration-200"
              >
                Reserve Your System Now
                <svg className="ml-3 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to know about TeaHC's revolutionary nano-technology and how it can help you.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How does TeaHC's nano-technology work?",
                answer: "TeaHC uses a proprietary nano-emulsification process that breaks down active ingredients into microscopic particles (less than 100 nanometers). This allows for 17× better absorption compared to traditional supplements, as these tiny particles can easily pass through cell membranes and reach their target areas more effectively."
              },
              {
                question: "How quickly will I feel the effects?",
                answer: "Most customers report feeling the effects within 15 minutes of taking TeaHC, compared to 45-60 minutes with traditional supplements. This rapid onset is due to our nano-technology, which allows the active ingredients to be absorbed and utilized by your body much more efficiently."
              },
              {
                question: "Is TeaHC safe to use?",
                answer: "Yes, TeaHC is manufactured in an FDA-registered facility and undergoes rigorous third-party testing. Our nano-technology is a physical process that doesn't alter the chemical structure of our ingredients, making it completely safe. We use only natural, high-quality ingredients that are carefully selected for their efficacy and safety."
              },
              {
                question: "How does the Complete System work together?",
                answer: "The Complete System is designed to provide 24/7 support: MOVE for morning mobility, RAPID for fast-acting relief during the day, and REPAIR for nighttime recovery. Each formula is optimized for its specific time of use, working together to provide comprehensive support throughout your day."
              },
              {
                question: "What if TeaHC doesn't work for me?",
                answer: "We're so confident in TeaHC's effectiveness that we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your results, simply return the unused portion within 30 days for a full refund. No questions asked."
              },
              {
                question: "How is TeaHC different from other supplements?",
                answer: "TeaHC's key differentiator is our nano-technology, which provides 17× better absorption than traditional supplements. This means you get more active ingredients where they need to be, faster. Additionally, our Complete System approach ensures you have the right support at the right time, whether it's morning mobility, daytime relief, or nighttime recovery."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                    <svg
                      className="h-6 w-6 text-gray-400 group-open:transform group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Contact Our Team
              <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
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
                source="homepage_footer"
              />
              <div className="mt-4 pt-4 border-t border-gray-100 text-center text-gray-500 text-sm">
                <p>We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the 17× Difference?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of people who've discovered the power of TeaHC's nano-technology.
              Reserve your Complete System today and start your journey to better mobility.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">FDA-Registered Facility</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">30-Day Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Lab-Verified Results</span>
              </div>
            </div>

            {/* Pre-launch Offer */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-100 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pre-Launch Special Offer</h3>
                  <p className="text-gray-600 mb-4">
                    Be among the first to experience TeaHC's revolutionary nano-technology.
                    Reserve your Complete System now and save 20%.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-orange-600">$47.98</span>
                    <span className="text-xl text-gray-500 line-through">$59.97</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">20% OFF</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <a href="/reserve" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all duration-200">
                    Reserve Your System
                    <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Final Trust Elements */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Fast Shipping</h4>
                <p className="text-gray-600">Free shipping on all orders. Get your system in 2-3 business days.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Secure Checkout</h4>
                <p className="text-gray-600">Your information is protected with bank-level security.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Easy Returns</h4>
                <p className="text-gray-600">30-day satisfaction guarantee. No questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Bridge */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Stop Wasting Money On Supplements Your Body Can't Absorb
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            {/* Problem Visualization */}
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="relative h-80 mb-6">
                  <Image
                    src="/product-images/wasted-supplements.png"
                    alt="Visualization of wasted supplement absorption"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-500/90 text-white px-6 py-3 rounded-lg transform -rotate-12">
                      <span className="text-2xl font-bold">90% Wasted</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Standard Supplements</h3>
                  <p className="text-gray-600">Most active ingredients never reach their target due to poor absorption</p>
                </div>
              </div>
            </div>

            {/* Solution Statement */}
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-100">
                <h3 className="text-xl font-semibold mb-4">TeaHC's nano-emulsified formula delivers active ingredients directly where you need them most</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white p-2 rounded-full flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Feel relief in as little as 15 minutes, not hours</p>
                      <p className="text-sm text-gray-600 mt-1">Our nano-emulsion technology ensures rapid absorption and fast-acting results</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white p-2 rounded-full flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Targeted delivery to specific areas of discomfort</p>
                      <p className="text-sm text-gray-600 mt-1">Nano-sized particles reach their intended destination with precision</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500 text-white p-2 rounded-full flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">No more wasting money on poorly absorbed supplements</p>
                      <p className="text-sm text-gray-600 mt-1">17× better absorption means you get the full value of every dose</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Pain Point Callout */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <p className="text-lg text-gray-700 italic text-center">
                  "If you've tried other supplements without success, the problem isn't you—it's poor absorption."
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Link href="/reserve">Experience the 17× Difference</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete System Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Your Complete 24/7 Anti-Inflammatory System
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* MOVE Formula */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="relative h-48 mb-6">
                  <Image
                    src="/product-images/move-formula.png"
                    alt="TeaHC MOVE Formula"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">MOVE Formula</h3>
                <p className="text-gray-700 mb-4">Morning Mobility Support</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Enhanced with nano-technology</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Begin your day with comfort</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Take within 30 minutes of waking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RAPID Formula */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="relative h-48 mb-6">
                  <Image
                    src="/product-images/rapid-formula.png"
                    alt="TeaHC RAPID Formula"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">RAPID Formula</h3>
                <p className="text-gray-700 mb-4">Fast-Acting Relief When You Need It</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>15-minute activation time</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Keep with you for unexpected moments</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Use as needed for quick support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* REPAIR Formula */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="relative h-48 mb-6">
                  <Image
                    src="/product-images/repair-formula.png"
                    alt="TeaHC REPAIR Formula"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">REPAIR Formula</h3>
                <p className="text-gray-700 mb-4">Nighttime Recovery Support</p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Enhanced with sleep support</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Wake up with less stiffness</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Take 30-60 minutes before bed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Price Display */}
          <div className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-center text-white">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-2xl line-through opacity-75">$59.97</span>
              <span className="text-4xl font-bold">$47.98</span>
            </div>
            <p className="text-lg mb-6">Complete System: 30-Day Supply of All Three Formulas</p>
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50"
            >
              <Link href="/reserve">SECURE YOUR COMPLETE SYSTEM</Link>
            </Button>
            <p className="text-sm text-white/90 mt-4">243 People Have Already Reserved</p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Real People, Real Results</h2>

          {/* Featured Testimonial */}
          <div className="max-w-3xl mx-auto mt-12 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-2">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-xl font-bold text-orange-600">JD</span>
                </div>
              </div>
            </div>
            <blockquote className="text-2xl text-gray-700 text-center italic mb-6">
              "At 67, I never thought I'd race my grandson again. TeaHC gave me back those moments."
            </blockquote>
            <div className="text-center">
              <p className="font-medium text-gray-900">John D.</p>
              <p className="text-sm text-gray-600">Retired Accountant, 67</p>
              <div className="inline-flex items-center mt-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Verified Customer
              </div>
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-orange-600">MS</span>
                </div>
                <div>
                  <p className="font-medium">Mary S.</p>
                  <p className="text-sm text-gray-600">Yoga Instructor, 52</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">
                "The morning stiffness that used to take hours to work through is now gone within minutes of taking MOVE."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-orange-600">RJ</span>
                </div>
                <div>
                  <p className="font-medium">Robert J.</p>
                  <p className="text-sm text-gray-600">Construction Worker, 45</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">
                "RAPID is a game-changer. When I feel that afternoon ache coming on, I take it and within 15 minutes I'm back to work."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-orange-600">EL</span>
                </div>
                <div>
                  <p className="font-medium">Elizabeth L.</p>
                  <p className="text-sm text-gray-600">Retired Teacher, 71</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">
                "REPAIR has transformed my sleep quality. I wake up feeling refreshed and ready to enjoy my day."
              </p>
            </div>
          </div>

          {/* Social Proof Counter */}
          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700">
              Join <span className="font-bold text-orange-500">2,400+</span> people who've discovered TeaHC's revolutionary approach
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-orange-500 hover:bg-orange-600 shadow-lg"
            >
              <Link href="/reserve">Experience It For Yourself</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
