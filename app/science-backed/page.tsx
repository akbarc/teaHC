import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PreOrderBar } from "@/components/pre-order-bar"
import { EmailCapture } from "@/components/email-capture"
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Beaker, Microscope, LineChart } from 'lucide-react';
import { PreReservationForm } from '@/components/pre-reservation-form';

export default function ScienceBackedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-6">
              <span className="text-sm font-medium text-gray-600">Clinically Dosed</span>
              <span className="text-sm font-medium text-gray-600">•</span>
              <span className="text-sm font-medium text-gray-600">Science-Backed</span>
              <span className="text-sm font-medium text-gray-600">•</span>
              <span className="text-sm font-medium text-gray-600">Lab Verified</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                17x Better Absorption Than Standard Supplements
              </h1>
              <p className="text-xl text-gray-600">
                Our breakthrough nano-technology delivers superior bioavailability for more effective inflammation control
              </p>
            </div>
            <Card className="p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Reserve Your Scientific Advantage</h3>
                  <div className="mt-2 inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    50% OFF First 700 Customers
                  </div>
                </div>
                <PreReservationForm
                  landingPage="science-backed"
                  buttonText="Reserve Now - 50% Off"
                  successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
                />
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    No payment until shipping
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    30-day guarantee
                  </p>
                </div>
                <p className="text-center text-sm font-medium text-gray-700">
                  573 scientists, doctors, and health enthusiasts have already reserved
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* The Science of Superior Absorption */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Why Most Supplements Fail</h3>
              <p className="text-gray-600 mb-4">
                90% of standard supplements are wasted
              </p>
              <div className="relative aspect-video">
                <Image
                  src="/landing-pages/science-backed/poor-absorption-diagram.jpg"
                  alt="Poor absorption diagram"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Nano-Emulsification Technology</h3>
              <p className="text-gray-600 mb-4">
                20-50 nanometer particles
              </p>
              <div className="relative aspect-video">
                <Image
                  src="/landing-pages/science-backed/nano-particle-diagram.jpg"
                  alt="Nano-particle diagram"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Maximum Bioavailability</h3>
              <p className="text-gray-600 mb-4">
                17x better absorption
              </p>
              <div className="relative aspect-video">
                <Image
                  src="/landing-pages/science-backed/absorption-pathway-illustration.jpg"
                  alt="Absorption pathway illustration"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Clinical Evidence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">Up to 17x</h3>
                <p className="text-gray-600">Higher bioavailability</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">15-30 min</h3>
                <p className="text-gray-600">vs 60+ minutes</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">Multi-pathway</h3>
                <p className="text-gray-600">Inflammation targeting</p>
              </div>
            </div>
            <div className="relative aspect-[16/9]">
              <Image
                src="/landing-pages/science-backed/absorption-rate-graph.jpg"
                alt="Absorption rate graph"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Based on comparative bioavailability studies of nano-emulsified compounds versus standard formulations
            </p>
          </div>
        </div>
      </section>

      {/* Precision Formulation Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-6">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image
                  src="/landing-pages/science-backed/molecular-pathway-icon.png"
                  alt="Molecular pathway icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Multi-Pathway Approach</h3>
              <p className="text-gray-600 text-center">
                Targets inflammation through multiple biological pathways
              </p>
            </Card>
            <Card className="p-6">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image
                  src="/landing-pages/science-backed/interlocking-molecules-icon.png"
                  alt="Interlocking molecules icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Synergistic Compounds</h3>
              <p className="text-gray-600 text-center">
                Ingredients selected for enhanced effectiveness
              </p>
            </Card>
            <Card className="p-6">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image
                  src="/landing-pages/science-backed/measurement-beaker-icon.png"
                  alt="Measurement beaker icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Clinical Dosing</h3>
              <p className="text-gray-600 text-center">
                Precise amounts based on scientific research
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Expert Validation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square">
                  <Image
                    src="/landing-pages/science-backed/dr-harrison-portrait.jpg"
                    alt="Dr. James Harrison"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <blockquote className="text-2xl font-medium text-gray-900">
                    "The nano-emulsification technology used in TeaHC products represents a significant advancement in bioavailability. By dramatically reducing particle size, these formulations can achieve much higher absorption rates than conventional supplements."
                  </blockquote>
                  <div>
                    <p className="text-xl font-medium">Dr. James Harrison</p>
                    <p className="text-gray-600">Pharmaceutical Sciences</p>
                  </div>
                  <div className="flex space-x-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/landing-pages/science-backed/research-institution-1.png"
                        alt="Research institution logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="relative w-12 h-12">
                      <Image
                        src="/landing-pages/science-backed/research-institution-2.png"
                        alt="Research institution logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparative Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Standard Supplements</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Slow onset (60+ minutes)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Poor absorption (10%)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Inconsistent results
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Higher doses needed
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">TeaHC Nano-Technology</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Fast onset (15-30 minutes)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Superior absorption (up to 90%)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Reliable results
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Efficient dosing
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Reservation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Experience the Science of Superior Relief
              </h2>
              <p className="text-xl text-gray-600">
                Join a growing community of science-minded individuals choosing TeaHC
              </p>
            </div>
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Reserve Your Clinically-Advanced Formula</h3>
                  <p className="text-2xl font-bold text-orange-600 mt-2">$19.99 pre-launch (Reg. $39.99)</p>
                </div>
                <PreReservationForm
                  landingPage="science-backed"
                  buttonText="Reserve Now"
                  successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
                />
                <p className="text-sm text-gray-600">
                  Try our scientifically formulated system risk-free for 30 days
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Limited Production - Reserve Today
            </h2>
            <p className="text-xl">
              First batch limited to 700 units
            </p>
            <Card className="p-8 bg-white">
              <div className="space-y-6">
                <PreReservationForm
                  landingPage="science-backed"
                  buttonText="Reserve Now"
                  successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
                />
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">FDA registered</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">GMP certified</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Third-party tested</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 