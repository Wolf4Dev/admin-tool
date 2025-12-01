import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Calendar, DollarSign, Users, TrendingUp, Edit } from "lucide-react";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = {
    id: params.id,
    name: "Website Ecommerce",
    client: "Công ty ABC",
    status: "in-progress",
    startDate: "01/05/2024",
    deadline: "31/08/2024",
    budget: 150000000,
    revenue: 150000000,
    spent: 97500000,
    progress: 65,
    description:
      "Phát triển website thương mại điện tử hoàn chỉnh với tính năng thanh toán, quản lý kho, và hệ thống marketing tự động.",
  };

  const timeline = [
    {
      phase: "Nghiên cứu & Lên kế hoạch",
      status: "completed",
      duration: "2 tuần",
    },
    { phase: "Thiết kế UI/UX", status: "completed", duration: "3 tuần" },
    { phase: "Phát triển Frontend", status: "in-progress", duration: "4 tuần" },
    { phase: "Phát triển Backend", status: "in-progress", duration: "4 tuần" },
    { phase: "Testing & QA", status: "pending", duration: "2 tuần" },
    { phase: "Deploy & Launch", status: "pending", duration: "1 tuần" },
  ];

  const team = [
    {
      name: "Nguyễn Văn A",
      role: "Project Manager",
      avatar: "/male-avatar.jpg",
    },
    {
      name: "Trần Thị B",
      role: "UI/UX Designer",
      avatar: "/female-avatar.jpg",
    },
    {
      name: "Lê Văn C",
      role: "Backend Developer",
      avatar: "/male-avatar-2.jpg",
    },
    {
      name: "Phạm Thị D",
      role: "Frontend Developer",
      avatar: "/female-avatar-2.jpg",
    },
    { name: "Hoàng Văn E", role: "QA Engineer", avatar: "/male-avatar-3.jpg" },
  ];

  const milestones = [
    {
      name: "Milestone 1: Setup & Design",
      date: "15/05/2024",
      amount: "₫30,000,000",
      status: "paid",
    },
    {
      name: "Milestone 2: Development Phase 1",
      date: "15/06/2024",
      amount: "₫45,000,000",
      status: "paid",
    },
    {
      name: "Milestone 3: Development Phase 2",
      date: "15/07/2024",
      amount: "₫45,000,000",
      status: "pending",
    },
    {
      name: "Milestone 4: Launch",
      date: "31/08/2024",
      amount: "₫30,000,000",
      status: "pending",
    },
  ];

  const expenses = [
    { category: "Nhân sự", amount: 75000000 },
    { category: "Công cụ & Phần mềm", amount: 15000000 },
    { category: "Server & Hosting", amount: 5000000 },
    { category: "Khác", amount: 2500000 },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default">Hoàn thành</Badge>;
      case "in-progress":
        return (
          <Badge className="bg-accent text-white hover:bg-accent/90">
            Đang thực hiện
          </Badge>
        );
      case "pending":
        return <Badge variant="secondary">Chưa bắt đầu</Badge>;
      case "paid":
        return <Badge variant="default">Đã thanh toán</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Project Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <p className="text-lg text-muted-foreground">
                  {project.client}
                </p>
                <Badge className="mt-2">
                  {project.status === "in-progress"
                    ? "Đang thực hiện"
                    : "Hoàn thành"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Bắt đầu: {project.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Deadline: {project.deadline}</span>
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

      {/* Overview Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ngân sách</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(project.budget)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chi phí</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {formatCurrency(project.spent)}
            </div>
            <p className="text-xs text-muted-foreground">
              {((project.spent / project.budget) * 100).toFixed(0)}% ngân sách
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Doanh thu</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {formatCurrency(project.revenue)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiến độ</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{project.progress}%</div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Timeline dự án</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {timeline.map((phase, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      phase.status === "completed"
                        ? "bg-primary"
                        : phase.status === "in-progress"
                        ? "bg-accent"
                        : "bg-secondary"
                    }`}
                  >
                    <span className="text-xs font-medium text-white">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{phase.phase}</p>
                    <p className="text-sm text-muted-foreground">
                      {phase.duration}
                    </p>
                  </div>
                  {getStatusBadge(phase.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card>
          <CardHeader>
            <CardTitle>Team tham gia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {team.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Billing Milestones */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Milestone</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Milestone</TableHead>
                <TableHead>Ngày đến hạn</TableHead>
                <TableHead>Số tiền</TableHead>
                <TableHead>Trạng thái</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {milestones.map((milestone, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {milestone.name}
                  </TableCell>
                  <TableCell>{milestone.date}</TableCell>
                  <TableCell className="font-medium">
                    {milestone.amount}
                  </TableCell>
                  <TableCell>{getStatusBadge(milestone.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Expenses */}
      <Card>
        <CardHeader>
          <CardTitle>Chi phí dự án</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hạng mục</TableHead>
                <TableHead>Số tiền</TableHead>
                <TableHead>% Ngân sách</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.map((expense, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {expense.category}
                  </TableCell>
                  <TableCell>{formatCurrency(expense.amount)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-destructive"
                          style={{
                            width: `${
                              (expense.amount / project.budget) * 100
                            }%`,
                          }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {((expense.amount / project.budget) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
