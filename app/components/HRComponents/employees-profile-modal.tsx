"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Edit } from "lucide-react";

interface EmployeeProfileModalProps {
  employeeId: string;
  onClose: () => void;
}

const employeeData = {
  "1": {
    name: "Nguyễn Văn An",
    email: "an.nguyen@company.com",
    phone: "0901234567",
    department: "IT",
    position: "Senior Developer",
    startDate: "15/01/2020",
    status: "Đang làm việc",
    dateOfBirth: "20/05/1990",
    idCard: "001090012345",
    bankName: "Vietcombank",
    bankAccount: "1234567890",
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    contracts: [
      {
        type: "Hợp đồng chính thức",
        startDate: "15/01/2020",
        endDate: "Vô thời hạn",
        status: "Đang hiệu lực",
      },
    ],
    insurance: {
      socialInsurance: "Có",
      healthInsurance: "Có",
      unemploymentInsurance: "Có",
      startDate: "15/01/2020",
    },
    salaryHistory: [
      {
        effectiveDate: "01/01/2024",
        baseSalary: "25,000,000",
        allowance: "3,000,000",
        note: "Tăng lương định kỳ",
      },
      {
        effectiveDate: "01/01/2023",
        baseSalary: "22,000,000",
        allowance: "3,000,000",
        note: "Tăng lương thường niên",
      },
      {
        effectiveDate: "15/01/2020",
        baseSalary: "18,000,000",
        allowance: "2,000,000",
        note: "Mức lương ban đầu",
      },
    ],
  },
};

export function EmployeeProfileModal({
  employeeId,
  onClose,
}: EmployeeProfileModalProps) {
  const employee = employeeData[employeeId as keyof typeof employeeData];

  if (!employee) return null;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Hồ sơ nhân viên</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Thông tin cá nhân</TabsTrigger>
            <TabsTrigger value="contract">Hợp đồng</TabsTrigger>
            <TabsTrigger value="insurance">Bảo hiểm</TabsTrigger>
            <TabsTrigger value="salary">Lịch sử lương</TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6 mt-6">
            <div className="flex items-start gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                  {employee.name.split(" ").pop()?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-2xl font-semibold">{employee.name}</h3>
                  <p className="text-muted-foreground">{employee.position}</p>
                </div>
                <Badge>{employee.status}</Badge>
              </div>
            </div>

            <Card className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Email
                  </p>
                  <p className="mt-1">{employee.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Số điện thoại
                  </p>
                  <p className="mt-1">{employee.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Ngày vào làm
                  </p>
                  <p className="mt-1">{employee.startDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Phòng ban
                  </p>
                  <p className="mt-1">{employee.department}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Ngày sinh
                  </p>
                  <p className="mt-1">{employee.dateOfBirth}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    CCCD
                  </p>
                  <p className="mt-1">{employee.idCard}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Ngân hàng
                  </p>
                  <p className="mt-1">{employee.bankName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Số tài khoản
                  </p>
                  <p className="mt-1">{employee.bankAccount}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Địa chỉ
                  </p>
                  <p className="mt-1">{employee.address}</p>
                </div>
              </div>
            </Card>

            <div className="flex justify-end">
              <Button className="gap-2">
                <Edit className="h-4 w-4" />
                Chỉnh sửa thông tin
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="contract" className="space-y-4 mt-6">
            {employee.contracts.map((contract, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold">{contract.type}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {contract.startDate} - {contract.endDate}
                    </p>
                  </div>
                  <Badge variant="default">{contract.status}</Badge>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="insurance" className="space-y-4 mt-6">
            <Card className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Bảo hiểm xã hội
                  </p>
                  <p className="mt-1">{employee.insurance.socialInsurance}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Bảo hiểm y tế
                  </p>
                  <p className="mt-1">{employee.insurance.healthInsurance}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Bảo hiểm thất nghiệp
                  </p>
                  <p className="mt-1">
                    {employee.insurance.unemploymentInsurance}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Ngày bắt đầu tham gia
                  </p>
                  <p className="mt-1">{employee.insurance.startDate}</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="salary" className="space-y-4 mt-6">
            {employee.salaryHistory.map((record, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold">
                      Ngày hiệu lực: {record.effectiveDate}
                    </p>
                  </div>
                  {index === 0 && <Badge>Hiện tại</Badge>}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Lương cơ bản
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      {record.baseSalary} đ
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phụ cấp</p>
                    <p className="text-lg font-semibold">
                      {record.allowance} đ
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ghi chú</p>
                    <p className="text-sm">{record.note}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
