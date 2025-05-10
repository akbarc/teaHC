import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PreOrderBar } from "@/components/pre-order-bar"
import { EmailCapture } from "@/components/email-capture"

export default function DailyLivingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PreOrderBar />

      {/* Hero Section with Form Integration */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 space-y-4 sm:space-y-6">
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">
                <span className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Limited Time Offer
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Get Back to Doing <span className="text-orange-500">What You Love</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
                Experience the freedom to enjoy your favorite activities again with TeaHC's complete system for daily comfort and mobility.
              </p>
              
              {/* Social Proof */}
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600 font-medium text-xs">JD</span>
                    </div>
                  ))}
                </div>
                <span className="ml-3 font-medium">573 people have already reserved their TeaHC system</span>
              </div>

              {/* Reservation Form */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-orange-100">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">Sale Ends In:</div>
                    <CountdownTimer />
                  </div>
                  <EmailCapture
                    title="Reserve Your 50% Discount"
                    description="Enter your email to secure your pre-launch discount"
                    buttonText="Reserve Now"
                    className="text-gray-800"
                  />
                  <div className="flex items-center text-sm text-green-600">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>No payment required until shipping</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Image */}
            <div className="flex-1 relative w-full mt-6 md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/senior-gardening.jpg"
                    alt="Active senior gardening"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/senior-walking.jpg"
                    alt="Active senior walking"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/senior-grandkids.jpg"
                    alt="Senior playing with grandkids"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/senior-exercise.jpg"
                    alt="Senior exercising"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete System Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Your Complete TeaHC System</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Three powerful formulas working together to support your active lifestyle
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* MOVE Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image
                  src="/move-product.jpg"
                  alt="TeaHC MOVE - Morning Mobility Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TeaHC MOVE</h3>
                <p className="text-gray-600 mb-4">Morning mobility support to start your day right</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduces morning stiffness</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Supports joint mobility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RAPID Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image
                  src="/rapid-product.jpg"
                  alt="TeaHC RAPID - Fast-Acting Relief"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TeaHC RAPID</h3>
                <p className="text-gray-600 mb-4">Fast-acting relief when you need it most</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Works in 15-20 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Perfect for active moments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* REPAIR Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="aspect-square relative">
                <Image
                  src="/repair-product.jpg"
                  alt="TeaHC REPAIR - Nighttime Recovery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">TeaHC REPAIR</h3>
                <p className="text-gray-600 mb-4">Nighttime recovery support</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Promotes restful sleep</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Supports natural recovery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Price Comparison */}
          <div className="mt-12 bg-orange-50 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-sm text-gray-600">Regular Price</div>
                <div className="text-2xl font-bold text-gray-900 line-through">$119.97</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-sm text-orange-600 font-medium">Pre-Launch Price</div>
                <div className="text-3xl font-bold text-orange-600">$59.97</div>
                <div className="text-sm text-green-600 font-medium">Save 50% Today</div>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600"
              >
                <Link href="/reserve">Reserve Now</Link>
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600">
              Lock in your discount today - pay nothing now
            </div>
          </div>
        </div>
      </section>

      {/* Daily Routine Integration */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Your 24-Hour Support System</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            How TeaHC integrates seamlessly into your daily routine
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block"></div>
            
            {/* Morning Routine */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center mb-12 relative">
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 z-10"></div>
              <div className="bg-white rounded-xl p-6 shadow-md mb-6 md:mb-0 md:mr-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Morning Routine</h3>
                    <p className="text-gray-600 text-sm">7:00 AM - 9:00 AM</p>
                  </div>
                </div>
                <div className="pl-16">
                  <h4 className="font-bold text-orange-600 mb-2">TeaHC MOVE Formula</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Take with breakfast to reduce morning stiffness</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Perfect support for morning walks or stretching</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Provides all-day baseline support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/morning-routine.jpg"
                  alt="Morning Routine with TeaHC"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Daytime Activities */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center mb-12 relative">
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 z-10"></div>
              <div className="order-2 md:order-1 relative h-48 md:h-64 rounded-xl overflow-hidden mb-6 md:mb-0">
                <Image
                  src="/daytime-activities.jpg"
                  alt="Daytime Activities with TeaHC"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2 bg-white rounded-xl p-6 shadow-md md:ml-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Daytime Activities</h3>
                    <p className="text-gray-600 text-sm">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="pl-16">
                  <h4 className="font-bold text-blue-600 mb-2">TeaHC RAPID Formula</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Use before gardening, sports, or extended walking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fast-acting formula works in 15-20 minutes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Take as needed throughout the day</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Evening Routine */}
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 z-10"></div>
              <div className="bg-white rounded-xl p-6 shadow-md mb-6 md:mb-0 md:mr-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Evening Wind Down</h3>
                    <p className="text-gray-600 text-sm">7:00 PM - 10:00 PM</p>
                  </div>
                </div>
                <div className="pl-16">
                  <h4 className="font-bold text-indigo-600 mb-2">TeaHC REPAIR Formula</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Take 30-60 minutes before bedtime</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Promotes deep, restorative sleep</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Supports overnight recovery and renewal</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                <Image
                  src="/evening-routine.jpg"
                  alt="Evening Routine with TeaHC"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison Table */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Why Choose TeaHC</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            See how our complete system compares to other alternatives
          </p>

          <div className="overflow-x-auto max-w-4xl mx-auto">
            <div className="inline-block min-w-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Solution</th>
                      <th scope="col" className="px-6 py-4 text-center text-sm font-medium text-orange-600 uppercase tracking-wider bg-orange-50">
                        <span className="flex flex-col items-center">
                          <span className="text-lg font-bold text-orange-600">TeaHC</span>
                          <span className="text-xs font-normal text-orange-500 mt-1">Complete System</span>
                        </span>
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                        <span className="flex flex-col items-center">
                          <span>Traditional</span>
                          <span className="text-xs font-normal mt-1">Supplements</span>
                        </span>
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                        <span className="flex flex-col items-center">
                          <span>Over-Counter</span>
                          <span className="text-xs font-normal mt-1">Pain Relievers</span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">24-Hour Support</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <svg className="w-6 h-6 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <svg className="w-6 h-6 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <svg className="w-6 h-6 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Helps with Sleep</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <svg className="w-6 h-6 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <span className="inline-block w-6 text-center">±</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <svg className="w-6 h-6 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Fast Acting</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <div className="text-sm font-medium text-center">15-30 min</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <div className="text-sm font-medium text-center">60+ min</div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <div className="text-sm font-medium text-center">30-60 min</div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Long-Term Safe</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <svg className="w-6 h-6 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <svg className="w-6 h-6 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <svg className="w-6 h-6 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Morning Support</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <svg className="w-6 h-6 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <span className="inline-block w-6 text-center">±</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <svg className="w-6 h-6 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Formulas for Time of Day</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <span className="inline-block text-sm font-medium">3 Specialized</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <span className="inline-block text-sm font-medium">Usually 1</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">
                        <span className="inline-block text-sm font-medium">Usually 1</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-gray-500 text-xs italic text-center">
                Based on an independent review of major products in each category
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Real Stories from TeaHC Users</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            See how our complete system has transformed daily living for people just like you
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/laura-testimonial.jpg"
                    alt="Laura - TeaHC Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Verified Customer</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-center sm:text-left">
                    "When my knees stopped hurting, I could finally play with my grandkids again. TeaHC has given me back the freedom to enjoy life's simple pleasures. I use MOVE in the morning, RAPID when playing with the grandkids, and REPAIR before bed. The difference is night and day!"
                  </blockquote>
                  <div className="text-center sm:text-left">
                    <div className="font-medium">Laura P., 57</div>
                    <div className="text-sm text-gray-500">Grandmother of 4 • Using TeaHC for 7 months</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-center sm:text-left mb-2">Daily Activities Improved:</h4>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Gardening</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Walking</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Playing with grandchildren</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Sleep quality</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/robert-testimonial.jpg"
                    alt="Robert - TeaHC Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Verified Customer</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-center sm:text-left">
                    "As a retired construction worker, I've tried everything for joint comfort. Nothing worked consistently until TeaHC. The MOVE formula gets me going in the morning, and REPAIR helps me sleep like I haven't in years. I'm back to fishing three times a week!"
                  </blockquote>
                  <div className="text-center sm:text-left">
                    <div className="font-medium">Robert M., 62</div>
                    <div className="text-sm text-gray-500">Retired construction worker • Using TeaHC for 5 months</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-center sm:text-left mb-2">Daily Activities Improved:</h4>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Fishing</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Home repairs</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Driving long distances</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Sleep quality</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="hidden lg:block bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/susan-testimonial.jpg"
                    alt="Susan - TeaHC Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Verified Customer</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-center sm:text-left">
                    "I was skeptical at first, but after a month of using the TeaHC system, I'm amazed. I'm back to my Pilates class, can walk my dog without discomfort, and no longer have trouble sleeping. The way the three formulas work together throughout the day is genius."
                  </blockquote>
                  <div className="text-center sm:text-left">
                    <div className="font-medium">Susan K., 54</div>
                    <div className="text-sm text-gray-500">Yoga instructor • Using TeaHC for 3 months</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-center sm:text-left mb-2">Daily Activities Improved:</h4>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Yoga & Pilates</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Dog walking</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Cooking</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Sleep quality</span>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="hidden lg:block bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="/david-testimonial.jpg"
                    alt="David - TeaHC Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Verified Customer</span>
                  </div>
                  <blockquote className="text-gray-700 mb-4 text-center sm:text-left">
                    "As an avid golfer, I was devastated when I couldn't play more than 9 holes without discomfort. With TeaHC, I'm back to playing 18 holes twice a week. The RAPID formula is amazing before a round, and REPAIR helps me recover for the next day."
                  </blockquote>
                  <div className="text-center sm:text-left">
                    <div className="font-medium">David T., 59</div>
                    <div className="text-sm text-gray-500">Retired accountant • Using TeaHC for 8 months</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-center sm:text-left mb-2">Daily Activities Improved:</h4>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Golf</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Gardening</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Travel comfort</span>
                  <span className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full">Sleep quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Read More Testimonials Button */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg" 
              className="border-orange-500 text-orange-500 hover:bg-orange-50"
            >
              Read More Customer Stories
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 max-w-2xl mx-auto bg-white rounded-xl p-6 sm:p-8 shadow-lg">
            <EmailCapture
              title="Ready to Experience the Difference?"
              description="Reserve your TeaHC system today and get back to doing what you love"
              buttonText="Reserve Your 50% Discount"
              className="text-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Reservation Guarantee Box */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Reserve With Confidence</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">No Payment Required</h3>
                    <p className="text-gray-600">Pay only when your order ships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">30-Day Guarantee</h3>
                    <p className="text-gray-600">Try risk-free with our satisfaction guarantee</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">50% Pre-Launch Discount</h3>
                    <p className="text-gray-600">Save $60 on your complete system</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-gray-900">Limited Availability</h3>
                    <p className="text-gray-600">Only 700 spots available at this price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Everything you need to know about integrating TeaHC into your daily activities
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Which formula should I take in the morning?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      The TeaHC MOVE formula is specifically designed for morning use. It helps reduce morning stiffness and provides all-day baseline support for your joints and muscles. Take it with breakfast for optimal results. Many customers report that it's particularly helpful before morning walks or gardening sessions.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Can I take more than one formula per day?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Yes! The TeaHC system is designed to work together throughout your day. We recommend MOVE in the morning, RAPID as needed for specific activities (like gardening, sports, or extended walking), and REPAIR before bedtime. All three formulas are complementary and can be used on the same day for optimal 24-hour support.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">How long before I notice results?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Many customers report feeling the effects of our RAPID formula within 15-30 minutes. The MOVE and REPAIR formulas typically show noticeable improvements within 3-7 days of consistent use. For optimal results, we recommend using the complete system daily for at least 30 days, as the benefits can be cumulative over time.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Is TeaHC suitable for specific activities like golf or gardening?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Absolutely! TeaHC's RAPID formula is perfect for activity-specific support. Take it 15-30 minutes before golf, gardening, walking, or any activity that might cause discomfort. Many golfers report being able to play full 18-hole rounds again, gardeners can spend more time tending to their plants, and hikers can enjoy longer trails after incorporating TeaHC into their routine.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">How does the REPAIR formula help with sleep?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Our REPAIR formula contains specific compounds that support deep, restorative sleep by promoting physical comfort and relaxation. Many customers report falling asleep faster, experiencing fewer nighttime disruptions, and waking up feeling more refreshed. The formula works overnight to support your body's natural recovery processes, so you wake up ready for a new day of activities.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Can I travel with my TeaHC system?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Yes! TeaHC formulas come in travel-friendly packaging that's perfect for taking on trips. Many customers find the RAPID formula particularly helpful during long car rides or flights, and the REPAIR formula can help maintain your sleep quality away from home. We offer convenient travel packs for customers who frequently travel.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Back to Doing What You Love?</h2>
                <p className="text-gray-600">Join thousands who've discovered TeaHC's revolutionary approach to daily comfort and mobility.</p>
              </div>
              <EmailCapture
                title="Reserve Your Complete System"
                description="Get 50% off your TeaHC system today"
                buttonText="Reserve Now"
                className="text-gray-800"
              />
              <div className="mt-4 text-center text-sm text-gray-500">
                No payment required until shipping. Limited time offer.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 