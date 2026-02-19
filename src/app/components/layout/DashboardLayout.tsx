import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: ReactNode;
  role?: 'recruiter' | 'admin';
}

export function DashboardLayout({ children, role = 'recruiter' }: DashboardLayoutProps) {
  return (
    <div className="h-screen flex bg-gray-50">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header showTenantSwitcher={role === 'recruiter'} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
