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

      <ServicesHero />

       <CoreServicesSection />

      <FeaturesSection />

      <ProcessSection />

      <CTASection />

      <Footer />
    </main>
  )
}