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
                Advanced Nano-Cannabinoid Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-amber-500">Rediscover Comfort</span> and Freedom of Movement
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                TeaHC's innovative formulas help support your body's natural inflammatory response, offering a new
                approach to comfort and mobility when traditional methods fall short.
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
                <p className="text-amber-800 font-medium mb-1">🔥 Early Access Pricing Ends In:</p>
                <CountdownTimer hours={48} />
                <p className="text-sm text-amber-700 mt-2">
                  Reserve now to lock in our special pre-launch price of $26.99 per box. Regular price $39.99.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">What People Are Saying</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Hear from those who've experienced TeaHC's innovative approach to comfort and mobility.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4 justify-center">
                <div className="flex text-amber-500">
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
              <div className="font-medium text-center">Sarah T. - Runner, 42</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4 justify-center">
                <div className="flex text-amber-500">
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
              <div className="font-medium text-center">Michael R. - Fitness Coach, 38</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4 justify-center">
                <div className="flex text-amber-500">
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
              <div className="font-medium text-center">Jennifer K. - Athlete, 29</div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
              <Link href="/reserve">Experience TeaHC</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Origin Story - REVISED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-amber-100 absolute -top-4 -left-4 w-full h-full rounded-xl"></div>
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

      {/* Real-Life Applications - REVISED */}
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
                  <span className="px-3 py-1 bg-amber-50 rounded-full text-sm text-amber-700">Morning Routine</span>
                  <span className="px-3 py-1 bg-amber-50 rounded-full text-sm text-amber-700">Daily Activities</span>
                  <span className="px-3 py-1 bg-amber-50 rounded-full text-sm text-amber-700">Gentle Exercise</span>
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
                  <span className="px-3 py-1 bg-amber-50 rounded-full text-sm text-amber-700">Post-Activity</span>
                  <span className="px-3 py-1 bg-amber-50 rounded-full text-sm text-amber-700">On-The-Go</span>
                  <span className="px-3 py-1 bg-amber-50 rounded-full text-sm text-amber-700">Quick Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section - REVISED */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">A Different Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              TeaHC works with your body's natural systems to support comfort and mobility
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
              <h3 className="text-xl font-semibold mb-2">Supports Natural Balance</h3>
              <p className="text-gray-600">
                TeaHC works with your endocannabinoid system, which helps regulate many bodily functions including
                inflammatory response, to support your body's natural balance.
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
              <h3 className="text-xl font-semibold mb-2">Enhanced Absorption</h3>
              <p className="text-gray-600">
                Our nano-technology helps improve absorption, allowing the active ingredients to be more readily
                available to your body compared to standard formulations.
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
              <h3 className="text-xl font-semibold mb-2">Gentle on Your System</h3>
              <p className="text-gray-600">
                Unlike some traditional approaches, TeaHC is designed to provide support without the stomach discomfort
                or drowsiness that can come with other options.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
              <Link href="/science">Learn About Our Technology</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Showcase - REVISED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Complete System</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Each product is designed to work together, providing comprehensive support throughout your day
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MOVE Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
              <div className="p-6 bg-amber-500 text-white">
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
                <div className="bg-amber-50 p-3 rounded-lg mb-4">
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
                <Button asChild className="w-full bg-amber-500 hover:bg-amber-600">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>

            {/* REPAIR Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
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
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
              <div className="p-6 bg-amber-700 text-white">
                <h3 className="text-2xl font-bold">TeaHC RAPID</h3>
                <p className="text-white/80">On-Demand Support</p>
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

      {/* Email Capture Section - REVISED */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
              <p className="text-xl">
                Stay informed about our launch, receive wellness tips, and be the first to know about special offers.
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

      {/* Technology Comparison - REVISED */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 bg-amber-50 p-6 rounded-xl">
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
                    <strong>Enhanced absorption:</strong> More of the active ingredients reach their target
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
                    <strong>Quicker onset:</strong> Support begins sooner than with standard formulations
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
                    <strong>Consistent results:</strong> More reliable support with each use
                  </span>
                </li>
              </ul>
              <Button asChild className="mt-4 bg-amber-500 hover:bg-amber-600">
                <Link href="/science">Explore Our Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience TeaHC?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join those who've discovered a new approach to comfort and mobility. Your journey begins here.
          </p>
          <div className="bg-white p-4 rounded-lg inline-block mb-8">
            <p className="text-amber-800 font-medium mb-1">🔥 Early Access Pricing Ends In:</p>
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
