
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ArrowRight, BarChart3, Shield, Server, Users, Globe } from 'lucide-react';
import Button from '@/components/Button';

// Admin Dashboard Components
const SystemOverview = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">System Health & Monitoring</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-full mr-3">
            <Server className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">System Status</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">98.7%</div>
        <p className="text-sm text-gray-600">System uptime this month</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Last Month: 97.2%</span>
            <span className="text-xs font-medium text-green-700">+1.5%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '98.7%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-3">
            <Users className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Active Users</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">28,459</div>
        <p className="text-sm text-gray-600">Currently active in platform</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Distribution by role:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Tourists: 24,218</span>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Business: 3,841</span>
            <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">Other: 400</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-red-100 rounded-full mr-3">
            <Shield className="h-6 w-6 text-red-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Security Alerts</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">7</div>
        <p className="text-sm text-gray-600">Active security incidents</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Last Week: 12</span>
            <span className="text-xs font-medium text-green-700">-41.7%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-charcoal">System Performance</h2>
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">Today</Button>
          <Button variant="secondary" size="sm">This Week</Button>
          <Button variant="secondary" size="sm">This Month</Button>
        </div>
      </div>
      
      <div className="h-80 w-full bg-gray-50 rounded-lg flex items-center justify-center mb-4">
        <div className="text-gray-400">System Performance Chart</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">API Response Time</h3>
          <div className="text-xl font-bold text-charcoal mt-1">87ms</div>
          <div className="text-xs text-green-600 mt-1">-12ms from last week</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Database Load</h3>
          <div className="text-xl font-bold text-charcoal mt-1">42%</div>
          <div className="text-xs text-green-600 mt-1">-5% from last week</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Error Rate</h3>
          <div className="text-xl font-bold text-charcoal mt-1">0.21%</div>
          <div className="text-xs text-green-600 mt-1">-0.05% from last week</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Server Capacity</h3>
          <div className="text-xl font-bold text-charcoal mt-1">68%</div>
          <div className="text-xs text-amber-600 mt-1">+7% from last week</div>
        </div>
      </div>
    </div>
  </div>
);

const EntityManagement = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Partner Entity Management</h1>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-charcoal">Entity Directory</h2>
          <p className="text-gray-600 mt-1">Manage all partner organizations across the ecosystem</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">Filter Entities</Button>
          <Button variant="secondary" size="sm">Add New Entity</Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Organization</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Serengeti Eco Resorts</div>
                <div className="text-xs text-gray-500">eco-hospitality@serengetiresorts.co.tz</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Business</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">Tanzania</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-green-800">Active</span>
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">42</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="secondary" size="sm">Manage</Button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Tanzania Conservation Bank</div>
                <div className="text-xs text-gray-500">admin@tzconservation.bank</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Financial</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">Tanzania</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-green-800">Active</span>
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">26</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="secondary" size="sm">Manage</Button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Kenya Wildlife Authority</div>
                <div className="text-xs text-gray-500">tech@wildlife.go.ke</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Regulatory</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">Kenya</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></span>
                  <span className="text-yellow-800">Onboarding</span>
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">12</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="secondary" size="sm">Manage</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const RevenueAnalytics = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Revenue & Growth Analytics</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-full mr-3">
            <BarChart3 className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Total Revenue</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">$4.2M</div>
        <p className="text-sm text-gray-600">Current fiscal year</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Previous Year: $3.1M</span>
            <span className="text-xs font-medium text-green-700">+35.5%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-3">
            <Globe className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Geographic Reach</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">5</div>
        <p className="text-sm text-gray-600">Countries with active users</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Top countries:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Tanzania: 42%</span>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Kenya: 35%</span>
            <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">Others: 23%</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-amber-100 rounded-full mr-3">
            <ArrowRight className="h-6 w-6 text-amber-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Growth Projection</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">42%</div>
        <p className="text-sm text-gray-600">Projected annual growth</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Previous Projection: 35%</span>
            <span className="text-xs font-medium text-green-700">+7%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-charcoal">Revenue Breakdown</h2>
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">Quarterly</Button>
          <Button variant="secondary" size="sm">Monthly</Button>
          <Button variant="secondary" size="sm">Weekly</Button>
        </div>
      </div>
      
      <div className="h-80 w-full bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-gray-400">Revenue Breakdown Chart</div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-charcoal mb-4">Top Revenue Sources</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div>
              <div className="font-medium text-charcoal">Transaction Fees</div>
              <div className="text-xs text-gray-500">Guardian-Pay network</div>
            </div>
            <div className="text-right">
              <div className="font-medium text-charcoal">$1.8M</div>
              <div className="text-xs text-green-600">+42% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div>
              <div className="font-medium text-charcoal">AI Data Analytics</div>
              <div className="text-xs text-gray-500">Data licensing & subscriptions</div>
            </div>
            <div className="text-right">
              <div className="font-medium text-charcoal">$1.2M</div>
              <div className="text-xs text-green-600">+65% YoY</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div>
              <div className="font-medium text-charcoal">Eco-Certification</div>
              <div className="text-xs text-gray-500">Business verification fees</div>
            </div>
            <div className="text-right">
              <div className="font-medium text-charcoal">$680K</div>
              <div className="text-xs text-green-600">+22% YoY</div>
            </div>
          </div>
        </div>
        
        <Button variant="secondary" className="w-full mt-4">View Detailed Revenue Report</Button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-charcoal mb-4">Growth Opportunities</h2>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center mb-2">
              <BarChart3 className="h-4 w-4 text-earth mr-2" />
              <h3 className="font-medium text-charcoal">Expand to Uganda</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Market analysis shows strong potential for eco-tourism growth</p>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">Potential Revenue: $1.2M annually</div>
              <Button variant="secondary" size="sm">View Analysis</Button>
            </div>
          </div>
          
          <div className="p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center mb-2">
              <Globe className="h-4 w-4 text-earth mr-2" />
              <h3 className="font-medium text-charcoal">Marine Conservation Integration</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Expand platform to include marine tourism opportunities</p>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">Potential Revenue: $850K annually</div>
              <Button variant="secondary" size="sm">View Analysis</Button>
            </div>
          </div>
          
          <div className="p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center mb-2">
              <Server className="h-4 w-4 text-earth mr-2" />
              <h3 className="font-medium text-charcoal">Carbon Market Expansion</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Develop dedicated carbon trading platform for businesses</p>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">Potential Revenue: $2.4M annually</div>
              <Button variant="secondary" size="sm">View Analysis</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Admin Dashboard Component
const AdminDashboard = () => {
  const { user } = useAuth();
  
  if (!user || user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <Routes>
      <Route path="/" element={<SystemOverview />} />
      <Route path="/entities" element={<EntityManagement />} />
      <Route path="/revenue" element={<RevenueAnalytics />} />
      <Route path="*" element={<Navigate to="/dashboard/admin" replace />} />
    </Routes>
  );
};

export default AdminDashboard;
