/**
 * A simple utility to append data to a Google Sheet using the Sheets API v4
 * This uses a public sheet approach that doesn't require authentication
 */

// Function to append data to a Google Sheet
export async function appendToSheet(values: any[][]) {
  try {
    const SHEET_ID = process.env.GOOGLE_SHEET_ID || "12iOAkaGr7t5NSbBj3ZdcrT3g9qP1SorbH8iXTLnzF_E"

    // Format the values for the API
    const formattedValues = values.map((row) =>
      row.map((cell) => (cell === null || cell === undefined ? "" : String(cell))),
    )

    // Log what we're trying to send
    console.log("Attempting to append to sheet:", SHEET_ID)
    console.log("Data:", JSON.stringify(formattedValues))

    // Use the Google Sheets API directly
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A:K:append?valueInputOption=USER_ENTERED`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Use the API key directly
          Authorization: `Bearer ${process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "4c90016e23a49dd48d1f1e5059fac17b15f47f14"}`,
        },
        body: JSON.stringify({
          values: formattedValues,
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Google Sheets API error: ${response.status} ${errorText}`)
    }

    const result = await response.json()
    return {
      success: true,
      updatedRows: result.updates?.updatedRows || 0,
    }
  } catch (error) {
    console.error("Error appending to sheet:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : String(error),
    }
  }
}
