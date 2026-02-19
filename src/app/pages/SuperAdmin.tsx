import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Building2, Users, DollarSign, TrendingUp, Activity, Check, X } from 'lucide-react';
import { KPICard } from '../components/ui/KPICard';

const tenants = [
  {
    id: 1,
    name: 'Acme Corporation',
    domain: 'acme-corp',
    plan: 'Enterprise',
    users: 45,
    status: 'active',
    mrr: 2499,
    joinedDate: '2025-01-15'
  },
  {
    id: 2,
    name: 'TechStart Inc',
    domain: 'techstart',
    plan: 'Pro',
    users: 12,
    status: 'active',
    mrr: 499,
    joinedDate: '2025-08-22'
  },
  {
    id: 3,
    name: 'Global Recruiting',
    domain: 'global-recruit',
    plan: 'Enterprise',
    users: 78,
    status: 'active',
    mrr: 4999,
    joinedDate: '2024-11-10'
  },
  {
    id: 4,
    name: 'HR Solutions Ltd',
    domain: 'hr-solutions',
    plan: 'Starter',
    users: 5,
    status: 'trial',
    mrr: 0,
    joinedDate: '2026-02-01'
  },
  {
    id: 5,
    name: 'People First Co',
    domain: 'people-first',
    plan: 'Pro',
    users: 8,
    status: 'suspended',
    mrr: 0,
    joinedDate: '2025-05-18'
  },
];

const systemMetrics = [
  { label: 'API Uptime', value: '99.98%', status: 'healthy' },
  { label: 'Avg Response Time', value: '145ms', status: 'healthy' },
  { label: 'Database Load', value: '45%', status: 'healthy' },
  { label: 'Storage Used', value: '2.4TB / 10TB', status: 'healthy' },
];

export function SuperAdmin() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">Super Admin Dashboard</h1>
            <p className="text-gray-600">Platform overview and tenant management</p>
          </div>
          <Button>Add New Tenant</Button>
        </div>

        {/* Platform KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <KPICard
            title="Total Tenants"
            value={5}
            icon={Building2}
            color="blue"
            trend={{ value: '+2 this month', isPositive: true }}
          />
          <KPICard
            title="Active Users"
            value={148}
            icon={Users}
            color="green"
            trend={{ value: '+15%', isPositive: true }}
          />
          <KPICard
            title="Monthly Revenue"
            value="$8.5K"
            icon={DollarSign}
            color="purple"
            trend={{ value: '+23%', isPositive: true }}
          />
          <KPICard
            title="System Health"
            value="99.98%"
            icon={Activity}
            color="green"
          />
        </div>

        {/* Tenant Management Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-900">Tenant Management</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Tenant</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Domain</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Plan</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Users</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">MRR</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Status</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Joined</th>
                    <th className="text-right text-sm text-gray-600 pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tenants.map((tenant) => (
                    <tr key={tenant.id} className="border-b border-gray-100 last:border-0">
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 text-sm">
                            {tenant.name.charAt(0)}
                          </div>
                          <span className="text-sm text-gray-900">{tenant.name}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-600">{tenant.domain}.talenthub.io</span>
                      </td>
                      <td className="py-4 pr-4">
                        <Badge variant={
                          tenant.plan === 'Enterprise' ? 'purple' :
                          tenant.plan === 'Pro' ? 'info' : 'default'
                        }>
                          {tenant.plan}
                        </Badge>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-900">{tenant.users}</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-900">
                          {tenant.mrr > 0 ? `$${tenant.mrr}` : '-'}
                        </span>
                      </td>
                      <td className="py-4 pr-4">
                        <Badge variant={
                          tenant.status === 'active' ? 'success' :
                          tenant.status === 'trial' ? 'warning' : 'danger'
                        }>
                          {tenant.status}
                        </Badge>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-600">{tenant.joinedDate}</span>
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button size="sm" variant="ghost">View</Button>
                          <Button size="sm" variant="outline">Edit</Button>
                          {tenant.status === 'active' ? (
                            <Button size="sm" variant="danger">
                              <X size={14} />
                            </Button>
                          ) : (
                            <Button size="sm" variant="primary">
                              <Check size={14} />
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <h3 className="text-lg text-gray-900">System Health Metrics</h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {systemMetrics.map((metric, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{metric.label}</span>
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                  </div>
                  <p className="text-2xl text-gray-900">{metric.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Revenue Analytics Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg text-gray-900">Revenue by Plan</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-purple-500 rounded" />
                    <span className="text-sm text-gray-700">Enterprise</span>
                  </div>
                  <span className="text-sm text-gray-900">$7,498 (88%)</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: '88%' }} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-blue-500 rounded" />
                    <span className="text-sm text-gray-700">Pro</span>
                  </div>
                  <span className="text-sm text-gray-900">$998 (12%)</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: '12%' }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg text-gray-900">Recent Activity</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-green-600" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">New tenant registered</p>
                    <p className="text-xs text-gray-500">HR Solutions Ltd - 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                    <DollarSign className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Payment received</p>
                    <p className="text-xs text-gray-500">Acme Corporation - $2,499 - 5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center">
                    <Users className="text-purple-600" size={16} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Plan upgraded</p>
                    <p className="text-xs text-gray-500">TechStart Inc - Pro → Enterprise - 1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
