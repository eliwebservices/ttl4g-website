import { Heart, Star, Globe, Lightbulb, Users, Zap } from 'lucide-react'
import Link from 'next/link'

const values = [
  { icon: Heart, title: "Integrity", desc: "We operate with transparency, honesty, and ethical commitment in every engagement." },
  { icon: Star, title: "Excellence", desc: "We deliver world-class programs that meet the highest international standards." },
  { icon: Globe, title: "Cultural Respect", desc: "We honor and leverage the richness of diverse cultures in every interaction." },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously evolve our methods to stay ahead of leadership trends." },
  { icon: Users, title: "Collaboration", desc: "We believe the best outcomes emerge from genuine partnership with our clients." },
  { icon: Zap, title: "Impact", desc: "We measure our success by the tangible transformation we create in organizations." },
]

const timeline = [
  { year: "2015", title: "Founded in Lagos", desc: "TTL4G began with a vision to elevate leadership standards across Nigeria." },
  { year: "2017", title: "Pan-African Expansion", desc: "Extended services to Ghana, Kenya, and South Africa." },
  { year: "2019", title: "Sino-Africa Program Launch", desc: "Launched our signature cross-cultural communication program for Nigeria-China business." },
  { year: "2021", title: "Global Partnerships", desc: "Formed strategic alliances with leadership institutes in Europe and North America." },
  { year: "2023", title: "Digital Transformation", desc: "Launched virtual coaching and AI-powered leadership assessment tools." },
  { year: "2025", title: "10,000+ Leaders Trained", desc: "Reached a milestone of transforming over 10,000 leaders across 6 countries." },
]

const teamRoles = [
  "Senior Consultant",
  "Lead Coach",
  "Cultural Advisor",
  "Program Director",
]

const accreditations = ["ICF", "SHRM", "CIPD", "ATD", "IODA"]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
            About TTL4G
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Story of Impact
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Proudly Nigerian, globally credible — building leaders who transform
            organizations across Africa and beyond.
          </p>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-6" />
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Photo placeholder */}
            <div className="bg-[#2A6B2A]/5 rounded-3xl aspect-[3/4] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-[#2A6B2A]/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-serif font-bold text-[#D4A017]">CEO</span>
                </div>
                <p className="text-sm text-gray-400">Professional Photo Placeholder</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
                Meet Our Founder
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#1A3320] mb-2">
                Dr. [Founder Name]
              </h2>
              <p className="font-serif text-lg text-[#D4A017] mb-6 italic">
                Founder & CEO, TTL4G
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                With over 20 years of experience in organizational development, cross-cultural
                leadership, and executive coaching, our founder established TTL4G with a singular
                mission: to raise a generation of African leaders who can compete and collaborate
                on the global stage.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Holding credentials from leading institutions across three continents, and having
                worked with multinational corporations, government agencies, and NGOs in Nigeria,
                China, Germany, and the United Kingdom, they bring a unique blend of global
                perspective and deep African insight.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Their passion lies in helping leaders discover their authentic voice while mastering
                the cross-cultural competencies needed to thrive in today's interconnected
                business world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Vision */}
            <div className="bg-[#2A6B2A]/5 rounded-2xl p-10 border-l-4 border-[#D4A017]">
              <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
                Our Vision
              </p>
              <p className="font-serif text-xl text-[#1A3320] leading-relaxed italic">
                "To be Africa's most trusted leadership development firm — shaping leaders
                who drive sustainable growth, bridge cultures, and transform their communities."
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#2A6B2A]/5 rounded-2xl p-10 border-l-4 border-[#D4A017]">
              <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
                Our Mission
              </p>
              <p className="font-serif text-xl text-[#1A3320] leading-relaxed italic">
                "To equip current and emerging leaders with the skills, mindset, and cultural
                intelligence needed to lead with excellence in a complex, globalized world."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              Our Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Milestones
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#D4A017] text-[#1A3320] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-[#D4A017]/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-serif text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              What Drives Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320]">
              Our Core Values
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-[#D4A017]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1A3320] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              Our People
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320]">
              Meet the Team
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {teamRoles.map((role, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 rounded-full bg-[#2A6B2A]/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-serif text-[#D4A017] text-lg font-bold">
                    {role.charAt(0)}
                  </span>
                </div>
                <p className="font-semibold text-sm text-[#1A3320]">Team Member</p>
                <p className="text-xs text-gray-400">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accreditations ── */}
      <section className="bg-[#FAF7F0] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              Accreditations & Partners
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {accreditations.map((name) => (
              <div
                key={name}
                className="px-6 py-3 border border-gray-200 rounded-lg text-sm font-semibold text-gray-400 hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A3320] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Let's start a conversation about how TTL4G can transform your organization.
          </p>
          <Link
            href="/book"
            className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full hover:bg-[#b8880f] transition-colors inline-block"
          >
            Book a Free Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
