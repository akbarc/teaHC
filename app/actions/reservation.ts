"use server"

import { z } from "zod"
import nodemailer from "nodemailer"
import { updateSubscriberReservation } from "@/lib/subscriber-service"
import { addReservationToSupabase, ReservationData as SupabaseReservationData } from "@/lib/supabase-service"
import { supabase } from "@/lib/supabase"

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
    // Check if email password is configured
    if (!process.env.EMAIL_PASSWORD) {
      console.warn("EMAIL_PASSWORD environment variable is not set. Email notification is disabled.")
      return false
    }

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
    console.log("⏳ Processing reservation submission...")
    
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
    console.log("✅ Form data validated successfully")

    // Calculate total cost
    const totalCost =
      validatedData.moveQuantity * 19.99 +
      validatedData.repairQuantity * 19.99 +
      validatedData.rapidQuantity * 19.99 +
      validatedData.bundleQuantity * 47.98

    // Create a reservation record
    const reservationRecord: SupabaseReservationData = {
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

    // Add the reservation to Supabase with improved diagnostics
    let supabaseUpdated = false
    let supabaseError: any = null
    
    try {
      console.log("⏳ Saving reservation to Supabase...")
      
      // STEP 1: Log the reservation data for debugging
      try {
        const logResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/log-reservation`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reservationRecord)
        })
        
        console.log("📝 Reservation logged for debugging")
      } catch (logError) {
        console.error("⚠️ Could not log reservation data:", logError)
        // Continue anyway
      }
      
      // STEP 1.5: Use our special fix endpoint
      try {
        console.log("Using fix-reservation endpoint...")
        
        const fixResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/fix-reservation`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reservationRecord)
        })
        
        const fixResult = await fixResponse.json()
        
        if (fixResult.success) {
          console.log("✅ Fix endpoint worked:", fixResult)
          supabaseUpdated = true
          return {
            success: true,
            message: "Reservation submitted successfully! We'll contact you soon.",
            details: {
              supabaseUpdated: true,
              supabaseError: null,
              data: fixResult.data,
              method: "fix-endpoint"
            }
          }
        } else {
          console.error("❌ Fix endpoint failed:", fixResult)
        }
      } catch (fixError) {
        console.error("❌ Exception using fix endpoint:", fixError)
      }
      
      // STEP 2: Use direct Supabase insertion
      console.log("Method 1: Direct insert to reservations table...")
      
      // Show exactly what we're sending to Supabase
      console.log("Data being sent:", JSON.stringify(reservationRecord, null, 2))
      
      const { data: directData, error: directError } = await supabase
        .from('reservations')
        .insert([reservationRecord])
        .select()
      
      if (!directError) {
        console.log("✅ Direct insertion successful:", directData)
        supabaseUpdated = true
        return {
          success: true,
          message: "Reservation submitted successfully! We'll contact you soon.",
          details: {
            supabaseUpdated: true,
            supabaseError: null,
            data: directData
          }
        }
      }
      
      // STEP 3: If direct insert failed, log the error and try fallback
      console.error("❌ Direct insertion failed:", directError)
      supabaseError = directError
      
      // STEP 4: As a fallback, try the subscriber service
      console.log("Method 2: Using subscriber service as fallback...")
      
      // Convert to the format needed by updateSubscriberReservation
      const subscriberReservation = {
        email: reservationRecord.email,
        products: {
          moveQuantity: reservationRecord.moveQuantity,
          repairQuantity: reservationRecord.repairQuantity,
          rapidQuantity: reservationRecord.rapidQuantity,
          bundleQuantity: reservationRecord.bundleQuantity,
        },
        shipping: {
          fullName: reservationRecord.fullName,
          phone: reservationRecord.phone,
          address: reservationRecord.address,
        },
        totalCost: reservationRecord.totalCost,
        reservedAt: reservationRecord.timestamp,
        notes: reservationRecord.notes,
      }
      
      const backupResult = await updateSubscriberReservation(
        reservationRecord.email, 
        subscriberReservation
      )
      
      if (backupResult.success) {
        console.log("✅ Fallback method successful")
        supabaseUpdated = true
      } else {
        console.error("❌ Fallback method failed")
        
        // Last resort: try a minimal direct insertion with just email
        console.log("Method 3: Trying minimal insertion...")
        
        const { data: minimalData, error: minimalError } = await supabase
          .from('reservations')
          .insert([{
            email: reservationRecord.email,
            timestamp: reservationRecord.timestamp,
            fullName: reservationRecord.fullName
          }])
          .select()
        
        if (!minimalError) {
          console.log("✅ Minimal insertion successful")
          supabaseUpdated = true
        } else {
          console.error("❌ All methods failed:", minimalError)
          supabaseError = minimalError
        }
      }
    } catch (dbError) {
      supabaseError = dbError
      console.error("❌❌ Exception updating Supabase:", dbError)
      // Continue even if Supabase update fails
    }

    // Try to send email notification
    let emailSent = false
    try {
      console.log("⏳ Sending email notification...")
      emailSent = await sendEmailNotification(reservationRecord)
      if (emailSent) {
        console.log("✅ Email notification sent")
      } else {
        console.log("❌ Email notification failed")
      }
    } catch (emailError) {
      console.error("❌❌ Email sending error:", emailError)
      // Continue even if email fails
    }

    // Try to send the reservation data to our backup API
    let backupSaved = false
    try {
      console.log("⏳ Sending to backup API...")
      
      // Use the full URL to avoid "Invalid URL" errors
      // In a real deployment, we'd use environment variables for the domain
      const domain = process.env.VERCEL_URL || 'http://localhost:3000'
      const backupUrl = new URL('/api/backup-reservation', domain).toString()
      
      const backupResponse = await fetch(backupUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationRecord),
      })
      
      const backupResult = await backupResponse.json()
      backupSaved = backupResult.success
      
      if (backupSaved) {
        console.log("✅ Backup API updated successfully")
      } else {
        console.error("❌ Backup API update failed:", backupResult)
      }
    } catch (backupError) {
      console.error("❌❌ Error sending to backup API:", backupError)
      // Continue even if backup fails
    }

    // Final status summary
    console.log("📊 Reservation Submission Summary:")
    console.log(`- Supabase: ${supabaseUpdated ? '✅ Success' : '❌ Failed'}`)
    console.log(`- Email: ${emailSent ? '✅ Success' : '❌ Failed'}`)
    console.log(`- Backup API: ${backupSaved ? '✅ Success' : '❌ Failed'}`)

    return {
      success: true,
      message: "Reservation submitted successfully! We'll contact you soon.",
      details: {
        supabaseUpdated,
        supabaseError: supabaseError ? String(supabaseError) : null,
        emailSent,
        backupSaved
      },
    }
  } catch (error) {
    console.error("❌❌ Reservation submission error:", error)

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
      error: error instanceof Error ? error.message : String(error)
    }
  }
}
