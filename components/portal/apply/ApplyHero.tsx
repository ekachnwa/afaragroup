import Image from 'next/image'
import {
  ShieldCheck,
  Globe,
  CheckCircle2,
} from 'lucide-react'

export default function ApplyHero() {
  return (
    <section className="relative overflow-hidden bg-blue-950">
      {/* Background */}
      {/* <div className="absolute inset-0">
        <Image
          src="/images/apply-now.png"
          alt="Apply Hero"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Apply Now
          </p>

          <h1 className="mt-6 text-6xl font-black leading-tight text-white">
            Your Future
            <span className="block text-amber-400">
              Starts Here
            </span>
          </h1>

          <div className="mt-6 h-1 w-24 rounded-full bg-amber-400" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            Take the first step toward a brighter future.
            Fill out the application form and join thousands
            of successful Afara students worldwide.
          </p>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-6 w-6 text-white" />

              <div>
                <h4 className="font-semibold text-white">
                  Easy Process
                </h4>

                <p className="text-sm text-slate-300">
                  Simple & fast application
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 text-white" />

              <div>
                <h4 className="font-semibold text-white">
                  Secure & Safe
                </h4>

                <p className="text-sm text-slate-300">
                  Your data is protected
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="mt-1 h-6 w-6 text-white" />

              <div>
                <h4 className="font-semibold text-white">
                  Global Opportunities
                </h4>

                <p className="text-sm text-slate-300">
                  Worldwide access
                </p>
              </div>
            </div>

          </div>

        </div>
        {/* Right */}
        <div className="relative">
          <div className="relative h-[500px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/apply-now.png"
              alt="About Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      
    </section>
  )
}