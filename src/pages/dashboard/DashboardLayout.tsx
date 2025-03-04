
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import { 
  BarChart3, 
  ChevronDown, 
  Home, 
  LogOut, 
  Menu, 
  MessageSquare, 
  Settings, 
  User, 
  Users,
  Wallet,
  Globe,
  ShieldCheck,
  Building,
  CalendarClock
} from 'lucide-react';

// Role-based menu items
const roleMenuItems = {
  tourist: [
    { icon: Globe, label: 'Eco Destinations', path: '/dashboard/destinations' },
    { icon: Wallet, label: 'My Bookings', path: '/dashboard/bookings' },
    { icon: CalendarClock, label: 'Travel Timeline', path: '/dashboard/timeline' },
    { icon: BarChart3, label: 'Impact Metrics', path: '/dashboard/impact' },
  ],
  business: [
    { icon: Building, label: 'Business Profile', path: '/dashboard/business-profile' },
    { icon: Users, label: 'Customer Management', path: '/dashboard/customers' },
    { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: CalendarClock, label: 'Booking Calendar', path: '/dashboard/calendar' },
  ],
  financial: [
    { icon: Wallet, label: 'Transactions', path: '/dashboard/transactions' },
    { icon: BarChart3, label: 'Financial Reports', path: '/dashboard/reports' },
    { icon: Users, label: 'Client Accounts', path: '/dashboard/clients' },
    { icon: ShieldCheck, label: 'Compliance', path: '/dashboard/compliance' },
  ],
  it: [
    { icon: ShieldCheck, label: 'Security Center', path: '/dashboard/security' },
    { icon: Users, label: 'User Management', path: '/dashboard/users' },
    { icon: BarChart3, label: 'System Analytics', path: '/dashboard/system' },
    { icon: Settings, label: 'API Settings', path: '/dashboard/api' },
  ],
  regulatory: [
    { icon: ShieldCheck, label: 'Compliance Dashboard', path: '/dashboard/compliance-dashboard' },
    { icon: BarChart3, label: 'Economic Impact', path: '/dashboard/economic-impact' },
    { icon: Globe, label: 'Regional Overview', path: '/dashboard/regions' },
    { icon: Users, label: 'Entity Management', path: '/dashboard/entities' },
  ],
  admin: [
    { icon: ShieldCheck, label: 'Admin Panel', path: '/dashboard/admin' },
    { icon: Users, label: 'User Management', path: '/dashboard/users' },
    { icon: Globe, label: 'Platform Overview', path: '/dashboard/platform' },
    { icon: Settings, label: 'System Settings', path: '/dashboard/settings' },
  ],
};

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  // Get menu items based on user role
  const menuItems = user?.role ? roleMenuItems[user.role] : [];
  
  return (
    <div className="min-h-screen bg-sand/50 flex flex-col">
      {/* Top navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo and mobile menu */}
          <div className="flex items-center">
            <button
              type="button"
              className="md:hidden mr-4 text-charcoal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <Link to="/" className="text-xl font-serif font-semibold tracking-tight text-earth">
              <span className="text-charcoal">The</span> Eco-Economy
            </Link>
          </div>
          
          {/* User menu */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center space-x-3 focus:outline-none"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium text-charcoal">{user?.name}</div>
                <div className="text-xs text-gray-500">
                  {user?.role === 'admin' 
                    ? 'Super Admin' 
                    : user?.role === 'tourist' 
                      ? 'Eco-Traveler'
                      : user?.organization || 'User'}
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-earth text-sand flex items-center justify-center">
                {user?.name ? user.name[0].toUpperCase() : 'U'}
              </div>
              <ChevronDown size={16} className="hidden sm:block text-gray-400" />
            </button>
            
            {/* User dropdown menu */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                <div className="px-4 py-2 border-b border-gray-100 text-xs text-gray-500">
                  Signed in as<br />
                  <span className="font-medium text-charcoal">{user?.email}</span>
                </div>
                <Link
                  to="/dashboard/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Profile Settings
                </Link>
                <button
                  onClick={() => {
                    setUserMenuOpen(false);
                    handleLogout();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      
      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <aside className={`bg-white border-r border-gray-200 w-64 fixed inset-y-0 pt-16 hidden md:block z-20`}>
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <nav className="mt-6 px-3 space-y-1">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) => 
                  `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-earth/10 text-earth' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <Home size={18} className="mr-3" />
                Overview
              </NavLink>
              
              {/* Role-specific menu items */}
              {menuItems.length > 0 && (
                <div className="pt-4 pb-2">
                  <div className="mt-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {user?.role === 'admin' ? 'Admin Tools' : 'My Workspace'}
                  </div>
                  
                  {menuItems.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2 mt-1 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-earth/10 text-earth' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      <item.icon size={18} className="mr-3" />
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
              
              {/* Support and settings links */}
              <div className="pt-4 pb-2">
                <div className="mt-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Support & Settings
                </div>
                <NavLink
                  to="/dashboard/support"
                  className={({ isActive }) => 
                    `flex items-center px-3 py-2 mt-1 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-earth/10 text-earth' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <MessageSquare size={18} className="mr-3" />
                  Support
                </NavLink>
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) => 
                    `flex items-center px-3 py-2 mt-1 rounded-md text-sm font-medium transition-colors ${
                      isActive 
                        ? 'bg-earth/10 text-earth' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  <User size={18} className="mr-3" />
                  Profile Settings
                </NavLink>
              </div>
              
              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="flex items-center px-3 py-2 mt-4 w-full rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut size={18} className="mr-3" />
                Sign out
              </button>
            </nav>
          </div>
        </aside>
        
        {/* Mobile sidebar */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-gray-600 bg-opacity-75" 
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            
            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 flex flex-col max-w-xs w-full bg-white shadow-xl">
              <div className="px-4 pt-5 pb-4 flex items-center justify-between">
                <div className="text-xl font-serif font-semibold tracking-tight text-earth">
                  <span className="text-charcoal">The</span> Eco-Economy
                </div>
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <Menu size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <nav className="mt-2 px-3 space-y-1">
                  <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) => 
                      `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive 
                          ? 'bg-earth/10 text-earth' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Home size={18} className="mr-3" />
                    Overview
                  </NavLink>
                  
                  {/* Role-specific menu items */}
                  {menuItems.length > 0 && (
                    <div className="pt-4 pb-2">
                      <div className="mt-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {user?.role === 'admin' ? 'Admin Tools' : 'My Workspace'}
                      </div>
                      
                      {menuItems.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.path}
                          className={({ isActive }) => 
                            `flex items-center px-3 py-2 mt-1 rounded-md text-sm font-medium transition-colors ${
                              isActive 
                                ? 'bg-earth/10 text-earth' 
                                : 'text-gray-700 hover:bg-gray-100'
                            }`
                          }
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <item.icon size={18} className="mr-3" />
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                  
                  {/* Support and settings links */}
                  <div className="pt-4 pb-2">
                    <div className="mt-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Support & Settings
                    </div>
                    <NavLink
                      to="/dashboard/support"
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2 mt-1 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-earth/10 text-earth' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <MessageSquare size={18} className="mr-3" />
                      Support
                    </NavLink>
                    <NavLink
                      to="/dashboard/profile"
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2 mt-1 rounded-md text-sm font-medium transition-colors ${
                          isActive 
                            ? 'bg-earth/10 text-earth' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <User size={18} className="mr-3" />
                      Profile Settings
                    </NavLink>
                  </div>
                  
                  {/* Logout button */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-3 py-2 mt-4 w-full rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={18} className="mr-3" />
                    Sign out
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
        
        {/* Main content */}
        <main className="flex-1 md:ml-64 pt-6">
          <div className="px-4 sm:px-6 lg:px-8 pb-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
