import { cn } from "@/lib/utils";

type TrustBadgeProps = {
  count: number;
  label: string;
  description?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
};

export function TrustBadge({
  count,
  label,
  description,
  className = "",
  variant = "default",
}: TrustBadgeProps) {
  const variantClasses = {
    default: "bg-foreground/5 border border-border/20",
    outline: "bg-transparent border border-border/30",
    ghost: "bg-transparent",
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex -space-x-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center text-xs font-medium text-foreground/70",
              variantClasses[variant]
            )}
          >
            {count}+K
          </div>
        ))}
      </div>
      <div className="text-left">
        <span className="block text-sm font-medium text-foreground">
          {label}
        </span>
        {description && (
          <span className="text-xs text-muted-foreground">{description}</span>
        )}
      </div>
    </div>
  );
}
