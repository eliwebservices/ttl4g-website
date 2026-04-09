import Link from 'next/link'
import CountrySelector from '@/components/sections/CountrySelector'
import LeadMagnetForm from '@/components/sections/LeadMagnetForm'

export default function CrossCulturalPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
            Cross-Cultural Intelligence Hub
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Bridge the Gap. Build the Partnership.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Navigate international business with confidence through our specialized
            cultural intelligence programs.
          </p>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-6" />
        </div>
      </section>

      {/* ── Interactive Country Selector ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              Explore Cultures
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320]">
              Select a Country
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
          </div>
          <CountrySelector />
        </div>
      </section>

      {/* ── Sino-Africa Deep Dive ── */}
      <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-5xl mb-4">🇳🇬 🤝 🇨🇳</p>
              <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
                Deep Dive
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
                Sino-Africa Specialists
              </h2>
              <div className="w-16 h-0.5 bg-[#D4A017] mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Nigerian Dynamics */}
              <div className="bg-white/5 rounded-2xl p-8 border border-[#D4A017]/20">
                <h3 className="font-serif text-xl font-semibold text-[#D4A017] mb-4">
                  Nigerian Workplace Dynamics
                </h3>
                <ul className="space-y-3 text-sm text-white/80">
                  {[
                    "Relationship-first business approach",
                    "Flexible, adaptive communication style",
                    "Respect for seniority and experience",
                    "Entrepreneurial spirit and innovation",
                    "Community-oriented decision-making",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D4A017] flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chinese Dynamics */}
              <div className="bg-white/5 rounded-2xl p-8 border border-[#D4A017]/20">
                <h3 className="font-serif text-xl font-semibold text-[#D4A017] mb-4">
                  Chinese Workplace Dynamics
                </h3>
                <ul className="space-y-3 text-sm text-white/80">
                  {[
                    "Guanxi-driven relationship networks",
                    "Hierarchical respect and face-saving",
                    "Long-term strategic orientation",
                    "Group harmony over individual expression",
                    "Ritualized business protocols",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#D4A017] flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-white/70 text-lg mb-8">
              When these two powerful business cultures meet, understanding the differences —
              and the surprising similarities — is the key to building partnerships that last.
            </p>

            <div className="flex justify-center">
              <Link
                href="/book"
                className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full hover:bg-[#b8880f] transition-colors"
              >
                Book a Sino-Africa Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lead Magnet ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#D4A017]/20 p-10 md:p-14 text-center shadow-lg">
            <span className="text-4xl block mb-4">📘</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1A3320] mb-4">
              Free Guide: 5 Cultural Mistakes That Kill Nigeria-China Business Deals
            </h2>
            <p className="text-gray-500 mb-8">
              Download our most popular resource — packed with real case studies and
              actionable strategies for successful cross-cultural partnerships.
            </p>
            <LeadMagnetForm />
          </div>
        </div>
      </section>
    </>
  )
}
