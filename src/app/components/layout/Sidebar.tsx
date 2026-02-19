import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Calendar, 
  BarChart3, 
  Settings, 
  CreditCard,
  Building2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Bot,
  Brain,
  TrendingUp
} from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { cn } from '../../lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon: any;
  badge?: string;
  aiReady?: boolean;
}

const recruiterNav: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'ATS Pipeline', href: '/ats', icon: Users },
  { name: 'Jobs', href: '/jobs', icon: Briefcase },
  { name: 'Candidates', href: '/candidates', icon: Users },
  { name: 'Events', href: '/events', icon: Calendar },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
];

const aiModules: NavItem[] = [
  { name: 'AI Resume Screening', href: '/ai/resume', icon: Brain, aiReady: true },
  { name: 'AI Interview Bot', href: '/ai/interview', icon: Bot, aiReady: true },
  { name: 'AI Match Score', href: '/ai/match', icon: Sparkles, aiReady: true },
  { name: 'Predictive Insights', href: '/ai/insights', icon: TrendingUp, aiReady: true },
];

const bottomNav: NavItem[] = [
  { name: 'Billing', href: '/billing', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const adminNav: NavItem[] = [
  { name: 'Tenants', href: '/admin/tenants', icon: Building2 },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Revenue', href: '/admin/revenue', icon: CreditCard },
];

interface SidebarProps {
  role?: 'recruiter' | 'admin';
}

export function Sidebar({ role = 'recruiter' }: SidebarProps) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const navigation = role === 'admin' ? adminNav : recruiterNav;

  return (
    <div className={cn(
      'bg-white border-r border-gray-200 flex flex-col transition-all duration-300',
      collapsed ? 'w-16' : 'w-64'
    )}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={18} />
            </div>
            <span className="text-lg text-gray-900">TalentHub</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-gray-100 rounded-lg"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon size={20} />
                {!collapsed && <span>{item.name}</span>}
                {item.badge && !collapsed && (
                  <span className="ml-auto bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* AI Modules Section (only for recruiter) */}
        {role === 'recruiter' && (
          <>
            <div className={cn('mt-6 mb-2 px-3', collapsed && 'px-1')}>
              {!collapsed && (
                <h3 className="text-xs text-gray-500 uppercase tracking-wider">
                  AI Modules
                </h3>
              )}
            </div>
            <div className="space-y-1">
              {aiModules.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors relative',
                    'text-gray-400 hover:bg-purple-50 hover:text-purple-600 cursor-not-allowed'
                  )}
                  title={collapsed ? item.name : undefined}
                  onClick={(e) => e.preventDefault()}
                >
                  <item.icon size={20} />
                  {!collapsed && (
                    <>
                      <span>{item.name}</span>
                      <span className="ml-auto text-xs text-purple-600">Soon</span>
                    </>
                  )}
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Bottom Navigation */}
        <div className="mt-auto pt-6 space-y-1">
          {bottomNav.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon size={20} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
