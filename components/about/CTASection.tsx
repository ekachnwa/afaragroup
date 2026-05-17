import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="overflow-hidden bg-blue-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <h2 className="text-5xl font-black leading-tight">
            Ready to start your journey?
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Join Afara Group Limited and take the first step toward
            a successful global career.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-amber-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-amber-300">
              Apply Now
            </button>

            <button className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10">
              Contact Admissions
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative h-[350px]">
          <Image
            src="/images/world-map.png"
            alt="World Map"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}