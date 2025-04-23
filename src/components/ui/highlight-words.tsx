"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface HighlightWordsProps {
  text: string
  wordToHighlight?: string[]
  highlightClassName?: string
}

export function HighlightWords({
  text,
  wordToHighlight = [],
  highlightClassName = "text-brand",
}: HighlightWordsProps) {
  if (!wordToHighlight || wordToHighlight.length === 0) {
    return text
  }

  const regex = new RegExp(`(${wordToHighlight.join("|")})`, "gi")
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, index) => {
        const isHighlighted = wordToHighlight.some(
          (word) => word.toLowerCase() === part.toLowerCase()
        )

        return isHighlighted ? (
          <span key={index} className={cn(highlightClassName)}>
            {part}
          </span>
        ) : (
          part
        )
      })}
    </>
  )
} 