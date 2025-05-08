import { NextResponse } from "next/server"
import { testGoogleSheetsConnection } from "@/lib/google-sheets"

export async function GET() {
  try {
    const result = await testGoogleSheetsConnection()

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error testing Google Sheets connection:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to test Google Sheets connection",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
