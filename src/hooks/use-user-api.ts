
import { useState } from 'react';
import { UserRole } from '@/contexts/AuthContext';
import * as api from '@/utils/api';

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  organization?: string;
  created_at?: string;
  updated_at?: string;
}

export function useUserApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getUser = async (userId: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api.getUserProfile(userId);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch user'));
      setLoading(false);
      return null;
    }
  };
  
  const getAllUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const results = await api.getAllUsers();
      setLoading(false);
      return results;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch users'));
      setLoading(false);
      return [];
    }
  };
  
  const createUser = async (profile: Omit<UserProfile, 'created_at' | 'updated_at'>) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api.createUserProfile(profile);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to create user'));
      setLoading(false);
      throw err;
    }
  };
  
  const updateUser = async (userId: string, updates: Partial<Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>>) => {
    setLoading(true);
    setError(null);
    try {
      const result = await api.updateUserProfile(userId, updates);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update user'));
      setLoading(false);
      throw err;
    }
  };
  
  const deleteUser = async (userId: string) => {
    setLoading(true);
    setError(null);
    try {
      await api.deleteUserProfile(userId);
      setLoading(false);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete user'));
      setLoading(false);
      throw err;
    }
  };

  return {
    getUser,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    loading,
    error
  };
}
