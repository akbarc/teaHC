import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PreOrderBar } from "@/components/pre-order-bar"
import { EmailCapture } from "@/components/email-capture"

export default function ScienceBackedPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PreOrderBar />

      {/* Hero Section with Scientific Focus */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="flex-1 space-y-4 sm:space-y-6">
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">
                <span className="flex items-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Advanced Nano-Technology
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-orange-500">Nano-Emulsified</span> Cannabinoids for Maximum Relief
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
                Experience our clinically-formulated cannabinoid system with up to 17x better absorption, faster onset times, and targeted anti-inflammatory action.
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

            {/* Scientific Visualization */}
            <div className="flex-1 relative w-full mt-6 md:mt-0">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-4 text-center">Superior Absorption Technology</h3>
                <div className="mt-4 text-sm text-gray-600 text-center">
                  Our proprietary formulation delivers up to 17x better curcumin intake to ease inflammation and joint pain
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technology Points */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Our Nano-Technology</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Three key advantages of our nano-emulsification system
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Superior Absorption */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Nano-Sized Particles</h3>
              <p className="text-gray-600">Our proprietary technology reduces particle size to 15-50 nanometers for dramatically improved bioavailability</p>
            </div>

            {/* Faster Results */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-Pathway Formulas</h3>
              <p className="text-gray-600">Synergistic blends of cannabinoids and botanical compounds target inflammation through multiple mechanisms</p>
            </div>

            {/* Targeted Relief */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Complete System</h3>
              <p className="text-gray-600">Three specialized formulas (MOVE, REPAIR, RAPID) for 24-hour inflammation management</p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 bg-orange-50 rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
            <EmailCapture
              title="Ready to Experience the Difference?"
              description="Reserve your TeaHC system today and get 50% off"
              buttonText="Reserve Now"
              className="text-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Scientific Evidence Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Backed by Science</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Research-validated nano-emulsification technology with proven results
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Clinical Study Results */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Our Products and Formulations
              </h3>
              <div className="space-y-4">
                <div className="flex items-center border-b border-gray-100 pb-3">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-2xl font-bold text-orange-500">MOVE</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Daytime Formula</h4>
                    <p className="text-sm text-gray-600">Nano CBD, THCV, CBG, and curcumin phytosomes for mobility and inflammation relief</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 