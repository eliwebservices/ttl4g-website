'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  // { href: '/cross-cultural', label: 'Cross-Cultural Hub' },
  // { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Subtle effect — navbar gains a soft border + tighter shadow once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-b border-gray-200 shadow-sm' : 'border-b border-transparent'
      }`}
    >
      {/* Accent bar — Executive Authority signature */}
      <div className="h-1 bg-gradient-to-r from-[#D4A017] via-[#0F8B5F] to-[#0B2E59]" />

      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            alt="ttl4g-logo"
            src="/images/ttl4g-logo.png"
            width={48}
            height={48}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-serif text-xl md:text-2xl font-bold text-[#0B2E59]">
            TTL<span className="text-[#D4A017]">4</span>G
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  active ? 'text-[#0B2E59]' : 'text-[#2C2C2C] hover:text-[#0B2E59]'
                }`}
              >
                {link.label}
                {/* Animated underline indicator */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#D4A017] transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
          <Link
            href="/book"
            className="bg-[#0B2E59] text-white text-xs font-semibold uppercase tracking-widest py-2.5 px-6 hover:bg-[#08234a] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[#0B2E59]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-b border-gray-100 animate-fade-down">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2.5 px-3 transition-colors ${
                  pathname === link.href
                    ? 'bg-[#0B2E59]/5 text-[#0B2E59] border-l-2 border-[#D4A017]'
                    : 'text-[#2C2C2C] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="bg-[#0B2E59] text-white text-xs font-semibold uppercase tracking-widest py-3 px-6 text-center mt-2 hover:bg-[#08234a] transition-colors"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}