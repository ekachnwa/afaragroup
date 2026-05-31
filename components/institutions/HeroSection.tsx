import PrimaryHeroButtons from '../ui/PrimaryHeroButtons'
  
type Props  = {
  heading: string,
  title: string,
  highlightedText: string,
  tailingText: string,
  subtitle: string,

  image?: string,
  alt?: string,

}

export default function HeroSection({heading, title, highlightedText, tailingText, subtitle, image, alt}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#031B6E]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
        {/* LEFT */}
        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F6B400]">
            {heading}
          </p>

          <h1 className="max-w-xl text-5xl font-bold leading-tight text-white md:text-6xl">
            {title}
            <br />
            <span className="text-[#F6B400]">{highlightedText}</span>
            {tailingText}
          </h1>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#F6B400]" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <PrimaryHeroButtons
              primaryButtonText="Explore Programs →"
              primaryButtonLink="/courses"
              className='rounded-xl bg-[#F6B400] px-8 py-4 font-semibold text-[#031B6E] transition hover:bg-yellow-400'
            />
            
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative h-[520px] w-full overflow-hidden rounded-[32px]">
            {/* <Image
              src="/images/hero-about.png"
              alt="Afarawings Hero"
              fill
              className="object-cover"
              priority
            /> */}
            {image && alt && <img src={image} alt={alt} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />}
          </div>
        </div>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />
    </section>
  )
}