import Link from "next/link";

export default function JourneyCTA() {
  return (
    <section className="pb-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between rounded-3xl border border-white/10 bg-gradient-to-r from-[#031B6E] to-[#052A9C] px-8 py-10 lg:flex-row">
        <div>
          <h2 className="text-4xl font-bold text-white">
            Start Your Journey in Healthcare Today
          </h2>

          <p className="mt-3 text-white/90">
            We'll help turn your compassion into a career.
          </p>
        </div>

        <div className="mt-6 flex gap-4 lg:mt-0">
          <Link
            href="/apply"
            className="rounded-xl bg-[#F6B400] px-8 py-4 font-semibold text-[#031B6E] transition hover:bg-yellow-400 px-8 py-4 font-semibold text-white"
          >
            Apply Now
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Request Information
          </Link>
        </div>
      </div>
    </section>
  );
}