"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/admin/contact")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to admin dashboard...</h1>
        <p className="text-gray-600">If you are not redirected automatically, please click the link below:</p>
        <button
          onClick={() => router.push("/admin/contact")}
          className="mt-4 text-blue-600 hover:text-blue-800 underline"
        >
          Go to Admin Dashboard
        </button>
      </div>
    </div>
  )
} 