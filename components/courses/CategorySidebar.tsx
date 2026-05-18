import { categories } from '@/lib/courses-data'
import { GraduationCap } from 'lucide-react'

export default function CategorySidebar() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-blue-950">
        Categories
      </h3>

      <div className="mt-8 space-y-2">
        {categories.map((category, index) => {
          const Icon = category.icon

          return (
            <button
              key={category.title}
              className={`flex w-full items-center gap-4 rounded-xl px-4 py-4 text-left transition ${
                index === 0
                  ? 'bg-blue-50 text-blue-900'
                  : 'hover:bg-slate-100'
              }`}
            >
              <Icon className="h-5 w-5" />

              <span className="font-medium">
                {category.title}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-10 rounded-3xl bg-blue-950 p-6 text-white">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400">
          <GraduationCap className="h-8 w-8 text-blue-950" />
        </div>

        <h4 className="mt-5 text-2xl font-bold">
          Can’t find the right course?
        </h4>

        <p className="mt-4 text-slate-300">
          Contact our admissions team for guidance.
        </p>

        <button className="mt-6 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-blue-950 transition hover:bg-amber-300">
          Contact Admissions
        </button>
      </div>
    </div>
  )
}