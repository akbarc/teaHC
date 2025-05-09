import Link from 'next/link'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">TeaHC Admin</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Back to Site
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100 p-4">
          <nav>
            <ul className="space-y-2">
              <li className="font-semibold text-gray-500 px-2 py-1 text-sm uppercase">Database</li>
              <li>
                <Link 
                  href="/admin/setup-database" 
                  className="block p-2 hover:bg-gray-200 rounded"
                >
                  Setup Database
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/reservations" 
                  className="block p-2 hover:bg-gray-200 rounded"
                >
                  Reservations
                </Link>
              </li>
              
              <li className="font-semibold text-gray-500 px-2 py-1 mt-4 text-sm uppercase">API Status</li>
              <li>
                <Link 
                  href="/api/supabase-health" 
                  className="block p-2 hover:bg-gray-200 rounded"
                  target="_blank"
                >
                  Supabase Health Check
                </Link>
              </li>
              <li>
                <Link 
                  href="/api/test-supabase" 
                  className="block p-2 hover:bg-gray-200 rounded"
                  target="_blank"
                >
                  Test Supabase Table
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
} 