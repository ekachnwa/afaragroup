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
      <HeroSection 
        heading='Aero College'
        title='Your Journey to a Career in'
        highlightedText=' Aviation '
        tailingText='Starts Here'
        subtitle='Afarawings Aero College provides world-class aviation training,
            modern facilities, and industry partnerships that prepare you for
            excellence in the global aviation industry.' 
          image='/images/hero-about.png'
        alt='Afarawings Aero College Hero Image'     
        />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}