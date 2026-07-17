import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import ContactForm from '@/components/sections/ContactForm'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ttl4g.com',
    href: 'mailto:info@ttl4g.com',
    external: false,
  },
  // {
  //   icon: Phone,
  //   label: 'Phone',
  //   value: '+234 902 709 9154',
  //   href: 'tel:+2349027099154',
  //   external: false,
  // },
  // {
  //   icon: MessageSquare,
  //   label: 'WhatsApp',
  //   value: 'Chat with us directly',
  //   href: 'https://wa.me/2349027099154',
  //   external: true,
  // },
  // {
  //   icon: MapPin,
  //   label: 'Office',
  //   value: 'Oba Lateef Adams Estate Iloro Agege, Lagos, Nigeria',
  //   href: null,
  //   external: false,
  // },
]

export default function ContactPage() {
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                Get In Touch
              </span>
            </div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Let&apos;s start the<br className="hidden lg:block" />
              <span className="text-brand-gold">conversation</span>.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Whether you&apos;re ready to begin a programme, exploring a partnership,
              or have a question — we&apos;re here. Send us a message and we&apos;ll
              get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* MAIN — FORM + INFO                              */}
      {/* ─────────────────────────────────────────────── */}
      <section className="bg-brand-bg py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start max-w-6xl mx-auto">

            {/* ── Left: Contact Information ── */}
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-brand-gold" />
                <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                  Contact
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-6">
                We&apos;d love to hear from you.
              </h2>
              <p className="text-brand-charcoal/70 leading-relaxed mb-10">
                Reach out and let&apos;s discuss how TTL4G can help your
                organization develop authentic leaders and bridge cultures with
                confidence.
              </p>

              {/* Contact items */}
              <div className="space-y-1 mb-10">
                {contactInfo.map((item, i) => {
                  const Inner = (
                    <div className="flex items-center gap-5 py-5 border-t border-brand-charcoal/10 group">
                      <div className="w-11 h-11 flex items-center justify-center border border-brand-gold/30 text-brand-gold flex-shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors">
                        <item.icon className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-brand-charcoal/50 text-xs uppercase tracking-widest font-semibold mb-1">
                          {item.label}
                        </p>
                        <p className="text-brand-navy font-medium group-hover:text-brand-gold transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )

                  if (!item.href) {
                    return <div key={i}>{Inner}</div>
                  }

                  return (
                    <a
                      key={i}
                      href={item.href}
                      {...(item.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="block"
                    >
                      {Inner}
                    </a>
                  )
                })}
                {/* Closing border on the last item */}
                <div className="border-t border-brand-charcoal/10" />
              </div>

              {/* Response time note */}
              {/* <div className="bg-brand-soft border-l-2 border-brand-gold p-6">
                <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em] mb-2">
                  Response Time
                </p>
                <p className="text-brand-charcoal/80 leading-relaxed text-sm">
                  We respond to all inquiries within{' '}
                  <span className="font-semibold text-brand-navy">24 hours</span>.
                  For urgent matters, please mention it in your message.
                </p>
              </div> */}

              {/* ── Map (commented out — uncomment when ready) ── */}
              {/* <div className="mt-8 border border-gray-200 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!..."
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TTL4G Office Location"
                />
              </div> */}
            </div>

            {/* ── Right: Form with color block crash ── */}
            <div className="relative">
              {/* Color block behind form — desktop only */}
              <div className="absolute -top-6 -right-6 w-[60%] h-[40%] bg-brand-navy hidden lg:block -z-10" />

              {/* Gold accent square — bottom left, desktop only */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-gold hidden lg:block -z-10" />

              {/* Form container */}
              <div className="bg-white border border-gray-200 p-8 lg:p-12 relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-brand-gold" />
                  <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                    Send a Message
                  </span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-brand-navy leading-tight mb-2">
                  Reach out to us
                </h3>
                <p className="text-brand-charcoal/70 text-sm mb-8">
                  We are here to help and answer any questions or concerns you may have.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────── */}
      {/* FINAL CTA                                       */}
      {/* ─────────────────────────────────────────────── */}
      {/* <section className="bg-brand-navy py-16 lg:py-24 relative overflow-hidden">
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
                  Prefer to Skip Ahead?
                </span>
              </div>
              <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight">
                Book a free 30-minute<br className="hidden lg:block" />
                discovery call directly.
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
      </section> */}
    </>
  )
}



// import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
// import Link from "next/link";
// import ContactForm from "@/components/sections/ContactForm";

// const contactInfo = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "info@ttl4g.com",
//     href: "mailto:info@ttl4g.com",
//     iconColor: "text-[#D4A017]",
//     bgColor: "bg-[#D4A017]/10",
//     external: false,

//   },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: "+234 902 709 9154",
  //   href: "tel:+2349027099154",
  //   iconColor: "text-[#D4A017]",
  //   bgColor: "bg-[#D4A017]/10",
  // },
  // {
  //   icon: MessageSquare,
  //   label: "WhatsApp",
  //   value: "Chat with us directly",
  //   href: "https://wa.me/2349027099154",
  //   iconColor: "text-green-500",
  //   bgColor: "bg-green-500/10",
  //   external: true,
  // },
  // {
  //   icon: MapPin,
  //   label: "Office",
  //   value: "Oba Lateef Adams Estate Iloro Agege, Lagos, Nigeria",
  //   href: null,
  //   iconColor: "text-[#D4A017]",
  //   bgColor: "bg-[#D4A017]/10",
  // },
// ];

// export default function ContactPage() {
//   return (
//     <>
      {/* ── Hero ── */}
      {/* <section className="bg-[#1A3320] py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#D4A017] font-semibold uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out and let's discuss how we can
            help your organization.
          </p>
          <div className="w-16 h-0.5 bg-[#D4A017] mx-auto mt-6" />
        </div>
      </section> */}

      {/* ── Main Content ── */}
      {/* <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
             ── Left: Contact Form ── 
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A3320] mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

             ── Right: Contact Info ── 
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A3320] mb-6">
                Contact Information
              </h2> */}

              {/* Contact items */}
              {/* <div className="space-y-5 mb-8">
                {contactInfo.map((item, i) => {
                  const Inner = (
                    <div className="flex items-start gap-4 group">
                      <div
                        className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}
                      >
                        <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[#1A3320] group-hover:text-[#D4A017] transition-colors">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-500">{item.value}</p>
                      </div>
                    </div>
                  );

                  if (!item.href) {
                    return <div key={i}>{Inner}</div>;
                  }

                  return (
                    <a
                      key={i}
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="block"
                    >
                      {Inner}
                    </a>
                  );
                })}
              </div> */}

              {/* Response time */}
              {/* <div className="bg-[#D4A017]/10 rounded-2xl p-6 border border-[#D4A017]/20 mb-6">
                <p className="text-sm font-semibold text-[#D4A017] mb-1">
                  Response Time
                </p>
                <p className="text-sm text-gray-500">
                  We respond within 24 hours. For urgent inquiries, WhatsApp us
                  directly.
                </p>
              </div> */}

              {/* Map placeholder */}
              {/* <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.519838900621!2d-0.26574699999996015!3d5.637646599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf997f4aafbe41%3A0x2966e7dca85afcf0!2sEli%20Web%20Services!5e0!3m2!1sen!2sgh!4v1776210173999!5m2!1sen!2sgh"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TTL4G Office Location"
                  />
                </div>
              </div> */}
            {/* </div>
          </div>
        </div>
      </section>

      ── Bottom CTA ── 
      <section className="bg-[#1A3320] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Prefer to Jump Straight In?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Skip the form and book a free 30-minute discovery call directly.
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
  );
} */}
