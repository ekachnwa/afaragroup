import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import ContactHero from '@/components/contact/ContactHero'
import ContactInfoSection from '@/components/contact/ContactInfoSection'
import ContactFormSection from '@/components/contact/ContactFormSection'
import SupportCTA from '@/components/contact/SupportCTA'

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <ContactHero />

      <ContactInfoSection />

      <ContactFormSection />

      <SupportCTA />

      <Footer />
    </main>
  )
}