import Image from 'next/image'

export default function PortalBranding() {
  return (
    <section className="relative hidden overflow-hidden bg-blue-950 lg:flex">
      {/* Background */}
      <div className="absolute inset-0">
        {/* <Image
          src="/images/global-trade.png"
          alt="Portal Background"
          fill
          className="object-cover opacity-25"
          priority
        /> */}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-[#031B4E]" />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col justify-between px-16 pt-14">
        
        {/* Middle Content */}
        <div className="max-w-xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
            Student Portal
          </p>

          <h1 className="mt-6 text-6xl font-black leading-tight text-white">
            Access Your Academic Journey
          </h1>

          <div className="mt-5 h-1 w-24 rounded-full bg-amber-400" />

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Login to manage your courses, track your progress,
            access resources, and stay connected with Afara
            Group Limited.
          </p>
        </div>

        {/* Student Image */}
        <div className="relative mx-auto mt-10 h-[720px] w-[570px]">
          <Image
            src="/images/portal-login.png"
            alt="Student"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  )
}