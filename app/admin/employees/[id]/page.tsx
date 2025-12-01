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
import { Mail, Phone, MapPin, Calendar, Edit, FileText } from "lucide-react";

export default function EmployeeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock employee data
  const employee = {
    id: params.id,
    name: "Nguyễn Văn A",
    email: "nguyen.a@company.com",
    phone: "0901234567",
    address: "123 Nguyễn Huệ, Q1, TP.HCM",
    department: "Engineering",
    position: "Senior Developer",
    salary: "₫45,000,000",
    startDate: "15/01/2020",
    status: "active",
    avatar: "/male-avatar.jpg",
  };

  const contracts = [
    {
      id: 1,
      type: "Hợp đồng chính thức",
      startDate: "15/01/2023",
      endDate: "15/01/2025",
      status: "Đang hiệu lực",
    },
    {
      id: 2,
      type: "Hợp đồng thử việc",
      startDate: "15/11/2022",
      endDate: "15/01/2023",
      status: "Đã hết hạn",
    },
  ];

  const salaryHistory = [
    {
      month: "Tháng 6/2024",
      base: "₫45,000,000",
      bonus: "₫5,000,000",
      total: "₫50,000,000",
    },
    {
      month: "Tháng 5/2024",
      base: "₫45,000,000",
      bonus: "₫0",
      total: "₫45,000,000",
    },
    {
      month: "Tháng 4/2024",
      base: "₫45,000,000",
      bonus: "₫2,000,000",
      total: "₫47,000,000",
    },
    {
      month: "Tháng 3/2024",
      base: "₫40,000,000",
      bonus: "₫0",
      total: "₫40,000,000",
    },
  ];

  const insurance = [
    {
      type: "Bảo hiểm xã hội",
      provider: "BHXH Việt Nam",
      number: "1234567890",
    },
    {
      type: "Bảo hiểm y tế",
      provider: "BHYT Việt Nam",
      number: "GD1234567890",
    },
    {
      type: "Bảo hiểm thất nghiệp",
      provider: "BHTN Việt Nam",
      number: "TN1234567890",
    },
  ];

  const assets = [
    {
      name: "Laptop Dell XPS 15",
      serial: "SN123456",
      assignedDate: "15/01/2023",
    },
    { name: "iPhone 14 Pro", serial: "IMEI987654", assignedDate: "20/03/2023" },
    {
      name: "Màn hình LG 27 inch",
      serial: "MON456789",
      assignedDate: "15/01/2023",
    },
  ];

  const projects = [
    {
      name: "Website Ecommerce",
      role: "Lead Developer",
      status: "Đang thực hiện",
    },
    {
      name: "Mobile App Banking",
      role: "Backend Developer",
      status: "Hoàn thành",
    },
    {
      name: "CRM System",
      role: "Full Stack Developer",
      status: "Đang thực hiện",
    },
  ];

  const documents = [
    { name: "CMND/CCCD", uploaded: "15/01/2020", size: "2.4 MB" },
    { name: "Bằng cấp", uploaded: "15/01/2020", size: "1.8 MB" },
    { name: "Giấy khám sức khỏe", uploaded: "10/01/2024", size: "1.2 MB" },
  ];

  return (
    <div className="space-y-6">
      {/* Employee Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <Avatar className="h-28 w-28">
                <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl">
                  {employee.name[0]}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold">{employee.name}</h1>
                  <p className="text-lg text-muted-foreground">
                    {employee.position}
                  </p>
                  <Badge className="mt-2" variant="default">
                    {employee.status === "active"
                      ? "Đang làm việc"
                      : "Đang nghỉ"}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{employee.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{employee.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{employee.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Ngày vào làm: {employee.startDate}</span>
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
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-7">
          <TabsTrigger value="profile">Hồ sơ</TabsTrigger>
          <TabsTrigger value="contracts">Hợp đồng</TabsTrigger>
          <TabsTrigger value="salary">Lịch sử lương</TabsTrigger>
          <TabsTrigger value="insurance">Bảo hiểm</TabsTrigger>
          <TabsTrigger value="assets">Tài sản</TabsTrigger>
          <TabsTrigger value="projects">Dự án</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin cá nhân</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Họ và tên
                  </label>
                  <p className="mt-1 font-medium">{employee.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <p className="mt-1 font-medium">{employee.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Số điện thoại
                  </label>
                  <p className="mt-1 font-medium">{employee.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Địa chỉ
                  </label>
                  <p className="mt-1 font-medium">{employee.address}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Phòng ban
                  </label>
                  <p className="mt-1 font-medium">{employee.department}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Chức vụ
                  </label>
                  <p className="mt-1 font-medium">{employee.position}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contracts">
          <Card>
            <CardHeader>
              <CardTitle>Hợp đồng lao động</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Loại hợp đồng</TableHead>
                    <TableHead>Ngày bắt đầu</TableHead>
                    <TableHead>Ngày kết thúc</TableHead>
                    <TableHead>Trạng thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contracts.map((contract) => (
                    <TableRow key={contract.id}>
                      <TableCell className="font-medium">
                        {contract.type}
                      </TableCell>
                      <TableCell>{contract.startDate}</TableCell>
                      <TableCell>{contract.endDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            contract.status === "Đang hiệu lực"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {contract.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="salary">
          <Card>
            <CardHeader>
              <CardTitle>Lịch sử lương</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tháng</TableHead>
                    <TableHead>Lương cơ bản</TableHead>
                    <TableHead>Thưởng</TableHead>
                    <TableHead>Tổng</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {salaryHistory.map((salary, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {salary.month}
                      </TableCell>
                      <TableCell>{salary.base}</TableCell>
                      <TableCell>{salary.bonus}</TableCell>
                      <TableCell className="font-bold">
                        {salary.total}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insurance">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin bảo hiểm</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Loại bảo hiểm</TableHead>
                    <TableHead>Đơn vị cấp</TableHead>
                    <TableHead>Số sổ</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {insurance.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.type}</TableCell>
                      <TableCell>{item.provider}</TableCell>
                      <TableCell>{item.number}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assets">
          <Card>
            <CardHeader>
              <CardTitle>Tài sản công ty</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên tài sản</TableHead>
                    <TableHead>Serial/IMEI</TableHead>
                    <TableHead>Ngày cấp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assets.map((asset, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {asset.name}
                      </TableCell>
                      <TableCell>{asset.serial}</TableCell>
                      <TableCell>{asset.assignedDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Dự án tham gia</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên dự án</TableHead>
                    <TableHead>Vai trò</TableHead>
                    <TableHead>Trạng thái</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {project.name}
                      </TableCell>
                      <TableCell>{project.role}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            project.status === "Đang thực hiện"
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

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Tài liệu đính kèm</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tên tài liệu</TableHead>
                    <TableHead>Ngày tải lên</TableHead>
                    <TableHead>Kích thước</TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {documents.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          {doc.name}
                        </div>
                      </TableCell>
                      <TableCell>{doc.uploaded}</TableCell>
                      <TableCell>{doc.size}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Tải xuống
                        </Button>
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
