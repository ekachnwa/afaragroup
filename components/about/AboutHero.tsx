import HeroButtons from '../ui/PrimaryHeroButtons'
import HeroImage from '../ui/HeroImage'

type Props = {
  title: string;
  highlightedText?: string
  subtitle: string;
  trailingText?: string;

  Image?: string
  ImageAlt?: string
};

export default function AboutHero({title, highlightedText, subtitle, trailingText, Image, ImageAlt}: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
             About Us
          </p>
         <h1 className="max-w-2xl text-5xl font-black leading-tight text-blue-950 md:text-7xl">
            {title}
            <span className="block text-amber-500">
             {highlightedText}
            </span>
            {trailingText}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            {subtitle}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <HeroButtons
              primaryButtonText="Learn More About Us"
              primaryButtonLink="/about"
              className="rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-800"
            />
          </div>

        </div>
        <div className="relative">
       <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-2xl">
        {Image && (
          <HeroImage
            image={Image}
            alt={ImageAlt}
          />
        )}
        </div>
        </div>
      </div>
    </section>
  )
}