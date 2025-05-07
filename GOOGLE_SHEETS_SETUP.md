# Google Sheets Integration Setup

This document explains how to set up the Google Sheets integration for the TeaHC reservation system.

## Prerequisites

1. A Google account
2. Access to Google Cloud Console

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Rename the first sheet to "Reservations"
4. Note the spreadsheet ID from the URL:
   - The URL will look like: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part

## Step 2: Set Up a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and enable it

## Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details and click "Create"
4. Skip the optional steps and click "Done"
5. Find your new service account in the list and click on it
6. Go to the "Keys" tab
7. Click "Add Key" > "Create new key"
8. Choose JSON format and click "Create"
9. The key file will be downloaded to your computer

## Step 4: Share Your Google Sheet with the Service Account

1. Open your Google Sheet
2. Click the "Share" button
3. Add the service account email (it looks like `something@project-id.iam.gserviceaccount.com`)
4. Give it "Editor" access
5. Uncheck "Notify people" and click "Share"

## Step 5: Configure Environment Variables

Add the following environment variables to your project:

\`\`\`env
GOOGLE_SHEET_ID=your_spreadsheet_id
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}
\`\`\`

For the `GOOGLE_SERVICE_ACCOUNT_KEY`, copy the entire content of the JSON key file you downloaded.

## Step 6: Set Up Sheet Headers

Run the setup script to initialize your Google Sheet with the correct headers:

\`\`\`bash
npx tsx scripts/setup-google-sheet.ts
\`\`\`

## Testing the Integration

After completing the setup, submit a test reservation through your application. The data should appear in your Google Sheet.

## Troubleshooting

If you encounter issues:

1. Make sure the service account has Editor access to the spreadsheet
2. Verify that the Google Sheets API is enabled in your Google Cloud project
3. Check that the environment variables are correctly set
4. Look for error messages in your application logs
