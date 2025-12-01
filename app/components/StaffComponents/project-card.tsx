import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ProjectCardProps {
  name: string;
  role: string;
  progress: number;
  status: "Active" | "Planning" | "Completed";
}

export function ProjectCard({
  name,
  role,
  progress,
  status,
}: ProjectCardProps) {
  const statusColors = {
    Active: "bg-green-500/10 text-green-700 border-green-200",
    Planning: "bg-yellow-500/10 text-yellow-700 border-yellow-200",
    Completed: "bg-blue-500/10 text-blue-700 border-blue-200",
  };

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg text-balance">{name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{role}</p>
            </div>
            <Badge variant="outline" className={statusColors[status]}>
              {status}
            </Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
