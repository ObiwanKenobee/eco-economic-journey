
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Error is handled in the AuthContext
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-charcoal mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to your Guardian-IO workspace</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <div className="flex justify-end mt-1">
            <Link to="/auth/forgot-password" className="text-sm text-earth hover:text-earth/80 transition-colors">
              Forgot password?
            </Link>
          </div>
        </div>
        
        <div>
          <Button
            type="submit"
            className="w-full justify-center py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/auth/register" className="text-earth hover:text-earth/80 font-medium transition-colors">
              Create an account
            </Link>
          </p>
        </div>
        
        {/* Demo accounts for easy testing */}
        <div className="border-t border-gray-100 pt-4 mt-6">
          <p className="text-xs text-gray-500 mb-3 text-center">Demo Accounts</p>
          <div className="grid grid-cols-1 gap-2">
            <button
              type="button"
              onClick={() => {
                setEmail('admin@guardian-io.com');
                setPassword('password');
              }}
              className="text-xs py-2 px-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left"
            >
              <div className="font-medium">Admin</div>
              <div className="text-gray-500">admin@guardian-io.com / password</div>
            </button>
            <button
              type="button"
              onClick={() => {
                setEmail('tourist@example.com');
                setPassword('password');
              }}
              className="text-xs py-2 px-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left"
            >
              <div className="font-medium">Tourist</div>
              <div className="text-gray-500">tourist@example.com / password</div>
            </button>
            <button
              type="button"
              onClick={() => {
                setEmail('business@example.com');
                setPassword('password');
              }}
              className="text-xs py-2 px-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left"
            >
              <div className="font-medium">Business</div>
              <div className="text-gray-500">business@example.com / password</div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
