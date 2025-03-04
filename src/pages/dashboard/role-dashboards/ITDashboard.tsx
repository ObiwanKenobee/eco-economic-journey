
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ArrowRight, Wifi, BarChart3, Shield, Server, Database } from 'lucide-react';
import Button from '@/components/Button';

// IT Dashboard Components
const ConnectivityOverview = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Smart Connectivity Overview</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-3">
            <Wifi className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Active Wi-Fi Zones</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">78</div>
        <p className="text-sm text-gray-600">Eco-tourism connectivity zones</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Last Month: 65</span>
            <span className="text-xs font-medium text-green-700">+20%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-full mr-3">
            <Server className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">IoT Devices</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">1,245</div>
        <p className="text-sm text-gray-600">Connected conservation devices</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Device types:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Wildlife: 640</span>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Climate: 420</span>
            <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">Security: 185</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-amber-100 rounded-full mr-3">
            <Database className="h-6 w-6 text-amber-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Data Analytics</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">4.8 TB</div>
        <p className="text-sm text-gray-600">Monthly data processed</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Revenue: $128,500</span>
            <span className="text-xs font-medium text-green-700">+32%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-charcoal">Connectivity Zone Status</h2>
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">All Zones</Button>
          <Button variant="outline" size="sm">National Parks</Button>
          <Button variant="outline" size="sm">Eco-Lodges</Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zone Name</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Users</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bandwidth</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Serengeti Central</div>
                <div className="text-xs text-gray-500">Tanzania</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">National Park</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Safari Zone</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-green-800">Active</span>
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">248</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="ml-2 text-xs">65%</span>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="outline" size="sm">Manage</Button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Maasai Mara Lodge</div>
                <div className="text-xs text-gray-500">Kenya</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">Eco-Lodge</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Accommodation</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-green-800">Active</span>
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">182</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <span className="ml-2 text-xs">82%</span>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="outline" size="sm">Manage</Button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Mikumi Wildlife Zone</div>
                <div className="text-xs text-gray-500">Tanzania</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">National Park</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Research Area</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></span>
                  <span className="text-yellow-800">Maintenance</span>
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">56</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="ml-2 text-xs">45%</span>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="outline" size="sm">Manage</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AIAnalytics = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">AI-Powered Tourism Analytics</h1>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-charcoal">Tourism Intelligence Platform</h2>
          <p className="text-gray-600 mt-1">AI-driven insights for conservation and business decisions</p>
        </div>
        <Button variant="secondary" size="sm">Export Reports</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <BarChart3 className="h-5 w-5 text-earth mr-2" />
            <h3 className="font-medium text-charcoal">Visitor Insights</h3>
          </div>
          <div className="text-2xl font-bold text-charcoal mb-1">12,845</div>
          <p className="text-sm text-gray-600">Monthly visitors</p>
          <div className="mt-3 text-xs text-green-600 flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" />
            <span>+18% from last month</span>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <Database className="h-5 w-5 text-earth mr-2" />
            <h3 className="font-medium text-charcoal">Spending Patterns</h3>
          </div>
          <div className="text-2xl font-bold text-charcoal mb-1">$485</div>
          <p className="text-sm text-gray-600">Avg. spend per visitor</p>
          <div className="mt-3 text-xs text-green-600 flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" />
            <span>+12% from last month</span>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <Shield className="h-5 w-5 text-earth mr-2" />
            <h3 className="font-medium text-charcoal">Conservation Impact</h3>
          </div>
          <div className="text-2xl font-bold text-charcoal mb-1">$128k</div>
          <p className="text-sm text-gray-600">Monthly conservation funds</p>
          <div className="mt-3 text-xs text-green-600 flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" />
            <span>+22% from last month</span>
          </div>
        </div>
      </div>
      
      <div className="h-80 w-full bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-gray-400">Tourism Analytics Dashboard Visualization</div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-charcoal mb-4">Active Analytics Customers</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="font-semibold text-blue-700">MT</span>
              </div>
              <div>
                <div className="font-medium text-charcoal">Ministry of Tourism</div>
                <div className="text-xs text-gray-500">Tanzania</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-charcoal">Enterprise Plan</div>
              <div className="text-xs text-earth">$45,000 / year</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="font-semibold text-green-700">SE</span>
              </div>
              <div>
                <div className="font-medium text-charcoal">Serengeti Eco Resorts</div>
                <div className="text-xs text-gray-500">Business Group</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-charcoal">Business Plan</div>
              <div className="text-xs text-earth">$18,000 / year</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                <span className="font-semibold text-amber-700">AB</span>
              </div>
              <div>
                <div className="font-medium text-charcoal">African Biodiversity Institute</div>
                <div className="text-xs text-gray-500">Research Organization</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-charcoal">Research Plan</div>
              <div className="text-xs text-earth">$24,500 / year</div>
            </div>
          </div>
        </div>
        
        <Button variant="default" className="w-full mt-4">View All Customers</Button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-charcoal mb-4">Trending Analytics Reports</h2>
        
        <div className="space-y-4">
          <div className="p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center mb-2">
              <Database className="h-4 w-4 text-earth mr-2" />
              <h3 className="font-medium text-charcoal">Eco-Tourism Seasonal Trends</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Analysis of visitor patterns across seasons with predictive forecasts</p>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">Downloaded 128 times</div>
              <Button variant="outline" size="sm">Preview</Button>
            </div>
          </div>
          
          <div className="p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center mb-2">
              <BarChart3 className="h-4 w-4 text-earth mr-2" />
              <h3 className="font-medium text-charcoal">Conservation ROI Analysis</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Impact of conservation investments on tourism revenue and biodiversity</p>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">Downloaded 97 times</div>
              <Button variant="outline" size="sm">Preview</Button>
            </div>
          </div>
          
          <div className="p-4 border border-gray-100 rounded-lg">
            <div className="flex items-center mb-2">
              <Shield className="h-4 w-4 text-earth mr-2" />
              <h3 className="font-medium text-charcoal">Wildlife Movement Patterns</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Real-time tracking data for conservation planning and safari operations</p>
            <div className="flex justify-between items-center">
              <div className="text-xs text-gray-500">Downloaded 85 times</div>
              <Button variant="outline" size="sm">Preview</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WildlifeSurveillance = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Wildlife AI Surveillance</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-earth/10 rounded-full mr-3">
            <Shield className="h-6 w-6 text-earth" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Active Cameras</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">342</div>
        <p className="text-sm text-gray-600">Wildlife monitoring devices</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Last Month: 285</span>
            <span className="text-xs font-medium text-green-700">+20%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-red-100 rounded-full mr-3">
            <Server className="h-6 w-6 text-red-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Alert Events</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">18</div>
        <p className="text-sm text-gray-600">Security alerts this month</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Alert types:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Poaching: 5</span>
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Trespass: 8</span>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Other: 5</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-full mr-3">
            <Database className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Wildlife Sightings</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">5,842</div>
        <p className="text-sm text-gray-600">AI-identified sightings</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Species tracked: 48</span>
            <Button variant="outline" size="sm">View Data</Button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-charcoal">Recent Security Alerts</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Filter</Button>
          <Button variant="secondary" size="sm">Export</Button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4 bg-red-50">
          <div className="flex items-start">
            <div className="p-2 bg-red-100 rounded-full mr-3">
              <Shield className="h-5 w-5 text-red-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-charcoal">Potential Poaching Activity</h3>
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">High Priority</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Unidentified individuals with weapons detected near elephant herd</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Serengeti North, Sector 4B</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-gray-500">Today, 09:42 AM</div>
              </div>
              <div className="mt-3 flex space-x-2">
                <Button variant="secondary" size="sm">View Footage</Button>
                <Button variant="default" size="sm">Dispatch Response</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="p-2 bg-yellow-100 rounded-full mr-3">
              <Shield className="h-5 w-5 text-yellow-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-charcoal">Unauthorized Vehicle</h3>
                <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Medium Priority</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Unregistered vehicle detected in restricted area during off-hours</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Maasai Mara, Sector 2C</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-gray-500">Yesterday, 11:23 PM</div>
              </div>
              <div className="mt-3 flex space-x-2">
                <Button variant="secondary" size="sm">View Footage</Button>
                <Button variant="outline" size="sm">Dispatch Response</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="p-2 bg-green-100 rounded-full mr-3">
              <Shield className="h-5 w-5 text-green-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-charcoal">Fence Line Integrity Issue</h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Resolved</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Damaged fence section detected by drone surveillance, repair team dispatched</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Amboseli, Northern Boundary</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-gray-500">3 days ago</div>
              </div>
              <div className="mt-3 flex space-x-2">
                <Button variant="secondary" size="sm">View Report</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main IT Dashboard Component
const ITDashboard = () => {
  const { user } = useAuth();
  
  if (!user || user.role !== 'it') {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <Routes>
      <Route path="/" element={<ConnectivityOverview />} />
      <Route path="/analytics" element={<AIAnalytics />} />
      <Route path="/surveillance" element={<WildlifeSurveillance />} />
      <Route path="*" element={<Navigate to="/dashboard/it" replace />} />
    </Routes>
  );
};

export default ITDashboard;
