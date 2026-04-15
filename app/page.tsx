import Link from 'next/link'
import Image from 'next/image'
import {
  Trophy, TrendingUp, RefreshCw, Handshake, Target,
  Globe, Clock, Award, ArrowRight, Quote, Star, Briefcase
} from 'lucide-react'

// const services = [
//   { icon: Trophy, title: "Leadership Development", desc: "Equip your leaders with the mindset, skills, and strategies to drive organizational excellence and inspire high-performing teams." },
//   { icon: TrendingUp, title: "Performance Management", desc: "Build robust systems that align individual goals with business outcomes and create a culture of accountability and growth." },
//   { icon: RefreshCw, title: "Change Management", desc: "Navigate organizational transformation with confidence. We help your people embrace change and deliver results through transitions." },
//   { icon: Handshake, title: "Cross-Cultural Intelligence", desc: "Master the art of doing business across cultures — specializing in Sino-Africa partnerships and global business contexts." },
//   { icon: Target, title: "Coaching & Capacity Building", desc: "Unlock potential through personalized coaching programs that develop future-ready leaders at every level of your organization." },
// ]

const services = [
  {
    icon: Globe,
    title: "Building High-Performance Global Teams",
    desc: "Cross-cultural communication training that helps diverse teams collaborate effectively and deliver results across borders.",
  },
  {
    icon: Star,
    title: "Equipping Diplomats & Executives",
    desc: "Our signature Sino-Africa program — deep cross-cultural awareness for professionals working with Chinese partners and organizations.",
  },
  {
    icon: Target,
    title: "Coaching for Growth",
    desc: "Developing talent and driving performance — transforming managers into effective coaches who unlock their team's potential.",
  },
  {
    icon: TrendingUp,
    title: "Developing Strategic Leadership",
    desc: "From self-mastery to leading teams and ecosystems — building the mindset and skills of tomorrow's African leaders.",
  },
  {
    icon: RefreshCw,
    title: "Leading Through Change",
    desc: "Managing performance and transforming effectively — equipping leaders to guide organizations through uncertainty with confidence.",
  },
  {
    icon: Briefcase,
    title: "Business Setup in Nigeria",
    desc: "Company registration, tax clearance, audit, and HR recruitment — your trusted partner for entering the Nigerian market.",
  },
]


const whyCards = [
  { icon: Award, title: "Nigeria's Premier Leadership Firm", desc: "Trusted by top organizations across Nigeria and West Africa for transformative leadership programs." },
  { icon: Globe, title: "Cross-Cultural Expertise Across 6 Nations", desc: "Deep knowledge of business dynamics in China, Germany, India, UK, USA, and Nigeria." },
  { icon: Clock, title: "Your 24/7 Automated Business Partner", desc: "Smart systems that let you book, learn, and engage with us anytime — even while you sleep." },
]

const testimonials = [
  { name: "Adaeze Okwu", role: "HR Director", company: "Pan-African Holdings", quote: "TTL4G transformed how our senior leadership approaches change. The cross-cultural module was a game-changer for our China operations." },
  { name: "James Okafor", role: "CEO", company: "Nexus Group Nigeria", quote: "The coaching program delivered measurable results within 90 days. Our leadership pipeline has never been stronger." },
  { name: "Dr. Funke Adeyemi", role: "VP People & Culture", company: "Continental Bank", quote: "Their understanding of African business culture combined with global best practices sets them apart from any firm I've worked with." },
]

const blogPosts = [
  { category: "Leadership", title: "5 Leadership Habits That Transform Nigerian Organizations", excerpt: "Discover the daily practices that separate good managers from great leaders in the African business context.", date: "March 15, 2026", slug: "leadership-habits-nigerian-organizations" },
  { category: "Cross-Cultural", title: "Why Nigeria-China Business Deals Fail (And How to Fix Them)", excerpt: "Cultural misunderstandings cost businesses millions. Here's how to bridge the gap.", date: "March 8, 2026", slug: "nigeria-china-business-deals" },
  { category: "Change Management", title: "Leading Through Uncertainty: A Framework for African Executives", excerpt: "A practical guide to steering your organization through economic shifts and market disruptions.", date: "March 1, 2026", slug: "leading-through-uncertainty" },
]

