import { Brain, Heart, Zap, BookOpen, Quote } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const values = [
  {
    icon: Brain,
    title: 'Insight',
    desc: "We discover hidden patterns that unlock meaningful change — and we teach our clients to see them too, because insight isn't value until it's shared.",
  },
  {
    icon: Heart,
    title: 'Integrity',
    desc: 'We operate with transparency, honesty, and ethical commitment in every engagement.',
  },
  {
    icon: Zap,
    title: 'Impact',
    desc: 'We measure our success by the tangible transformation we create in people and organizations.',
  },
]

const timeline = [
  {
    year: '2004',
    title: 'A Career Begins',
    desc: 'Annie began a 20-year journey working with NGOs and multinational corporations, gaining frontline experience in leadership development, change management, and cross-cultural communication.',
  },
  {
    year: '2010',
    title: "Master's in the UK",
    desc: "Annie earned a Master's degree in Intercultural Communication from a leading UK institution, building the academic foundation to translate cultural theory into actionable business insight.",
  },
  {
    year: '2014',
    title: 'Beijing & The International Community',
    desc: "Living and working within Beijing's international community deepened Annie's understanding of Chinese business culture, Guanxi networks, and the dynamics of Sino-African partnerships.",
  },
  {
    year: '2018',
    title: 'Humanitarian Engagement',
    desc: 'Annie extended her commitment to impact beyond the boardroom — supporting charitable initiatives for orphans and at-risk children in China, Uganda, and the Middle East.',
  },
  {
    year: '2023',
    title: 'A Defining Moment in Israel',
    desc: "Travelling to Israel days before the October 7th conflict crystallized Annie's conviction: real cultural exposure changes everything. It deepened her resolve to build bridges between people and nations.",
  },
  {
    year: '2026',
    title: 'TTL4G is Born',
    desc: "Annie channelled two decades of expertise into founding TTL4G — a human resource development and Sino-African partnership consultancy making her life's work exceptionally timely and impactful.",
  },
]

