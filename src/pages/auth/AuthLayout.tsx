
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/Button';

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();
  
  // Redirect to dashboard if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-sand">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -right-40 bottom-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 top-1/3 w-80 h-80 bg-savanna/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header with back button */}
      <header className="relative z-10 py-6 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Button href="/" variant="text" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              <span>Back to Homepage</span>
            </Button>
            <div className="flex items-center">
              <a href="/" className="text-xl md:text-2xl font-serif font-semibold tracking-tight text-earth">
                <span className="text-charcoal">The</span> Eco-Economy
              </a>
            </div>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="flex-1 flex justify-center items-center px-6 py-12 relative z-10">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 px-6 text-center text-gray-500 text-sm relative z-10">
        <p>© 2024 Guardian-IO. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
