'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { FileText } from 'lucide-react'

interface OfferLetterModalProps {
  onClose: () => void
}

export function OfferLetterModal({ onClose }: OfferLetterModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Tạo Offer Letter
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="candidate">Ứng viên</Label>
              <Select>
                <SelectTrigger id="candidate">
                  <SelectValue placeholder="Chọn ứng viên" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Nguyễn Văn A</SelectItem>
                  <SelectItem value="2">Trần Thị B</SelectItem>
                  <SelectItem value="3">Lê Văn C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Vị trí</Label>
              <Input
                id="position"
                placeholder="Vị trí công việc"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="salary">Mức lương</Label>
              <Input
                id="salary"
                type="number"
                placeholder="Nhập mức lương"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="startDate">Ngày bắt đầu</Label>
              <Input
                id="startDate"
                type="date"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contractType">Loại hợp đồng</Label>
            <Select>
              <SelectTrigger id="contractType">
                <SelectValue placeholder="Chọn loại hợp đồng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fulltime">Hợp đồng chính thức</SelectItem>
                <SelectItem value="probation">Hợp đồng thử việc</SelectItem>
                <SelectItem value="parttime">Hợp đồng bán thời gian</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Ghi chú thêm</Label>
            <Textarea
              id="notes"
              placeholder="Phúc lợi, chế độ làm việc, v.v..."
              rows={4}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Hủy
          </Button>
          <Button onClick={onClose}>
            Tạo Offer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
