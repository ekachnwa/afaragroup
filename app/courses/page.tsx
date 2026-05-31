import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import CoursesHero from '@/components/courses/CoursesHero'
import CourseSearchSection from '@/components/courses/CourseSearchSection'
import StatsSection from '@/components/courses/StatsSection'
import CTASection from '@/components/courses/CTASection'

export default function CoursesPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <Navbar />

      <CoursesHero
        title='Learn Today,'
        highlightedText='Lead Tomorrow'
        subtitle='Explore our wide range of professional courses designed
            to build skills, advance careers, and create global
            opportunities.'
      />

      <CourseSearchSection />

      <StatsSection />

      <CTASection />

      <Footer />
    </main>
  )
}