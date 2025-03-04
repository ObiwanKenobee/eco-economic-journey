
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowRight, BarChart3, Calendar, CheckCircle, Lock, Shield, User, Users } from 'lucide-react';
import Button from '@/components/Button';

const Overview = () => {
  const { user } = useAuth();
  
  // Determine role display name
  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'tourist': return 'Eco-Traveler';
      case 'business': return 'Business Admin';
      case 'financial': return 'Financial Admin';
      case 'it': return 'IT Admin';
      case 'regulatory': return 'Regulatory Access';
      case 'admin': return 'Super Admin';
      default: return 'User';
    }
  };

  // Get role-specific welcome message and stats
  const getWelcomeContent = () => {
    switch (user?.role) {
      case 'tourist':
        return {
          title: 'Your Eco-Traveler Dashboard',
          description: 'Track your travel impact, manage bookings, and discover new eco-friendly destinations.',
          stats: [
            { icon: Calendar, label: 'Upcoming Trips', value: '2' },
            { icon: Shield, label: 'Conservation Impact', value: '$143' },
            { icon: CheckCircle, label: 'Carbon Offset', value: '0.8 tons' },
          ]
        };
      case 'business':
        return {
          title: `${user.organization || 'Business'} Dashboard`,
          description: 'Manage your eco-tourism business, track bookings, and monitor your conservation impact.',
          stats: [
            { icon: Users, label: 'Active Bookings', value: '24' },
            { icon: BarChart3, label: 'Monthly Revenue', value: '$12,400' },
            { icon: Shield, label: 'Conservation Contribution', value: '$3,720' },
          ]
        };
      case 'financial':
        return {
          title: `${user.organization || 'Financial'} Portal`,
          description: 'Monitor financial transactions, analyze conservation funding, and track ESG metrics.',
          stats: [
            { icon: BarChart3, label: 'Transaction Volume', value: '$82,500' },
            { icon: Shield, label: 'Conservation Funding', value: '$24,750' },
            { icon: CheckCircle, label: 'ESG Score', value: '92/100' },
          ]
        };
      case 'it':
        return {
          title: `${user.organization || 'IT'} Control Center`,
          description: 'Manage system security, monitor platform performance, and oversee user access.',
          stats: [
            { icon: Users, label: 'Active Users', value: '1,243' },
            { icon: Shield, label: 'Security Score', value: '96/100' },
            { icon: BarChart3, label: 'System Uptime', value: '99.98%' },
          ]
        };
      case 'regulatory':
        return {
          title: `${user.organization || 'Regulatory'} Oversight Panel`,
          description: 'Monitor compliance, analyze conservation impact, and review economic data.',
          stats: [
            { icon: CheckCircle, label: 'Compliance Rate', value: '97%' },
            { icon: BarChart3, label: 'Economic Impact', value: '$47.2M' },
            { icon: Shield, label: 'Conservation Area', value: '12,400 km²' },
          ]
        };
      case 'admin':
        return {
          title: 'Guardian-IO Admin Console',
          description: 'Complete platform oversight with access to all system components and user management.',
          stats: [
            { icon: Users, label: 'Total Users', value: '4,827' },
            { icon: BarChart3, label: 'Platform Revenue', value: '$1.2M' },
            { icon: Shield, label: 'Conservation Impact', value: '$360K' },
          ]
        };
      default:
        return {
          title: 'Welcome to Guardian-IO',
          description: 'Your dashboard for the Eco-Economy platform.',
          stats: [
            { icon: User, label: 'Profile Completion', value: '80%' },
            { icon: CheckCircle, label: 'Active Status', value: 'Yes' },
            { icon: Calendar, label: 'Member Since', value: 'Today' },
          ]
        };
    }
  };
  
  const welcomeContent = getWelcomeContent();
  
  return (
    <div>
      {/* Page header */}
      <div className="pb-5 border-b border-gray-200 mb-6">
        <h1 className="text-2xl font-bold text-charcoal">Dashboard</h1>
      </div>
      
      {/* Welcome card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-charcoal mb-1">
              Welcome back, {user?.name}
            </h2>
            <p className="text-gray-600">
              You're logged in as a {getRoleDisplayName(user?.role || 'user')}
              {user?.organization ? ` with ${user.organization}` : ''}.
            </p>
          </div>
          <div className="bg-earth/10 text-earth px-3 py-1 rounded-full text-xs font-medium">
            {getRoleDisplayName(user?.role || 'user')}
          </div>
        </div>
      </div>
      
      {/* Dashboard content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Overview panel */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">{welcomeContent.title}</h2>
          <p className="text-gray-600 mb-8">{welcomeContent.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {welcomeContent.stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-earth/10 p-2 rounded-full mr-3">
                    <stat.icon size={18} className="text-earth" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
                </div>
                <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Security and authentication panel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Authentication & Security</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center mb-2">
                <Lock size={16} className="text-green-500 mr-2" />
                <h3 className="text-sm font-medium text-charcoal">Password Authentication</h3>
              </div>
              <p className="text-xs text-gray-500">Basic security enabled</p>
            </div>
            
            <div className="border-b border-gray-100 pb-4">
              <div className="flex items-center mb-2">
                <Lock size={16} className="text-gray-400 mr-2" />
                <h3 className="text-sm font-medium text-gray-500">Two-Factor Authentication</h3>
              </div>
              <p className="text-xs text-gray-500">Enhance your account security</p>
              <Button variant="secondary" size="sm" className="mt-2 w-full justify-center">
                Enable 2FA
              </Button>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <Shield size={16} className="text-earth mr-2" />
                <h3 className="text-sm font-medium text-charcoal">Security Status</h3>
              </div>
              <div className="bg-earth/10 text-earth text-xs rounded-md p-2">
                Your account uses basic security. We recommend enabling two-factor authentication for enhanced protection.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-semibold text-charcoal mb-4">Quick Actions</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="secondary" className="justify-between">
            <span>Complete your profile</span>
            <ArrowRight size={16} />
          </Button>
          
          <Button variant="secondary" className="justify-between">
            <span>Security settings</span>
            <ArrowRight size={16} />
          </Button>
          
          <Button variant="secondary" className="justify-between">
            <span>Explore features</span>
            <ArrowRight size={16} />
          </Button>
          
          <Button variant="secondary" className="justify-between">
            <span>View documentation</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
