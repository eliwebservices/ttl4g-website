import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/sections/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@ttl4g.com",
    href: "mailto:info@ttl4g.com",
    iconColor: "text-[#D4A017]",
    bgColor: "bg-[#D4A017]/10",
  },
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
];

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
              </div>

              {/* Response time */}
              <div className="bg-[#D4A017]/10 rounded-2xl p-6 border border-[#D4A017]/20 mb-6">
                <p className="text-sm font-semibold text-[#D4A017] mb-1">
                  Response Time
                </p>
                <p className="text-sm text-gray-500">
                  We respond within 24 hours. For urgent inquiries, WhatsApp us
                  directly.
                </p>
              </div>

              {/* Map placeholder */}
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
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
  );
}
