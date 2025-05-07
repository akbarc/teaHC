import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function SciencePage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">The Anti-Inflammatory Science of TeaHC</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the breakthrough anti-inflammatory technology and research behind our innovative products
          </p>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">The Science Behind TeaHC</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                Our proprietary nanotechnology transforms cannabinoids into ultra-small particles for maximum
                effectiveness
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
                  Our proprietary process breaks down cannabinoids into nano-sized particles (20-50 nanometers) that can
                  easily pass through cell membranes, increasing absorption by up to 17x.
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
                <h3 className="text-xl font-semibold mb-2">Targeted Cannabinoid Ratios</h3>
                <p className="text-gray-600">
                  Each formula contains precisely calibrated ratios of THCV, CBG, and CBD to target specific receptors
                  in the endocannabinoid system for optimal therapeutic effects.
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
                <h3 className="text-xl font-semibold mb-2">Synergistic Ingredients</h3>
                <p className="text-gray-600">
                  We combine nano-cannabinoids with curcumin phytosomes and other active ingredients that work together
                  through multiple pathways to enhance overall effectiveness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-amber-50 rounded-xl my-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Understanding Inflammation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                Inflammation is the body's natural response to injury and infection, but when it becomes chronic, it can
                lead to a variety of health challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Acute vs. Chronic Inflammation</h3>
                <p className="text-gray-600 mb-4">
                  While acute inflammation is a necessary healing response, chronic inflammation can persist for months
                  or years, damaging healthy tissues and contributing to discomfort and reduced mobility.
                </p>
                <p className="text-gray-600">
                  TeaHC's formulations target the molecular pathways involved in chronic inflammation, helping to
                  restore balance to your body's inflammatory response without suppressing beneficial acute
                  inflammation.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">The Endocannabinoid System & Inflammation</h3>
                <p className="text-gray-600 mb-4">
                  Your endocannabinoid system (ECS) plays a crucial role in regulating inflammation. Cannabinoid
                  receptors (CB1 and CB2) are found throughout the body, with CB2 receptors particularly abundant in
                  immune cells.
                </p>
                <p className="text-gray-600">
                  Our precisely calibrated cannabinoid formulas interact with these receptors to help modulate
                  inflammatory responses, reducing excessive inflammation without compromising immune function.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Tabs defaultValue="nanotechnology" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="nanotechnology">Nanotechnology</TabsTrigger>
            <TabsTrigger value="cannabinoids">Cannabinoids</TabsTrigger>
            <TabsTrigger value="bioavailability">Bioavailability</TabsTrigger>
            <TabsTrigger value="formulations">Formulations</TabsTrigger>
          </TabsList>

          {/* Nanotechnology Tab */}
          <TabsContent value="nanotechnology" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Proprietary Nanotechnology</h2>
                <p className="text-lg text-gray-600 mb-4">
                  TeaHC's breakthrough nanotechnology platform transforms poorly absorbed compounds like cannabinoids
                  and curcumin into nano-sized particles that dramatically increase bioavailability.
                </p>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Nano-Emulsification</h3>
                    <p>
                      Our proprietary process breaks down active compounds into nano-sized particles (20-50 nanometers)
                      that can easily pass through cell membranes.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Phytosome Technology</h3>
                    <p>
                      We encapsulate plant compounds in phospholipid shells that protect them from degradation and
                      enhance absorption in the digestive system.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Water Solubility</h3>
                    <p>
                      Our technology transforms fat-soluble compounds into water-soluble forms, dramatically improving
                      their absorption and effectiveness.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Up to 17x higher bioavailability</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Faster onset of effects (15-30 minutes)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>More consistent and predictable effects</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lower effective doses needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md mt-8">
              <h3 className="text-2xl font-bold mb-4">The Nano-Emulsification Process</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-amber-800">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Extraction</h4>
                  <p className="text-sm">Pure cannabinoids and plant compounds are extracted using CO2 extraction.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-amber-800">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Nano-Sizing</h4>
                  <p className="text-sm">Compounds are broken down into nano-sized particles (20-50 nanometers).</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-amber-800">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Encapsulation</h4>
                  <p className="text-sm">Nano-particles are encapsulated in phospholipid shells for protection.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-amber-800">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Formulation</h4>
                  <p className="text-sm">Final nano-emulsions are incorporated into our product formulations.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Cannabinoids Tab */}
          <TabsContent value="cannabinoids" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">The Power of Cannabinoids</h2>
                <p className="text-lg text-gray-600 mb-4">
                  TeaHC harnesses the therapeutic potential of specific cannabinoids, carefully selected and dosed for
                  their anti-inflammatory and wellness properties.
                </p>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">THCV (Tetrahydrocannabivarin)</h3>
                    <p>
                      A non-psychoactive cannabinoid with powerful anti-inflammatory properties that helps reduce pain
                      and inflammation without causing intoxication.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">CBG (Cannabigerol)</h3>
                    <p>
                      Known as the "mother cannabinoid," CBG has shown promising anti-inflammatory, neuroprotective, and
                      pain-relieving properties in research studies.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">CBD (Cannabidiol)</h3>
                    <p>
                      The most well-researched non-psychoactive cannabinoid, with extensive evidence supporting its
                      anti-inflammatory, analgesic, and anxiolytic effects.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">How Cannabinoids Work:</h4>
                  <p className="mb-3">
                    Cannabinoids interact with the body's endocannabinoid system (ECS), a complex cell-signaling system
                    that plays a key role in regulating inflammation, pain, mood, and more.
                  </p>
                  <p>
                    By binding to or influencing cannabinoid receptors (CB1 and CB2) and other receptors throughout the
                    body, cannabinoids can help modulate inflammatory responses and support overall wellness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md mt-8">
              <h3 className="text-2xl font-bold mb-4">Cannabinoid Profiles in TeaHC Products</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-3 text-left">Product</th>
                      <th className="p-3 text-left">THCV</th>
                      <th className="p-3 text-left">CBG</th>
                      <th className="p-3 text-left">CBD</th>
                      <th className="p-3 text-left">Primary Benefits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">TeaHC MOVE</td>
                      <td className="p-3">5mg</td>
                      <td className="p-3">5mg</td>
                      <td className="p-3">25mg</td>
                      <td className="p-3">Mobility, Inflammation Relief</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">TeaHC REPAIR</td>
                      <td className="p-3">2mg</td>
                      <td className="p-3">2mg</td>
                      <td className="p-3">30mg</td>
                      <td className="p-3">Recovery, Sleep Support</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">TeaHC RAPID</td>
                      <td className="p-3">10mg</td>
                      <td className="p-3">-</td>
                      <td className="p-3">15mg</td>
                      <td className="p-3">Fast-Acting Relief</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                * All cannabinoids are derived from hemp and contain less than 0.3% THC, making them federally legal
                under the 2018 Farm Bill.
              </p>
            </div>
          </TabsContent>

          {/* Bioavailability Tab */}
          <TabsContent value="bioavailability" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">The Bioavailability Challenge</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Cannabinoids and curcumin are naturally fat-soluble compounds with poor water solubility, resulting in
                  limited absorption when consumed orally. TeaHC's nanotechnology solves this problem.
                </p>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">The Problem</h3>
                    <p>
                      Standard CBD products have bioavailability rates of just 6-19%, meaning most of what you consume
                      never reaches your bloodstream.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Our Solution</h3>
                    <p>
                      TeaHC's nano-emulsification technology increases bioavailability by up to 17x, ensuring more of
                      the active compounds reach your system.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">The Results</h3>
                    <p>
                      Higher bioavailability means faster onset of effects, more consistent results, and more efficient
                      use of active ingredients.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Comparative Bioavailability:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-red-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Standard CBD Oil: 6-19% bioavailability</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-red-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>Standard Curcumin: Less than 5% bioavailability</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>TeaHC Nano-Cannabinoids: Up to 90% bioavailability</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>TeaHC Curcumin Phytosomes: Up to 85% bioavailability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md mt-8">
              <h3 className="text-2xl font-bold mb-4">Bioavailability Comparison</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-center">Onset Time</h4>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-red-800">1-2h</span>
                      </div>
                      <p className="text-sm">Standard</p>
                    </div>
                    <div className="text-2xl font-bold text-gray-300">vs</div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-green-800">15-30m</span>
                      </div>
                      <p className="text-sm">TeaHC</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-center">Duration of Effects</h4>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-red-800">2-4h</span>
                      </div>
                      <p className="text-sm">Standard</p>
                    </div>
                    <div className="text-2xl font-bold text-gray-300">vs</div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-green-800">4-6h</span>
                      </div>
                      <p className="text-sm">TeaHC</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-center">Effective Dose</h4>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-red-800">High</span>
                      </div>
                      <p className="text-sm">Standard</p>
                    </div>
                    <div className="text-2xl font-bold text-gray-300">vs</div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold text-green-800">Low</span>
                      </div>
                      <p className="text-sm">TeaHC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Formulations Tab */}
          <TabsContent value="formulations" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Targeted Formulations</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Each TeaHC product is meticulously formulated with specific cannabinoid ratios and complementary
                  ingredients to address different needs and provide targeted relief.
                </p>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Precision Dosing</h3>
                    <p>
                      Each formula contains precisely measured amounts of active ingredients based on scientific
                      research for optimal effectiveness.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Synergistic Ingredients</h3>
                    <p>
                      We combine nano-cannabinoids with curcumin phytosomes and other active ingredients that work
                      together to enhance the overall effectiveness.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Delicious Delivery</h3>
                    <p>
                      Our formulations are delivered in delicious formats that make taking your daily dose a pleasure,
                      not a chore.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">The Entourage Effect:</h4>
                  <p>
                    Our formulations leverage the "entourage effect," where multiple cannabinoids and plant compounds
                    work together to produce enhanced therapeutic effects compared to isolated compounds alone.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 mt-8">
              {/* MOVE Formula */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg p-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.49.10%20PM-aEjN5XZ7NwJ1qsyalym50EaL3xZ1Kq.png"
                      alt="TeaHC MOVE Formula"
                      width={300}
                      height={300}
                      className="mx-auto object-contain"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-amber-500 mb-4">MOVE Formula</h3>
                    <p className="mb-4">
                      Our daytime formula designed to support mobility and reduce inflammation while keeping you active
                      and alert.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Ingredients:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>5mg THCV (anti-inflammatory)</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>5mg CBG (pain relief)</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>25mg CBD (anti-inflammatory)</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>200mg Curcumin Phytosome</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Decaf Sencha Green Tea</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Supports joint mobility</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Reduces inflammation</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Alleviates discomfort</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Maintains alertness</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>10 satchets per box</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* REPAIR Formula */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg p-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.49.13%20PM-BF6z9V4gy7ffNSpNNJBZGyERd5Hb0s.png"
                      alt="TeaHC REPAIR Formula"
                      width={300}
                      height={300}
                      className="mx-auto object-contain"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">REPAIR Formula</h3>
                    <p className="mb-4">
                      Our nighttime formula designed to support recovery and reduce inflammation while promoting restful
                      sleep.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Ingredients:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>2mg THCV (anti-inflammatory)</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>2mg CBG (pain relief)</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>30mg CBD (relaxation)</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>200mg Curcumin Phytosome</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Honey Vanilla Chamomile</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Supports recovery</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Reduces inflammation</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Promotes restful sleep</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Calming effects</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>10 satchets per box</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RAPID Formula */}
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-lg p-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.41%20PM-NE7LO3yAuw5DJdwWq1guL2j7YN5cjZ.png"
                      alt="TeaHC RAPID Formula"
                      width={300}
                      height={300}
                      className="mx-auto object-contain"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-amber-700 mb-4">RAPID Formula</h3>
                    <p className="mb-4">
                      Our fast-acting liquid formula designed for rapid relief when you need it most, with maximum
                      bioavailability.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Ingredients:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>10mg THCV (fast-acting relief)</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>15mg CBD (anti-inflammatory)</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>200mg Curcumin Phytosome</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Ginger Extract</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Black Pepper Extract</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Ultra-fast onset (10-15 min)</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Targeted pain relief</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Reduces inflammation</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Convenient on-the-go format</span>
                          </li>
                          <li className="flex items-start">
                            <svg
                              className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>2 fl oz (60 mL) bottle</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the TeaHC Difference?</h2>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
            <Link href="/reserve">Reserve Yours Now</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
