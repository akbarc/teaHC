"use server"

import { z } from "zod"
import { appendToSheet } from "@/lib/simple-sheets"

// Define the form schema with Zod for validation
const reservationSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().optional(),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  state: z.string().min(2, { message: "State is required" }),
  zipCode: z.string().min(5, { message: "Zip code is required" }),
  moveQuantity: z.number().int().min(0),
  repairQuantity: z.number().int().min(0),
  rapidQuantity: z.number().int().min(0),
  bundleQuantity: z.number().int().min(0),
  notes: z.string().optional(),
})

type ReservationData = z.infer<typeof reservationSchema>

export async function submitReservation(formData: FormData) {
  try {
    // Extract and validate form data
    const data: ReservationData = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      zipCode: formData.get("zipCode") as string,
      moveQuantity: Number.parseInt(formData.get("moveQuantity") as string) || 0,
      repairQuantity: Number.parseInt(formData.get("repairQuantity") as string) || 0,
      rapidQuantity: Number.parseInt(formData.get("rapidQuantity") as string) || 0,
      bundleQuantity: Number.parseInt(formData.get("bundleQuantity") as string) || 0,
      notes: (formData.get("notes") as string) || "",
    }

    // Validate the data
    const validatedData = reservationSchema.parse(data)

    // Calculate total cost
    const totalCost =
      validatedData.moveQuantity * 26.99 +
      validatedData.repairQuantity * 26.99 +
      validatedData.rapidQuantity * 26.99 +
      validatedData.bundleQuantity * 69.99

    // Create a reservation record
    const reservationRecord = {
      timestamp: new Date().toISOString(),
      fullName: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone || "",
      address: `${validatedData.address}, ${validatedData.city}, ${validatedData.state} ${validatedData.zipCode}`,
      moveQuantity: validatedData.moveQuantity,
      repairQuantity: validatedData.repairQuantity,
      rapidQuantity: validatedData.rapidQuantity,
      bundleQuantity: validatedData.bundleQuantity,
      totalCost: totalCost,
      notes: validatedData.notes || "",
    }

    // Log the reservation details to console (for debugging)
    console.log("New reservation:", JSON.stringify(reservationRecord, null, 2))

    // Save to Google Sheets
    let sheetUpdated = false
    try {
      // Format data for Google Sheets
      const sheetData = [
        [
          reservationRecord.timestamp, // Timestamp
          reservationRecord.fullName,
          reservationRecord.email,
          reservationRecord.phone,
          reservationRecord.address,
          reservationRecord.moveQuantity,
          reservationRecord.repairQuantity,
          reservationRecord.rapidQuantity,
          reservationRecord.bundleQuantity,
          reservationRecord.totalCost.toFixed(2),
          reservationRecord.notes,
        ],
      ]

      // Append data to Google Sheet
      const result = await appendToSheet(sheetData)
      console.log("Google Sheets update result:", result)
      sheetUpdated = result.success
    } catch (sheetError) {
      console.error("Error updating Google Sheet:", sheetError)
      // Continue even if Google Sheets fails
    }

    // Create a backup of the reservation data in the logs
    console.log(
      "RESERVATION_BACKUP",
      JSON.stringify({
        timestamp: new Date().toISOString(),
        data: reservationRecord,
      }),
    )

    return {
      success: true,
      message: "Reservation submitted successfully! We'll contact you soon.",
      details: {
        sheetUpdated,
      },
    }
  } catch (error) {
    console.error("Reservation submission error:", error)

    if (error instanceof z.ZodError) {
      // Return validation errors
      return {
        success: false,
        message: "Please check your information and try again.",
        errors: error.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
      }
    }

    return {
      success: false,
      message: "There was a problem submitting your reservation. Please try again later.",
    }
  }
}
