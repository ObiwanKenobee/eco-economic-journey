
import { supabase } from "@/integrations/supabase/client";
import { UserRole } from "@/contexts/AuthContext";

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  organization?: string;
  created_at?: string;
  updated_at?: string;
}

// Get all users (admin only)
export const getAllUsers = async (): Promise<UserProfile[]> => {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*');
    
    if (error) throw error;
    return data as UserProfile[];
  } catch (error) {
    console.error('Error fetching all users:', error);
    throw error;
  }
};

// Get a specific user profile
export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    return data as UserProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Create a new user profile
export const createUserProfile = async (profile: Omit<UserProfile, 'created_at' | 'updated_at'>): Promise<UserProfile> => {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .insert([profile])
      .select()
      .single();
    
    if (error) throw error;
    return data as UserProfile;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

// Update an existing user profile
export const updateUserProfile = async (userId: string, updates: Partial<Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>>): Promise<UserProfile> => {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data as UserProfile;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Delete a user profile
export const deleteUserProfile = async (userId: string): Promise<void> => {
  try {
    const { error } = await supabase
      .from('user_profiles')
      .delete()
      .eq('id', userId);
    
    if (error) throw error;
  } catch (error) {
    console.error('Error deleting user profile:', error);
    throw error;
  }
};
