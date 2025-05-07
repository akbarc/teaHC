import { google } from "googleapis"

// Function to get authenticated Google Sheets client
export async function getGoogleSheetsClient() {
  try {
    // Get the spreadsheet ID from environment variables
    const SHEET_ID = process.env.GOOGLE_SHEET_ID

    if (!SHEET_ID) {
      throw new Error("GOOGLE_SHEET_ID environment variable is not set")
    }

    // Get the service account key from environment variables
    const serviceAccountKeyString = process.env.GOOGLE_SERVICE_ACCOUNT_KEY

    if (!serviceAccountKeyString) {
      throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY environment variable is not set")
    }

    // Parse the service account key
    const serviceAccountKey = JSON.parse(serviceAccountKeyString)

    // Create a new auth client using the service account
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccountKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    // Create Google Sheets client
    const sheets = google.sheets({ version: "v4", auth })

    return {
      sheets,
      sheetId: SHEET_ID,
    }
  } catch (error) {
    console.error("Error initializing Google Sheets client:", error)
    throw error
  }
}

// Function to append data to a Google Sheet
export async function appendToGoogleSheet(values: any[][]) {
  try {
    const { sheets, sheetId } = await getGoogleSheetsClient()

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Reservations!A:K", // Use the Reservations sheet
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    })

    return {
      success: true,
      updatedRows: response.data.updates?.updatedRows || 0,
    }
  } catch (error) {
    console.error("Error appending to Google Sheet:", error)
    // Log more details about the error
    if (error instanceof Error) {
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }
    throw error
  }
}

// Function to check if the sheet exists and create it if needed
export async function ensureSheetExists() {
  try {
    const { sheets, sheetId } = await getGoogleSheetsClient()

    // Get the spreadsheet
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
    })

    // Check if Reservations sheet exists
    const reservationsSheetExists = spreadsheet.data.sheets?.some((sheet) => sheet.properties?.title === "Reservations")

    if (!reservationsSheetExists) {
      // Create Reservations sheet if it doesn't exist
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: sheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: "Reservations",
                },
              },
            },
          ],
        },
      })
    }

    // Add headers if the sheet is empty
    const values = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Reservations!A1:K1",
    })

    if (!values.data.values || values.data.values.length === 0) {
      // Add headers
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: "Reservations!A1:K1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              "Timestamp",
              "Full Name",
              "Email",
              "Phone",
              "Address",
              "MOVE Quantity",
              "REPAIR Quantity",
              "RAPID Quantity",
              "Bundle Quantity",
              "Total Cost",
              "Notes",
            ],
          ],
        },
      })
    }

    return true
  } catch (error) {
    console.error("Error ensuring sheet exists:", error)
    return false
  }
}
