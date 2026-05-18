import { processSteps } from '@/lib/services-data'
import ProcessCard from './ProcessCard'

export default function ProcessSection() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            Our Service Process
          </p>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            Simple Steps to Get Started
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((process) => (
            <ProcessCard
              key={process.step}
              process={process}
            />
          ))}
        </div>
      </div>
    </section>
  )
}