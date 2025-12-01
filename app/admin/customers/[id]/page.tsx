import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Mail, Phone, MapPin, Globe, Edit, Briefcase } from "lucide-react";

export default function CustomerDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const customer = {
    id: params.id,
    name: "Công ty TNHH ABC",
    contact: "Nguyễn Văn A",
    email: "contact@abc.com",
    phone: "0901234567",
    address: "123 Lê Lợi, Q1, TP.HCM",
    website: "www.abc.com",
    industry: "Technology",
    status: "active",
    avatar: "/placeholder.svg?key=aaa11",
  };

  const communications = [
    {
      date: "15/06/2024",
      type: "Meeting",
      subject: "Thảo luận dự án mới",
      notes: "Khách hàng quan tâm đến việc phát triển ứng dụng mobile",
    },
    {
      date: "10/06/2024",
      type: "Email",
      subject: "Báo giá dự án website",
      notes: "Đã gửi báo giá chi tiết cho dự án website công ty",
    },
    {
      date: "05/06/2024",
      type: "Call",
      subject: "Tư vấn giải pháp",
      notes: "Tư vấn về các giải pháp công nghệ phù hợp",
    },
  ];

  const projects = [
    {
      name: "Website Corporate",
      status: "Đang thực hiện",
      startDate: "01/05/2024",
      budget: "₫150,000,000",
      progress: 65,
    },
    {
      name: "Mobile App iOS",
      status: "Hoàn thành",
      startDate: "01/02/2024",
      budget: "₫200,000,000",
      progress: 100,
    },
    {
      name: "CRM System",
      status: "Đang thực hiện",
      startDate: "15/06/2024",
      budget: "₫100,000,000",
      progress: 25,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Customer Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <Avatar className="h-28 w-28">
                <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl">
                  {customer.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold">{customer.name}</h1>
                  <p className="text-lg text-muted-foreground">
                    {customer.industry}
                  </p>
                  <Badge className="mt-2" variant="default">
                    {customer.status === "active"
                      ? "Đang hoạt động"
                      : "Tiềm năng"}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{customer.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{customer.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>{customer.website}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button className="gap-2">
              <Edit className="h-4 w-4" />
              Chỉnh sửa
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="info" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="info">Thông tin</TabsTrigger>
          <TabsTrigger value="communications">Lịch sử trao đổi</TabsTrigger>
          <TabsTrigger value="projects">Dự án</TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Chi tiết khách hàng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Tên công ty
                  </label>
                  <p className="mt-1 font-medium">{customer.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Người liên hệ
                  </label>
                  <p className="mt-1 font-medium">{customer.contact}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <p className="mt-1 font-medium">{customer.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Số điện thoại
                  </label>
                  <p className="mt-1 font-medium">{customer.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Địa chỉ
                  </label>
                  <p className="mt-1 font-medium">{customer.address}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Website
                  </label>
                  <p className="mt-1 font-medium">{customer.website}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="communications">
          <Card>
            <CardHeader>
              <CardTitle>Lịch sử trao đổi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communications.map((comm, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-lg border border-border p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{comm.subject}</p>
                        <Badge variant="outline">{comm.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {comm.notes}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {comm.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Dự án liên quan</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên dự án</TableHead>
                    <TableHead>Ngày bắt đầu</TableHead>
                    <TableHead>Ngân sách</TableHead>
                    <TableHead>Tiến độ</TableHead>
                    <TableHead>Trạng thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {project.name}
                      </TableCell>
                      <TableCell>{project.startDate}</TableCell>
                      <TableCell>{project.budget}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-24 overflow-hidden rounded-full bg-secondary">
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
                      <TableCell>
                        <Badge
                          variant={
                            project.status === "Hoàn thành"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
