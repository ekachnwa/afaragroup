import Image from 'next/image'
import { Clock3, Award, ArrowRight } from 'lucide-react'

type Props = {
  course: any
}

export default function CourseCard({ course }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-52">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-900">
          {course.category}
        </span>

        <h3 className="mt-5 text-2xl font-bold text-blue-950">
          {course.title}
        </h3>

        <div className="mt-5 flex items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {course.duration}
          </div>

          <div className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            Certificate
          </div>
        </div>

        <button className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-900">
          View Details
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}