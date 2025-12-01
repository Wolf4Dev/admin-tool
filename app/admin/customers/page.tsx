"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Eye, Mail, Phone } from 'lucide-react'

const customers = [
  {
    id: 1,
    name: "Công ty TNHH ABC",
    contact: "Nguyễn Văn A",
    email: "contact@abc.com",
    phone: "0901234567",
    projects: 3,
    totalRevenue: 450000000,
    status: "active",
    avatar: "/placeholder.svg?key=aaaa1"
  },
  {
    id: 2,
    name: "Tập đoàn XYZ",
    contact: "Trần Thị B",
    email: "info@xyz.com",
    phone: "0902345678",
    projects: 5,
    totalRevenue: 850000000,
    status: "active",
    avatar: "/placeholder.svg?key=bbb22"
  },
  {
    id: 3,
    name: "Công ty Cổ phần DEF",
    contact: "Lê Văn C",
    email: "contact@def.vn",
    phone: "0903456789",
    projects: 2,
    totalRevenue: 280000000,
    status: "active",
    avatar: "/placeholder.svg?key=ccc33"
  },
  {
    id: 4,
    name: "Startup Tech GHI",
    contact: "Phạm Thị D",
    email: "hello@ghi.io",
    phone: "0904567890",
    projects: 1,
    totalRevenue: 120000000,
    status: "potential",
    avatar: "/placeholder.svg?key=ddd44"
  },
  {
    id: 5,
    name: "Công ty JKL",
    contact: "Hoàng Văn E",
    email: "contact@jkl.com",
    phone: "0905678901",
    projects: 4,
    totalRevenue: 620000000,
    status: "active",
    avatar: "/placeholder.svg?key=eee55"
  },
]

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
  }

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.contact.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalRevenue = customers.reduce((sum, c) => sum + c.totalRevenue, 0)
  const activeCustomers = customers.filter(c => c.status === "active").length

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">Quản lý Khách hàng</h1>
          <p className="text-muted-foreground">
            Danh sách và thông tin khách hàng
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm khách hàng
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng khách hàng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{customers.length}</div>
            <p className="text-xs text-muted-foreground">
              {activeCustomers} đang hoạt động
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng dự án</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {customers.reduce((sum, c) => sum + c.projects, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Từ tất cả khách hàng
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng doanh thu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-muted-foreground">
              Từ tất cả khách hàng
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Tìm kiếm khách hàng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách khách hàng ({filteredCustomers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Công ty</TableHead>
                  <TableHead>Người liên hệ</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Số điện thoại</TableHead>
                  <TableHead>Dự án</TableHead>
                  <TableHead>Doanh thu</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Thao tác</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{customer.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{customer.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{customer.contact}</TableCell>
                    <TableCell className="text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {customer.email}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {customer.phone}
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{customer.projects}</TableCell>
                    <TableCell className="font-medium">
                      {formatCurrency(customer.totalRevenue)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={customer.status === "active" ? "default" : "secondary"}>
                        {customer.status === "active" ? "Đang hoạt động" : "Tiềm năng"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/admin/customers/${customer.id}`}>
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
  )
}
