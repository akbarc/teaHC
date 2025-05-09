import { NextResponse } from 'next/server'

// This is a backup API that just logs the data instead of saving to Supabase again
export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const requestData = await request.json()
    
    // Validate the data structure
    if (!requestData || !requestData.fullName || !requestData.email) {
      return NextResponse.json(
        { success: false, message: 'Invalid reservation data' },
        { status: 400 }
      )
    }
    
    // Create a formatted reservation log
    const formattedReservation = `
BACKUP RESERVATION:
Timestamp: ${requestData.timestamp}
Name: ${requestData.fullName}
Email: ${requestData.email}
Phone: ${requestData.phone || "N/A"}
Address: ${requestData.address}
Products:
  - MOVE: ${requestData.moveQuantity}
  - REPAIR: ${requestData.repairQuantity}
  - RAPID: ${requestData.rapidQuantity}
  - Bundle: ${requestData.bundleQuantity}
Total Cost: $${requestData.totalCost?.toFixed(2) || "0.00"}
Notes: ${requestData.notes || "N/A"}
`.trim()
    
    // Log the backup data to the console (would be available in server logs)
    console.log("📋 BACKUP API RESERVATION:", formattedReservation)
    console.log("📦 BACKUP DATA:", JSON.stringify(requestData))
    
    // In a real-world scenario, you might want to save this to a different database
    // or a log file, but for now we'll just return success
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Backup reservation logged successfully'
    })
  } catch (error) {
    console.error("Error in backup-reservation API:", error)
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    )
  }
}
