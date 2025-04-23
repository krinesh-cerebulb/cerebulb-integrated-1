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
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof contentVariants> {}

const Content = React.forwardRef<HTMLParagraphElement, ContentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(contentVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Content.displayName = "Content"

export { Content } 