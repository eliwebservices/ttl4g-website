'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Icon } from 'lucide-react'
import Image from 'next/image'

const Linkedin = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
const Twitter = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>
const Instagram = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
const Youtube = <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/cross-cultural', label: 'Cross-Cultural Hub' },
  { href: '/book', label: 'Book a Call' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Leadership Development',
  'Cross-Cultural Intelligence',
  'Coaching & Capacity Building',
  'Performance Management',
  'Change Management',
]

const socials = [
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'newsletter_bar' }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? 'Failed to subscribe')
      }

      setStatus('success')
      setMessage('You are subscribed! Check your inbox.')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubscribe()
  }

  return (
    <>
      {/* Newsletter Bar */}
      <section className="bg-[#2A6B2A] py-6">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
    <p className="text-white font-serif text-lg font-medium">
      Get monthly leadership insights delivered to your inbox
    </p>
    <div className="flex flex-col gap-2 w-full md:w-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setStatus('idle')
            setMessage('')
          }}
          onKeyDown={handleKeyDown}
          placeholder="Enter your email"
          disabled={status === 'loading' || status === 'success'}
          className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 w-full sm:w-64 text-sm outline-none focus:border-[#D4A017] transition-colors disabled:opacity-50"
        />
        <button
          onClick={handleSubscribe}
          disabled={status === 'loading' || status === 'success'}
          className="bg-[#D4A017] text-[#1A3320] text-xs font-semibold uppercase tracking-wider py-2 px-5 rounded-lg hover:bg-[#b8880f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap w-full sm:w-auto"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {/* Feedback message */}
      {message && (
        <p className={`text-xs ${status === 'success' ? 'text-green-300' : 'text-red-300'}`}>
          {message}
        </p>
      )}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-[#1A3320] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <Link href="/" className="font-serif text-2xl font-bold text-white">
              <Image alt='ttl4g-logo' src={"/images/ttl4g-logo.png"} width={55} height={55}/>
                TTL<span className="text-[#D4A017]">4</span>G
              </Link>
              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                Training The Leaders For Greatness — Nigeria's premier leadership
                development and capacity building consultancy, serving organizations
                across Africa and beyond.
              </p>
              {/* <div className="flex gap-3 mt-6">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-[#D4A017]/30 flex items-center justify-center text-white/70 hover:bg-[#D4A017] hover:text-[#1A3320] hover:border-[#D4A017] transition-all"
                  >
                    {Icon}
                  </a>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#D4A017] font-semibold uppercase tracking-wider text-sm mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2 text-sm text-white/80">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-[#D4A017] transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[#D4A017] font-semibold uppercase tracking-wider text-sm mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-2 text-sm text-white/80">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#D4A017] font-semibold uppercase tracking-wider text-sm mb-4">
                Contact Us
              </h4>
              <div className="flex flex-col gap-3 text-sm text-white/80">
                <a
                  href="mailto:info@ttl4g.com"
                  className="flex items-center gap-2 hover:text-[#D4A017] transition-colors w-fit"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@ttl4g.com
                </a>
                {/* <a
                  href="tel:+2349027099154"
                  className="flex items-center gap-2 hover:text-[#D4A017] transition-colors w-fit"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +234 902 709 9154
                </a> */}
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  Abuja, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/50">
            © {new Date().getFullYear()} TTL4G — Training The Leaders For Greatness. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
