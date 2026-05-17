// components/home/CTASection.tsx

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-[#032C73] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F4B400]">
              Ready To Start Your Journey?
            </p>

            <h2 className="mt-5 max-w-md text-4xl font-bold leading-tight">
              Join thousands of students who have chosen
              Afara Group for a brighter future.
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-xl bg-[#F4B400] px-6 py-4 text-sm font-semibold text-[#032C73] transition hover:opacity-90"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-sm font-semibold transition hover:bg-white/10"
              >
                Contact Admissions
              </Link>
            </div>
          </div>

          {/* Center Content */}
          <div className="border-white/10 lg:border-l lg:pl-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F4B400]">
              Student Portal
            </p>

            <p className="mt-5 max-w-sm text-base leading-8 text-slate-300">
              Access your dashboard, track applications,
              make payments, download certificates and more.
            </p>

            <Link
              href="#"
              className="mt-8 inline-flex items-center rounded-xl border border-white/20 px-6 py-4 text-sm font-semibold transition hover:bg-white/10"
            >
              Login to Portal
            </Link>
          </div>

          {/* Right Content */}
          <div className="border-white/10 lg:border-l lg:pl-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F4B400]">
              Need Help?
            </p>

            <h3 className="mt-5 text-2xl font-bold">
              Talk to Our Admissions Team
            </h3>

            <p className="mt-4 max-w-sm text-base leading-8 text-slate-300">
              Our support team is available to guide you
              through programs, admissions, and career
              opportunities.
            </p>

            <div className="mt-8 space-y-3 text-sm text-slate-300">
              <p>Email: info@afaragroup.com</p>
              <p>Phone: +234 700 123 4567</p>
              <p>Website: www.afaragroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}