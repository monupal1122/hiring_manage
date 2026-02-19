import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 99,
    period: 'month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 users',
      '10 active job postings',
      'Basic ATS pipeline',
      'Email support',
      'Standard analytics',
      '100 candidate profiles',
    ],
    current: false,
  },
  {
    name: 'Pro',
    price: 299,
    period: 'month',
    description: 'Best for growing recruitment teams',
    features: [
      'Up to 25 users',
      'Unlimited job postings',
      'Advanced ATS with automation',
      'Priority support',
      'Advanced analytics & reports',
      'Unlimited candidate profiles',
      'Event management',
      'QR code check-in',
      'Custom workflows',
    ],
    current: true,
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited users',
      'Everything in Pro',
      'AI resume screening (Coming soon)',
      'AI interview bot (Coming soon)',
      'Dedicated account manager',
      'Custom integrations',
      'SSO & advanced security',
      'SLA guarantee',
      'Custom training',
      'White-label options',
    ],
    current: false,
  },
];

const invoices = [
  {
    id: 'INV-2026-001',
    date: '2026-02-01',
    amount: 299,
    status: 'paid',
    plan: 'Pro Plan'
  },
  {
    id: 'INV-2026-002',
    date: '2026-01-01',
    amount: 299,
    status: 'paid',
    plan: 'Pro Plan'
  },
  {
    id: 'INV-2025-012',
    date: '2025-12-01',
    amount: 299,
    status: 'paid',
    plan: 'Pro Plan'
  },
  {
    id: 'INV-2025-011',
    date: '2025-11-01',
    amount: 299,
    status: 'paid',
    plan: 'Pro Plan'
  },
];

export function Billing() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl text-gray-900">Billing & Subscription</h1>
          <p className="text-gray-600">Manage your subscription and billing information</p>
        </div>

        {/* Current Plan */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg text-gray-900">Current Plan: Pro</h3>
                  <Badge variant="success">Active</Badge>
                </div>
                <p className="text-gray-600">Your plan renews on March 1, 2026</p>
              </div>
              <div className="text-right">
                <p className="text-3xl text-gray-900">$299</p>
                <p className="text-sm text-gray-600">per month</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Users</p>
                  <p className="text-lg text-gray-900">12 / 25</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Jobs</p>
                  <p className="text-lg text-gray-900">24 / Unlimited</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Candidates</p>
                  <p className="text-lg text-gray-900">1,247 / Unlimited</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plans */}
        <div>
          <h2 className="text-xl text-gray-900 mb-4">Available Plans</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="info">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      {typeof plan.price === 'number' ? (
                        <>
                          <span className="text-4xl text-gray-900">${plan.price}</span>
                          <span className="text-gray-600">/{plan.period}</span>
                        </>
                      ) : (
                        <span className="text-4xl text-gray-900">{plan.price}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.current ? (
                    <Button variant="outline" className="w-full" disabled>
                      Current Plan
                    </Button>
                  ) : plan.name === 'Enterprise' ? (
                    <Button variant="outline" className="w-full">
                      Contact Sales
                    </Button>
                  ) : (
                    <Button className="w-full">
                      {plan.name === 'Starter' ? 'Downgrade' : 'Upgrade'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-900">Payment Method</h3>
              <Button variant="outline" size="sm">Update</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs">
                VISA
              </div>
              <div>
                <p className="text-sm text-gray-900">•••• •••• •••• 4242</p>
                <p className="text-xs text-gray-600">Expires 12/2027</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoice History */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="text-lg text-gray-900">Invoice History</h3>
              <Button variant="outline" size="sm">Download All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-gray-900">{invoice.id}</p>
                      <p className="text-xs text-gray-600">{invoice.plan}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">{invoice.date}</span>
                    <span className="text-sm text-gray-900">${invoice.amount}</span>
                    <Badge variant="success">{invoice.status}</Badge>
                    <Button variant="ghost" size="sm">Download</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
