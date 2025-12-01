"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { DollarSign, Lock, Send, Eye, FileDown, Settings } from "lucide-react";

const payrollData = [
  {
    id: 1,
    employee: "Nguyễn Văn A",
    avatar: "/male-avatar.jpg",
    department: "Engineering",
    position: "Senior Developer",
    baseSalary: 45000000,
    bonus: 5000000,
    deduction: 2000000,
    netSalary: 48000000,
    status: "pending",
  },
  {
    id: 2,
    employee: "Trần Thị B",
    avatar: "/female-avatar.jpg",
    department: "Design",
    position: "UI/UX Designer",
    baseSalary: 35000000,
    bonus: 2000000,
    deduction: 1500000,
    netSalary: 35500000,
    status: "pending",
  },
  {
    id: 3,
    employee: "Lê Văn C",
    avatar: "/male-avatar-2.jpg",
    department: "Engineering",
    position: "Backend Developer",
    baseSalary: 40000000,
    bonus: 3000000,
    deduction: 1800000,
    netSalary: 41200000,
    status: "sent",
  },
  {
    id: 4,
    employee: "Phạm Thị D",
    avatar: "/female-avatar-2.jpg",
    department: "Marketing",
    position: "Marketing Manager",
    baseSalary: 50000000,
    bonus: 8000000,
    deduction: 2500000,
    netSalary: 55500000,
    status: "sent",
  },
  {
    id: 5,
    employee: "Hoàng Văn E",
    avatar: "/male-avatar-3.jpg",
    department: "HR",
    position: "HR Specialist",
    baseSalary: 30000000,
    bonus: 1000000,
    deduction: 1200000,
    netSalary: 29800000,
    status: "locked",
  },
];

const salaryConfig = {
  taxRate: 10,
  insuranceRate: 10.5,
  allowances: {
    transport: 1000000,
    lunch: 750000,
    phone: 300000,
  },
};

