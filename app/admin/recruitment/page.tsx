import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

export default function RecruitmentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">
            Tuyển dụng
          </h1>
          <p className="text-muted-foreground">Quản lý quy trình tuyển dụng</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Tạo vị trí tuyển dụng
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Module đang phát triển</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Tính năng tuyển dụng sẽ sớm được bổ sung.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
