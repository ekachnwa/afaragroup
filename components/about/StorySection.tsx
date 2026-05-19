import Image from 'next/image'

export default function StorySection() {
  return (
    <section className="pb-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
          <Image
            src="/images/afara-workforce.png"
            alt="Our Team"
            width={900}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-500">
            Our Story
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-blue-950">
            Building Skills. Connecting People. Creating Futures.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Afara Group Limited was established with a passion for education,
            empowerment, and global transformation.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Through innovation, integrity, and commitment to excellence,
            we continue to shape careers and connect individuals to
            international opportunities.
          </p>

          <button className="mt-8 rounded-xl bg-blue-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-800">
            Explore Our Institutions
          </button>
        </div>
      </div>
    </section>
  )
}