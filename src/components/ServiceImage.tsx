'use client'

import Image from 'next/image'

interface ServiceImageProps {
  src: string
  alt: string
}

export default function ServiceImage({ src, alt }: ServiceImageProps) {
  return (
    <div className="relative h-48">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-4"
        priority
      />
    </div>
  )
} 