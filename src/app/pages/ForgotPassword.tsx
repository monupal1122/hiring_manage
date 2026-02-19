import { useState } from 'react';
import { Link } from 'react-router';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8 justify-center">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={22} />
            </div>
            <span className="text-2xl text-gray-900">TalentHub</span>
          </div>

          {!submitted ? (
            <>
              <h1 className="text-2xl text-center text-gray-900 mb-2">Forgot Password?</h1>
              <p className="text-center text-gray-600 mb-8">
                Enter your email address and we'll send you instructions to reset your password.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Reset Link
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl text-gray-900 mb-2">Check your email</h2>
              <p className="text-gray-600 mb-6">
                We've sent password reset instructions to <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-500">
                Didn't receive the email? Check your spam folder or{' '}
                <button onClick={() => setSubmitted(false)} className="text-indigo-600 hover:underline">
                  try again
                </button>
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link to="/login" className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700">
              <ArrowLeft size={16} />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
