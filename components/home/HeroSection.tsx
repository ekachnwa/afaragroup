import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="max-w-2xl text-5xl font-black leading-tight text-blue-950 md:text-7xl">
            A Bridge to
            <span className="block text-amber-500">
              Global
            </span>
            Possibilities
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Afara Group Limited is a multidisciplinary training and service
            organization providing world-class education in aviation,
            healthcare, vocational skills, agriculture, and international
            travel services.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-800">
              Explore Our Programs
            </button>

            <button className="rounded-xl border border-blue-900 px-7 py-4 font-semibold text-blue-900 transition hover:bg-blue-50">
              Apply Now
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/hero.png"
              alt="Hero"
              width={800}
            height={600}
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}