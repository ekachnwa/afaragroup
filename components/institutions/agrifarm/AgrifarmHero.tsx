import Image from "next/image";
import PrimaryHeroButtons from "@/components/ui/PrimaryHeroButtons";

export default function AgrifarmHero() {
  return (
    <section className="relative overflow-hidden bg-[#031B6E]">
      <div className="grid lg:grid-cols-2">

        <div className="px-8 py-20 lg:px-16">
          <span className="text-[#F6B400] font-semibold uppercase">
            Grow Your Passion
          </span>

          <h1 className="max-w-xl text-5xl font-bold leading-tight text-white md:text-6xl">
            Harvest a
            <span className="text-[#F6B400]">
              Better Future
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
            Practical knowledge, sustainable agriculture,
            and modern farming skills for tomorrow's leaders.
          </p>

          <div className="mt-8 flex gap-4">
            {/* <PrimaryHeroButtons>
              Explore Programs
            </PrimaryHeroButtons> */}

            {/* <PrimaryHeroButtons href="/tour">
              Take a Campus Tour
            </PrimaryHeroButtons> */}
          </div>
        </div>

        <div className="relative h-[500px]">
          <Image
            src="/images/farm-banner.png"
            alt="Agrifarm Students"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}