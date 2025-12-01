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
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  FileDown,
} from "lucide-react";

const incomeData = [
  {
    id: 1,
    date: "15/06/2024",
    source: "Dự án Website ABC",
    category: "Thanh toán milestone",
    amount: 45000000,
    status: "received",
    note: "Milestone 2 - Development Phase 1",
  },
  {
    id: 2,
    date: "10/06/2024",
    source: "Dự án Mobile App XYZ",
    category: "Thanh toán cuối",
    amount: 80000000,
    status: "received",
    note: "Thanh toán hoàn thành dự án",
  },
  {
    id: 3,
    date: "05/06/2024",
    source: "Tư vấn DEF",
    category: "Dịch vụ",
    amount: 15000000,
    status: "pending",
    note: "Tư vấn giải pháp công nghệ",
  },
  {
    id: 4,
    date: "01/06/2024",
    source: "Dự án CRM GHI",
    category: "Thanh toán milestone",
    amount: 30000000,
    status: "received",
    note: "Milestone 1 - Design & Setup",
  },
];

const expenseData = [
  {
    id: 1,
    date: "14/06/2024",
    category: "Lương nhân viên",
    description: "Lương tháng 6/2024",
    amount: 250000000,
    status: "paid",
    recipient: "Toàn bộ nhân viên",
  },
  {
    id: 2,
    date: "10/06/2024",
    category: "Văn phòng",
    description: "Tiền thuê văn phòng tháng 6",
    amount: 30000000,
    status: "paid",
    recipient: "Công ty quản lý tòa nhà",
  },
  {
    id: 3,
    date: "08/06/2024",
    category: "Công cụ & Phần mềm",
    description: "Subscription AWS, Vercel, Figma",
    amount: 8000000,
    status: "paid",
    recipient: "Nhiều nhà cung cấp",
  },
  {
    id: 4,
    date: "05/06/2024",
    category: "Marketing",
    description: "Quảng cáo Facebook & Google",
    amount: 12000000,
    status: "pending",
    recipient: "Meta & Google",
  },
  {
    id: 5,
    date: "01/06/2024",
    category: "Thiết bị",
    description: "Laptop cho nhân viên mới",
    amount: 45000000,
    status: "paid",
    recipient: "Nhà cung cấp thiết bị",
  },
];

const debtData = [
  {
    id: 1,
    type: "receivable",
    client: "Công ty ABC",
    amount: 15000000,
    dueDate: "30/06/2024",
    status: "overdue",
  },
  {
    id: 2,
    type: "receivable",
    client: "Startup GHI",
    amount: 25000000,
    dueDate: "15/07/2024",
    status: "pending",
  },
  {
    id: 3,
    type: "payable",
    client: "Nhà cung cấp XYZ",
    amount: 8000000,
    dueDate: "25/06/2024",
    status: "pending",
  },
];

