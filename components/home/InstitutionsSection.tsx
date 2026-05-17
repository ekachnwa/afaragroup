import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { institutions } from '@/lib/data'

export default function InstitutionsSection() {
  return (
    <section className="pb-24 mb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-amber-500">Our Institutions</p>
          <h2 className="mt-4 text-4xl font-bold text-blue-950">Empowering Lives Through Education</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {institutions.map((institution) => (
            <div key={institution.id} className="rounded-2xl bg-white p-6 shadow-lg mb-32">
              <Image
                src={institution.image}
                alt={institution.name}
                width={400}
                height={300}
                className="h-full w-full object-cover mb-4"
              />
              <h3 className="mt-4 text-xl font-bold text-blue-950 pt-4">{institution.name}</h3>
              <p className="mt-2 text-slate-600">{institution.description}</p>
              <button className="mt-4 flex items-center gap-2 text-blue-900 hover:text-blue-700">
                Learn More
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}