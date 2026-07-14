import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Star,
  TrendingUp,
  Target,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Quote,
} from "lucide-react";

/* ─────────────────────────────────────────────── */
/* TRAINING & DEVELOPMENT (4)                      */
/* ─────────────────────────────────────────────── */
const trainingServices = [
  {
    icon: Globe,
    image: "/images/services/cross-cultural-leadership-n.png",
    eyebrow: "Cross-Cultural Leadership",
    title: "Turn Cultural Differences Into Your Team's Competitive Edge",
    intro:
      "A hands-on programme for leaders managing global and multicultural teams — built on real corporate experience, not theory.",
    whyMatters:
      "Misaligned expectations. Meetings that go nowhere. Feedback that lands wrong. When teams span cultures, even skilled leaders hit invisible walls — costing time, trust, and results.",
    stats: [
      {
        num: "60-70%",
        label:
          "of strategic alliances fail, and cultural differences are one of the key challenges in making them work.",
        source: "Harvard Business Review",
      },
    ],
    programmeTitle: "Skills that work in the moments that matter most",
    programmePoints: [
      {
        title: "Build trust across cultures",
        desc: "Earn credibility across various background or communication style.",
      },
      {
        title: "Run inclusive meetings",
        desc: "Everyone contributes.",
      },
      {
        title: "Give feedback that moves people forward",
        desc: "Share what needs saying in ways that strengthen relationships.",
      },
      {
        title: "Resolve cross-cultural conflict",
        desc: "Address friction early; keep working relationships stay intact and teams move forward.",
      },
      {
        title: "Align teams faster",
        desc: "Cut through ambiguity and misaligned expectations.",
      },
    ],
    audience:
      "Leaders, international project managers, and HR/Learning & Development professionals who've felt the cost of cultural misalignment — and want a practical, experience-based solution.",
    closing: "Ready to build a team that works across any culture?",
  },
  {
    icon: Star,
    eyebrow: "Signature Programme",
    image: "/images/services/china-africa.png",
    title: "Lead China-Africa Partnerships With Cultural Confidence",
    intro:
      "A programme for African and Chinese professionals navigating one of the world's most strategically important business relationships.",
    whyMatters:
      "A deal stalls because the pacing felt disrespectful. A partnership breaks down because face was lost in a meeting. An opportunity disappears because the relationship was never properly built. In Sino-Africa business, cultural missteps don't just cause friction — they cost deals.",
    contextBlocks: [
      {
        label: "African professionals",
        desc: "Preparing to engage Chinese partners, investors, and government counterparts — where relationship-building, hierarchy, and face are non-negotiable.",
      },
      {
        label: "Chinese professionals",
        desc: "Operating across Africa's many distinct markets — where trust is built differently in each country, communication styles vary widely, and local context shapes every interaction.",
      },
    ],
    stats: [
      {
        num: "$280B",
        label:
          "China-Africa bilateral trade in 2024 — a 6.1% year-on-year increase, with China remaining Africa's largest trading partner.",
        source: "China Customs Statistics, 2024",
      },
      {
        num: "$22.3B+",
        label:
          "Nigeria-China trade in the first 10 months of 2025 — a 30% year-on-year increase, making Nigeria China's 2nd largest trading partner in Africa.",
        source: "Chinese Consul-General, Lagos — January 2026",
      },
    ],
    programmeTitle: "Skills that work in the moments that matter most",
    programmePoints: [
      {
        title: "Navigate Guanxi and Mianzi",
        desc: "Understand face and relationship dynamics that underpin every Chinese business interaction.",
      },
      {
        title: "Command high-stakes negotiations",
        desc: "Master pacing, hierarchy, and indirect communication styles.",
      },
      {
        title: "Build partnerships that last",
        desc: "Move beyond transactions to trust-based, long-term relationships.",
      },
      {
        title: "Communicate across hierarchies",
        desc: "Engage senior counterparts and government officials with cultural fluency.",
      },
    ],
    audience:
      "Diplomats, government officials, business executives, and professionals engaged in Nigeria-China or Africa-China partnerships — on either side of the relationship.",
    closing:
      "Ready to lead China-Africa partnerships with cultural confidence?",
  },
  {
    icon: TrendingUp,
    image: "/images/services/strategic-leadership.png",
    eyebrow: "Strategic Leadership",
    title: "Developing Strategic Leadership",
    intro:
      "A transformational programme that develops leaders at every level — from leading yourself to shaping the wider ecosystem.",
    whyMatters:
      "A manager excels individually but struggles to bring others along. A team lead delivers results but can't yet think strategically. A senior leader influences their organisation but hasn't found their voice beyond it. Developing strategic leadership isn't a single leap — it's a structured journey with four distinct stages.",
    pullQuote: {
      text: "Leadership development is not an event — it is a journey. Organisations that treat it as such consistently outperform those that don't.",
      attribution: "McKinsey & Company",
    },
    stats: [
      {
        num: "80%",
        label:
          "of the variation in organizational performance is accounted for by leaders.",
        source: "McKinsey & Company",
      },
      {
        num: "77%",
        label:
          "of organisations report a leadership gap — yet few have a structured pipeline to close it.",
        source: "Deloitte Global Human Capital Report",
      },
    ],
    programmeTitle: "Four stages. One leadership journey.",
    stages: [
      {
        num: "01",
        title: "Leading Yourself",
        desc: "Build the foundation for leadership. Emotional intelligence, self-leadership, and the mindset to lead with clarity, purpose, and adaptability.",
      },
      {
        num: "02",
        title: "Leading Others",
        desc: "Support people and teamwork. Building trust, developing people, and creating inclusive teams that collaborate and grow together.",
      },
      {
        num: "03",
        title: "Leading the Business",
        desc: "Contribute to performance and change. Strengthening decision-making, understanding the bigger picture, and supporting performance while adapting to change in a digital environment.",
      },
      {
        num: "04",
        title: "Leading the Ecosystem",
        desc: "Work across boundaries. Collaborating across teams, functions, and partners, while engaging with wider networks and communities. Supporting change and staying aware of broader trends, including digital and AI developments.",
      },
    ],
    audience:
      "Emerging leaders, mid-level managers, senior executives, and high-potential talent across all industries — each going through the same four-stage journey, at the depth and complexity their level demands.",
    closing: "Ready to develop strategic leadership in your organisation?",
  },
  {
    icon: Target,
    image: "/images/services/leadership-ai.jpg",
    eyebrow: "2–3 Hour Online Session",
    title: "Leadership, Your Industry & AI",
    intro:
      "A practical session for leaders who need to understand AI's impact on their industry — and lead their organisations through AI-driven transformation with confidence. The 2–3 hour session delivers a high-level overview of key AI frameworks and practical guidelines. Extended sessions are available on request for teams requiring deeper engagement.",
    whyMatters:
      "We're living through a genuine shift — not a trend, not a buzzword. AI is changing how decisions get made, how teams operate, and how industries compete. The leaders navigating this well aren't necessarily the most technical. They're the ones who stay curious, ask the right questions, and learn how to put AI to work for their people and their goals.",
    stats: [
      {
        num: "5 million",
        label:
          "Nigerians — the Federal Government's annual target for AI and digital skills training.",
        source:
          "Federal Ministry of Communications",
      },
      {
        num: "Fast",
        label:
          "Leaders who understand AI are making faster, better decisions.",
        source: "Corporate Education Market",
      },
      {
        num: "2-3h",
        label:
          "Online SMART Lecture — minimal time, maximum impact",
        source: "TTL4G Programme",
      },
    ],
    programmeTitle: "Skills that work in the moments that matter most",
    programmePoints: [
      {
        title: "Understand AI's impact on your industry",
        desc: "Cut through the hype and focus on what actually matters for your sector.",
      },
      {
        title: "Lead AI adoption with confidence",
        desc: "Guide your team through integration without creating fear or resistance.",
      },
      {
        title: "Coach your team for an AI-powered future",
        desc: "Help your people adapt, upskill, and thrive alongside AI.",
      },
      {
        title: "Make strategic decisions with AI insights",
        desc: "Use AI-generated data to inform better, faster leadership decisions.",
      },
    ],
    audience:
      "Leaders, executives, and managers in any industry who want to understand AI's strategic implications — and lead their teams through the transition with clarity and confidence.",
    closing: "Ready to lead with AI confidence?",
  },
];

