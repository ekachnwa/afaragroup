import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function ProgramCard({
  title,
  description,
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <div className="relative h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-green-950">
          {title}
        </h3>

        <p className="mt-3 text-sm text-slate-600">
          {description}
        </p>

        <button className="mt-4 font-semibold">
          Learn More →
        </button>
      </div>
    </div>
  );
}