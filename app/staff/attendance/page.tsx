"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock, TrendingUp, FileText, X } from "lucide-react";
import { useState } from "react";

interface DayDetail {
  day: number;
  date: string;
  checkIn: string;
  checkOut: string;
  hours: string;
  late: string;
  note: string;
  value: number;
}

export default function AttendancePage() {
  const [selectedMonth, setSelectedMonth] = useState("11/2025");
  const [selectedDay, setSelectedDay] = useState<DayDetail | null>(null);

  const attendanceRecords = [
    {
      date: "18/11/2025",
      checkIn: "08:45",
      checkOut: "17:30",
      hours: "8.75h",
      late: "-",
      note: "",
      isLate: false,
    },
    {
      date: "15/11/2025",
      checkIn: "09:15",
      checkOut: "18:00",
      hours: "8.75h",
      late: "15 phút",
      note: "Tắc đường",
      isLate: true,
    },
    {
      date: "14/11/2025",
      checkIn: "08:30",
      checkOut: "17:00",
      hours: "8.5h",
      late: "-",
      note: "",
      isLate: false,
    },
    {
      date: "13/11/2025",
      checkIn: "08:50",
      checkOut: "16:45",
      hours: "7.92h",
      late: "Về sớm 15p",
      note: "",
      isLate: true,
    },
    {
      date: "12/11/2025",
      checkIn: "08:40",
      checkOut: "17:20",
      hours: "8.67h",
      late: "-",
      note: "",
      isLate: false,
    },
  ];

  const monthlyCalendarData = {
    year: 2025,
    month: 11,
    firstDayOfWeek: 5, // Friday (0 = Sunday)
    daysInMonth: 30,
    days: Array.from({ length: 30 }, (_, i) => {
      const dayNum = i + 1;
      const isWeekend = (i + 5) % 7 === 0 || (i + 5) % 7 === 6;
      const value = isWeekend
        ? 0
        : dayNum % 10 === 3
        ? 0.5
        : dayNum % 10 === 7
        ? 0.7
        : 1;
      const hasNote = dayNum === 5 || dayNum === 15;
      const isLate = dayNum === 15 || dayNum === 20;

      return {
        day: dayNum,
        value,
        hasNote,
        isLate,
        checkIn: isWeekend ? "-" : "08:30",
        checkOut: isWeekend ? "-" : "17:30",
        hours: isWeekend
          ? "0h"
          : value === 1
          ? "8.5h"
          : value === 0.7
          ? "6.0h"
          : "4.0h",
        late: isLate ? (dayNum === 15 ? "15 phút" : "Về sớm 30p") : "-",
        note: hasNote
          ? dayNum === 5
            ? "Họp với khách hàng"
            : "Tắc đường"
          : "",
      };
    }),
    totalWorkDays: 22.5,
  };

  const leaveStats = {
    total: 13.75,
    used: 3.0,
    remaining: 10.75,
  };

  const leaveRequests = [
    {
      startDate: "20/11/2025",
      endDate: "22/11/2025",
      days: 3,
      reason: "Du lịch gia đình",
      approver: "Trần Thị B",
      status: "Approved",
    },
    {
      startDate: "10/11/2025",
      endDate: "10/11/2025",
      days: 1,
      reason: "Khám bệnh",
      approver: "Trần Thị B",
      status: "Approved",
    },
    {
      startDate: "25/11/2025",
      endDate: "26/11/2025",
      days: 2,
      reason: "Việc cá nhân",
      approver: "Trần Thị B",
      status: "Pending",
    },
  ];

  const overtimeRecords = [
    {
      date: "16/11/2025",
      hours: 3,
      reason: "Hoàn thành dự án khẩn",
      status: "Approved",
      note: "OT ngày thường x1.5",
    },
    {
      date: "09/11/2025",
      hours: 8,
      reason: "Deploy production",
      status: "Approved",
      note: "OT cuối tuần x2.0",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { className: string }> = {
      Approved: {
        className: "bg-green-500/10 text-green-700 border-green-200",
      },
      Pending: {
        className: "bg-yellow-500/10 text-yellow-700 border-yellow-200",
      },
      Rejected: { className: "bg-red-500/10 text-red-700 border-red-200" },
    };
    return variants[status] || variants.Pending;
  };

  const getCellColor = (value: number) => {
    if (value === 1) return "bg-green-50 border-green-200 text-green-700";
    if (value === 0.7) return "bg-yellow-50 border-yellow-200 text-yellow-700";
    if (value === 0.5) return "bg-orange-50 border-orange-200 text-orange-700";
    return "bg-red-50 border-red-200 text-red-700";
  };

  const handleDayClick = (dayData: (typeof monthlyCalendarData.days)[0]) => {
    setSelectedDay({
      day: dayData.day,
      date: `${dayData.day}/11/2025`,
      checkIn: dayData.checkIn,
      checkOut: dayData.checkOut,
      hours: dayData.hours,
      late: dayData.late,
      note: dayData.note,
      value: dayData.value,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-balance">Chấm công của tôi</h1>
          <p className="text-muted-foreground mt-1">
            Theo dõi giờ làm việc, bảng công và đơn xin nghỉ
          </p>
        </div>

        <Tabs defaultValue="history" className="space-y-4">
          <TabsList className="grid w-full max-w-3xl grid-cols-5">
            <TabsTrigger value="history">Lịch sử check-in/out</TabsTrigger>
            <TabsTrigger value="timesheet">Bảng công tháng</TabsTrigger>
            <TabsTrigger value="leave">Nghỉ phép</TabsTrigger>
            <TabsTrigger value="overtime">OT đã duyệt</TabsTrigger>
            <TabsTrigger value="ot-register">Đăng ký OT</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            {/* Statistics Cards */}
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Tổng giờ làm trong tháng
                      </p>
                      <p className="text-2xl font-bold">176.5h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <CalendarIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Tổng số ngày công
                      </p>
                      <p className="text-2xl font-bold">22.5 ngày</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Date/Month Selector */}
            <div className="flex gap-2">
              <Select defaultValue="month">
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Theo tháng</SelectItem>
                  <SelectItem value="date">Theo ngày</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="11/2025">Tháng 11/2025</SelectItem>
                  <SelectItem value="10/2025">Tháng 10/2025</SelectItem>
                  <SelectItem value="09/2025">Tháng 09/2025</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Attendance Table */}
            <Card className="shadow-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Ngày
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Check-in
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Check-out
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Giờ làm
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Trễ / Về sớm
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Ghi chú
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {attendanceRecords.map((record, index) => (
                        <tr
                          key={index}
                          className={`hover:bg-muted/30 transition-colors ${
                            record.isLate ? "bg-red-500/5" : ""
                          }`}
                        >
                          <td className="px-6 py-4 text-sm font-medium">
                            {record.date}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {record.checkIn}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {record.checkOut}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium">
                            {record.hours}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {record.late !== "-" ? (
                              <span className="text-red-600 font-medium">
                                {record.late}
                              </span>
                            ) : (
                              <span className="text-muted-foreground">
                                {record.late}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {record.note || "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timesheet" className="space-y-4">
            <Card className="shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <CardTitle>Bảng công theo tháng</CardTitle>
                    <Select
                      value={selectedMonth}
                      onValueChange={setSelectedMonth}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="11/2025">Tháng 11/2025</SelectItem>
                        <SelectItem value="10/2025">Tháng 10/2025</SelectItem>
                        <SelectItem value="09/2025">Tháng 09/2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                    <span className="text-sm font-medium text-muted-foreground">
                      Công tính lương tháng này:
                    </span>
                    <span className="text-xl font-bold text-primary">
                      {monthlyCalendarData.totalWorkDays}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Calendar Grid */}
                <div className="space-y-2">
                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {["CN", "T2", "T3", "T4", "T5", "T6", "T7"].map((day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-semibold text-muted-foreground py-2"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Empty cells for days before month starts */}
                    {Array.from({
                      length: monthlyCalendarData.firstDayOfWeek,
                    }).map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square" />
                    ))}

                    {/* Actual days */}
                    {monthlyCalendarData.days.map((dayData) => (
                      <button
                        key={dayData.day}
                        onClick={() => handleDayClick(dayData)}
                        className={`
                          aspect-square rounded-lg border-2 p-2
                          transition-all hover:scale-105 hover:shadow-md
                          flex flex-col items-center justify-between
                          relative cursor-pointer
                          ${getCellColor(dayData.value)}
                        `}
                      >
                        <div className="text-xs font-semibold">
                          {dayData.day}
                        </div>
                        <div className="text-lg font-bold">{dayData.value}</div>

                        {/* Icons in corner */}
                        <div className="absolute top-1 right-1 flex gap-0.5">
                          {dayData.hasNote && (
                            <span className="text-xs">📝</span>
                          )}
                          {dayData.isLate && <span className="text-xs">⏱</span>}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="shadow-sm">
              <CardContent className="p-4">
                <p className="text-sm font-semibold mb-3">Chú thích:</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-green-50 border-2 border-green-200 flex items-center justify-center font-bold text-green-700">
                      1
                    </div>
                    <span>Đủ công (8+ giờ)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-yellow-50 border-2 border-yellow-200 flex items-center justify-center font-bold text-yellow-700">
                      0.7
                    </div>
                    <span>Công theo giờ (6-7h)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 border-2 border-orange-200 flex items-center justify-center font-bold text-orange-700">
                      0.5
                    </div>
                    <span>Nửa công (4-5h)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-red-50 border-2 border-red-200 flex items-center justify-center font-bold text-red-700">
                      0
                    </div>
                    <span>Không công</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📝</span>
                    <span>Có ghi chú</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⏱</span>
                    <span>Đi trễ/về sớm</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leave" className="space-y-6">
            {/* Leave Statistics Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="shadow-sm border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <CalendarIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Phép được hưởng
                      </p>
                      <p className="text-2xl font-bold">
                        {leaveStats.total} ngày
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm border-t-4 border-t-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-orange-500/10">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Phép đã dùng
                      </p>
                      <p className="text-2xl font-bold">
                        {leaveStats.used} ngày
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm border-t-4 border-t-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-green-500/10">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Phép còn lại
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {leaveStats.remaining} ngày
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Leave History Table */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Lịch sử nghỉ phép</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Ngày bắt đầu
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Ngày kết thúc
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Số ngày
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Lý do
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Người duyệt
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Trạng thái
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {leaveRequests.map((request, index) => (
                        <tr
                          key={index}
                          className="hover:bg-muted/30 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm">
                            {request.startDate}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {request.endDate}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium">
                            {request.days} ngày
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {request.reason}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {request.approver}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <Badge
                              variant="outline"
                              className={
                                getStatusBadge(request.status).className
                              }
                            >
                              {request.status}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Leave Request Form */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Tạo yêu cầu nghỉ phép</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="leave-type">Loại nghỉ</Label>
                      <Select>
                        <SelectTrigger id="leave-type">
                          <SelectValue placeholder="Chọn loại nghỉ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="annual">Nghỉ phép năm</SelectItem>
                          <SelectItem value="unpaid">
                            Nghỉ không lương
                          </SelectItem>
                          <SelectItem value="sick">Nghỉ ốm</SelectItem>
                          <SelectItem value="business">Công tác</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="approver">Người duyệt</Label>
                      <Select>
                        <SelectTrigger id="approver">
                          <SelectValue placeholder="Chọn người duyệt" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manager1">
                            Trần Thị B (Manager)
                          </SelectItem>
                          <SelectItem value="manager2">
                            Lê Văn C (Director)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Ngày bắt đầu</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-date">Ngày kết thúc</Label>
                      <Input id="end-date" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reason">Lý do</Label>
                    <Textarea
                      id="reason"
                      placeholder="Nhập lý do xin nghỉ phép..."
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" size="lg">
                      Gửi duyệt
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="overtime" className="space-y-4">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Lịch sử OT đã duyệt</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Ngày
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Số giờ OT
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Lý do
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Trạng thái
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">
                          Ghi chú
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {overtimeRecords.map((record, index) => (
                        <tr
                          key={index}
                          className="hover:bg-muted/30 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-medium">
                            {record.date}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <span className="font-semibold text-primary">
                              {record.hours}h
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm">{record.reason}</td>
                          <td className="px-6 py-4 text-sm">
                            <Badge
                              variant="outline"
                              className={
                                getStatusBadge(record.status).className
                              }
                            >
                              {record.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {record.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ot-register" className="space-y-4">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* OT Registration Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle>Đăng ký làm thêm giờ (OT)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="ot-date">Ngày OT</Label>
                        <Input id="ot-date" type="date" />
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="start-time">Giờ bắt đầu</Label>
                          <Input
                            id="start-time"
                            type="time"
                            defaultValue="18:00"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="end-time">Giờ kết thúc</Label>
                          <Input
                            id="end-time"
                            type="time"
                            defaultValue="21:00"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ot-hours">Số giờ OT (tự tính)</Label>
                        <Input
                          id="ot-hours"
                          type="text"
                          value="3 giờ"
                          readOnly
                          className="bg-muted"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ot-reason">Lý do</Label>
                        <Textarea
                          id="ot-reason"
                          placeholder="Nhập lý do làm OT..."
                          rows={3}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ot-approver">Người duyệt</Label>
                        <Select>
                          <SelectTrigger id="ot-approver">
                            <SelectValue placeholder="Chọn người duyệt" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manager1">
                              Trần Thị B (Manager)
                            </SelectItem>
                            <SelectItem value="manager2">
                              Lê Văn C (Director)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-end pt-2">
                        <Button type="submit" size="lg">
                          Gửi duyệt
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* OT Rules Summary */}
              <div>
                <Card className="shadow-sm border-l-4 border-l-primary sticky top-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Quy định OT</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="text-primary font-semibold">x1.5</div>
                        <div className="text-sm">
                          <p className="font-medium">Ngày thường</p>
                          <p className="text-muted-foreground">
                            Sau 18:00 hoặc trước 8:00
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="text-primary font-semibold">x2.0</div>
                        <div className="text-sm">
                          <p className="font-medium">Cuối tuần</p>
                          <p className="text-muted-foreground">
                            Thứ 7, Chủ nhật
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="text-primary font-semibold">x3.0</div>
                        <div className="text-sm">
                          <p className="font-medium">Ngày lễ</p>
                          <p className="text-muted-foreground">
                            Các ngày lễ, Tết
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">Lưu ý:</p>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Đăng ký trước ít nhất 1 ngày</li>
                        <li>Cần có sự phê duyệt của quản lý</li>
                        <li>Tối đa 40 giờ OT/tháng</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {selectedDay && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedDay(null)}
          >
            <Card
              className="w-full max-w-md shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <CardHeader className="relative">
                <CardTitle>Chi tiết ngày {selectedDay.date}</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => setSelectedDay(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div
                  className="flex items-center justify-center p-6 rounded-lg border-2"
                  style={{
                    backgroundColor:
                      selectedDay.value === 1
                        ? "#f0fdf4"
                        : selectedDay.value === 0.7
                        ? "#fefce8"
                        : selectedDay.value === 0.5
                        ? "#fff7ed"
                        : "#fef2f2",
                    borderColor:
                      selectedDay.value === 1
                        ? "#bbf7d0"
                        : selectedDay.value === 0.7
                        ? "#fef08a"
                        : selectedDay.value === 0.5
                        ? "#fed7aa"
                        : "#fecaca",
                  }}
                >
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-1">
                      Giá trị công
                    </div>
                    <div
                      className="text-5xl font-bold"
                      style={{
                        color:
                          selectedDay.value === 1
                            ? "#15803d"
                            : selectedDay.value === 0.7
                            ? "#a16207"
                            : selectedDay.value === 0.5
                            ? "#c2410c"
                            : "#b91c1c",
                      }}
                    >
                      {selectedDay.value}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium text-muted-foreground">
                      Check-in
                    </span>
                    <span className="text-sm font-bold">
                      {selectedDay.checkIn}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium text-muted-foreground">
                      Check-out
                    </span>
                    <span className="text-sm font-bold">
                      {selectedDay.checkOut}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium text-muted-foreground">
                      Giờ làm việc
                    </span>
                    <span className="text-sm font-bold text-primary">
                      {selectedDay.hours}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm font-medium text-muted-foreground">
                      Trễ / Về sớm
                    </span>
                    <span
                      className={`text-sm font-bold ${
                        selectedDay.late !== "-" ? "text-red-600" : ""
                      }`}
                    >
                      {selectedDay.late}
                    </span>
                  </div>
                  {selectedDay.note && (
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                      <div className="text-sm font-medium text-blue-900 mb-1">
                        Ghi chú
                      </div>
                      <div className="text-sm text-blue-700">
                        {selectedDay.note}
                      </div>
                    </div>
                  )}
                </div>

                <Button className="w-full" onClick={() => setSelectedDay(null)}>
                  Đóng
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
