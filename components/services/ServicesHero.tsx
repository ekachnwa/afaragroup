import Image from 'next/image'

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-blue-950">
      <div className="absolute inset-0">
        <Image
          src="/images/services-hero.jpg"
          alt="Services Hero"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Our Services
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">
            Empowering You with
            <span className="block text-amber-400">
              World-Class Solutions
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
            Afara Group Limited provides a wide range of training and
            professional services designed to equip individuals with
            the skills, knowledge, and opportunities needed to succeed.
          </p>
        </div>
      </div>
    </section>
  )
}