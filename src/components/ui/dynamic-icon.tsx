"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi"

type IconName = "instagram" | "linkedin" | "x"

interface DynamicIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}

export function DynamicIcon({ name, className, ...props }: DynamicIconProps) {
  const iconMap: Record<IconName, React.ReactNode> = {
    instagram: <FiInstagram className={cn("h-5 w-5", className)} />,
    linkedin: <FiLinkedin className={cn("h-5 w-5", className)} />,
    x: <FiTwitter className={cn("h-5 w-5", className)} />,
  }

  const iconName = name as IconName
  const icon = iconMap[iconName] || null

  if (!icon) {
    console.warn(`Icon ${name} not found`)
    return null
  }

  return (
    <div className={cn("inline-flex items-center", className)} {...props}>
      {icon}
    </div>
  )
} 