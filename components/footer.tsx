import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teaHC%20logo-4hHL176JwozQnqH5nLd2P3e7Yl8zqi.png"
                alt="TeaHC Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-600">
              Revolutionary nano-cannabinoid products for targeted relief and exceptional results.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-amber-500">
                  TeaHC MOVE
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-amber-500">
                  TeaHC REPAIR
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-amber-500">
                  TeaHC RAPID
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-amber-500">
                  Complete Bundle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/science" className="text-gray-600 hover:text-amber-500">
                  Our Science
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-gray-600 hover:text-amber-500">
                  Nanotechnology
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-gray-600 hover:text-amber-500">
                  Cannabinoids
                </Link>
              </li>
              <li>
                <Link href="/science" className="text-gray-600 hover:text-amber-500">
                  Formulations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-amber-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-amber-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-amber-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} TeaHC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
