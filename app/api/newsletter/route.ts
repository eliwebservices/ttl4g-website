import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
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
    const supabase = await createClient()

    // Upsert — if email exists, just update source (no duplicate error)
    const { error: dbError } = await supabase
      .from('subscribers')
      .upsert(
        {
          email: data.email,
          full_name: data.full_name ?? null,
          source: data.source ?? 'newsletter_bar',
          subscribed: true,
        },
        { onConflict: 'email', ignoreDuplicates: false }
      )

    if (dbError) {
      console.error('DB Error:', dbError)
      return NextResponse.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      )
    }

    // Send welcome email to subscriber
    await sendWelcomeEmail(data.email, data.full_name)

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
