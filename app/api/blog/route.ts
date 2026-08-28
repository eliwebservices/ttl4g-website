import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') ?? '10')
    const page = parseInt(searchParams.get('page') ?? '1')
    const offset = (page - 1) * limit

    const posts =
      category && category !== 'all'
        ? await sql`
            SELECT id, title, slug, excerpt, category, cover_image, author, published_at, created_at
            FROM posts
            WHERE published = true AND category = ${category}
            ORDER BY published_at DESC
            LIMIT ${limit} OFFSET ${offset}
          `
        : await sql`
            SELECT id, title, slug, excerpt, category, cover_image, author, published_at, created_at
            FROM posts
            WHERE published = true
            ORDER BY published_at DESC
            LIMIT ${limit} OFFSET ${offset}
          `

    return NextResponse.json({ success: true, posts })
  } catch (error) {
    console.error('Blog route error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
