// components/layout/Footer.tsx

import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import {
  Globe,
  Mail,
  Phone,
} from 'lucide-react'
const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-[#032C73] text-white">
      {/* Top Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3">
        {/* Left Section */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F4B400]">
            Ready To Start Your Journey?
          </p>

          <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight">
            Join thousands of students who have chosen
            Afara Group for a brighter future.
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-[#F4B400] px-6 py-3 text-sm font-semibold text-[#032C73] transition hover:opacity-90">
              Apply Now
            </button>

            <button className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
              Contact Admissions
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="border-white/20 lg:border-l lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F4B400]">
            Student Portal
          </p>

          <p className="mt-5 max-w-sm text-base leading-8 text-slate-300">
            Access your dashboard, track applications,
            make payments, download certificates and more.
          </p>

          <button className="mt-8 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
            Login to Portal
          </button>
        </div>

        {/* Right Section */}
        <div className="border-white/20 lg:border-l lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F4B400]">
            Follow Us
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-4">
            <Link
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-5 w-5" />
            </Link>

            <Link
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </Link>

            <Link
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </Link>

            <Link
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
              aria-label="YouTube"
            >
              <FaYoutube className="h-5 w-5" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#F4B400]" />
              <span>info@afaragroup.com</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#F4B400]" />
              <span>+234 808 912 5154</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-[#F4B400]" />
              <span>www.afaragroup.com.ng</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-slate-300 md:flex-row">
          <p id="year"></p><p>
            © {currentYear} Afara Group Limited. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}