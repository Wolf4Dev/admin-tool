// Mock data for HR management system

export const attendanceStats = {
  total: 245,
  onTime: 220,
  late: 15,
  absent: 10,
  attendanceRate: 89.8
};

export const todayAttendance = [
  {
    id: 1,
    employeeName: "Nguyễn Văn A",
    department: "Backend",
    checkIn: "08:45",
    checkOut: "17:30",
    workHours: 8.75,
    status: "present"
  },
  {
    id: 2,
    employeeName: "Trần Thị B",
    department: "Frontend",
    checkIn: "09:15",
    checkOut: "17:45",
    workHours: 8.5,
    status: "late"
  },
  {
    id: 3,
    employeeName: "Lê Văn C",
    department: "QA",
    checkIn: "08:30",
    checkOut: "17:00",
    workHours: 8.5,
    status: "present"
  },
  {
    id: 4,
    employeeName: "Phạm Thị D",
    department: "AI",
    checkIn: "-",
    checkOut: "-",
    workHours: 0,
    status: "absent"
  },
  {
    id: 5,
    employeeName: "Hoàng Văn E",
    department: "BD",
    checkIn: "08:20",
    checkOut: "17:30",
    workHours: 9.17,
    status: "present"
  }
];

export const salaryStats = {
  totalSalary: 2450000000,
  totalExpense: 2450000000,
  totalIncome: 2800000000,
  totalDeduction: 350000000,
  deductionLabel: "Thuế & BHXH",
  averageSalary: 16333333,
  highestSalary: 45000000,
  lowestSalary: 8000000,
  totalEmployees: 150,
  paid: 120,
  pending: 30
};

export const salaryDetails = [
  {
    id: 1,
    employeeId: "EMP001",
    employeeName: "Nguyễn Văn A",
    department: "Backend",
    baseSalary: 25000000,
    bonus: 5000000,
    allowance: 3000000,
    deduction: 2000000,
    netSalary: 28000000,
    month: "12/2024"
  },
  {
    id: 2,
    employeeId: "EMP002",
    employeeName: "Trần Thị B",
    department: "Frontend",
    baseSalary: 22000000,
    bonus: 3000000,
    allowance: 2500000,
    deduction: 1500000,
    netSalary: 23500000,
    month: "12/2024"
  },
  {
    id: 3,
    employeeId: "EMP003",
    employeeName: "Lê Văn C",
    department: "QA",
    baseSalary: 18000000,
    bonus: 2000000,
    allowance: 2000000,
    deduction: 1200000,
    netSalary: 18800000,
    month: "12/2024"
  },
  {
    id: 4,
    employeeId: "EMP004",
    employeeName: "Phạm Thị D",
    department: "AI",
    baseSalary: 30000000,
    bonus: 6000000,
    allowance: 4000000,
    deduction: 2500000,
    netSalary: 33500000,
    month: "12/2024"
  },
  {
    id: 5,
    employeeId: "EMP005",
    employeeName: "Hoàng Văn E",
    department: "BD",
    baseSalary: 20000000,
    bonus: 4000000,
    allowance: 2500000,
    deduction: 1800000,
    netSalary: 22700000,
    month: "12/2024"
  }
];

export const contractStats = {
  totalContracts: 145,
  activeContracts: 132,
  expiringThisMonth: 8,
  newContractsThisMonth: 5,
  totalValue: 2500000000,
  active: 132,
  completed: 10,
  pending: 3
};

export const contracts = [
  {
    id: 1,
    contractCode: "HD-2024-001",
    client: "Công ty ABC",
    project: "Hệ thống quản lý nhân sự",
    value: 500000000,
    startDate: "01/01/2024",
    endDate: "31/12/2024",
    status: "active"
  },
  {
    id: 2,
    contractCode: "HD-2024-002",
    client: "Công ty XYZ",
    project: "Website thương mại điện tử",
    value: 350000000,
    startDate: "15/06/2024",
    endDate: "15/12/2024",
    status: "active"
  },
  {
    id: 3,
    contractCode: "HD-2024-003",
    client: "Công ty DEF",
    project: "Ứng dụng di động",
    value: 280000000,
    startDate: "01/03/2024",
    endDate: "31/08/2024",
    status: "completed"
  },
  {
    id: 4,
    contractCode: "HD-2024-004",
    client: "Công ty GHI",
    project: "Hệ thống ERP",
    value: 750000000,
    startDate: "01/09/2024",
    endDate: "28/02/2025",
    status: "pending"
  }
];

export const employees = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    email: "nguyenvana@company.com",
    phone: "0901234567",
    department: "Backend",
    position: "Senior Developer",
    status: "active",
    joinDate: "01/01/2023",
    salary: 25000000
  },
  {
    id: 2,
    name: "Trần Thị B",
    email: "tranthib@company.com",
    phone: "0909876543",
    department: "Frontend",
    position: "Developer",
    status: "active",
    joinDate: "15/06/2023",
    salary: 22000000
  }
];

