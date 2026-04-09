import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import ContactForm from '@/components/sections/ContactForm'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@ttl4g.com',
    href: 'mailto:info@ttl4g.com',
    iconColor: 'text-[#D4A017]',
    bgColor: 'bg-[#D4A017]/10',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 123 456 7890',
    href: 'tel:+2341234567890',
    iconColor: 'text-[#D4A017]',
    bgColor: 'bg-[#D4A017]/10',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: 'Chat with us directly',
    href: 'https://wa.me/2341234567890',
    iconColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Lagos, Nigeria',
    href: null,
    iconColor: 'text-[#D4A017]',
    bgColor: 'bg-[#D4A017]/10',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-[#1A3320] py-20">
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
      </section>

      {/* ── Main Content ── */}
      <section className="bg-[#FAF7F0] py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* ── Left: Contact Form ── */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A3320] mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* ── Right: Contact Info ── */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A3320] mb-6">
                Contact Information
              </h2>

              {/* Contact items */}
              <div className="space-y-5 mb-8">
                {contactInfo.map((item, i) => {
                  const Inner = (
                    <div className="flex items-start gap-4 group">
                      <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[#1A3320] group-hover:text-[#D4A017] transition-colors">
                          {item.label}
                        </p>
                        <p className="text-sm text-gray-500">{item.value}</p>
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
                        className='block'
                    >
                      {Inner}
                    </a>
                  )
                })}
              </div>

              {/* Response time */}
              <div className="bg-[#D4A017]/10 rounded-2xl p-6 border border-[#D4A017]/20 mb-6">
                <p className="text-sm font-semibold text-[#D4A017] mb-1">
                  Response Time
                </p>
                <p className="text-sm text-gray-500">
                  We respond within 24 hours. For urgent inquiries,
                  WhatsApp us directly.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="h-48 bg-[#2A6B2A]/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-[#D4A017] mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Google Maps embed</p>
                    <p className="text-xs text-gray-400">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
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
  )
}
