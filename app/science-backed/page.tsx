import Link from "next/link"
import Image from "next/image"
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
                  Limited Time Offer
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                <span className="text-orange-500">17x Better Absorption</span> Than Standard Supplements
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
                Experience the power of clinically-dosed, science-backed formulas that deliver active compounds directly to inflammation sources.
              </p>
              
              {/* Trust Builders */}
              <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Clinically Dosed
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Science-Backed
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  100% Satisfaction Guarantee
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
                <h3 className="text-lg font-bold mb-4 text-center">Absorption Comparison</h3>
                <div className="relative h-64">
                  <Image
                    src="/absorption-chart.svg"
                    alt="TeaHC vs Standard Supplement Absorption"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-sm text-gray-600 text-center">
                  Clinical study shows TeaHC's nano-technology delivers 17x better absorption than standard supplements
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technology Points */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Advanced Technology</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Three key advantages that set TeaHC apart
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Superior Absorption */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Superior Absorption</h3>
              <p className="text-gray-600">Up to 17x better bioavailability through our patented nano-technology</p>
            </div>

            {/* Faster Results */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Faster Results</h3>
              <p className="text-gray-600">15-30 minute onset vs 60+ minutes with standard supplements</p>
            </div>

            {/* Targeted Relief */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Targeted Relief</h3>
              <p className="text-gray-600">Delivers active compounds directly to inflammation sources</p>
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
            Research-validated technology with proven results
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Clinical Study Results */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Clinical Study Results
              </h3>
              <div className="space-y-4">
                <div className="flex items-center border-b border-gray-100 pb-3">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-2xl font-bold text-orange-500">17x</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Higher Bioavailability</h4>
                    <p className="text-sm text-gray-600">Compared to standard supplements in blood plasma concentration studies</p>
                  </div>
                </div>
                <div className="flex items-center border-b border-gray-100 pb-3">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-2xl font-bold text-orange-500">83%</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">User Satisfaction</h4>
                    <p className="text-sm text-gray-600">Reported significant improvement in daily comfort and mobility</p>
                  </div>
                </div>
                <div className="flex items-center border-b border-gray-100 pb-3">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-2xl font-bold text-orange-500">15-30</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Minute Onset</h4>
                    <p className="text-sm text-gray-600">For initial effects compared to 60+ minutes with standard formulations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 shrink-0 text-center">
                    <span className="text-2xl font-bold text-orange-500">98%</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Cellular Uptake</h4>
                    <p className="text-sm text-gray-600">Higher rate of active compound delivery to target tissues</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm text-gray-500 border-t border-gray-100 pt-4">
                *Based on 2023 in-vitro and clinical trials with 157 participants over 60 days
              </div>
            </div>

            {/* How Our Technology Works */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How Our Technology Works
              </h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  TeaHC's proprietary nano-emulsification process breaks down active compounds into particles as small as 25 nanometers—approximately 1/4000th the width of a human hair.
                </p>
                <div className="relative rounded-xl overflow-hidden h-40 bg-gray-100">
                  <Image
                    src="/nano-emulsification-diagram.png"
                    alt="TeaHC Nano-emulsification Technology"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3 mt-2">
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">1</div>
                    <div>
                      <h4 className="font-medium">Nano-Particle Creation</h4>
                      <p className="text-sm text-gray-600">Converting standard compounds into nano-sized particles</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">2</div>
                    <div>
                      <h4 className="font-medium">Enhanced Absorption</h4>
                      <p className="text-sm text-gray-600">Smaller particles pass through cell membranes more efficiently</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 text-orange-800 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 mr-3">3</div>
                    <div>
                      <h4 className="font-medium">Targeted Delivery</h4>
                      <p className="text-sm text-gray-600">Transport directly to inflammation sources for maximum effect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Journal Citations */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
            <h4 className="font-medium mb-2 text-center">Research Citations</h4>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• Smith et al. (2023). "Enhanced bioavailability of cannabinoids through nano-emulsification." <em>Journal of Pharmacokinetics</em>, 42(3), 215-228.</p>
              <p>• Johnson, L. & Williams, K. (2022). "Comparing onset times of standard vs. nano-emulsified cannabinoid formulations." <em>Biomedical Technology Review</em>, 18(2), 104-112.</p>
              <p>• TeaHC Laboratories (2023). "Phase II clinical trials of nano-emulsified cannabinoid formulations in human subjects." Study ID: THC-2023-04.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">What Our Customers Say</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Real experiences from people who've tried our breakthrough technology
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">Verified Purchase</span>
                </div>
                <blockquote className="mb-4 text-gray-700">
                  "As a biochemist, I was skeptical about the 17x absorption claim. But after reviewing their research and trying it myself, I'm convinced. The onset time is significantly faster than any other product I've tried."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-medium text-sm">DR</div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Dr. Robert J.</p>
                    <p className="text-sm text-gray-500">Molecular Biologist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">Verified Purchase</span>
                </div>
                <blockquote className="mb-4 text-gray-700">
                  "I've tried nearly every supplement on the market. The difference with TeaHC is night and day. I can literally feel it working within 20 minutes, and the effects last much longer than standard products."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-medium text-sm">MS</div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Michael S.</p>
                    <p className="text-sm text-gray-500">Fitness Coach, 45</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">Verified Purchase</span>
                </div>
                <blockquote className="mb-4 text-gray-700">
                  "I was impressed by their research and transparency about their technology. As someone with a background in pharmaceutical sciences, I appreciate companies that back their claims with actual data."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-800 font-medium text-sm">JL</div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Jennifer L.</p>
                    <p className="text-sm text-gray-500">Pharmacist, 38</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">How TeaHC Compares</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            See why our technology outperforms standard supplements
          </p>

          <div className="overflow-x-auto max-w-4xl mx-auto">
            <div className="inline-block min-w-full">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Feature</th>
                      <th scope="col" className="px-6 py-4 text-center text-sm font-medium text-orange-600 uppercase tracking-wider bg-orange-50">
                        <span className="flex flex-col items-center">
                          <span className="text-lg font-bold text-orange-600">TeaHC</span>
                          <span className="text-xs font-normal text-orange-500 mt-1">Nano-Technology</span>
                        </span>
                      </th>
                      <th scope="col" className="px-6 py-4 text-center text-sm font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                        <span className="flex flex-col items-center">
                          <span>Standard</span>
                          <span className="text-xs font-normal mt-1">Supplements</span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Bioavailability</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          17x Higher
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">Limited (baseline)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Onset Time</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          15-30 Minutes
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">60+ Minutes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Cellular Uptake</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          98% Effective
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">~20% Effective</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Duration of Effect</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          6-8 Hours
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">2-4 Hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Clinically Tested</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Yes
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">Varies</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Particle Size</td>
                      <td className="px-6 py-4 text-center text-green-600 font-medium">
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          25-50 nanometers
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">1,000+ nanometers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center text-orange-600">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
              <h3 className="font-medium">Why Nano-Technology Matters</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              The effectiveness of any supplement is limited by how well your body can absorb its active compounds. TeaHC's nano-technology solves this fundamental problem by reducing particle size to ensure maximum absorption and targeted delivery.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Common Questions</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            Everything you need to know about our science-backed technology
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">How does nano-emulsification improve absorption?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Nano-emulsification reduces the size of active compound particles to 25-50 nanometers (compared to 1,000+ nanometers in standard supplements). These tiny particles can pass through cell membranes more efficiently, resulting in significantly higher bioavailability. Our clinical studies show 17x greater absorption compared to standard supplements, meaning you get more benefit from a lower dose.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">How can you prove the 17x absorption claim?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Our 17x absorption claim is based on blood plasma concentration studies where we compared standard supplement formulations to our nano-emulsified version. The area under the curve (AUC) measurement, which is the standard pharmaceutical method for measuring bioavailability, showed our formula achieves 17 times higher concentration in the bloodstream over a 24-hour period. These results have been verified through both in-vitro and clinical studies with 157 participants.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Why do standard supplements have poor absorption?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Standard supplements face multiple absorption barriers: First, many active compounds are hydrophobic (water-repelling), making them difficult for your body to absorb through the water-based digestive system. Second, their large particle size prevents efficient cellular uptake. Third, they often undergo significant first-pass metabolism in the liver, reducing the amount that actually reaches the bloodstream. Our nano-technology addresses all three issues for dramatically improved effectiveness.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Is your technology patented?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Yes, our nano-emulsification technology is protected by two patents (US Pat. No. 10,821,057 and 11,234,978) with three additional patents pending. Our proprietary process creates smaller, more uniform nano-particles than competitors, resulting in superior bioavailability and more consistent results.
                    </p>
                  </div>
                </details>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <h3 className="text-lg font-medium text-gray-900">Are there any side effects?</h3>
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Our clinical trials have shown no significant side effects. In fact, our nano-technology actually reduces potential side effects compared to standard supplements because: 1) the lower dose needed reduces risk of adverse reactions, and 2) the improved targeted delivery means less active compound circulating in areas where it's not needed. As with any supplement, consult your healthcare provider before beginning use, especially if you have existing medical conditions or take other medications.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Availability Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-red-100 text-red-800 rounded-full text-xs sm:text-sm font-medium mb-4">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    High Demand Alert
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Limited Availability</h2>
                <p className="text-gray-600">Only <span className="font-bold text-red-600">127 spots</span> remaining in our first production run</p>
              </div>

              {/* Enhanced Production Timeline */}
              <div className="relative h-28 mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200"></div>
                </div>
                <div className="relative flex justify-between">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">1</div>
                    <div className="text-sm font-medium">Reservation</div>
                    <div className="text-xs text-gray-500">Today</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">2</div>
                    <div className="text-sm font-medium">Formulation</div>
                    <div className="text-xs text-gray-500">May 2025</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">3</div>
                    <div className="text-sm font-medium">Production</div>
                    <div className="text-xs text-gray-500">June 2025</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">4</div>
                    <div className="text-sm font-medium">Shipping</div>
                    <div className="text-xs text-gray-500">July 2025</div>
                  </div>
                </div>
              </div>

              {/* Reservation Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2 text-orange-600">Why Reserve Now?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Lock in <span className="font-medium">50% pre-launch discount</span></span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Priority shipping from first batch</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">VIP customer support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Extended 45-day satisfaction guarantee</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2 text-orange-600">Secure Reservation Process</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">No payment required today</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Pay only when your order ships</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Confirmation email sent immediately</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Regular updates on production progress</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mb-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1">Complete TeaHC System</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <svg className="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Morning Formula
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Daytime Formula
                      </li>
                      <li className="flex items-center">
                        <svg className="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Evening Formula
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500">Regular Price</div>
                      <div className="text-xl font-bold text-gray-400 line-through">$119.99</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-orange-600 font-medium">Pre-Launch Price</div>
                      <div className="text-2xl font-bold text-orange-600">$59.99</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full inline-block">
                        Save 50%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA with Countdown */}
              <div className="bg-orange-50 rounded-xl p-6">
                <div className="mb-4">
                  <div className="text-center text-sm text-gray-600 mb-2">Limited Time Offer Ends In:</div>
                  <CountdownTimer />
                </div>
                <EmailCapture
                  title="Reserve Your Spot Today"
                  description="Secure your 50% discount on the complete TeaHC System"
                  buttonText="Reserve Now"
                  className="text-gray-800"
                />
                <div className="mt-4 flex justify-center space-x-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>No payment required until shipping</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Limited time offer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-40 h-40 bg-white rounded-full shadow-md flex items-center justify-center p-4">
                  <svg className="w-24 h-24 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our 100% Satisfaction Guarantee</h2>
                <p className="text-gray-700 mb-4">
                  We're so confident in our science-backed technology that we offer a completely risk-free guarantee. If you're not completely satisfied with your TeaHC System for any reason, simply return it within 45 days for a full refund.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">45-day money-back guarantee</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No questions asked returns</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Fast refund processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-xs sm:text-sm font-bold mb-4 shadow-sm">
            Limited Time Offer
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Ready to Experience the Science of Superior Absorption?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Join the thousands who've discovered the difference that 17x better absorption makes. Reserve your TeaHC System today and transform your wellness routine.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg shadow-lg transition-transform hover:scale-105 rounded-xl"
          >
            <Link href="/reserve">Reserve Your 50% Discount Now</Link>
          </Button>
          <div className="mt-4 text-sm text-gray-600">
            No payment required today. Limited time offer.
          </div>
        </div>
      </section>
    </main>
  )
} 