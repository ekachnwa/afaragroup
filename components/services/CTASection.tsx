import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-blue-950">
        <div className="grid gap-10 px-10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-5xl font-black leading-tight text-white">
              Ready To Experience the
              <span className="text-amber-400">
                {' '}
                Afara Difference?
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Our services are designed to transform your potential
              into global success.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-xl bg-amber-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-amber-300">
                Apply Now
              </button>

              <button className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                Contact Admissions
              </button>
            </div>
          </div>

          <div className="relative h-[300px]">
            <Image
              src="/images/global-map.png"
              alt="World Map"
              fill
              className="object-fit opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  )
}