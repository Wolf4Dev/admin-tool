"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Sidebar } from './Sidebar';
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UnifiedLayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'hr' | 'staff';
  showHeader?: boolean;
}

export function UnifiedLayout({ children, role, showHeader = true }: UnifiedLayoutProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && (!user || user.role !== role)) {
      router.push('/signin');
    }
  }, [user, isLoading, router, role]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || user.role !== role) {
    return null;
  }

  const getHeaderContent = () => {
    switch (role) {
      case 'admin':
        return (
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-card px-6">
            <div className="flex flex-1 items-center gap-4">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="search" placeholder="Tìm kiếm..." className="pl-10" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
              </Button>
            </div>
          </header>
        );
      case 'hr':
      case 'staff':
        return null; // HR and Staff layouts don't have headers in the current implementation
      default:
        return null;
    }
  };

  const getLayoutClass = () => {
    switch (role) {
      case 'admin':
        return "flex h-screen overflow-hidden";
      case 'hr':
      case 'staff':
        return "flex h-screen bg-gray-50";
      default:
        return "flex h-screen";
    }
  };

  const getMainClass = () => {
    switch (role) {
      case 'admin':
        return "flex-1 flex-col overflow-hidden";
      case 'hr':
      case 'staff':
        return "flex-1 flex flex-col overflow-hidden";
      default:
        return "flex-1 flex-col overflow-hidden";
    }
  };

  const getContentClass = () => {
    switch (role) {
      case 'admin':
        return "flex-1 overflow-y-auto bg-background p-6";
      case 'hr':
      case 'staff':
        return "flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6";
      default:
        return "flex-1 overflow-y-auto p-6";
    }
  };

  return (
    <div className={getLayoutClass()}>
      <Sidebar role={role} />
      <div className={getMainClass()}>
        {showHeader && getHeaderContent()}
        <main className={getContentClass()}>
          {children}
        </main>
      </div>
    </div>
  );
}