import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-amber-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-700 mb-8">
              Born from personal experience, driven by a mission to help others find relief from inflammation.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">A Personal Journey</h2>
              <p className="text-lg text-gray-700 mb-4">
                TeaHC was founded by a team of individuals who have personally experienced the debilitating effects of
                chronic inflammation and autoimmune conditions like rheumatoid arthritis.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our founder, after years of struggling with inflammatory flare-ups and the side effects of traditional
                medications, began researching alternative solutions that could provide relief without the drawbacks.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                This personal journey led to the discovery of how cannabinoids could effectively target inflammation at
                its source, and the realization that current products on the market weren't optimized for maximum
                bioavailability and effectiveness.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <blockquote className="italic text-lg text-gray-700 mb-4">
                "After years of living with chronic inflammation, I was tired of choosing between ineffective natural
                remedies and pharmaceuticals with concerning side effects. I knew there had to be a better way to
                harness the anti-inflammatory power of cannabinoids."
              </blockquote>
              <p className="font-bold">— TeaHC Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700">
              We're on a mission to revolutionize how people manage inflammation through scientifically-formulated,
              highly bioavailable cannabinoid products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Science-First Approach</h3>
              <p className="text-gray-700">
                We believe in the power of science to transform lives. Every TeaHC product is developed based on
                rigorous research and optimized for maximum effectiveness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Targeted Relief</h3>
              <p className="text-gray-700">
                We create specialized formulations that target specific inflammatory pathways, providing relief where
                you need it most.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Accessibility</h3>
              <p className="text-gray-700">
                We're committed to making advanced anti-inflammatory solutions accessible to everyone suffering from
                chronic inflammation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Behind */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Science Behind TeaHC</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our team includes scientists and medical professionals who understand the complex mechanisms of
                inflammation and the endocannabinoid system.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We've spent years researching how to optimize cannabinoid delivery through advanced nanotechnology,
                resulting in products with up to 10x greater bioavailability than traditional options.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Each formula is carefully crafted to target specific inflammatory pathways, providing relief for
                different types of inflammation and discomfort.
              </p>
              <Link href="/science">
                <Button className="mt-4 bg-amber-500 hover:bg-amber-600">Learn More About Our Science</Button>
              </Link>
            </div>
            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Rheumatoid Arthritis</h3>
                <p className="text-gray-700">
                  Our founder's personal experience with rheumatoid arthritis informed our approach to creating
                  formulations that specifically target joint inflammation.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Chronic Inflammation</h3>
                <p className="text-gray-700">
                  We understand that chronic inflammation can manifest in many ways, which is why we've developed
                  multiple targeted formulations.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Inflammatory Bowel Conditions</h3>
                <p className="text-gray-700">
                  Our team includes members who have struggled with inflammatory bowel conditions, informing our
                  approach to gut-targeted formulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Us in Our Mission</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Experience the difference that scientifically-formulated, highly bioavailable cannabinoid products can make
            in managing inflammation.
          </p>
          <Link href="/products">
            <Button className="bg-white text-amber-500 hover:bg-gray-100">Explore Our Products</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
