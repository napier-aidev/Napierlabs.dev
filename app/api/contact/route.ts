import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, projectType, timeline, budget, message } = body

    if (!name || !email || !projectType || !timeline || !budget) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "hello@napierlabs.dev"

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const emailContent = `
New Lead from Napier Labs Website

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECT INFORMATION
Type: ${projectType}
Timeline: ${timeline}
Budget: ${budget}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE
${message || "No additional details provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Napier Labs <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        subject: `🔧 New Lead: ${projectType} - ${name}`,
        text: emailContent,
        reply_to: email,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
