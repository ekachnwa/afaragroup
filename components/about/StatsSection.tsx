import {
  Building2,
  GraduationCap,
  Globe,
  Users,
} from 'lucide-react'

const stats = [
  {
    title: '5+',
    subtitle: 'Institutions',
    icon: Building2,
  },

  {
    title: '50+',
    subtitle: 'Programs',
    icon: GraduationCap,
  },

  {
    title: '10,000+',
    subtitle: 'Students Trained',
    icon: Users,
  },

  {
    title: 'Global',
    subtitle: 'Opportunities',
    icon: Globe,
  },
]

export default function StatsSection() {
  return (
    <section className="bg-blue-950 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="flex items-center gap-5 border-white/20 lg:border-r"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20">
                <Icon className="h-10 w-10" />
              </div>

              <div>
                <h3 className="text-4xl font-black">
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