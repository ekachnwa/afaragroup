// components/skills/ProgramsSection.tsx

import { programs } from "@/lib/skills-college-data";
import ProgramCard from "./ProgramCard";

export default function ProgramsSection() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F6B400]">
            Our Programs
          </span>

          <h2 className="mt-3 text-5xl font-bold text-blue-950">
            Explore Our Vocational Programs
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard
              key={program.title}
              program={program}
            />
          ))}
        </div>
      </div>
    </section>
  );
}