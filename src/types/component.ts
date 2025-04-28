// import type { StaticImageData } from 'next/image';

// Basic image type used across components
export type TImage = {
  src: string
  alt: string
}

// Type for WhatIsCerebulb section
export type WhatIsCerebulbSectionData = {
  heading: string
  description: string[]
  wordToHighlight?: string[]
  statistics: {
    title: string
    stats: {
      stat: string
      label: string
    }[]
  }
  images: TImage[]
  cta?: {
    label: string
    href: string
  }
} 