# Supabase Setup Instructions for TeaHC

This document provides detailed instructions for setting up your Supabase database for the TeaHC application.

## 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com/) and sign in or create an account
2. Click "New Project" and fill in the required details
3. Choose a strong password for the database
4. Select a region close to your target audience
5. Click "Create new project"

## 2. Create the Reservations Table

Once your project is created, follow these steps to create the necessary table:

1. Go to the "Table Editor" section in the left sidebar
2. Click "New Table"
3. Set the following properties:
   - **Name**: `reservations`
   - **Description**: `Customer product reservations`
   - **Enable Row Level Security (RLS)**: Check this box
   - **Enable Realtime**: Optional (check if you want real-time updates)

4. Add the following columns:

| Name | Type | Default Value | Primary | Nullable |
|------|------|--------------|---------|----------|
| id | uuid | `uuid_generate_v4()` | ✅ | ❌ |
| created_at | timestamp with time zone | `now()` | ❌ | ❌ |
| timestamp | text | - | ❌ | ❌ |
| fullName | text | - | ❌ | ❌ |
| email | text | - | ❌ | ❌ |
| phone | text | - | ❌ | ✅ |
| address | text | - | ❌ | ❌ |
| moveQuantity | integer | 0 | ❌ | ❌ |
| repairQuantity | integer | 0 | ❌ | ❌ |
| rapidQuantity | integer | 0 | ❌ | ❌ |
| bundleQuantity | integer | 0 | ❌ | ❌ |
| totalCost | numeric | 0 | ❌ | ❌ |
| notes | text | - | ❌ | ✅ |

5. Click "Save" to create the table

## 3. Configure Row Level Security (RLS) Policies

1. Go to the "Authentication" section
2. Navigate to "Policies"
3. Find the `reservations` table
4. Create the following policies:

### Read Policy (for getting reservations)

- **Name**: `Allow reads`
- **Target roles**: `authenticated`
- **Policy definition**: Apply to all authenticated users
- **Using expression**: `true`

### Insert Policy (for creating reservations)

- **Name**: `Allow inserts`
- **Target roles**: `anon`, `authenticated`
- **Policy definition**: Apply to all authenticated users
- **Using expression**: `true`

## 4. Create API Keys

Your API keys should already be created when you set up the project. You can find them by:

1. Go to "Project Settings" (gear icon in the sidebar)
2. Navigate to "API"
3. You'll see your project URL and anon key (public)
4. These values are already configured in the application's `lib/supabase.ts` file

## 5. Test the Connection

1. Go to your TeaHC admin dashboard
2. Use the "Check Supabase Connection" endpoint to verify basic connectivity
3. Use the "Test Reservations Table" endpoint to test if the table is configured correctly

## Troubleshooting

If you encounter issues:

1. **Connection failures**: Check that your API URL and key are correct in `lib/supabase.ts`
2. **Table not found**: Verify that you've created the `reservations` table with the exact name (case-sensitive)
3. **Permission errors**: Check your RLS policies to ensure proper access
4. **Schema errors**: Verify that all column names match exactly what the application expects (case-sensitive)
5. **API rate limits**: Be aware of Supabase's free tier limitations

## Need Help?

Contact the development team at [tryteahc@gmail.com](mailto:tryteahc@gmail.com) for assistance. 