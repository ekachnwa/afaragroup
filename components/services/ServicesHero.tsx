import Image from 'next/image'

type Props = {
  title: string;
  highlightedText?: string
  subtitle: string;
};

export default function ServicesHero({title, highlightedText, subtitle}) {
  return (
    <section className="relative overflow-hidden bg-blue-950">
      
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Our Services
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">
            {title}
            <span className="block text-amber-400">
              {highlightedText}
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
            {subtitle}
          </p>
        </div>
        {/* Right */}
        <div className="relative">
          <div className="relative h-[500px] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/images/afara-workforce2.png"
              alt="Service Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      
    </section>
  )
}