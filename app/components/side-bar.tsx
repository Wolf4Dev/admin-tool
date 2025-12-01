"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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
  TrendingDown,
  BarChart3,
  FileText,
  Settings,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
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
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

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
              <span className="text-sm font-bold text-sidebar-primary-foreground">
                HR
              </span>
            </div>
            <span className="font-semibold text-sidebar-foreground">
              Admin Panel
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

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
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-sidebar-border p-4">
        <div
          className={cn(
            "flex items-center gap-3",
            collapsed && "justify-center"
          )}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sidebar-accent">
            <span className="text-sm font-medium text-sidebar-accent-foreground">
              AD
            </span>
          </div>
          {!collapsed && (
            <div className="flex-1 truncate">
              <p className="text-sm font-medium text-sidebar-foreground">
                Admin User
              </p>
              <p className="text-xs text-sidebar-muted-foreground">
                admin@company.com
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
