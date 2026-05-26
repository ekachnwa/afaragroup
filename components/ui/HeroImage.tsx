// components/hero/HeroImage.tsx

import Image from 'next/image'

type HeroImageProps = {
  image: string
  alt: string
}

export default function HeroImage({
  image,
  alt,
}: HeroImageProps) {
  return (
    <div className="relative">
      <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-2xl">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>
    </div>
  )
}