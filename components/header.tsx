"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teaHC%20logo-4hHL176JwozQnqH5nLd2P3e7Yl8zqi.png"
              alt="TeaHC Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-500 font-medium">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-amber-500 font-medium">
              Products
            </Link>
            <Link href="/science" className="text-gray-700 hover:text-amber-500 font-medium">
              Science
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-500 font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-500 font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <Button asChild className="hidden md:inline-flex bg-amber-500 hover:bg-amber-600">
            <Link href="/reserve">Reserve Now</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-amber-500 font-medium px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-amber-500 font-medium px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/science"
                className="text-gray-700 hover:text-amber-500 font-medium px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Science
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-amber-500 font-medium px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-amber-500 font-medium px-4 py-2 hover:bg-gray-50 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="mx-4 bg-amber-500 hover:bg-amber-600">
                <Link href="/reserve" onClick={() => setIsMenuOpen(false)}>
                  Reserve Now
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
