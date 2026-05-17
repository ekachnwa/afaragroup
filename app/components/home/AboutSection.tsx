import Image from 'next/image'
import { Play } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-500">
            About Afara Group
          </p>

          <h2 className="mt-4 text-5xl font-black leading-tight text-blue-950">
            Building Skills. Connecting People. Creating Futures.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Afara Group Limited is a forward-thinking organization committed
            to developing skilled professionals and connecting individuals
            to global opportunities.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Through our specialized institutions, we provide high-quality
            training in aviation, healthcare, vocational skills,
            agriculture, and international travel services.
          </p>

          <button className="mt-8 rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-800">
            Learn More About Us
          </button>
        </div>

        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
          <Image
            src="/images/hero-about.png"
            alt="Building"
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />

          <button className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl">
            <Play className="h-10 w-10 fill-blue-900 text-blue-900" />
          </button>
        </div>
      </div>
    </section>
  )
}