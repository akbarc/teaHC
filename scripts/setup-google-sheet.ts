/**
 * This script sets up a Google Sheet with the correct headers for the reservation system.
 *
 * To run this script:
 * 1. Make sure you have the Google service account key and sheet ID in your .env file
 * 2. Run: npx tsx scripts/setup-google-sheet.ts
 */

import { ensureSheetExists } from "../lib/google-sheets"

async function setupGoogleSheet() {
  try {
    const result = await ensureSheetExists()

    if (result) {
      console.log("Google Sheet setup completed successfully!")
      console.log(`Sheet ID: ${process.env.GOOGLE_SHEET_ID || "12iOAkaGr7t5NSbBj3ZdcrT3g9qP1SorbH8iXTLnzF_E"}`)
      console.log("Headers added to the sheet")
    } else {
      console.error("Failed to set up Google Sheet")
    }
  } catch (error) {
    console.error("Error setting up Google Sheet:", error)
  }
}

// Run the setup function
setupGoogleSheet()
