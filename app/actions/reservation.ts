"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

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

// Function to send email notification
async function sendEmailNotification(reservationData: any) {
  try {
    // Create a formatted email body
    const emailBody = `
NEW RESERVATION:
Timestamp: ${reservationData.timestamp}
Name: ${reservationData.fullName}
Email: ${reservationData.email}
Phone: ${reservationData.phone || "N/A"}
Address: ${reservationData.address}
Products:
  - MOVE: ${reservationData.moveQuantity}
  - REPAIR: ${reservationData.repairQuantity}
  - RAPID: ${reservationData.rapidQuantity}
  - Bundle: ${reservationData.bundleQuantity}
Total Cost: $${reservationData.totalCost.toFixed(2)}
Notes: ${reservationData.notes || "N/A"}
`.trim()

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
      to: "tryteahc@gmail.com",
      subject: `New TeaHC Reservation: ${reservationData.fullName}`,
      text: emailBody,
    })

    return true
  } catch (error) {
    console.error("Error sending email notification:", error)
    return false
  }
}

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

    // Create a formatted text version of the reservation for logging
    const formattedReservation = `
NEW RESERVATION:
Timestamp: ${reservationRecord.timestamp}
Name: ${reservationRecord.fullName}
Email: ${reservationRecord.email}
Phone: ${reservationRecord.phone}
Address: ${reservationRecord.address}
Products:
  - MOVE: ${reservationRecord.moveQuantity}
  - REPAIR: ${reservationRecord.repairQuantity}
  - RAPID: ${reservationRecord.rapidQuantity}
  - Bundle: ${reservationRecord.bundleQuantity}
Total Cost: $${reservationRecord.totalCost.toFixed(2)}
Notes: ${reservationRecord.notes}
`.trim()

    // Log the reservation details to console (for retrieval from Vercel logs)
    console.log("RESERVATION_DATA:", formattedReservation)
    console.log("RESERVATION_JSON:", JSON.stringify(reservationRecord))

    // Try to send email notification
    let emailSent = false
    try {
      emailSent = await sendEmailNotification(reservationRecord)
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      // Continue even if email fails
    }

    // Try to send the reservation data to our backup API
    try {
      await fetch("/api/backup-reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationRecord),
      })
    } catch (backupError) {
      console.error("Error sending to backup API:", backupError)
      // Continue even if backup fails
    }

    return {
      success: true,
      message: "Reservation submitted successfully! We'll contact you soon.",
      details: {
        emailSent,
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