const stories = [
  {
    title: 'A Bicultural Balance: Raised in a Chinese-Nigerian Household',
    content: [
      "Growing up in a mixed Chinese-Nigerian household, I didn't fully grasp my heritage until my early twenties. That changed when a magazine asked me to write an article titled \"A Bicultural Balance: Raised in a Chinese-Nigerian Household — a Chinese-African Master's Juggling Two Cultures.\" Writing it forced me to finally ask: Who am I, culturally?",
      "People often ask, \"Do you identify more as Chinese or Nigerian?\" My honest answer: it depends on the context. That's not avoidance — it's the reality of living between two worlds. I don't have to choose; I get to embody both.",
      'I love both cuisines. My Chinese top three: egg fried rice, braised chicken, sizzling beef with onions. My Nigerian top three: plantain, Jollof rice with chicken, and savory Egusi with Eba or pounded yam. In health and wellness, Chinese culture takes the lead — drinking warm water is second nature, and I sometimes boil apples, pears with goji berries, hawthorns and dates. With my own creativity, I now add cinnamon for enhanced flavour.',
      "In language and humor, Nigerian Pidgin English is genuinely fun and full of life. The rhythm, the wit, the way people stretch a word for effect — it always makes me laugh. Nigeria is wonderfully multi-ethnic, and Pidgin acts as a cultural glue, bringing everyone together regardless of tribe or status. It's a masterclass in how language builds bridges.",
      'My master\'s degree in the UK, my years within Beijing\'s international community, and my travels exposed me to many cultures. Through those experiences, I came to understand that there are cultures we are born into — biological and family heritage — and cultures we grow into through the places we live, the people we meet, and the environments we work in. Today, I am comfortable integrating what I love from Chinese, Nigerian, Western, and Middle Eastern cultures. Call it "Annie\'s Culture."',
      "That's why I've decided to invest more of myself in building bridges — starting with China and Nigeria. I've noticed something interesting: when I'm in Nigeria, I naturally find myself protecting China's image; when I'm in China, I protect Nigeria's. Despite growing trade between the two countries, the cultures still know surprisingly little about each other. Through my work and lived experience, I want to help change that — one conversation, one project, one moment of genuine understanding at a time.",
    ],
  },
  {
    title: 'A Journey That Deepened My Perspective',
    content: [
      'I love travelling. So far I have a few favourites — Singapore, Turkey, Israel. But one trip stood out not for relaxation, but for a profound lesson on peace and perception.',
      "In October 2023, I visited Israel. On Thursday, October 5th, I was in Shaar HaNegev, right on the western border of the Gaza Strip. Everything was peaceful. Quiet. Normal. The skies were blue, the sun burning hot. We even visited a bomb shelter — the kind locals run into during warnings. At the time, it didn't feel like a current necessity.",
      "On Saturday, October 7th, I left for the airport around 5:00 AM. I checked in and waited to board like any other traveller. Then I received a text from a friend in Beijing: \"Are you ok? Is everything fine with you?\" I was confused. I hadn't heard the news. The area we'd visited just two days prior had erupted into chaos.",
      'Then an announcement came over the loudspeaker. A staff member calmly asked us to step away from the windows and gather toward the center of the terminal. An elderly Israeli man nearby was receiving updates on his phone. He mentioned that in situations like this, airports often close. Concern flickered in his eyes. I gently reassured him: "Don\'t worry — the airport will not shut down and our flight will take off." The visit to the bomb shelter two days earlier now seemed like a rehearsal.',
      'While we waited, the elderly Israeli man and I fell into a beautiful conversation. I learned more about Israel, the Jewish people, and their culture directly from a local — the kind of insight no article can give you. I was delighted to discover he had even been to China. A genuine moment of human connection, right in the middle of a deeply unsettling situation. The flight finally took off. We said our goodbyes before catching different connecting flights. We may never meet again, but he is part of my story.',
      "Later, I found out that a missile had been fired toward Tel Aviv's International Airport and was intercepted. I was sitting in that terminal when it happened.",
      "I don't tell this story to dramatize. Many have suffered far worse. But for me, it was a moment of crystallization — a sharp reminder of how quickly things can change. What stayed with me wasn't fear, but a clearer sense of what truly matters: to live with more love. To impact people positively — even if just with a smile. Being in Israel on October 7th taught me that our understanding of other cultures is often shaped by incomplete pictures — and that real exposure changes everything.",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────── */}
      {/* HERO                                            */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="container mx-auto px-4 lg:px-16 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                About TTL4G
              </span>
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Building leaders who transform organizations{' '}
              <span className="text-brand-gold">and impact society</span>.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Training · Leadership · Cross-Cultural Programmes · Business Consulting
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* FOUNDER — color block crash + bio              */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:grid-cols-[5fr_7fr]">

            {/* Photo with color block behind */}
            <div className="relative w-full max-w-md lg:max-w-none mx-auto lg:mx-0 lg:sticky lg:top-24">
              {/* Color block (sits behind photo, offset) */}
              <div className="absolute top-8 -right-4 lg:-right-8 w-[60%] h-[85%] bg-brand-navy" />
              {/* Photo */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/annie_professional.png"
                  alt="Annie Wong, Founder & CEO of TTL4G"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Small gold square — decorative */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-gold hidden lg:block" />
            </div>

            {/* Bio */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Meet Our Founder
                </span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-2">
                Annie Wong
              </h2>
              <p className="text-brand-charcoal/60 uppercase tracking-widest text-sm font-semibold mb-8">
                Founder &amp; CEO, TTL4G
              </p>

              <div className="space-y-5 text-brand-charcoal/75 leading-relaxed text-lg">
                <p>
                Annie Wong is a Chinese-Nigerian entrepreneur who transforms intercultural and leadership dynamics from challenges into strategic advantages. Leveraging her unique bicultural heritage, a Bachelor’s degree in Law that strengthened her governance and compliance consciousness, and a professional toolkit built for global business, she helps organizations and their people optimize their performance — across cultures, borders, and contexts.
                </p>
                <p>
                With a 20-year career spanning NGOs and multinationals, Annie has developed deep expertise in leadership development, performance management, executive coaching, and talent development. Over the years, she has trained and coached hundreds of leaders across different levels — from emerging talent to senior management — equipping them with the clarity, skills, leadership assessment capabilities, and mindset to lead with impact. Her Master’s degree in Intercultural Communication further enables her to translate theory into actionable, culturally informed insight.
                </p>
                <p>
                As a certified coach and change practitioner, Annie provides expert guidance throughout the entire learning and application journey — ensuring that her consultation and training directly support key organizational objectives: improving outcomes, retaining talent, and strengthening team cohesion.
                </p>
                <p>
                From 2026, Annie is channelling this expertise into TTL4G — a venture focused on human resource development and Sino-African partnership building, with a mission of building leaders who transform organizations and impact society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
{/* BEYOND THE BOARDROOM                            */}
{/* ─────────────────────────────────────────────── */}
<section className="bg-brand-soft py-16 lg:py-24 relative">
  <div className="container mx-auto px-4 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:grid-cols-[5fr_7fr]">

      {/* Photo with color block behind — matches founder section */}
      <div className="relative w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
        {/* Small gold square — decorative accent */}
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-gold hidden lg:block z-0" />

        {/* Photo */}
        <div className="relative w-full aspect-[4/5] overflow-hidden z-10">
          <Image
            src="/images/anni_charity_full.jpeg"
            alt="Annie Wong with children during charitable work"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Navy panel with quote and text */}
      <div className="relative bg-brand-navy p-10 lg:p-14 overflow-hidden">
        {/* Dot texture inside the navy panel */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
              Beyond the Boardroom
            </span>
          </div>

          <Quote className="w-7 h-7 text-brand-gold mb-5" />
          <p className="font-serif text-2xl lg:text-3xl text-white leading-snug mb-8 font-medium">
            To live with more love. To impact people positively — even if just with a smile.
          </p>

          <p className="text-white/70 leading-relaxed text-lg">
            Beyond her professional work, Annie is committed to empowerment through
            action. She actively supports charitable initiatives for orphans and
            at-risk children across China, Uganda, and the Middle East, and engages
            with communities dedicated to helping people move from self-doubt into
            lives of purpose and bold impact. Annie is also a writer and author,
            whose work reflects her passion for faith, personal growth, and human
            connection.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ─────────────────────────────────────────────── */}
      {/* CROSS-CULTURAL STORIES                          */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  In Her Own Words
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-brand-navy leading-tight max-w-2xl">
                Annie&apos;s Cross-Cultural Stories
              </h2>
            </div>
            {/* <p className="text-brand-charcoal/70 leading-relaxed max-w-sm lg:text-right">
              Personal stories that shaped a cross-cultural expert and a
              bridge-builder between China, Nigeria, and the world.
            </p> */}
          </div>

          {/* Stories */}
          <div className="space-y-8 lg:space-y-10">
            {stories.map((story, i) => {
              const num = String(i + 1).padStart(2, '0')
              return (
                <article
                  key={i}
                  className="bg-white border border-gray-200 overflow-hidden"
                >
                  {/* Story header bar */}
                  <header className="bg-brand-navy px-8 lg:px-12 py-8 relative">
                    <div className="grid grid-cols-[auto_1fr] gap-6 lg:gap-10 items-start">
                      <div className="font-serif text-5xl lg:text-6xl font-bold text-brand-gold/40 leading-none">
                        {num}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <BookOpen className="w-4 h-4 text-brand-gold" />
                          <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                            Story {num}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white leading-tight">
                          {story.title}
                        </h3>
                      </div>
                    </div>
                  </header>

                  {/* Story body */}
                  <div className="px-8 lg:px-12 py-10 lg:py-14">
                    <div className="max-w-3xl mx-auto space-y-5 text-brand-charcoal/80 leading-relaxed">
                      {story.content.map((paragraph, j) => (
                        <p key={j}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* TIMELINE — Annie's journey                     */}
      {/* ─────────────────────────────────────────────── */}
      {/* <section className="bg-brand-soft py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">

           Header — asymmetric 
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Annie&apos;s Journey
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-brand-navy leading-tight max-w-2xl">
                Two decades. Three continents.<br className="hidden lg:block" />
                One mission.
              </h2>
            </div>
            <p className="text-brand-charcoal/70 leading-relaxed max-w-sm lg:text-right">
              The experiences and turning points that shaped a bicultural leader and
              founded TTL4G.
            </p>
          </div>

           Timeline — vertical with year labels on left 
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr] gap-6 lg:gap-12 relative"
              >
                 Year column 
                <div className="flex flex-col items-center">
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-brand-gold leading-none mb-2">
                    {item.year}
                  </div>
                   Connector line 
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-brand-gold/25 min-h-[60px]" />
                  )}
                </div>

                 Content column 
                <div className={i < timeline.length - 1 ? 'pb-10 lg:pb-12' : ''}>
                   Marker dot 
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-brand-gold" />
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-brand-navy leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-brand-charcoal/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      

      {/* ─────────────────────────────────────────────── */}
      {/* CORE VALUES                                     */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-soft py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">

          {/* Header — asymmetric */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  What Drives Us
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-brand-navy leading-tight max-w-2xl">
                Our Core Values
              </h2>
            </div>
            {/* <p className="text-brand-charcoal/70 leading-relaxed max-w-sm lg:text-right">
              Three principles that shape how TTL4G works with every client,
              every engagement.
            </p> */}
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white border border-gray-200">
            {values.map((v, i) => {
              const num = String(i + 1).padStart(2, '0')
              return (
                <div
                  key={i}
                  className={`
                    relative p-8 lg:p-10
                    ${i < values.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''}
                    border-gray-200
                    group hover:bg-brand-soft transition-colors
                  `}
                >
                  {/* Number in top-right */}
                  <span className="absolute top-6 right-8 font-serif text-sm text-brand-charcoal/30 font-medium">
                    {num}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center mb-6 text-brand-gold border border-brand-gold/30">
                    <v.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4 leading-tight">
                    {v.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-charcoal/70 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* FINAL CTA                                       */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="container mx-auto px-4 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Let&apos;s Begin
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight">
                Ready to work<br className="hidden lg:block" />
                with us?
              </h2>
            </div>

            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-navy font-semibold uppercase tracking-widest text-xs py-4 px-10 hover:bg-white transition-colors self-start lg:self-end"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}


//       {/* ─────────────────────────────────────────────── */}
// {/* CROSS-CULTURAL STORIES                          */}
// {/* ─────────────────────────────────────────────── */}
// <section className="bg-brand-bg py-16 lg:py-24">
//   <div className="container mx-auto px-4 lg:px-16">

//      Header 
//     <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-20">
//       <div>
//         <div className="flex items-center gap-3 mb-4">
//           <span className="w-8 h-px bg-brand-gold" />
//           <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
//             In Her Own Words
//           </span>
//         </div>
//         <h2 className="font-serif text-3xl lg:text-5xl font-bold text-brand-navy leading-tight max-w-2xl">
//           Annie&apos;s Cross-Cultural Stories
//         </h2>
//       </div>
//       <p className="text-brand-charcoal/70 leading-relaxed max-w-sm lg:text-right">
//         Personal stories that shaped a cross-cultural expert and a
//         bridge-builder between China, Nigeria, and the world.
//       </p>
//     </div>

//      Stories — alternating layout 
//     <div className="space-y-20 lg:space-y-28">
//       {stories.map((story, i) => {
//         const num = String(i + 1).padStart(2, '0')
//         const imageSrc = i === 0
//           ? '/images/about/annie-about-img-inc.png'
//           : '/images/about/annie-about-img-inc.png'
//         const isReversed = i % 2 === 1

//         return (
//           <article key={i} className="relative">

//              Story header — always full width 
//             <div className="mb-10 lg:mb-12 max-w-3xl">
//               <div className="flex items-center gap-3 mb-4">
//                 <BookOpen className="w-4 h-4 text-brand-gold" />
//                 <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
//                   Story {num}
//                 </span>
//               </div>
//               <h3 className="font-serif text-2xl lg:text-4xl font-bold text-brand-navy leading-tight">
//                 {story.title}
//               </h3>
//             </div>

//              Image + Body — alternates side 
//             <div className={`grid grid-cols-1 gap-10 lg:gap-16 items-start ${
//   isReversed ? 'lg:grid-cols-[7fr_5fr]' : 'lg:grid-cols-[5fr_7fr]'
// }`}>


//                Image column 
//               <div
//                 className={`relative lg:sticky lg:top-24 ${
//                   isReversed ? 'lg:order-2' : ''
//                 }`}
//               >
//                 {/* Color block behind image */}
//                 <div
//                   className={`
//                     absolute top-6 w-[55%] h-[88%] bg-brand-navy hidden lg:block
//                     ${isReversed ? '-right-6' : '-left-6'}
//                   `}
//                 />

//                 Image 
// <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">

//                   <Image
//                     src={imageSrc}
//                     alt={story.title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 1024px) 100vw, 40vw"
//                   />
//                 </div>

//                 {/* Gold square decorative accent */}
//                 {/* <div
//                   className={`
//                     absolute -bottom-4 w-16 h-16 bg-brand-gold hidden lg:block
//                     ${isReversed ? '-left-4' : '-right-4'}
//                   `}
//                 /> */}

//                 {/* Number badge over image */}
//                 {/* <div className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-brand-gold text-brand-navy px-4 py-2 z-10">
//                   <span className="font-serif text-2xl font-bold leading-none">
//                     {num}
//                   </span>
//                 </div> */}
//               </div>

//               {/* Story body */}
//               <div className={isReversed ? 'lg:order-1' : ''}>
//                 <div className="space-y-5 text-brand-charcoal/80 leading-relaxed">
//                   {story.content.map((paragraph, j) => (
//                     <p key={j} className={j === 0 ? 'text-lg' : ''}>
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </article>
//         )
//       })}
//     </div>
//   </div>
// </section>