export default function PayrollPage() {
  const [selectedMonth, setSelectedMonth] = useState("2024-06");
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary">Chưa gửi</Badge>;
      case "sent":
        return (
          <Badge className="bg-accent text-white hover:bg-accent/90">
            Đã gửi
          </Badge>
        );
      case "locked":
        return <Badge variant="default">Đã khóa</Badge>;
      default:
        return null;
    }
  };

  const totalPayroll = payrollData.reduce(
    (sum, item) => sum + item.netSalary,
    0
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">
            Quản lý Bảng lương
          </h1>
          <p className="text-muted-foreground">
            Cấu hình và quản lý lương nhân viên
          </p>
        </div>
      </div>

      <Tabs defaultValue="payroll" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
          <TabsTrigger value="payroll">Bảng lương</TabsTrigger>
          <TabsTrigger value="config">Cấu hình lương</TabsTrigger>
        </TabsList>

        <TabsContent value="payroll" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Tổng lương tháng
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {formatCurrency(totalPayroll)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nhân viên</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{payrollData.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Đã gửi</CardTitle>
                <Send className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">
                  {payrollData.filter((p) => p.status === "sent").length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Đã khóa</CardTitle>
                <Lock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {payrollData.filter((p) => p.status === "locked").length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <Label
                    htmlFor="payroll-month"
                    className="text-sm font-medium"
                  >
                    Tháng
                  </Label>
                  <Select
                    value={selectedMonth}
                    onValueChange={setSelectedMonth}
                  >
                    <SelectTrigger id="payroll-month" className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-06">Tháng 6/2024</SelectItem>
                      <SelectItem value="2024-05">Tháng 5/2024</SelectItem>
                      <SelectItem value="2024-04">Tháng 4/2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2">
                    <FileDown className="h-4 w-4" />
                    Xuất Excel
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Send className="h-4 w-4" />
                    Gửi tất cả payslip
                  </Button>
                  <Button className="gap-2">
                    <Lock className="h-4 w-4" />
                    Khóa bảng lương
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payroll Table */}
          <Card>
            <CardHeader>
              <CardTitle>Bảng lương tháng {selectedMonth}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nhân viên</TableHead>
                      <TableHead>Phòng ban</TableHead>
                      <TableHead>Lương cơ bản</TableHead>
                      <TableHead>Thưởng</TableHead>
                      <TableHead>Khấu trừ</TableHead>
                      <TableHead>Lương thực nhận</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead className="text-right">Thao tác</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payrollData.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage
                                src={record.avatar || "/placeholder.svg"}
                              />
                              <AvatarFallback>
                                {record.employee[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{record.employee}</p>
                              <p className="text-xs text-muted-foreground">
                                {record.position}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{record.department}</TableCell>
                        <TableCell className="font-medium">
                          {formatCurrency(record.baseSalary)}
                        </TableCell>
                        <TableCell className="text-accent">
                          +{formatCurrency(record.bonus)}
                        </TableCell>
                        <TableCell className="text-destructive">
                          -{formatCurrency(record.deduction)}
                        </TableCell>
                        <TableCell className="font-bold">
                          {formatCurrency(record.netSalary)}
                        </TableCell>
                        <TableCell>{getStatusBadge(record.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => setSelectedEmployee(record.id)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>
                                    Chi tiết lương - {record.employee}
                                  </DialogTitle>
                                  <DialogDescription>
                                    Bảng phân tích chi tiết lương tháng{" "}
                                    {selectedMonth}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="space-y-2">
                                    <h4 className="font-semibold">Thu nhập</h4>
                                    <div className="space-y-2 rounded-lg border border-border p-4">
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                          Lương cơ bản
                                        </span>
                                        <span className="font-medium">
                                          {formatCurrency(record.baseSalary)}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                          Phụ cấp đi lại
                                        </span>
                                        <span className="font-medium">
                                          {formatCurrency(
                                            salaryConfig.allowances.transport
                                          )}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                          Phụ cấp ăn trưa
                                        </span>
                                        <span className="font-medium">
                                          {formatCurrency(
                                            salaryConfig.allowances.lunch
                                          )}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                          Thưởng
                                        </span>
                                        <span className="font-medium text-accent">
                                          {formatCurrency(record.bonus)}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <h4 className="font-semibold">Khấu trừ</h4>
                                    <div className="space-y-2 rounded-lg border border-border p-4">
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                          Thuế TNCN
                                        </span>
                                        <span className="font-medium text-destructive">
                                          -
                                          {formatCurrency(
                                            record.baseSalary * 0.1
                                          )}
                                        </span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                          Bảo hiểm (10.5%)
                                        </span>
                                        <span className="font-medium text-destructive">
                                          -
                                          {formatCurrency(
                                            record.baseSalary * 0.105
                                          )}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="rounded-lg border border-primary bg-primary/5 p-4">
                                    <div className="flex justify-between text-lg">
                                      <span className="font-semibold">
                                        Lương thực nhận
                                      </span>
                                      <span className="font-bold text-primary">
                                        {formatCurrency(record.netSalary)}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button variant="outline">
                                    In phiếu lương
                                  </Button>
                                  <Button className="gap-2">
                                    <Send className="h-4 w-4" />
                                    Gửi payslip
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button variant="ghost" size="icon">
                              <Send className="h-4 w-4" />
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
        </TabsContent>

        <TabsContent value="config" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cấu hình lương</CardTitle>
              <p className="text-sm text-muted-foreground">
                Thiết lập các thông số tính lương
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Thuế và Bảo hiểm</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="tax-rate">Thuế TNCN (%)</Label>
                    <Input
                      id="tax-rate"
                      type="number"
                      defaultValue={salaryConfig.taxRate}
                      placeholder="10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="insurance-rate">Bảo hiểm (%)</Label>
                    <Input
                      id="insurance-rate"
                      type="number"
                      defaultValue={salaryConfig.insuranceRate}
                      placeholder="10.5"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Phụ cấp</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="transport">Phụ cấp đi lại (VND)</Label>
                    <Input
                      id="transport"
                      type="number"
                      defaultValue={salaryConfig.allowances.transport}
                      placeholder="1000000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lunch">Phụ cấp ăn trưa (VND)</Label>
                    <Input
                      id="lunch"
                      type="number"
                      defaultValue={salaryConfig.allowances.lunch}
                      placeholder="750000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phụ cấp điện thoại (VND)</Label>
                    <Input
                      id="phone"
                      type="number"
                      defaultValue={salaryConfig.allowances.phone}
                      placeholder="300000"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline">Đặt lại</Button>
                <Button className="gap-2">
                  <Settings className="h-4 w-4" />
                  Lưu cấu hình
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
