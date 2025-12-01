"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Calendar,
  Briefcase,
  TrendingUp,
  Clock,
  DollarSign,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const statsCards = [
  {
    title: "Tổng số nhân sự",
    value: "245",
    change: "+12% so với tháng trước",
    icon: Users,
  },
  {
    title: "Số ngày phép tháng này",
    value: "128",
    change: "42 nhân viên đang nghỉ",
    icon: Calendar,
  },
  {
    title: "Dự án đang chạy",
    value: "18",
    change: "5 dự án mới trong tháng",
    icon: Briefcase,
  },
  {
    title: "Tổng doanh thu tháng",
    value: "₫2.4B",
    change: "+18% so với tháng trước",
    icon: TrendingUp,
  },
];

const attendanceData = [
  { date: "T2", present: 235, absent: 10, late: 5 },
  { date: "T3", present: 238, absent: 7, late: 3 },
  { date: "T4", present: 240, absent: 5, late: 2 },
  { date: "T5", present: 242, absent: 3, late: 4 },
  { date: "T6", present: 239, absent: 6, late: 6 },
  { date: "T7", present: 220, absent: 25, late: 2 },
];

const revenueData = [
  { month: "T1", revenue: 1800, expense: 1200 },
  { month: "T2", revenue: 2000, expense: 1300 },
  { month: "T3", revenue: 2200, expense: 1400 },
  { month: "T4", revenue: 2100, expense: 1350 },
  { month: "T5", revenue: 2400, expense: 1500 },
  { month: "T6", revenue: 2600, expense: 1600 },
];

const recentActivities = [
  {
    title: "Phỏng vấn lập trình viên",
    candidate: "Nguyễn Văn A",
    time: "14:00 hôm nay",
    type: "interview",
  },
  {
    title: "Onboarding nhân viên mới",
    candidate: "Trần Thị B",
    time: "09:00 ngày mai",
    type: "onboarding",
  },
  {
    title: "Đánh giá hiệu suất",
    candidate: "Lê Văn C",
    time: "15:00 ngày mai",
    type: "review",
  },
  {
    title: "Phỏng vấn designer",
    candidate: "Phạm Thị D",
    time: "10:00 thứ 5",
    type: "interview",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-balance text-3xl font-bold tracking-tight">
          Dashboard
        </h1>
        <p className="text-muted-foreground">
          Tổng quan hệ thống HR & quản lý công ty
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Attendance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
            <p className="text-sm text-muted-foreground">
              Tình hình chấm công tuần này
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="present"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  name="Có mặt"
                />
                <Line
                  type="monotone"
                  dataKey="absent"
                  stroke="hsl(var(--chart-5))"
                  strokeWidth={2}
                  name="Vắng mặt"
                />
                <Line
                  type="monotone"
                  dataKey="late"
                  stroke="hsl(var(--chart-4))"
                  strokeWidth={2}
                  name="Trễ"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Doanh thu – Chi phí</CardTitle>
            <p className="text-sm text-muted-foreground">
              So sánh 6 tháng gần đây
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="revenue"
                  fill="hsl(var(--chart-2))"
                  name="Doanh thu"
                />
                <Bar
                  dataKey="expense"
                  fill="hsl(var(--chart-5))"
                  name="Chi phí"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Hoạt động HR gần đây</CardTitle>
          <p className="text-sm text-muted-foreground">
            Các cuộc phỏng vấn và sự kiện sắp tới
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      activity.type === "interview"
                        ? "bg-primary/10"
                        : activity.type === "onboarding"
                        ? "bg-accent/10"
                        : "bg-muted"
                    }`}
                  >
                    {activity.type === "interview" ? (
                      <Users className="h-5 w-5 text-primary" />
                    ) : activity.type === "onboarding" ? (
                      <DollarSign className="h-5 w-5 text-accent" />
                    ) : (
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.candidate}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
