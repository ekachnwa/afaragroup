import { stats } from '@/lib/courses-data'

export default function StatsSection() {
  return (
    <section className="pb-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl bg-blue-950 px-8 py-10 md:grid-cols-2 xl:grid-cols-5">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="flex items-center gap-5 border-r border-white/10 pr-6 last:border-none"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20">
                <Icon className="h-8 w-8 text-white" />
              </div>

              <div>
                <h3 className="text-4xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-300">
                  {item.subtitle}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}