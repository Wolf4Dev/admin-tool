'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import { Clock, Upload, Info } from 'lucide-react'

export default function OvertimePage() {
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [totalHours, setTotalHours] = useState(0)

  const calculateHours = (start: string, end: string) => {
    if (!start || !end) return 0
    const [startHour, startMinute] = start.split(':').map(Number)
    const [endHour, endMinute] = end.split(':').map(Number)
    const startInMinutes = startHour * 60 + startMinute
    const endInMinutes = endHour * 60 + endMinute
    const diff = endInMinutes - startInMinutes
    return diff > 0 ? (diff / 60).toFixed(2) : 0
  }

  const handleStartTimeChange = (value: string) => {
    setStartTime(value)
    const hours = calculateHours(value, endTime)
    setTotalHours(Number(hours))
  }

  const handleEndTimeChange = (value: string) => {
    setEndTime(value)
    const hours = calculateHours(startTime, value)
    setTotalHours(Number(hours))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Đơn đăng ký OT đã được gửi!')
  }

  const handleClear = () => {
    setStartTime('')
    setEndTime('')
    setTotalHours(0)
  }

  return (
    <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-balance">Đăng ký OT</h1>
          <p className="text-muted-foreground mt-1">Gửi yêu cầu làm thêm giờ</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* OT Registration Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Đơn đăng ký OT</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date Picker */}
                  <div className="space-y-2">
                    <Label htmlFor="ot-date">Ngày làm OT *</Label>
                    <Input
                      id="ot-date"
                      type="date"
                      required
                      className="max-w-md"
                    />
                  </div>

                  {/* Time Range */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="start-time">Giờ bắt đầu *</Label>
                      <Input
                        id="start-time"
                        type="time"
                        required
                        value={startTime}
                        onChange={(e) => handleStartTimeChange(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="end-time">Giờ kết thúc *</Label>
                      <Input
                        id="end-time"
                        type="time"
                        required
                        value={endTime}
                        onChange={(e) => handleEndTimeChange(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Total Hours Display */}
                  <div className="space-y-2">
                    <Label>Tổng số giờ OT</Label>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-2xl font-bold text-primary">
                        {totalHours} giờ
                      </span>
                    </div>
                  </div>

                  {/* OT Type */}
                  <div className="space-y-2">
                    <Label htmlFor="ot-type">Loại OT *</Label>
                    <Select required>
                      <SelectTrigger id="ot-type" className="max-w-md">
                        <SelectValue placeholder="Chọn loại OT" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekday">OT ngày thường (1.5x)</SelectItem>
                        <SelectItem value="weekend">OT cuối tuần (2x)</SelectItem>
                        <SelectItem value="holiday">OT ngày lễ (3x)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Reason */}
                  <div className="space-y-2">
                    <Label htmlFor="reason">Lý do OT *</Label>
                    <Textarea
                      id="reason"
                      placeholder="Nhập lý do làm thêm giờ..."
                      required
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  {/* File Attachment */}
                  <div className="space-y-2">
                    <Label htmlFor="attachment">File đính kèm (nếu có)</Label>
                    <div className="flex items-center gap-3">
                      <Button type="button" variant="outline" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Chọn file
                      </Button>
                      <span className="text-sm text-muted-foreground">
                        Chưa có file nào được chọn
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Hỗ trợ: PDF, DOC, DOCX, JPG, PNG (tối đa 5MB)
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button type="submit" size="lg">
                      Gửi đơn
                    </Button>
                    <Button type="button" variant="outline" size="lg" onClick={handleClear}>
                      Xóa form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* OT Rules Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-sm sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Quy tắc OT
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-muted">
                    <h4 className="font-semibold mb-2">OT ngày thường</h4>
                    <p className="text-muted-foreground">
                      Hệ số: <span className="font-medium text-foreground">1.5x</span>
                    </p>
                    <p className="text-muted-foreground">Áp dụng cho thứ 2 - thứ 6</p>
                  </div>

                  <div className="p-3 rounded-lg bg-muted">
                    <h4 className="font-semibold mb-2">OT cuối tuần</h4>
                    <p className="text-muted-foreground">
                      Hệ số: <span className="font-medium text-foreground">2x</span>
                    </p>
                    <p className="text-muted-foreground">Áp dụng cho thứ 7 & Chủ nhật</p>
                  </div>

                  <div className="p-3 rounded-lg bg-muted">
                    <h4 className="font-semibold mb-2">OT ngày lễ</h4>
                    <p className="text-muted-foreground">
                      Hệ số: <span className="font-medium text-foreground">3x</span>
                    </p>
                    <p className="text-muted-foreground">Áp dụng cho ngày lễ, Tết</p>
                  </div>
                </div>

                <div className="pt-4 border-t space-y-2">
                  <h4 className="font-semibold text-sm">Lưu ý:</h4>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Đăng ký OT trước ít nhất 1 ngày</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Tối thiểu 2 giờ OT mỗi lần đăng ký</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Cần có phê duyệt từ quản lý trực tiếp</span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>Thanh toán cùng với lương tháng</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}
