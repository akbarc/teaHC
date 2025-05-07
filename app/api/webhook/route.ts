import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Log the incoming webhook data
    console.log("Webhook data received:", data)

    // You can set up a Zapier or Make (Integromat) workflow that:
    // 1. Listens for POST requests to this endpoint
    // 2. Adds the data to your Google Sheet

    return NextResponse.json({
      success: true,
      message: "Webhook data received successfully",
    })
  } catch (error) {
    console.error("Error in webhook API route:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process webhook data",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
