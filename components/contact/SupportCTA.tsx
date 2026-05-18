import { Headphones, MessageCircle, Phone } from 'lucide-react'

export default function SupportCTA() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-slate-50 px-8 py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-900">
              <Headphones className="h-12 w-12 text-white" />
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-950">
                Need Immediate Assistance?
              </h3>

              <p className="mt-3 text-lg text-slate-600">
                Chat with our support team or call us for quick help.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-3 rounded-xl border border-blue-900 px-7 py-4 font-semibold text-blue-900 transition hover:bg-blue-50">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </button>

            <button className="inline-flex items-center gap-3 rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-800">
              <Phone className="h-5 w-5" />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}