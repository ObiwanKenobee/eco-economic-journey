
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

// Validation schema
const formSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Initialize form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Error is handled in the AuthContext
    }
  };

  // Demo account handling
  const fillDemoAccount = (email: string, password: string) => {
    form.setValue('email', email);
    form.setValue('password', password);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-charcoal mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to your Guardian-IO workspace</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="your@email.com"
                      className="pl-10 py-3"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <FormControl>
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10 py-3"
                    />
                  </FormControl>
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
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full justify-center py-3"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
          
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
                onClick={() => fillDemoAccount('admin@guardian-io.com', 'password')}
                className="text-xs py-2 px-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left"
              >
                <div className="font-medium">Admin</div>
                <div className="text-gray-500">admin@guardian-io.com / password</div>
              </button>
              <button
                type="button"
                onClick={() => fillDemoAccount('tourist@example.com', 'password')}
                className="text-xs py-2 px-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left"
              >
                <div className="font-medium">Tourist</div>
                <div className="text-gray-500">tourist@example.com / password</div>
              </button>
              <button
                type="button"
                onClick={() => fillDemoAccount('business@example.com', 'password')}
                className="text-xs py-2 px-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-left"
              >
                <div className="font-medium">Business</div>
                <div className="text-gray-500">business@example.com / password</div>
              </button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
