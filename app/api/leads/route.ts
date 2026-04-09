import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { leadSchema } from '@/lib/validations'
import { sendLeadMagnetEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const parsed = leadSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid data' },
        { status: 400 }
      )
    }

    const data = parsed.data
    const supabase = await createClient()

    // Check if lead already exists
    const { data: existing } = await supabase
      .from('leads')
      .select('id, email')
      .eq('email', data.email)
      .single()

    if (!existing) {
      // Insert new lead
      const { error: dbError } = await supabase
        .from('leads')
        .insert({
          full_name: data.full_name,
          email: data.email,
          source: data.source,
          status: 'new',
        })

      if (dbError) {
        console.error('DB Error:', dbError)
        return NextResponse.json(
          { error: 'Failed to save lead' },
          { status: 500 }
        )
      }
    }

    // Send lead magnet delivery email
    await sendLeadMagnetEmail(data.email, data.full_name)

    return NextResponse.json(
      { success: true, message: 'Check your email for your free guide!' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Leads route error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
