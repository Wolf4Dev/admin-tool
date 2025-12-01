"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, CheckCircle2, Circle, User } from "lucide-react";

const onboardingTasks = [
  {
    id: "1",
    employee: "Nguyễn Văn A",
    position: "Senior Developer",
    startDate: "01/12/2025",
    tasks: [
      { id: "1", title: "Tạo email công ty", completed: true },
      { id: "2", title: "Tạo account hệ thống", completed: true },
      { id: "3", title: "Chuẩn bị laptop", completed: false },
      { id: "4", title: "Tài liệu welcome", completed: false },
      { id: "5", title: "Hợp đồng ký", completed: false },
    ],
  },
  {
    id: "2",
    employee: "Trần Thị B",
    position: "HR Executive",
    startDate: "05/12/2025",
    tasks: [
      { id: "1", title: "Tạo email công ty", completed: false },
      { id: "2", title: "Tạo account hệ thống", completed: false },
      { id: "3", title: "Chuẩn bị laptop", completed: false },
      { id: "4", title: "Tài liệu welcome", completed: false },
      { id: "5", title: "Hợp đồng ký", completed: false },
    ],
  },
];

const offboardingTasks = [
  {
    id: "1",
    employee: "Lê Văn C",
    position: "Marketing Executive",
    endDate: "30/11/2025",
    reason: "Nghỉ việc theo nguyện vọng cá nhân",
    tasks: [
      { id: "1", title: "Thu hồi tài sản", completed: true },
      { id: "2", title: "Khoá tài khoản", completed: true },
      { id: "3", title: "Lý do nghỉ", completed: true },
      { id: "4", title: "Phản hồi exit interview", completed: false },
      { id: "5", title: "Tạo quyết định nghỉ", completed: false },
    ],
  },
];

export default function OnboardingPage() {
  return (
    <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-foreground">
                Onboarding / Offboarding
              </h1>
              <p className="text-muted-foreground mt-1">
                Quản lý quy trình nhân viên mới và nghỉ việc
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Tạo quy trình mới
            </Button>
          </div>

          <Tabs defaultValue="onboarding" className="space-y-6">
            <TabsList>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="offboarding">Offboarding</TabsTrigger>
            </TabsList>

            <TabsContent value="onboarding" className="space-y-4">
              {onboardingTasks.map((item) => {
                const completedCount = item.tasks.filter(
                  (t) => t.completed
                ).length;
                const totalCount = item.tasks.length;
                const progress = Math.round(
                  (completedCount / totalCount) * 100
                );

                return (
                  <Card key={item.id} className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {item.employee.split(" ").pop()?.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.employee}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.position}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Ngày vào: {item.startDate}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={progress === 100 ? "default" : "secondary"}
                        >
                          {completedCount}/{totalCount} hoàn thành
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          {progress}%
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {item.tasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                        >
                          <Checkbox
                            id={`task-${item.id}-${task.id}`}
                            checked={task.completed}
                          />
                          <label
                            htmlFor={`task-${item.id}-${task.id}`}
                            className={`flex-1 text-sm cursor-pointer ${
                              task.completed
                                ? "line-through text-muted-foreground"
                                : ""
                            }`}
                          >
                            {task.title}
                          </label>
                          {task.completed ? (
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          ) : (
                            <Circle className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </TabsContent>

            <TabsContent value="offboarding" className="space-y-4">
              {offboardingTasks.map((item) => {
                const completedCount = item.tasks.filter(
                  (t) => t.completed
                ).length;
                const totalCount = item.tasks.length;
                const progress = Math.round(
                  (completedCount / totalCount) * 100
                );

                return (
                  <Card key={item.id} className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-destructive/10 text-destructive">
                            {item.employee.split(" ").pop()?.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold">
                            {item.employee}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.position}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Ngày nghỉ: {item.endDate}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Lý do: {item.reason}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={progress === 100 ? "default" : "secondary"}
                        >
                          {completedCount}/{totalCount} hoàn thành
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-2">
                          {progress}%
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {item.tasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent transition-colors"
                        >
                          <Checkbox
                            id={`task-${item.id}-${task.id}`}
                            checked={task.completed}
                          />
                          <label
                            htmlFor={`task-${item.id}-${task.id}`}
                            className={`flex-1 text-sm cursor-pointer ${
                              task.completed
                                ? "line-through text-muted-foreground"
                                : ""
                            }`}
                          >
                            {task.title}
                          </label>
                          {task.completed ? (
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          ) : (
                            <Circle className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
  );
}
