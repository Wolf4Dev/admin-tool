"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Plus, Search, Edit, CheckCircle, Circle, AlertCircle } from "lucide-react";
import { projects, tasks, projectTimeline } from "@/core/types/hr-mockdata";

interface Task {
  id: number;
  projectId: number;
  title: string;
  description: string;
  status: "completed" | "in_progress" | "todo";
  priority: "high" | "medium" | "low";
  assignee: string;
  dueDate: string;
  estimatedHours: number;
  actualHours: number;
  tags: string[];
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    assignee: "",
    dueDate: "",
    estimatedHours: 0,
    tags: ""
  });

  // Filter tasks based on project and search
  const filteredTasks = tasks.filter(task => {
    const matchesProject = task.projectId === selectedProject.id;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || task.status === statusFilter;
    return matchesProject && matchesSearch && matchesStatus;
  });

  // Get project timeline phases
  const projectPhases = projectTimeline.filter(phase => phase.projectId === selectedProject.id);

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

  const handleCreateTask = () => {
    // In a real app, this would save to a database
    console.log("Creating task:", newTask);
    setIsCreateTaskOpen(false);
    setNewTask({
      title: "",
      description: "",
      priority: "medium",
      assignee: "",
      dueDate: "",
      estimatedHours: 0,
      tags: ""
    });
  };

  const handleEditTask = () => {
    // In a real app, this would update in a database
    console.log("Editing task:", selectedTask);
    setIsEditTaskOpen(false);
  };

  const openEditTaskDialog = (task: Task) => {
    setSelectedTask(task);
    setIsEditTaskOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Dự án</h1>
          <p className="text-muted-foreground mt-1">
            Quản lý dự án và công việc của bạn
          </p>
        </div>
        <Dialog open={isCreateTaskOpen} onOpenChange={setIsCreateTaskOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Tạo công việc mới
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Tạo công việc mới</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Tiêu đề</Label>
                <Input
                  id="title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  placeholder="Nhập tiêu đề công việc"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Mô tả</Label>
                <Textarea
                  id="description"
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  placeholder="Nhập mô tả công việc"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="priority">Ưu tiên</Label>
                  <Select value={newTask.priority} onValueChange={(value) => setNewTask({ ...newTask, priority: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn ưu tiên" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">Cao</SelectItem>
                      <SelectItem value="medium">Trung bình</SelectItem>
                      <SelectItem value="low">Thấp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="estimatedHours">Thời gian dự kiến (giờ)</Label>
                  <Input
                    id="estimatedHours"
                    type="number"
                    value={newTask.estimatedHours}
                    onChange={(e) => setNewTask({ ...newTask, estimatedHours: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="assignee">Người thực hiện</Label>
                  <Input
                    id="assignee"
                    value={newTask.assignee}
                    onChange={(e) => setNewTask({ ...newTask, assignee: e.target.value })}
                    placeholder="Nhập tên người thực hiện"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dueDate">Hạn chót</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (cách nhau bằng dấu phẩy)</Label>
                <Input
                  id="tags"
                  value={newTask.tags}
                  onChange={(e) => setNewTask({ ...newTask, tags: e.target.value })}
                  placeholder="UI/UX, Frontend, Backend"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsCreateTaskOpen(false)}>
                Hủy
              </Button>
              <Button onClick={handleCreateTask}>
                Tạo công việc
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Project Selector */}
      <div className="flex gap-4 items-center">
        <Select value={selectedProject.id.toString()} onValueChange={(value) => setSelectedProject(projects.find(p => p.id === parseInt(value)) || projects[0])}>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Chọn dự án" />
          </SelectTrigger>
          <SelectContent>
            {projects.map((project) => (
              <SelectItem key={project.id} value={project.id.toString()}>
                {project.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Badge variant="outline" className={statusColors[selectedProject.status]}>
          {selectedProject.status}
        </Badge>
      </div>

      {/* Project Overview */}
      <Card>
        <CardHeader>
          <CardTitle>{selectedProject.name}</CardTitle>
          <p className="text-muted-foreground">{selectedProject.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Thời gian</span>
              </div>
              <p className="font-medium">{selectedProject.startDate} - {selectedProject.endDate}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>Vai trò</span>
              </div>
              <p className="font-medium">{selectedProject.role}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Tiến độ</span>
              </div>
              <div className="space-y-1">
                <p className="font-medium">{selectedProject.progress}%</p>
                <Progress value={selectedProject.progress} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="tasks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tasks">Công việc</TabsTrigger>
          <TabsTrigger value="timeline">Kế hoạch & Timeline</TabsTrigger>
        </TabsList>

        {/* Tasks Tab */}
        <TabsContent value="tasks" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Tìm kiếm công việc..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="todo">Cần làm</SelectItem>
                <SelectItem value="in_progress">Đang làm</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tasks List */}
          <div className="grid gap-4">
            {filteredTasks.map((task) => (
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
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openEditTaskDialog(task)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
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

      {/* Edit Task Dialog */}
      <Dialog open={isEditTaskOpen} onOpenChange={setIsEditTaskOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa công việc</DialogTitle>
          </DialogHeader>
          {selectedTask && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Tiêu đề</Label>
                <Input
                  id="edit-title"
                  defaultValue={selectedTask.title}
                  placeholder="Nhập tiêu đề công việc"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-description">Mô tả</Label>
                <Textarea
                  id="edit-description"
                  defaultValue={selectedTask.description}
                  placeholder="Nhập mô tả công việc"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-priority">Ưu tiên</Label>
                  <Select defaultValue={selectedTask.priority}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn ưu tiên" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">Cao</SelectItem>
                      <SelectItem value="medium">Trung bình</SelectItem>
                      <SelectItem value="low">Thấp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-status">Trạng thái</Label>
                  <Select defaultValue={selectedTask.status}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn trạng thái" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todo">Cần làm</SelectItem>
                      <SelectItem value="in_progress">Đang làm</SelectItem>
                      <SelectItem value="completed">Hoàn thành</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-assignee">Người thực hiện</Label>
                  <Input
                    id="edit-assignee"
                    defaultValue={selectedTask.assignee}
                    placeholder="Nhập tên người thực hiện"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edit-dueDate">Hạn chót</Label>
                  <Input
                    id="edit-dueDate"
                    type="date"
                    defaultValue={selectedTask.dueDate}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditTaskOpen(false)}>
              Hủy
            </Button>
            <Button onClick={handleEditTask}>
              Lưu thay đổi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}