import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const { to, subject, text } = await request.json()

    // Log the received data
    console.log("Email request received:", { to, subject, textLength: text?.length })

    const success = await sendEmail({ to, subject, text })

    if (success) {
      return NextResponse.json({
        success: true,
        message: "Email sent successfully",
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error in email API route:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process email request",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
