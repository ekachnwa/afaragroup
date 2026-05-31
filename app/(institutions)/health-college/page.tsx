import HeroSection from '@/components/institutions/HeroSection'
import AboutSection from '@/components/institutions/caregiver/AboutSection'
import ProgramsSection from '@/components/institutions/caregiver/ProgramsSection'
import StatsSection from '@/components/institutions/caregiver/StatsSection'
import CTASection from '@/components/institutions/caregiver/JourneyCTA'
import NavBar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function AfarawingsPage() {
  return (
    <main className="bg-white">
      <NavBar />
      <HeroSection 
        heading='Health College'
        title='Empowering Compassion.'
        highlightedText='Transforming Lives.'
        tailingText=''
        subtitle='Afara Caregiver & Allied Health College prepares
              you for meaningful careers in healthcare.'  
        image='/images/health-college.jpg'
        alt='Health College Hero Image'     
        />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  )
}