import {
  GraduationCap,
  Users,
  Globe,
  Building2,
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
    <section className="-mt-10 relative z-20 px-6">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl bg-blue-950 px-10 py-8 text-white shadow-2xl md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 border-white/20 lg:border-r"
            >
              <div className="rounded-full border border-white/30 p-4">
                <Icon className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className="text-slate-300">{item.subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}