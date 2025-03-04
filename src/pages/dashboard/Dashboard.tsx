
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import DashboardLayout from './DashboardLayout';
import Overview from './Overview';
import ProfileSettings from './ProfileSettings';
import TouristDashboard from './role-dashboards/TouristDashboard';
import BusinessDashboard from './role-dashboards/BusinessDashboard';
import FinancialDashboard from './role-dashboards/FinancialDashboard';
import ITDashboard from './role-dashboards/ITDashboard';
import RegulatoryDashboard from './role-dashboards/RegulatoryDashboard';
import AdminDashboard from './role-dashboards/AdminDashboard';
import Support from './Support';

const Dashboard = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();
  
  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand">
        <div className="animate-pulse text-earth">Loading...</div>
      </div>
    );
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  
  // Get role-specific dashboard route
  const getRoleDashboardRoute = () => {
    if (!user) return '/dashboard';
    
    switch (user.role) {
      case 'tourist': return '/dashboard/tourist';
      case 'business': return '/dashboard/business';
      case 'financial': return '/dashboard/financial';
      case 'it': return '/dashboard/it';
      case 'regulatory': return '/dashboard/regulatory';
      case 'admin': return '/dashboard/admin';
      default: return '/dashboard';
    }
  };
  
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/support" element={<Support />} />
        
        {/* Role-specific dashboard routes */}
        <Route path="/tourist/*" element={<TouristDashboard />} />
        <Route path="/business/*" element={<BusinessDashboard />} />
        <Route path="/financial/*" element={<FinancialDashboard />} />
        <Route path="/it/*" element={<ITDashboard />} />
        <Route path="/regulatory/*" element={<RegulatoryDashboard />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        
        {/* Redirect to role-specific dashboard based on user role */}
        <Route path="/my-dashboard" element={<Navigate to={getRoleDashboardRoute()} replace />} />
        
        {/* Add more routes based on user roles */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
