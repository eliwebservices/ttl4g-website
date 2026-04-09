'use client'

import { useState, useEffect } from 'react'
import { MessageSquare, X } from 'lucide-react'
import ChatWindow from './ChatWindow'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasGreeted, setHasGreeted] = useState(false)
  const [showPulse, setShowPulse] = useState(false)

  // Show pulse animation after 8 seconds to draw attention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowPulse(true)
    }, 8000)
    return () => clearTimeout(timer)
  }, [isOpen])

  // Show greeting tooltip after 12 seconds if not opened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !hasGreeted) setHasGreeted(true)
    }, 12000)
    return () => clearTimeout(timer)
  }, [isOpen, hasGreeted])

  const handleOpen = () => {
    setIsOpen(true)
    setShowPulse(false)
    setHasGreeted(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="animate-in slide-in-from-bottom-4 fade-in duration-300">
          <ChatWindow onClose={handleClose} />
        </div>
      )}

      {/* Greeting Tooltip */}
      {hasGreeted && !isOpen && (
        <div className="animate-in slide-in-from-bottom-2 fade-in duration-200">
          <div className="bg-[#1A3320] text-white text-sm px-4 py-2.5 rounded-2xl rounded-br-sm shadow-lg max-w-[220px] relative">
            <button
              onClick={() => setHasGreeted(false)}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <X size={10} className="text-white" />
            </button>
            👋 Hi! I'm Tola. How can I help you today?
          </div>
          {/* Tooltip arrow */}
          <div className="w-3 h-3 bg-[#1A3320] rotate-45 ml-auto mr-5 -mt-1.5" />
        </div>
      )}

      {/* Bubble Button */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className={`
          relative w-14 h-14 bg-[#1A3320] rounded-full shadow-lg
          flex items-center justify-center
          hover:bg-[#2A6B2A] transition-all duration-300
          hover:scale-110 active:scale-95
        `}
        aria-label="Open TTL4G chat assistant"
      >
        {/* Pulse ring */}
        {showPulse && !isOpen && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#2A6B2A] animate-ping opacity-40" />
            <span className="absolute inset-0 rounded-full bg-[#2A6B2A] animate-ping opacity-20 [animation-delay:300ms]" />
          </>
        )}

        {/* Icon */}
        <div className="transition-transform duration-300">
          {isOpen ? (
            <X size={22} className="text-[#D4A017]" />
          ) : (
            <MessageSquare size={22} className="text-[#D4A017]" />
          )}
        </div>

        {/* Online indicator */}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#1A3320]" />
        )}
      </button>
    </div>
  )
}
