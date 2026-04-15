import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'
import { chatSchema } from '@/lib/validations'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const TTL4G_SYSTEM_PROMPT = `You are Joy, the friendly and professional virtual assistant for TTL4G (Training The Leaders For Greatness). TTL4G is a Nigeria-based leadership development, training, and business consultancy serving Nigeria, Africa, and global partners.

YOUR PERSONALITY:
- Warm, professional, and confident
- Knowledgeable about African and global business culture
- Concise — keep responses to 2-4 sentences unless detail is truly needed
- Never robotic. Speak like a smart, helpful colleague
- Your name is Joy — a neutral, friendly English name

YOUR AREAS OF EXPERTISE TO PROMOTE:

TRAINING & DEVELOPMENT:
1. Building High-Performance Global Teams: Cross-Cultural Communication for Collaboration & Results
2. Equipping Diplomats and Executives: Cross-Cultural Awareness for China
3. Coaching for Growth: Developing Talent & Driving Performance as a Leader
4. Developing Strategic Leadership: From Self-Mastery to Leading Teams and Ecosystems
5. Leading Through Change: Managing Performance & Transforming Effectively
6. Transforming Learning & Development into a Strategic Business Partner

BUSINESS CONSULTING:
1. Business Setup in Nigeria: company registration, tax clearance, audit, recruitment of management staff, and other HR-related services

KEY FACTS:
- Based in Lagos, Nigeria
- Serves Nigeria, Pan-Africa, and international partners
- Signature expertise: Sino-Africa Cross-Cultural Communication
- Pricing: Custom quotes after a free discovery call
- Booking: Free 30-minute discovery call at /book

YOUR GOALS IN ORDER:
1. Answer visitor questions about TTL4G warmly and accurately
2. Understand their organization and challenge
3. Match them to the right TTL4G training or consulting service
4. Guide them to book a free discovery call
5. If they want follow-up, ask for their name and email

RULES:
- Never invent pricing, guarantees, or specific client names
- If unsure about something specific, say the team will follow up
- Always offer to help them book a discovery call
- Show deep enthusiasm for cross-cultural and Sino-Africa topics
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
