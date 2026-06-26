import Image from "next/image";
import Link from "next/link";
import { Program } from "@/types";

interface Props {
  program: Program; 
}


export default function ProgramCard({
  program,
}: Props) {
  const Icon = program.icon;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-52">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 -mt-12 z-10 relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#031B6E] text-white border-4 border-white">
          <Icon size={22} />
        </div>

        <h3 className="text-xl font-bold text-blue-950">
          {program.title}
        </h3>

        <p className="mt-3 text-slate-600">
          {program.description}
        </p>

        <Link
          href="#"
          className="mt-5 inline-flex font-semibold text-[#031B6E] hover:text-[#F6B400]"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}