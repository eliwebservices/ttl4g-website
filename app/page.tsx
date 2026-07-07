import Image from 'next/image'
import { Mail } from 'lucide-react'

export const metadata = {
  title: 'TTL4G — Coming Soon',
  description: 'Training The Leaders For Greatness. Launching soon.',
  robots: 'noindex, nofollow',
}

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-brand-navy relative overflow-hidden flex items-center justify-center px-4">

      {/* Dot texture background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Vertical gold accent bar */}
      <div className="absolute top-0 left-0 lg:left-16 w-px h-24 bg-brand-gold" />

      <div className="relative z-10 max-w-2xl text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Image
            src="/images/ttl4g-logo.png"
            alt="TTL4G"
            width={64}
            height={64}
          />
          <span className="font-serif text-3xl font-bold text-white">
            TTL<span className="text-brand-gold">4</span>G
          </span>
        </div>

        {/* Kicker */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-px bg-brand-gold" />
          <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
            Coming Soon
          </span>
          <span className="w-8 h-px bg-brand-gold" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
          Training the leaders for{' '}
          <span className="text-brand-gold">greatness</span>.
        </h1>

        {/* Description */}
        <p className="text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-12">
          A premier consultancy for leadership development and cross-cultural
          training — bridging Africa, Asia, and the world. We&apos;re putting the
          finishing touches on something special.
        </p>

        {/* Contact CTA */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 border-t border-b border-white/10 py-6 px-8">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Get in touch
          </p>
          <a
            href="mailto:info@ttl4g.com"
            className="inline-flex items-center gap-2 text-white hover:text-brand-gold transition-colors font-medium"
          >
            <Mail className="w-4 h-4" />
            info@ttl4g.com
          </a>
        </div>

        {/* Footer note */}
        <p className="text-xs text-white/40 uppercase tracking-widest mt-16">
          © {new Date().getFullYear()} TTL4G — Training The Leaders For Greatness
        </p>
      </div>
    </main>
  )
}
