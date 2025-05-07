import { NextResponse } from "next/server"
import { appendToGoogleSheet, ensureSheetExists } from "@/lib/google-sheets"

export async function POST(request: Request) {
  try {
    const { data } = await request.json()

    if (!data || !Array.isArray(data)) {
      return NextResponse.json({ success: false, message: "Invalid data format" }, { status: 400 })
    }

    // Ensure the sheet exists with headers
    await ensureSheetExists()

    // Append data to Google Sheet
    const result = await appendToGoogleSheet(data)

    return NextResponse.json({
      success: true,
      message: `Data appended to Google Sheet successfully (${result.updatedRows} rows updated)`,
    })
  } catch (error) {
    console.error("Error in append-to-sheet API route:", error)

    // Add more detailed error logging
    let errorMessage = "Unknown error"
    let errorDetails = {}

    if (error instanceof Error) {
      errorMessage = error.message
      errorDetails = {
        name: error.name,
        stack: error.stack,
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to append data to Google Sheet",
        error: errorMessage,
        details: errorDetails,
      },
      { status: 500 },
    )
  }
}
