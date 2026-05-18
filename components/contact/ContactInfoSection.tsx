import { contactCards } from '@/lib/contact-data'
import ContactCard from './ContactCard'

export default function ContactInfoSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            Get In Touch
          </p>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            Multiple Ways to Reach Us
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((item) => (
            <ContactCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}