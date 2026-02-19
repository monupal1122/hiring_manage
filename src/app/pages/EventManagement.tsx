import { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import QRCode from 'react-qr-code';
import { 
  Calendar, 
  MapPin, 
  Users, 
  QrCode, 
  Download,
  UserCheck,
  Clock,
  CheckCircle,
  XCircle,
  TrendingUp
} from 'lucide-react';

const events = [
  {
    id: 1,
    name: 'Tech Career Fair 2026',
    date: '2026-03-15',
    location: 'Convention Center, SF',
    attendees: 250,
    registered: 180,
    status: 'upcoming',
    positions: ['Software Engineer', 'Product Manager', 'Designer']
  },
  {
    id: 2,
    name: 'Engineering Walk-in Interview',
    date: '2026-02-28',
    location: 'Office Campus, Building A',
    attendees: 120,
    registered: 95,
    status: 'active',
    positions: ['Senior Developer', 'DevOps Engineer']
  },
  {
    id: 3,
    name: 'Graduate Recruitment Drive',
    date: '2026-02-10',
    location: 'University Campus',
    attendees: 300,
    registered: 275,
    status: 'completed',
    positions: ['Entry Level Engineer', 'Analyst']
  },
];

const liveAttendees = [
  { id: 1, name: 'Alice Johnson', position: 'Software Engineer', checkIn: '09:15 AM', status: 'checked-in', stage: 'screening' },
  { id: 2, name: 'Bob Smith', position: 'Product Manager', checkIn: '09:22 AM', status: 'interview', stage: 'interview' },
  { id: 3, name: 'Carol Williams', position: 'Designer', checkIn: '09:30 AM', status: 'offered', stage: 'offer' },
  { id: 4, name: 'David Brown', position: 'Software Engineer', checkIn: '09:45 AM', status: 'checked-in', stage: 'screening' },
];

export function EventManagement() {
  const [selectedEvent, setSelectedEvent] = useState(events[1]); // Active event
  const [showQRModal, setShowQRModal] = useState(false);

  const eventStats = {
    totalRegistrations: selectedEvent.registered,
    checkedIn: liveAttendees.filter(a => a.status !== 'offered').length,
    inInterview: liveAttendees.filter(a => a.status === 'interview').length,
    offersGenerated: liveAttendees.filter(a => a.status === 'offered').length,
  };

  const qrData = JSON.stringify({
    eventId: selectedEvent.id,
    eventName: selectedEvent.name,
    checkInUrl: `https://talenthub.io/event/${selectedEvent.id}/checkin`
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl text-gray-900">Event Management</h1>
            <p className="text-gray-600">Manage recruitment events and walk-in interviews</p>
          </div>
          <Button>Create New Event</Button>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card
              key={event.id}
              className={`cursor-pointer transition-all ${
                selectedEvent.id === event.id ? 'ring-2 ring-indigo-500' : ''
              }`}
              onClick={() => setSelectedEvent(event)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg text-gray-900">{event.name}</h3>
                  <Badge
                    variant={
                      event.status === 'active' ? 'success' :
                      event.status === 'upcoming' ? 'info' : 'default'
                    }
                  >
                    {event.status}
                  </Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users size={16} />
                    {event.registered} registered
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {event.positions.slice(0, 2).map((pos, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      {pos}
                    </span>
                  ))}
                  {event.positions.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                      +{event.positions.length - 2}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Event Dashboard */}
        {selectedEvent.status === 'active' && (
          <>
            {/* Event Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Registered</p>
                    <p className="text-3xl text-gray-900">{eventStats.totalRegistrations}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-600" size={24} />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Checked In</p>
                    <p className="text-3xl text-gray-900">{eventStats.checkedIn}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <UserCheck className="text-green-600" size={24} />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">In Interview</p>
                    <p className="text-3xl text-gray-900">{eventStats.inInterview}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Offers Generated</p>
                    <p className="text-3xl text-gray-900">{eventStats.offersGenerated}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-orange-600" size={24} />
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* QR Code Section */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg text-gray-900">Event Check-in QR</h3>
                </CardHeader>
                <CardContent>
                  <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                    <QRCode value={qrData} size={200} className="mx-auto" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <Button className="w-full" variant="outline" onClick={() => setShowQRModal(true)}>
                      <QrCode size={16} className="mr-2" />
                      Full Screen QR
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Download size={16} className="mr-2" />
                      Download QR
                    </Button>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-800">
                      Candidates can scan this QR code to check-in to the event.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Live Attendee Tracker */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-gray-900">Live Attendee Status</h3>
                    <Badge variant="success">
                      <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2 animate-pulse" />
                      Live
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {liveAttendees.map((attendee) => (
                      <div key={attendee.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-sm">
                            {attendee.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="text-sm text-gray-900">{attendee.name}</p>
                            <p className="text-xs text-gray-500">{attendee.position}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs text-gray-500">{attendee.checkIn}</span>
                          <Badge
                            variant={
                              attendee.status === 'offered' ? 'success' :
                              attendee.status === 'interview' ? 'purple' : 'info'
                            }
                          >
                            {attendee.stage}
                          </Badge>
                          <Button size="sm" variant="outline">
                            {attendee.status === 'offered' ? 'View Offer' : 'Move Stage'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Offer Generation */}
            <Card>
              <CardHeader>
                <h3 className="text-lg text-gray-900">Quick Offer Generation</h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input placeholder="Candidate Name" />
                  <Input placeholder="Position" />
                  <Input placeholder="Salary Offer" />
                  <Button>Generate Offer</Button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Generate instant offer letters for on-spot hiring at events.
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* QR Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowQRModal(false)}>
          <div className="bg-white p-12 rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl text-center text-gray-900 mb-6">{selectedEvent.name}</h2>
            <QRCode value={qrData} size={400} />
            <p className="text-center text-gray-600 mt-6">Scan to check-in</p>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
