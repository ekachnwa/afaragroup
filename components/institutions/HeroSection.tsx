import Image from 'next/image'
import Link from 'next/link'
import { PlaySquare } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#031B6E]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* LEFT */}
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F6B400]">
            Afarawings Aero College
          </p>

          <h1 className="max-w-xl text-5xl font-bold leading-tight text-white md:text-6xl">
            Your Journey
            <br />
            to a Career in
            <span className="text-[#F6B400]"> Aviation </span>
            Starts Here
          </h1>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#F6B400]" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
            Afarawings Aero College provides world-class aviation training,
            modern facilities, and industry partnerships that prepare you for
            excellence in the global aviation industry.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="rounded-xl bg-[#F6B400] px-8 py-4 font-semibold text-[#031B6E] transition hover:bg-yellow-400"
            >
              Explore Programs →
            </Link>

            <button className="flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20">
              <PlaySquare className="h-5 w-5" />
              Take Campus Tour
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative h-[520px] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/images/hero-about.png"
              alt="Afarawings Hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
    </section>
  )
}