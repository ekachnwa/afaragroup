import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import ApplyHero from '@/components/portal/apply/ApplyHero'
import ApplicationFormSection from '@/components/portal/apply/ApplicationFormSection'
import FeaturesStrip from '@/components/portal/apply/FeaturesStrip'

export default function ApplyPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <Navbar />

      <ApplyHero />

      <ApplicationFormSection />

      <FeaturesStrip />

      <Footer />
    </main>
  )
}