import { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Search, Filter, Download, Mail, Phone, MapPin, Star, FileText } from 'lucide-react';

const candidates = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 234-567-8901',
    position: 'Senior React Developer',
    location: 'San Francisco, CA',
    status: 'interview',
    rating: 5,
    experience: '8 years',
    appliedDate: '2026-01-15',
    tags: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 2,
    name: 'Mike Chen',
    email: 'mike.chen@email.com',
    phone: '+1 234-567-8902',
    position: 'Product Manager',
    location: 'New York, NY',
    status: 'screening',
    rating: 4,
    experience: '6 years',
    appliedDate: '2026-01-18',
    tags: ['Product Strategy', 'Agile', 'Analytics']
  },
  {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma.w@email.com',
    phone: '+1 234-567-8903',
    position: 'UX Designer',
    location: 'Austin, TX',
    status: 'offer',
    rating: 5,
    experience: '5 years',
    appliedDate: '2026-01-20',
    tags: ['Figma', 'User Research', 'Prototyping']
  },
  {
    id: 4,
    name: 'Alex Rodriguez',
    email: 'alex.r@email.com',
    phone: '+1 234-567-8904',
    position: 'DevOps Engineer',
    location: 'Seattle, WA',
    status: 'applied',
    rating: 4,
    experience: '7 years',
    appliedDate: '2026-01-22',
    tags: ['AWS', 'Docker', 'Kubernetes']
  },
  {
    id: 5,
    name: 'Maria Garcia',
    email: 'maria.g@email.com',
    phone: '+1 234-567-8905',
    position: 'Data Analyst',
    location: 'Boston, MA',
    status: 'hired',
    rating: 5,
    experience: '4 years',
    appliedDate: '2026-01-10',
    tags: ['Python', 'SQL', 'Tableau']
  },
];

export function CandidateManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<typeof candidates[0] | null>(null);

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    candidate.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">Candidate Management</h1>
            <p className="text-gray-600">View and manage all candidate profiles</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download size={18} className="mr-2" />
              Export
            </Button>
            <Button variant="outline">Bulk Actions</Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search candidates by name, email, or position..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter size={18} className="mr-2" />
                Filters
              </Button>
            </div>

            {/* Tags Filter */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="default" className="cursor-pointer hover:bg-gray-200">All</Badge>
              <Badge variant="info" className="cursor-pointer hover:bg-blue-200">React</Badge>
              <Badge variant="purple" className="cursor-pointer hover:bg-purple-200">Python</Badge>
              <Badge variant="success" className="cursor-pointer hover:bg-green-200">AWS</Badge>
              <Badge variant="warning" className="cursor-pointer hover:bg-amber-200">Design</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Total Candidates</p>
            <p className="text-3xl text-gray-900">1,247</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Applied</p>
            <p className="text-3xl text-blue-600">450</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">In Review</p>
            <p className="text-3xl text-yellow-600">280</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Interviewing</p>
            <p className="text-3xl text-purple-600">120</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-gray-600 mb-1">Hired</p>
            <p className="text-3xl text-green-600">32</p>
          </Card>
        </div>

        {/* Candidates Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-900">All Candidates</h3>
              <span className="text-sm text-gray-600">{filteredCandidates.length} results</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Candidate</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Position</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Location</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Experience</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Rating</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Status</th>
                    <th className="text-left text-sm text-gray-600 pb-3 pr-4">Applied</th>
                    <th className="text-right text-sm text-gray-600 pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCandidates.map((candidate) => (
                    <tr key={candidate.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer"
                        onClick={() => setSelectedCandidate(candidate)}>
                      <td className="py-4 pr-4" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-sm">
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm text-gray-900">{candidate.name}</p>
                            <p className="text-xs text-gray-600">{candidate.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-900">{candidate.position}</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-600">{candidate.location}</span>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-900">{candidate.experience}</span>
                      </td>
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={i < candidate.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                      </td>
                      <td className="py-4 pr-4">
                        <Badge
                          variant={
                            candidate.status === 'hired' ? 'success' :
                            candidate.status === 'offer' ? 'purple' :
                            candidate.status === 'interview' ? 'warning' :
                            candidate.status === 'screening' ? 'info' : 'default'
                          }
                        >
                          {candidate.status}
                        </Badge>
                      </td>
                      <td className="py-4 pr-4">
                        <span className="text-sm text-gray-600">{candidate.appliedDate}</span>
                      </td>
                      <td className="py-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-2">
                          <Button size="sm" variant="ghost" title="Email">
                            <Mail size={16} />
                          </Button>
                          <Button size="sm" variant="ghost" title="View Resume">
                            <FileText size={16} />
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

      {/* Candidate Detail Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelectedCandidate(null)}>
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-xl">
                  {selectedCandidate.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-2xl text-gray-900">{selectedCandidate.name}</h2>
                  <p className="text-gray-600">{selectedCandidate.position}</p>
                </div>
              </div>
              <Badge
                variant={
                  selectedCandidate.status === 'hired' ? 'success' :
                  selectedCandidate.status === 'offer' ? 'purple' : 'info'
                }
              >
                {selectedCandidate.status}
              </Badge>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-gray-400" />
                {selectedCandidate.email}
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={18} className="text-gray-400" />
                {selectedCandidate.phone}
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={18} className="text-gray-400" />
                {selectedCandidate.location}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm text-gray-600 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCandidate.tags.map((tag, idx) => (
                  <Badge key={idx} variant="info">{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1">
                <Mail size={16} className="mr-2" />
                Send Email
              </Button>
              <Button className="flex-1" variant="outline">
                <FileText size={16} className="mr-2" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