/* ─────────────────────────────────────────────── */
/* CONSULTING (2)                                  */
/* ─────────────────────────────────────────────── */
const consultingServices = [
  {
    icon: Briefcase,
    image: "/images/services/sky-scrapper.jpg",
    eyebrow: "Business Consulting",
    title: "Set up your business in Nigeria — the right way",
    intro:
      "Guiding businesses through setup processes and complaince requirements.",
    whyMatters:
      "Nigeria's regulatory, legal, and HR landscape is complex — and the cost of getting it wrong is high. The right local partner makes the difference between a smooth market entry and costly delays, compliance gaps, or the wrong hires.",
    programmeTitle: "Support from registration through to operations",
    programmePoints: [
      {
        title: "Nigeria & China",
        desc: "Provide strategic insight and market entry.",
      },
      {
        title: "Business in Nigeria",
        desc: "Set up of business in Nigeria (including company registration, tax & regulatory compliance, audit).",
      },
    ],
    audience:
      "International companies entering Nigeria, foreign investors, diaspora entrepreneurs, and organisations expanding their Nigerian operations.",
    closing: "Ready to enter the Nigerian market?",
  },
  {
    icon: GraduationCap,
    image: "/images/services/ld-consulting.png",
    eyebrow: "L&D Consulting",
    title:
      "Learning & Development Consulting",
    intro:
      "Transform your Learning & Development function — from overhead to strategic business partner.",
    whyMatters:
      "Training budgets are often cut first. Learning & Development functions are frequently seen as overhead — not because the work doesn't matter, but because the value is hard to demonstrate. We work with you to strengthen stakeholder engagement, sharpen your strategy, and position learning as a priority worth investing in.",
    pullQuote: {
      text: "Learning & Development is no longer a support function — it is the engine of organisational agility and competitive advantage.",
      attribution: "Deloitte",
    },
    programmeTitle: "What we do",
    programmePoints: [
      {
        title: "Align Learning & Development with Business Strategy",
        // desc: "Map every initiative to a business priority.",
      },
      {
        title: "Measure ROI and Demonstrate Impact",
        desc: "",
      },
      {
        title: "Engage Stakeholders Effectively",
        // desc: "Build the data story that protects your budget.",
      },
    ],
    audience:
      "Learning & Development managers, HR directors, Chief People Officers, and Organisational Development professionals.",
    closing: "Ready to transform your L&D function?",
  },
];

