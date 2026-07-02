import Image from 'next/image'
import {
  Plane, 
  Building, 
  Palmtree, 
  IdCard, 
  ShieldCheck
} from 'lucide-react'

const features = [
  {
    id: 1,
    title: "Flight Booking",
    icon: Plane,
    description: "We offer the best flight options at competitive prices.",
  },
  {
    id: 2,
    title: "Hotel Reservations",
    icon: Building,
    description: "Find and book quality hotels that suit your comfort and budget.",
  },
  {
    id: 3,
    title: "Holiday Packages",
    icon: Palmtree,
    description: "Enjoy curated vacation packages for individuals, families and groups.",
  },
  {
    id: 4,
    title: "Visa Assistance",
    icon: IdCard,
    description: "Get expert guidance and support for your visa applications",
  }
]

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">
        {/* IMAGE */}
        <div className="relative h-[500px] overflow-hidden rounded-3xl">
          <Image
            src="/images/travel-expirence.webp"
            alt="Campus"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="lg:col-span-2">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#F6B400]">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-[#031B6E]">
            Your Journey, Our Priority
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We are passionate about travel and committed to delivering excellent service, personalized experiences, and unforgettable adventures around the world.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {features.map((feature) => (
              <div className='text-center'>
              <div
                key={feature.title}
                className="gap-5 flex flex-col items-center justify-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#031B6E] text-white">
                  <feature.icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#031B6E]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  )
}