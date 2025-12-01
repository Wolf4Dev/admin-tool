import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save } from "lucide-react";

export default function SystemPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-balance text-3xl font-bold tracking-tight">
          Cấu hình hệ thống
        </h1>
        <p className="text-muted-foreground">Thiết lập và cấu hình hệ thống</p>
      </div>

      <Tabs defaultValue="lark" className="space-y-6">
        <TabsList>
          <TabsTrigger value="lark">Lark Integration</TabsTrigger>
          <TabsTrigger value="email">Email Server</TabsTrigger>
          <TabsTrigger value="general">Cài đặt chung</TabsTrigger>
        </TabsList>

        <TabsContent value="lark" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cấu hình Lark</CardTitle>
              <p className="text-sm text-muted-foreground">
                Kết nối với Lark để đồng bộ dữ liệu
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="lark-app-id">App ID</Label>
                <Input id="lark-app-id" placeholder="cli_xxxxxxxxxxxx" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lark-app-secret">App Secret</Label>
                <Input
                  id="lark-app-secret"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Lưu cấu hình
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cấu hình Email Server</CardTitle>
              <p className="text-sm text-muted-foreground">
                Thiết lập email để gửi thông báo
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="smtp-host">SMTP Host</Label>
                <Input id="smtp-host" placeholder="smtp.gmail.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="smtp-port">SMTP Port</Label>
                <Input id="smtp-port" type="number" placeholder="587" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="smtp-user">Username</Label>
                <Input id="smtp-user" placeholder="your-email@gmail.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="smtp-password">Password</Label>
                <Input
                  id="smtp-password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Lưu cấu hình
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cài đặt chung</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="company-name">Tên công ty</Label>
                <Input id="company-name" placeholder="Tên công ty của bạn" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timezone">Múi giờ</Label>
                <Input id="timezone" defaultValue="Asia/Ho_Chi_Minh" />
              </div>
              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Lưu cấu hình
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
