import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Star,
  Target,
  TrendingUp,
  RefreshCw,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Quote,
  // Linkedin,
  // Twitter,
  // Instagram,
  // Youtube,
} from "lucide-react";

const services = [
  {
    num: "01",
    icon: Globe,
    title: "Cross-Cultural Leadership for Global Teams",
    points: [
      "Build trust across cultures",
      "Run inclusive meetings",
      "Feedback that moves people forward",
      "Resolve cross-cultural conflict",
    ],
  },
  {
    num: "02",
    icon: Star,
    title: "China-Africa Business & Cultural Confidence",
    points: [
      "Navigate Guanxi and Mianzi",
      "Command high-stakes negotiations",
      "Build partnerships that last",
      "Communicate across hierarchies",
    ],
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Developing Strategic Leadership",
    points: [
      "Leading yourself",
      "Leading others",
      "Leading the business",
      "Leading the ecosystem",
    ],
  },
  {
    num: "04",
    icon: Target,
    title: "Leadership, Your Industry & AI",
    points: [
      "AI's impact on your industry",
      "Lead AI adoption with confidence",
      "Coach for an AI-powered future",
      "Decisions powered by AI insights",
    ],
  },
];

const stats = [
  { num: "20+", label: "Years of leadership\nand cross-cultural expertise" },
  { num: "6", label: "Nations served across\nAfrica, Asia and the West" },
];

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────── */}
      {/* HERO                                            */}
      {/* ─────────────────────────────────────────────── */}
      <section className="relative bg-brand-bg">
        {/* Right-edge color block (bleeds off-screen, navy) — desktop only */}
        <div className="hidden lg:block absolute top-0 right-0 w-[32%] h-full bg-brand-navy" />

        {/* Vertical social rail — left edge, desktop only */}
        {/* <div className="hidden lg:flex flex-col gap-5 absolute top-1/2 -translate-y-1/2 left-6 z-20 text-brand-charcoal/60">
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-brand-gold transition-colors"
          >
            <Target className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-brand-gold transition-colors"
          >
            <Target className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-brand-gold transition-colors"
          >
            <Target className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-brand-gold transition-colors"
          >
            <Target className="w-4 h-4" />
          </a>
        </div> */}

        {/* Background dot texture — subtle, desktop only */}
        <div
          className="hidden lg:block absolute bottom-12 left-12 w-32 h-32 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-brand-charcoal) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-16 pt-10 lg:pt-16 pb-0 relative">
          {/* Hero photo + floating quote-card */}
          <div className="relative">
            {/* Photo block */}
            <div className="relative w-full lg:w-[100%] aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
              <Image
                src="/images/annie_professional.png"
                alt="Annie Wong — Founder & CEO, TTL4G"
                fill
                priority
                className="object-cover object-top scale-x-[-1]"
              />
            </div>

            {/* Floating quote/headline card — overlaps photo on desktop, stacks on mobile */}
            <div
              className="
              relative lg:absolute
              lg:top-1/2 lg:right-12 lg:-translate-y-1/2
              w-full lg:w-[44%]
              bg-brand-bg
              p-8 sm:p-10 lg:p-12
              shadow-2xl
              -mt-12 lg:mt-0
              mx-auto lg:mx-0
              max-w-[92%] lg:max-w-none
              z-10
            "
            >
              {/* Kicker */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Training The Leaders For Greatness
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-brand-navy leading-[1.15] mb-8">
                Building leaders who transform organizations{" "}
                <span className="text-brand-gold">and impact society</span>.
              </h1>

              {/* CTA */}
              <Link
                href="/book"
                className="inline-flex items-center gap-3 bg-brand-navy text-white font-semibold uppercase tracking-widest text-xs py-4 px-8 hover:bg-brand-gold hover:text-brand-navy transition-colors"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip — sits below hero */}
        <div className="container mx-auto px-4 lg:px-16 mt-12 lg:mt-20 pb-12 lg:pb-20 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_auto_1fr_auto] items-start lg:items-center gap-8 lg:gap-16">
            {/* {stats.map((stat, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="font-serif text-4xl lg:text-5xl font-bold text-brand-gold leading-none">
                  {stat.num}
                </div>
                <div className="text-xs lg:text-sm text-brand-charcoal/70 whitespace-pre-line leading-snug pt-1">
                  {stat.label}
                </div>
              </div>
            ))} */}

            {/* Spacer + Prev/Next ghost (decorative) */}
            <div className="hidden lg:block" />
            {/* <div className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest text-white">
              <button className="flex items-center gap-2 hover:text-brand-navy transition-colors">
                <ArrowLeft className="w-4 h-4" /> Prev
              </button>
              <span className="h-3 w-px bg-brand-charcoal/20" />
              <button className="flex items-center gap-2 hover:text-brand-gold transition-colors">
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* WHAT WE DO                                      */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-soft py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          {/* Header row — asymmetric: title left, CTA right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  What We Do
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-brand-navy leading-tight max-w-2xl">
                Turn cultural complexity
                <br className="hidden lg:block" />
                into competitive advantage.
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 border border-brand-navy text-brand-navy font-semibold uppercase tracking-widest text-xs py-4 px-8 hover:bg-brand-navy hover:text-white transition-colors self-start lg:self-end"
            >
              <span className="w-4 h-px bg-current" /> View All Services
            </Link>
          </div>

          {/* Service cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-gray-200">
            {services.map((s, i) => (
              <div
                key={i}
                className={`
            relative p-8 lg:p-10
            ${
              i < services.length - 1
                ? "border-b sm:border-b sm:[&:nth-child(-n+2)]:border-b lg:border-b-0 lg:border-r"
                : ""
            }
            ${i < 2 ? "sm:border-b" : ""}
            ${i % 2 === 0 ? "sm:border-r lg:border-r" : ""}
            ${i === services.length - 1 ? "lg:border-r-0" : ""}
            border-gray-200
            group hover:bg-brand-soft transition-colors
          `}
              >
                {/* Number in top-right corner */}
                <span className="absolute top-6 right-8 font-serif text-sm text-brand-charcoal/30 font-medium">
                  {s.num}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center mb-6 text-brand-gold border border-brand-gold/30">
                  <s.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg lg:text-xl font-bold text-brand-navy mb-5 leading-tight min-h-[3.5rem]">
                  {s.title}
                </h3>

                {/* Points */}
                <ul className="space-y-2.5 mb-8">
                  {s.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-brand-charcoal/70"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-gold mt-1.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

                {/* Arrow link */}
                <Link
                  href="/services"
                  aria-label={`Learn more about ${s.title}`}
                  className="inline-flex items-center text-brand-navy hover:text-brand-gold transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Below the grid — small footnote indicating there's more */}
          <p className="text-center text-xs uppercase tracking-widest text-brand-charcoal/50 mt-10">
            Plus{" "}
            <span className="text-brand-navy font-semibold">
              Business Consulting
            </span>{" "}
            and{" "}
            <span className="text-brand-navy font-semibold">
              L&amp;D Consulting
            </span>{" "}
            services —
            <Link
              href="/services"
              className="text-brand-gold hover:underline ml-1"
            >
              explore all offerings →
            </Link>
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* ABOUT — COLOR BLOCK CRASH                       */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo with color-block behind it */}
            <div className="relative w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
              {/* Color block (sits behind photo, offset) */}
              <div className="absolute top-8 -right-4 lg:-right-8 w-[60%] h-[85%] bg-brand-navy" />
              {/* Photo */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/annie_professional.png"
                  alt="Annie Wong, Founder of TTL4G"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Small gold square — decorative */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-gold hidden lg:block" />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  About Us
                </span>
              </div>

              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-6">
                Why Organizations Trust TTL4G with Their People.
              </h2>

              <p className="text-brand-charcoal/70 leading-relaxed mb-8">
                Founded by Annie Wong — a Chinese-Nigerian leader with two
                decades of experience across NGOs, multinationals, and three
                continents — TTL4G helps organizations turn intercultural and
                leadership dynamics from challenges into strategic advantages.
              </p>

              {/* Quote block */}
              <div className="border-l-2 border-brand-gold pl-6 mb-10">
                <Quote className="w-6 h-6 text-brand-gold mb-3" />
                <p className="text-brand-charcoal/80 leading-relaxed">
                  When two powerful business cultures meet, understanding the
                  differences — and the surprising similarities — is the key to
                  building partnerships that last.
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-charcoal/50 mt-4">
                  — Annie Wong, Founder &amp; CEO
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-3 bg-brand-navy text-white font-semibold uppercase tracking-widest text-xs py-4 px-8 hover:bg-brand-gold hover:text-brand-navy transition-colors"
                >
                  Read More
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-brand-navy text-brand-navy font-semibold uppercase tracking-widest text-xs py-4 px-8 hover:bg-brand-navy hover:text-white transition-colors"
                >
                  <span className="w-4 h-px bg-current" /> Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* SINO-AFRICA SPOTLIGHT                           */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-soft py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white border border-gray-200 overflow-hidden">
            {/* Content side */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Signature Program
                </span>
              </div>

              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-6">
                $280B in China-Africa trade. The cultural gap costs deals.
              </h2>

              <p className="text-brand-charcoal/70 leading-relaxed mb-8">
                Bilateral trade hits record highs, yet 70% of cross-border
                alliances fail due to cultural incompatibility. Our China-Africa
                programme gives leaders on both sides the cultural fluency to
                navigate Guanxi, Mianzi, and the high-stakes negotiations that
                define this strategic relationship.
              </p>

              <Link
                href="/cross-cultural"
                className="inline-flex items-center self-start gap-3 bg-brand-gold text-brand-navy font-semibold uppercase tracking-widest text-xs py-4 px-8 hover:bg-brand-navy hover:text-white transition-colors"
              >
                Discover the Program
              </Link>
            </div>

            {/* Visual side */}
            <div className="bg-brand-navy p-12 lg:p-16 flex items-center justify-center relative overflow-hidden min-h-[280px]">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="text-center relative">
                <p className="text-5xl lg:text-6xl mb-6">🇳🇬 🤝 🇨🇳</p>
                <p className="font-serif text-2xl text-white mb-2 font-bold">
                  Bridging Africa &amp; Asia
                </p>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  Cultural Intelligence for Global Impact
                </p>
              </div>
            </div>
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
                  Let&apos;s Begin
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight">
                Ready to build leaders
                <br className="hidden lg:block" />
                who deliver?
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
