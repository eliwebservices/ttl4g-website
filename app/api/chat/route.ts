import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'
import { chatSchema } from '@/lib/validations'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const TTL4G_SYSTEM_PROMPT = `You are Tola, the friendly and professional virtual assistant for TTL4G (Training The Leaders For Greatness). TTL4G is a Nigeria-based leadership development and cross-cultural consultancy founded serving Nigeria, Africa, and global partners.

YOUR PERSONALITY:
- Warm, professional, and confident
- Knowledgeable about African business culture
- Concise — keep responses to 2-4 sentences unless detail is truly needed
- Never robotic. Speak like a smart, helpful colleague

YOUR SERVICES TO PROMOTE:
1. Leadership Development — equipping leaders with mindset, skills and strategies
2. Performance Management — aligning individual goals with business outcomes
3. Change Management — helping organizations navigate transformation
4. Cross-Cultural Intelligence — specializing in Sino-Africa (Nigeria-China) dynamics, plus Germany, India, UK, USA
5. Coaching & Capacity Building — personalized coaching programs

KEY FACTS:
- Based in Lagos, Nigeria
- Serves Nigeria, Pan-Africa, and international partners
- Signature program: Sino-Africa Cross-Cultural Communication
- Pricing: Custom quotes after a free discovery call
- Booking: Free 30-minute discovery call at /book

YOUR GOALS IN ORDER:
1. Answer visitor questions about TTL4G warmly and accurately
2. Understand their organization and leadership challenge
3. Match them to the right TTL4G service
4. Guide them to book a free discovery call
5. If they are interested in follow-up, ask for their name and email

RULES:
- Never invent pricing, guarantees or specific client names
- If unsure about something specific, say the team will follow up
- Always end conversations by offering to help them book a discovery call
- If someone asks about Sino-Africa or China-Nigeria business, show deep enthusiasm — it is TTL4G's signature expertise
- Never mention competitors by name`

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const parsed = chatSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      )
    }

    const { message, session_id, history = [] } = parsed.data
    const supabase = await createClient()

    // Build message history for Claude
    const messages: Anthropic.MessageParam[] = [
      ...history.map((msg) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      { role: 'user', content: message },
    ]

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 400,
      system: TTL4G_SYSTEM_PROMPT,
      messages,
    })

    const assistantMessage =
      response.content[0].type === 'text'
        ? response.content[0].text
        : 'I apologize, I could not process that. Please try again.'

    // Build updated history
    const updatedMessages = [
      ...history,
      { role: 'user', content: message, timestamp: new Date().toISOString() },
      { role: 'assistant', content: assistantMessage, timestamp: new Date().toISOString() },
    ]

    // Upsert chat session in DB
    await supabase
      .from('chat_sessions')
      .upsert(
        {
          session_id,
          messages: updatedMessages,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'session_id' }
      )

    return NextResponse.json({
      success: true,
      message: assistantMessage,
      session_id,
    })
  } catch (error) {
    console.error('Chat route error:', error)
    return NextResponse.json(
      { error: 'Chat unavailable. Please try again shortly.' },
      { status: 500 }
    )
  }
}
