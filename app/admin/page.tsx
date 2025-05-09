import Link from 'next/link'

export default function AdminDashboardPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2">Database Setup Required</h2>
        <p className="mb-4">
          The connection to Supabase is working, but the reservations table needs to be created.
        </p>
        <Link 
          href="/admin/setup-database"
          className="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Setup Database Now
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Link 
          href="/admin/setup-database"
          className="block p-6 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Setup Database</h2>
          <p className="text-gray-600">
            Create the required Supabase tables and configure permissions
          </p>
        </Link>
        
        <Link 
          href="/admin/reservations"
          className="block p-6 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
        >
          <h2 className="text-xl font-semibold mb-2">View Reservations</h2>
          <p className="text-gray-600">
            Access and manage all customer reservations stored in Supabase
          </p>
        </Link>
        
        <Link 
          href="/api/supabase-health"
          className="block p-6 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition"
          target="_blank"
        >
          <h2 className="text-xl font-semibold mb-2">Check Supabase Connection</h2>
          <p className="text-gray-600">
            Verify that the basic Supabase connection is working
          </p>
        </Link>
        
        <Link 
          href="/api/test-supabase"
          className="block p-6 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition"
          target="_blank"
        >
          <h2 className="text-xl font-semibold mb-2">Test Reservations Table</h2>
          <p className="text-gray-600">
            Test the Supabase reservations table by attempting to create a test record
          </p>
        </Link>
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Admin Information</h2>
        <p className="mb-4">
          This admin dashboard is connected to Supabase for data storage. All reservations are now being stored in the Supabase database instead of Google Sheets.
        </p>
        <p className="mb-4">
          If you encounter connection issues, please try the following steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>Use the "Check Supabase Connection" link to verify basic connectivity</li>
          <li>Follow the database setup instructions to create the required tables</li>
          <li>Verify that the table has the correct schema with all required fields</li>
          <li>Ensure the Supabase API key has the necessary permissions</li>
        </ol>
      </div>
    </div>
  )
} 