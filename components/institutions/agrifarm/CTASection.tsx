import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-[#031B6E] py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row">

        <div>
          <h2 className="text-4xl font-bold">
            Ready to Cultivate Your Future?
          </h2>

          <p className="mt-2 text-green-100">
            Join Afara Agrifarm College today.
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
  );
}