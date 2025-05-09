# TeaHC Website

A Next.js website for TeaHC, a cannabinoid-based wellness product company focused on comfort and mobility.

## Features

- Modern, responsive design with Tailwind CSS
- Product showcase and reservation system
- Email notifications for new reservations
- Supabase database integration for data storage
- Admin dashboard for viewing and managing reservations

## Technology Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.io/) for data storage
- [Nodemailer](https://nodemailer.com/) for email notifications
- [shadcn/ui](https://ui.shadcn.com/) for UI components

## Setup

1. Install dependencies:

```bash
npm install --legacy-peer-deps
```

2. Create a `.env.local` file with the following variables:

```
EMAIL_PASSWORD=your_email_password
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Database

The application uses Supabase for data storage. Reservations are saved to the `reservations` table.

### Supabase Setup

For detailed instructions on setting up Supabase for this application, please see [SUPABASE_SETUP.md](SUPABASE_SETUP.md).

In summary, you'll need to:

1. Create a Supabase project
2. Create a `reservations` table with the required schema
3. Configure appropriate Row Level Security (RLS) policies
4. Update the Supabase credentials in `lib/supabase.ts` if needed

## Admin Dashboard

Access the admin dashboard at `/admin` to:

- View all reservations
- Check Supabase connection status
- Test the Supabase reservations table

## Troubleshooting

If you encounter issues with Supabase:

1. Check your connection using the "Check Supabase Connection" endpoint
2. Verify the `reservations` table exists and has the correct schema
3. Review the Supabase console for any errors or policy issues
4. See [SUPABASE_SETUP.md](SUPABASE_SETUP.md) for detailed troubleshooting steps

## Deployment

This site is deployed on Vercel. Push to the main branch to trigger a new deployment.

## Contact

For questions or support, contact [tryteahc@gmail.com](mailto:tryteahc@gmail.com).