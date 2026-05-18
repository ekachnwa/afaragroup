// components/layout/Navbar.tsx

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },

  {
    label: 'About Us',
    href: '/about',
  },

  {
    label: 'Our Institutions',
    href: '/institutions',
    hasDropdown: true,
  },

  {
    label: 'Courses',
    href: '/courses',
  },

  {
    label: 'Student Portal',
    href: '/portal',
  },

  {
    label: 'Services',
    href: '/services',
  },

  {
    label: 'Contact Us',
    href: '/contact',
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link
          href="/"
          className="relative h-16 w-[220px]"
        >
          <Image
            src="/images/logo.png"
            alt="Afara Group Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative flex items-center gap-1 text-[15px] font-medium transition ${
                  isActive
                    ? 'text-blue-900'
                    : 'text-slate-700 hover:text-blue-900'
                }`}
              >
                {link.label}

                {link.hasDropdown && (
                  <ChevronDown className="h-4 w-4" />
                )}

                {/* Active Underline */}
                <span
                  className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-amber-400 transition-all duration-300 ${
                    isActive
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/apply"
          className="rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
        >
          Apply Now
        </Link>
      </div>
    </header>
  )
}