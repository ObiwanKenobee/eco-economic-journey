
// API endpoints for user management
import { supabase } from "../src/integrations/supabase/client";

// Utility function to verify admin role
const verifyAdmin = async (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Unauthorized: No token provided');
  }
  
  const token = authHeader.split(' ')[1];
  const { data, error } = await supabase.auth.getUser(token);
  
  if (error || !data.user) {
    throw new Error('Unauthorized: Invalid token');
  }
  
  // Check if user is admin
  const { data: profile, error: profileError } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('id', data.user.id)
    .single();
  
  if (profileError || profile.role !== 'admin') {
    throw new Error('Forbidden: Admin access required');
  }
  
  return data.user;
};

export default async function handler(req, res) {
  try {
    // GET all users (admin only)
    if (req.method === 'GET' && !req.query.id) {
      try {
        await verifyAdmin(req);
        
        const { data, error } = await supabase
          .from('user_profiles')
          .select('*');
        
        if (error) throw error;
        return res.status(200).json(data);
      } catch (error) {
        return res.status(error.message.includes('Unauthorized') ? 401 : 
                        error.message.includes('Forbidden') ? 403 : 500)
                  .json({ error: error.message });
      }
    }
    
    // GET a specific user
    if (req.method === 'GET' && req.query.id) {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', req.query.id)
        .single();
      
      if (error) {
        return res.status(404).json({ error: 'User not found' });
      }
      
      return res.status(200).json(data);
    }
    
    // POST - Create a new user
    if (req.method === 'POST') {
      const { id, name, role, organization } = req.body;
      
      if (!id || !name || !role) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      const { data, error } = await supabase
        .from('user_profiles')
        .insert([{ id, name, role, organization }])
        .select()
        .single();
      
      if (error) {
        return res.status(400).json({ error: error.message });
      }
      
      return res.status(201).json(data);
    }
    
    // PUT - Update a user
    if (req.method === 'PUT' && req.query.id) {
      const { name, role, organization } = req.body;
      const updates = {};
      
      if (name) updates.name = name;
      if (role) updates.role = role;
      if (organization !== undefined) updates.organization = organization;
      
      if (Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'No fields to update provided' });
      }
      
      updates.updated_at = new Date().toISOString();
      
      const { data, error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', req.query.id)
        .select()
        .single();
      
      if (error) {
        return res.status(404).json({ error: 'User not found or update failed' });
      }
      
      return res.status(200).json(data);
    }
    
    // DELETE - Delete a user
    if (req.method === 'DELETE' && req.query.id) {
      try {
        await verifyAdmin(req);
        
        const { error } = await supabase
          .from('user_profiles')
          .delete()
          .eq('id', req.query.id);
        
        if (error) throw error;
        
        return res.status(204).end();
      } catch (error) {
        return res.status(error.message.includes('Unauthorized') ? 401 : 
                        error.message.includes('Forbidden') ? 403 : 500)
                  .json({ error: error.message });
      }
    }
    
    // Method not allowed
    return res.status(405).json({ error: 'Method not allowed' });
    
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
