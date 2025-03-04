
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

export type UserRole = 'tourist' | 'business' | 'financial' | 'it' | 'regulatory' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organization?: string;
  avatarUrl?: string;
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

  // Check for existing session on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('guardian_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('guardian_user');
      }
    }
    setLoading(false);
  }, []);

  // Mock login function - in a real app, this would connect to your backend
  const login = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple mock validation
      if (email === 'admin@guardian-io.com' && password === 'password') {
        const mockUser: User = {
          id: '1',
          name: 'Guardian Admin',
          email: 'admin@guardian-io.com',
          role: 'admin',
          organization: 'Guardian-IO',
          avatarUrl: '/placeholder.svg'
        };
        
        setUser(mockUser);
        localStorage.setItem('guardian_user', JSON.stringify(mockUser));
        toast({
          title: "Login successful",
          description: `Welcome back, ${mockUser.name}!`,
        });
        return;
      }
      
      // More mock users for demonstration
      if (email === 'tourist@example.com' && password === 'password') {
        const mockUser: User = {
          id: '2',
          name: 'Eco Traveler',
          email: 'tourist@example.com',
          role: 'tourist',
          avatarUrl: '/placeholder.svg'
        };
        
        setUser(mockUser);
        localStorage.setItem('guardian_user', JSON.stringify(mockUser));
        toast({
          title: "Login successful",
          description: `Welcome back, ${mockUser.name}!`,
        });
        return;
      }
      
      if (email === 'business@example.com' && password === 'password') {
        const mockUser: User = {
          id: '3',
          name: 'Hotel Manager',
          email: 'business@example.com',
          role: 'business',
          organization: 'Eco Resort & Spa',
          avatarUrl: '/placeholder.svg'
        };
        
        setUser(mockUser);
        localStorage.setItem('guardian_user', JSON.stringify(mockUser));
        toast({
          title: "Login successful",
          description: `Welcome back, ${mockUser.name}!`,
        });
        return;
      }
      
      throw new Error('Invalid credentials');
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

  // Mock register function
  const register = async (name: string, email: string, password: string, role: UserRole, organization?: string) => {
    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simple validation
      if (!email.includes('@')) {
        throw new Error('Invalid email address');
      }
      
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }
      
      // Create new user
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        role,
        organization,
        avatarUrl: '/placeholder.svg'
      };
      
      setUser(newUser);
      localStorage.setItem('guardian_user', JSON.stringify(newUser));
      
      toast({
        title: "Registration successful",
        description: `Welcome to Guardian-IO, ${name}!`,
      });
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

  const logout = () => {
    setUser(null);
    localStorage.removeItem('guardian_user');
    toast({
      title: "Logout successful",
      description: "You have been logged out successfully.",
    });
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
