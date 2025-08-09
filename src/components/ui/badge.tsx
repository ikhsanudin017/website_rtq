import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "bg-blue-600 text-white",
  secondary: "bg-gray-100 text-gray-900",
  destructive: "bg-red-600 text-white",
  outline: "border border-gray-300 text-gray-900",
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        badgeVariants[variant],
        className
      )} 
      {...props} 
    />
  )
}

export { Badge }
