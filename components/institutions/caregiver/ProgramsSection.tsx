import { programs } from "@/lib/caregiver-data";
import ProgramCard from "./ProgramCard";

export default function ProgramsSection() {
  return (
    <section className="bg-[#F8FAFC] py-20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="font-semibold uppercase text-[#F6B400]">
            Our Programs
          </span>

          <h2 className="mt-3 text-5xl font-bold text-blue-950">
            Choose a Program That Fits Your Passion
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
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