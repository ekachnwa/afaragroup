import Image from 'next/image'
import { ArrowRight, Headphones } from 'lucide-react'
import PrimaryHeroButtons from '../ui/PrimaryHeroButtons'
import SecondaryHeroButtons from '../ui/SecondaryHeroButtons'

type Props = {
  title: string;
  highlightedText?: string
  subtitle: string;
};

export default function CoursesHero({title, highlightedText, subtitle}) {
  return (
    <section className="relative overflow-hidden bg-blue-950">
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Our Courses
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">
            {title}
            <span className="block text-amber-400">
              {highlightedText}
            </span>
          </h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-amber-400" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryHeroButtons
              primaryButtonText='Apply Now'
              primaryButtonLink='/apply'
              className='inline-flex items-center gap-3 rounded-xl bg-amber-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-amber-300'
            >
            <ArrowRight className="h-5 w-5" />
            </PrimaryHeroButtons>

            <SecondaryHeroButtons
              secondaryButtonText='Talk to an Advisor'
              secondaryButtonLink='/contact'
              className='inline-flex items-center gap-3 rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10'
            >
              <Headphones className="h-5 w-5" />
            </SecondaryHeroButtons>

          </div>
        </div>
        {/* Right */}
        <div className="relative">
          <div className="relative h-[500px] overflow-hidden rounded-[32px] ">
            <Image
              src="/images/hero-about.png"
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