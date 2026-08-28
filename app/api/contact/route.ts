import { NextRequest, NextResponse } from 'next/server'
import { sql } from "@/lib/db";
import { contactSchema } from '@/lib/validations'
import { sendContactNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const data = parsed.data

    // Save message to DB
    try {
      await sql`
        INSERT INTO messages (full_name, email, phone, subject, message, status)
        VALUES (
          ${data.full_name},
          ${data.email},
          ${data.phone ?? null},
          ${data.subject},
          ${data.message},
          'unread'
        )
      `
    } catch (dbError) {
      console.error('DB Error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      )
    }

    // // Send email notification to client
    // await sendContactNotification(data)

    // Non-fatal — message is already saved even if email fails
try {
  await sendContactNotification(data)
} catch (emailError) {
  console.error('Contact notification email failed (non-fatal):', emailError)
}

    return NextResponse.json(
      { success: true, message: 'Message received! We will respond within 24 hours.' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
