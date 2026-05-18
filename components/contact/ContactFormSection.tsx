import ContactForm from './ContactForm'
import MapSection from './MapSection'

export default function ContactFormSection() {
  return (
    <section className="pb-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            Send Us A Message
          </p>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            We’d Love to Hear From You
          </h2>

          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-500">
            Find Us
          </p>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            Our Location
          </h2>

          <div className="mt-10">
            <MapSection />
          </div>
        </div>
      </div>
    </section>
  )
}