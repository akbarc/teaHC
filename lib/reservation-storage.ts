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

// Function to save reservation to a local JSON file as a fallback
export async function saveReservation(reservation: ReservationRecord): Promise<boolean> {
  try {
    // Define the file path
    const filePath = path.join(process.cwd(), "reservations.json")

    // Read existing reservations or create empty array
    let reservations: ReservationRecord[] = []

    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf8")
        reservations = JSON.parse(fileContent)
      }
    } catch (error) {
      console.error("Error reading reservations file:", error)
      // Continue with empty array if file doesn't exist or is invalid
    }

    // Add new reservation
    reservations.push(reservation)

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(reservations, null, 2))

    return true
  } catch (error) {
    console.error("Error saving reservation:", error)
    return false
  }
}
