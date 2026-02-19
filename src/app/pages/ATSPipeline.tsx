import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { X, Mail, Phone, MapPin, Star, MessageSquare, FileText } from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  location: string;
  rating: number;
  avatar: string;
  appliedDate: string;
}

const initialCandidates: Record<string, Candidate[]> = {
  applied: [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'Senior React Developer',
      email: 'sarah.j@email.com',
      phone: '+1 234-567-8901',
      location: 'San Francisco, CA',
      rating: 4.5,
      avatar: 'SJ',
      appliedDate: '2 days ago'
    },
    {
      id: '2',
      name: 'Mike Chen',
      position: 'Senior React Developer',
      email: 'mike.chen@email.com',
      phone: '+1 234-567-8902',
      location: 'New York, NY',
      rating: 4.0,
      avatar: 'MC',
      appliedDate: '3 days ago'
    },
  ],
  screening: [
    {
      id: '3',
      name: 'Emma Wilson',
      position: 'Senior React Developer',
      email: 'emma.w@email.com',
      phone: '+1 234-567-8903',
      location: 'Austin, TX',
      rating: 5.0,
      avatar: 'EW',
      appliedDate: '5 days ago'
    },
  ],
  interview: [
    {
      id: '4',
      name: 'Alex Rodriguez',
      position: 'Senior React Developer',
      email: 'alex.r@email.com',
      phone: '+1 234-567-8904',
      location: 'Seattle, WA',
      rating: 4.5,
      avatar: 'AR',
      appliedDate: '1 week ago'
    },
  ],
  offer: [],
  hired: [
    {
      id: '5',
      name: 'David Kim',
      position: 'Senior React Developer',
      email: 'david.k@email.com',
      phone: '+1 234-567-8905',
      location: 'Boston, MA',
      rating: 5.0,
      avatar: 'DK',
      appliedDate: '2 weeks ago'
    },
  ],
};

const columns = [
  { id: 'applied', title: 'Applied', color: 'bg-blue-500' },
  { id: 'screening', title: 'Screening', color: 'bg-yellow-500' },
  { id: 'interview', title: 'Interview', color: 'bg-purple-500' },
  { id: 'offer', title: 'Offer', color: 'bg-orange-500' },
  { id: 'hired', title: 'Hired', color: 'bg-green-500' },
];

interface CandidateCardProps {
  candidate: Candidate;
  onSelect: (candidate: Candidate) => void;
}

function CandidateCard({ candidate, onSelect }: CandidateCardProps) {
  const [{ isDragging }, drag] = useDrag({
    type: 'candidate',
    item: { id: candidate.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      onClick={() => onSelect(candidate)}
      className={`p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:shadow-md transition-shadow ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-sm flex-shrink-0">
          {candidate.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm text-gray-900 truncate">{candidate.name}</h4>
          <p className="text-xs text-gray-500 truncate">{candidate.position}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Mail size={12} />
          <span className="truncate">{candidate.email}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <MapPin size={12} />
          <span className="truncate">{candidate.location}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < candidate.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500">{candidate.appliedDate}</span>
      </div>
    </div>
  );
}

interface ColumnProps {
  column: typeof columns[0];
  candidates: Candidate[];
  onDrop: (candidateId: string, columnId: string) => void;
  onSelectCandidate: (candidate: Candidate) => void;
}

function Column({ column, candidates, onDrop, onSelectCandidate }: ColumnProps) {
  const [{ isOver }, drop] = useDrop({
    accept: 'candidate',
    drop: (item: { id: string }) => onDrop(item.id, column.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div className="flex-shrink-0 w-80">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${column.color}`} />
          <h3 className="text-sm text-gray-900">{column.title}</h3>
          <Badge variant="default">{candidates.length}</Badge>
        </div>
      </div>
      
      <div
        ref={drop}
        className={`space-y-3 min-h-[600px] p-3 rounded-lg ${
          isOver ? 'bg-indigo-50 border-2 border-dashed border-indigo-300' : 'bg-gray-50'
        }`}
      >
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
            onSelect={onSelectCandidate}
          />
        ))}
      </div>
    </div>
  );
}

export function ATSPipeline() {
  const [candidates, setCandidates] = useState(initialCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const handleDrop = (candidateId: string, targetColumnId: string) => {
    setCandidates((prev) => {
      const newState = { ...prev };
      let movedCandidate: Candidate | null = null;
      let sourceColumnId: string | null = null;

      // Find and remove candidate from source column
      Object.keys(newState).forEach((columnId) => {
        const index = newState[columnId].findIndex((c) => c.id === candidateId);
        if (index !== -1) {
          [movedCandidate] = newState[columnId].splice(index, 1);
          sourceColumnId = columnId;
        }
      });

      // Add to target column
      if (movedCandidate && sourceColumnId !== targetColumnId) {
        newState[targetColumnId] = [...newState[targetColumnId], movedCandidate];
      }

      return newState;
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">ATS Pipeline</h1>
            <p className="text-gray-600">Senior React Developer - 12 candidates</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Export</Button>
            <Button>Add Candidate</Button>
          </div>
        </div>

        {/* Kanban Board */}
        <DndProvider backend={HTML5Backend}>
          <div className="flex gap-6 overflow-x-auto pb-6">
            {columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                candidates={candidates[column.id]}
                onDrop={handleDrop}
                onSelectCandidate={setSelectedCandidate}
              />
            ))}
          </div>
        </DndProvider>
      </div>

      {/* Candidate Detail Panel */}
      {selectedCandidate && (
        <div className="fixed inset-y-0 right-0 w-96 bg-white border-l border-gray-200 shadow-xl z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg text-gray-900">Candidate Details</h2>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>

            {/* Candidate Info */}
            <div className="mb-6">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-2xl mx-auto mb-4">
                {selectedCandidate.avatar}
              </div>
              <h3 className="text-xl text-center text-gray-900 mb-1">{selectedCandidate.name}</h3>
              <p className="text-sm text-center text-gray-600 mb-4">{selectedCandidate.position}</p>
              
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < selectedCandidate.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Mail size={16} className="text-gray-400" />
                  {selectedCandidate.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone size={16} className="text-gray-400" />
                  {selectedCandidate.phone}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <MapPin size={16} className="text-gray-400" />
                  {selectedCandidate.location}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <Button className="w-full" variant="primary">
                <Mail size={16} className="mr-2" />
                Send Email
              </Button>
              <Button className="w-full" variant="outline">
                <FileText size={16} className="mr-2" />
                View Resume
              </Button>
              <Button className="w-full" variant="outline">
                <MessageSquare size={16} className="mr-2" />
                Add Note
              </Button>
            </div>

            {/* Timeline */}
            <div>
              <h4 className="text-sm text-gray-900 mb-4">Activity Timeline</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm text-gray-900">Application received</p>
                    <p className="text-xs text-gray-500">{selectedCandidate.appliedDate}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm text-gray-900">Resume screened</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
