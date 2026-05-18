import { services } from '@/lib/services-data'
import ServiceCard from './ServiceCard'

export default function CoreServicesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            What We Offer
          </p>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            Our Core Services
          </h2>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-5">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}