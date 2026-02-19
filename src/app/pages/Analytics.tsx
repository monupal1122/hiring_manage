import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const hiringFunnelData = [
  { stage: 'Applied', count: 450 },
  { stage: 'Screening', count: 280 },
  { stage: 'Interview', count: 120 },
  { stage: 'Offer', count: 45 },
  { stage: 'Hired', count: 32 },
];

const monthlyHiringData = [
  { month: 'Jan', hires: 12, applications: 245 },
  { month: 'Feb', hires: 18, applications: 312 },
  { month: 'Mar', hires: 15, applications: 289 },
  { month: 'Apr', hires: 22, applications: 398 },
  { month: 'May', hires: 28, applications: 445 },
  { month: 'Jun', hires: 25, applications: 423 },
];

const departmentData = [
  { name: 'Engineering', value: 45, color: '#4F46E5' },
  { name: 'Product', value: 22, color: '#7C3AED' },
  { name: 'Design', value: 18, color: '#06B6D4' },
  { name: 'Marketing', value: 15, color: '#F59E0B' },
  { name: 'Sales', value: 28, color: '#10B981' },
];

const sourceData = [
  { source: 'LinkedIn', candidates: 145 },
  { source: 'Indeed', candidates: 98 },
  { source: 'Company Website', candidates: 124 },
  { source: 'Referrals', candidates: 67 },
  { source: 'Job Boards', candidates: 89 },
];

export function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Insights and metrics for your recruitment process</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Custom Report</Button>
            <Button>Export Data</Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Offer Acceptance Rate</p>
            <p className="text-3xl text-gray-900">71%</p>
            <p className="text-sm text-green-600 mt-2">↑ 5% from last month</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Time to Hire</p>
            <p className="text-3xl text-gray-900">18 days</p>
            <p className="text-sm text-green-600 mt-2">↓ 3 days faster</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Cost per Hire</p>
            <p className="text-3xl text-gray-900">Rs 2,450</p>
            <p className="text-sm text-red-600 mt-2">↑ Rs120 from last month</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Quality of Hire</p>
            <p className="text-3xl text-gray-900">4.6/5</p>
            <p className="text-sm text-green-600 mt-2">↑ 0.3 points</p>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hiring Funnel */}
          <Card>
            <CardHeader>
              <h3 className="text-lg text-gray-900">Hiring Funnel</h3>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={hiringFunnelData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="stage" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#4F46E5" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Monthly Hiring Trend */}
          <Card>
            <CardHeader>
              <h3 className="text-lg text-gray-900">Monthly Hiring Trend</h3>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyHiringData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="hires" stroke="#10B981" strokeWidth={2} />
                  <Line type="monotone" dataKey="applications" stroke="#4F46E5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department Distribution */}
          <Card>
            <CardHeader>
              <h3 className="text-lg text-gray-900">Hires by Department</h3>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Candidate Source */}
          <Card>
            <CardHeader>
              <h3 className="text-lg text-gray-900">Candidate Sources</h3>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={sourceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" />
                  <YAxis dataKey="source" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="candidates" fill="#7C3AED" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Event Performance */}
        <Card>
          <CardHeader>
            <h3 className="text-lg text-gray-900">Event Performance Summary</h3>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-sm text-gray-600 pb-3">Event Name</th>
                    <th className="text-left text-sm text-gray-600 pb-3">Date</th>
                    <th className="text-left text-sm text-gray-600 pb-3">Attendees</th>
                    <th className="text-left text-sm text-gray-600 pb-3">Interviews</th>
                    <th className="text-left text-sm text-gray-600 pb-3">Offers</th>
                    <th className="text-left text-sm text-gray-600 pb-3">Conversion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm text-gray-900">Tech Career Fair 2026</td>
                    <td className="py-4 text-sm text-gray-600">2026-01-15</td>
                    <td className="py-4 text-sm text-gray-900">180</td>
                    <td className="py-4 text-sm text-gray-900">45</td>
                    <td className="py-4 text-sm text-gray-900">12</td>
                    <td className="py-4 text-sm text-green-600">26.7%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 text-sm text-gray-900">Engineering Walk-in</td>
                    <td className="py-4 text-sm text-gray-600">2026-01-28</td>
                    <td className="py-4 text-sm text-gray-900">95</td>
                    <td className="py-4 text-sm text-gray-900">32</td>
                    <td className="py-4 text-sm text-gray-900">8</td>
                    <td className="py-4 text-sm text-green-600">25.0%</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-sm text-gray-900">Graduate Recruitment</td>
                    <td className="py-4 text-sm text-gray-600">2025-12-10</td>
                    <td className="py-4 text-sm text-gray-900">275</td>
                    <td className="py-4 text-sm text-gray-900">68</td>
                    <td className="py-4 text-sm text-gray-900">22</td>
                    <td className="py-4 text-sm text-green-600">32.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
