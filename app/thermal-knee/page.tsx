import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PreOrderBar } from "@/components/pre-order-bar"
import { EmailCapture } from "@/components/email-capture"
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Clock, Target, Beaker } from 'lucide-react';
import { PreReservationForm } from '@/components/pre-reservation-form';

export default function ThermalKneePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PreOrderBar />

      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 space-y-4 sm:space-y-6">
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">
                <span className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thermal Knee Support
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-orange-500">Thermal Knee</span> Support
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
                Experience our clinically-formulated cannabinoid system designed to support your knee health and mobility.
              </p>
              
              {/* Trust Builders */}
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Nano-Emulsified (15-50nm)
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Fast-Acting (15-30 min)
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Non-Psychoactive
                </span>
              </div>
              
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
                  <PreReservationForm
                    landingPage="fast-relief"
                    buttonText="Reserve Now - 50% Off"
                    successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
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

            {/* Thermal Knee Visualization */}
            <div className="flex-1 relative w-full mt-6 md:mt-0">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-center">Thermal Knee Support</h3>
                <div className="mt-4 text-sm text-gray-600 text-center">
                  Our proprietary formulation delivers targeted support for knee health and mobility
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Thermal Knee Benefits</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Three key advantages for your knee health
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Morning Support */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Morning Support</h3>
              <p className="text-gray-600">Start your day with enhanced knee mobility and comfort</p>
            </div>
            
            {/* Evening Recovery */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Evening Recovery</h3>
              <p className="text-gray-600">Support your knee's natural recovery process overnight</p>
            </div>
            
            {/* On-Demand Support */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">On-Demand Support</h3>
              <p className="text-gray-600">Get fast-acting relief when you need it most</p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 bg-orange-50 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
            <PreReservationForm
              landingPage="fast-relief"
              buttonText="Reserve Now"
              successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
            />
          </div>
        </div>
      </section>

      {/* Quick Benefits Bar */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold mb-2">Works in 15-30 minutes</h3>
            </Card>
            <Card className="p-6 text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold mb-2">Targets specific areas of discomfort</h3>
            </Card>
            <Card className="p-6 text-center">
              <Beaker className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h3 className="text-xl font-semibold mb-2">Clinically dosed for optimal relief</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why TeaHC Works So Fast</h2>
              <p className="text-lg text-gray-600">
                Unlike ordinary supplements that float around your bloodstream, TeaHC's nano-sized particles (20-50 nanometers) penetrate directly to inflammation sources. Our RAPID formula is specifically designed for those moments when you need relief quickly.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">Regular supplements: 60+ minutes to feel effects</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">TeaHC nano-technology: As little as 15 minutes</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  <p className="text-gray-700">Absorption rate: Up to 17x better bioavailability</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="relative aspect-square">
                <Image
                  src="/landing-pages/fast-relief/absorption-comparison-diagram.jpg"
                  alt="Absorption comparison diagram"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Nano-particles deliver compounds directly to inflammation sites
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People Like You Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square">
                <Image
                  src="/landing-pages/fast-relief/michael-testimonial-portrait.jpg"
                  alt="Michael R. testimonial"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <blockquote className="text-2xl font-medium text-gray-900">
                  "I felt the difference before lunch. After years of trying supplements that barely worked, TeaHC's fast-acting formula was a complete game-changer."
                </blockquote>
                <p className="text-gray-600">Michael R., 54 - Verified Customer</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <blockquote className="text-2xl font-medium text-gray-900">
                  "When my knee flares up during gardening, I use TeaHC RAPID and can get back to what I was doing within 20 minutes."
                </blockquote>
                <p className="text-gray-600">Sarah L., 67 - Verified Customer</p>
              </div>
              <div className="relative aspect-square order-1 md:order-2">
                <Image
                  src="/landing-pages/fast-relief/sarah-testimonial-portrait.jpg"
                  alt="Sarah L. testimonial"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">The Absorption Problem</h3>
              <p className="text-gray-600 mb-4">
                Most supplements waste active ingredients with only 10% bioavailability
              </p>
              <div className="relative aspect-video">
                <Image
                  src="/landing-pages/fast-relief/poor-absorption-diagram.jpg"
                  alt="Poor absorption diagram"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Our Nano-Technology</h3>
              <p className="text-gray-600 mb-4">
                20-50 nanometer particles are absorbed up to 17x better
              </p>
              <div className="relative aspect-video">
                <Image
                  src="/landing-pages/fast-relief/nano-particle-size-comparison.jpg"
                  alt="Nano-particle size comparison"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Rapid Relief</h3>
              <p className="text-gray-600 mb-4">
                Feel the difference in as little as 15 minutes
              </p>
              <div className="relative aspect-video">
                <Image
                  src="/landing-pages/fast-relief/time-progression-clock.jpg"
                  alt="Time progression clock"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Secondary Reservation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Reserve Your TeaHC System Today
              </h2>
              <p className="text-xl text-gray-600">
                Join the first 700 customers getting 50% off
              </p>
            </div>
            <Card className="p-8">
              <div className="space-y-6">
                <PreReservationForm
                  landingPage="fast-relief"
                  buttonText="Lock In Your Discount"
                  successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
                />
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">30-day guarantee</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Secure checkout</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Made in USA</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Reservation Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Don't Wait for Relief - Reserve Now
            </h2>
            <div className="space-y-2">
              <p className="text-xl text-gray-600 line-through">Regular Price: $39.99 per product</p>
              <p className="text-3xl font-bold text-orange-600">Pre-Launch Price: $19.99 per product (50% OFF)</p>
            </div>
            <Card className="p-8 bg-white">
              <div className="space-y-6">
                <PreReservationForm
                  landingPage="fast-relief"
                  buttonText="Reserve Now"
                  successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
                />
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    30-day satisfaction promise: If you're not completely satisfied with your TeaHC system, simply return it within 30 days for a full refund.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
} 