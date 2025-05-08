import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

// Hardcoded service account credentials
const SERVICE_ACCOUNT_CREDENTIALS = {
  type: "service_account",
  project_id: "teahc-459203",
  private_key_id: "0b7844462b92d7c31af4efd10fc9054a032dfdee",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8op80OvCKYJDl\nwgf/MdQlbOQdP50y5I+ZqOmI+2GeqDIcCwAVAseJbHJ4Adsq/XYtRs3vN7E2oHpR\nD1W51YJ2XmuPOPZrvo4LeslKFr6YbjyDmJdbsOZwJ1H1zcIn3AX/KZw35QK1RCcj\nP8YQjB6UQz64DI4lU+rUT7TV37rkFb1hfQhSyZYsS9oEDretJ0UBXx26tVBYf4n2\nR1tZaTHD//YWeZrPGtn6VjqprGoyCnBxtXfYReXb7kmVhedWl8lwMJrlrKasZjo2\nEaklqR2TJX5mZBqkcRVv2yBWuQslJbPgmj0ubo5TZ7bItM92WMdHTA+4b21nUBBM\nChYbOFbtAgMBAAECggEAC7oXaCWW4R9mOqZgnWSRYf8+QjQ7d1e+tqiJ1i58j+K4\ndMZZS7UXxwsTJbNF1wsZTvDFKi896N26pPHtXCdyHB48FRQPO70FsyB/xYea8zp9\nMBgrJrPda5ECNyQCwzwaMlX5pH7r921kenxDObGgUArLKiF7r8XjBi5rWVV2lqnI\n+5sGKu6y0DC0gIV0/rXxmN6izg8USpoDY01VETF5gMPMLmLMN/nwuONy2nBZF/uV\ne88xgpyE6y7y3083da6fG06Chh7IxlR1TFa2W+FT5EAb+sTJiTehOYCe6SlrT2ck\ngiOdg6F8Ck8XIz3zVCMMRlzV9eBR2fa0k9ZdqstSOQKBgQDkW5FnKR1zwbVAezdt\nsWwZYK9o8mCJHLPte3xtP2nBdVF8r64v84r+RtGC6MOXwzMnbjGLJE1z5o93xQ+j\nVWnkAfLdo/NkY+3ptM8P4fhljahSdiWLOSoeU5a8vTsGVlNQPNmqA930BuyS4qh0\nhg/LJMm53CHu1buLrSZxqQtcWQKBgQDTeB7CS2giC92K5VGoEPD72rrhLZA+dvsx\nVBbLUk9RwVF/4Klq91MN3nRZosSgtfUeGuTfYPspKy4WrfHryuLKtxLhtTFLIq02\nXPkaMXj34w5ZnEgnlg53PFJwFfHqzlJ3KcjL47xXBFL2IoUmAvBRA1IrNvA4IUr3\n+wXKy77stQKBgHSTCjdPlelyCcVRIYqt+DE8Wk+I7B8SuAeT8oESzjokWeT9Cj8Q\nZPRJ0sqxaKggzgxjBIezkJaKLNNHliQbhmMPW5wqBiZJnTqhQtMo2FV/a14tUh0w\noX+5zEmtkGQ7zWw4pCVWtAfPQRX6/2P8zDM4JILtDaWPFp7HVcjQMyyBAoGAODF4\nQvsUvc9XXJxZWYa+8r4J4OJhrSei0lXdBMRnjXsIdCm3+1Ojf1D4rAUDqQ0RCKHu\n5aj4tNTjl2U7nwO3xlRlsRKb+bJKQuLr0tkIox5z5r4Psm0+hNLDuUMrmNCgu0eg\nMwXeO2VLwloj9ZjcUTrHr/IWXWQDbugGfwArSO0CgYEAoNobeVDfWscfy8I8I608\nHz6M+1QNGh4iZkx83MPiQrzNH2+zBhYXQ+wzZ8p09d2ujbwRkpF221rHxTgO5gEo\n17DhN4UnDSdTZ1Ki18vw/DgulZlK4MImovFviztbLw5eVI7EAP7u4ghvXXg1hj16\njzERP/v5fYKqOp1lvA67gtg=\n-----END PRIVATE KEY-----\n",
  client_email: "tryteahc@teahc-459203.iam.gserviceaccount.com",
  client_id: "106159551407535863413",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/tryteahc%40teahc-459203.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
}

