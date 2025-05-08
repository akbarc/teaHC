import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const reservationData = await request.json()

    // Format the reservation data for the email
    const formattedReservation = `
NEW RESERVATION:
Timestamp: ${reservationData.timestamp}
Name: ${reservationData.fullName}
Email: ${reservationData.email}
Phone: ${reservationData.phone}
Address: ${reservationData.address}
Products:
  - MOVE: ${reservationData.moveQuantity}
  - REPAIR: ${reservationData.repairQuantity}
  - RAPID: ${reservationData.rapidQuantity}
  - Bundle: ${reservationData.bundleQuantity}
Total Cost: $${reservationData.totalCost.toFixed(2)}
Notes: ${reservationData.notes}
`.trim()

    // Log the reservation data for backup
    console.log("NOTIFICATION_RESERVATION:", formattedReservation)

    // Try to send an email notification using a simple fetch to an email service
    // This is a backup approach that doesn't rely on nodemailer
    try {
      // Option 1: Send to your own email API endpoint
      await fetch("https://api.yourdomain.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "tryteahc@gmail.com",
          subject: `New TeaHC Reservation: ${reservationData.fullName}`,
          text: formattedReservation,
        }),
      }).catch(() => {
        // Silently fail if this doesn't work
      })
    } catch (emailError) {
      // Just log the error, don't fail the request
      console.error("Email notification error:", emailError)
    }

    // Return success even if email fails - we've logged the data
    return NextResponse.json({
      success: true,
      message: "Reservation notification processed",
    })
  } catch (error) {
    console.error("Error in notification API:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process notification",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
