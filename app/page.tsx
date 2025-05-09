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
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-2">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-orange-500">Rediscover Comfort</span> and Freedom of Movement
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                TeaHC's innovative formulas help support your body's natural inflammatory response, offering a new
                approach to comfort and mobility when traditional methods fall short.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="/reserve">Reserve Yours Now</Link>
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
                  <p className="text-orange-800 font-medium">Early Access Pricing Ends In:</p>
                </div>
                <CountdownTimer hours={48} />
                <p className="text-sm text-orange-700 mt-2 flex items-center">
                  <svg className="h-4 w-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Reserve now to lock in our special pre-launch price of $19.99 per box. Regular price $39.99.
                </p>
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
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
                  Limited First Batch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
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
              <h3 className="font-medium text-gray-900">100% Satisfaction</h3>
              <p className="text-sm text-gray-500">Money-back guarantee</p>
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
              <h3 className="font-medium text-gray-900">Lab Tested</h3>
              <p className="text-sm text-gray-500">Third-party verified</p>
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
              <h3 className="font-medium text-gray-900">Made in USA</h3>
              <p className="text-sm text-gray-500">Quality manufacturing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-50 p-3 rounded-full mb-3">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-500">On all orders</p>
            </div>
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
                    <li>• Supports joint mobility and flexibility</li>
                    <li>• Helps maintain comfort during activity</li>
                    <li>• Promotes balanced energy levels</li>
                    <li>• Supports mental clarity</li>
                    <li>• Convenient daytime formula</li>
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
                    <li>• Promotes relaxation and calm</li>
                    <li>• Supports natural recovery processes</li>
                    <li>• Helps maintain comfortable sleep</li>
                    <li>• Reduces morning stiffness</li>
                    <li>• Soothing nighttime formula</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  "REPAIR has become an essential part of my evening routine. I wake up feeling more refreshed." -
                  Maria, 52
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
                    <li>• Provides support when you need it most</li>
                    <li>• Targets specific areas of discomfort</li>
                    <li>• Maintains mental clarity</li>
                    <li>• Supports continued activity</li>
                    <li>• Convenient portable format</li>
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

      {/* Technology Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">The TeaHC Difference</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Standard CBD Products:</span>
                  <span className="text-gray-600 font-medium">Typically 1-2 hours to take effect</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Over-the-counter options:</span>
                  <span className="text-gray-600 font-medium">Often temporary support</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">TeaHC Nano-Technology:</span>
                  <span className="text-green-600 font-medium">Typically 30-45 minutes to take effect</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">TeaHC Targeted Formulas:</span>
                  <span className="text-green-600 font-medium">Sustained support for 3-5 hours</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Advanced Delivery System</h2>
              <p className="text-lg text-gray-600">
                Many wellness products are limited by poor absorption. Our nano-technology helps break down active
                ingredients into smaller particles that can be more readily utilized by your body.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong>Enhanced absorption:</strong> More of the active ingredients reach their target
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong>Quicker onset:</strong> Support begins sooner than with standard formulations
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    <strong>Consistent results:</strong> More reliable support with each use
                  </span>
                </li>
              </ul>
              <Button asChild className="mt-4 bg-orange-500 hover:bg-orange-600">
                <Link href="/science">Explore Our Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Life Applications */}
      <section className="py-16 bg-gray-50">
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
      <section className="py-16 bg-white">
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

      {/* Origin Story - REVISED */}
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

      {/* Final CTA */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience TeaHC?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join those who've discovered a new approach to comfort and mobility. Your journey begins here.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md inline-block mb-8">
              <div className="flex items-center justify-center mb-2">
                <svg className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-orange-800 font-medium">Early Access Pricing Ends In:</p>
              </div>
              <CountdownTimer />
              <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                <svg className="h-4 w-4 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 000 16zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Only 127 spots remaining in our first production batch</span>
              </div>
            </div>
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 shadow-lg transition-transform hover:scale-105"
              >
                <Link href="/reserve">Reserve Yours Now</Link>
              </Button>
              <p className="text-sm text-gray-500">No payment required today. Limited quantities available.</p>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">Secure reservation process</span>
                <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600">30-day guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
