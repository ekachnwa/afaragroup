import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/ui/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import AboutSection from '@/components/home/AboutSection'
import InstitutionsSection from '@/components/home/InstitutionsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection 
        title="A Bridge to"
        highlightedText="Global"
        trailingText="Possibilities"
        subtitle="Afara Group Limited is a multidisciplinary training and service
            organization providing world-class education in aviation,
            healthcare, vocational skills, agriculture, and international
            travel services."
        primaryButtonText="Explore Our Programs"
        primaryButtonLink="/courses"
        secondaryButtonText="Apply Now"
        secondaryButtonLink="/apply"
        Image="/images/hero.png"
        ImageAlt="Afara Group Limited - A Bridge to Global Possibilities"
      />
      <StatsSection />
      <AboutSection />
      <InstitutionsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
