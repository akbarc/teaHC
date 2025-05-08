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
              <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-2">
                Finally, Relief That Actually Works
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-amber-500">Live Without Limits</span> - Reclaim Your Freedom
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                I created TeaHC after years of struggling with inflammation. Now thousands are experiencing the freedom
                of movement and comfort they thought was gone forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Link href="/reserve">Reserve Yours Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/science">See How It Works</Link>
                </Button>
              </div>
              <div className="pt-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="text-amber-800 font-medium mb-1">🔥 Flash Sale: Early Access Pricing Ends In:</p>
                <CountdownTimer hours={48} />
                <p className="text-sm text-amber-700 mt-2">
                  Reserve now to lock in our special pre-launch price of $26.99 per box. Price increases when the timer
                  hits zero!
                </p>
              </div>
            </div>
            <div className="flex-1 relative bg-white p-8 rounded-2xl shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%203.09.15%20PM-6h3WfOWBo8AUSJ6cxYXYpKhiTlFrCg.png"
                alt="TeaHC Product Line featuring MOVE, REPAIR, and RAPID formulas"
                width={600}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - MOVED HIGHER */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Real People, Real Results</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Don't just take our word for it. Here's what people like you are saying about TeaHC.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500">
                <Image
                  src="/smiling-woman-portrait.png"
                  alt="Sarah T."
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "After my knee surgery, I thought I'd never run again. Within 20 minutes of trying TeaHC MOVE, I felt
                  relief I hadn't experienced in years. Three months later, I'm back to my 5-mile morning runs!"
                </p>
                <div className="font-medium text-center">Sarah T. - Marathon Runner, 42</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500">
                <Image
                  src="/middle-aged-man-portrait.png"
                  alt="Michael R."
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "As a fitness coach with chronic back pain, I've tried everything. TeaHC REPAIR has transformed my
                  sleep. I wake up without the stiffness that used to take hours to work through. It's given me my
                  mornings back."
                </p>
                <div className="font-medium text-center">Michael R. - Fitness Coach, 38</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500">
                <Image
                  src="/woman-athlete-portrait.png"
                  alt="Jennifer K."
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The RAPID shot is my secret weapon on competition days. When my shoulder flares up, one shot and I'm
                  back in the game within minutes. Nothing else works this fast or this effectively. It's literally
                  changed my career."
                </p>
                <div className="font-medium text-center">Jennifer K. - Professional Athlete, 29</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
              <Link href="/reserve">Join Them Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Founder's Story - NEW PERSONAL SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-amber-100 absolute -top-4 -left-4 w-full h-full rounded-xl"></div>
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?key=8hgqu"
                  alt="TeaHC Founder's Journey"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">My Personal Journey</h2>
              <p className="text-lg text-gray-700">
                "After my car accident in 2018, I was told I'd never be pain-free again. The constant inflammation left
                me unable to play with my kids or even sleep through the night."
              </p>
              <p className="text-lg text-gray-700">
                "When traditional medications caused more problems than they solved, I began researching alternatives.
                Working with scientists and doctors, we discovered that specific cannabinoid combinations could target
                inflammation in ways nothing else could."
              </p>
              <p className="text-lg text-gray-700">
                "The first prototype of TeaHC gave me relief within minutes. That's when I knew I had to share this with
                others suffering like I was."
              </p>
              <p className="text-lg text-gray-700 font-medium">
                "Today, I'm pain-free and helping thousands reclaim their lives too. This isn't just a product for
                me—it's a mission."
              </p>
              <div className="pt-2">
                <p className="font-bold text-amber-500">— James Wilson, TeaHC Founder</p>
              </div>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/about">Read My Full Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Life Applications - NEW SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">How TeaHC Fits Into Your Life</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Real solutions for real-life challenges you face every day
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image src="/active-hiker.png" alt="Active Lifestyle" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">For Active Days</h3>
                <p className="text-gray-600 mb-4">
                  Start your morning with TeaHC MOVE to support joint mobility and reduce inflammation throughout your
                  active day. Whether you're hiking, playing with your kids, or just enjoying life, you'll move with
                  more freedom and less discomfort.
                </p>
                <div className="flex items-center text-amber-500 font-medium">
                  <span>Perfect for:</span>
                  <span className="ml-2 px-2 py-1 bg-amber-50 rounded-full text-sm">Weekend Warriors</span>
                  <span className="ml-2 px-2 py-1 bg-amber-50 rounded-full text-sm">Parents</span>
                  <span className="ml-2 px-2 py-1 bg-amber-50 rounded-full text-sm">Travelers</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image src="/peaceful-sleep.png" alt="Restful Sleep" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">For Restful Nights</h3>
                <p className="text-gray-600 mb-4">
                  End your day with TeaHC REPAIR to support your body's natural recovery processes while you sleep. Wake
                  up feeling refreshed and ready for the day, without the morning stiffness that used to slow you down.
                </p>
                <div className="flex items-center text-blue-800 font-medium">
                  <span>Perfect for:</span>
                  <span className="ml-2 px-2 py-1 bg-blue-50 rounded-full text-sm">Light Sleepers</span>
                  <span className="ml-2 px-2 py-1 bg-blue-50 rounded-full text-sm">Hard Workers</span>
                  <span className="ml-2 px-2 py-1 bg-blue-50 rounded-full text-sm">Recovery</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image src="/sudden-pain-relief.png" alt="Immediate Relief" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">For Unexpected Moments</h3>
                <p className="text-gray-600 mb-4">
                  Keep TeaHC RAPID on hand for those moments when discomfort strikes without warning. Within minutes,
                  you'll feel relief that lets you get back to what matters instead of being sidelined by pain.
                </p>
                <div className="flex items-center text-amber-700 font-medium">
                  <span>Perfect for:</span>
                  <span className="ml-2 px-2 py-1 bg-amber-50 rounded-full text-sm">Athletes</span>
                  <span className="ml-2 px-2 py-1 bg-amber-50 rounded-full text-sm">Busy Professionals</span>
                  <span className="ml-2 px-2 py-1 bg-amber-50 rounded-full text-sm">On-the-go</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Inflammation Focus Section - SIMPLIFIED */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">The Root Cause Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              We don't just mask symptoms - we target the underlying inflammation that's holding you back
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Works With Your Body</h3>
              <p className="text-gray-600">
                Instead of fighting your body's natural processes, TeaHC works with your endocannabinoid system to
                restore balance and reduce excessive inflammation naturally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast-Acting Relief</h3>
              <p className="text-gray-600">
                Our nano-technology delivers relief in minutes, not hours. You'll feel the difference with your first
                dose, and the effects last longer than traditional options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Harsh Side Effects</h3>
              <p className="text-gray-600">
                Unlike prescription medications, TeaHC provides relief without the stomach issues, drowsiness, or other
                side effects that can disrupt your day.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
              <Link href="/reserve">Experience the Difference</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Complete Solution</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Each product is designed to work together as a system, providing 24-hour support for your active lifestyle
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MOVE Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="p-6 bg-amber-500 text-white">
                <h3 className="text-2xl font-bold">TeaHC MOVE</h3>
                <p className="text-white/80">Daytime Freedom & Mobility</p>
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
                <div className="bg-amber-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-sm mb-1">What You'll Feel:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Improved joint mobility within 20 minutes</li>
                    <li>• Reduced stiffness and discomfort</li>
                    <li>• Sustained energy without jitters</li>
                    <li>• Mental clarity and focus</li>
                    <li>• Lasting relief for 4-6 hours</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  "I take MOVE before my morning walk, and for the first time in years, I can keep up with my grandkids
                  at the park." - Robert, 67
                </p>
                <Button asChild className="w-full bg-amber-500 hover:bg-amber-600">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* REPAIR Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="p-6 bg-blue-800 text-white">
                <h3 className="text-2xl font-bold">TeaHC REPAIR</h3>
                <p className="text-white/80">Nighttime Recovery & Renewal</p>
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
                  <h4 className="font-semibold text-sm mb-1">What You'll Feel:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Deep relaxation without grogginess</li>
                    <li>• Easier time falling asleep</li>
                    <li>• Fewer nighttime disruptions</li>
                    <li>• Reduced morning stiffness</li>
                    <li>• Wake up feeling refreshed</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  "REPAIR has given me back my mornings. I used to need an hour just to loosen up enough to get out of
                  bed." - Maria, 52
                </p>
                <Button asChild className="w-full bg-blue-800 hover:bg-blue-900">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* RAPID Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="p-6 bg-amber-700 text-white">
                <h3 className="text-2xl font-bold">TeaHC RAPID</h3>
                <p className="text-white/80">On-Demand Instant Relief</p>
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
                <div className="bg-amber-50 p-3 rounded-lg mb-4">
                  <h4 className="font-semibold text-sm mb-1">What You'll Feel:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Relief begins in just 10-15 minutes</li>
                    <li>• Targeted comfort where you need it most</li>
                    <li>• Mental clarity without sedation</li>
                    <li>• Ability to return to activities quickly</li>
                    <li>• Convenient on-the-go format</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  "I keep RAPID in my gym bag. When my shoulder acts up during a workout, I'm back in action in
                  minutes." - Jason, 34
                </p>
                <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
              <Link href="/reserve">Reserve Your System Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Email Capture Section - NEW */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
              <p className="text-xl">
                Be the first to know about new products, special offers, and helpful tips for managing inflammation
                naturally.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Early access to new formulas</span>
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
                  <span>Exclusive subscriber discounts</span>
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
                  <span>Wellness tips from our experts</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <EmailCapture
                title="Get 10% Off Your First Order"
                description="Sign up now and we'll send you a discount code for your first purchase."
                buttonText="Get My Discount"
                className="text-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bioavailability Comparison - SIMPLIFIED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 bg-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Why TeaHC Works When Others Don't</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Standard CBD Products:</span>
                  <span className="text-red-600 font-bold">Takes 1-2 hours to work</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Over-the-counter options:</span>
                  <span className="text-red-600 font-bold">Temporary relief at best</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">TeaHC Nano-Technology:</span>
                  <span className="text-green-600 font-bold">Relief in 15-30 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">TeaHC Targeted Formulas:</span>
                  <span className="text-green-600 font-bold">Lasting relief for 4-6 hours</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">The TeaHC Difference</h2>
              <p className="text-lg text-gray-600">
                Most products fail because they never reach the areas that need them most. Our nano-technology breaks
                down active ingredients into particles so small they can actually reach their targets, delivering relief
                where and when you need it.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-amber-500 mr-2 mt-0.5"
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
                    <strong>17x higher absorption:</strong> More of what you take actually reaches your system
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-amber-500 mr-2 mt-0.5"
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
                    <strong>Faster onset:</strong> Feel relief in minutes instead of hours
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-amber-500 mr-2 mt-0.5"
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
                    <strong>Consistent results:</strong> The same reliable relief every time you use it
                  </span>
                </li>
              </ul>
              <Button asChild className="mt-4 bg-amber-500 hover:bg-amber-600">
                <Link href="/reserve">Experience It Yourself</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reclaim Your Freedom?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands who've transformed their lives with TeaHC. Your journey to comfort and mobility starts here.
          </p>
          <div className="bg-white p-4 rounded-lg inline-block mb-8">
            <p className="text-amber-800 font-medium mb-1">🔥 Flash Sale: Early Access Pricing Ends In:</p>
            <CountdownTimer />
          </div>
          <div>
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-lg px-8 py-6">
              <Link href="/reserve">Reserve Yours Now</Link>
            </Button>
            <p className="text-sm text-gray-500 mt-4">No payment required today. Limited quantities available.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
