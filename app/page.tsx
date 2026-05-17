import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import AboutSection from '@/components/home/AboutSection'
import InstitutionsSection from '@/components/home/InstitutionsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <InstitutionsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
