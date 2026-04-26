import Link from 'next/link'
import { Trophy, TrendingUp, RefreshCw, Handshake, Target, ArrowRight, Briefcase } from 'lucide-react'

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

const trainingServices = [
  {
    title: "Building High-Performance Global Teams",
    subtitle: "Cross-Cultural Communication for Collaboration & Results",
    desc: [
      "In today's interconnected business world, the ability to build and lead high-performing teams across cultures is a critical competitive advantage.",
      "This program equips leaders and team members with the cross-cultural communication skills, frameworks, and mindsets needed to collaborate effectively across nationalities, time zones, and cultural backgrounds.",
      "Participants learn to navigate cultural differences, resolve cross-cultural conflicts, and harness diversity as a driver of innovation and performance.",
    ],
    audience: "Multinational teams, international project managers, HR leaders, and organizations with diverse or global workforces.",
    outcomes: [
      "Enhanced cross-cultural communication and team cohesion",
      "Reduced friction and misunderstanding in diverse teams",
      "Practical tools for leading multicultural meetings and projects",
      "Measurable improvement in team collaboration and output",
    ],
  },
  {
    title: "Equipping Diplomats and Executives",
    subtitle: "Cross-Cultural Awareness for China/Nigeria",
    desc: [
      "Our signature Sino-Africa program prepares Nigerian and African professionals for the unique cultural dynamics of working with Chinese partners, colleagues, and organizations.",
      "From understanding Guanxi and Mianzi to mastering banquet etiquette, negotiation pacing, and hierarchical communication, this program gives participants a decisive edge in China-Africa business relationships.",
      "Equally valuable for Chinese professionals working in Nigeria and Africa, helping them build authentic partnerships that last.",
    ],
    audience: "Diplomats, government officials, business executives, and professionals engaged in Nigeria-China or Africa-China partnerships.",
    outcomes: [
      "Deep understanding of Chinese business culture and protocols",
      "Confidence in high-stakes Sino-Africa negotiations",
      "Ability to build lasting Guanxi-based relationships",
      "Reduced cultural mistakes that cost deals and partnerships",
    ],
  },
  {
    title: "Coaching for Growth",
    subtitle: "Developing Talent & Driving Performance as a Leader",
    desc: [
      "Great leaders are great coaches. This program transforms managers and executives into effective coaches who unlock the potential of their teams.",
      "Using ICF-aligned coaching methodologies adapted for the African business context, participants develop the skills to have powerful coaching conversations, set meaningful goals, and drive sustained performance improvement.",
      "The program includes one-on-one coaching practice sessions, peer coaching circles, and real-world application assignments.",
    ],
    audience: "Managers, team leaders, HR professionals, and executives who want to build a coaching culture within their organizations.",
    outcomes: [
      "Mastery of core coaching skills and ICF-aligned frameworks",
      "Ability to conduct effective performance coaching conversations",
      "Stronger talent development and retention outcomes",
      "A thriving coaching culture within the organization",
    ],
  },
  {
    title: "Developing Strategic Leadership",
    subtitle: "From Self-Mastery to Leading Teams and Ecosystems",
    desc: [
      "This flagship leadership development program takes leaders on a transformational journey — from deep self-awareness and personal mastery to strategic team leadership and ecosystem-level influence.",
      "Combining cutting-edge leadership science with leadership wisdom, the program develops the mindset, emotional intelligence, and strategic vision required to lead in complex, rapidly changing environments.",
      "Delivered in tiered modules for emerging leaders, mid-level managers, and senior executives.",
    ],
    audience: "Emerging leaders, mid-level managers, senior executives, and high-potential talent across all industries.",
    outcomes: [
      "Heightened self-awareness and emotional intelligence",
      "Stronger strategic thinking and decision-making capability",
      "Ability to lead teams, organizations, and cross-sector ecosystems",
      "Authentic leadership presence and executive confidence",
    ],
  },
  {
    title: "Leading Through Change",
    subtitle: "Managing Performance & Transforming Effectively",
    desc: [
      "Change is the only constant — and how leaders navigate it determines organizational survival and success.",
      "This program equips leaders with proven change management frameworks (including Kotter's 8-Step Model and ADKAR) adapted for the realities of African organizations — where change often meets cultural resistance, resource constraints, and political complexity.",
      "Participants develop the skills to lead transformations confidently, maintain team performance during uncertainty, and embed change sustainably.",
    ],
    audience: "Leaders and teams navigating mergers, restructuring, digital transformation, cultural shifts, or rapid growth.",
    outcomes: [
      "Confidence in leading complex organizational transformations",
      "Practical change management tools and communication plans",
      "Reduced resistance and faster adoption across teams",
      "Sustained performance through periods of transition",
    ],
  },
  {
    title: "Transforming Learning & Development",
    subtitle: "From Support Function to Strategic Business Partner",
    desc: [
      "Too many L&D functions are seen as administrative overhead rather than strategic drivers of business performance. This program changes that.",
      "Designed for L&D managers and HR leaders, this program teaches how to align learning initiatives with business strategy, measure training ROI, and position the L&D function as an indispensable partner to the C-suite.",
      "Participants leave with a clear L&D transformation roadmap tailored to their organization's specific context and goals.",
    ],
    audience: "L&D managers, HR directors, Chief People Officers, and organizational development professionals.",
    outcomes: [
      "A strategic L&D framework aligned with business objectives",
      "Skills to measure and communicate training ROI to leadership",
      "Repositioned L&D as a revenue-generating strategic function",
      "A practical L&D transformation roadmap ready for implementation",
    ],
  },
]

