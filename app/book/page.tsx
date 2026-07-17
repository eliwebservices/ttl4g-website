import Link from 'next/link'
import BookingForm from '@/components/sections/BookingForm'
import FaqAccordion from '@/components/sections/FaqAccordion'
import CalEmbed from '@/components/sections/CalEmbed'
import { CalendarDays, Clock, Users, CheckCircle } from 'lucide-react'

const callBenefits = [
  { icon: Clock, text: '30 minutes, completely free' },
  // { icon: Users, text: 'Speak directly with Annie' },
  { icon: CheckCircle, text: 'Get tailored recommendations' },
  // { icon: CalendarDays, text: 'No obligation' },
]

export default function BookPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────── */}
      {/* HERO                                            */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="container mx-auto px-4 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-end">

            {/* Left: headline + intro */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Work With Us
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Book a free<br className="hidden lg:block" />
                <span className="text-brand-gold">discovery call</span>.
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                30 minutes. Just an honest conversation about
                where you are, where you want to go, and how TTL4G can help.
              </p>
            </div>

            {/* Right: what to expect */}
            <div className="border-l-2 border-brand-gold pl-6">
              {/* <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-5">
                What to Expect
              </p>
              <ul className="space-y-3">
                {callBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <benefit.icon className="w-4 h-4 text-brand-gold flex-shrink-0" strokeWidth={1.5} />
                    {benefit.text}
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* CALENDAR + INTAKE FORM                          */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">

            {/* ── Left: Calendar ── */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Step One
                </span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-brand-navy leading-tight mb-2">
                Pick a time that works.
              </h2>
              <p className="text-brand-charcoal/70 text-sm mb-8">
                Choose any open slot
              </p>

              <div className="bg-white border border-gray-200 overflow-hidden">
                <CalEmbed />
              </div>

              {/* WhatsApp alternative — uncomment if needed */}
              {/* <div className="mt-4 border-l-2 border-brand-gold bg-brand-soft p-4 flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    Prefer WhatsApp?
                  </p>
                  <a
                    href="https://wa.me/2349027099154"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-gold hover:underline font-medium"
                  >
                    Chat with us directly →
                  </a>
                </div>
              </div> */}
            </div>

            {/* ── Right: Intake Form with color block crash ── */}
            <div className="relative">
              {/* Color block behind form — desktop only */}
              <div className="absolute -top-6 -right-6 w-[60%] h-[35%] bg-brand-navy hidden lg:block -z-10" />
              {/* Gold accent square — bottom left */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-gold hidden lg:block -z-10" />

              {/* Form container */}
              <div className="bg-white border border-gray-200 p-8 lg:p-10 relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-brand-gold" />
                  <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                    Step Two
                  </span>
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-brand-navy leading-tight mb-2">
                  Tell us a bit about you.
                </h2>
                <p className="text-brand-charcoal/70 text-sm mb-8">
                  This helps us come to the call already prepared with
                  relevant questions and ideas.
                </p>

                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* FAQ                                             */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-soft py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 max-w-5xl mx-auto">

            {/* Left: header */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Common Questions
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-brand-charcoal/70 leading-relaxed text-sm">
                A few things people often ask before booking. Don&apos;t see
                your question? Send us a message.
              </p>
            </div>

            {/* Right: accordion */}
            <div>
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* BOTTOM CTA                                      */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="container mx-auto px-4 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Still Have Questions?
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight">
                Send us a message<br className="hidden lg:block" />
                instead.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-navy font-semibold uppercase tracking-widest text-xs py-4 px-10 hover:bg-white transition-colors self-start lg:self-end"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}


// import Link from "next/link";
// import BookingForm from "@/components/sections/BookingForm";
// import FaqAccordion from "@/components/sections/FaqAccordion";
// import { CalendarDays, Clock, Users, CheckCircle } from "lucide-react";
// import CalEmbed from "@/components/sections/CalEmbed";

// const callBenefits = [
//   { icon: Clock, text: "30 minutes, completely free" },
//   { icon: Users, text: "Speak directly with our team" },
//   { icon: CheckCircle, text: "Get tailored recommendations" },
//   { icon: CalendarDays, text: "No obligation, no hard sell" },
// ];

// export default function BookPage() {
//   return (
//     <>
//       {/* ── Hero ── */}
//       <section className="bg-[#1A3320] py-20">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
//             Work With Us
//           </p>
//           <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
//             Let's Start Your Leadership Journey
//           </h1>
//           <p className="text-lg text-white/70 max-w-2xl mx-auto">
//             Book a free 30-minute discovery call.
//           </p>
//           <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-6" />
//         </div>
//       </section>

//       {/* ── Calendar + Form ── */}
//       <section className="bg-[#FAF7F0] py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             {/* ── Left: Calendar Embed ── *
//             <div>
//               <h2 className="font-serif text-2xl font-bold text-[#1A3320] mb-6">
//                 Schedule Your Call
//               </h2>

//               {/* 
//                 CALENDAR INTEGRATION PLACEHOLDER
//                 Replace this entire div with one of:
//                   A) Calendly: <div className="calendly-inline-widget" data-url="https://calendly.com/your-link" style={{minWidth:'320px',height:'700px'}} />
//                   B) Cal.com:  <Cal calLink="your-username/discovery-call" />
//                 Then install:
//                   A) Add <script src="https://assets.calendly.com/assets/external/widget.js"> in layout.tsx
//                   B) npm install @calcom/embed-react
//               *
//               <div className="bg-white rounded-2xl border border-gray-100 p-8 min-h-[420px] flex flex-col items-center justify-center shadow-sm">
//                 <div className="text-center">
//                   <span className="text-5xl block mb-4">📅</span>
//                   <h3 className="font-serif text-xl font-semibold text-[#1A3320] mb-2">
//                     Live Calendar
//                   </h3>
//                   <p className="text-sm text-gray-500 mb-6 max-w-xs">
//                     Your scheduling widget will appear here — clients self-book
//                     based on real-time availability.
//                   </p>

//                   /* Benefits list *
//                   <div className="space-y-3 text-left max-w-xs mx-auto mb-6">
//                     {callBenefits.map((benefit, i) => (
//                       <div key={i} className="flex items-center gap-3">
//                         <div className="w-8 h-8 rounded-lg bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0">
//                           <benefit.icon className="w-4 h-4 text-[#D4A017]" />
//                         </div>
//                         <span className="text-sm text-gray-500">{benefit.text}</span>
//                       </div>
//                     ))}
//                   </div>

//                   /* Integration note *
//                   <div className="bg-[#D4A017]/10 rounded-xl p-4 text-xs text-left">
//                     <p className="font-semibold text-[#D4A017] mb-1">
//                       Hello sister Anni, your calendar will go here:
//                     </p>
//                     <p className="text-gray-500">
//                       I'll connect a calendar API (Cal.com) here. I'll embed code here.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               /* WhatsApp alternative *
//               <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-100 flex items-center gap-3">
//                 <span className="text-2xl">💬</span>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-700">
//                     Prefer WhatsApp?
//                   </p>
//                   <a
//                     href="https://wa.me/2349027099154"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm text-green-600 hover:underline font-medium"
//                   >
//                     Chat with us directly →
//                   </a>
//                 </div>
//               </div>
//             </div> */}

//             <div>
//               <h2 className="font-serif text-2xl font-bold text-[#1A3320] mb-6">
//                 Schedule Your Call
//               </h2>
//               <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
//                 <CalEmbed />
//               </div>

//               {/* WhatsApp alternative */}
//               {/* <div className="mt-4 bg-green-50 rounded-xl p-4 border border-green-100 flex items-center gap-3">
//                 <span className="text-2xl">💬</span>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-700">
//                     Prefer WhatsApp?
//                   </p>
//                   <a
//                     href="https://wa.me/2341234567890"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-sm text-green-600 hover:underline font-medium"
//                   >
//                     Chat with us directly →
//                   </a>
//                 </div>
//               </div> */}
//             </div>

//             {/* ── Right: Intake Form ── */}
//             <div>
//               <h2 className="font-serif text-2xl font-bold text-[#1A3320] mb-6">
//                 Pre-Booking Information
//               </h2>
//               <BookingForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── FAQ ── */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto">
//             <div className="text-center mb-14">
//               <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-2">
//                 Common Questions
//               </p>
//               <h2 className="font-serif text-3xl font-bold text-[#1A3320]">
//                 Frequently Asked Questions
//               </h2>
//               <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-4" />
//             </div>
//             <FaqAccordion />
//           </div>
//         </div>
//       </section>

//       {/* ── Bottom CTA ── */}
//       <section className="bg-[#1A3320] py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="font-serif text-3xl font-bold text-white mb-4">
//             Still Have Questions?
//           </h2>
//           <p className="text-white/70 mb-8 max-w-xl mx-auto">
//             We're happy to answer anything before you book. Send us a message
//             and we'll get back to you within 24 hours.
//           </p>
//           <Link
//             href="/contact"
//             className="bg-[#D4A017] text-[#1A3320] font-semibold uppercase tracking-wider py-3 px-8 rounded-full inline-block hover:bg-[#b8880f] transition-colors"
//           >
//             Send Us a Message
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }
