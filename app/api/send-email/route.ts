import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { to, subject, text } = await request.json()

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tryteahc@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Send the email
    await transporter.sendMail({
      from: "tryteahc@gmail.com",
      to,
      subject,
      text,
    })

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.error("Error in email API route:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
