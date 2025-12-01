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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Eye, Edit, Filter } from "lucide-react";

const employees = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyen.a@company.com",
    phone: "0901234567",
    department: "Engineering",
    position: "Senior Developer",
    salary: "₫45,000,000",
    status: "active",
    avatar: "/male-avatar.jpg",
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tran.b@company.com",
    phone: "0902345678",
    department: "Design",
    position: "UI/UX Designer",
    salary: "₫35,000,000",
    status: "active",
    avatar: "/female-avatar.jpg",
  },
  {
    id: 3,
    name: "Lê Văn C",
    email: "le.c@company.com",
    phone: "0903456789",
    department: "Engineering",
    position: "Backend Developer",
    salary: "₫40,000,000",
    status: "active",
    avatar: "/male-avatar-2.jpg",
  },
  {
    id: 4,
    name: "Phạm Thị D",
    email: "pham.d@company.com",
    phone: "0904567890",
    department: "Marketing",
    position: "Marketing Manager",
    salary: "₫50,000,000",
    status: "active",
    avatar: "/female-avatar-2.jpg",
  },
  {
    id: 5,
    name: "Hoàng Văn E",
    email: "hoang.e@company.com",
    phone: "0905678901",
    department: "HR",
    position: "HR Specialist",
    salary: "₫30,000,000",
    status: "on-leave",
    avatar: "/male-avatar-3.jpg",
  },
  {
    id: 6,
    name: "Vũ Thị F",
    email: "vu.f@company.com",
    phone: "0906789012",
    department: "Sales",
    position: "Sales Executive",
    salary: "₫32,000,000",
    status: "active",
    avatar: "/female-avatar-3.jpg",
  },
  {
    id: 7,
    name: "Đỗ Văn G",
    email: "do.g@company.com",
    phone: "0907890123",
    department: "Engineering",
    position: "DevOps Engineer",
    salary: "₫42,000,000",
    status: "active",
    avatar: "/male-avatar-4.jpg",
  },
  {
    id: 8,
    name: "Bùi Thị H",
    email: "bui.h@company.com",
    phone: "0908901234",
    department: "Finance",
    position: "Accountant",
    salary: "₫28,000,000",
    status: "active",
    avatar: "/female-avatar-4.jpg",
  },
];

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      departmentFilter === "all" || emp.department === departmentFilter;
    const matchesStatus = statusFilter === "all" || emp.status === statusFilter;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">
            Quản lý Nhân viên
          </h1>
          <p className="text-muted-foreground">
            Danh sách và thông tin chi tiết nhân viên
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm nhân viên
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm theo tên hoặc email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select
              value={departmentFilter}
              onValueChange={setDepartmentFilter}
            >
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Phòng ban" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả phòng ban</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="HR">HR</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trạng thái</SelectItem>
                <SelectItem value="active">Đang làm việc</SelectItem>
                <SelectItem value="on-leave">Đang nghỉ</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Employee Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Danh sách nhân viên ({filteredEmployees.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nhân viên</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Số điện thoại</TableHead>
                  <TableHead>Phòng ban</TableHead>
                  <TableHead>Vị trí</TableHead>
                  <TableHead>Lương</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees.map((employee) => (
                  <TableRow key={employee.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={employee.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>{employee.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{employee.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {employee.email}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {employee.phone}
                    </TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell className="font-medium">
                      {employee.salary}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          employee.status === "active" ? "default" : "secondary"
                        }
                      >
                        {employee.status === "active"
                          ? "Đang làm việc"
                          : "Đang nghỉ"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/employees/${employee.id}`}>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
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
