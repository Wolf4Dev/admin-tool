"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Eye, Briefcase, TrendingUp } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Website Ecommerce",
    client: "Công ty ABC",
    status: "in-progress",
    startDate: "01/05/2024",
    deadline: "31/08/2024",
    budget: 150000000,
    revenue: 150000000,
    progress: 65,
    team: 5,
  },
  {
    id: 2,
    name: "Mobile App Banking",
    client: "Tập đoàn XYZ",
    status: "completed",
    startDate: "01/02/2024",
    deadline: "30/04/2024",
    budget: 200000000,
    revenue: 220000000,
    progress: 100,
    team: 7,
  },
  {
    id: 3,
    name: "CRM System",
    client: "Công ty DEF",
    status: "in-progress",
    startDate: "15/06/2024",
    deadline: "15/10/2024",
    budget: 100000000,
    revenue: 100000000,
    progress: 25,
    team: 4,
  },
  {
    id: 4,
    name: "Dashboard Analytics",
    client: "Startup GHI",
    status: "planning",
    startDate: "01/07/2024",
    deadline: "30/09/2024",
    budget: 80000000,
    revenue: 80000000,
    progress: 5,
    team: 3,
  },
  {
    id: 5,
    name: "ERP System",
    client: "Công ty JKL",
    status: "in-progress",
    startDate: "01/04/2024",
    deadline: "31/12/2024",
    budget: 300000000,
    revenue: 300000000,
    progress: 45,
    team: 10,
  },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default">Hoàn thành</Badge>;
      case "in-progress":
        return (
          <Badge className="bg-accent text-white hover:bg-accent/90">
            Đang thực hiện
          </Badge>
        );
      case "planning":
        return <Badge variant="secondary">Đang lên kế hoạch</Badge>;
      default:
        return null;
    }
  };

  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalRevenue = projects.reduce((sum, p) => sum + p.revenue, 0);
  const activeProjects = projects.filter(
    (p) => p.status === "in-progress"
  ).length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">
            Quản lý Dự án
          </h1>
          <p className="text-muted-foreground">Theo dõi và quản lý các dự án</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm dự án
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng dự án</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
            <p className="text-xs text-muted-foreground">
              {activeProjects} đang thực hiện
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hoàn thành</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.filter((p) => p.status === "completed").length}
            </div>
            <p className="text-xs text-muted-foreground">Dự án đã hoàn thành</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng ngân sách
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {formatCurrency(totalBudget)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tổng doanh thu
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {formatCurrency(totalRevenue)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm dự án..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="planning">Đang lên kế hoạch</SelectItem>
                <SelectItem value="in-progress">Đang thực hiện</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách dự án ({filteredProjects.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tên dự án</TableHead>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead>Ngày bắt đầu</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Ngân sách</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Tiến độ</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell className="font-medium">
                      {project.name}
                    </TableCell>
                    <TableCell>{project.client}</TableCell>
                    <TableCell>{project.startDate}</TableCell>
                    <TableCell>{project.deadline}</TableCell>
                    <TableCell className="font-medium">
                      {formatCurrency(project.budget)}
                    </TableCell>
                    <TableCell>{project.team} người</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 overflow-hidden rounded-full bg-secondary">
                          <div
                            className="h-full bg-primary"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {project.progress}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(project.status)}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/admin/projects/${project.id}`}>
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
