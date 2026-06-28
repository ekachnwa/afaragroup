import ServiceCard from './ServiceCard'
import { Plane, Building, Palmtree, IdCard, ShieldCheck } from 'lucide-react'

export const services = [

  {
    id: 1,
    title: "Flight Booking",
    icon: Plane,
    description: "Competitive airline tickets.",
    image: "/images/services/flights.jpg", // Added missing field
    color: "text-blue-600", // Added missing field
    button: "Book Flights", // Added missing field
    items: ["Domestic Flights", "International Flights", "Group Bookings"] // Added missing field
  },
  {
    id: 2,
    title: "Hotel Reservations",
    icon: Building,
    description: "Comfortable accommodation worldwide.",
    image: "/images/services/hotels.jpg",
    color: "text-amber-600",
    button: "Find Hotels",
    items: ["Luxury Resorts", "Budget Stays", "Business Hotels"]
  },
  {
    id: 3,
    title: "Holiday Packages",
    icon: Palmtree,
    description: "Curated travel experiences.",
    image: "/images/services/holidays.jpg",
    color: "text-emerald-600",
    button: "Explore Packages",
    items: ["Family Vacations", "Honeymoon Trips", "Adventure Tours"]
  },
  {
    id: 4,
    title: "Visa Assistance",
    icon: IdCard,
    description: "Application support.",
    image: "/images/services/visa.jpg",
    color: "text-orange-600",
    button: "Apply Now",
    items: ["Document Review", "Form Filling", "Interview Prep"]
  },
  {
    id: 5,
    title: "Travel Insurance",
    icon: ShieldCheck,
    description: "Travel safely.",
    image: "/images/services/insurance.jpg",
    color: "text-cyan-600",
    button: "Get Covered",
    items: ["Medical Coverage", "Trip Cancellation", "Luggage Loss"]
  }
]

export default function ServicesSection() {
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

        <div className="mt-16 grid gap-8 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}