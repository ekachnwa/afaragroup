
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
    <Image
      src={image}
      alt={alt}
      fill
      className="object-cover transition-transform duration-300 hover:scale-105"
      priority
    />
  )
}