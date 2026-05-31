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

      <AboutHero 
        title='A Bridge to'
        highlightedText='Global'
        trailingText='Possibilities'
        subtitle='Afara Group Limited is a forward-thinking organization committed
            to developing skilled professionals and connecting individuals
            to global opportunities.'
        Image='/images/afara-building.png'
        ImageAlt='Afara Group Limited - A Bridge to Global Possibilities'
      />

      <MissionVisionSection />

      <StorySection />

      <StatsSection />

      <ValuesSection />

      <CTASection />

      <Footer />
    </main>
  )
}