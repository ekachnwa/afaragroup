import { missionVisionData } from '@/lib/about-data'

export default function MissionVisionSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
            Who We Are
          </p>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            Our Mission, Vision & Purpose
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {missionVisionData.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full ${item.color}`}
                >
                  <Icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}