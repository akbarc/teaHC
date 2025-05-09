'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'

export default function SetupDatabasePage() {
  const [status, setStatus] = useState<{ 
    checking: boolean, 
    tableExists: boolean | null,
    error: any 
  }>({
    checking: false,
    tableExists: null,
    error: null
  })

  const checkTable = async () => {
    setStatus({
      checking: true,
      tableExists: null,
      error: null
    })

    try {
      // Check if the reservations table exists
      const { error } = await supabase
        .from('reservations')
        .select('count', { count: 'exact', head: true })

      if (error) {
        console.error('Error checking table:', error)
        setStatus({
          checking: false,
          tableExists: false,
          error: error
        })
      } else {
        setStatus({
          checking: false,
          tableExists: true,
          error: null
        })
      }
    } catch (err) {
      setStatus({
        checking: false,
        tableExists: false,
        error: err
      })
    }
  }

  const createSqlCode = `
-- Create the reservations table
CREATE TABLE public.reservations (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  timestamp text NOT NULL,
  "fullName" text NOT NULL,
  email text NOT NULL,
  phone text,
  address text NOT NULL,
  "moveQuantity" integer DEFAULT 0 NOT NULL,
  "repairQuantity" integer DEFAULT 0 NOT NULL,
  "rapidQuantity" integer DEFAULT 0 NOT NULL,
  "bundleQuantity" integer DEFAULT 0 NOT NULL,
  "totalCost" numeric DEFAULT 0 NOT NULL,
  notes text
);

-- Enable Row Level Security
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

-- Create policies
-- This is a very permissive policy for testing
CREATE POLICY "Allow all operations" ON public.reservations
  FOR ALL USING (true) WITH CHECK (true);

-- Alternatively, use these more specific policies:
-- CREATE POLICY "Allow anonymous inserts" ON public.reservations
--   FOR INSERT WITH CHECK (true);
-- 
-- CREATE POLICY "Allow authenticated reads" ON public.reservations
--   FOR SELECT USING (auth.role() = 'authenticated');
-- 
-- CREATE POLICY "Allow all reads" ON public.reservations
--   FOR SELECT USING (true);
`

  const fixRlsCode = `
-- Fix RLS policies by creating a more permissive policy
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.reservations;
DROP POLICY IF EXISTS "Allow authenticated reads" ON public.reservations;
DROP POLICY IF EXISTS "Allow all operations" ON public.reservations;

-- This is a very permissive policy that allows all operations
-- In production, you would want more restrictive policies
CREATE POLICY "Allow all operations" ON public.reservations
  FOR ALL USING (true) WITH CHECK (true);
`

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Supabase Database Setup</h1>
      
      <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h2 className="text-xl font-semibold mb-4">Connection Status Check</h2>
        <div className="flex gap-4 mb-4">
          <Button 
            onClick={checkTable} 
            disabled={status.checking}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {status.checking ? 'Checking...' : 'Check Table Existence'}
          </Button>
          
          <Link href="/api/supabase-health" passHref target="_blank">
            <Button variant="outline">
              Check Basic Connection
            </Button>
          </Link>
        </div>
        
        {status.checking && (
          <p className="text-blue-600">Checking if the reservations table exists...</p>
        )}
        
        {status.tableExists === true && (
          <div className="p-4 bg-green-100 text-green-800 rounded">
            ✅ Success! The reservations table exists and is accessible.
            <p className="mt-2">
              <Link href="/admin/reservations" className="underline">
                Go to Reservations Management
              </Link>
            </p>
          </div>
        )}
        
        {status.tableExists === false && (
          <div className="p-4 bg-red-100 text-red-800 rounded">
            ❌ The reservations table was not found or is not accessible.
            <p className="mt-2">Please follow the setup instructions below.</p>
            {status.error && (
              <div className="mt-2 p-2 bg-red-50 rounded text-sm overflow-auto">
                <strong>Error details:</strong> {JSON.stringify(status.error, null, 2)}
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="space-y-8">
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Option 1: Create Table via SQL Editor</h2>
          <p className="mb-4">
            The fastest way to create the required table is using Supabase's SQL Editor:
          </p>
          <ol className="list-decimal list-inside space-y-3 ml-4 mb-6">
            <li>Go to your <a href="https://app.supabase.com" target="_blank" className="text-blue-600 underline">Supabase Dashboard</a></li>
            <li>Select your project</li>
            <li>Navigate to the "SQL Editor" section in the left sidebar</li>
            <li>Click "New Query"</li>
            <li>Paste the SQL code below</li>
            <li>Click "Run" to execute the SQL</li>
          </ol>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm mb-4">
            <pre>{createSqlCode}</pre>
          </div>
          
          <Button 
            onClick={() => {
              navigator.clipboard.writeText(createSqlCode);
              alert('SQL copied to clipboard!');
            }}
            variant="outline"
            className="mb-4"
          >
            Copy SQL to Clipboard
          </Button>
          
          <h3 className="text-lg font-semibold mt-8 mb-4">Fix RLS Policy Issues</h3>
          <p className="mb-4">
            If you already have the table but are encountering RLS policy errors, use this SQL to fix them:
          </p>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm mb-4">
            <pre>{fixRlsCode}</pre>
          </div>
          
          <Button 
            onClick={() => {
              navigator.clipboard.writeText(fixRlsCode);
              alert('Fix RLS SQL copied to clipboard!');
            }}
            variant="outline"
          >
            Copy Fix RLS SQL
          </Button>
        </div>
        
        <div className="p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">Option 2: Manual Table Creation</h2>
          <p className="mb-4">
            Alternatively, you can create the table using the Supabase Table Editor:
          </p>
          
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Go to your <a href="https://app.supabase.com" target="_blank" className="text-blue-600 underline">Supabase Dashboard</a></li>
            <li>Select your project</li>
            <li>Navigate to the "Table Editor" section</li>
            <li>Click "New Table"</li>
            <li>Set the name to <code className="bg-gray-100 px-1 rounded">reservations</code></li>
            <li>Enable Row Level Security (RLS)</li>
            <li>Add the following columns:
              <div className="ml-6 mt-2 overflow-x-auto">
                <table className="border-collapse w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-2 text-left">Name</th>
                      <th className="border p-2 text-left">Type</th>
                      <th className="border p-2 text-left">Default Value</th>
                      <th className="border p-2 text-left">Primary</th>
                      <th className="border p-2 text-left">Nullable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">id</td>
                      <td className="border p-2">uuid</td>
                      <td className="border p-2">uuid_generate_v4()</td>
                      <td className="border p-2">✅</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">created_at</td>
                      <td className="border p-2">timestamp with time zone</td>
                      <td className="border p-2">now()</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">timestamp</td>
                      <td className="border p-2">text</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">fullName</td>
                      <td className="border p-2">text</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">email</td>
                      <td className="border p-2">text</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">phone</td>
                      <td className="border p-2">text</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">✅</td>
                    </tr>
                    <tr>
                      <td className="border p-2">address</td>
                      <td className="border p-2">text</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">moveQuantity</td>
                      <td className="border p-2">integer</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">repairQuantity</td>
                      <td className="border p-2">integer</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">rapidQuantity</td>
                      <td className="border p-2">integer</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">bundleQuantity</td>
                      <td className="border p-2">integer</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">totalCost</td>
                      <td className="border p-2">numeric</td>
                      <td className="border p-2">0</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">❌</td>
                    </tr>
                    <tr>
                      <td className="border p-2">notes</td>
                      <td className="border p-2">text</td>
                      <td className="border p-2">-</td>
                      <td className="border p-2">❌</td>
                      <td className="border p-2">✅</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li className="mt-4">Click "Save" to create the table</li>
            <li>After creating the table, navigate to "Authentication" → "Policies"</li>
            <li>Find the reservations table and add the following policy:
              <div className="ml-6 mt-2 p-3 bg-gray-50 rounded">
                <p className="font-medium">Name: Allow all operations</p>
                <p>Target roles: All</p>
                <p>Using expression: <code className="bg-gray-100 px-1 rounded">true</code></p>
                <p>Check expression: <code className="bg-gray-100 px-1 rounded">true</code></p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">After Setup</h2>
        <p>Once you've created the table, click the "Check Table Existence" button above to verify your setup.</p>
        <p className="mt-2">
          If you continue having issues, please refer to the full <a href="https://supabase.com/docs" target="_blank" className="text-blue-600 underline">Supabase documentation</a> or contact the development team.
        </p>
      </div>
    </div>
  )
} 