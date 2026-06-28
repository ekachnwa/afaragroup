import Image from 'next/image'
import {
  GraduationCap,
  Users,
  Plane,
  Globe,
} from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'Industry-Aligned Curriculum',
    description:
      'Courses designed in partnership with aviation industry leaders.',
  },

  {
    icon: Users,
    title: 'Experienced Instructors',
    description:
      'Learn from qualified professionals with real-world experience.',
  },

  {
    icon: Plane,
    title: 'Modern Facilities',
    description:
      'State-of-the-art labs, simulators, and training equipment.',
  },

  {
    icon: Globe,
    title: 'Global Opportunities',
    description:
      'We prepare you for careers anywhere in the world.',
  },
]

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">
        {/* IMAGE */}
        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src="/images/afara-building.png"
            alt="Campus"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#F6B400]">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-[#031B6E]">
            Your Journey, Our Priority
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are passionate about travel and committed to delivering excellent service, personalized experiences, and unforgettable adventures around the world.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {features.map((feature) => (
              <div className='text-center'>
              <div
                key={feature.title}
                className="gap-5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#031B6E] text-white">
                  <feature.icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#031B6E]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}