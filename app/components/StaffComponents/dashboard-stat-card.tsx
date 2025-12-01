import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardStatCardProps {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
}

export function DashboardStatCard({
  title,
  value,
  subtitle,
  change,
  changeType,
  icon: Icon,
}: DashboardStatCardProps) {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {subtitle}
            </p>
            <p className="text-2xl font-bold">{value}</p>
            <p className={`text-sm ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              {change}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
