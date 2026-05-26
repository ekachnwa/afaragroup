// components/afarawings/StatsSection.tsx

import {
  GraduationCap,
  Plane,
  Users,
  Globe,
} from 'lucide-react'

const stats = [
  {
    icon: GraduationCap,
    value: '500+',
    label: 'Students Enrolled',
  },

  {
    icon: Plane,
    value: '10+',
    label: 'Aviation Programs',
  },

  {
    icon: Users,
    value: '30+',
    label: 'Industry Partners',
  },

  {
    icon: Globe,
    value: '95%',
    label: 'Graduate Employability',
  },
]

export default function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#031B6E]/10 text-[#031B6E]">
              <stat.icon className="h-7 w-7" />
            </div>

            <h3 className="mt-6 text-4xl font-bold text-[#031B6E]">
              {stat.value}
            </h3>

            <p className="mt-3 text-slate-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}