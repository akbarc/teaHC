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

      {/* Real Results Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/laura-testimonial.jpg"
                    alt="Laura - TeaHC Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">Verified Customer</span>
                  </div>
                  <blockquote className="text-xl text-gray-700 mb-4">
                    "When my knees stopped hurting, I could finally play with my grandkids again. TeaHC has given me back the freedom to enjoy life's simple pleasures."
                  </blockquote>
                  <div className="font-medium">Laura, 57</div>
                  <div className="text-sm text-gray-500">Grandmother of 4</div>
                </div>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="mt-8 bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <EmailCapture
                title="Ready to Experience the Difference?"
                description="Reserve your TeaHC system today and get back to doing what you love"
                buttonText="Reserve Your 50% Discount"
                className="text-gray-800"
              />
            </div>
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