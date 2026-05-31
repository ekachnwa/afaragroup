import Image from "next/image";
import Link from "next/link";

// Local Program type to avoid resolving '@/types' in this component
interface Program {
  icon: any;
  image: string;
  title: string;
  description: string;
}

interface Props {
  program: Program;
}

export default function ProgramCard({
  program,
}: Props) {
  const Icon = program.icon;

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <div className="relative h-56">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#031B6E] text-white">
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
          className="mt-6 inline-flex font-semibold text-[#031B6E]"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}