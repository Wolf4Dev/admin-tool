"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, User, Users, DollarSign, ArrowLeft, CheckCircle, Circle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { projects, tasks, projectTimeline } from "@/core/types/hr-mockdata";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="space-y-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold">Không tìm thấy dự án</h1>
          <p className="text-muted-foreground mt-2">Dự án bạn đang tìm kiếm không tồn tại.</p>
          <Link href="/staff/projects">
            <Button className="mt-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại danh sách dự án
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const projectTasks = tasks.filter(task => task.projectId === projectId);
  const projectPhases = projectTimeline.filter(phase => phase.projectId === projectId);

  const completedTasks = projectTasks.filter(task => task.status === 'completed').length;
  const inProgressTasks = projectTasks.filter(task => task.status === 'in_progress').length;
  const todoTasks = projectTasks.filter(task => task.status === 'todo').length;

  const totalEstimatedHours = projectTasks.reduce((sum, task) => sum + task.estimatedHours, 0);
  const totalActualHours = projectTasks.reduce((sum, task) => sum + task.actualHours, 0);

  const statusColors = {
    active: "bg-green-100 text-green-800 border-green-200",
    planning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    completed: "bg-blue-100 text-blue-800 border-blue-200"
  };

  const priorityColors = {
    high: "bg-red-100 text-red-800 border-red-200",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    low: "bg-green-100 text-green-800 border-green-200"
  };

  const taskStatusColors = {
    completed: "bg-green-100 text-green-800",
    in_progress: "bg-blue-100 text-blue-800",
    todo: "bg-gray-100 text-gray-800"
  };

  const taskStatusIcons = {
    completed: <CheckCircle className="h-4 w-4" />,
    in_progress: <AlertCircle className="h-4 w-4" />,
    todo: <Circle className="h-4 w-4" />
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/staff/projects">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-balance">{project.name}</h1>
          <p className="text-muted-foreground mt-1">{project.description}</p>
        </div>
        <Badge variant="outline" className={statusColors[project.status]}>
          {project.status === 'active' ? 'Đang thực hiện' :
           project.status === 'planning' ? 'Lên kế hoạch' : 'Hoàn thành'}
        </Badge>
      </div>

      {/* Project Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-100">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Thời gian</p>
                <p className="font-semibold">{project.startDate}</p>
                <p className="text-sm text-muted-foreground">đến {project.endDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-100">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Đội nhóm</p>
                <p className="font-semibold">{project.team.length} thành viên</p>
                <p className="text-sm text-muted-foreground">Vai trò: {project.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-yellow-100">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ngân sách</p>
                <p className="font-semibold">{(project.spent / 1000000).toFixed(0)}M/{(project.budget / 1000000).toFixed(0)}M đ</p>
                <p className="text-sm text-muted-foreground">{Math.round((project.spent / project.budget) * 100)}% đã sử dụng</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-100">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Thời gian làm việc</p>
                <p className="font-semibold">{totalActualHours}/{totalEstimatedHours}h</p>
                <p className="text-sm text-muted-foreground">{Math.round((totalActualHours / totalEstimatedHours) * 100)}% đã sử dụng</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Tổng quan tiến độ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tiến độ tổng thể</span>
                <span className="text-sm font-medium">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-3" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{completedTasks}</p>
                <p className="text-sm text-muted-foreground">Hoàn thành</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{inProgressTasks}</p>
                <p className="text-sm text-muted-foreground">Đang làm</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-600">{todoTasks}</p>
                <p className="text-sm text-muted-foreground">Cần làm</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Members */}
      <Card>
        <CardHeader>
          <CardTitle>Thành viên đội nhóm</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.team.map((member, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{member}</p>
                  <p className="text-sm text-muted-foreground">Thành viên</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Content */}
      <Tabs defaultValue="tasks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tasks">Tất cả công việc</TabsTrigger>
          <TabsTrigger value="timeline">Timeline chi tiết</TabsTrigger>
        </TabsList>

        {/* Tasks Tab */}
        <TabsContent value="tasks" className="space-y-4">
          <div className="grid gap-4">
            {projectTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        {taskStatusIcons[task.status]}
                        <h3 className="font-semibold text-lg">{task.title}</h3>
                        <Badge variant="outline" className={taskStatusColors[task.status]}>
                          {task.status === 'todo' ? 'Cần làm' : task.status === 'in_progress' ? 'Đang làm' : 'Hoàn thành'}
                        </Badge>
                        <Badge variant="outline" className={priorityColors[task.priority]}>
                          {task.priority === 'high' ? 'Cao' : task.priority === 'medium' ? 'Trung bình' : 'Thấp'}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{task.description}</p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{task.assignee}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{task.dueDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{task.actualHours}/{task.estimatedHours}h</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {task.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-4">
          <div className="space-y-6">
            {projectPhases.map((phase, index) => (
              <Card key={phase.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{phase.phase}</CardTitle>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">
                        {phase.startDate} - {phase.endDate}
                      </span>
                      <Badge variant="outline" className={
                        phase.status === 'completed' ? 'bg-green-100 text-green-800' :
                        phase.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }>
                        {phase.status === 'completed' ? 'Hoàn thành' :
                         phase.status === 'in_progress' ? 'Đang thực hiện' : 'Chưa bắt đầu'}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Tiến độ</span>
                      <span>{phase.progress}%</span>
                    </div>
                    <Progress value={phase.progress} className="h-2" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium">Công việc trong giai đoạn này:</h4>
                    <div className="grid gap-2">
                      {phase.tasks.map((task) => (
                        <div key={task.id} className="flex items-center gap-3 p-3 rounded-lg border">
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => {
                              // In a real app, this would update the task status
                              console.log("Toggle task:", task.id);
                            }}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                            {task.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}