import { Bell, ChevronDown, Search, HelpCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface HeaderProps {
  tenantName?: string;
  tenantPlan?: string;
  userName?: string;
  showTenantSwitcher?: boolean;
}

export function Header({ 
  tenantName = 'Acme Corp', 
  tenantPlan = 'Pro Plan',
  userName = 'John Doe',
  showTenantSwitcher = true 
}: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Left: Search */}
      <div className="flex-1 max-w-lg">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search candidates, jobs, events..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Tenant Switcher */}
        {showTenantSwitcher && (
          <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-sm">
              {tenantName.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-900">{tenantName}</span>
              <Badge variant="info" className="text-xs">{tenantPlan}</Badge>
            </div>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
        )}

        {/* Help */}
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Help">
          <HelpCircle size={20} className="text-gray-600" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-lg" title="Notifications">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Menu */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 cursor-pointer hover:bg-gray-50 rounded-lg px-3 py-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm text-gray-700">
            {userName.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-900">{userName}</span>
            <span className="text-xs text-gray-500">Recruiter</span>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
}
