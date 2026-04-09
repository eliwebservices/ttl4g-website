'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: "What happens during a discovery call?",
    a: "Our discovery calls are free 30-minute sessions where we learn about your organization's leadership challenges, team dynamics, and goals. We'll ask targeted questions and share initial recommendations — no hard sell, just honest conversation about how we can help.",
  },
  {
    q: "How are your programs priced?",
    a: "Our pricing is tailored to each engagement based on scope, team size, duration, and delivery format. We offer everything from half-day workshops to year-long transformational programs. After your discovery call, we provide a detailed proposal with transparent pricing.",
  },
  {
    q: "Do you offer virtual/remote training?",
    a: "Yes! We offer fully virtual, fully in-person, and hybrid delivery formats. Our virtual programs use interactive methodologies that keep participants engaged and deliver the same transformational results as in-person sessions.",
  },
  {
    q: "What industries do you serve?",
    a: "We work across industries including financial services, energy, telecommunications, FMCG, healthcare, government, NGOs, and international development organizations. Our frameworks are adaptable to any sector.",
  },
  {
    q: "How do you measure training effectiveness?",
    a: "We use the Kirkpatrick model adapted for African contexts — measuring reaction, learning, behavior change, and business results. We include pre- and post-assessments, 90-day follow-up surveys, and ROI reporting in all our programs.",
  },
  {
    q: "Can you customize programs for our specific needs?",
    a: "Absolutely. Every program we deliver is tailored to your organization's unique culture, challenges, and strategic objectives. We don't believe in one-size-fits-all solutions.",
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-xl border border-gray-100 overflow-hidden"
        >
          <button
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
          >
            <span className="text-sm font-semibold text-[#1A3320]">
              {faq.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#D4A017] flex-shrink-0 transition-transform duration-300 ${
                open === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-4">
              <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