export default function FinancePage() {
  const [selectedMonth, setSelectedMonth] = useState("2024-06");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const totalIncome = incomeData.reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = expenseData.reduce((sum, item) => sum + item.amount, 0);
  const netProfit = totalIncome - totalExpense;
  const receivables = debtData
    .filter((d) => d.type === "receivable")
    .reduce((sum, d) => sum + d.amount, 0);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "received":
      case "paid":
        return <Badge variant="default">Đã thanh toán</Badge>;
      case "pending":
        return <Badge variant="secondary">Chờ thanh toán</Badge>;
      case "overdue":
        return <Badge variant="destructive">Quá hạn</Badge>;
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
            Thu – Chi
          </h1>
          <p className="text-muted-foreground">Quản lý thu nhập và chi phí</p>
        </div>
        <div className="flex items-center gap-2">
          <Label htmlFor="finance-month">Tháng</Label>
          <Select value={selectedMonth} onValueChange={setSelectedMonth}>
            <SelectTrigger id="finance-month" className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024-06">Tháng 6/2024</SelectItem>
              <SelectItem value="2024-05">Tháng 5/2024</SelectItem>
              <SelectItem value="2024-04">Tháng 4/2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng thu</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">
              {formatCurrency(totalIncome)}
            </div>
            <p className="text-xs text-muted-foreground">
              {incomeData.length} giao dịch
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng chi</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {formatCurrency(totalExpense)}
            </div>
            <p className="text-xs text-muted-foreground">
              {expenseData.length} giao dịch
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Lợi nhuận ròng
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div
              className={`text-2xl font-bold ${
                netProfit >= 0 ? "text-primary" : "text-destructive"
              }`}
            >
              {formatCurrency(netProfit)}
            </div>
            <p className="text-xs text-muted-foreground">
              Tháng {selectedMonth}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Công nợ phải thu
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-4">
              {formatCurrency(receivables)}
            </div>
            <p className="text-xs text-muted-foreground">
              {debtData.filter((d) => d.type === "receivable").length} khoản
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="income" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="income">Thu nhập</TabsTrigger>
          <TabsTrigger value="expense">Chi phí</TabsTrigger>
          <TabsTrigger value="debt">Công nợ</TabsTrigger>
        </TabsList>

        <TabsContent value="income" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Danh sách thu nhập</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Tạo phiếu thu
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Tạo phiếu thu</DialogTitle>
                    <DialogDescription>
                      Thêm khoản thu nhập mới vào hệ thống
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="income-date">Ngày</Label>
                      <Input id="income-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="income-source">Nguồn thu</Label>
                      <Input
                        id="income-source"
                        placeholder="Tên dự án hoặc khách hàng"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="income-category">Loại</Label>
                      <Select>
                        <SelectTrigger id="income-category">
                          <SelectValue placeholder="Chọn loại" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="milestone">
                            Thanh toán milestone
                          </SelectItem>
                          <SelectItem value="final">Thanh toán cuối</SelectItem>
                          <SelectItem value="service">Dịch vụ</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="income-amount">Số tiền (VND)</Label>
                      <Input id="income-amount" type="number" placeholder="0" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="income-note">Ghi chú</Label>
                      <Textarea
                        id="income-note"
                        placeholder="Mô tả chi tiết..."
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Tạo phiếu thu</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ngày</TableHead>
                      <TableHead>Nguồn thu</TableHead>
                      <TableHead>Loại</TableHead>
                      <TableHead>Số tiền</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead>Ghi chú</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {incomeData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          {item.date}
                        </TableCell>
                        <TableCell>{item.source}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell className="font-bold text-accent">
                          {formatCurrency(item.amount)}
                        </TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {item.note}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expense" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Danh sách chi phí</CardTitle>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Tạo phiếu chi
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Tạo phiếu chi</DialogTitle>
                    <DialogDescription>
                      Thêm khoản chi phí mới vào hệ thống
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expense-date">Ngày</Label>
                      <Input id="expense-date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="expense-category">Hạng mục</Label>
                      <Select>
                        <SelectTrigger id="expense-category">
                          <SelectValue placeholder="Chọn hạng mục" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="salary">
                            Lương nhân viên
                          </SelectItem>
                          <SelectItem value="office">Văn phòng</SelectItem>
                          <SelectItem value="tools">
                            Công cụ & Phần mềm
                          </SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="equipment">Thiết bị</SelectItem>
                          <SelectItem value="other">Khác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="expense-description">Mô tả</Label>
                      <Input
                        id="expense-description"
                        placeholder="Mô tả chi tiết..."
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="expense-amount">Số tiền (VND)</Label>
                      <Input
                        id="expense-amount"
                        type="number"
                        placeholder="0"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="expense-recipient">Người nhận</Label>
                      <Input
                        id="expense-recipient"
                        placeholder="Tên người/công ty nhận"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Tạo phiếu chi</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ngày</TableHead>
                      <TableHead>Hạng mục</TableHead>
                      <TableHead>Mô tả</TableHead>
                      <TableHead>Số tiền</TableHead>
                      <TableHead>Người nhận</TableHead>
                      <TableHead>Trạng thái</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {expenseData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          {item.date}
                        </TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell className="font-bold text-destructive">
                          -{formatCurrency(item.amount)}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {item.recipient}
                        </TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="debt" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Bảng công nợ</CardTitle>
              <Button variant="outline" className="gap-2">
                <FileDown className="h-4 w-4" />
                Xuất báo cáo
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Loại</TableHead>
                      <TableHead>Khách hàng/Nhà cung cấp</TableHead>
                      <TableHead>Số tiền</TableHead>
                      <TableHead>Hạn thanh toán</TableHead>
                      <TableHead>Trạng thái</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {debtData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Badge
                            variant={
                              item.type === "receivable"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {item.type === "receivable"
                              ? "Phải thu"
                              : "Phải trả"}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">
                          {item.client}
                        </TableCell>
                        <TableCell
                          className={`font-bold ${
                            item.type === "receivable"
                              ? "text-accent"
                              : "text-destructive"
                          }`}
                        >
                          {item.type === "receivable" ? "+" : "-"}
                          {formatCurrency(item.amount)}
                        </TableCell>
                        <TableCell>{item.dueDate}</TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
