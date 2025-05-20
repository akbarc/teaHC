#!/bin/bash

# Check if .env.local exists
if [ ! -f .env.local ]; then
  echo ".env.local file not found. Creating a new one."
  touch .env.local
  echo "NEXT_PUBLIC_SUPABASE_URL=https://oximmrzfhtkdgfykrtjy.supabase.co" >> .env.local
  echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aW1tcnpmaHRrZGdmeWtydGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NTU1NjMsImV4cCI6MjA2MjMzMTU2M30.ieWFaNGnwiSngyEYiwmg6JimpCe16OlnVZJhymljcKw" >> .env.local
  echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" >> .env.local
fi

# Check if service role key already exists
if grep -q "SUPABASE_SERVICE_ROLE_KEY" .env.local; then
  echo "SUPABASE_SERVICE_ROLE_KEY already exists in .env.local."
else
  echo "Adding SUPABASE_SERVICE_ROLE_KEY to .env.local."
  echo "# Add service role key for admin operations" >> .env.local
  echo "SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94aW1tcnpmaHRrZGdmeWtydGp5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Njc1NTU2MywiZXhwIjoyMDYyMzMxNTYzfQ.hP2NFcfD69KvGTBNQpgQ9wlcIXJ0nLrJqT2nUNiLTsY" >> .env.local
fi

echo "Environment setup complete." 