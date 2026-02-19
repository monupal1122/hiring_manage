import { createBrowserRouter } from 'react-router';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { Dashboard } from './pages/Dashboard';
import { ATSPipeline } from './pages/ATSPipeline';
import { JobManagement } from './pages/JobManagement';
import { CandidateManagement } from './pages/CandidateManagement';
import { EventManagement } from './pages/EventManagement';
import { Analytics } from './pages/Analytics';
import { Billing } from './pages/Billing';
import { SuperAdmin } from './pages/SuperAdmin';
import { Settings } from './pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Login,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/signup',
    Component: Signup,
  },
  {
    path: '/forgot-password',
    Component: ForgotPassword,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  },
  {
    path: '/ats',
    Component: ATSPipeline,
  },
  {
    path: '/jobs',
    Component: JobManagement,
  },
  {
    path: '/candidates',
    Component: CandidateManagement,
  },
  {
    path: '/events',
    Component: EventManagement,
  },
  {
    path: '/analytics',
    Component: Analytics,
  },
  {
    path: '/billing',
    Component: Billing,
  },
  {
    path: '/admin/tenants',
    Component: SuperAdmin,
  },
  {
    path: '/settings',
    Component: Settings,
  },
]);