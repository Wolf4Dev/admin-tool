"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  Clock,
  DollarSign,
  UserPlus,
  LogIn,
  UserCircle,
  Briefcase,
  TrendingUp,
  BarChart3,
  FileText,
  Settings,
  Shield,
  ChevronLeft,
  ChevronRight,
  Building2,
  User,
  ClipboardList,
  Wallet,
  LogOut
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

const adminMenuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    title: "Nhân viên",
    icon: Users,
    href: "/admin/employees",
  },
  {
    title: "Chấm công",
    icon: Clock,
    href: "/admin/attendance",
  },
  {
    title: "Bảng lương",
    icon: DollarSign,
    href: "/admin/payroll",
  },
  {
    title: "Tuyển dụng",
    icon: UserPlus,
    href: "/admin/recruitment",
  },
  {
    title: "Onboarding / Offboarding",
    icon: LogIn,
    href: "/admin/onboarding",
  },
  {
    title: "Khách hàng",
    icon: UserCircle,
    href: "/admin/customers",
  },
  {
    title: "Dự án",
    icon: Briefcase,
    href: "/admin/projects",
  },
  {
    title: "Thu – Chi",
    icon: TrendingUp,
    href: "/admin/finance",
  },
  {
    title: "Doanh thu & Báo cáo",
    icon: BarChart3,
    href: "/admin/reports",
  },
  {
    title: "Documents",
    icon: FileText,
    href: "/admin/documents",
  },
  {
    title: "Cấu hình hệ thống",
    icon: Settings,
    href: "/admin/system",
  },
  {
    title: "Quản lý tài khoản",
    icon: Shield,
    href: "/admin/accounts",
  },
]

const hrMenuItems = [
  {
    title: 'Dashboard',
    href: '/hr',
    icon: LayoutDashboard,
  },
  {
    title: 'Nhân viên',
    href: '/hr/nhan-vien',
    icon: Users,
  },
  {
    title: 'Chấm công',
    href: '/hr/cham-cong',
    icon: Clock,
  },
  {
    title: 'Bảng lương',
    href: '/hr/bang-luong',
    icon: DollarSign,
  },
  {
    title: 'Tuyển dụng',
    href: '/hr/tuyen-dung',
    icon: Briefcase,
  },
  {
    title: 'Onboarding / Offboarding',
    href: '/hr/onboarding',
    icon: UserPlus,
  },
  {
    title: 'Documents',
    href: '/hr/documents',
    icon: FileText,
  },
]

const staffMenuItems = [
  {
    title: 'Dashboard',
    href: '/staff',
    icon: LayoutDashboard,
  },
  {
    title: 'Hồ sơ của tôi',
    href: '/staff/profile',
    icon: User,
  },
  {
    title: 'Chấm công của tôi',
    href: '/staff/attendance',
    icon: Clock,
  },
  {
    title: 'Đăng ký OT',
    href: '/staff/overtime',
    icon: ClipboardList,
  },
  {
    title: 'Lương của tôi',
    href: '/staff/salary',
    icon: Wallet,
  },
  {
    title: 'Documents',
    href: '/staff/documents',
    icon: FileText,
  },
]

interface SidebarProps {
  role: 'admin' | 'hr' | 'staff';
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/signin')
  }

  const getMenuItems = () => {
    switch (role) {
      case 'admin':
        return adminMenuItems
      case 'hr':
        return hrMenuItems
      case 'staff':
        return staffMenuItems
      default:
        return []
    }
  }

  const menuItems = getMenuItems()

  if (role === 'admin') {
    return (
      <div
        className={cn(
          "relative flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
                <span className="text-sm font-bold text-sidebar-primary-foreground">AD</span>
              </div>
              <span className="font-semibold text-sidebar-foreground">Admin Panel</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span className="truncate">{item.title}</span>}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4 space-y-3">
          <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sidebar-accent">
              <span className="text-sm font-medium text-sidebar-accent-foreground">AD</span>
            </div>
            {!collapsed && (
              <div className="flex-1 truncate">
                <p className="text-sm font-medium text-sidebar-foreground">Admin User</p>
                <p className="text-xs text-sidebar-muted-foreground">admin@company.com</p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "default"}
            onClick={handleLogout}
            className={cn(
              "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              collapsed && "justify-center"
            )}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Đăng xuất</span>}
          </Button>
        </div>
      </div>
    )
  }

  if (role === 'hr') {
    return (
      <div
        className={cn(
          "relative flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-sidebar-foreground">HR System</span>
                <span className="text-xs text-muted-foreground">Management</span>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span className="truncate">{item.title}</span>}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4 space-y-3">
          <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sidebar-accent">
              <span className="text-sm font-medium text-sidebar-accent-foreground">HR</span>
            </div>
            {!collapsed && (
              <div className="flex-1 truncate">
                <p className="text-sm font-medium text-sidebar-foreground">HR User</p>
                <p className="text-xs text-sidebar-muted-foreground">hr@company.com</p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "default"}
            onClick={handleLogout}
            className={cn(
              "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              collapsed && "justify-center"
            )}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Đăng xuất</span>}
          </Button>
        </div>
      </div>
    )
  }

  if (role === 'staff') {
    return (
      <div
        className={cn(
          "relative flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-4">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-semibold text-primary-foreground">HR</span>
              </div>
              <span className="text-lg font-semibold text-sidebar-foreground">Staff Portal</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto p-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span className="truncate">{item.title}</span>}
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4 space-y-3">
          <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sidebar-accent">
              <span className="text-sm font-medium text-sidebar-accent-foreground">ST</span>
            </div>
            {!collapsed && (
              <div className="flex-1 truncate">
                <p className="text-sm font-medium text-sidebar-foreground">Staff User</p>
                <p className="text-xs text-sidebar-muted-foreground">staff@company.com</p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size={collapsed ? "icon" : "default"}
            onClick={handleLogout}
            className={cn(
              "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              collapsed && "justify-center"
            )}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Đăng xuất</span>}
          </Button>
        </div>
      </div>
    )
  }

  return null
}