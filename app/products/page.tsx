import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function ProductsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scientifically formulated nano-cannabinoid products with enhanced bioavailability for targeted relief
          </p>
        </div>

        <Tabs defaultValue="move" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="move">MOVE</TabsTrigger>
            <TabsTrigger value="repair">REPAIR</TabsTrigger>
            <TabsTrigger value="rapid">RAPID</TabsTrigger>
          </TabsList>

          {/* MOVE Product Tab */}
          <TabsContent value="move" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.36%20PM-XBaNZDmhr6evYOpKU6cIueASqrlgp4.png"
                  alt="TeaHC MOVE - Mobility and Inflammation Relief Formula"
                  width={400}
                  height={400}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  Daytime Formula
                </div>
                <h2 className="text-3xl font-bold text-amber-500">TeaHC MOVE</h2>
                <h3 className="text-xl font-medium">Mobility + Inflammation Relief</h3>
                <p className="text-gray-600">
                  Our daytime formula designed to keep you active and moving with ease. Combines the power of
                  nano-cannabinoids with curcumin phytosomes for enhanced mobility and reduced inflammation.
                </p>

                <div className="border-t border-b py-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Format:</span>
                    <span>Decaf Sencha Green Tea</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Quantity:</span>
                    <span>10 satchets (5.5g each)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Suggested Use:</span>
                    <span>Morning or Afternoon</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Sugar-Free</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Gluten-Free</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Vegan</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Non-GMO</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Lab Tested</span>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-center p-2 bg-white shadow rounded">
                    <span>Single Purchase</span>
                    <div>
                      <span className="font-bold text-lg">$19.99</span>
                      <span className="text-gray-500 text-sm line-through ml-2">$39.99</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-orange-50 shadow rounded border border-orange-200">
                    <span className="font-medium">Complete System</span>
                    <div>
                      <span className="font-bold text-lg">$47.98</span>
                      <span className="text-gray-500 text-sm line-through ml-2">$59.97</span>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full bg-amber-500 hover:bg-amber-600">
                  <Link href="/reserve">Reserve Now</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Complete Formula</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-lg text-amber-500 mb-3">Active Ingredients (Per Sachet – 5.5g)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-amber-50">
                        <th className="p-3 text-left">Ingredient</th>
                        <th className="p-3 text-left">Dose</th>
                        <th className="p-3 text-left">Function / Mechanism</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Curcumin Phytosome (Meriva®)</td>
                        <td className="p-3">400 mg</td>
                        <td className="p-3">Highly bioavailable turmeric; NF-κB, COX-2, TNF-α inhibition</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">CBD (nano, hemp-derived)</td>
                        <td className="p-3">25 mg</td>
                        <td className="p-3">Anti-inflammatory via CB2/TRPV1; reduces joint discomfort</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">THCV (nano, hemp-derived)</td>
                        <td className="p-3">10 mg</td>
                        <td className="p-3">Non-intoxicating CB2 agonist; supports mobility, reduces pain</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">CBG (Cannabigerol)</td>
                        <td className="p-3">10 mg</td>
                        <td className="p-3">COX-2 inhibition; enhances cannabinoid synergy</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Boswellia Serrata Extract (65% AKBA)</td>
                        <td className="p-3">100 mg</td>
                        <td className="p-3">5-LOX inhibition; traditional joint relief agent</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Gingerols (from Ginger Root)</td>
                        <td className="p-3">30 mg</td>
                        <td className="p-3">COX-2 inhibition; enhances circulation and absorption</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-amber-500 mb-3">Non-Active (Other) Ingredients</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-amber-50">
                        <th className="p-3 text-left">Ingredient</th>
                        <th className="p-3 text-left">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Decaf Sencha Green Tea Powder</td>
                        <td className="p-3">Tea base and polyphenol source (gentle energy, antioxidants)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Lemon Peel Extract</td>
                        <td className="p-3">Citrus bioflavonoids and flavor</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Ground Ginger Root</td>
                        <td className="p-3">Natural anti-inflammatory + flavor booster</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Natural Citrus Flavor</td>
                        <td className="p-3">Enhances taste; clean-label compliant</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Monk Fruit Extract</td>
                        <td className="p-3">Natural zero-calorie sweetener (no blood sugar impact)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Citric Acid</td>
                        <td className="p-3">pH control, preservation</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Tapioca Solids</td>
                        <td className="p-3">Carrier and texture stabilizer (non-GMO, gluten-free)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Silicon Dioxide</td>
                        <td className="p-3">Anti-caking agent for powder flow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">The Science Behind MOVE</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-4">
                    TeaHC MOVE combines specific cannabinoids in precise ratios to target inflammation and support
                    mobility. Our proprietary nanotechnology breaks down these compounds into particles 20-50 nanometers
                    in size, dramatically increasing their bioavailability.
                  </p>
                  <p className="text-gray-600">
                    THCV and CBG work together to modulate both CB1 and CB2 receptors in the endocannabinoid system,
                    helping to regulate inflammatory responses without psychoactive effects. The addition of curcumin
                    phytosomes provides complementary anti-inflammatory action through different pathways, creating a
                    synergistic effect.
                  </p>
                </div>
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
                      <span>Supports joint mobility and flexibility</span>
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
                      <span>Reduces inflammation through multiple pathways</span>
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
                      <span>Fast onset (15-30 minutes) due to nano-emulsification</span>
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
                      <span>Non-psychoactive, won't impair cognitive function</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* REPAIR Product Tab */}
          <TabsContent value="repair" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.29%20PM-rWPKTVqK3SvROr879dEKKfD6xqCLrB.png"
                  alt="TeaHC REPAIR - Nighttime Recovery and Inflammation Support Formula"
                  width={400}
                  height={400}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Nighttime Formula
                </div>
                <h2 className="text-3xl font-bold text-blue-800">TeaHC REPAIR</h2>
                <h3 className="text-xl font-medium">Nighttime Recovery & Inflammation Support</h3>
                <p className="text-gray-600">
                  Our evening formula designed to support recovery and reduce inflammation while you sleep. The perfect
                  way to end your day and wake up refreshed and ready for tomorrow.
                </p>

                <div className="border-t border-b py-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Format:</span>
                    <span>Honey Vanilla Chamomile</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Quantity:</span>
                    <span>10 satchets (5.6g each)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Suggested Use:</span>
                    <span>Evening or Before Bed</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Sugar-Free</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Vegan</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Non-GMO</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Lab Tested</span>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-center p-2 bg-white shadow rounded">
                    <span>Single Purchase</span>
                    <div>
                      <span className="font-bold text-lg">$19.99</span>
                      <span className="text-gray-500 text-sm line-through ml-2">$39.99</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-orange-50 shadow rounded border border-orange-200">
                    <span className="font-medium">Complete System</span>
                    <div>
                      <span className="font-bold text-lg">$47.98</span>
                      <span className="text-gray-500 text-sm line-through ml-2">$59.97</span>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full bg-blue-800 hover:bg-blue-900">
                  <Link href="/reserve">Reserve Now</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Complete Formula</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-lg text-blue-800 mb-3">Active Ingredients (Per Sachet – 5.6g)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="p-3 text-left">Ingredient</th>
                        <th className="p-3 text-left">Dose</th>
                        <th className="p-3 text-left">Function / Mechanism</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Curcumin Phytosome (Meriva®)</td>
                        <td className="p-3">300 mg</td>
                        <td className="p-3">
                          Absorbable turmeric extract; reduces systemic inflammation affecting sleep
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">CBD (nano)</td>
                        <td className="p-3">30 mg</td>
                        <td className="p-3">Helps relax CNS, supports parasympathetic recovery</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">THCV (nano)</td>
                        <td className="p-3">3 mg</td>
                        <td className="p-3">Cellular repair, inflammation reduction without sedation</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">CBN</td>
                        <td className="p-3">2 mg</td>
                        <td className="p-3">Mild sedative; modulates sleep via CB1/CB2</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">L-Theanine</td>
                        <td className="p-3">100 mg</td>
                        <td className="p-3">Alpha wave enhancer; reduces stress, balances mood</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Tart Cherry Extract (50:1)</td>
                        <td className="p-3">250 mg</td>
                        <td className="p-3">Natural melatonin, antioxidant-rich; improves sleep quality</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Magnesium (as Glycinate)</td>
                        <td className="p-3">75 mg</td>
                        <td className="p-3">Muscle relaxant; supports deep sleep via GABA pathway</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-blue-800 mb-3">Non-Active (Other) Ingredients</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="p-3 text-left">Ingredient</th>
                        <th className="p-3 text-left">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Whole Chamomile Powder</td>
                        <td className="p-3">Sleep-enhancing botanical base (apigenin)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Vanilla Bean</td>
                        <td className="p-3">Natural calming flavor</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Honey Granules (non-GMO)</td>
                        <td className="p-3">Comforting flavor + mouthfeel; low glycemic</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Natural Vanilla-Honey Flavor</td>
                        <td className="p-3">Flavor enhancement (no synthetic flavorings)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Monk Fruit Extract</td>
                        <td className="p-3">Natural sweetener (zero glycemic)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Tapioca Solids</td>
                        <td className="p-3">Powder texture and flow aid</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Citric Acid</td>
                        <td className="p-3">Natural preservative and flavor balancer</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Silicon Dioxide</td>
                        <td className="p-3">Anti-caking agent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">The Science Behind REPAIR</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-4">
                    TeaHC REPAIR is formulated with a higher ratio of CBD to support relaxation and recovery during
                    sleep. During sleep, the body naturally enters repair mode, and our formula is designed to enhance
                    this process.
                  </p>
                  <p className="text-gray-600">
                    Research shows that CBD interacts with serotonin receptors and can help regulate sleep cycles. The
                    combination with lower doses of THCV and the addition of CBN provides gentle anti-inflammatory
                    support and promotes restful sleep. Our nano-emulsification technology ensures these compounds are
                    readily available to your body throughout the night.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-800 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Supports natural recovery processes during sleep</span>
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
                      <span>Reduces nighttime inflammation and discomfort</span>
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
                      <span>Promotes relaxation without morning grogginess</span>
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
                      <span>Sustained release for all-night support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* RAPID Product Tab */}
          <TabsContent value="rapid" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.41%20PM-NE7LO3yAuw5DJdwWq1guL2j7YN5cjZ.png"
                  alt="TeaHC RAPID - Fast-Acting Anti-Inflammatory Nano Shot"
                  width={400}
                  height={400}
                  className="mx-auto object-contain"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  Fast-Acting Formula
                </div>
                <h2 className="text-3xl font-bold text-amber-700">TeaHC RAPID</h2>
                <h3 className="text-xl font-medium">Fast-Acting Anti-Inflammatory Nano Shot</h3>
                <p className="text-gray-600">
                  Our concentrated liquid formula designed for rapid relief when you need it most. The perfect solution
                  for on-the-go relief with maximum bioavailability.
                </p>

                <div className="border-t border-b py-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Format:</span>
                    <span>Zesty Black Pepper Extract</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Quantity:</span>
                    <span>10 2oz nano shots</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Suggested Use:</span>
                    <span>As Needed for Fast Relief</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Sugar-Free</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Gluten-Free</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Vegan</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Non-GMO</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Lab Tested</span>
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between items-center p-2 bg-white shadow rounded">
                    <span>Single Purchase</span>
                    <div>
                      <span className="font-bold text-lg">$19.99</span>
                      <span className="text-gray-500 text-sm line-through ml-2">$39.99</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-orange-50 shadow rounded border border-orange-200">
                    <span className="font-medium">Complete System</span>
                    <div>
                      <span className="font-bold text-lg">$47.98</span>
                      <span className="text-gray-500 text-sm line-through ml-2">$59.97</span>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full bg-amber-700 hover:bg-amber-800">
                  <Link href="/reserve">Reserve Now</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Complete Formula</h3>

              <div className="mb-6">
                <h4 className="font-semibold text-lg text-amber-700 mb-3">Active Ingredients (Per Shot – 2 fl oz)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-amber-50">
                        <th className="p-3 text-left">Ingredient</th>
                        <th className="p-3 text-left">Dose</th>
                        <th className="p-3 text-left">Function / Mechanism</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Curcumin Phytosome (Meriva®)</td>
                        <td className="p-3">200 mg</td>
                        <td className="p-3">Fast-acting anti-inflammatory for acute joint or muscle flare-ups</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">CBD (nano)</td>
                        <td className="p-3">15 mg</td>
                        <td className="p-3">Rapid absorption; targets inflammatory cytokines and pain pathways</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">THCV (nano)</td>
                        <td className="p-3">10 mg</td>
                        <td className="p-3">Energizing, non-sedating relief agent</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Gingerol Complex</td>
                        <td className="p-3">50 mg</td>
                        <td className="p-3">Activates circulation, desensitizes TRPV1 pain receptors</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Piperine (Black Pepper Extract)</td>
                        <td className="p-3">5 mg</td>
                        <td className="p-3">
                          Enhances curcumin and cannabinoid absorption via inhibition of liver metabolism
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Electrolyte Blend (Mg, K, Na)</td>
                        <td className="p-3">50 mg</td>
                        <td className="p-3">Replenishes minerals lost during inflammation, exercise, or stress</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg text-amber-700 mb-3">Non-Active (Other) Ingredients</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-amber-50">
                        <th className="p-3 text-left">Ingredient</th>
                        <th className="p-3 text-left">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Purified Water</td>
                        <td className="p-3">Liquid base</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Chai Natural Flavor</td>
                        <td className="p-3">Spiced flavor profile (cinnamon, cardamom, clove)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Lemon Juice Concentrate</td>
                        <td className="p-3">Natural acidity and flavor</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Monk Fruit Sweetener</td>
                        <td className="p-3">Sugar-free sweetness (natural, low-calorie)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Coconut MCT Oil</td>
                        <td className="p-3">Carrier for nano cannabinoids; enhances absorption</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Citric Acid</td>
                        <td className="p-3">Preservative and pH control</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Xanthan Gum</td>
                        <td className="p-3">Natural thickener and stabilizer</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-3 font-medium">Potassium Sorbate</td>
                        <td className="p-3">Shelf-life stabilizer (minimal, FDA-safe levels)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Beta-Carotene</td>
                        <td className="p-3">Natural colorant (vitamin A precursor)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">The Science Behind RAPID</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-4">
                    TeaHC RAPID utilizes our most advanced nano-emulsification technology to create ultra-small
                    particles (15-25 nanometers) that are absorbed directly through the oral mucosa and digestive tract
                    for immediate action.
                  </p>
                  <p className="text-gray-600">
                    The liquid format allows for maximum surface area contact and rapid absorption. We've included
                    piperine (black pepper extract) which has been shown in clinical studies to enhance the
                    bioavailability of curcumin by up to 2000%. The addition of gingerol from ginger extract provides
                    complementary anti-inflammatory action through COX-2 inhibition.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-amber-700 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ultra-fast onset (10-15 minutes)</span>
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
                      <span>Highest bioavailability in our product line</span>
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
                      <span>Multi-pathway inflammation targeting</span>
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
                      <span>Convenient portable format for on-the-go relief</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bundle Section */}
        <div className="mt-20 max-w-5xl mx-auto bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%203.09.15%20PM-6h3WfOWBo8AUSJ6cxYXYpKhiTlFrCg.png"
                alt="TeaHC Complete Bundle - All Three Products"
                width={500}
                height={400}
                className="mx-auto object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Complete Bundle</h2>
              <p className="text-gray-600">
                Experience the full TeaHC system with our complete bundle. Get all three products at a special bundle
                price and discover the perfect combination for your wellness routine.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Scientific Synergy:</h4>
                <p className="text-gray-600 mb-2">
                  Our products are designed to work together as a complete system. Research shows that addressing
                  inflammation through multiple pathways and at different times of day provides more comprehensive
                  relief than single-product approaches.
                </p>
                <p className="text-gray-600">
                  The bundle combines daytime support (MOVE), nighttime recovery (REPAIR), and on-demand relief (RAPID)
                  for a complete 24-hour anti-inflammatory solution.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>TeaHC MOVE (10 satchets)</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>TeaHC REPAIR (10 satchets)</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>TeaHC RAPID (10 2oz nano shots)</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>$47.98 Bundle Price (Save $11.99)</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full">
                <Link href="/reserve">Reserve Bundle</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