const consultingServices = [
  {
    title: "Business Setup in Nigeria",
    subtitle: "Registration, Compliance & HR Services",
    desc: [
      "Entering the Nigerian market is a significant opportunity — but navigating the regulatory, legal, and human capital landscape requires expert local knowledge.",
      "TTL4G's Business Consulting division guides international companies and entrepreneurs through every step of establishing a compliant, business presence in Nigeria.",
      "From company registration and tax clearance to audit preparation and recruitment of management staff, we are your trusted on-the-ground partner.",
    ],
    audience: "International companies entering Nigeria, foreign investors, diaspora entrepreneurs, and organizations expanding their Nigerian operations.",
    outcomes: [
      "Seamless company registration and legal compliance",
      "Tax clearance and audit readiness",
      "Recruitment of qualified management and HR staff",
      "A fully operational, compliant Nigerian business entity",
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
            Tailored training programs and business consulting services that develop
            leaders, transform organizations, and bridge cultures.
          </p>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-6" />
        </div>
      </section>

      {/* ── Training & Development Category Header ── */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-6 h-6 text-[#D4A017]" />
            </div>
            <div>
              <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-0.5">
                Category 01
              </p>
              <h2 className="font-serif text-2xl font-bold text-[#1A3320]">
                Training & Development
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── Training Services List ── */}
      {trainingServices.map((s, i) => (
        <section
          key={i}
          className={`py-20 ${i % 2 === 0 ? 'bg-[#FAF7F0]' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A3320]">
                  {s.title}
                </h3>
                <p className="text-[#D4A017] font-semibold mt-1">{s.subtitle}</p>
              </div>
              {s.desc.map((p, j) => (
                <p key={j} className="text-gray-500 leading-relaxed mb-4">{p}</p>
              ))}
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
                      <li key={k} className="text-sm text-gray-500 flex items-start gap-2">
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
                Request This Training
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── Business Consulting Category Header ── */}
      <section className="bg-[#1A3320] py-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-[#D4A017]" />
            </div>
            <div>
              <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-0.5">
                Category 02
              </p>
              <h2 className="font-serif text-2xl font-bold text-white">
                Business Consulting
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── Consulting Services List ── */}
      {consultingServices.map((s, i) => (
        <section key={i} className="bg-[#FAF7F0] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A3320]">
                  {s.title}
                </h3>
                <p className="text-[#D4A017] font-semibold mt-1">{s.subtitle}</p>
              </div>
              {s.desc.map((p, j) => (
                <p key={j} className="text-gray-500 leading-relaxed mb-4">{p}</p>
              ))}
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
                      <li key={k} className="text-sm text-gray-500 flex items-start gap-2">
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
              Our deepest area of expertise — helping Nigerian and Chinese professionals
              navigate workplace dynamics, negotiation styles, and partnership protocols.
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
            Book a free 30-minute discovery call and we'll recommend the right
            program for your organization's specific needs.
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

