import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GradientTextProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "danger" | "teal"
}

const gradientVariants = {
  primary: "bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-500",
  secondary: "bg-gradient-to-r from-gray-400 to-gray-600",
  accent: "bg-gradient-to-r from-purple-400 to-pink-400",
  success: "bg-gradient-to-r from-green-400 to-emerald-400",
  warning: "bg-gradient-to-r from-yellow-400 to-orange-400",
  danger: "bg-gradient-to-r from-red-400 to-pink-400",
  teal: "bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-500",
}

export function GradientText({ children, className, variant = "primary" }: GradientTextProps) {
  return (
    <span className={cn(gradientVariants[variant], "bg-clip-text text-transparent font-bold", className)}>
      {children}
    </span>
  )
}
