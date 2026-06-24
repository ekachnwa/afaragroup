import AgrifarmHero from "@/components/institutions/agrifarm/AgrifarmHero";
import AboutSection from "@/components/institutions/agrifarm/AboutSection";
import ProgramsSection from "@/components/institutions/agrifarm/ProgramsSection";
import StatsSection from "@/components/institutions/agrifarm/StatsSection";
import CTASection from "@/components/institutions/agrifarm/CTASection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import HeroSection from "@/components/ui/HeroSection";

export default function AgrifarmPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <AgrifarmHero />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}