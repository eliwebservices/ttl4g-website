import { Heart, Star, Globe, Lightbulb, Users, Zap, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  { icon: Heart, title: "Integrity", desc: "We operate with transparency, honesty, and ethical commitment in every engagement." },
  // { icon: Star, title: "Excellence", desc: "We deliver world-class programs that meet the highest international standards." },
  // { icon: Globe, title: "Cultural Respect", desc: "We honor and leverage the richness of diverse cultures in every interaction." },
  // { icon: Lightbulb, title: "Innovation", desc: "We continuously evolve our methods to stay ahead of leadership trends." },
  // { icon: Users, title: "Collaboration", desc: "We believe the best outcomes emerge from genuine partnership with our clients." },
  { icon: Zap, title: "Impact", desc: "We measure our success by the tangible transformation we create in organizations." },
]

// const timeline = [
//   { year: "2015", title: "Founded in Lagos", desc: "TTL4G began with a vision to elevate leadership standards across Nigeria." },
//   { year: "2017", title: "Pan-African Expansion", desc: "Extended services to Ghana, Kenya, and South Africa." },
//   { year: "2019", title: "Sino-Africa Program Launch", desc: "Launched our signature cross-cultural communication program for Nigeria-China business." },
//   { year: "2021", title: "Global Partnerships", desc: "Formed strategic alliances with leadership institutes in Europe and North America." },
//   { year: "2023", title: "Digital Transformation", desc: "Launched virtual coaching and AI-powered leadership assessment tools." },
//   { year: "2025", title: "10,000+ Leaders Trained", desc: "Reached a milestone of transforming over 10,000 leaders across 6 countries." },
// ]

const timeline = [
  { year: "2004", title: "A Career Begins", desc: "Annie began a 20-year journey working with NGOs and multinational corporations, gaining frontline experience in leadership development, change management, and cross-cultural communication." },
  { year: "2010", title: "Master's in the UK", desc: "Annie earned a Master's degree in Intercultural Communication from a leading UK institution, building the academic foundation to translate cultural theory into actionable business insight." },
  { year: "2014", title: "Beijing & The International Community", desc: "Living and working within Beijing's international community deepened Annie's understanding of Chinese business culture, Guanxi networks, and the dynamics of Sino-African partnerships." },
  { year: "2018", title: "Humanitarian Engagement", desc: "Annie extended her commitment to impact beyond the boardroom — supporting charitable initiatives for orphans and at-risk children in China, Uganda, and the Middle East." },
  { year: "2023", title: "A Defining Moment in Israel", desc: "Travelling to Israel days before the October 7th conflict crystallized Annie's conviction: real cultural exposure changes everything. It deepened her resolve to build bridges between people and nations." },
  { year: "2026", title: "TTL4G is Born", desc: "Annie channelled two decades of expertise into founding TTL4G — a human resource development and Sino-African partnership consultancy making her life's work exceptionally timely and impactful." },
]


const teamRoles = [
  "Senior Consultant",
  "Lead Coach",
  "Cultural Advisor",
  "Program Director",
]

const accreditations = ["ICF", "SHRM", "CIPD", "ATD", "IODA"]

