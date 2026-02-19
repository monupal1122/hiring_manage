import { DashboardLayout } from '../components/layout/DashboardLayout';
import { KPICard } from '../components/ui/KPICard';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FeatureTour } from '../components/ui/FeatureTour';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  FileCheck,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  Sparkles,
  X
} from 'lucide-react';
import { useState } from 'react';

const activities = [
  {
    id: 1,
    type: 'candidate',
    message: 'Sarah Johnson applied for Senior Developer',
    time: '5 minutes ago',
    status: 'new'
  },
  {
    id: 2,
    type: 'interview',
    message: 'Interview scheduled with Mike Chen',
    time: '1 hour ago',
    status: 'scheduled'
  },
  {
    id: 3,
    type: 'offer',
    message: 'Offer accepted by Emma Wilson',
    time: '2 hours ago',
    status: 'success'
  },
  {
    id: 4,
    type: 'application',
    message: '12 new applications for Marketing Manager',
    time: '3 hours ago',
    status: 'new'
  },
];

const upcomingInterviews = [
  {
    id: 1,
    candidate: 'Alex Rodriguez',
    position: 'Product Designer',
    time: 'Today, 2:00 PM',
    interviewer: 'John Doe'
  },
  {
    id: 2,
    candidate: 'Maria Garcia',
    position: 'Frontend Developer',
    time: 'Today, 4:30 PM',
    interviewer: 'Jane Smith'
  },
  {
    id: 3,
    candidate: 'David Kim',
    position: 'Data Analyst',
    time: 'Tomorrow, 10:00 AM',
    interviewer: 'Mike Johnson'
  },
];

const recentJobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    status: 'Active',
    applications: 45,
    department: 'Engineering'
  },
  {
    id: 2,
    title: 'Product Manager',
    status: 'Active',
    applications: 32,
    department: 'Product'
  },
  {
    id: 3,
    title: 'UX Designer',
    status: 'Paused',
    applications: 28,
    department: 'Design'
  },
];

export function Dashboard() {
  const [showTour, setShowTour] = useState(false);
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Banner */}
        {showWelcomeBanner && (
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white relative">
            <button
              onClick={() => setShowWelcomeBanner(false)}
              className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-4 max-w-3xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg mb-1">Welcome to TalentHub!</h3>
                <p className="text-indigo-100 text-sm">
                  Your complete multi-tenant recruitment platform is ready. Explore all features and start hiring smarter today.
                </p>
              </div>
              <Button
                onClick={() => setShowTour(true)}
                variant="secondary"
                className="flex-shrink-0"
              >
                Take a Tour
              </Button>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Download Report</Button>
            <Button>Post New Job</Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Active Jobs"
            value={24}
            icon={Briefcase}
            color="blue"
            trend={{ value: '+12%', isPositive: true }}
          />
          <KPICard
            title="Total Candidates"
            value={1247}
            icon={Users}
            color="green"
            trend={{ value: '+23%', isPositive: true }}
          />
          <KPICard
            title="Interviews Scheduled"
            value={18}
            icon={Calendar}
            color="purple"
            trend={{ value: '+5%', isPositive: true }}
          />
          <KPICard
            title="Offers Released"
            value={8}
            icon={FileCheck}
            color="orange"
            trend={{ value: '-2%', isPositive: false }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Timeline */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg text-gray-900">Recent Activity</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
                      {activity.status === 'success' ? (
                        <CheckCircle className="text-green-600" size={20} />
                      ) : activity.status === 'new' ? (
                        <TrendingUp className="text-blue-600" size={20} />
                      ) : (
                        <Clock className="text-purple-600" size={20} />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                    <Badge variant={activity.status === 'success' ? 'success' : 'info'}>
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Interviews */}
          <Card>
            <CardHeader>
              <h3 className="text-lg text-gray-900">Upcoming Interviews</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingInterviews.map((interview) => (
                  <div key={interview.id} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-900">{interview.candidate}</p>
                    <p className="text-xs text-gray-600">{interview.position}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{interview.time}</span>
                      <Badge variant="info">{interview.interviewer}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Jobs */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-900">Recent Job Postings</h3>
              <Button variant="ghost" size="sm">Manage All Jobs</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-sm text-gray-600 pb-3">Job Title</th>
                    <th className="text-left text-sm text-gray-600 pb-3">Department</th>
                    <th className="text-left text-sm text-gray-600 pb-3">Applications</th>
                    <th className="text-left text-sm text-gray-600 pb-3">Status</th>
                    <th className="text-right text-sm text-gray-600 pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentJobs.map((job) => (
                    <tr key={job.id} className="border-b border-gray-100 last:border-0">
                      <td className="py-4 text-sm text-gray-900">{job.title}</td>
                      <td className="py-4 text-sm text-gray-600">{job.department}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-900">{job.applications}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <Badge variant={job.status === 'Active' ? 'success' : 'warning'}>
                          {job.status}
                        </Badge>
                      </td>
                      <td className="py-4 text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feature Tour Modal */}
      {showTour && <FeatureTour onClose={() => setShowTour(false)} />}
    </DashboardLayout>
  );
}