import { Heart, Brain, Globe, Lightbulb, Users, Zap, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  { icon: Brain, title: "Insight", desc: "We discover hidden patterns that unlock meaningful change and we teach our clients to see it too, because Insight isn't value until it's shared." },
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
      "Growing up in a mixed Chinese-Nigerian household, I didn't fully grasp my heritage until my early twenties. That changed when a magazine asked me to write an article titled \"A Bicultural Balance: A Bicultural Balance: Raised in a Chinese-Nigerian Household — a Chinese-African Master's Juggling Two Cultures.\" Writing it forced me to finally ask: Who am I, culturally?",
      "People often ask, \"Do you identify more as Chinese or Nigerian?\" My honest answer: it depends on the context. That's not avoidance — it's the reality of living between two worlds. I don't have to choose; I get to embody both.",
      "I love both cuisines. My Chinese top three: egg fried rice, braised chicken, sizzling beef with onions. My Nigerian top three: plantain, Jollof rice with chicken, and savory Egusi with Eba or pounded yam. In health and wellness, Chinese culture takes the lead — drinking warm water is second nature, and I sometimes boil apples, pears with goji berries, hawthorns and dates. With my own creativity, I now add cinnamon for enhanced flavour.",
      "In language and humor, Nigerian Pidgin English is genuinely fun and full of life. The rhythm, the wit, the way people stretch a word for effect — it always makes me laugh. Nigeria is wonderfully multi-ethnic, and Pidgin acts as a cultural glue, bringing everyone together regardless of tribe or status. It's a masterclass in how language builds bridges.",
      "My master's degree in the UK, my years within Beijing's international community, and my travels exposed me to many cultures. Through those experiences, I came to understand that there are cultures we are born into — biological and family heritage — and cultures we grow into through the places we live, the people we meet, and the environments we work in. Today, I am comfortable integrating what I love from Chinese, Nigerian, Western, and Middle Eastern cultures. Call it \"Annie's Culture.\"",
      "That's why I've decided to invest more of myself in building bridges — starting with China and Nigeria. I've noticed something interesting: when I'm in Nigeria, I naturally find myself protecting China's image; when I'm in China, I protect Nigeria's. Despite growing trade between the two countries, the cultures still know surprisingly little about each other. Through my work and lived experience, I want to help change that — one conversation, one project, one moment of genuine understanding at a time.",
    ],
  },
  {
    title: "A Journey That Deepened My Perspective",
    preview: "I love traveling — Singapore, Turkey, Israel. But one trip stood out not for relaxation but for a profound lesson on peace and perception...",
    content: [
      "I love travelling. So far I have a few favourites — Singapore, Turkey, Israel. But one trip stood out not for relaxation, but for a profound lesson on peace and perception.",
      "In October 2023, I visited Israel. On Thursday, October 5th, I was in Shaar HaNegev, right on the western border of the Gaza Strip. Everything was peaceful. Quiet. Normal. The skies were blue, the sun burning hot. We even visited a bomb shelter — the kind locals run into during warnings. At the time, it didn't feel like a current necessity.",
      "On Saturday, October 7th, I left for the airport around 5:00 AM. I checked in and waited to board like any other traveller. Then I received a text from a friend in Beijing: \"Are you ok? Is everything fine with you?\" I was confused. I hadn't heard the news. The area we'd visited just two days prior had erupted into chaos.",
      "Then an announcement came over the loudspeaker. A staff member calmly asked us to step away from the windows and gather toward the center of the terminal. An elderly Israeli man nearby was receiving updates on his phone. He mentioned that in situations like this, airports often close. Concern flickered in his eyes. I gently reassured him: \"Don't worry — the airport will not shut down and our flight will take off.\" The visit to the bomb shelter two days earlier now seemed like a rehearsal.",
      "While we waited, the elderly Israeli man and I fell into a beautiful conversation. I learned more about Israel, the Jewish people, and their culture directly from a local — the kind of insight no article can give you. I was delighted to discover he had even been to China. A genuine moment of human connection, right in the middle of a deeply unsettling situation. The flight finally took off. We said our goodbyes before catching different connecting flights. We may never meet again, but he is part of my story.",
      "Later, I found out that a missile had been fired toward Tel Aviv's International Airport and was intercepted. I was sitting in that terminal when it happened.",
      "I don't tell this story to dramatize. Many have suffered far worse. But for me, it was a moment of crystallization — a sharp reminder of how quickly things can change. What stayed with me wasn't fear, but a clearer sense of what truly matters: to live with more love. To impact people positively — even if just with a smile. Being in Israel on October 7th taught me that our understanding of other cultures is often shaped by incomplete pictures — and that real exposure changes everything.",
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
          Building Leaders Who Transform Organizations <br/>
            and Impact Society
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Leadership Development • Cross-Cultural Intelligence • Coaching • Performance & Change Management
          </p>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-6" />
        </div>
      </section>

      {/* ── Founder ── */}
      {/*
        Layout: Two-column on md+ (photo left, bio right), single column on mobile.
        Photo: IMG_8939 — Annie seated at a flipchart in a professional workshop setting.
        Chosen for its relaxed-yet-commanding presence, ideal for a founder portrait.
      */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

            {/* Founder photo — left column */}
            <div className="sticky top-20">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] relative shadow-xl">
                <Image
                  src="/images/anni_professional.jpg"
                  alt="Annie Wong facilitating a leadership workshop"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Decorative gold accent bar */}
              <div className="absolute -bottom-4 -left-4 w-24 h-1.5 bg-[#D4A017] rounded-full" />
            </div>

            {/* Bio — right column */}
            <div>
              <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
                Meet Our Founder
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3320] mb-2">
                Annie Wong
              </h2>
              <p className="font-serif text-lg text-[#D4A017] mb-6 italic">
                Founder & CEO, TTL4G
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
              Annie Wong is a Chinese-Nigerian entrepreneur who transforms intercultural and leadership dynamics from challenges into strategic advantages. Leveraging her unique bicultural heritage and a professional toolkit built for global business, she helps organizations and their people perform at their best — across cultures, borders, and contexts. 
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
              With a 20-year career spanning NGOs and multinationals, Annie has developed deep expertise in leadership development, performance management, executive coaching, and talent development. Over the years, she has trained and coached hundreds of leaders across different levels — from emerging talent to senior management — equipping them with the clarity, skills, leadership assessment capabilities, and mindset to lead with impact. Her Master's degree in Intercultural Communication enables her to translate theory into actionable, culturally-informed insight.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
              As a certified coach and change practitioner, Annie provides expert guidance throughout the entire learning and application journey — ensuring that her consultation and training directly support key organizational objectives: improving outcomes, retaining talent, and strengthening team cohesion.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
              In 2026, Annie is channelling this expertise into TTL4G — a venture focused on human resource development and Sino-African partnership building, with a mission of building leaders who transform organizations and impact society.
              </p>
              <p className="text-gray-500 leading-relaxed">
              
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beyond the Boardroom ── */}
      {/*
        Full-width band placed between the Founder bio and the Stories section.
        Photo: 20141213_143241 — Annie holding a smiling child at a Chinese orphanage.
        Chosen over the floor-group shot for its warmth and emotional resonance.
        Layout: photo left (fixed height), pull-quote + caption right.
        Stacks vertically on mobile with photo on top.
      */}
      <section className="bg-[#1A3320]">
        <div className="grid md:grid-cols-2 min-h-[420px]">

          {/* Photo — fills left half on desktop, full width on mobile */}
          <div className="relative h-72 md:h-auto">
            <Image
              src="/images/anni_charity_c.jpg"
              alt="Annie Wong with children during charitable work in China"
              fill
              className="object-cover object-center"
            />
            {/* Subtle dark overlay for legibility on very bright images */}
            <div className="absolute inset-0 bg-[#1A3320]/20" />
          </div>

          {/* Pull-quote — right half */}
          <div className="flex flex-col justify-center px-10 py-14 md:px-16">
            <div className="w-10 h-0.5 bg-[#D4A017] mb-6" />
            <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-xs mb-4">
              Beyond the Boardroom
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl text-white leading-snug mb-6 italic">
              "To live with more love. To impact people positively — even if just with a smile."
            </blockquote>
            <p className="text-white/60 leading-relaxed max-w-sm">
            Beyond her professional work, Annie is committed to empowerment through action. She actively supports charitable initiatives for orphans and at-risk children across China, Uganda, and the Middle East, and engages with communities dedicated to helping people move from self-doubt into lives of purpose and bold impact.
Annie is also a writer and author, whose work reflects her passion for faith, personal growth, and human connection.
            </p>
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
      {/* <section className="bg-[#1A3320] py-20">
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
      </section> */}

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
