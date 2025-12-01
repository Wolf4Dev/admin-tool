import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { GradientText } from "./gradient-text"

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  badge?: {
    icon: ReactNode
    text: string
  }
  showBackButton?: boolean
  className?: string
  children?: ReactNode
  size?: "sm" | "md" | "lg"
}

export function HeroSection({
  title,
  subtitle,
  description,
  badge,
  showBackButton = false,
  className,
  children,
  size = "md",
}: HeroSectionProps) {
  const router = useRouter()

  const paddingY = size === "sm" ? "py-6" : size === "lg" ? "py-24" : "py-16"
  const titleSize = size === "sm" ? "text-4xl sm:text-5xl" : size === "lg" ? "text-7xl" : "text-6xl"
  const subtitleHeight = size === "sm" ? "h-[60px]" : size === "lg" ? "h-[78px]" : "h-[66px]"
  const descSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl"

  return (
    <div
      className={cn(
        "relative bg-gradient-to-br from-background via-muted/50 to-background text-foreground overflow-hidden",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className={cn("relative max-w-7xl mx-auto px-4", paddingY)}>
        <div className="relative">
          {showBackButton && (
            <button
              onClick={() => router.back()}
              className="absolute left-0 top-0 flex items-center text-muted-foreground hover:text-foreground transition-all duration-200 mb-8 hover:cursor-pointer group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back</span>
            </button>
          )}

          <div className={cn("text-center", size === "sm" ? "pt-6" : "pt-12")}>
            {badge && (
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-2xl border border-primary/20 text-primary font-medium mb-8">
                {badge.icon}
                {badge.text}
              </div>
            )}

            <h1 className={cn("font-bold text-foreground mb-6 tracking-tight flex flex-col gap-2", titleSize)}>
              {title}
              {subtitle && (
                <GradientText variant="primary" className={cn("block", subtitleHeight)}>
                  {subtitle}
                </GradientText>
              )}
            </h1>

            {description && (
              <p
                className={cn(
                  "text-muted-foreground max-w-3xl mx-auto leading-relaxed",
                  descSize,
                  size === "sm" ? "mb-8" : "mb-12"
                )}
              >
                {description}
              </p>
            )}

            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
