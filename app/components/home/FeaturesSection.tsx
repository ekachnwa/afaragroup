// components/home/FeaturesSection.tsx

import {
  BriefcaseBusiness,
  GraduationCap,
  Globe,
  ShieldCheck,
  Users,
} from 'lucide-react'

type Feature = {
  id: number
  title: string
  description: string
  icon: React.ElementType
  iconColor: string
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Industry-Focused Training',
    description:
      'Curriculum designed to meet global standards.',
    icon: BriefcaseBusiness,
    iconColor: 'text-blue-700',
  },
  {
    id: 2,
    title: 'Experienced Instructors',
    description:
      'Learn from qualified professionals.',
    icon: ShieldCheck,
    iconColor: 'text-emerald-600',
  },
  {
    id: 3,
    title: 'Career-Oriented Programs',
    description:
      'Practical training for real-world success.',
    icon: GraduationCap,
    iconColor: 'text-orange-500',
  },
  {
    id: 4,
    title: 'Global Opportunities',
    description:
      'Connecting you to international pathways.',
    icon: Globe,
    iconColor: 'text-violet-600',
  },
  {
    id: 5,
    title: 'Student-Centered Support',
    description:
      'We support you every step of the way.',
    icon: Users,
    iconColor: 'text-pink-600',
  },
]

export default function FeaturesSection() {
  return (
    <section className="pb-24 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 rounded-3xl bg-[#F7F8FC] p-6 md:grid-cols-2 xl:grid-cols-5">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.id}
                className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
                    <Icon
                      className={`h-7 w-7 ${feature.iconColor}`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="text-lg font-bold leading-snug text-[#0B2C6D]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}