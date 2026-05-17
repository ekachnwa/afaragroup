import { valuesData } from '@/lib/about-data'

export default function ValuesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
            Our Values
          </p>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            The Principles That Guide Us
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {valuesData.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50">
                  <Icon className="h-10 w-10 text-blue-900" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-blue-950">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}