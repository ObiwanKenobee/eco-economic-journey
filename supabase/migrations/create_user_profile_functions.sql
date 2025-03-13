
-- Create user_profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  organization TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on the table
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to see only their own profile
CREATE POLICY "Users can view their own profile" 
  ON public.user_profiles 
  FOR SELECT 
  USING (auth.uid() = id);

-- Create policy to allow users to update their own profile
CREATE POLICY "Users can update their own profile" 
  ON public.user_profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

-- Create function to get user profile
CREATE OR REPLACE FUNCTION public.get_user_profile(user_id UUID)
RETURNS TABLE (
  name TEXT,
  role TEXT,
  organization TEXT
) LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  RETURN QUERY
  SELECT 
    up.name,
    up.role,
    up.organization
  FROM public.user_profiles up
  WHERE up.id = user_id;
END;
$$;

-- Create function to create user profile
CREATE OR REPLACE FUNCTION public.create_user_profile(
  user_id UUID,
  user_name TEXT,
  user_role TEXT,
  user_organization TEXT
)
RETURNS VOID LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, name, role, organization)
  VALUES (user_id, user_name, user_role, user_organization);
END;
$$;
