import Image from 'next/image'

export default function MapSection() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
      <div className="relative h-[550px]">
        <Image
          src="/images/map-placeholder.png"
          alt="Map"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}