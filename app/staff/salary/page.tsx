import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export default function SalaryPage() {
  // Mock data
  const employee = {
    name: "Nguyễn Văn A",
    position: "Senior Frontend Developer",
    department: "Engineering",
    email: "nguyen.van.a@company.com",
    phone: "+84 912 345 678",
    joinDate: "15/01/2023",
    dateOfBirth: "25/05/1995",
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
  };

  const bankAccount = {
    bank: "Vietcombank",
    accountNumber: "1234567890",
    accountHolder: "NGUYEN VAN A",
    branch: "Chi nhánh Quận 1, TP.HCM",
  };

  const documents = [
    { name: "Hợp đồng lao động", date: "15/01/2023", type: "PDF" },
    { name: "Phụ lục hợp đồng", date: "01/06/2024", type: "PDF" },
    { name: "Bảo hiểm xã hội", date: "15/01/2023", type: "PDF" },
    { name: "Giấy khám sức khỏe", date: "10/01/2023", type: "PDF" },
  ];

  return (
    <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-balance">Hồ sơ của tôi</h1>
          <p className="text-muted-foreground mt-1">
            Thông tin cá nhân và tài liệu nhân sự
          </p>
        </div>

        {/* Profile Header Card */}
        <Card className="shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="/placeholder.svg?height=96&width=96"
                  alt={employee.name}
                />
                <AvatarFallback className="text-2xl">NVA</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-balance">
                  {employee.name}
                </h2>
                <p className="text-lg text-muted-foreground mt-1">
                  {employee.position}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge variant="secondary">{employee.department}</Badge>
                  <span className="text-sm text-muted-foreground">
                    • Tham gia từ {employee.joinDate}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Personal Information */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Thông tin cá nhân</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Họ và tên:
                  </span>
                  <span className="col-span-2 text-sm">{employee.name}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Email:
                  </span>
                  <span className="col-span-2 text-sm">{employee.email}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Số điện thoại:
                  </span>
                  <span className="col-span-2 text-sm">{employee.phone}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Ngày sinh:
                  </span>
                  <span className="col-span-2 text-sm">
                    {employee.dateOfBirth}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Ngày vào làm:
                  </span>
                  <span className="col-span-2 text-sm">
                    {employee.joinDate}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Phòng ban:
                  </span>
                  <span className="col-span-2 text-sm">
                    {employee.department}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Vị trí:
                  </span>
                  <span className="col-span-2 text-sm">
                    {employee.position}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Địa chỉ:
                  </span>
                  <span className="col-span-2 text-sm">{employee.address}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bank Account Information */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Tài khoản ngân hàng</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Ngân hàng:
                  </span>
                  <span className="col-span-2 text-sm font-medium">
                    {bankAccount.bank}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Số tài khoản:
                  </span>
                  <span className="col-span-2 text-sm font-mono">
                    {bankAccount.accountNumber}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Chủ tài khoản:
                  </span>
                  <span className="col-span-2 text-sm font-medium">
                    {bankAccount.accountHolder}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Chi nhánh:
                  </span>
                  <span className="col-span-2 text-sm">
                    {bankAccount.branch}
                  </span>
                </div>
              </div>
              <div className="pt-2 border-t">
                <p className="text-xs text-muted-foreground">
                  Thông tin tài khoản ngân hàng dùng để thanh toán lương hàng
                  tháng
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Employment Documents */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Tài liệu nhân sự</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {doc.type} • Ngày tải lên: {doc.date}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Tải xuống
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
  );
}