// Hardcoded spreadsheet ID - your actual spreadsheet ID
const SPREADSHEET_ID = "12iOAkaGr7t5NSbBj3ZdcrT3g9qP1SorbH8iXTLnzF_E"

// Function to get authenticated Google Sheets client
async function getGoogleSheet() {
  try {
    // Create a JWT client using the hardcoded service account credentials
    const jwtClient = new JWT({
      email: SERVICE_ACCOUNT_CREDENTIALS.client_email,
      key: SERVICE_ACCOUNT_CREDENTIALS.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    // Create a new document instance
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwtClient)

    // Load the document properties and worksheets
    await doc.loadInfo()

    // Get the first sheet (or create it if it doesn't exist)
    let sheet = doc.sheetsByTitle["Reservations"]
    if (!sheet) {
      // Create the sheet if it doesn't exist
      sheet = await doc.addSheet({ title: "Reservations" })

      // Add headers
      await sheet.setHeaderRow([
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
      ])
    }

    return sheet
  } catch (error) {
    console.error("Error initializing Google Sheet:", error)
    throw error
  }
}

// Function to add a reservation to the Google Sheet
export async function addReservationToSheet(reservation: any) {
  try {
    const sheet = await getGoogleSheet()

    // Add the row to the sheet
    await sheet.addRow({
      Timestamp: reservation.timestamp,
      "Full Name": reservation.fullName,
      Email: reservation.email,
      Phone: reservation.phone,
      Address: reservation.address,
      "MOVE Quantity": reservation.moveQuantity,
      "REPAIR Quantity": reservation.repairQuantity,
      "RAPID Quantity": reservation.rapidQuantity,
      "Bundle Quantity": reservation.bundleQuantity,
      "Total Cost": reservation.totalCost,
      Notes: reservation.notes,
    })

    return true
  } catch (error) {
    console.error("Error adding reservation to Google Sheet:", error)
    return false
  }
}

// Function to test the Google Sheets connection
export async function testGoogleSheetsConnection() {
  try {
    const sheet = await getGoogleSheet()

    // Add a test row
    const testRow = {
      Timestamp: new Date().toISOString(),
      "Full Name": "Test User",
      Email: "test@example.com",
      Phone: "555-1234",
      Address: "123 Test St, Test City, TS 12345",
      "MOVE Quantity": 1,
      "REPAIR Quantity": 1,
      "RAPID Quantity": 1,
      "Bundle Quantity": 1,
      "Total Cost": 123.96,
      Notes: "This is a test entry",
    }

    await sheet.addRow(testRow)

    return {
      success: true,
      message: "Successfully connected to Google Sheets and added a test row",
      sheetTitle: sheet.title,
      rowCount: sheet.rowCount,
    }
  } catch (error) {
    console.error("Error testing Google Sheets connection:", error)
    return {
      success: false,
      message: "Failed to connect to Google Sheets",
      error: error instanceof Error ? error.message : String(error),
    }
  }
}

// Function to ensure the sheet exists and has headers
export async function ensureSheetExists() {
  try {
    const sheet = await getGoogleSheet()
    return true
  } catch (error) {
    console.error("Error ensuring sheet exists:", error)
    return false
  }
}

// Function to append data to Google Sheet
export async function appendToGoogleSheet(data: any[][]) {
  try {
    const sheet = await getGoogleSheet()

    // Append rows to the sheet
    const result = await sheet.addRows(data)

    return {
      success: true,
      updatedRows: result.length,
    }
  } catch (error) {
    console.error("Error appending to Google Sheet:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
