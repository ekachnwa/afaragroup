import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/ui/HeroSection'
import AboutSection from '@/components/institutions/AboutSection'
// import ServicesSection from '@/components/institutions/travels/ServicesSection'
import CTASection from '@/components/institutions/CTASection'

import Footer from '@/components/layout/Footer'

export default function TravelsPage() {
  return (
    <>
      <Navbar />

      <HeroSection 
        title={
            <>
                Explore the World
                &nbsp;
                <span className="text-orange-500">
                    Create Memories
                </span> &nbsp;
                That Last Forever
            </>
        }

        subtitle="Afara Travels is your trusted travel partner..."
        Image="/images/travel-hero.webp"
        ImageAlt="Explore the world with Afara Travels"
        primaryButtonText="Book Now" // Added required prop
        primaryButtonLink="/contact" // Added required prop
        secondaryButtonText="Learn More" // Added required prop
        secondaryButtonLink="/about" // Added required prop

      />

      {/* <BookingSearch /> */}

      <AboutSection />

       {/* <ServicesSection /> */}

      {/*<DestinationsSection />

      <WhyChooseSection />

      <TestimonialSection />*/}

      <CTASection /> 

      <Footer />
    </>
  )
}