import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-2.5 py-0.5 text-xs font-semibold",
        secondary:
          "border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2.5 py-0.5 text-xs font-semibold",
        destructive:
          "border border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 px-2.5 py-0.5 text-xs font-semibold",
        outline: "text-foreground border border-input bg-transparent px-2.5 py-0.5 text-xs font-semibold",
        teal: "bg-teal-500/10 text-teal-400 border-teal-500/20 px-4 py-1.5",
        live: "bg-teal-500/10 text-teal-300 border border-teal-500/20 px-4 py-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  showPulse?: boolean;
}

function Badge({ 
  className, 
  variant, 
  icon, 
  showPulse = false, 
  children, 
  ...props 
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {showPulse && (
        <span className="relative flex h-2 w-2 mr-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
        </span>
      )}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
