"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Send, Download, Building2 } from "lucide-react";

interface PayslipDrawerProps {
  payslipId: string;
  onClose: () => void;
}

const payslipDetails = {
  "1": {
    employee: "Nguyễn Văn An",
    position: "Senior Developer",
    department: "IT",
    period: "Tháng 11/2025",
    baseSalary: "25,000,000",
    allowance: "3,000,000",
    bonus: "2,000,000",
    otPay: "500,000",
    grossSalary: "30,500,000",
    socialInsurance: "800,000",
    healthInsurance: "300,000",
    unemploymentInsurance: "200,000",
    tax: "200,000",
    totalDeduction: "1,500,000",
    netSalary: "29,000,000",
  },
};

export function PayslipDrawer({ payslipId, onClose }: PayslipDrawerProps) {
  const payslip = payslipDetails[payslipId as keyof typeof payslipDetails];

  if (!payslip) return null;

  return (
    <Sheet open={true} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Phiếu lương</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Company Header */}
          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
            <div className="rounded-lg bg-primary p-2">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-semibold">Công ty TNHH ABC</p>
              <p className="text-sm text-muted-foreground">
                Kỳ lương: {payslip.period}
              </p>
            </div>
          </div>

          {/* Employee Info */}
          <Card className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Nhân viên</p>
                <p className="font-semibold">{payslip.employee}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Vị trí</p>
                <p className="font-semibold">{payslip.position}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phòng ban</p>
                <p className="font-semibold">{payslip.department}</p>
              </div>
            </div>
          </Card>

          {/* Salary Breakdown */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Chi tiết lương</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Lương cơ bản</span>
                <span className="font-mono">{payslip.baseSalary} đ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Phụ cấp</span>
                <span className="font-mono">{payslip.allowance} đ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Thưởng</span>
                <span className="font-mono">{payslip.bonus} đ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Lương OT</span>
                <span className="font-mono">{payslip.otPay} đ</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-medium">Tổng thu nhập</span>
                <span className="font-semibold font-mono">
                  {payslip.grossSalary} đ
                </span>
              </div>
            </div>
          </Card>

          {/* Deductions */}
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Khấu trừ</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Bảo hiểm xã hội</span>
                <span className="font-mono text-destructive">
                  -{payslip.socialInsurance} đ
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Bảo hiểm y tế</span>
                <span className="font-mono text-destructive">
                  -{payslip.healthInsurance} đ
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  Bảo hiểm thất nghiệp
                </span>
                <span className="font-mono text-destructive">
                  -{payslip.unemploymentInsurance} đ
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Thuế TNCN</span>
                <span className="font-mono text-destructive">
                  -{payslip.tax} đ
                </span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-medium">Tổng khấu trừ</span>
                <span className="font-semibold font-mono text-destructive">
                  -{payslip.totalDeduction} đ
                </span>
              </div>
            </div>
          </Card>

          {/* Net Salary */}
          <Card className="p-4 bg-primary/5 border-primary">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Lương thực nhận</span>
              <span className="text-2xl font-bold text-primary font-mono">
                {payslip.netSalary} đ
              </span>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex gap-3">
            <Button className="flex-1 gap-2">
              <Send className="h-4 w-4" />
              Gửi phiếu lương
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <Download className="h-4 w-4" />
              Xuất PDF
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
