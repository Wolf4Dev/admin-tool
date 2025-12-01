import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  icon: LucideIcon;
  className?: string;
  size?: number | string;
};

export function Icon({ icon: Icon, className = "", size = 20 }: IconProps) {
  return (
    <Icon
      className={cn(
        "text-foreground/70 group-hover:text-foreground transition-colors",
        className
      )}
      size={size}
      aria-hidden="true"
    />
  );
}

export default Icon;
