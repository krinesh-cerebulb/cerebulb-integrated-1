'use client'

import Image from 'next/image'

interface HeroImageProps {
  src: string
  alt: string
}

export default function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover opacity-30"
        priority
      />
    </div>
  )
} 