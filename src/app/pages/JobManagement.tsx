import { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Search, Plus, MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior React Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    status: 'active',
    applications: 45,
    postedDate: '2026-01-15',
    deadline: '2026-03-15'
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    status: 'active',
    applications: 32,
    postedDate: '2026-01-20',
    deadline: '2026-03-20'
  },
  {
    id: 3,
    title: 'UX Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    status: 'paused',
    applications: 28,
    postedDate: '2026-01-10',
    deadline: '2026-03-10'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Austin, TX',
    type: 'Full-time',
    status: 'active',
    applications: 38,
    postedDate: '2026-01-25',
    deadline: '2026-03-25'
  },
  {
    id: 5,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Contract',
    status: 'active',
    applications: 22,
    postedDate: '2026-02-01',
    deadline: '2026-04-01'
  },
  {
    id: 6,
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Boston, MA',
    type: 'Full-time',
    status: 'closed',
    applications: 51,
    postedDate: '2025-12-15',
    deadline: '2026-02-15'
  },
];

export function JobManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">Job Management</h1>
            <p className="text-gray-600">Create and manage your job postings</p>
          </div>
          <Button onClick={() => setShowCreateModal(true)}>
            <Plus size={18} className="mr-2" />
            Create Job
          </Button>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search jobs by title or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  Filter
                </Button>
                <Button variant="outline">
                  Sort
                </Button>
                <Button variant="outline">
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Total Jobs</p>
            <p className="text-3xl text-gray-900">24</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Active Jobs</p>
            <p className="text-3xl text-green-600">18</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Total Applications</p>
            <p className="text-3xl text-gray-900">216</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Avg per Job</p>
            <p className="text-3xl text-gray-900">36</p>
          </Card>
        </div>

        {/* Jobs Table */}
        <Card>
          <CardHeader>
            <h3 className="text-lg text-gray-900">All Job Postings</h3>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Job Title</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Department</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Location</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Type</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Applications</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Status</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Posted</th>
                    <th className="text-right text-sm text-gray-600 pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs.map((job) => (
                    <tr key={job.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                      <td className="py-4 pr-4">
                        <p className="text-sm text-gray-900">{job.title}</p>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-600">{job.department}</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-600">{job.location}</span>
                      </td>
                      <td className="py-4 pr-4">
                        <Badge variant="info">{job.type}</Badge>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-900">{job.applications}</span>
                      </td>
                      <td className="py-4 pr-4">
                        <Badge
                          variant={
                            job.status === 'active' ? 'success' :
                            job.status === 'paused' ? 'warning' : 'default'
                          }
                        >
                          {job.status}
                        </Badge>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-600">{job.postedDate}</span>
                      </td>
                      <td className="py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button size="sm" variant="ghost">
                            <Eye size={16} />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit size={16} />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <MoreVertical size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Job Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowCreateModal(false)}>
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl text-gray-900 mb-6">Create New Job</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Job Title</label>
                <Input placeholder="e.g. Senior React Developer" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Department</label>
                  <Input placeholder="Engineering" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Location</label>
                  <Input placeholder="San Francisco, CA" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Employment Type</label>
                  <select className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm">
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Experience Level</label>
                  <select className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm">
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Job Description</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm min-h-[120px]"
                  placeholder="Enter job description..."
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button onClick={() => setShowCreateModal(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1">
                  Create Job
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
