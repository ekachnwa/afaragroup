import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import AboutHero from '@/components/about/AboutHero'
import MissionVisionSection from '@/components/about/MissionVisionSection'
import StorySection from '@/components/about/StorySection'
import StatsSection from '@/components/about/StatsSection'
import ValuesSection from '@/components/about/ValuesSection'
import CTASection from '@/components/about/CTASection'

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <AboutHero />

      <MissionVisionSection />

      <StorySection />

      <StatsSection />

      <ValuesSection />

      <CTASection />

      <Footer />
    </main>
  )
}