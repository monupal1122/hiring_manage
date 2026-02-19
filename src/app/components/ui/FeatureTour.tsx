import { X, Briefcase, Users, Calendar, BarChart3, Building2, CreditCard, Sparkles, QrCode } from 'lucide-react';
import { Button } from './Button';

interface FeatureTourProps {
  onClose: () => void;
}

const features = [
  {
    icon: Briefcase,
    title: 'Complete ATS System',
    description: 'Drag-and-drop Kanban pipeline to manage candidates through every stage of hiring.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: QrCode,
    title: 'Event Management with QR',
    description: 'Host walk-in interviews with QR code check-ins and real-time candidate tracking.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Users,
    title: 'Candidate Database',
    description: 'Comprehensive candidate management with skills, ratings, and resume previews.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Track hiring metrics, conversion rates, and department performance with visual charts.',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: Building2,
    title: 'Multi-Tenant Architecture',
    description: 'Secure, isolated workspaces for each organization with subdomain access.',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    icon: CreditCard,
    title: 'Subscription Management',
    description: 'Flexible pricing tiers with usage tracking and easy upgrades.',
    color: 'bg-pink-50 text-pink-600'
  },
  {
    icon: Sparkles,
    title: 'AI-Ready Platform',
    description: 'Built for future AI features: resume screening, interview bots, and match scoring.',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    icon: Calendar,
    title: 'Job Management',
    description: 'Create, publish, and track job postings with application monitoring.',
    color: 'bg-yellow-50 text-yellow-600'
  },
];

export function FeatureTour({ onClose }: FeatureTourProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl text-gray-900">Welcome to TalentHub</h2>
            <p className="text-gray-600">Your complete recruitment platform</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Features Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
            <h3 className="text-lg text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = '/jobs'}>
                Post a Job
              </Button>
              <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = '/ats'}>
                View Pipeline
              </Button>
              <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = '/events'}>
                Create Event
              </Button>
              <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = '/analytics'}>
                See Analytics
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <Button onClick={onClose} className="px-8">
              Get Started
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Need help? Check our documentation or contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
