import { courses } from '@/lib/courses-data'
import CourseCard from './CourseCard'

export default function CoursesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.title}
          course={course}
        />
      ))}
    </div>
  )
}