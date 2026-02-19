import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { User, Building2, Bell, Shield, Palette, Globe } from 'lucide-react';

export function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        {/* Header */}
        <div>
          <h1 className="text-2xl text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="text-gray-400" size={20} />
              <h3 className="text-lg text-gray-900">Profile Information</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 text-2xl">
                  JD
                </div>
                <div>
                  <Button variant="outline" size="sm">Change Photo</Button>
                  <p className="text-xs text-gray-500 mt-2">JPG or PNG. Max size 2MB.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">First Name</label>
                  <Input defaultValue="John" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Last Name</label>
                  <Input defaultValue="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Email</label>
                <Input type="email" defaultValue="john.doe@acme.com" />
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Job Title</label>
                <Input defaultValue="Senior Recruiter" />
              </div>
              
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Company Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="text-gray-400" size={20} />
              <h3 className="text-lg text-gray-900">Company Information</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Company Name</label>
                <Input defaultValue="Acme Corporation" />
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Subdomain</label>
                <div className="flex items-center gap-2">
                  <Input defaultValue="acme-corp" className="flex-1" />
                  <span className="text-sm text-gray-600">.talenthub.io</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Industry</label>
                <select className="w-full h-10 px-3 border border-gray-300 rounded-lg text-sm">
                  <option>Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Retail</option>
                  <option>Other</option>
                </select>
              </div>
              
              <Button>Update Company</Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="text-gray-400" size={20} />
              <h3 className="text-lg text-gray-900">Notifications</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-900">New Applications</p>
                  <p className="text-xs text-gray-500">Get notified when candidates apply</p>
                </div>
                <input type="checkbox" className="rounded border-gray-300" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-900">Interview Reminders</p>
                  <p className="text-xs text-gray-500">Remind me 30 minutes before interviews</p>
                </div>
                <input type="checkbox" className="rounded border-gray-300" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div>
                  <p className="text-sm text-gray-900">Offer Updates</p>
                  <p className="text-xs text-gray-500">Notify when offers are accepted/rejected</p>
                </div>
                <input type="checkbox" className="rounded border-gray-300" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm text-gray-900">Weekly Reports</p>
                  <p className="text-xs text-gray-500">Receive weekly hiring analytics</p>
                </div>
                <input type="checkbox" className="rounded border-gray-300" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="text-gray-400" size={20} />
              <h3 className="text-lg text-gray-900">Security</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Current Password</label>
                <Input type="password" placeholder="Enter current password" />
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">New Password</label>
                <Input type="password" placeholder="Enter new password" />
              </div>
              
              <div>
                <label className="block text-sm text-gray-700 mb-2">Confirm New Password</label>
                <Input type="password" placeholder="Confirm new password" />
              </div>
              
              <Button>Update Password</Button>
              
              <div className="pt-6 mt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-900">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-500">Add an extra layer of security</p>
                  </div>
                  <Badge variant="warning">Not Enabled</Badge>
                </div>
                <Button variant="outline" size="sm" className="mt-3">Enable 2FA</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integrations */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="text-gray-400" size={20} />
              <h3 className="text-lg text-gray-900">Integrations</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">
                    LI
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">LinkedIn</p>
                    <p className="text-xs text-gray-500">Import candidates from LinkedIn</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Slack</p>
                    <p className="text-xs text-gray-500">Get notifications in Slack</p>
                  </div>
                </div>
                <Badge variant="success">Connected</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm">
                    G
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Google Calendar</p>
                    <p className="text-xs text-gray-500">Sync interview schedules</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200">
          <CardHeader>
            <h3 className="text-lg text-red-600">Danger Zone</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
                <div>
                  <p className="text-sm text-gray-900">Delete Account</p>
                  <p className="text-xs text-gray-500">Permanently delete your account and all data</p>
                </div>
                <Button variant="danger" size="sm">Delete</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
