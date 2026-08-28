import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params

    const rows = await sql`
      SELECT * FROM posts
      WHERE slug = ${slug} AND published = true
      LIMIT 1
    `

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, post: rows[0] })
  } catch (error) {
    console.error('Blog post route error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
