"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, Wallet } from "lucide-react";

export default function StaffDashboardPage() {

  // Mock data
  const stats = [
    {
      title: "Giờ công tuần này",
      value: "42.5h",
      subtitle: "Tổng giờ làm việc",
      change: "+4.5h",
      changeType: "positive" as const,
      icon: Clock,
    },
    {
      title: "Ngày phép còn lại",
      value: "12",
      subtitle: "Đã sử dụng: 3 ngày",
      change: "-1",
      changeType: "negative" as const,
      icon: Calendar,
    },
    {
      title: "Lương tháng này",
      value: "25,000,000đ",
      subtitle: "Ngày thanh toán: 05/12/2025",
      icon: Wallet,
    },
  ];

  const projects = [
    {
      name: "Website Redesign Project",
      role: "Frontend Developer",
      progress: 75,
      status: "Active" as const,
    },
    {
      name: "Mobile App Development",
      role: "UI/UX Designer",
      progress: 45,
      status: "Active" as const,
    },
    {
      name: "Internal HR System",
      role: "Project Member",
      progress: 30,
      status: "Planning" as const,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-balance">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Chào mừng trở lại! Đây là tổng quan của bạn.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {stat.subtitle}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p
                    className={`text-sm ${
                      stat.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Projects Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Dự án & Công việc</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Các dự án và công việc bạn đang tham gia
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.role}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : project.status === "Planning"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
