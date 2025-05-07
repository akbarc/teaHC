"use server"

import { z } from "zod"

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

    // Calculate total items and cost
    const totalItems =
      validatedData.moveQuantity +
      validatedData.repairQuantity +
      validatedData.rapidQuantity +
      validatedData.bundleQuantity * 3

    const totalCost =
      validatedData.moveQuantity * 26.99 +
      validatedData.repairQuantity * 26.99 +
      validatedData.rapidQuantity * 26.99 +
      validatedData.bundleQuantity * 69.99

    // Replace the Google Sheets integration part with this simpler email notification

    // After validating the data, add this code:
    try {
      // Format the data for email
      const emailContent = `
    New Reservation:
    
    Name: ${validatedData.fullName}
    Email: ${validatedData.email}
    Phone: ${validatedData.phone || "Not provided"}
    Address: ${validatedData.address}, ${validatedData.city}, ${validatedData.state} ${validatedData.zipCode}
    
    Products:
    - MOVE: ${validatedData.moveQuantity}
    - REPAIR: ${validatedData.repairQuantity}
    - RAPID: ${validatedData.rapidQuantity}
    - Bundle: ${validatedData.bundleQuantity}
    
    Total Cost: $${totalCost.toFixed(2)}
    
    Notes: ${validatedData.notes || "None"}
  `

      // Send the data to your email endpoint
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

      await fetch(`${baseUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "tryteahc@gmail.com",
          subject: "New TeaHC Reservation",
          text: emailContent,
        }),
      })

      // Continue with the rest of the function...
    } catch (error) {
      console.error("Error sending email notification:", error)
      // Continue with the function even if email fails
    }

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

      const response = await fetch(`${baseUrl}/api/append-to-sheet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: [validatedData] }),
      })

      const responseData = await response.json()

      if (!response.ok) {
        console.error("Failed to append to Google Sheet:", responseData)
        throw new Error(`API error: ${responseData.message || "Unknown error"}`)
      }

      console.log("Google Sheets response:", responseData)
    } catch (error) {
      console.error("Error calling append-to-sheet API:", error)
      // Continue with the function even if Google Sheets fails
      // This way the user still gets a success message
    }

    // Add this code after the Google Sheets API call (whether it succeeds or fails):

    // Send an email notification as backup
    try {
      // Format the data for email
      const emailContent = `
New Reservation:

Name: ${validatedData.fullName}
Email: ${validatedData.email}
Phone: ${validatedData.phone || "Not provided"}
Address: ${validatedData.address}, ${validatedData.city}, ${validatedData.state} ${validatedData.zipCode}

Products:
- MOVE: ${validatedData.moveQuantity}
- REPAIR: ${validatedData.repairQuantity}
- RAPID: ${validatedData.rapidQuantity}
- Bundle: ${validatedData.bundleQuantity}

Total Cost: $${totalCost.toFixed(2)}

Notes: ${validatedData.notes || "None"}
`

      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

      await fetch(`${baseUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "tryteahc@gmail.com",
          subject: "New TeaHC Reservation",
          text: emailContent,
        }),
      })
    } catch (emailError) {
      console.error("Error sending backup email notification:", emailError)
      // Continue even if email fails
    }

    return {
      success: true,
      message: "Reservation submitted successfully! We'll contact you soon.",
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
