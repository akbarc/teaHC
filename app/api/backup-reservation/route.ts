import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Log the reservation data
    console.log("BACKUP_RESERVATION_DATA:", JSON.stringify(data))

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
