import Link from 'next/link'
import { Trophy, TrendingUp, RefreshCw, Handshake, Target, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Trophy,
    title: "Leadership Development",
    desc: [
      "Our flagship leadership development programs are designed to build visionary, resilient, and culturally intelligent leaders who can navigate complex business environments across Africa and globally.",
      "We combine cutting-edge leadership theory with practical, contextualized application — drawing on real African business case studies, global best practices, and experiential learning methodologies.",
      "From emerging managers to C-suite executives, we offer tiered programs that develop leadership competencies at every organizational level.",
    ],
    audience: "CEOs, senior executives, mid-level managers, and high-potential emerging leaders.",
    outcomes: [
      "Enhanced strategic thinking and decision-making",
      "Stronger emotional intelligence and people management",
      "Increased organizational alignment and team performance",
      "Measurable leadership behavior change within 90 days",
    ],
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    desc: [
      "Transform your organization's approach to performance with systems that drive accountability, development, and results.",
      "We help you design and implement performance frameworks that go beyond annual reviews — creating a culture of continuous feedback, clear goal-setting, and data-driven talent decisions.",
      "Our approach integrates OKRs, balanced scorecards, and 360-degree feedback mechanisms tailored to your organizational culture.",
    ],
    audience: "HR directors, operations managers, and organizational development teams.",
    outcomes: [
      "Aligned individual and organizational goals",
      "Robust KPI and OKR frameworks",
      "Fair, transparent evaluation systems",
      "Improved employee engagement and retention",
    ],
  },
  {
    icon: RefreshCw,
    title: "Change Management",
    desc: [
      "Navigate organizational transformation with confidence and minimal disruption.",
      "Whether you're restructuring, merging, adopting new technology, or shifting culture, our change management programs prepare your leaders and teams to embrace change rather than resist it.",
      "We use proven frameworks like Kotter's 8-Step Model and ADKAR, adapted for the unique dynamics of African organizations.",
    ],
    audience: "Organizations undergoing mergers, restructuring, digital transformation, or cultural shifts.",
    outcomes: [
      "Reduced resistance to change",
      "Faster adoption of new processes and systems",
      "Maintained productivity during transitions",
      "Stronger change leadership capability",
    ],
  },
  {
    icon: Handshake,
    title: "Cross-Cultural Intelligence",
    desc: [
      "Master the art of doing business across cultures with our specialized cross-cultural intelligence programs.",
      "With deep expertise in Sino-Africa business dynamics and partnerships across Europe, India, and North America, we help your team avoid costly cultural misunderstandings and build stronger international relationships.",
      "Our training covers negotiation styles, communication protocols, relationship-building norms, and decision-making frameworks across cultures.",
    ],
    audience: "International business teams, export-import companies, diplomatic corps, and organizations with diverse workforces.",
    outcomes: [
      "Reduced cross-cultural conflict and misunderstanding",
      "Stronger international partnerships and deal closure rates",
      "Cultural competency certification for key team members",
      "Customized cultural playbooks for target markets",
    ],
  },
  {
    icon: Target,
    title: "Coaching & Capacity Building",
    desc: [
      "Unlock the full potential of your leaders through personalized, evidence-based coaching.",
      "Our ICF-aligned coaching programs pair your executives and emerging leaders with experienced coaches who understand the African business context.",
      "We offer one-on-one executive coaching, group coaching circles, and capacity building workshops that develop critical skills like strategic communication, conflict resolution, and executive presence.",
    ],
    audience: "Individual executives, leadership teams, and organizations investing in talent pipeline development.",
    outcomes: [
      "Personalized development plans with measurable goals",
      "Enhanced executive presence and communication",
      "Stronger talent pipeline and succession planning",
      "Sustainable behavior change and self-awareness",
    ],
  },
]

const culturalCards = [
  {
    flag: "🇨🇳",
    country: "China",
    focus: [
      "Guanxi and relationship-building",
      "Negotiation and face-saving protocols",
      "Hierarchical communication styles",
    ],
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    focus: [
      "Precision and process orientation",
      "Direct communication culture",
      "Consensus decision-making",
    ],
  },
  {
    flag: "🇮🇳",
    country: "India",
    focus: [
      "Hierarchical business structures",
      "Relationship-driven negotiations",
      "Contextual communication styles",
    ],
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    focus: [
      "Formal business etiquette",
      "Understated communication",
      "Committee-based decision-making",
    ],
  },
  {
    flag: "🇺🇸",
    country: "United States",
    focus: [
      "Results-oriented culture",
      "Informal communication style",
      "Speed-driven decision-making",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
            Our Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive Leadership Solutions
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Tailored programs that develop leaders, transform organizations, and bridge cultures.
          </p>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-6" />
        </div>
      </section>

      {/* ── Services List ── */}
      {services.map((s, i) => (
        <section
          key={i}
          className={`py-20 ${i % 2 === 0 ? 'bg-[#FAF7F0]' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Service Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-7 h-7 text-[#D4A017]" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1A3320]">
                  {s.title}
                </h2>
              </div>

              {/* Description paragraphs */}
              {s.desc.map((p, j) => (
                <p key={j} className="text-gray-500 leading-relaxed mb-4">{p}</p>
              ))}

              {/* Who it's for + Outcomes */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-3">
                    Who It's For
                  </p>
                  <p className="text-sm text-gray-500">{s.audience}</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-3">
                    Key Outcomes
                  </p>
                  <ul className="space-y-2">
                    {s.outcomes.map((o, k) => (
                      <li
                        key={k}
                        className="text-sm text-gray-500 flex items-start gap-2"
                      >
                        <span className="text-[#D4A017] mt-0.5 flex-shrink-0">•</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/book"
                className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full inline-block mt-8 hover:bg-[#b8880f] transition-colors"
              >
                Request This Service
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── Sino-Africa Highlight ── */}
      <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-5xl mb-4">🇳🇬 🤝 🇨🇳</p>
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
              Signature Specialization
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Sino-Africa Cross-Cultural Communication
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Our deepest area of expertise — helping Nigerian and Chinese professionals navigate
              workplace dynamics, negotiation styles, and partnership protocols. This program has
              helped dozens of organizations avoid costly misunderstandings and build thriving
              cross-border relationships.
            </p>
            <Link
              href="/cross-cultural"
              className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full inline-block hover:bg-[#b8880f] transition-colors"
            >
              Explore the Full Program
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cultural Awareness Cards ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              Cultural Awareness Training
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320]">
              Destination Culture Guides
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {culturalCards.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-4xl block mb-3">{c.flag}</span>
                <h3 className="font-serif text-lg font-semibold text-[#1A3320] mb-3">
                  {c.country}
                </h3>
                <ul className="text-xs text-gray-500 space-y-2 text-left">
                  {c.focus.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-[#D4A017] flex-shrink-0">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/cross-cultural"
                  className="text-[#D4A017] text-xs font-semibold inline-flex items-center gap-1 mt-4 hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-[#1A3320] mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call and we'll recommend the right program
            for your organization's specific needs.
          </p>
          <Link
            href="/book"
            className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full inline-block hover:bg-[#b8880f] transition-colors"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
