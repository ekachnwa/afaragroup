import PrimaryHeroButtons from './PrimaryHeroButtons'
import SecondaryHeroButtons from './SecondaryHeroButtons'
import HeroImage from './HeroImage'

type Props = {
  title: string;
  highlightedText?: string
  subtitle: string;
  trailingText?: string;

  primaryButtonText: string
  primaryButtonLink: string

  secondaryButtonText: string
  secondaryButtonLink: string

  Image?: string
  ImageAlt?: string

};

export default function HeroSection({ title, highlightedText, subtitle, trailingText, primaryButtonText, primaryButtonLink, secondaryButtonText, secondaryButtonLink, Image, ImageAlt }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="max-w-2xl text-5xl font-black leading-tight text-blue-950 md:text-7xl">
            {title}
            <span className="block text-amber-500">
              {highlightedText}
            </span>
            {trailingText}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {subtitle}
          </p>

            <div className="mt-8 flex flex-wrap gap-4">

                <PrimaryHeroButtons
                    primaryButtonText={primaryButtonText}
                    primaryButtonLink={primaryButtonLink}
                    className='rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-800'
                />
                <SecondaryHeroButtons
                    secondaryButtonText={secondaryButtonText}
                    secondaryButtonLink={secondaryButtonLink}
                    className='rounded-xl border border-blue-900 px-7 py-4 font-semibold text-blue-900 transition hover:bg-blue-50'
                />
            </div>
            
        </div>
        <div className="relative">
       <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-2xl"></div>
        {Image && (
          <HeroImage
            image={Image}
            alt={ImageAlt || "Afara Group Limited - A Bridge to Global Possibilities"}
          />
        )}
        </div>
      </div>
    </section>
  )
}