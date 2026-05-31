import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import ServicesHero from '@/components/services/ServicesHero'
import CoreServicesSection from '@/components/services/CoreServicesSection'
import FeaturesSection from '@/components/services/FeaturesSection'
import ProcessSection from '@/components/services/ProcessSection'
import CTASection from '@/components/services/CTASection'

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <ServicesHero 
      title='Empowering You with'
      highlightedText='World-Class Solutions'
      subtitle='Afara Group Limited provides a wide range of training and
            professional services designed to equip individuals with
            the skills, knowledge, and opportunities needed to succeed.'
      />

       <CoreServicesSection />

      <FeaturesSection />

      <ProcessSection />

      <CTASection />

      <Footer />
    </main>
  )
}