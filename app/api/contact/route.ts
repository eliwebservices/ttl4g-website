import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
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
    const supabase = await createClient()

    // Save message to DB
    const { error: dbError } = await supabase
      .from('messages')
      .insert({
        full_name: data.full_name,
        email: data.email,
        phone: data.phone ?? null,
        subject: data.subject,
        message: data.message,
        status: 'unread',
      })

    if (dbError) {
      console.error('DB Error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save message' },
        { status: 500 }
      )
    }

    // Send email notification to client
    await sendContactNotification(data)

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