const stories = [
  {
    title: "A Bicultural Balance: Raised in a Chinese-Nigerian Household",
    preview: "Growing up in a mixed-race Chinese-Nigerian household, I didn't fully grasp my heritage until my early twenties...",
    content: [
      "Growing up in a mixed-race Chinese-Nigerian household, I didn't fully grasp my heritage until my early twenties. That changed when a magazine asked me to write an article titled, \"A Bicultural Balance: Raised in a Chinese Nigerian Household, a Chinese African Master's Juggling Two Cultures.\" Writing it forced me to finally ask: Who am I, culturally?",
      "People often ask, \"Do you identify more as Chinese or Nigerian?\" The honest answer: It depends on the context. That's not avoidance — it's the reality of living between two worlds. I don't have to choose; I get to embody both.",
      "I love both cuisines. My Chinese top three: egg fried rice, braised chicken, sizzling beef with onions. My Nigerian top three: plantain, Jollof rice with chicken, savory Egusi with Eba or pounded yam. In health and wellness, Chinese culture took the lead — drinking warm water is second nature; I sometimes boil pears with goji berries and dates.",
      "In language and humor, Nigerian Pidgin English is genuinely fun and hilarious. The rhythm, the wit, the way people stretch a word for effect — it always makes me laugh. Nigeria is multi-ethnic, and Pidgin English acts as the cultural glue, unifying everyone regardless of tribe or status. It's a masterclass in how language builds bridges.",
      "My master's degree in the UK, my time with Beijing's international community, and my travels exposed me to many cultures. I learned there are biological cultures we are born into (family, heritage) and inherited cultures we gain through experience (places we live, people we meet, companies we work for). Today, I'm comfortable integrating what I love from Chinese, Nigerian, Western, and Middle Eastern cultures. Call it \"Annie's Culture.\"",
      "That's why I've decided to spend more time building bridges — starting with China and Nigeria. I've noticed: when I'm in Nigeria, I naturally protect China's image; when I'm in China, I protect Nigeria's image. Despite increased trade, the two cultures know little about each other. Through my professional expertise, I want to build real connections — one conversation, one project, one moment of understanding at a time.",
    ],
  },
  {
    title: "A Journey That Deepened My Perspective",
    preview: "I love traveling — Singapore, Turkey, Israel. But one trip stood out not for relaxation but for a profound lesson on peace and perception...",
    content: [
      "I love traveling — Singapore, Turkey, Israel. But one trip stood out not for relaxation but for a profound lesson on peace and perception.",
      "In October 2023, I visited Israel. On Thursday, October 5th, I was in Shaar HaNegev, right on the western border of the Gaza strip. Everything was peaceful. Quiet. Normal. The skies were blue, the sun burning hot. We even visited a bomb shelter where locals run during warnings. At the time, it didn't feel like a current necessity.",
      "On Saturday, October 7th, I left for the airport around 5:00 AM. I checked in, waiting to board like any other traveler. Then a text from a friend in Beijing: \"Are you ok? Is everything fine with you?\" I was confused. I hadn't heard the news. The area we'd visited just two days prior had erupted into chaos.",
      "An announcement came over the loudspeaker. Calmly, staff asked us to move away from the windows and gather toward the center of the terminal. An elderly Israeli man receiving updates on his phone told me that in similar situations, airports often close. Concern flickered in his eyes. I gently reassured him, \"Don't worry. The airport will not shut down and our flight will take off.\" The visit to the bomb shelter two days earlier now seemed like a rehearsal.",
      "While we waited, we had a beautiful exchange. I learned more about Israel, the Jewish people, and their culture from a local. I was fascinated to learn he had even been to China before. A moment of connection right in the middle of a difficult situation. The flight finally took off. We said goodbye to catch different connecting flights. We may never meet again, but he is part of my story.",
      "Later, I found out a missile had been fired toward Tel Aviv's International Airport and was intercepted. I was sitting in that terminal when it happened.",
      "I don't tell this story to dramatize. Many have suffered far worse. But for me, it was a moment of crystallization — how quickly things can change. What stayed with me wasn't fear, but a clearer sense of what matters: to live with more love. To impact people positively — even if just with a smile. Being in Israel on October 7th taught me that our understanding of other cultures is often shaped by incomplete pictures — and that real exposure changes everything.",
    ],
  },
]

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
            organizations and impact society.
          </p>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-6" />
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* 
              Photo placeholder — replace src with Annie's actual photo.
              Image sourced from Unsplash (professional African businesswoman).
              Replace with: src="/images/annie-wong.jpg" once client provides photo.
            */}
            <div className="rounded-3xl overflow-hidden aspect-[3/4] relative shadow-lg">
              <Image
                src="/images/annie-about-img-inc.png"
                alt="Annie Wong — Founder & CEO, TTL4G"
                fill
                className="object-cover"
              />
            </div>

            {/* Bio */}
            <div>
              <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
                Meet Our Founder
              </p>
              <h2 className="font-serif text-3xl font-bold text-[#1A3320] mb-2">
                Annie Wong
              </h2>
              <p className="font-serif text-lg text-[#D4A017] mb-6 italic">
                Founder & CEO, TTL4G
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Annie Wong is a Chinese-Nigerian who, leveraging her unique heritage and a
                professional toolkit built for global business, transforms intercultural and
                leadership dynamics from challenges into strategic advantages.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Her 20-year career in NGOs and multinationals has equipped her with a pragmatic
                understanding of the communication and performance gaps that arise from cultural
                misunderstandings across Chinese, African, and Western contexts. Annie's
                cross-cultural perspective is powered by a Master's degree in Intercultural
                Communication, enabling her to translate theory into actionable insight.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                As a certified coach and change practitioner, Annie provides expert guidance
                in supporting businesses and training participants throughout their learning
                and application journey. Her extensive background in leadership development
                and change management — including training hundreds of leaders at different
                levels — ensures that her consultation and training directly support key
                organizational objectives: improving outcomes, retaining talent, and
                strengthening team cohesion.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                In 2026, Annie is channeling this expertise into TTL4G — a new venture focused
                on human resource development and Sino-African partnership building, making
                her current work exceptionally timely and impactful.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Annie further extends her commitment to empowerment through humanitarian
                engagement, supporting charitable initiatives for orphans and at-risk children
                in China, Uganda, and the Middle East. Beyond her professional and humanitarian
                work, Annie enjoys writing during her free time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Annie's Cross-Cultural Stories ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
              In Her Own Words
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320]">
              Annie's Cross-Cultural Stories
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Personal stories that shaped a cross-cultural expert — and a bridge-builder
              between China, Nigeria, and the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {stories.map((story, i) => (
              <div
                key={i}
                className="bg-[#FAF7F0] rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Story header */}
                <div className="bg-[#1A3320] px-8 py-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#D4A017]/20 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-[#D4A017]" />
                    </div>
                    <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs">
                      Story {i + 1}
                    </p>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white leading-snug">
                    {story.title}
                  </h3>
                </div>

                {/* Story body */}
                <div className="px-8 py-6">
                  {story.content.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-gray-600 text-sm leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      {/* <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            Vision
            <div className="bg-white rounded-2xl p-10 border-l-4 border-[#D4A017]">
              <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
                Our Vision
              </p>
              <p className="font-serif text-xl text-[#1A3320] leading-relaxed italic">
                "To be Africa's most trusted leadership development firm — shaping leaders
                who drive sustainable growth, bridge cultures, and transform their communities."
              </p>
            </div>

            Mission
            <div className="bg-white rounded-2xl p-10 border-l-4 border-[#D4A017]">
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
      </section> */}

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
      {/* <section className="bg-white py-20">
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
      </section> */}

      {/* ── Accreditations ── */}
      {/* <section className="bg-[#FAF7F0] py-16">
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
      </section> */}

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
