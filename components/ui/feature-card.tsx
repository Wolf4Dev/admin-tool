import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
  iconClassName = "",
}: FeatureCardProps) {
  return (
    <Card
      className={`bg-gradient-to-br from-background to-muted/20 group hover:border-primary/30 transition-all duration-300 h-full flex flex-col ${className}`}
    >
      <CardHeader className="pb-2">
        <div
          className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-background to-muted/50 mb-4 border border-border/20 ${iconClassName}`}
        >
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
