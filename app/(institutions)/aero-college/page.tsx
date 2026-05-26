import HeroSection from '@/components/institutions/HeroSection'
import AboutSection from '@/components/institutions/AboutSection'
import ProgramsSection from '@/components/institutions/ProgramsSection'
import StatsSection from '@/components/institutions/StatsSection'
import CTASection from '@/components/institutions/CTASection'
import NavBar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function AfarawingsPage() {
  return (
    <main className="bg-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}