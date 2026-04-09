'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/cross-cultural', label: 'Cross-Cultural Hub' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
            <Image alt='ttl4g-logo' src={"/images/ttl4g-logo.png"} width={55} height={55}/>
          <span className="font-serif text-xl md:text-2xl font-bold text-[#2A6B2A]">
            TTL<span className="text-[#D4A017]">4</span>G
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#D4A017] ${
                pathname === link.href
                  ? 'text-[#D4A017]'
                  : 'text-[#1A3320]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-[#D4A017] text-[#1A3320] text-sm font-semibold uppercase tracking-wider py-2 px-6 rounded-full hover:bg-[#b8880f] transition-colors"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[#1A3320]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-b border-gray-100">
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'bg-[#D4A017]/10 text-[#D4A017]'
                    : 'text-[#1A3320] hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="bg-[#D4A017] text-[#1A3320] text-sm font-semibold uppercase tracking-wider py-2 px-6 rounded-full text-center mt-2 hover:bg-[#b8880f] transition-colors"
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
