'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const categories = ["All", "Leadership", "Cross-Cultural", "Change Management", "Coaching", "Performance"]

const articles = [
  {
    category: "Leadership",
    title: "5 Leadership Habits That Transform Nigerian Organizations",
    excerpt: "Discover the daily practices that separate good managers from great leaders in the African business context. From morning rituals to strategic delegation, these habits are game-changers.",
    date: "March 15, 2026",
    slug: "leadership-habits-nigerian-organizations",
    featured: true,
  },
  {
    category: "Cross-Cultural",
    title: "Why Nigeria-China Business Deals Fail (And How to Fix Them)",
    excerpt: "Cultural misunderstandings cost businesses millions. Here's how to bridge the gap between Nigerian and Chinese business practices.",
    date: "March 8, 2026",
    slug: "nigeria-china-business-deals",
    featured: false,
  },
  {
    category: "Change Management",
    title: "Leading Through Uncertainty: A Framework for African Executives",
    excerpt: "A practical guide to steering your organization through economic shifts, political transitions, and market disruptions.",
    date: "March 1, 2026",
    slug: "leading-through-uncertainty",
    featured: false,
  },
  {
    category: "Coaching",
    title: "Why Every African CEO Needs an Executive Coach",
    excerpt: "The ROI of executive coaching is undeniable — but in the African context, it goes beyond performance metrics to cultural intelligence.",
    date: "Feb 22, 2026",
    slug: "african-ceo-executive-coach",
    featured: false,
  },
  {
    category: "Performance",
    title: "OKRs vs KPIs: What Works Best for African Organizations?",
    excerpt: "A deep dive into performance management frameworks and how to adapt them for the unique dynamics of African businesses.",
    date: "Feb 15, 2026",
    slug: "okrs-vs-kpis-african-organizations",
    featured: false,
  },
  {
    category: "Leadership",
    title: "The Rise of Female Leaders in Nigerian Business",
    excerpt: "Celebrating the women breaking barriers in boardrooms across Nigeria and how organizations can better support diverse leadership.",
    date: "Feb 8, 2026",
    slug: "female-leaders-nigerian-business",
    featured: false,
  },
]

const popularPosts = [
  { title: "5 Cultural Mistakes in Nigeria-China Deals", slug: "nigeria-china-business-deals" },
  { title: "The Leadership Gap in African Organizations", slug: "leadership-habits-nigerian-organizations" },
  { title: "How to Build a Performance Culture", slug: "okrs-vs-kpis-african-organizations" },
]

// Reusable card thumbnail
function CardThumbnail({ category }: { category: string }) {
  return (
    <div className="h-36 bg-gradient-to-br from-[#2A6B2A] to-[#1A3320] relative flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }}
      />
      <span className="relative z-10 bg-[#D4A017] text-[#1A3320] font-semibold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
        {category}
      </span>
    </div>
  )
}

// Sidebar newsletter signup
function SidebarNewsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubscribe = async () => {
    if (!email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email.')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'blog_sidebar' }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error()
      setStatus('success')
      setMessage('Subscribed! Check your inbox.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong.')
    }
  }

  return (
    <div className="bg-[#2A6B2A]/5 rounded-2xl p-6 border border-gray-100">
      <h3 className="font-serif text-lg font-semibold text-[#1A3320] mb-2">
        Stay Updated
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        Get the latest leadership insights delivered weekly.
      </p>
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setStatus('idle'); setMessage('') }}
        placeholder="Your email"
        disabled={status === 'loading' || status === 'success'}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm mb-3 outline-none focus:border-[#D4A017] transition-colors disabled:opacity-50"
      />
      <button
        onClick={handleSubscribe}
        disabled={status === 'loading' || status === 'success'}
        className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider text-xs py-2.5 px-4 rounded-lg w-full hover:bg-[#b8880f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed! ✓' : 'Subscribe'}
      </button>
      {message && (
        <p className={`text-xs mt-2 ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  )
}

export default function BlogContent() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? articles
    : articles.filter((a) => a.category === filter)

  return (
    <div className="grid lg:grid-cols-[1fr_300px] gap-12">

      {/* ── Articles ── */}
      <div>
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-[#D4A017] text-[#1A3320]'
                  : 'bg-gray-100 text-gray-500 hover:bg-[#D4A017]/10 hover:text-[#D4A017]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No articles in this category yet.</p>
            <button
              onClick={() => setFilter('All')}
              className="mt-4 text-[#D4A017] text-sm font-semibold hover:underline"
            >
              View all articles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((post, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardThumbnail category={post.category} />
                <div className="p-6">
                  <span className="text-[#D4A017] font-semibold text-xs uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#1A3320] mt-2 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="text-[#D4A017] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* ── Sidebar ── */}
      <aside className="space-y-6">

        {/* Newsletter */}
        <SidebarNewsletter />

        {/* Popular Posts */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-serif text-lg font-semibold text-[#1A3320] mb-4">
            Popular Posts
          </h3>
          <ul className="space-y-3">
            {popularPosts.map((post, i) => (
              <li key={i}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="text-sm text-gray-500 hover:text-[#D4A017] transition-colors flex items-start gap-2"
                >
                  <span className="text-[#D4A017] font-bold flex-shrink-0">{i + 1}.</span>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="font-serif text-lg font-semibold text-[#1A3320] mb-4">
            Categories
          </h3>
          <ul className="space-y-2">
            {categories.filter((c) => c !== 'All').map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setFilter(cat)}
                  className="text-sm text-gray-500 hover:text-[#D4A017] transition-colors text-left"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Card */}
        <div className="bg-[#1A3320] rounded-2xl p-6 text-center">
          <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-2">
            Ready to transform?
          </p>
          <p className="font-serif text-white font-semibold mb-4">
            Book a Free Discovery Call
          </p>
          <Link
            href="/book"
            className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider text-xs py-2.5 px-5 rounded-full inline-block hover:bg-[#b8880f] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </aside>
    </div>
  )
}
