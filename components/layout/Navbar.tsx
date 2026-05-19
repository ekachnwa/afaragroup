// components/layout/Navbar.tsx

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import {
  ChevronDown,
  Menu,
  X,
} from 'lucide-react'

const institutionLinks = [
  {
    label: 'Afarawings Aero College',
    href: '/institutions/aero-college',
  },

  {
    label: 'Afara Caregiver & Allied Health College',
    href: '/institutions/health-college',
  },

  {
    label: 'Afara Skills & Vocational College',
    href: '/institutions/vocational-college',
  },

  {
    label: 'Afara AgriFarm Training',
    href: '/institutions/agrifarm-training',
  },

  {
    label: 'Afarawings Travels',
    href: '/institutions/travels',
  },
]

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

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false)

  const [mobileDropdownOpen, setMobileDropdownOpen] =
    useState(false)

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

        {/* =========================
            Desktop Navigation
        ========================== */}
        <nav className="hidden items-center gap-10 lg:flex">
          {/* Regular Links */}
          {navLinks.slice(0, 2).map((link) => {
            const isActive =
              pathname === link.href

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative text-[15px] font-medium transition ${
                  isActive
                    ? 'text-blue-900'
                    : 'text-slate-700 hover:text-blue-900'
                }`}
              >
                {link.label}

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

          {/* Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-[15px] font-medium text-slate-700 transition hover:text-blue-900">
              Our Institutions

              <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            <div className="invisible absolute left-0 top-10 w-[320px] translate-y-3 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {institutionLinks.map((item) => {
                const isActive =
                  pathname === item.href

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? 'bg-blue-50 text-blue-900'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-blue-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Remaining Links */}
          {navLinks.slice(2).map((link) => {
            const isActive =
              pathname === link.href

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative text-[15px] font-medium transition ${
                  isActive
                    ? 'text-blue-900'
                    : 'text-slate-700 hover:text-blue-900'
                }`}
              >
                {link.label}

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

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <Link
            href="/apply"
            className="hidden rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-800 lg:inline-flex"
          >
            Apply Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 lg:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* =========================
          Mobile Menu
      ========================== */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          mobileMenuOpen
            ? 'max-h-[1000px]'
            : 'max-h-0'
        }`}
      >
        <div className="space-y-2 px-6 py-6">
          {/* Home + About */}
          {navLinks.slice(0, 2).map((link) => {
            const isActive =
              pathname === link.href

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block rounded-xl px-4 py-4 font-medium transition ${
                  isActive
                    ? 'bg-blue-50 text-blue-900'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                {link.label}
              </Link>
            )
          })}

          {/* Mobile Dropdown */}
          <div className="rounded-2xl border border-slate-200">
            <button
              onClick={() =>
                setMobileDropdownOpen(
                  !mobileDropdownOpen
                )
              }
              className="flex w-full items-center justify-between px-4 py-4 font-medium text-slate-700"
            >
              Our Institutions

              <ChevronDown
                className={`h-5 w-5 transition ${
                  mobileDropdownOpen
                    ? 'rotate-180'
                    : ''
                }`}
              />
            </button>

            {/* Dropdown Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileDropdownOpen
                  ? 'max-h-[500px]'
                  : 'max-h-0'
              }`}
            >
              <div className="space-y-1 px-3 pb-3">
                {institutionLinks.map((item) => {
                  const isActive =
                    pathname === item.href

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() =>
                        setMobileMenuOpen(false)
                      }
                      className={`block rounded-xl px-4 py-3 text-sm transition ${
                        isActive
                          ? 'bg-blue-50 text-blue-900'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Remaining Links */}
          {navLinks.slice(2).map((link) => {
            const isActive =
              pathname === link.href

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block rounded-xl px-4 py-4 font-medium transition ${
                  isActive
                    ? 'bg-blue-50 text-blue-900'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                {link.label}
              </Link>
            )
          })}

          {/* Mobile CTA */}
          <Link
            href="/apply"
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="mt-4 flex items-center justify-center rounded-xl bg-blue-900 px-6 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  )
}