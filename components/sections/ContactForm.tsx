'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactInput } from '@/lib/validations'
import { CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactInput) => {
    setStatus('loading')
    setServerMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok || !result.success) {
        throw new Error(result.error ?? 'Failed to send message')
      }

      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setServerMessage('Something went wrong. Please try again or WhatsApp us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-[#2A6B2A]/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-[#2A6B2A]" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1A3320] mb-2">
          Message Sent!
        </h3>
        <p className="text-gray-500 mb-6 max-w-sm">
          Thank you for reaching out. We'll respond within 24 hours.
          For urgent matters, WhatsApp us directly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-[#D4A017] font-semibold text-sm hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>

        {/* Name + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Full Name *
            </label>
            <input
              {...register('full_name')}
              placeholder="Your name"
              className={`w-full px-4 py-2.5 rounded-lg border bg-[#FAF7F0] text-sm outline-none transition-colors focus:border-[#D4A017] ${
                errors.full_name ? 'border-red-300' : 'border-gray-200'
              }`}
            />
            {errors.full_name && (
              <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="your@email.com"
              className={`w-full px-4 py-2.5 rounded-lg border bg-[#FAF7F0] text-sm outline-none transition-colors focus:border-[#D4A017] ${
                errors.email ? 'border-red-300' : 'border-gray-200'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone + Subject row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Phone
            </label>
            <input
              {...register('phone')}
              placeholder="+234..."
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-[#FAF7F0] text-sm outline-none focus:border-[#D4A017] transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
              Subject *
            </label>
            <input
              {...register('subject')}
              placeholder="How can we help?"
              className={`w-full px-4 py-2.5 rounded-lg border bg-[#FAF7F0] text-sm outline-none transition-colors focus:border-[#D4A017] ${
                errors.subject ? 'border-red-300' : 'border-gray-200'
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
            Message *
          </label>
          <textarea
            {...register('message')}
            rows={5}
            placeholder="Tell us about your needs..."
            className={`w-full px-4 py-2.5 rounded-lg border bg-[#FAF7F0] text-sm outline-none transition-colors focus:border-[#D4A017] resize-none ${
              errors.message ? 'border-red-300' : 'border-gray-200'
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Server error */}
        {status === 'error' && serverMessage && (
          <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">
            {serverMessage}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full w-full hover:bg-[#b8880f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
