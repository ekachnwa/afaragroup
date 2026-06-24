import { programs } from "@/lib/agrifarm-data";
import ProgramCard from "./ProgramCard";

export default function ProgramsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-center text-4xl font-bold text-green-950">
          Explore Our Agrifarm Programs
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
              image={program.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}