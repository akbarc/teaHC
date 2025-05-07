import fs from "fs"
import path from "path"

type ReservationRecord = {
  timestamp: string
  fullName: string
  email: string
  phone: string
  address: string
  moveQuantity: number
  repairQuantity: number
  rapidQuantity: number
  bundleQuantity: number
  totalCost: number
  notes: string
}

// Function to log reservation to a local file as a fallback
export async function logReservation(reservation: ReservationRecord): Promise<boolean> {
  try {
    // Define the log directory and file path
    const logDir = path.join(process.cwd(), "logs")
    const filePath = path.join(logDir, "reservations.log")

    // Create logs directory if it doesn't exist
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true })
    }

    // Format the reservation as a log entry
    const logEntry = `
[${reservation.timestamp}]
Name: ${reservation.fullName}
Email: ${reservation.email}
Phone: ${reservation.phone}
Address: ${reservation.address}
Products: MOVE(${reservation.moveQuantity}), REPAIR(${reservation.repairQuantity}), RAPID(${reservation.rapidQuantity}), Bundle(${reservation.bundleQuantity})
Total: $${reservation.totalCost.toFixed(2)}
Notes: ${reservation.notes}
----------------------------------------
`

    // Append to log file
    fs.appendFileSync(filePath, logEntry)

    return true
  } catch (error) {
    console.error("Error logging reservation:", error)
    return false
  }
}
