import { featureItems } from '@/lib/apply-data'

export default function FeaturesStrip() {
  return (
    <section className="pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[32px] border border-slate-200 bg-white px-8 py-10 md:grid-cols-2 xl:grid-cols-4">
        {featureItems.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="flex items-start gap-5"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                <Icon className="h-8 w-8 text-blue-900" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}