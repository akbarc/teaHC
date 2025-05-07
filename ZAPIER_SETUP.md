# Setting Up Zapier to Connect Your Form to Google Sheets

This guide will help you set up a Zapier integration to automatically add form submissions to your Google Sheet.

## Prerequisites

1. A Zapier account (free tier works for basic usage)
2. Your Google account with access to the spreadsheet
3. Your Vercel deployment URL

## Step 1: Create a New Zap

1. Log in to [Zapier](https://zapier.com/)
2. Click "Create Zap"

## Step 2: Set Up the Trigger (Webhook)

1. Search for "Webhook" as your trigger app
2. Select "Catch Hook" as the trigger event
3. Click "Continue"
4. Copy the webhook URL provided by Zapier
5. Add this URL to your environment variables as `ZAPIER_WEBHOOK_URL`
6. Test the webhook by submitting a form on your website
7. Once Zapier receives the data, click "Continue"

## Step 3: Set Up the Action (Google Sheets)

1. Search for "Google Sheets" as your action app
2. Select "Create Spreadsheet Row" as the action event
3. Connect your Google account if not already connected
4. Select your spreadsheet and the "Reservations" worksheet
5. Map the incoming data fields to the appropriate columns:
   - Timestamp → Column A
   - Full Name → Column B
   - Email → Column C
   - Phone → Column D
   - Address → Column E
   - MOVE Quantity → Column F
   - REPAIR Quantity → Column G
   - RAPID Quantity → Column H
   - Bundle Quantity → Column I
   - Total Cost → Column J
   - Notes → Column K
6. Click "Continue"
7. Test the action to make sure it works
8. Turn on your Zap

## Step 4: Update Your Code

Make sure your server action is configured to send data to the Zapier webhook:

\`\`\`typescript
// In your server action
const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL;

if (zapierWebhookUrl) {
  try {
    await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        fullName: validatedData.fullName,
        email: validatedData.email,
        // ... rest of your data
      }),
    });
  } catch (error) {
    console.error('Error sending data to Zapier:', error);
  }
}
\`\`\`

## Troubleshooting

- If data isn't appearing in your spreadsheet, check the Zap history in Zapier to see if there are any errors
- Make sure your Google Sheet has the correct column headers
- Verify that your webhook URL is correctly set in your environment variables
