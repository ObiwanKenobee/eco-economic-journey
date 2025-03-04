
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ArrowRight, BarChart3, CreditCard, FileText, MapPin, Shield } from 'lucide-react';
import Button from '@/components/Button';

// Regulatory Dashboard Components
const EcoTaxOverview = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Eco-Tax Collection Overview</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-full mr-3">
            <CreditCard className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Total Tax Collection</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">$2.4M</div>
        <p className="text-sm text-gray-600">Current fiscal year</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Previous Year: $1.8M</span>
            <span className="text-xs font-medium text-green-700">+33%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-3">
            <BarChart3 className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Distribution Status</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">75%</div>
        <p className="text-sm text-gray-600">Funds successfully distributed</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Distribution by category:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Conservation: 45%</span>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Infrastructure: 30%</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-amber-100 rounded-full mr-3">
            <FileText className="h-6 w-6 text-amber-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Compliance Rate</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">92.4%</div>
        <p className="text-sm text-gray-600">Business tax compliance</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Previous Quarter: 87.8%</span>
            <span className="text-xs font-medium text-green-700">+4.6%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-charcoal">Tax Collection by Region</h2>
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">Quarterly</Button>
          <Button variant="outline" size="sm">Monthly</Button>
          <Button variant="outline" size="sm">Weekly</Button>
        </div>
      </div>
      
      <div className="h-80 w-full bg-gray-50 rounded-lg flex items-center justify-center mb-4">
        <div className="text-gray-400">Regional Tax Collection Chart</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Serengeti Region</h3>
          <div className="text-xl font-bold text-charcoal mt-1">$750,000</div>
          <div className="text-xs text-green-600 mt-1">+22% from last quarter</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Maasai Mara Region</h3>
          <div className="text-xl font-bold text-charcoal mt-1">$620,000</div>
          <div className="text-xs text-green-600 mt-1">+18% from last quarter</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Coastal Region</h3>
          <div className="text-xl font-bold text-charcoal mt-1">$480,000</div>
          <div className="text-xs text-green-600 mt-1">+15% from last quarter</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Other Regions</h3>
          <div className="text-xl font-bold text-charcoal mt-1">$550,000</div>
          <div className="text-xs text-green-600 mt-1">+12% from last quarter</div>
        </div>
      </div>
    </div>
  </div>
);

const ConservationZones = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Geo-Fenced Conservation Zones</h1>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-charcoal">Zone Management</h2>
          <p className="text-gray-600 mt-1">Monitor and manage protected conservation areas</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Filter Zones</Button>
          <Button variant="secondary" size="sm">Add New Zone</Button>
        </div>
      </div>
      
      <div className="h-96 w-full bg-gray-50 rounded-lg flex items-center justify-center mb-6">
        <div className="text-gray-400">Interactive Conservation Zone Map</div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-charcoal">32</div>
          <div className="text-sm text-gray-600">Active Zones</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-charcoal">4.2M</div>
          <div className="text-sm text-gray-600">Hectares Protected</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-charcoal">98.2%</div>
          <div className="text-sm text-gray-600">Boundary Compliance</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-charcoal">12</div>
          <div className="text-sm text-gray-600">Pending Approvals</div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Zone Name</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size (ha)</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Protection Level</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Serengeti Central Reserve</div>
                <div className="text-xs text-gray-500">Tanzania</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">Central Tanzania</td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">850,000</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">High Security</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-green-800">Active</span>
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="outline" size="sm">Manage</Button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Maasai Mara Corridor</div>
                <div className="text-xs text-gray-500">Kenya</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">Southern Kenya</td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">520,000</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Medium Security</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-green-800">Active</span>
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="outline" size="sm">Manage</Button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Coastal Marine Zone</div>
                <div className="text-xs text-gray-500">Tanzania</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">Eastern Coast</td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">180,000</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Marine Protection</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="flex items-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></span>
                  <span className="text-yellow-800">Monitoring</span>
                </span>
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

