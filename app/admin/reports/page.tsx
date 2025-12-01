"use client";

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
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FileDown,
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

const revenueByMonth = [
  { month: "T1", revenue: 1800000000, expense: 1200000000, profit: 600000000 },
  { month: "T2", revenue: 2000000000, expense: 1300000000, profit: 700000000 },
  { month: "T3", revenue: 2200000000, expense: 1400000000, profit: 800000000 },
  { month: "T4", revenue: 2100000000, expense: 1350000000, profit: 750000000 },
  { month: "T5", revenue: 2400000000, expense: 1500000000, profit: 900000000 },
  { month: "T6", revenue: 2600000000, expense: 1600000000, profit: 1000000000 },
];

const expenseByCategory = [
  { name: "Lương nhân viên", value: 1500000000, color: "hsl(var(--chart-1))" },
  { name: "Văn phòng", value: 180000000, color: "hsl(var(--chart-2))" },
  { name: "Marketing", value: 144000000, color: "hsl(var(--chart-3))" },
  { name: "Công cụ & Phần mềm", value: 96000000, color: "hsl(var(--chart-4))" },
  { name: "Khác", value: 80000000, color: "hsl(var(--chart-5))" },
];

const revenueByProject = [
  { project: "Website Ecommerce", revenue: 450000000 },
  { project: "Mobile Banking", revenue: 850000000 },
  { project: "CRM System", revenue: 280000000 },
  { project: "Dashboard Analytics", revenue: 320000000 },
  { project: "ERP System", revenue: 700000000 },
];

const cashflowData = [
  {
    month: "T1",
    opening: 500000000,
    income: 1800000000,
    expense: 1200000000,
    closing: 1100000000,
  },
  {
    month: "T2",
    opening: 1100000000,
    income: 2000000000,
    expense: 1300000000,
    closing: 1800000000,
  },
  {
    month: "T3",
    opening: 1800000000,
    income: 2200000000,
    expense: 1400000000,
    closing: 2600000000,
  },
  {
    month: "T4",
    opening: 2600000000,
    income: 2100000000,
    expense: 1350000000,
    closing: 3350000000,
  },
  {
    month: "T5",
    opening: 3350000000,
    income: 2400000000,
    expense: 1500000000,
    closing: 4250000000,
  },
  {
    month: "T6",
    opening: 4250000000,
    income: 2600000000,
    expense: 1600000000,
    closing: 5250000000,
  },
];

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("6-months");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(amount);
  };

  const totalRevenue = revenueByMonth.reduce(
    (sum, item) => sum + item.revenue,
    0
  );
  const totalExpense = revenueByMonth.reduce(
    (sum, item) => sum + item.expense,
    0
  );
  const totalProfit = revenueByMonth.reduce(
    (sum, item) => sum + item.profit,
    0
  );
  const profitMargin = ((totalProfit / totalRevenue) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">
            Doanh thu & Báo cáo
          </h1>
          <p className="text-muted-foreground">
            Phân tích tài chính và doanh thu
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3-months">3 tháng gần đây</SelectItem>
              <SelectItem value="6-months">6 tháng gần đây</SelectItem>
              <SelectItem value="12-months">12 tháng gần đây</SelectItem>
              <SelectItem value="year">Năm nay</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <FileDown className="h-4 w-4" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            <p className="text-xs text-muted-foreground">6 tháng gần đây</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng chi phí</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {formatCurrency(totalExpense)}
            </div>
            <p className="text-xs text-muted-foreground">6 tháng gần đây</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lợi nhuận</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {formatCurrency(totalProfit)}
            </div>
            <p className="text-xs text-muted-foreground">6 tháng gần đây</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tỷ suất lợi nhuận
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {profitMargin}%
            </div>
            <p className="text-xs text-muted-foreground">Trung bình 6 tháng</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Doanh thu theo tháng</CardTitle>
          <p className="text-sm text-muted-foreground">
            So sánh doanh thu, chi phí và lợi nhuận
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={revenueByMonth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis
                tickFormatter={(value) =>
                  new Intl.NumberFormat("vi-VN", {
                    notation: "compact",
                    maximumFractionDigits: 1,
                  }).format(value)
                }
              />
              <Tooltip
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                name="Doanh thu"
              />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="hsl(var(--chart-5))"
                strokeWidth={2}
                name="Chi phí"
              />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                name="Lợi nhuận"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Expense by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Chi phí theo hạng mục</CardTitle>
            <p className="text-sm text-muted-foreground">
              Phân bổ chi phí 6 tháng gần đây
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={expenseByCategory}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {expenseByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number) => formatCurrency(value)}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-2">
                {expenseByCategory.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">
                      {formatCurrency(item.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revenue by Project */}
        <Card>
          <CardHeader>
            <CardTitle>Doanh thu theo dự án</CardTitle>
            <p className="text-sm text-muted-foreground">
              Top 5 dự án có doanh thu cao nhất
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueByProject} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="number"
                  tickFormatter={(value) =>
                    new Intl.NumberFormat("vi-VN", {
                      notation: "compact",
                      maximumFractionDigits: 1,
                    }).format(value)
                  }
                />
                <YAxis dataKey="project" type="category" width={150} />
                <Tooltip
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{
                    backgroundColor: "hsl(var(--popover))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar
                  dataKey="revenue"
                  fill="hsl(var(--chart-2))"
                  name="Doanh thu"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Cashflow Table */}
      <Card>
        <CardHeader>
          <CardTitle>Bảng cashflow</CardTitle>
          <p className="text-sm text-muted-foreground">Dòng tiền theo tháng</p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tháng</TableHead>
                  <TableHead>Số dư đầu kỳ</TableHead>
                  <TableHead>Thu trong kỳ</TableHead>
                  <TableHead>Chi trong kỳ</TableHead>
                  <TableHead>Số dư cuối kỳ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cashflowData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.month}</TableCell>
                    <TableCell>{formatCurrency(row.opening)}</TableCell>
                    <TableCell className="text-accent">
                      +{formatCurrency(row.income)}
                    </TableCell>
                    <TableCell className="text-destructive">
                      -{formatCurrency(row.expense)}
                    </TableCell>
                    <TableCell className="font-bold text-primary">
                      {formatCurrency(row.closing)}
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
