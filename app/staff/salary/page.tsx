import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function SalaryPage() {
  // Mock data for current month
  const currentPayslip = {
    month: "Tháng 11/2025",
    totalAmount: "25,000,000",
    paymentDate: "05/12/2025",
    breakdown: {
      basicSalary: "20,000,000",
      allowances: "2,500,000",
      overtime: "1,800,000",
      bonus: "1,500,000",
      deductions: {
        socialInsurance: "800,000",
        healthInsurance: "150,000",
        unemploymentInsurance: "100,000",
        tax: "750,000",
      },
    },
  };

  const previousPayslips = [
    { month: "Tháng 10/2025", amount: "24,500,000", date: "05/11/2025" },
    { month: "Tháng 9/2025", amount: "23,800,000", date: "05/10/2025" },
    { month: "Tháng 8/2025", amount: "25,200,000", date: "05/09/2025" },
  ];

  const totalIncome =
    parseFloat(currentPayslip.breakdown.basicSalary.replace(/,/g, "")) +
    parseFloat(currentPayslip.breakdown.allowances.replace(/,/g, "")) +
    parseFloat(currentPayslip.breakdown.overtime.replace(/,/g, "")) +
    parseFloat(currentPayslip.breakdown.bonus.replace(/,/g, ""));

  const totalDeductions =
    parseFloat(
      currentPayslip.breakdown.deductions.socialInsurance.replace(/,/g, "")
    ) +
    parseFloat(
      currentPayslip.breakdown.deductions.healthInsurance.replace(/,/g, "")
    ) +
    parseFloat(
      currentPayslip.breakdown.deductions.unemploymentInsurance.replace(
        /,/g,
        ""
      )
    ) +
    parseFloat(currentPayslip.breakdown.deductions.tax.replace(/,/g, ""));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-balance">Lương của tôi</h1>
        <p className="text-muted-foreground mt-1">
          Chi tiết phiếu lương và lịch sử thanh toán
        </p>
      </div>

      {/* Current Month Payslip */}
      <Card className="shadow-sm border-primary/20">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{currentPayslip.month}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Ngày thanh toán: {currentPayslip.paymentDate}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Tổng lương</p>
              <p className="text-3xl font-bold text-primary">
                {currentPayslip.totalAmount}đ
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Income Breakdown */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase">
              Thu nhập
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Lương cơ bản</span>
                <span className="font-medium">
                  {currentPayslip.breakdown.basicSalary}đ
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Phụ cấp</span>
                <span className="font-medium">
                  {currentPayslip.breakdown.allowances}đ
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Tiền OT</span>
                <span className="font-medium">
                  {currentPayslip.breakdown.overtime}đ
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Thưởng</span>
                <span className="font-medium">
                  {currentPayslip.breakdown.bonus}đ
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <span className="font-semibold">Tổng thu nhập</span>
                <span className="font-bold text-green-600">
                  {totalIncome.toLocaleString("vi-VN")}đ
                </span>
              </div>
            </div>
          </div>

          {/* Deductions Breakdown */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase">
              Khấu trừ
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Bảo hiểm xã hội (BHXH)</span>
                <span className="font-medium text-red-600">
                  -{currentPayslip.breakdown.deductions.socialInsurance}đ
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Bảo hiểm y tế (BHYT)</span>
                <span className="font-medium text-red-600">
                  -{currentPayslip.breakdown.deductions.healthInsurance}đ
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Bảo hiểm thất nghiệp (BHTN)</span>
                <span className="font-medium text-red-600">
                  -{currentPayslip.breakdown.deductions.unemploymentInsurance}đ
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Thuế thu nhập cá nhân</span>
                <span className="font-medium text-red-600">
                  -{currentPayslip.breakdown.deductions.tax}đ
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between py-2">
                <span className="font-semibold">Tổng khấu trừ</span>
                <span className="font-bold text-red-600">
                  -{totalDeductions.toLocaleString("vi-VN")}đ
                </span>
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Net Salary */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20">
            <span className="text-lg font-semibold">Lương thực nhận</span>
            <span className="text-2xl font-bold text-primary">
              {currentPayslip.totalAmount}đ
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button className="flex-1 gap-2">
              <Eye className="h-4 w-4" />
              Xem chi tiết
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <Download className="h-4 w-4" />
              Tải phiếu lương
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Previous Payslips */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Lịch sử phiếu lương</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {previousPayslips.map((payslip, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div>
                  <p className="font-medium">{payslip.month}</p>
                  <p className="text-sm text-muted-foreground">
                    Ngày thanh toán: {payslip.date}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-bold text-lg">{payslip.amount}đ</p>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