export const performanceStats = {
  averageRating: 4.2,
  totalReviews: 145,
  outstandingEmployees: 12,
  needsImprovement: 8,
  averageScore: 4.2,
  outOf: 5,
  excellent: 12,
  good: 25,
  completed: 108,
  total: 145
};

export const performanceReviews = [
  {
    id: 1,
    employeeId: "EMP001",
    employeeName: "Nguyễn Văn A",
    department: "Backend",
    rating: 4.5,
    reviewPeriod: "Q4 2024",
    period: "Q4 2024",
    score: 4.5,
    reviewer: "Team Lead",
    strengths: ["Technical skills", "Team collaboration"],
    improvements: ["Documentation", "Mentoring"],
    status: "completed"
  },
  {
    id: 2,
    employeeId: "EMP002",
    employeeName: "Trần Thị B",
    department: "Frontend",
    rating: 3.8,
    reviewPeriod: "Q4 2024",
    period: "Q4 2024",
    score: 3.8,
    reviewer: "Team Lead",
    strengths: ["UI/UX design", "Code quality"],
    improvements: ["Time management", "Communication"],
    status: "in_progress"
  }
];

export const monthlyRevenueExpense = {
  revenue: [120000000, 135000000, 125000000, 140000000, 130000000, 145000000],
  expense: [80000000, 85000000, 82000000, 90000000, 87000000, 92000000],
  labels: ["Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
};

export const revenueExpenseData = [
  {
    month: "Tháng 7",
    revenue: 120000000,
    expense: 80000000
  },
  {
    month: "Tháng 8",
    revenue: 135000000,
    expense: 85000000
  },
  {
    month: "Tháng 9",
    revenue: 125000000,
    expense: 82000000
  },
  {
    month: "Tháng 10",
    revenue: 140000000,
    expense: 90000000
  },
  {
    month: "Tháng 11",
    revenue: 130000000,
    expense: 87000000
  },
  {
    month: "Tháng 12",
    revenue: 145000000,
    expense: 92000000
  }
];

export const revenueExpenseStats = {
  totalRevenue: 795000000,
  totalExpense: 516000000,
  profit: 279000000,
  profitStatus: "positive",
  profitMargin: 35.1,
  targetMargin: 30.0,
  revenueGrowth: 12.5,
  expenseGrowth: 8.3
};

export const dashboardStats = {
  totalEmployees: 150,
  activeProjects: 8,
  newHires: 12,
  attendanceRate: 95.2,
  activeEmployees: 142,
  activePercentage: 94.7,
  monthlyRevenue: 2450000000,
  revenueGrowth: 12.5,
  monthlyExpense: 1850000000,
  expensePercentage: 8.3
};

export const departmentDistribution = [
  {
    name: "Backend",
    value: 35,
    percentage: 23.3
  },
  {
    name: "Frontend",
    value: 30,
    percentage: 20.0
  },
  {
    name: "QA",
    value: 25,
    percentage: 16.7
  },
  {
    name: "AI",
    value: 20,
    percentage: 13.3
  },
  {
    name: "BD",
    value: 40,
    percentage: 26.7
  }
];

export const recentActivities = [
  {
    id: 1,
    title: "Nhân viên mới",
    description: "Nguyễn Văn F đã gia nhập công ty",
    subDescription: "Phòng ban: Backend",
    timestamp: "2 giờ trước"
  },
  {
    id: 2,
    title: "Đơn nghỉ phép",
    description: "Trần Thị G xin nghỉ phép 2 ngày",
    subDescription: "Từ 15/12/2024 đến 16/12/2024",
    timestamp: "4 giờ trước"
  },
  {
    id: 3,
    title: "Đánh giá hiệu suất",
    description: "Hoàn thành đánh giá hiệu suất Q4",
    subDescription: "15 nhân viên đã được đánh giá",
    timestamp: "1 ngày trước"
  }
];

export const projects = [
  {
    id: 1,
    name: "Website Redesign Project",
    description: "Thiết kế lại website công ty với giao diện hiện đại",
    status: "active" as const,
    progress: 75,
    startDate: "01/10/2024",
    endDate: "31/12/2024",
    role: "Frontend Developer",
    team: ["Nguyễn Văn A", "Trần Thị B", "Lê Văn C"],
    priority: "high" as const,
    budget: 150000000,
    spent: 112500000
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Phát triển ứng dụng di động cho khách hàng",
    status: "active" as const,
    progress: 45,
    startDate: "15/10/2024",
    endDate: "15/02/2025",
    role: "UI/UX Designer",
    team: ["Phạm Thị D", "Hoàng Văn E", "Nguyễn Văn F"],
    priority: "medium" as const,
    budget: 200000000,
    spent: 90000000
  },
  {
    id: 3,
    name: "Internal HR System",
    description: "Xây dựng hệ thống quản lý nhân sự nội bộ",
    status: "planning" as const,
    progress: 30,
    startDate: "01/12/2024",
    endDate: "31/03/2025",
    role: "Project Member",
    team: ["Lê Văn G", "Trần Thị H", "Phạm Văn I"],
    priority: "low" as const,
    budget: 100000000,
    spent: 30000000
  }
];

export const tasks = [
  {
    id: 1,
    projectId: 1,
    title: "Thiết kế trang chủ",
    description: "Thiết kế lại trang chủ với giao diện mới",
    status: "completed" as const,
    priority: "high" as const,
    assignee: "Nguyễn Văn A",
    dueDate: "15/11/2024",
    estimatedHours: 40,
    actualHours: 35,
    tags: ["UI/UX", "Frontend"]
  },
  {
    id: 2,
    projectId: 1,
    title: "Phát triển component header",
    description: "Xây dựng component header responsive",
    status: "in_progress" as const,
    priority: "high" as const,
    assignee: "Trần Thị B",
    dueDate: "30/11/2024",
    estimatedHours: 24,
    actualHours: 18,
    tags: ["Frontend", "React"]
  },
  {
    id: 3,
    projectId: 1,
    title: "Tối ưu performance",
    description: "Tối ưu tốc độ tải trang",
    status: "todo" as const,
    priority: "medium" as const,
    assignee: "Lê Văn C",
    dueDate: "15/12/2024",
    estimatedHours: 32,
    actualHours: 0,
    tags: ["Performance", "Optimization"]
  },
  {
    id: 4,
    projectId: 2,
    title: "Thiết kế màn hình đăng nhập",
    description: "Thiết kế UI cho màn hình đăng nhập",
    status: "completed" as const,
    priority: "high" as const,
    assignee: "Phạm Thị D",
    dueDate: "01/11/2024",
    estimatedHours: 16,
    actualHours: 14,
    tags: ["UI/UX", "Mobile"]
  },
  {
    id: 5,
    projectId: 2,
    title: "Phát triển authentication flow",
    description: "Xây dựng flow xác thực người dùng",
    status: "in_progress" as const,
    priority: "high" as const,
    assignee: "Hoàng Văn E",
    dueDate: "15/11/2024",
    estimatedHours: 28,
    actualHours: 20,
    tags: ["Backend", "Authentication"]
  },
  {
    id: 6,
    projectId: 2,
    title: "Tích hợp push notification",
    description: "Tích hợp hệ thống thông báo đẩy",
    status: "todo" as const,
    priority: "medium" as const,
    assignee: "Nguyễn Văn F",
    dueDate: "30/11/2024",
    estimatedHours: 20,
    actualHours: 0,
    tags: ["Mobile", "Notification"]
  },
  {
    id: 7,
    projectId: 3,
    title: "Phân tích yêu cầu",
    description: "Thu thập và phân tích yêu cầu hệ thống",
    status: "completed" as const,
    priority: "high" as const,
    assignee: "Lê Văn G",
    dueDate: "15/11/2024",
    estimatedHours: 24,
    actualHours: 22,
    tags: ["Analysis", "Planning"]
  },
  {
    id: 8,
    projectId: 3,
    title: "Thiết kế database schema",
    description: "Thiết kế cấu trúc database cho hệ thống",
    status: "in_progress" as const,
    priority: "high" as const,
    assignee: "Trần Thị H",
    dueDate: "30/11/2024",
    estimatedHours: 32,
    actualHours: 15,
    tags: ["Database", "Backend"]
  }
];

export const projectTimeline = [
  {
    id: 1,
    projectId: 1,
    phase: "Planning",
    startDate: "01/10/2024",
    endDate: "15/10/2024",
    status: "completed" as const,
    progress: 100,
    tasks: [
      { id: 1, name: "Thu thập yêu cầu", completed: true },
      { id: 2, name: "Phân tích kỹ thuật", completed: true },
      { id: 3, name: "Lên kế hoạch", completed: true }
    ]
  },
  {
    id: 2,
    projectId: 1,
    phase: "Design",
    startDate: "16/10/2024",
    endDate: "31/10/2024",
    status: "completed" as const,
    progress: 100,
    tasks: [
      { id: 4, name: "Thiết kế UI/UX", completed: true },
      { id: 5, name: "Prototype", completed: true },
      { id: 6, name: "Review design", completed: true }
    ]
  },
  {
    id: 3,
    projectId: 1,
    phase: "Development",
    startDate: "01/11/2024",
    endDate: "15/12/2024",
    status: "in_progress" as const,
    progress: 60,
    tasks: [
      { id: 7, name: "Thiết kế trang chủ", completed: true },
      { id: 8, name: "Phát triển component header", completed: false },
      { id: 9, name: "Tối ưu performance", completed: false },
      { id: 10, name: "Testing", completed: false }
    ]
  },
  {
    id: 4,
    projectId: 1,
    phase: "Testing & Deployment",
    startDate: "16/12/2024",
    endDate: "31/12/2024",
    status: "pending" as const,
    progress: 0,
    tasks: [
      { id: 11, name: "Unit testing", completed: false },
      { id: 12, name: "Integration testing", completed: false },
      { id: 13, name: "UAT", completed: false },
      { id: 14, name: "Deployment", completed: false }
    ]
  }
];