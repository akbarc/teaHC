"use client"

import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/admin" 
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin?tab=subscribers" 
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  Subscribers
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin?tab=reservations" 
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Main content */}
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
} 