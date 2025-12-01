"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Briefcase, Users, Eye, CalendarIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const jobDescriptions = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "IT",
    level: "Senior",
    status: "open",
    applicants: 12,
  },
  {
    id: "2",
    title: "HR Executive",
    department: "HR",
    level: "Mid-level",
    status: "open",
    applicants: 8,
  },
  {
    id: "3",
    title: "Backend Developer",
    department: "IT",
    level: "Junior",
    status: "closed",
    applicants: 25,
  },
  {
    id: "4",
    title: "UI/UX Designer",
    department: "Design",
    level: "Mid-level",
    status: "open",
    applicants: 15,
  },
];

const candidatesByStage = {
  applied: [
    {
      id: "1",
      name: "Nguyễn Thị E",
      position: "Senior Frontend Developer",
      avatar: "",
    },
    { id: "2", name: "Trần Văn F", position: "Backend Developer", avatar: "" },
    { id: "3", name: "Lê Thị G", position: "UI/UX Designer", avatar: "" },
  ],
  screening: [
    { id: "4", name: "Phạm Văn H", position: "HR Executive", avatar: "" },
    {
      id: "5",
      name: "Hoàng Thị I",
      position: "Senior Frontend Developer",
      avatar: "",
    },
  ],
  interview: [
    {
      id: "6",
      name: "Nguyễn Văn A",
      position: "Senior Frontend Developer",
      avatar: "",
    },
    { id: "7", name: "Trần Thị B", position: "HR Executive", avatar: "" },
  ],
  offer: [
    { id: "8", name: "Lê Văn C", position: "Backend Developer", avatar: "" },
  ],
  hired: [
    { id: "9", name: "Phạm Thị D", position: "UI/UX Designer", avatar: "" },
  ],
};

const interviewSchedule = [
  {
    id: "1",
    candidate: "Nguyễn Văn A",
    position: "Senior Frontend Developer",
    date: "20/11/2025",
    time: "09:00 AM",
    interviewer: "Manager IT",
    type: "Technical",
  },
  {
    id: "2",
    candidate: "Trần Thị B",
    position: "HR Executive",
    date: "20/11/2025",
    time: "10:30 AM",
    interviewer: "HR Manager",
    type: "Cultural Fit",
  },
  {
    id: "3",
    candidate: "Lê Văn C",
    position: "Backend Developer",
    date: "21/11/2025",
    time: "02:00 PM",
    interviewer: "Tech Lead",
    type: "Technical",
  },
];

export default function RecruitmentPage() {
  const [showOfferModal, setShowOfferModal] = useState(false);

  return (
    <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-foreground">
                Tuyển dụng
              </h1>
              <p className="text-muted-foreground mt-1">
                Quản lý JD, ứng viên và lịch phỏng vấn
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Tạo JD mới
            </Button>
          </div>

          <Tabs defaultValue="pipeline" className="space-y-6">
            <TabsList>
              <TabsTrigger value="pipeline">Candidate Pipeline</TabsTrigger>
              <TabsTrigger value="jd">Job Descriptions</TabsTrigger>
              <TabsTrigger value="schedule">Lịch phỏng vấn</TabsTrigger>
            </TabsList>

            <TabsContent value="pipeline" className="space-y-4">
              <div className="grid grid-cols-5 gap-4">
                {Object.entries(candidatesByStage).map(
                  ([stage, candidates]) => {
                    const stageLabels = {
                      applied: "Applied",
                      screening: "Screening",
                      interview: "Interview",
                      offer: "Offer",
                      hired: "Hired",
                    };
                    const stageBadgeVariants = {
                      applied: "secondary",
                      screening: "secondary",
                      interview: "default",
                      offer: "default",
                      hired: "default",
                    };

                    return (
                      <Card key={stage} className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">
                            {stageLabels[stage as keyof typeof stageLabels]}
                          </h3>
                          <Badge
                            variant={
                              stageBadgeVariants[
                                stage as keyof typeof stageBadgeVariants
                              ] as "default" | "secondary" | "outline" | "destructive"
                            }
                          >
                            {candidates.length}
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          {candidates.map((candidate) => (
                            <Card
                              key={candidate.id}
                              className="p-3 cursor-move hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-start gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                    {candidate.name.split(" ").pop()?.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">
                                    {candidate.name}
                                  </p>
                                  <p className="text-xs text-muted-foreground truncate">
                                    {candidate.position}
                                  </p>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </Card>
                    );
                  }
                )}
              </div>
            </TabsContent>

            <TabsContent value="jd" className="space-y-4">
              <Card className="p-6">
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Vị trí tuyển dụng</TableHead>
                        <TableHead>Phòng ban</TableHead>
                        <TableHead>Cấp bậc</TableHead>
                        <TableHead>Số ứng viên</TableHead>
                        <TableHead>Trạng thái</TableHead>
                        <TableHead className="text-right">Thao tác</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {jobDescriptions.map((job) => (
                        <TableRow key={job.id}>
                          <TableCell className="font-medium">
                            {job.title}
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">{job.department}</Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {job.level}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span>{job.applicants}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                job.status === "open" ? "default" : "outline"
                              }
                            >
                              {job.status === "open" ? "Đang tuyển" : "Đã đóng"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold">
                      Lịch phỏng vấn sắp tới
                    </h2>
                  </div>
                  <Button
                    variant="outline"
                    className="gap-2"
                    onClick={() => setShowOfferModal(true)}
                  >
                    <Briefcase className="h-4 w-4" />
                    Tạo offer letter
                  </Button>
                </div>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ứng viên</TableHead>
                        <TableHead>Vị trí</TableHead>
                        <TableHead>Ngày</TableHead>
                        <TableHead>Giờ</TableHead>
                        <TableHead>Người phỏng vấn</TableHead>
                        <TableHead>Loại phỏng vấn</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {interviewSchedule.map((interview) => (
                        <TableRow key={interview.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                  {interview.candidate
                                    .split(" ")
                                    .pop()
                                    ?.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="font-medium">
                                {interview.candidate}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {interview.position}
                          </TableCell>
                          <TableCell>{interview.date}</TableCell>
                          <TableCell className="font-mono">
                            {interview.time}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {interview.interviewer}
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">{interview.type}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        {/* Modal removed for now - component doesn't exist */}
        </div>
  );
}