const trustBadges = ["Serving Nigeria", "Pan-African Reach", "China-Africa Specialists", "Global Partners"]

const steps = [
  { num: "01", title: "Book a Discovery Call", desc: "Schedule a free 30-minute consultation to discuss your leadership challenges and goals." },
  { num: "02", title: "Get a Custom Training Plan", desc: "We design a tailored program based on your organization's unique needs and culture." },
  { num: "03", title: "Transform Your Team", desc: "Watch your leaders grow as we deliver impactful, measurable training and coaching." },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero-boardroom.jpg"
          alt="African business leaders in a boardroom"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay — this fixes the ugly text-on-image issue */}
        <div className="absolute inset-0 bg-[#1A3320]/75" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-4">
              Training The Leaders For Greatness
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Building Leaders Who Transform Organizations{' '}
              <span className="text-[#D4A017]">Across Africa and Beyond</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              Leadership Development • Cross-Cultural Intelligence • Coaching • Performance & Change Management
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full text-center hover:bg-[#b8880f] transition-colors"
              >
                Book a Free Discovery Call
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#D4A017] text-[#D4A017] font-semibold uppercase tracking-wider py-3 px-8 rounded-full text-center hover:bg-[#D4A017] hover:text-[#1A3320] transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-white py-5 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm font-semibold uppercase tracking-wider text-gray-500">
            {trustBadges.map((text, i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && <span className="w-px h-4 bg-[#D4A017]/40 hidden md:block" />}
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320]">
              Our Core Services
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#2A6B2A]/10 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-[#D4A017]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1A3320] mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <Link
                  href="/services"
                  className="text-[#D4A017] text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why TTL4G ── */}
      <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Why TTL4G?
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((c, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-[#D4A017]/30 flex items-center justify-center mx-auto mb-5">
                  <c.icon className="w-8 h-8 text-[#D4A017]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sino-Africa Spotlight ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl border border-[#D4A017]/20 overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
                  Signature Program
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1A3320] mb-4">
                  Do Business Across Cultures — Without the Costly Misunderstandings
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Our Sino-Africa Cross-Cultural Communication program helps Nigerian and Chinese
                  professionals navigate workplace dynamics, negotiation styles, and
                  relationship-building protocols that make or break international partnerships.
                </p>
                <Link
                  href="/cross-cultural"
                  className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full self-start hover:bg-[#b8880f] transition-colors"
                >
                  Discover the Program
                </Link>
              </div>
              <div className="bg-[#2A6B2A]/5 flex items-center justify-center p-10">
                <div className="text-center">
                  <p className="text-6xl mb-4">🇳🇬 🤝 🇨🇳</p>
                  <p className="font-serif text-lg font-semibold text-[#1A3320]">
                    Bridging Africa & Asia
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Cultural Intelligence for Global Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              Get Started
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320]">
              How It Works
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4A017] text-[#1A3320] font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-5">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1A3320] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320]">
              What Our Clients Say
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <Quote className="w-8 h-8 text-[#D4A017]/30 mb-4" />
                <p className="text-sm text-gray-500 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2A6B2A]/10 flex items-center justify-center text-[#D4A017] font-serif font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#1A3320]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              Latest Insights
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320]">
              From Our Blog
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div
                key={i}
                className="bg-[#FAF7F0] rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Card image placeholder */}
                <div className="h-40 bg-gradient-to-br from-[#2A6B2A] to-[#1A3320] relative flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)' }}
                  />
                  <span className="relative z-10 bg-[#D4A017] text-[#1A3320] font-semibold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
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
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Leaders Who Deliver?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Join the leading organizations across Africa who trust TTL4G to develop
            their most important asset — their people.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full hover:bg-[#b8880f] transition-colors"
            >
              Book Now
            </Link>
            <a
              href="tel:+2341234567890"
              className="text-[#D4A017] font-semibold text-sm hover:underline"
            >
              Or call: +234 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
