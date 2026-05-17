import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
            About Us
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-blue-950 md:text-7xl">
            A Bridge to
            <span className="block text-amber-500">
              Global
            </span>
            Possibilities
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Afara Group Limited is a forward-thinking organization committed
            to developing skilled professionals and connecting individuals
            to global opportunities.
          </p>

          <button className="mt-8 rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-800">
            Learn More About Us
          </button>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="relative h-[500px] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/about-hero.jpg"
              alt="About Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}