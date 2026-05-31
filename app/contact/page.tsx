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

      <ContactHero
      title='We’re Here to Help'
      highlightedText='You Succeed'
      subtitle='Have questions about our programs, admissions, or services?
            Our team is ready to assist you. Reach out to us today!'
      />

      <ContactInfoSection />

      <ContactFormSection />

      <SupportCTA />

      <Footer />
    </main>
  )
}