// components/skills/FutureCTA.tsx

import Link from "next/link";

export default function FutureCTA() {
  return (
    <section className="pb-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 rounded-[32px] border border-white/10 bg-gradient-to-r from-[#031B6E] to-[#052A9C] px-10 py-14 lg:flex-row">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Ready to Build Your Future?
          </h2>

          <p className="mt-3 text-slate-50">
            Gain practical skills for real opportunities.
          </p>
        </div>

        <div className="mt-6 flex gap-4 lg:mt-0">
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
  );
}