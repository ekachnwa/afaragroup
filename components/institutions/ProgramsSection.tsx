// components/afarawings/ProgramsSection.tsx

import Image from 'next/image'
import Link from 'next/link'
import {
  Plane,
  Cog,
  Users,
  Briefcase,
  Globe,
} from 'lucide-react'

const programs = [
  {
    title: 'Commercial Pilot License (CPL)',
    description:
      'Train to become a professional pilot with our comprehensive CPL program.',
    image: '/images/programs/program-1.png',
    icon: Plane,
  },

  {
    title: 'Aircraft Maintenance Engineering (AME)',
    description:
      'Gain the technical skills to maintain aircraft and ensure safety in the skies.',
    image: '/images/programs/program-2.png',
    icon: Cog,
  },

  {
    title: 'Cabin Crew Training',
    description:
      'Prepare for a rewarding career in cabin services and passenger safety.',
    image: '/images/programs/program-3.png',
    icon: Users,
  },

  {
    title: 'Aviation Management & Operations',
    description:
      'Develop the knowledge and leadership skills for aviation management roles.',
    image: '/images/programs/program-4.png',
    icon: Briefcase,
  },

  {
    title: 'Aviation Tourism & Travel Management',
    description:
      'Build a career in the dynamic world of travel and tourism management.',
    image: '/images/programs/program-5.png',
    icon: Globe,
  },
]

export default function ProgramsSection() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F6B400]">
            Our Programs
          </p>

          <h2 className="mt-3 text-4xl font-bold text-[#031B6E]">
            Explore Our Programs
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          {programs.map((program) => (
            <div
              key={program.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-52">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 -mt-12 z-10 relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#031B6E] text-white border-4 border-white">
                  <program.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#031B6E]">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>

                <Link
                  href="/courses"
                  className="mt-6 inline-flex font-semibold text-[#031B6E] hover:text-[#F6B400]"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/courses"
            className="rounded-xl bg-[#031B6E] px-10 py-4 font-semibold text-white transition hover:bg-blue-900"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  )
}