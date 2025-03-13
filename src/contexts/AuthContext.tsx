
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { User as SupabaseUser, Session } from "@supabase/supabase-js";
import { trackEvent } from '@/utils/analytics';

export type UserRole = 'tourist' | 'business' | 'financial' | 'it' | 'regulatory' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
  avatarUrl?: string;
}

interface UserProfile {
  name: string;
  role: UserRole;
  organization?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole, organization?: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Transform Supabase user to our User type
  const transformUser = (supabaseUser: SupabaseUser | null, userData?: UserProfile) => {
    if (!supabaseUser) return null;
    
    return {
      id: supabaseUser.id,
      email: supabaseUser.email || '',
      name: userData?.name || supabaseUser.email?.split('@')[0] || 'User',
      role: userData?.role || 'tourist',
      organization: userData?.organization,
      avatarUrl: '/placeholder.svg'
    };
  };

  // Fetch user profile from custom table
  const fetchUserProfile = async (userId: string): Promise<UserProfile | null> => {
    try {
      // Use RPC call instead of direct table query
      const { data, error } = await supabase.rpc('get_user_profile', { user_id: userId });
      
      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
      return null;
    }
  };

  // Check for existing session on initial load
  useEffect(() => {
    const initializeAuth = async () => {
      setLoading(true);
      
      try {
        // Check if we have an active session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          throw sessionError;
        }
        
        if (session) {
          // Get user metadata using our helper function
          const userData = await fetchUserProfile(session.user.id);
          setUser(transformUser(session.user, userData || undefined));
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        toast({
          title: "Authentication Error",
          description: "There was a problem with the authentication system.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    initializeAuth();
    
    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          // Get user metadata
          const userData = await fetchUserProfile(session.user.id);
          setUser(transformUser(session.user, userData || undefined));
          
          // Track sign in event
          trackEvent('user_signed_in');
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          // Track sign out event
          trackEvent('user_signed_out');
        }
      }
    );
    
    // Clean up subscription
    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      // User data is handled by the auth state change listener
      toast({
        title: "Login successful",
        description: `Welcome back!`,
      });
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "An error occurred during login",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole, organization?: string) => {
    setLoading(true);
    
    try {
      // Sign up the user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            role,
            organization
          }
        }
      });
      
      if (error) throw error;
      
      if (data.user) {
        // Store additional user metadata using RPC function
        const { error: profileError } = await supabase.rpc('create_user_profile', {
          user_id: data.user.id,
          user_name: name,
          user_role: role,
          user_organization: organization || null
        });
        
        if (profileError) {
          console.error('Error creating user profile:', profileError);
          toast({
            title: "Warning",
            description: "Account created but profile data could not be saved.",
            variant: "destructive",
          });
        }
        
        // Transform and set user data
        setUser(transformUser(data.user, { name, role, organization }));
        
        toast({
          title: "Registration successful",
          description: `Welcome to Guardian-IO, ${name}!`,
        });
        
        // Track sign up event
        trackEvent('user_signed_up', { role });
      }
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An error occurred during registration",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) throw error;
      
      // User is set to null in the auth state change listener
      toast({
        title: "Logout successful",
        description: "You have been logged out successfully.",
      });
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Logout failed",
        description: error instanceof Error ? error.message : "An error occurred during logout",
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
