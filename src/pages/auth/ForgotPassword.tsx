
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
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
});

type FormData = z.infer<typeof formSchema>;

const ForgotPassword = () => {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Initialize form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });
      
      if (error) throw error;
      
      setIsSuccess(true);
      toast({
        title: "Password reset email sent",
        description: "Check your email for a link to reset your password.",
      });
    } catch (error) {
      console.error('Password reset error:', error);
      toast({
        title: "Password reset failed",
        description: error instanceof Error ? error.message : "Failed to send reset email",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-charcoal mb-2">Forgot Password</h1>
        <p className="text-gray-600">
          {isSuccess 
            ? "Check your email for a reset link" 
            : "Enter your email to receive a password reset link"}
        </p>
      </div>
      
      {!isSuccess ? (
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
            
            <Button 
              type="submit" 
              className="w-full justify-center py-3"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>
        </Form>
      ) : (
        <div className="text-center py-4">
          <div className="bg-green-50 text-green-700 rounded-lg p-4 mb-6">
            Password reset email sent to {form.getValues().email}
          </div>
          <Button 
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="mr-2"
          >
            Try Another Email
          </Button>
        </div>
      )}
      
      <div className="text-center mt-6">
        <Link 
          to="/auth/login" 
          className="inline-flex items-center text-earth hover:text-earth/80 font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
