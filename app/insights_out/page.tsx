import { ArrowRight } from 'lucide-react'
import BlogContent from '@/components/sections/BlogContent'

const featuredArticle = {
  category: "Leadership",
  title: "5 Leadership Habits That Transform Nigerian Organizations",
  excerpt: "Discover the daily practices that separate good managers from great leaders in the African business context. From morning rituals to strategic delegation, these habits are game-changers.",
  date: "March 15, 2026",
  slug: "leadership-habits-nigerian-organizations",
}

export default function InsightsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
            Resources & Insights
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership Insights
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Expert perspectives on leadership, cross-cultural business, change management,
            and organizational excellence.
          </p>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-6" />
        </div>
      </section>

      {/* ── Featured Article ── */}
      <section className="bg-[#FAF7F0] py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Thumbnail */}
              <div className="bg-gradient-to-br from-[#2A6B2A] to-[#1A3320] min-h-[250px] relative flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }}
                />
                <span className="relative z-10 bg-[#D4A017] text-[#1A3320] font-semibold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {featuredArticle.category}
                </span>
              </div>
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-2">
                  Featured · {featuredArticle.category}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#1A3320] mb-3">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{featuredArticle.date}</span>
                  <a
                    href={`/insights/${featuredArticle.slug}`}
                    className="text-[#D4A017] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Content (filter + grid + sidebar) ── */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <BlogContent />
        </div>
      </section>
    </>
  )
}
