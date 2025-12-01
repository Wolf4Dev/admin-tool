"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface AttendanceEditModalProps {
  recordId: string;
  onClose: () => void;
}

export function AttendanceEditModal({
  recordId,
  onClose,
}: AttendanceEditModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa công</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="checkin">Thời gian vào</Label>
            <Input id="checkin" type="time" defaultValue="08:30" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="checkout">Thời gian ra</Label>
            <Input id="checkout" type="time" defaultValue="17:45" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Lý do chỉnh sửa</Label>
            <Textarea
              id="reason"
              placeholder="Nhập lý do chỉnh sửa công..."
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="approve">Phê duyệt chỉnh sửa</Label>
              <p className="text-sm text-muted-foreground">
                Tự động phê duyệt sau khi lưu
              </p>
            </div>
            <Switch id="approve" defaultChecked />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Hủy
          </Button>
          <Button onClick={onClose}>Lưu thay đổi</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
