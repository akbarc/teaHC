import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { to, subject, text } = await request.json()

    // Log the received data
    console.log("Email request received:", { to, subject, textLength: text?.length })

    // Log the full email content for manual retrieval
    console.log("Email content:", text)

    // In a production environment, you would integrate with a third-party email service here
    // For now, we'll just log the data that would be sent

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Email data logged successfully",
    })
  } catch (error) {
    console.error("Error in email API route:", error)
    return NextResponse.json({ success: false, message: "Failed to process email request" }, { status: 500 })
  }
}
