import { NextRequest, NextResponse } from 'next/server'
import { sql } from "@/lib/db";
import { newsletterSchema } from '@/lib/validations'
import { sendWelcomeEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const parsed = newsletterSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const data = parsed.data

    // Upsert — if email exists, just update source (no duplicate error)
    try {
      await sql`
        INSERT INTO subscribers (email, full_name, source, subscribed)
        VALUES (
          ${data.email},
          ${data.full_name ?? null},
          ${data.source ?? 'newsletter_bar'},
          true
        )
        ON CONFLICT (email) DO UPDATE SET
          full_name = EXCLUDED.full_name,
          source = EXCLUDED.source,
          subscribed = EXCLUDED.subscribed
      `
    } catch (dbError) {
      console.error('DB Error:', dbError)
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      )
    }

    // // Send welcome email to subscriber
    // await sendWelcomeEmail(data.email, data.full_name)
    // Non-fatal — don't let email failure block the subscription
try {
  await sendWelcomeEmail(data.email, data.full_name)
} catch (emailError) {
  console.error('Welcome email failed (non-fatal):', emailError)
}

    return NextResponse.json(
      { success: true, message: 'You are subscribed! Check your inbox.' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Newsletter route error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