const InfrastructurePlanning = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Sustainable Infrastructure Planning</h1>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold text-charcoal">Eco-Tourism Infrastructure Projects</h2>
          <p className="text-gray-600 mt-1">Plan and monitor sustainable development</p>
        </div>
        <Button variant="secondary" size="sm">Create New Project</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <MapPin className="h-5 w-5 text-earth mr-2" />
            <h3 className="font-medium text-charcoal">Active Projects</h3>
          </div>
          <div className="text-2xl font-bold text-charcoal mb-1">18</div>
          <p className="text-sm text-gray-600">Currently in development</p>
          <div className="mt-3 text-xs text-blue-600 flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" />
            <span>View all projects</span>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <CreditCard className="h-5 w-5 text-earth mr-2" />
            <h3 className="font-medium text-charcoal">Total Investment</h3>
          </div>
          <div className="text-2xl font-bold text-charcoal mb-1">$85.2M</div>
          <p className="text-sm text-gray-600">Public-private partnerships</p>
          <div className="mt-3 text-xs text-blue-600 flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" />
            <span>Financial details</span>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <FileText className="h-5 w-5 text-earth mr-2" />
            <h3 className="font-medium text-charcoal">Pending Approvals</h3>
          </div>
          <div className="text-2xl font-bold text-charcoal mb-1">7</div>
          <p className="text-sm text-gray-600">Awaiting regulatory approval</p>
          <div className="mt-3 text-xs text-blue-600 flex items-center">
            <ArrowRight className="h-3 w-3 mr-1" />
            <span>Review pending</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="p-2 bg-earth/10 rounded-full mr-3 mt-1">
              <MapPin className="h-5 w-5 text-earth" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-charcoal">Serengeti Solar-Powered Visitor Center</h3>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">In Progress</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">State-of-the-art visitor facility using 100% renewable energy</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Serengeti National Park</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-gray-500">Completion: Q3 2024</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-green-600">$4.2M Budget</div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Project Progress</span>
                  <span>65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-earth h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="p-2 bg-earth/10 rounded-full mr-3 mt-1">
              <MapPin className="h-5 w-5 text-earth" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-charcoal">Sustainable Wildlife Corridors</h3>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Approved</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Development of wildlife-friendly transportation corridors connecting protected areas</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Multiple Regions</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-gray-500">Completion: Q1 2025</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-green-600">$12.8M Budget</div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Project Progress</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-earth h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="p-2 bg-earth/10 rounded-full mr-3 mt-1">
              <MapPin className="h-5 w-5 text-earth" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-charcoal">Eco-Lodge Wastewater Treatment</h3>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pending Review</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Advanced wastewater treatment systems for eco-lodges in sensitive habitats</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Coastal Region</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-gray-500">Estimated Completion: Q4 2024</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-green-600">$3.5M Proposed Budget</div>
              </div>
              <div className="mt-3 flex space-x-2">
                <Button variant="secondary" size="sm">Review Proposal</Button>
                <Button variant="outline" size="sm">Request Changes</Button>
                <Button variant="default" size="sm">Approve</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LawEnforcement = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Law Enforcement & Wildlife Protection</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-red-100 rounded-full mr-3">
            <Shield className="h-6 w-6 text-red-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Active Incidents</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">12</div>
        <p className="text-sm text-gray-600">Requiring intervention</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Last Month: 18</span>
            <span className="text-xs font-medium text-green-700">-33%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '67%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-full mr-3">
            <Shield className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Rangers Deployed</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">348</div>
        <p className="text-sm text-gray-600">Active field personnel</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Deployment areas:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Serengeti: 145</span>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Maasai: 120</span>
            <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">Others: 83</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-3">
            <BarChart3 className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Case Resolution</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">85%</div>
        <p className="text-sm text-gray-600">Successful case resolution</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Last Year: 72%</span>
            <span className="text-xs font-medium text-green-700">+13%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-charcoal">Recent Enforcement Actions</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">Filter</Button>
          <Button variant="secondary" size="sm">Export Report</Button>
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
                <h3 className="font-medium text-charcoal">Suspected Poaching Activity</h3>
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">High Priority</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Multiple individuals detected with weapons near rhino habitat</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Serengeti North-East</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-gray-500">Reported: Today, 08:15 AM</div>
              </div>
              <div className="mt-3 flex space-x-2">
                <Button variant="secondary" size="sm">View Intelligence</Button>
                <Button variant="default" size="sm">Deploy Response Team</Button>
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
                <h3 className="font-medium text-charcoal">Successful Enforcement Operation</h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Resolved</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Apprehended 3 individuals attempting to smuggle ivory, confiscated weapons and contraband</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Amboseli Region</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-gray-500">Completed: Yesterday, 15:30 PM</div>
              </div>
              <div className="mt-3 flex space-x-2">
                <Button variant="secondary" size="sm">View Full Report</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="p-2 bg-amber-100 rounded-full mr-3">
              <Shield className="h-5 w-5 text-amber-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-charcoal">Illegal Logging Activity</h3>
                <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">Under Investigation</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Satellite detected clearing activity in protected forest, investigation team dispatched</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Western Forest Reserve</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-gray-500">Detected: 2 days ago</div>
              </div>
              <div className="mt-3 flex space-x-2">
                <Button variant="secondary" size="sm">View Satellite Data</Button>
                <Button variant="outline" size="sm">Investigation Status</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Regulatory Dashboard Component
const RegulatoryDashboard = () => {
  const { user } = useAuth();
  
  if (!user || user.role !== 'regulatory') {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <Routes>
      <Route path="/" element={<EcoTaxOverview />} />
      <Route path="/conservation-zones" element={<ConservationZones />} />
      <Route path="/infrastructure" element={<InfrastructurePlanning />} />
      <Route path="/enforcement" element={<LawEnforcement />} />
      <Route path="*" element={<Navigate to="/dashboard/regulatory" replace />} />
    </Routes>
  );
};

export default RegulatoryDashboard;
