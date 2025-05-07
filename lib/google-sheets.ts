import { google } from "googleapis"

// Function to get authenticated Google Sheets client
export async function getGoogleSheetsClient() {
  try {
    // Use the spreadsheet ID you provided
    const SHEET_ID = process.env.GOOGLE_SHEET_ID || "12iOAkaGr7t5NSbBj3ZdcrT3g9qP1SorbH8iXTLnzF_E"

    // Get the service account key from environment variables or use a fallback for development
    let serviceAccountKey

    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      // Use the environment variable if available
      serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
    } else {
      // Fallback for development (this should be removed in production)
      console.warn(
        "Using fallback service account key. Set GOOGLE_SERVICE_ACCOUNT_KEY environment variable in production.",
      )
      serviceAccountKey = {
        type: "service_account",
        project_id: "lively-fold-385723",
        client_email: "sheets-service-account@lively-fold-385723.iam.gserviceaccount.com",
        // Other fields are omitted for security
      }
    }

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
      range: "Sheet1!A:K", // Adjust the range based on your sheet structure
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

    // Check if Sheet1 exists
    const sheet1Exists = spreadsheet.data.sheets?.some((sheet) => sheet.properties?.title === "Sheet1")

    if (!sheet1Exists) {
      // Create Sheet1 if it doesn't exist
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: sheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: "Sheet1",
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
      range: "Sheet1!A1:K1",
    })

    if (!values.data.values || values.data.values.length === 0) {
      // Add headers
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: "Sheet1!A1:K1",
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
