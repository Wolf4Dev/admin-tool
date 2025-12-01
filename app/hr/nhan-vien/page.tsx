"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Eye, Edit, Filter } from "lucide-react";
import { useState } from "react";

const employees = [
  {
    id: "1",
    name: "Nguyễn Văn An",
    email: "an.nguyen@company.com",
    phone: "0901234567",
    department: "IT",
    position: "Senior Developer",
    startDate: "15/01/2020",
    status: "active",
    avatar: "",
  },
  {
    id: "2",
    name: "Trần Thị Bình",
    email: "binh.tran@company.com",
    phone: "0912345678",
    department: "HR",
    position: "HR Manager",
    startDate: "01/03/2019",
    status: "active",
    avatar: "",
  },
  {
    id: "3",
    name: "Lê Văn Cường",
    email: "cuong.le@company.com",
    phone: "0923456789",
    department: "Marketing",
    position: "Marketing Executive",
    startDate: "10/06/2021",
    status: "active",
    avatar: "",
  },
  {
    id: "4",
    name: "Phạm Thị Dung",
    email: "dung.pham@company.com",
    phone: "0934567890",
    department: "Design",
    position: "UI/UX Designer",
    startDate: "20/09/2021",
    status: "active",
    avatar: "",
  },
  {
    id: "5",
    name: "Hoàng Văn Em",
    email: "em.hoang@company.com",
    phone: "0945678901",
    department: "IT",
    position: "Backend Developer",
    startDate: "05/02/2022",
    status: "active",
    avatar: "",
  },
  {
    id: "6",
    name: "Đỗ Thị Phượng",
    email: "phuong.do@company.com",
    phone: "0956789012",
    department: "Sales",
    position: "Sales Manager",
    startDate: "12/11/2020",
    status: "leave",
    avatar: "",
  },
];

export default function EmployeesPage() {
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      departmentFilter === "all" || emp.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">
            Quản lý nhân viên
          </h1>
          <p className="text-muted-foreground mt-1">
            Quản lý thông tin và hồ sơ nhân viên
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm nhân viên
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm theo tên, email..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Phòng ban" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả phòng ban</SelectItem>
              <SelectItem value="IT">IT</SelectItem>
              <SelectItem value="HR">HR</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Design">Design</SelectItem>
              <SelectItem value="Sales">Sales</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nhân viên</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Số điện thoại</TableHead>
                <TableHead>Phòng ban</TableHead>
                <TableHead>Vị trí</TableHead>
                <TableHead>Ngày vào</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage
                          src={employee.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback className="bg-primary/10 text-primary text-sm">
                          {employee.name.split(" ").pop()?.charAt(0)}
                        </AvatarFallback>
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
                  <TableCell>
                    <Badge variant="secondary">{employee.department}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {employee.position}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {employee.startDate}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        employee.status === "active" ? "default" : "outline"
                      }
                    >
                      {employee.status === "active"
                        ? "Đang làm việc"
                        : "Nghỉ phép"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedEmployee(employee.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
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
      </Card>
      {/* Modal removed for now - component doesn't exist */}
    </div>
  );
}
