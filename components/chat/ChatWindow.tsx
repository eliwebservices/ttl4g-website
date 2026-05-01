'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Send, Minimize2, RefreshCw } from 'lucide-react'
import { useChat, type ChatMessage } from '@/hooks/useChat'

interface ChatWindowProps {
  onClose: () => void
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-[#1A3320] flex items-center justify-center text-[#D4A017] text-xs font-bold mr-2 flex-shrink-0 mt-1">
          J
        </div>
      )}
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? 'bg-[#D4A017] text-[#1A3320] font-medium rounded-tr-sm'
            : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-sm'
        }`}
      >
        {message.content}
      </div>
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex justify-start mb-3">
      <div className="w-7 h-7 rounded-full bg-[#1A3320] flex items-center justify-center text-[#D4A017] text-xs font-bold mr-2 flex-shrink-0">
        J
      </div>
      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-gray-100">
        <div className="flex gap-1 items-center h-4">
          <span className="w-2 h-2 bg-[#2A6B2A] rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 bg-[#2A6B2A] rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 bg-[#2A6B2A] rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  )
}

const QUICK_REPLIES = [
  'What services do you offer?',
  'Tell me about Sino-Africa training',
  'Book a discovery call',
  'What is your pricing?',
]

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const { messages, isLoading, error, sendMessage, clearChat } = useChat()
  const [input, setInput] = useState('')
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  // Focus input on open
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Hide quick replies once user sends first message
  useEffect(() => {
    if (messages.length > 1) setShowQuickReplies(false)
  }, [messages.length])

  const handleSend = () => {
    if (!input.trim()) return
    sendMessage(input)
    setInput('')
  }

  const handleQuickReply = (text: string) => {
    setShowQuickReplies(false)
    sendMessage(text)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col w-[360px] h-[540px] bg-[#FAF7F0] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      
      {/* Header */}
      <div className="bg-[#1A3320] px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1A3320] font-bold text-sm">
              J
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#1A3320]" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">Joy</p>
            <p className="text-green-300 text-xs">TTL4G Assistant · Online</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={clearChat}
            title="Clear chat"
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
          >
            <RefreshCw size={14} />
          </button>
          <button
            onClick={onClose}
            title="Close chat"
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 scroll-smooth">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}

        {/* Typing indicator */}
        {isLoading && <TypingIndicator />}

        {/* Error message */}
        {error && (
          <div className="text-center">
            <p className="text-red-500 text-xs bg-red-50 px-3 py-2 rounded-lg inline-block">
              {error}
            </p>
          </div>
        )}

        {/* Quick Replies */}
        {showQuickReplies && !isLoading && (
          <div className="pt-2">
            <p className="text-xs text-gray-400 mb-2 text-center">
              Quick questions:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs px-3 py-1.5 bg-white border border-[#2A6B2A] text-[#2A6B2A] rounded-full hover:bg-[#2A6B2A] hover:text-white transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-3 py-3 bg-white border-t border-gray-100 flex-shrink-0">
        <div className="flex items-center gap-2 bg-[#FAF7F0] rounded-xl px-3 py-2 border border-gray-200 focus-within:border-[#2A6B2A] transition-colors">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Joy anything..."
            disabled={isLoading}
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="w-7 h-7 bg-[#D4A017] rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-[#b8880f] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Send size={13} className="text-[#1A3320]" />
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-1.5">
          Powered by TTL4G · AI may make mistakes
        </p>
      </div>
    </div>
  )
}
