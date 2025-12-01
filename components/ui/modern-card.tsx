import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ModernCardProps {
  title?: string
  description?: string
  icon?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  className?: string
  variant?: "default" | "gradient" | "glass" | "custom"
  onClick?: () => void
}

export function ModernCard({
  title,
  description,
  icon,
  children,
  footer,
  className,
  variant = "default",
  onClick,
}: ModernCardProps) {
  const variants = {
    default: "bg-card border-border hover:border-primary/50",
    gradient: "bg-gradient-to-br from-card via-card/95 to-muted/50 border-border/50 hover:border-primary/30",
    glass: "bg-card/80 backdrop-blur-xl border-border/50 hover:border-primary/30",
    custom: "", // Allows for fully custom styling via className
  }

  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer",
        variants[variant],
        onClick && "hover:scale-[1.02]",
        className
      )}
      onClick={onClick}
    >
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {(title || description || icon) && (
        <CardHeader className="relative z-10">
          {icon && (
            <div className="flex items-center justify-center mb-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
            </div>
          )}
          {title && (
            <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
          )}
          {description && <CardDescription className="text-muted-foreground">{description}</CardDescription>}
        </CardHeader>
      )}

      {children && <CardContent className="relative z-10">{children}</CardContent>}

      {footer && <CardFooter className="relative z-10">{footer}</CardFooter>}
    </Card>
  )
}
