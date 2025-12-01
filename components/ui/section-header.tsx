import { ReactNode } from "react";
import { Badge } from "./badge-custom";

type SectionHeaderProps = {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  badge?: string;
};

export function SectionHeader({
  title,
  description,
  className = "",
  children,
  icon,
  badge,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mx-auto text-center mb-12 lg:mb-16 ${className}`}>
      {badge && (
        <Badge variant="teal" icon={icon} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      )}
      {children}
    </div>
  );
}
