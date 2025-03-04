
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button';
import { Check, Eye, EyeOff, Lock, User } from 'lucide-react';

const ProfileSettings = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    organization: user?.organization || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      // In a real app, you would update the user in the context here
    }, 1500);
  };
  
  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setChangePassword(false);
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));
      // In a real app, you would update the user's password here
    }, 1500);
  };
  
  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };
  
  return (
    <div>
      {/* Page header */}
      <div className="pb-5 border-b border-gray-200 mb-6">
        <h1 className="text-2xl font-bold text-charcoal">Profile Settings</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-charcoal">Profile Information</h2>
              {!isEditing && (
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </Button>
              )}
            </div>
            
            {isEditing ? (
              <form onSubmit={handleProfileUpdate}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
                      required
                    />
                  </div>
                  
                  {user?.role !== 'tourist' && (
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
                      />
                    </div>
                  )}
                  
                  <div className="flex gap-3 pt-2">
                    <Button type="submit" disabled={isSaving}>
                      {isSaving ? 'Saving...' : 'Save Changes'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="text" 
                      onClick={() => {
                        setIsEditing(false);
                        setFormData(prev => ({
                          ...prev,
                          name: user?.name || '',
                          email: user?.email || '',
                          organization: user?.organization || '',
                        }));
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start">
                  <User className="w-5 h-5 text-gray-400 mt-0.5 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Name</h3>
                    <p className="text-base text-charcoal">{user?.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="text-base text-charcoal">{user?.email}</p>
                  </div>
                </div>
                
                {user?.organization && (
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Organization</h3>
                      <p className="text-base text-charcoal">{user?.organization}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Role</h3>
                    <p className="text-base text-charcoal capitalize">{user?.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Password section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-charcoal">Password</h2>
              {!changePassword && (
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setChangePassword(true)}
                >
                  Change Password
                </Button>
              )}
            </div>
            
            {changePassword ? (
              <form onSubmit={handlePasswordUpdate}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="currentPassword"
                        name="currentPassword"
                        type={showPassword.current ? "text" : "password"}
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => togglePasswordVisibility('current')}
                      >
                        {showPassword.current ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="newPassword"
                        name="newPassword"
                        type={showPassword.new ? "text" : "password"}
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => togglePasswordVisibility('new')}
                      >
                        {showPassword.new ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword.confirm ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-10 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-earth/50 focus:border-earth transition-all"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => togglePasswordVisibility('confirm')}
                      >
                        {showPassword.confirm ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button type="submit" disabled={isSaving}>
                      {isSaving ? 'Updating...' : 'Update Password'}
                    </Button>
                    <Button 
                      type="button" 
                      variant="text" 
                      onClick={() => {
                        setChangePassword(false);
                        setFormData(prev => ({
                          ...prev,
                          currentPassword: '',
                          newPassword: '',
                          confirmPassword: '',
                        }));
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex items-center">
                <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-gray-600">Your password was last changed never.</p>
                  <p className="text-sm text-gray-500 mt-1">
                    For security reasons, we recommend changing your password regularly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Security & Account info */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-charcoal mb-4">Account Security</h2>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-charcoal">Email Verified</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Your email address has been verified.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-1 rounded-full mr-3">
                  <Lock className="w-4 h-4 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-charcoal">Two-Factor Authentication</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Add an extra layer of security to your account.</p>
                  <Button variant="secondary" size="sm" className="mt-2">
                    Set Up 2FA
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-1 rounded-full mr-3">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-charcoal">Login Activity</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Monitor your account's login activity.</p>
                  <Button variant="secondary" size="sm" className="mt-2">
                    View Activity
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-charcoal mb-4">Account Information</h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-xs font-medium text-gray-500">Account Type</h3>
                <p className="text-sm text-charcoal">
                  {user?.role === 'admin' ? 'Super Admin' : user?.role === 'tourist' ? 'Eco-Traveler' : 'Business Account'}
                </p>
              </div>
              
              <div>
                <h3 className="text-xs font-medium text-gray-500">Registration Date</h3>
                <p className="text-sm text-charcoal">March 4, 2024</p>
              </div>
              
              <div>
                <h3 className="text-xs font-medium text-gray-500">Status</h3>
                <div className="flex items-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-sm text-charcoal">Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
