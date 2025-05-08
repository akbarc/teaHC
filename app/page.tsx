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

      {/* Hero Section with Product Line */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Advanced Nano-Cannabinoid Technology
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                <span className="text-orange-500">Rediscover Comfort</span>
                <br />
                and Freedom of Movement
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                TeaHC's innovative formulas help support your body's natural inflammatory response, offering a new
                approach to comfort and mobility when traditional methods fall short.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  <Link href="/reserve">Reserve Yours Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 text-lg"
                >
                  <Link href="/science">See How It Works</Link>
                </Button>
              </div>
              <div className="pt-6 bg-orange-50 p-6 rounded-xl border border-orange-200 shadow-sm">
                <div className="flex items-center mb-4">
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
                  <p className="text-orange-800 font-medium text-lg">Early Access Pricing Ends In:</p>
                </div>
                <CountdownTimer hours={48} />
                <p className="text-sm text-orange-700 mt-4 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reserve now to lock in our special pre-launch price of $26.99 per box. Regular price $39.99.
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-50 rounded-3xl transform rotate-3 scale-105"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%203.09.15%20PM-6h3WfOWBo8AUSJ6cxYXYpKhiTlFrCg.png"
                  alt="TeaHC Product Line featuring MOVE, REPAIR, and RAPID formulas"
                  width={600}
                  height={500}
                  className="object-contain"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium">
                  Limited First Batch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-orange-50 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">100% Satisfaction</h3>
              <p className="text-gray-500">Money-back guarantee</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-orange-50 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Lab Tested</h3>
              <p className="text-gray-500">Third-party verified</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-orange-50 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Made in USA</h3>
              <p className="text-gray-500">Quality manufacturing</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-orange-50 p-4 rounded-full mb-4">
                <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-500">On all orders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Complete System</h2>
            <p className="text-xl text-gray-600">
              Each product is designed to work together, providing comprehensive support throughout your day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MOVE Product */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-8 bg-orange-500 text-white">
                <h3 className="text-3xl font-bold">TeaHC MOVE</h3>
                <p className="text-white/90 text-lg">Daytime Mobility Support</p>
              </div>
              <div className="p-8">
                <div className="aspect-square relative mb-6 bg-white rounded-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.36%20PM-XBaNZDmhr6evYOpKU6cIueASqrlgp4.png"
                    alt="TeaHC MOVE - Mobility and Inflammation Relief Formula"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="bg-orange-50 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Supports joint mobility and flexibility
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Helps maintain comfort during activity
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Promotes balanced energy levels
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Supports mental clarity
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "MOVE has become part of my morning routine. It helps me stay comfortable throughout my daily
                  activities." - Robert, 67
                </p>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* REPAIR Product */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-8 bg-blue-800 text-white">
                <h3 className="text-3xl font-bold">TeaHC REPAIR</h3>
                <p className="text-white/90 text-lg">Nighttime Recovery Support</p>
              </div>
              <div className="p-8">
                <div className="aspect-square relative mb-6 bg-white rounded-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.29%20PM-rWPKTVqK3SvROr879dEKKfD6xqCLrB.png"
                    alt="TeaHC REPAIR - Nighttime Recovery and Inflammation Support Formula"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-800 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Promotes relaxation and calm
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-800 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Supports natural recovery processes
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-800 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Helps maintain comfortable sleep
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-800 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Reduces morning stiffness
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "REPAIR has become an essential part of my evening routine. I wake up feeling more refreshed." -
                  Maria, 52
                </p>
                <Button asChild className="w-full bg-blue-800 hover:bg-blue-900 text-lg py-6">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* RAPID Product */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-8 bg-orange-700 text-white">
                <h3 className="text-3xl font-bold">TeaHC RAPID</h3>
                <p className="text-white/90 text-lg">On-Demand Support</p>
              </div>
              <div className="p-8">
                <div className="aspect-square relative mb-6 bg-white rounded-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.22%20PM-8h3WfOWBo8AUSJ6cxYXYpKhiTlFrCg.png"
                    alt="TeaHC RAPID - Fast-Acting Relief Formula"
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="bg-orange-50 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Benefits:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-700 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Fast-acting relief when needed
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-700 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Convenient on-the-go formula
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-700 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Supports targeted comfort
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-700 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Perfect for active lifestyles
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "RAPID is my go-to when I need quick support. It's perfect for my busy lifestyle." - Sarah, 45
                </p>
                <Button asChild className="w-full bg-orange-700 hover:bg-orange-800 text-lg py-6">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture Section */}
      <EmailCapture />
    </main>
  )
}
