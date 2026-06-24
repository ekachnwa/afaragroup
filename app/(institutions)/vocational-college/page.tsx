import HeroSection from '@/components/institutions/HeroSection'
import AboutSection from '@/components/institutions/skills/AboutSection'
import ProgramSection from '@/components/institutions/skills/ProgramSelection'
import StatsSection from '@/components/institutions/caregiver/StatsSection'
import NavBar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhyChooseSection from '@/components/institutions/skills/WhyChooseSection'
import FutureCTA from '@/components/institutions/skills/FutureCTA'

export default function AfarawingsPage() {
  return (
    <main className="bg-white">
      <NavBar />
      <HeroSection 
        heading='Skills & Vocational College'
        title='Practical Skills.'
        highlightedText='Real Opportunities.'
        tailingText=''
        subtitle='Afara Skills & Vocational College equips you
              with in-demand skills and hands-on training
              to build a successful career.'
        image='/images/vocationalwork.png'
        alt='Health College Hero Image'      
        />
      <AboutSection />
      <ProgramSection />
      <WhyChooseSection />
      <StatsSection />
      <FutureCTA />
      <Footer />
    </main>
  )
}