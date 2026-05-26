import HeroButtons from '../ui/PrimaryHeroButtons'
import HeroImage from '../ui/HeroImage'
export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
             About Us
          </p>
         <h1 className="max-w-2xl text-5xl font-black leading-tight text-blue-950 md:text-7xl">
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
          
          <div className="mt-8 flex flex-wrap gap-4">
            <HeroButtons
              primaryButtonText="Learn More About Us"
              primaryButtonLink="/about"
            />
          </div>

        </div>
        <HeroImage
          image="/images/afara-building.png"
          alt="About Hero"
        />
      </div>
    </section>
  )
}
