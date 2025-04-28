'use client'

import Image from 'next/image'

interface AboutImagesProps {
  heroImage?: boolean
  arVrImage?: boolean
  techStackImage?: boolean
}

export default function AboutImages({ heroImage, arVrImage, techStackImage }: AboutImagesProps) {
  if (heroImage) {
    return (
      <div className="relative h-[300px] mb-12 rounded-lg overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
    )
  }

  if (arVrImage) {
    return (
      <div className="relative h-[300px]">
        <Image
          src="/ar-vr-monitor.png"
          alt="AR VR Technologies"
          fill
          className="object-contain"
        />
      </div>
    )
  }

  if (techStackImage) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Image
          src="/tech-stack.png"
          alt="Technology Stack"
          width={800}
          height={400}
          className="w-full object-contain"
        />
      </div>
    )
  }

  return null
} 