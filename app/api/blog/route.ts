import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') ?? '10')
    const page = parseInt(searchParams.get('page') ?? '1')
    const offset = (page - 1) * limit

    const supabase = await createClient()

    let query = supabase
      .from('posts')
      .select('id, title, slug, excerpt, category, cover_image, author, published_at, created_at')
      .eq('published', true)
      .order('published_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (category && category !== 'all') {
      query = query.eq('category', category)
    }

    const { data, error } = await query

    if (error) {
      console.error('Blog fetch error:', error)
      return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
    }

    return NextResponse.json({ success: true, posts: data ?? [] })
  } catch (error) {
    console.error('Blog route error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
