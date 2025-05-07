/**
 * This script tests the Google Sheets connection by adding a test row.
 *
 * To run this script:
 * 1. Make sure you have the Google service account key and sheet ID in your .env file
 * 2. Run: npx tsx scripts/test-google-sheets.ts
 */

import { appendToGoogleSheet, ensureSheetExists } from "../lib/google-sheets"

async function testGoogleSheets() {
  try {
    console.log("Testing Google Sheets connection...")

    // First, ensure the sheet exists with headers
    console.log("Ensuring sheet exists...")
    const sheetExists = await ensureSheetExists()

    if (!sheetExists) {
      console.error("Failed to ensure sheet exists")
      return
    }

    console.log("Sheet exists with headers")

    // Now try to append a test row
    console.log("Appending test data...")
    const testData = [
      [
        new Date().toISOString(),
        "Test User",
        "test@example.com",
        "555-1234",
        "123 Test St, Test City, TS 12345",
        1,
        1,
        1,
        1,
        "123.96",
        "This is a test entry",
      ],
    ]

    const result = await appendToGoogleSheet(testData)

    console.log("Test data appended successfully:", result)
    console.log("Google Sheets connection test completed successfully!")
  } catch (error) {
    console.error("Error testing Google Sheets connection:", error)
  }
}

// Run the test function
testGoogleSheets()
