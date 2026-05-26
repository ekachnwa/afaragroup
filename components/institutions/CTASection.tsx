// components/afarawings/CTASection.tsx

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-[#031B6E] py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 rounded-[32px] border border-white/10 bg-gradient-to-r from-[#031B6E] to-[#052A9C] px-10 py-14 lg:flex-row">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Ready to Take Off?
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Join Afarawings Aero College and turn your passion for aviation
            into a successful career.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/apply"
            className="rounded-xl bg-[#F6B400] px-8 py-4 font-semibold text-[#031B6E] transition hover:bg-yellow-400"
          >
            Apply Now
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Request Information
          </Link>
        </div>
      </div>
    </section>
  )
}