/* ─────────────────────────────────────────────── */
/* HELPER: a single full service block             */
/* ─────────────────────────────────────────────── */
type ServiceBlock =
  | (typeof trainingServices)[number]
  | (typeof consultingServices)[number];

function ServiceSection({
  service,
  index,
  total,
  bg,
}: {
  service: ServiceBlock;
  index: number;
  total: number;
  bg: "white" | "soft";
}) {
  const Icon = service.icon;
  const num = String(index + 1).padStart(2, "0");

  return (
    <section className={bg === "soft" ? "bg-brand-soft" : "bg-white"}>
      <div className="container mx-auto px-4 lg:px-16 py-16 lg:py-24">
        {/* ── Section header (asymmetric) ── */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mb-12 lg:mb-16">

          ////// Left: number + icon //////
          <div className="flex lg:flex-col gap-6 items-start">
            <div className="font-serif text-5xl lg:text-6xl font-bold text-brand-charcoal/15 leading-none">
              {num}
            </div>
            <div className="w-14 h-14 flex items-center justify-center text-brand-gold border border-brand-gold/30">
              <Icon className="w-6 h-6" strokeWidth={1.5} />
            </div>
          </div>

          //Right: eyebrow + title + intro //
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                {service.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-6">
              {service.title}
            </h2>
            <p className="text-brand-charcoal/70 leading-relaxed">
              {service.intro}
            </p>
          </div>
        </div> */}

        {/* ── Section header with hero image (alternating layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-20 items-center">
          {/* Image side — order swaps based on index */}
          <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
            {/* Color block behind image (offsets from opposite corner based on layout direction) */}
            <div
              className={`
      absolute top-6 w-[55%] h-[88%] bg-brand-navy hidden lg:block
      ${index % 2 === 1 ? "-left-6" : "-right-6"}
    `}
            />

            {/* Image */}
            <div className="relative w-full aspect-[4/5] lg:aspect-[5/6] overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Small gold square — decorative accent (opposite corner from color block) */}
            <div
              className={`
      absolute -bottom-4 w-16 h-16 bg-brand-gold hidden lg:block
      ${index % 2 === 1 ? "-right-4" : "-left-4"}
    `}
            />

            {/* Number badge — sits over the image */}
            <div className="absolute top-6 left-6 lg:top-8 lg:left-8 bg-brand-gold text-brand-navy px-4 py-2 z-10">
              <span className="font-serif text-2xl font-bold leading-none">
                {num}
              </span>
            </div>
          </div>

          {/* Content side */}
          <div className={index % 2 === 1 ? "lg:order-1" : ""}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                {service.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-6">
              {service.title}
            </h2>
            <p className="text-brand-charcoal/70 leading-relaxed text-lg">
              {service.intro}
            </p>
          </div>
        </div>

        {/* ── Why It Matters Now ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-navy text-xs font-semibold uppercase tracking-[0.25em]">
                {"pullQuote" in service && service.eyebrow.includes("Strategic")
                  ? "Why It Matters Now"
                  : "Why It Matters Now"}
              </span>
            </div>
          </div>
          <div>
            <p className="text-brand-charcoal/80 leading-relaxed text-lg">
              {service.whyMatters}
            </p>

            {/* Pull quote (only for services that have one) */}
            {/* {"pullQuote" in service && service.pullQuote && (
              <div className="border-l-2 border-brand-gold pl-6 mt-8">
                <Quote className="w-5 h-5 text-brand-gold mb-3" />
                <p className="font-serif text-xl text-brand-navy leading-snug mb-3">
                  {service.pullQuote.text}
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-charcoal/50">
                  — {service.pullQuote.attribution}
                </p>
              </div>
            )} */}

            {/* Context blocks (China-Africa programme only) */}
            {/* {"contextBlocks" in service && service.contextBlocks && (
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {service.contextBlocks.map((c, i) => (
                  <div
                    key={i}
                    className="bg-brand-bg p-6 border-l-2 border-brand-gold"
                  >
                    <p className="text-brand-navy font-semibold text-sm uppercase tracking-wider mb-3">
                      {c.label}
                    </p>
                    <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            )} */}
          </div>
        </div>

        {/* ── Stats strip (if present) ── */}
        {"stats" in service && service.stats && (
          <div className="bg-brand-navy p-8 lg:p-12 mb-12 lg:mb-16 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-8 relative">
              What the data shows
            </p>
            <div
              className={`grid grid-cols-1 ${
                service.stats.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
              } gap-8 lg:gap-12 relative`}
            >
              {service.stats.map((s, i) => (
                <div
                  key={i}
                  className={
                    i < service.stats.length - 1
                      ? "md:border-r md:border-white/10 md:pr-8 lg:pr-12"
                      : ""
                  }
                >
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-brand-gold leading-none mb-3">
                    {s.num}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-2">
                    {s.label}
                  </p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">
                    {s.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── The Programme / Stages / What We Do ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-navy text-xs font-semibold uppercase tracking-[0.25em]">
              {service.eyebrow === "Business Consulting" ? "What we do" : "The Programme"}
              </span>
            </div>
            <p className="font-serif text-xl lg:text-2xl text-brand-navy leading-tight">
              {service.programmeTitle}
            </p>
          </div>

          <div>
            {/* Four-stage layout for Strategic Leadership */}
            {"stages" in service && service.stages ? (
              <div className="grid sm:grid-cols-2 gap-6">
                {service.stages.map((stage, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-200 p-6 lg:p-7 relative"
                  >
                    <span className="absolute top-5 right-6 font-serif text-sm text-brand-charcoal/30 font-medium">
                      {stage.num}
                    </span>
                    <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
                      Stage {stage.num}
                    </p>
                    <h4 className="font-serif text-lg font-bold text-brand-navy mb-3 leading-tight">
                      {stage.title}
                    </h4>
                    <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              /* Standard programme points list */
              <div className="space-y-5">
                {service.programmePoints?.map((p, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex-shrink-0 w-1 self-stretch bg-brand-gold/30 group-hover:bg-brand-gold transition-colors" />
                    <div>
                      <h4 className="font-serif text-lg font-bold text-brand-navy mb-1.5 leading-snug">
                        {p.title}
                      </h4>
                      <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Who it's for + CTA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-navy text-xs font-semibold uppercase tracking-[0.25em]">
                Who It&apos;s For
              </span>
            </div>
          </div>

          <div>
            <p className="text-brand-charcoal/80 leading-relaxed mb-10">
              {service.audience}
            </p>

            <div className="border-t border-brand-charcoal/15 pt-8">
              <p className="font-serif text-xl lg:text-2xl text-brand-navy font-bold mb-6 leading-snug">
                {service.closing}
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-3 bg-brand-navy text-white font-semibold uppercase tracking-widest text-xs py-4 px-8 hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                Book a Free 30-Minute Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider between services within the same category */}
      {index < total - 1 && (
        <div className="container mx-auto px-4 lg:px-16">
          <div className="h-px bg-brand-charcoal/10" />
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────── */
/* PAGE                                            */
/* ─────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container mx-auto px-4 lg:px-16 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                Our Services
              </span>
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Training and consulting that turns cultural complexity into{" "}
              <span className="text-brand-gold">competitive advantage</span>.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Built on twenty years of corporate experience across three
              continents. Designed for leaders managing global teams,
              China-Africa partnerships, and the business of getting things done
              in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category 01: Training & Development ── */}
      <section className="bg-white border-b border-brand-charcoal/10">
        <div className="container mx-auto px-4 lg:px-16 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-end">
            <div className="flex items-center gap-6">
              <div className="font-serif text-7xl lg:text-8xl font-bold text-brand-charcoal/10 leading-none">
                I
              </div>
              <div>
                <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-2">
                  Category One
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
                  Training & Development
                </h2>
              </div>
            </div>
            {/* <p className="text-brand-charcoal/70 leading-relaxed max-w-xl lg:text-right">
              Four programmes built from real corporate experience, designed for
              the moments that matter most in cross-cultural and strategic
              leadership.
            </p> */}
          </div>
        </div>
      </section>

      {trainingServices.map((s, i) => (
        <ServiceSection
          key={i}
          service={s}
          index={i}
          total={trainingServices.length}
          bg={i % 2 === 0 ? "white" : "soft"}
        />
      ))}

      {/* ── Category 02: Consulting ── */}
      <section className="bg-brand-navy border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-16 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-end">
            <div className="flex items-center gap-6">
              <div className="font-serif text-7xl lg:text-8xl font-bold text-white/10 leading-none">
                II
              </div>
              <div>
                <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-2">
                  Category Two
                </p>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Consulting
                </h2>
              </div>
            </div>
            {/* <p className="text-white/70 leading-relaxed max-w-xl lg:text-right">
              On-the-ground partnership for organisations entering Nigeria and
              L&D functions ready to become strategic business partners.
            </p> */}
          </div>
        </div>
      </section>

      {consultingServices.map((s, i) => (
        <ServiceSection
          key={i}
          service={s}
          index={i}
          total={consultingServices.length}
          bg={i % 2 === 0 ? "white" : "soft"}
        />
      ))}

      {/* ── Final CTA ── */}
      <section className="bg-brand-navy py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container mx-auto px-4 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Not Sure Which Programme Fits?
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight">
                Let&apos;s figure it out
                <br className="hidden lg:block" />
                in 30 minutes.
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
  );
}
