import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PreOrderBar } from "@/components/pre-order-bar"

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
                Advanced Anti-Inflammatory Nano-Cannabinoid Technology
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-amber-500">Powerful Anti-Inflammatory</span> Relief That Works Faster
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                TeaHC's clinically dosed formulas target inflammation at its source with 17x higher absorption for
                faster, more effective relief backed by scientific research.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
                  <Link href="/reserve">Reserve Yours Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/science">Explore Our Science</Link>
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

      {/* Anti-Inflammation Focus Section - NEW */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Targeting Inflammation at Its Source</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Chronic inflammation is at the root of many health challenges. TeaHC's formulas work through multiple
              pathways to reduce inflammation and provide targeted relief.
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
              <h3 className="text-xl font-semibold mb-2">Multi-Pathway Approach</h3>
              <p className="text-gray-600">
                Our formulas target multiple inflammatory pathways simultaneously, including COX-2, NF-κB, and TNF-α,
                providing more comprehensive relief than single-target approaches.
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
              <h3 className="text-xl font-semibold mb-2">Endocannabinoid System</h3>
              <p className="text-gray-600">
                Our precisely calibrated cannabinoid ratios work with your body's endocannabinoid system to modulate
                inflammatory responses and restore balance naturally.
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
              <h3 className="text-xl font-semibold mb-2">Enhanced Bioavailability</h3>
              <p className="text-gray-600">
                Our nano-emulsification technology ensures anti-inflammatory compounds reach their targets efficiently,
                providing faster onset and more effective relief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Highlight */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">The Anti-Inflammatory Science Behind TeaHC</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Our proprietary nanotechnology transforms anti-inflammatory cannabinoids into ultra-small particles for
              maximum effectiveness against inflammation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
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
              <h3 className="text-xl font-semibold mb-2">Nano-Emulsification</h3>
              <p className="text-gray-600">
                Our proprietary process breaks down anti-inflammatory cannabinoids into nano-sized particles (20-50
                nanometers) that can easily pass through cell membranes, increasing absorption by up to 17x and
                targeting inflammation directly.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Anti-Inflammatory Cannabinoid Ratios</h3>
              <p className="text-gray-600">
                Each formula contains precisely calibrated ratios of THCV, CBG, and CBD to target specific inflammatory
                pathways and receptors in the endocannabinoid system for optimal anti-inflammatory effects.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
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
              <h3 className="text-xl font-semibold mb-2">Synergistic Anti-Inflammatory Ingredients</h3>
              <p className="text-gray-600">
                We combine nano-cannabinoids with curcumin phytosomes and other potent anti-inflammatory ingredients
                that work together through multiple pathways to enhance overall effectiveness against inflammation.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link href="/science">Learn More About Our Anti-Inflammatory Science</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Anti-Inflammatory Formulations</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Each product is precisely formulated with specific anti-inflammatory compounds to target different
            inflammatory pathways and provide comprehensive relief
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MOVE Product */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="p-6 bg-amber-500 text-white">
                <h3 className="text-2xl font-bold">TeaHC MOVE</h3>
                <p className="text-white/80">Mobility + Inflammation Relief</p>
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
                  <h4 className="font-semibold text-sm mb-1">Anti-Inflammatory Formula:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Curcumin Phytosome (400mg) - COX-2 inhibitor</li>
                    <li>• CBD (25mg) - CB2 receptor modulator</li>
                    <li>• THCV (10mg) - CB2 agonist</li>
                    <li>• CBG (10mg) - Inflammatory cytokine reducer</li>
                    <li>• Boswellia (100mg) - 5-LOX inhibitor</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Targets multiple inflammatory pathways simultaneously to reduce joint and muscle inflammation, enhance
                  mobility, and provide lasting relief without side effects.
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
                <p className="text-white/80">Nighttime Recovery & Inflammation Support</p>
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
                  <h4 className="font-semibold text-sm mb-1">Anti-Inflammatory Formula:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Curcumin Phytosome (300mg) - NF-κB inhibitor</li>
                    <li>• CBD (30mg) - Systemic inflammation reducer</li>
                    <li>• THCV (3mg) - Cellular repair enhancer</li>
                    <li>• CBN (2mg) - Sleep-enhancing anti-inflammatory</li>
                    <li>• Tart Cherry (250mg) - Natural COX inhibitor</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Reduces systemic inflammation during sleep when your body's natural repair processes are most active,
                  supporting overnight recovery and reducing morning stiffness.
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
                <p className="text-white/80">Fast-Acting Anti-Inflammatory Nano Shot</p>
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
                  <h4 className="font-semibold text-sm mb-1">Anti-Inflammatory Formula:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Curcumin Phytosome (200mg) - Rapid-acting</li>
                    <li>• CBD (15mg) - Inflammatory cytokine blocker</li>
                    <li>• THCV (10mg) - Acute inflammation reducer</li>
                    <li>• Gingerol Complex (50mg) - COX-2 inhibitor</li>
                    <li>• Piperine (5mg) - Bioavailability enhancer</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Our fastest-acting formula delivers anti-inflammatory compounds directly to inflamed tissues within
                  minutes, providing on-demand relief when you need it most.
                </p>
                <Button asChild className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/products">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bioavailability Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 bg-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Anti-Inflammatory Bioavailability Comparison</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Standard Anti-Inflammatory CBD:</span>
                  <span className="text-red-600 font-bold">6-19% bioavailability</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">Standard Curcumin:</span>
                  <span className="text-red-600 font-bold">Less than 5% bioavailability</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="font-medium">TeaHC Nano-Cannabinoids:</span>
                  <span className="text-green-600 font-bold">Up to 90% bioavailability</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">TeaHC Curcumin Phytosomes:</span>
                  <span className="text-green-600 font-bold">Up to 85% bioavailability</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">The Anti-Inflammatory Breakthrough</h2>
              <p className="text-lg text-gray-600">
                Standard anti-inflammatory compounds have poor absorption rates, limiting their effectiveness. Our
                nano-emulsification technology increases bioavailability by up to 17x, delivering more active
                anti-inflammatory compounds directly to inflamed tissues.
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
                    <strong>Faster inflammation relief:</strong> 15-30 minutes vs. 1-2 hours with standard formulations
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
                    <strong>More efficient anti-inflammatory action:</strong> Lower doses needed for the same
                    therapeutic effect
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
                    <strong>More consistent inflammation control:</strong> Predictable effects with less variability
                  </span>
                </li>
              </ul>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/science">Explore Our Anti-Inflammatory Science</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Anti-Inflammatory Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I've struggled with joint inflammation for years. TeaHC MOVE reduced my inflammation within 20 minutes,
                and my mobility has improved dramatically. I can finally move without constant discomfort."
              </p>
              <div className="font-medium">Sarah T. - Athlete</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "TeaHC REPAIR has transformed my sleep. The anti-inflammatory effects have reduced my nighttime
                discomfort, and I wake up with significantly less stiffness and inflammation than before."
              </p>
              <div className="font-medium">Michael R. - Fitness Coach</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "The RAPID shot is a game-changer for my inflammation flare-ups. It works within minutes to reduce
                inflammation and discomfort. I keep one in my gym bag for those days when I need fast anti-inflammatory
                relief!"
              </p>
              <div className="font-medium">Jennifer K. - Marathon Runner</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
