'use client'

import { useState, useCallback } from 'react'
import { getSessionId } from '@/lib/session'

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Tola, TTL4G's virtual assistant 👋 I'm here to help you explore our leadership and cross-cultural training programs. What brings you here today?",
      timestamp: new Date().toISOString(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: ChatMessage = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date().toISOString(),
    }

    // Optimistically add user message
    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)
    setError(null)

    try {
      const sessionId = getSessionId()

      // Build history excluding the initial greeting
      const history = messages
        .slice(1)
        .map(({ role, content }) => ({ role, content }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: content.trim(),
          session_id: sessionId,
          history,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? 'Failed to get response')
      }

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date().toISOString(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Chat error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [messages, isLoading])

  const clearChat = useCallback(() => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! I'm Tola, TTL4G's virtual assistant 👋 How can I help you today?",
        timestamp: new Date().toISOString(),
      },
    ])
    setError(null)
  }, [])

  return { messages, isLoading, error, sendMessage, clearChat }
}
