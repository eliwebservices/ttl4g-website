import { NextRequest, NextResponse } from 'next/server'
import { sql } from "@/lib/db";
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

    // Check if lead already exists
    // Replace the existing check + insert block with:
const existing = await sql`
SELECT id FROM leads WHERE email = ${data.email} LIMIT 1
`

if (existing.length === 0) {
try {
  await sql`
    INSERT INTO leads (full_name, email, source, status)
    VALUES (${data.full_name}, ${data.email}, ${data.source}, 'new')
  `
} catch (dbError) {
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
