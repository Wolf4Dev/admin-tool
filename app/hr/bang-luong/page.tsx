"use client";

import { Card } from "@/components/ui/card";
import {
  Users,
  UserMinus,
  UserPlus,
  Briefcase,
  TrendingUp,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const kpiData = [
  {
    title: "Tổng nhân sự",
    value: "248",
    description: "Nhân viên hiện tại",
    icon: Users,
    trend: "+12 so với tháng trước",
  },
  {
    title: "Nghỉ phép hôm nay",
    value: "8",
    description: "Nhân viên đang nghỉ",
    icon: UserMinus,
    trend: "Phòng IT: 3 người",
  },
  {
    title: "Onboard tháng này",
    value: "15",
    description: "Nhân viên mới",
    icon: UserPlus,
    trend: "+5 so với tháng trước",
  },
  {
    title: "Offboard tháng này",
    value: "3",
    description: "Nhân viên nghỉ việc",
    icon: Briefcase,
    trend: "Thấp hơn TB",
  },
];

const interviewsToday = [
  {
    name: "Nguyễn Văn A",
    position: "Senior Frontend Developer",
    time: "09:00 AM",
    status: "pending",
  },
  {
    name: "Trần Thị B",
    position: "HR Executive",
    time: "10:30 AM",
    status: "confirmed",
  },
  {
    name: "Lê Văn C",
    position: "Backend Developer",
    time: "02:00 PM",
    status: "confirmed",
  },
  {
    name: "Phạm Thị D",
    position: "UI/UX Designer",
    time: "03:30 PM",
    status: "pending",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Tổng quan hệ thống quản lý nhân sự
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((kpi) => {
              const Icon = kpi.icon;
              return (
                <Card key={kpi.title} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        {kpi.title}
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {kpi.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {kpi.description}
                      </p>
                      <p className="text-xs text-primary flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {kpi.trend}
                      </p>
                    </div>
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Interview List */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Ứng viên phỏng vấn hôm nay
            </h2>
            <div className="space-y-4">
              {interviewsToday.map((interview, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 pb-4 border-b last:border-0"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {interview.name.split(" ").pop()?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {interview.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {interview.position}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="text-xs text-muted-foreground">
                        {interview.time}
                      </p>
                      <Badge
                        variant={
                          interview.status === "confirmed"
                            ? "default"
                            : "secondary"
                        }
                        className="text-xs"
                      >
                        {interview.status === "confirmed"
                          ? "Đã xác nhận"
                          : "Chờ xác nhận"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
  );
}
