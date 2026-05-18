import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-blue-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero.jpg"
          alt="Contact Hero"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Contact Us
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">
            We’re Here to Help
            <span className="block text-amber-400">
              You Succeed
            </span>
          </h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-amber-400" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
            Have questions about our programs, admissions, or services?
            Our team is ready to assist you. Reach out to us today!
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-3 rounded-xl bg-amber-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-amber-300">
              <Phone className="h-5 w-5" />
              Call Us Now
            </button>

            <button className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
              <Mail className="h-5 w-5" />
              Email Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}