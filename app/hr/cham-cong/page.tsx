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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Edit, Clock, Calendar, TrendingUp } from "lucide-react";
import { useState } from "react";

const attendanceData = [
  {
    id: "1",
    employee: "Nguyễn Văn An",
    date: "18/11/2025",
    checkIn: "08:30",
    checkOut: "17:45",
    ot: "0.75",
    note: "",
    status: "present",
  },
  {
    id: "2",
    employee: "Trần Thị Bình",
    date: "18/11/2025",
    checkIn: "08:15",
    checkOut: "17:30",
    ot: "0",
    note: "",
    status: "present",
  },
  {
    id: "3",
    employee: "Lê Văn Cường",
    date: "18/11/2025",
    checkIn: "09:00",
    checkOut: "18:30",
    ot: "1.5",
    note: "",
    status: "late",
  },
  {
    id: "4",
    employee: "Phạm Thị Dung",
    date: "18/11/2025",
    checkIn: "-",
    checkOut: "-",
    ot: "0",
    note: "Nghỉ phép có phép",
    status: "leave",
  },
  {
    id: "5",
    employee: "Hoàng Văn Em",
    date: "18/11/2025",
    checkIn: "08:25",
    checkOut: "17:35",
    ot: "0",
    note: "",
    status: "present",
  },
  {
    id: "6",
    employee: "Đỗ Thị Phượng",
    date: "18/11/2025",
    checkIn: "08:30",
    checkOut: "20:00",
    ot: "3",
    note: "Làm dự án khẩn",
    status: "present",
  },
];

const monthlySummary = [
  {
    title: "Tổng giờ làm",
    value: "176h",
    description: "Giờ tiêu chuẩn: 176h",
    icon: Clock,
  },
  {
    title: "Số ngày đi làm",
    value: "22",
    description: "Trong tháng 11/2025",
    icon: Calendar,
  },
  {
    title: "Tổng OT",
    value: "5.25h",
    description: "Giờ làm thêm",
    icon: TrendingUp,
  },
  {
    title: "Nghỉ phép",
    value: "0",
    description: "Ngày nghỉ có phép",
    icon: Calendar,
  },
];

export default function AttendancePage() {
  const [selectedRecord, setSelectedRecord] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("11-2025");

  const filteredData = attendanceData.filter((record) =>
    record.employee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">
              Quản lý chấm công
            </h1>
            <p className="text-muted-foreground mt-1">
              Theo dõi thời gian làm việc và OT của nhân viên
            </p>
          </div>

          {/* Monthly Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {monthlySummary.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.title}
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {item.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
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

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Tìm kiếm nhân viên..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select
                value={departmentFilter}
                onValueChange={setDepartmentFilter}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Phòng ban" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả phòng ban</SelectItem>
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="HR">HR</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
              <Select value={monthFilter} onValueChange={setMonthFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Tháng" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="11-2025">Tháng 11/2025</SelectItem>
                  <SelectItem value="10-2025">Tháng 10/2025</SelectItem>
                  <SelectItem value="09-2025">Tháng 9/2025</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nhân viên</TableHead>
                    <TableHead>Ngày</TableHead>
                    <TableHead>Check-in</TableHead>
                    <TableHead>Check-out</TableHead>
                    <TableHead>OT (giờ)</TableHead>
                    <TableHead>Ghi chú</TableHead>
                    <TableHead>Trạng thái</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {record.employee.split(" ").pop()?.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{record.employee}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {record.date}
                      </TableCell>
                      <TableCell className="text-muted-foreground font-mono">
                        {record.checkIn}
                      </TableCell>
                      <TableCell className="text-muted-foreground font-mono">
                        {record.checkOut}
                      </TableCell>
                      <TableCell>
                        {record.ot !== "0" && (
                          <Badge variant="secondary" className="font-mono">
                            {record.ot}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {record.note}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            record.status === "present"
                              ? "default"
                              : record.status === "late"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {record.status === "present"
                            ? "Đúng giờ"
                            : record.status === "late"
                            ? "Đi muộn"
                            : "Nghỉ phép"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedRecord(record.id)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
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
