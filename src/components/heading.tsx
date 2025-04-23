"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva("font-heading text-foreground", {
  variants: {
    variant: {
      default: "text-2xl md:text-3xl font-bold",
      sm: "text-lg md:text-xl font-semibold",
      subHeading: "text-base font-semibold",
      xs: "text-sm font-medium",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "h2"
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading } 