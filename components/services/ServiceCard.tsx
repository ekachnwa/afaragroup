import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

type Props = {
  service: any
}

export default function ServiceCard({ service }: Props) {
  const Icon = service.icon

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-64">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
          <Icon className={`h-8 w-8 ${service.color}`} />
        </div>

        <h3 className="mt-6 text-3xl font-bold text-blue-950">
          {service.title}
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          {service.description}
        </p>

        <ul className="mt-6 space-y-3">
          {service.items.map((item: string) => (
            <li
              key={item}
              className="flex items-center gap-3 text-slate-700"
            >
              <div className="h-2 w-2 rounded-full bg-slate-500" />
              {item}
            </li>
          ))}
        </ul>

        <button
          className={`mt-8 inline-flex items-center gap-2 font-semibold ${service.color}`}
        >
          {service.button}

          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}