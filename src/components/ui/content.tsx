"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const contentVariants = cva("text-content", {
  variants: {
    variant: {
      default: "text-base",
      sm: "text-sm",
      xs: "text-xs",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface ContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contentVariants> {}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(contentVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Content.displayName = "Content"

export { Content } 