import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  'Home',
  'About Us',
  'Our Institutions',
  'Courses',
  'Student Portal',
  'Services',
  'Contact Us',
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div>
          <Image
            src="/images/logo.png"
            alt="Afara Group Logo"
            width={150}
            height={50}
          />
          <p className="text-xs text-slate-500">
            A Bridge to Global Possibilities
          </p>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
            >
              {link}
            </Link>
          ))}
        </nav>

        <button className="rounded-lg bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
          Apply Now
        </button>
      </div>
    </header>
  )
}