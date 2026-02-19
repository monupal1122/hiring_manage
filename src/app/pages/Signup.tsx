import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Briefcase, Eye, EyeOff, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

export function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    subdomain: '',
    name: '',
    email: '',
    password: '',
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={22} />
            </div>
            <span className="text-2xl text-gray-900">TalentHub</span>
          </div>

          <h1 className="text-3xl text-gray-900 mb-2">Create your account</h1>
          <p className="text-gray-600 mb-8">Start your 14-day free trial. No credit card required.</p>

          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Company Name</label>
              <Input
                type="text"
                placeholder="Acme Corporation"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Choose Subdomain</label>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  placeholder="acme-corp"
                  value={formData.subdomain}
                  onChange={(e) => setFormData({ ...formData, subdomain: e.target.value })}
                  className="flex-1"
                  required
                />
                <span className="text-sm text-gray-600">.talenthub.io</span>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Your Name</label>
              <Input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Work Email</label>
              <Input
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="space-y-2 py-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={14} className="text-green-600" />
                <span>14-day free trial included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={14} className="text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={14} className="text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-600 hover:text-indigo-700">
              Sign in
            </Link>
          </p>

          <p className="text-xs text-gray-500 text-center mt-4">
            By signing up, you agree to our{' '}
            <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Right: Features */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-indigo-800 p-12 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative z-10 max-w-lg text-white">
          <h2 className="text-4xl mb-4">Join 500+ companies hiring smarter</h2>
          <p className="text-indigo-100 text-lg mb-8">
            Everything you need to run a modern recruitment operation.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
              <div>
                <p className="font-medium mb-1">Multi-Tenant Architecture</p>
                <p className="text-indigo-100 text-sm">Secure, isolated data for each organization</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
              <div>
                <p className="font-medium mb-1">AI-Ready Platform</p>
                <p className="text-indigo-100 text-sm">Built for future AI integration</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
              <div>
                <p className="font-medium mb-1">Event Hiring Engine</p>
                <p className="text-indigo-100 text-sm">QR automation for walk-in interviews</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
              <div>
                <p className="font-medium mb-1">Complete ATS System</p>
                <p className="text-indigo-100 text-sm">Manage your entire hiring pipeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
