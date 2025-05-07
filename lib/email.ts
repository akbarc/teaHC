import nodemailer from "nodemailer"

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string
  subject: string
  text: string
}): Promise<boolean> {
  try {
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
      to,
      subject,
      text,
    })

    return true
  } catch (error) {
    console.error("Error sending email:", error)
    return false
  }
}
