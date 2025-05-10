import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { PreOrderBar } from "@/components/pre-order-bar"
import { EmailCapture } from "@/components/email-capture"
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Timer, Users, Activity } from 'lucide-react';
import { PreReservationForm } from '@/components/pre-reservation-form';

export default function DailyLivingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side Form */}
            <Card className="p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Get Back to Doing What You Love</h2>
                  <p className="text-gray-600">573 people have already reserved their TeaHC system</p>
                </div>
                <div className="space-y-4">
                  <PreReservationForm
                    landingPage="daily-activities"
                    buttonText="Reserve Your 50% Discount"
                    successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
                  />
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    No payment required today
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Lock in pre-launch pricing
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    Ships July 2025
                  </p>
                </div>
                <p className="text-center text-sm font-medium text-gray-700">
                  Only 127 spots left in first production run
                </p>
              </div>
            </Card>

            {/* Right Side Content */}
            <div className="relative">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/landing-pages/daily-activities/active-seniors-collage.jpg"
                  alt="Active seniors collage"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-6 py-2 rounded-full">
                50% OFF Pre-Launch Special
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities You'll Enjoy Again Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="p-8 text-center">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image
                  src="/landing-pages/daily-activities/garden-icon.png"
                  alt="Garden icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Garden Without Limits</h3>
              <p className="text-gray-600">
                Stay in the garden longer without discomfort interrupting your hobby
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image
                  src="/landing-pages/daily-activities/family-icon.png"
                  alt="Family icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Keep Up With Grandkids</h3>
              <p className="text-gray-600">
                Play, lift, and engage without worrying about tomorrow's discomfort
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <Image
                  src="/landing-pages/daily-activities/walking-icon.png"
                  alt="Walking icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Move Comfortably All Day</h3>
              <p className="text-gray-600">
                From morning walks to evening activities, stay comfortable throughout
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete System Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Complete Daily Support System</h2>
          </div>
          <div className="relative aspect-[16/9] mb-12">
            <Image
              src="/landing-pages/daily-activities/daily-timeline-infographic.jpg"
              alt="Daily timeline infographic"
              fill
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">MOVE</h3>
              <p className="text-gray-600">Morning mobility support</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">RAPID</h3>
              <p className="text-gray-600">Fast-acting relief when needed</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">REPAIR</h3>
              <p className="text-gray-600">Nighttime recovery support</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-orange-600">Complete System: $59.97 (Reg. $119.97)</p>
            <p className="text-gray-600">Save $60 with pre-launch pricing</p>
          </div>
        </div>
      </section>

      {/* Real People, Real Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative aspect-square">
                <Image
                  src="/landing-pages/daily-activities/laura-testimonial-photo.jpg"
                  alt="Laura testimonial"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <blockquote className="text-3xl font-medium text-gray-900">
                  "When my knees stopped hurting, I could finally lift my daughter again. TeaHC gave me back those precious moments."
                </blockquote>
                <div>
                  <p className="text-xl font-medium">Laura, 57</p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Verified Customer
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <blockquote className="text-lg text-gray-700">
                  "I can work in my garden all morning now"
                </blockquote>
                <p className="text-gray-600 mt-2">James, 62</p>
              </Card>
              <Card className="p-6">
                <blockquote className="text-lg text-gray-700">
                  "Taking daily walks is possible again"
                </blockquote>
                <p className="text-gray-600 mt-2">Margaret, 70</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Conversion Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-orange-50">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Ready to Start Living Without Limits?
                </h2>
                <div className="bg-white p-4 rounded-lg inline-block">
                  <p className="text-sm font-medium text-gray-600">Time remaining for 50% discount:</p>
                  <p className="text-2xl font-bold text-orange-600">23:59:59</p>
                </div>
                <div className="space-y-4">
                  <PreReservationForm
                    landingPage="daily-activities"
                    buttonText="Reserve My Spot"
                    successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
                  />
                </div>
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Secure checkout</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">30-day guarantee</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9]">
              <Image
                src="/landing-pages/daily-activities/process-visualization-steps.jpg"
                alt="Process visualization steps"
                fill
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">Reserve Your Spot</h3>
                <p className="text-gray-600">Enter email to lock in discount</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">Confirmation</h3>
                <p className="text-gray-600">Receive reservation confirmation</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">Production Updates</h3>
                <p className="text-gray-600">Stay informed about shipping timeline</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">Easy Payment</h3>
                <p className="text-gray-600">Pay only when ready to ship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">
              Join 573 Others Who've Reserved TeaHC
            </h2>
            <p className="text-xl">
              Limited spots remaining in our first production run
            </p>
            <Card className="p-8 bg-white">
              <div className="space-y-6">
                <PreReservationForm
                  landingPage="daily-activities"
                  buttonText="Reserve Now"
                  successMessage="Thank you for reserving your TeaHC system! We'll contact you soon with your discount code."
                />
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    30-day risk-free trial: If you're not completely satisfied with your TeaHC system, simply return it within 30 days for a full refund.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 