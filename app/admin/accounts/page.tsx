"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Shield, Edit } from "lucide-react";

const accounts = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@company.com",
    role: "Super Admin",
    status: "active",
    avatar: "/male-avatar.jpg",
  },
  {
    id: 2,
    name: "HR Manager",
    email: "hr@company.com",
    role: "HR Admin",
    status: "active",
    avatar: "/female-avatar.jpg",
  },
  {
    id: 3,
    name: "Finance Manager",
    email: "finance@company.com",
    role: "Finance Admin",
    status: "active",
    avatar: "/male-avatar-2.jpg",
  },
  {
    id: 4,
    name: "Project Manager",
    email: "pm@company.com",
    role: "Project Admin",
    status: "active",
    avatar: "/female-avatar-2.jpg",
  },
];

export default function AccountsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight">
            Quản lý tài khoản
          </h1>
          <p className="text-muted-foreground">
            Phân quyền và quản lý tài khoản admin
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Thêm tài khoản
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Danh sách tài khoản</CardTitle>
            <p className="text-sm text-muted-foreground">
              {accounts.length} tài khoản quản trị
            </p>
          </div>
          <Shield className="h-5 w-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Người dùng</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Vai trò</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead className="text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={account.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>{account.name[0]}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{account.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {account.email}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{account.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="default">Đang hoạt động</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Phân quyền</CardTitle>
          <p className="text-sm text-muted-foreground">
            Các vai trò và quyền truy cập
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Super Admin</h4>
                  <p className="text-sm text-muted-foreground">
                    Toàn quyền truy cập tất cả module
                  </p>
                </div>
                <Badge>1 người</Badge>
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">HR Admin</h4>
                  <p className="text-sm text-muted-foreground">
                    Quản lý nhân viên, chấm công, bảng lương
                  </p>
                </div>
                <Badge>1 người</Badge>
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Finance Admin</h4>
                  <p className="text-sm text-muted-foreground">
                    Quản lý tài chính, thu chi, báo cáo
                  </p>
                </div>
                <Badge>1 người</Badge>
              </div>
            </div>
            <div className="rounded-lg border border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Project Admin</h4>
                  <p className="text-sm text-muted-foreground">
                    Quản lý dự án, khách hàng
                  </p>
                </div>
                <Badge>1 người</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
