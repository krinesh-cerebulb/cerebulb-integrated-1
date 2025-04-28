'use client'

import Image from 'next/image'
import { useState } from 'react'

interface LogoImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function LogoImage({ src, alt, width, height, className }: LogoImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image 
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgSrc('/logo.png')}
    />
  )
} 