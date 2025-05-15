"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Search, ShoppingCart, ChevronDown, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b bg-white/95 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-white/60"
          : "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/teahc-logo.png" alt="TeaHC Logo" width={120} height={40} className="h-auto" priority />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          <Link
            href="/"
            className="px-3 py-2 rounded-md transition-colors hover:bg-amber-50 hover:text-amber-700"
          >
            Home
          </Link>

          <Link
            href="/rapid"
            className="px-3 py-2 rounded-md transition-colors hover:bg-amber-50 hover:text-amber-700"
          >
            Rapid
          </Link>

          <Link
            href="/products"
            className="px-3 py-2 rounded-md transition-colors hover:bg-amber-50 hover:text-amber-700"
          >
            Products
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center px-3 py-2 rounded-md transition-colors hover:bg-amber-50 hover:text-amber-700">
                Science <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuLabel>Science Topics</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/science" className="w-full cursor-pointer">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog/cannabinoid-receptors-explained" className="w-full cursor-pointer">
                  Cannabinoid Receptors
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog/bioavailability-explained" className="w-full cursor-pointer">
                  Bioavailability
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog/nano-emulsification-technology" className="w-full cursor-pointer">
                  Nano-Emulsification
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center px-3 py-2 rounded-md transition-colors hover:bg-amber-50 hover:text-amber-700">
                Blog <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuLabel>Blog Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/blog" className="w-full cursor-pointer">
                  All Articles
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog?category=science" className="w-full cursor-pointer">
                  Science
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog?category=wellness" className="w-full cursor-pointer">
                  Wellness
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog?category=research" className="w-full cursor-pointer">
                  Research
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="px-3 py-2 rounded-md transition-colors hover:bg-amber-50 hover:text-amber-700">
            About
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 rounded-md transition-colors hover:bg-amber-50 hover:text-amber-700"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-3">
          <button
            className="hidden md:flex items-center justify-center h-9 w-9 rounded-full text-slate-500 hover:bg-slate-100 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            className="hidden md:flex items-center justify-center h-9 w-9 rounded-full text-slate-500 hover:bg-slate-100 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>

          <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 shadow-sm">
            <Link href="/reserve" className="font-medium">
              Reserve Now
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-md text-slate-500 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/rapid"
              className="block px-3 py-2 rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rapid
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <div className="px-3 py-2 font-medium">Science</div>
            <Link
              href="/science"
              className="block px-6 py-2 text-sm rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Overview
            </Link>
            <Link
              href="/blog/cannabinoid-receptors-explained"
              className="block px-6 py-2 text-sm rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cannabinoid Receptors
            </Link>
            <Link
              href="/blog/bioavailability-explained"
              className="block px-6 py-2 text-sm rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bioavailability
            </Link>
            <div className="px-3 py-2 font-medium">Blog</div>
            <Link
              href="/blog"
              className="block px-6 py-2 text-sm rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Articles
            </Link>
            <Link
              href="/blog?category=science"
              className="block px-6 py-2 text-sm rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Science
            </Link>
            <Link
              href="/blog?category=wellness"
              className="block px-6 py-2 text-sm rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wellness
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md transition-colors hover:bg-amber-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 flex items-center space-x-2">
              <button className="flex items-center justify-center h-10 w-10 rounded-md text-slate-500 hover:bg-slate-100 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="flex items-center justify-center h-10 w-10 rounded-md text-slate-500 hover:bg-slate-100 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
