import { NextResponse } from "next/server"
import { addReservationToSheet } from "@/lib/google-sheets"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Format the reservation data for logging
    const formattedReservation = `
BACKUP RESERVATION:
Timestamp: ${data.timestamp || new Date().toISOString()}
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Address: ${data.address}
Products:
  - MOVE: ${data.moveQuantity}
  - REPAIR: ${data.repairQuantity}
  - RAPID: ${data.rapidQuantity}
  - Bundle: ${data.bundleQuantity}
Total Cost: $${data.totalCost?.toFixed(2) || "0.00"}
Notes: ${data.notes || "N/A"}
`.trim()

    // Log the reservation data
    console.log("BACKUP_RESERVATION:", formattedReservation)
    console.log("BACKUP_RESERVATION_JSON:", JSON.stringify(data))

    // Try to add to Google Sheet as a backup
    try {
      await addReservationToSheet(data)
    } catch (sheetError) {
      console.error("Error adding backup reservation to Google Sheet:", sheetError)
      // Continue even if sheet update fails
    }

    return NextResponse.json({
      success: true,
      message: "Reservation data received and logged",
    })
  } catch (error) {
    console.error("Error in backup reservation API:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process reservation data",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
