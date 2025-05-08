import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogSidebar } from "@/components/blog-sidebar"

export default function BlogPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">TeaHC Research & Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based articles exploring the science of cannabinoids, inflammation, and wellness
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Featured Article */}
              <Card className="col-span-full bg-amber-50">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-amber-100 h-64 md:h-auto rounded-l-lg overflow-hidden relative">
                    <Image
                      src="/blog/cannabinoid-receptors.png"
                      alt="Cannabinoid Receptors in the Human Body"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4">
                      <div className="text-sm text-amber-700 mb-2">Featured Article</div>
                      <CardTitle className="text-2xl mb-2">
                        <Link
                          href="/blog/cannabinoid-receptors-explained"
                          className="hover:text-amber-700 transition-colors"
                        >
                          Cannabinoid Receptors Explained: How They Influence Inflammation
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        A comprehensive look at how the endocannabinoid system interacts with inflammatory pathways
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0 mb-4">
                      <p>
                        The endocannabinoid system plays a crucial role in regulating inflammation through its network
                        of receptors. This article explores the latest research on how cannabinoids interact with CB1
                        and CB2 receptors to potentially modulate inflammatory responses.
                      </p>
                    </CardContent>
                    <CardFooter className="p-0">
                      <Button asChild variant="outline" className="mt-2">
                        <Link href="/blog/cannabinoid-receptors-explained">Read Article</Link>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>

              {/* Regular Articles */}
              <Card>
                <CardHeader>
                  <div className="h-48 bg-gray-100 rounded-t-lg mb-4 overflow-hidden relative">
                    <Image
                      src="/blog/bioavailability-science.png"
                      alt="Bioavailability Science"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">
                    <Link href="/blog/bioavailability-explained" className="hover:text-amber-700 transition-colors">
                      Bioavailability: Why It Matters for Cannabinoids
                    </Link>
                  </CardTitle>
                  <CardDescription>May 12, 2023 • 8 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Understanding bioavailability is key to maximizing the potential benefits of cannabinoids. This
                    article examines the science behind absorption rates and delivery methods.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm" className="mt-2">
                    <Link href="/blog/bioavailability-explained">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-48 bg-gray-100 rounded-t-lg mb-4 overflow-hidden relative">
                    <Image
                      src="/blog/nano-emulsification.jpg"
                      alt="Nano-emulsification Technology"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">
                    <Link
                      href="/blog/nano-emulsification-technology"
                      className="hover:text-amber-700 transition-colors"
                    >
                      The Science of Nano-Emulsification Technology
                    </Link>
                  </CardTitle>
                  <CardDescription>June 3, 2023 • 10 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Nano-emulsification represents a significant advancement in cannabinoid delivery. Learn how this
                    technology works and what the research says about its effectiveness.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm" className="mt-2">
                    <Link href="/blog/nano-emulsification-technology">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-48 bg-gray-100 rounded-t-lg mb-4 overflow-hidden relative">
                    <Image
                      src="/blog/inflammation-pathways.jpg"
                      alt="Inflammation Pathways"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">
                    <Link href="/blog/understanding-inflammation" className="hover:text-amber-700 transition-colors">
                      Understanding Inflammation: Acute vs. Chronic
                    </Link>
                  </CardTitle>
                  <CardDescription>July 18, 2023 • 7 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    Not all inflammation is created equal. This article explores the differences between acute and
                    chronic inflammation and the body's natural response mechanisms.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm" className="mt-2">
                    <Link href="/blog/understanding-inflammation">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-48 bg-gray-100 rounded-t-lg mb-4 overflow-hidden relative">
                    <Image
                      src="/blog/cannabinoid-research.png"
                      alt="Cannabinoid Research"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">
                    <Link href="/blog/cannabinoid-research-review" className="hover:text-amber-700 transition-colors">
                      2023 Research Review: Cannabinoids and Wellness
                    </Link>
                  </CardTitle>
                  <CardDescription>August 5, 2023 • 12 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    A comprehensive review of the latest peer-reviewed research on cannabinoids and their potential role
                    in supporting overall wellness and comfort.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm" className="mt-2">
                    <Link href="/blog/cannabinoid-research-review">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-48 bg-gray-100 rounded-t-lg mb-4 overflow-hidden relative">
                    <Image src="/blog/entourage-effect.png" alt="Entourage Effect" fill className="object-cover" />
                  </div>
                  <CardTitle className="text-xl">
                    <Link href="/blog/entourage-effect-explained" className="hover:text-amber-700 transition-colors">
                      The Entourage Effect: Why Cannabinoid Ratios Matter
                    </Link>
                  </CardTitle>
                  <CardDescription>September 22, 2023 • 9 min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    The entourage effect suggests that cannabinoids work better together than in isolation. Explore the
                    science behind this phenomenon and its implications.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm" className="mt-2">
                    <Link href="/blog/entourage-effect-explained">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Scientific Deep Dives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  href="/blog/thcv-research-review"
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold mb-2">THCV: A Comprehensive Research Review</h3>
                  <p className="text-sm text-gray-600">
                    Examining the current state of research on Tetrahydrocannabivarin
                  </p>
                </Link>

                <Link
                  href="/blog/cbg-potential-benefits"
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold mb-2">CBG: The Mother Cannabinoid</h3>
                  <p className="text-sm text-gray-600">
                    Understanding the precursor to other cannabinoids and its unique properties
                  </p>
                </Link>

                <Link
                  href="/blog/curcumin-cannabinoid-synergy"
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold mb-2">Curcumin and Cannabinoid Synergy</h3>
                  <p className="text-sm text-gray-600">
                    How these compounds may work together to support the body's natural processes
                  </p>
                </Link>

                <Link
                  href="/blog/endocannabinoid-system-overview"
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold mb-2">The Endocannabinoid System: An Overview</h3>
                  <p className="text-sm text-gray-600">
                    A detailed look at this complex cell-signaling system and its role in homeostasis
                  </p>
                </Link>

                <Link
                  href="/blog/cannabinoid-delivery-methods"
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold mb-2">Comparing Cannabinoid Delivery Methods</h3>
                  <p className="text-sm text-gray-600">
                    Analyzing the efficacy of different consumption methods based on scientific data
                  </p>
                </Link>

                <Link
                  href="/blog/cannabinoid-safety-profile"
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-semibold mb-2">Safety Profiles of Minor Cannabinoids</h3>
                  <p className="text-sm text-gray-600">
                    What the research tells us about the safety considerations of cannabinoids
                  </p>
                </Link>
              </div>
            </div>

            <div className="bg-amber-50 p-8 rounded-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Research Updates</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Stay informed about the latest cannabinoid research and product developments
                </p>
              </div>

              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                  <Button type="submit" className="bg-amber-500 hover:bg-amber-600">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-72 mt-8 lg:mt-0">
            <div className="sticky top-20">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
