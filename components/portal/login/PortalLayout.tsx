import PortalBranding from './PortalBranding'
import LoginCard from './LoginCard'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function PortalLayout() {
  return (
    <main className="min-h-screen bg-[#F5F7FB]">
      <Navbar />
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Side */}
        <PortalBranding />

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-16">
          <LoginCard />
        </div>
      </div>
      <Footer />
    </main>
  )
}