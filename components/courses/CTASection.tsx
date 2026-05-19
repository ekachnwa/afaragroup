import Image from 'next/image'
import { ArrowRight, Headphones, GraduationCap } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#FFF7E6]">
        <div className="grid gap-10 px-10 py-10 lg:grid-cols-[250px_1fr_auto] lg:items-center">
          {/* Image */}
          <div className="relative h-40">
           
            <GraduationCap className="h-40 w-40 text-amber-400" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-5xl font-black text-blue-950">
              Ready to start your journey?
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Choose a course, enroll today and take the first step
              toward a brighter future.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-3 rounded-xl bg-amber-400 px-7 py-4 font-semibold text-blue-950 transition hover:bg-amber-300">
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="inline-flex items-center gap-3 rounded-xl border border-blue-900 px-7 py-4 font-semibold text-blue-900 transition hover:bg-blue-50">
              <Headphones className="h-5 w-5" />
              Talk to an Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}