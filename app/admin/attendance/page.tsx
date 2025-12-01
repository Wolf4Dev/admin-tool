"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit, FileDown, Calendar } from "lucide-react";

const attendanceData = [
  {
    id: 1,
    employee: "Nguyễn Văn A",
    avatar: "/male-avatar.jpg",
    department: "Engineering",
    checkIn: "08:45",
    checkOut: "18:30",
    ot: "2.0",
    leave: "-",
    lateEarly: "Trễ 15 phút",
    status: "late",
  },
  {
    id: 2,
    employee: "Trần Thị B",
    avatar: "/female-avatar.jpg",
    department: "Design",
    checkIn: "08:30",
    checkOut: "17:45",
    ot: "0",
    leave: "-",
    lateEarly: "-",
    status: "normal",
  },
  {
    id: 3,
    employee: "Lê Văn C",
    avatar: "/male-avatar-2.jpg",
    department: "Engineering",
    checkIn: "09:15",
    checkOut: "19:00",
    ot: "3.0",
    leave: "-",
    lateEarly: "Trễ 45 phút",
    status: "late",
  },
  {
    id: 4,
    employee: "Phạm Thị D",
    avatar: "/female-avatar-2.jpg",
    department: "Marketing",
    checkIn: "-",
    checkOut: "-",
    ot: "-",
    leave: "Nghỉ phép",
    lateEarly: "-",
    status: "leave",
  },
  {
    id: 5,
    employee: "Hoàng Văn E",
    avatar: "/male-avatar-3.jpg",
    department: "HR",
    checkIn: "08:20",
    checkOut: "17:30",
    ot: "0",
    leave: "-",
    lateEarly: "-",
    status: "normal",
  },
  {
    id: 6,
    employee: "Vũ Thị F",
    avatar: "/female-avatar-3.jpg",
    department: "Sales",
    checkIn: "08:35",
    checkOut: "16:30",
    ot: "0",
    leave: "-",
    lateEarly: "Về sớm 1.5h",
    status: "early",
  },
  {
    id: 7,
    employee: "Đỗ Văn G",
    avatar: "/male-avatar-4.jpg",
    department: "Engineering",
    checkIn: "08:30",
    checkOut: "20:00",
    ot: "4.0",
    leave: "-",
    lateEarly: "-",
    status: "normal",
  },
  {
    id: 8,
    employee: "Bùi Thị H",
    avatar: "/female-avatar-4.jpg",
    department: "Finance",
    checkIn: "-",
    checkOut: "-",
    ot: "-",
    leave: "Nghỉ ốm",
    lateEarly: "-",
    status: "sick",
  },
];

const monthlyStats = [
  { label: "Tổng nhân sự", value: "245", color: "text-primary" },
  { label: "Có mặt", value: "230", color: "text-accent" },
  { label: "Vắng mặt", value: "8", color: "text-destructive" },
  { label: "Đi trễ", value: "7", color: "text-chart-4" },
];

export default function AttendancePage() {
  const [selectedMonth, setSelectedMonth] = useState("2024-06");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredData = attendanceData.filter((record) => {
    const matchesDepartment =
      selectedDepartment === "all" || record.department === selectedDepartment;
    const matchesStatus =
      selectedStatus === "all" || record.status === selectedStatus;
    return matchesDepartment && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "normal":
        return <Badge variant="default">Bình thường</Badge>;
      case "late":
        return <Badge variant="destructive">Đi trễ</Badge>;
      case "early":
        return (
          <Badge className="bg-chart-4 text-white hover:bg-chart-4/90">
            Về sớm
          </Badge>
        );
      case "leave":
        return <Badge variant="secondary">Nghỉ phép</Badge>;
      case "sick":
        return <Badge variant="outline">Nghỉ ốm</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">
            Quản lý Chấm công
          </h1>
          <p className="text-muted-foreground">
            Theo dõi và điều chỉnh thông tin chấm công
          </p>
        </div>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Edit className="h-4 w-4" />
                Điều chỉnh công
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Điều chỉnh công</DialogTitle>
                <DialogDescription>
                  Thay đổi thông tin chấm công cho nhân viên
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="employee">Nhân viên</Label>
                  <Select>
                    <SelectTrigger id="employee">
                      <SelectValue placeholder="Chọn nhân viên" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Nguyễn Văn A</SelectItem>
                      <SelectItem value="2">Trần Thị B</SelectItem>
                      <SelectItem value="3">Lê Văn C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Ngày</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="checkin">Check-in</Label>
                    <Input id="checkin" type="time" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="checkout">Check-out</Label>
                    <Input id="checkout" type="time" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="note">Ghi chú</Label>
                  <Input id="note" placeholder="Lý do điều chỉnh..." />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Lưu thay đổi</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button className="gap-2">
            <Calendar className="h-4 w-4" />
            Tổng hợp công tháng
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {monthlyStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-1">
              <Label htmlFor="month" className="text-sm font-medium">
                Tháng
              </Label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger id="month" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-06">Tháng 6/2024</SelectItem>
                  <SelectItem value="2024-05">Tháng 5/2024</SelectItem>
                  <SelectItem value="2024-04">Tháng 4/2024</SelectItem>
                  <SelectItem value="2024-03">Tháng 3/2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="department" className="text-sm font-medium">
                Phòng ban
              </Label>
              <Select
                value={selectedDepartment}
                onValueChange={setSelectedDepartment}
              >
                <SelectTrigger id="department" className="mt-2">
                  <SelectValue />
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
            </div>
            <div className="flex-1">
              <Label htmlFor="status" className="text-sm font-medium">
                Trạng thái
              </Label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger id="status" className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  <SelectItem value="normal">Bình thường</SelectItem>
                  <SelectItem value="late">Đi trễ</SelectItem>
                  <SelectItem value="early">Về sớm</SelectItem>
                  <SelectItem value="leave">Nghỉ phép</SelectItem>
                  <SelectItem value="sick">Nghỉ ốm</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="gap-2">
                <FileDown className="h-4 w-4" />
                Xuất Excel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Bảng chấm công ({filteredData.length} nhân viên)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nhân viên</TableHead>
                  <TableHead>Phòng ban</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Check-out</TableHead>
                  <TableHead>OT (giờ)</TableHead>
                  <TableHead>Nghỉ phép</TableHead>
                  <TableHead>Trễ / Sớm</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredData.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={record.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>{record.employee[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{record.employee}</span>
                      </div>
                    </TableCell>
                    <TableCell>{record.department}</TableCell>
                    <TableCell className="font-medium">
                      {record.checkIn}
                    </TableCell>
                    <TableCell className="font-medium">
                      {record.checkOut}
                    </TableCell>
                    <TableCell>
                      {record.ot !== "-" ? (
                        <span className="font-medium text-accent">
                          {record.ot}h
                        </span>
                      ) : (
                        record.ot
                      )}
                    </TableCell>
                    <TableCell>{record.leave}</TableCell>
                    <TableCell className="text-muted-foreground">
                      {record.lateEarly}
                    </TableCell>
                    <TableCell>{getStatusBadge(record.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
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
