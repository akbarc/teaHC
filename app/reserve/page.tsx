import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"

export default function ReservePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Reserve Your TeaHC Products</h1>
          <p className="text-lg text-gray-600 mb-6">
            Be among the first to experience our revolutionary anti-inflammatory formulas.
          </p>

          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-8 max-w-md mx-auto">
            <p className="text-amber-800 font-medium mb-1">🔥 Flash Sale: Early Access Pricing Ends In:</p>
            <CountdownTimer />
            <p className="text-sm text-amber-700 mt-2">
              Reserve now to lock in our special pre-launch price of $26.99 per box!
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* MOVE Product */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
            <div className="p-4 bg-amber-500 text-white">
              <h3 className="text-xl font-bold">TeaHC MOVE</h3>
              <p className="text-white/80 text-sm">Mobility + Inflammation Relief</p>
            </div>
            <div className="p-4">
              <div className="aspect-square relative mb-4 bg-white rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.36%20PM-XBaNZDmhr6evYOpKU6cIueASqrlgp4.png"
                  alt="TeaHC MOVE - Mobility and Inflammation Relief Formula"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold">$26.99</div>
                <div className="text-sm text-gray-500 line-through">$39.99</div>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                10 sachets per box (25mg CBD, 10mg THCV, 10mg CBG per sachet)
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <label htmlFor="move-quantity" className="mr-2 text-sm">
                    Qty:
                  </label>
                  <select id="move-quantity" className="border rounded px-2 py-1 text-sm" defaultValue="1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Button className="w-full bg-amber-500 hover:bg-amber-600">Add to Cart</Button>
            </div>
          </div>

          {/* REPAIR Product */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
            <div className="p-4 bg-blue-800 text-white">
              <h3 className="text-xl font-bold">TeaHC REPAIR</h3>
              <p className="text-white/80 text-sm">Nighttime Recovery & Inflammation Support</p>
            </div>
            <div className="p-4">
              <div className="aspect-square relative mb-4 bg-white rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.29%20PM-rWPKTVqK3SvROr879dEKKfD6xqCLrB.png"
                  alt="TeaHC REPAIR - Nighttime Recovery and Inflammation Support Formula"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold">$26.99</div>
                <div className="text-sm text-gray-500 line-through">$39.99</div>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                10 sachets per box (30mg CBD, 3mg THCV, 2mg CBN per sachet)
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <label htmlFor="repair-quantity" className="mr-2 text-sm">
                    Qty:
                  </label>
                  <select id="repair-quantity" className="border rounded px-2 py-1 text-sm" defaultValue="1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Button className="w-full bg-blue-800 hover:bg-blue-900">Add to Cart</Button>
            </div>
          </div>

          {/* RAPID Product */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
            <div className="p-4 bg-amber-700 text-white">
              <h3 className="text-xl font-bold">TeaHC RAPID</h3>
              <p className="text-white/80 text-sm">Fast-Acting Anti-Inflammatory Nano Shot</p>
            </div>
            <div className="p-4">
              <div className="aspect-square relative mb-4 bg-white rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/May%207%2C%202025%2C%2001_11_20%20PM-gb2jU5JUzudXtpUv0TK9w0Y9cqBJy0.png"
                  alt="TeaHC RAPID - Fast-Acting Anti-Inflammatory Nano Shot"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold">$26.99</div>
                <div className="text-sm text-gray-500 line-through">$39.99</div>
              </div>
              <div className="text-sm text-gray-600 mb-4">10 shots per box (15mg CBD, 10mg THCV per shot)</div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <label htmlFor="rapid-quantity" className="mr-2 text-sm">
                    Qty:
                  </label>
                  <select id="rapid-quantity" className="border rounded px-2 py-1 text-sm" defaultValue="1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Button className="w-full bg-amber-700 hover:bg-amber-800">Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* Bundle Option */}
        <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-xl p-6 mb-12 border border-amber-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold mb-2">Complete Anti-Inflammatory Bundle</h3>
              <p className="text-gray-700 mb-4">
                Get all three formulas and save! The perfect combination for 24/7 inflammation management.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl font-bold">$69.99</div>
                <div className="text-lg text-gray-500 line-through">$80.97</div>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Save $10.98</div>
              </div>
              <Button className="w-full bg-gradient-to-r from-amber-500 to-blue-700 hover:from-amber-600 hover:to-blue-800 text-white">
                Add Bundle to Cart
              </Button>
            </div>
            <div className="md:w-2/3 grid grid-cols-3 gap-4">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.36%20PM-XBaNZDmhr6evYOpKU6cIueASqrlgp4.png"
                  alt="TeaHC MOVE"
                  width={100}
                  height={100}
                  className="mx-auto object-contain"
                />
                <div className="text-center text-sm font-medium mt-1">MOVE</div>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%202.54.29%20PM-rWPKTVqK3SvROr879dEKKfD6xqCLrB.png"
                  alt="TeaHC REPAIR"
                  width={100}
                  height={100}
                  className="mx-auto object-contain"
                />
                <div className="text-center text-sm font-medium mt-1">REPAIR</div>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/May%207%2C%202025%2C%2001_11_20%20PM-gb2jU5JUzudXtpUv0TK9w0Y9cqBJy0.png"
                  alt="TeaHC RAPID"
                  width={100}
                  height={100}
                  className="mx-auto object-contain"
                />
                <div className="text-center text-sm font-medium mt-1">RAPID</div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Capture */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold mb-2">Join the Waitlist</h3>
          <p className="text-gray-600 mb-4">
            Enter your email to join our waitlist and be notified when our products are ready to ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Button className="bg-amber-500 hover:bg-amber-600">Join Waitlist</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
