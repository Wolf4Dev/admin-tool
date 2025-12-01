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