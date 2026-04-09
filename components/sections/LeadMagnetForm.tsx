'use client'

import { useState } from 'react'

export default function LeadMagnetForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: name || 'Friend',
          email,
          source: 'lead_magnet_cross_cultural',
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? 'Failed')
      }

      setStatus('success')
      setMessage('Check your inbox! Your free guide is on its way.')
      setEmail('')
      setName('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit()
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <span className="text-5xl block mb-4">🎉</span>
        <h3 className="font-serif text-xl font-bold text-[#1A3320] mb-2">
          Your guide is on its way!
        </h3>
        <p className="text-gray-500 text-sm">{message}</p>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-3 max-w-md mx-auto">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your first name"
          disabled={status === 'loading'}
          className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#D4A017] transition-colors disabled:opacity-50"
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setStatus('idle')
              setMessage('')
            }}
            onKeyDown={handleKeyDown}
            placeholder="Enter your email"
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#D4A017] transition-colors disabled:opacity-50"
          />
          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-6 rounded-xl hover:bg-[#b8880f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? 'Sending...' : 'Download Free'}
          </button>
        </div>
      </div>
      {message && status === 'error' && (
        <p className="text-red-500 text-xs text-center mt-2">{message}</p>
      )}
      <p className="text-xs text-gray-400 mt-4">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </>
  )
}
