
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BarChart3, Building, Calendar, CreditCard, Shield, Users } from 'lucide-react';
import Button from '@/components/Button';

// Business Dashboard Components
const BusinessProfile = () => {
  const { user } = useAuth();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-charcoal mb-6">Business Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-charcoal">Organization Information</h2>
              <Button variant="secondary" size="sm">Edit Profile</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Business Name</h3>
                <p className="text-charcoal">{user?.organization || 'Eco Resort & Spa'}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Business Type</h3>
                <p className="text-charcoal">Eco-Tourism Accommodation</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Location</h3>
                <p className="text-charcoal">Serengeti National Park, Tanzania</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Business Size</h3>
                <p className="text-charcoal">Medium (25-50 employees)</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Established</h3>
                <p className="text-charcoal">2018</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-1">Website</h3>
                <p className="text-earth">www.eco-resort-spa.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Eco-Certifications</h2>
            
            <div className="space-y-4">
              <div className="flex items-start border-b border-gray-100 pb-4">
                <div className="p-2 bg-green-100 rounded-full mr-3 mt-1">
                  <Shield className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal">Guardian-Wild Certified</h3>
                  <p className="text-sm text-gray-600 mt-1">Highest standard of eco-tourism practices and conservation contributions</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500">Issued: Jan 2024</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-green-600">Valid until: Jan 2026</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start pb-4 border-b border-gray-100">
                <div className="p-2 bg-blue-100 rounded-full mr-3 mt-1">
                  <Shield className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal">Carbon Neutral Operations</h3>
                  <p className="text-sm text-gray-600 mt-1">Zero carbon footprint through offsetting and renewable energy</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500">Issued: Mar 2023</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-green-600">Valid until: Mar 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-amber-100 rounded-full mr-3 mt-1">
                  <Shield className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal">Community Partnership Excellence</h3>
                  <p className="text-sm text-gray-600 mt-1">Exceptional integration with local communities and economic support</p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-gray-500">Issued: Nov 2023</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs text-green-600">Valid until: Nov 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-charcoal mb-4">Conservation Impact</h2>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Total Contribution</span>
                <span className="font-medium text-charcoal">$24,750</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2 mb-4">
                <div className="bg-earth h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="text-xs text-gray-500">65% of annual target ($38,000)</div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <Shield className="h-4 w-4 text-green-700" />
                  </div>
                  <span className="text-sm text-charcoal">Wildlife Protection</span>
                </div>
                <span className="text-sm font-medium text-charcoal">$12,375</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <Users className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-sm text-charcoal">Community Support</span>
                </div>
                <span className="text-sm font-medium text-charcoal">$8,662</span>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                    <BarChart3 className="h-4 w-4 text-amber-700" />
                  </div>
                  <span className="text-sm text-charcoal">Conservation Research</span>
                </div>
                <span className="text-sm font-medium text-charcoal">$3,713</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-charcoal mb-4">Business Health</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Eco-Certification Status</span>
                  <span className="text-sm font-medium text-green-600">Active</span>
                </div>
                <div className="bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Guardian-Pay Integration</span>
                  <span className="text-sm font-medium text-green-600">Connected</span>
                </div>
                <div className="bg-gray-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Customer Satisfaction</span>
                  <span className="text-sm font-medium text-charcoal">4.8/5.0</span>
                </div>
                <div className="bg-gray-100 rounded-full h-2">
                  <div className="bg-earth h-2 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Carbon Neutrality</span>
                  <span className="text-sm font-medium text-amber-600">In Progress</span>
                </div>
                <div className="bg-gray-100 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerManagement = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Customer Management</h1>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-charcoal">Active Bookings</h2>
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm">Filter</Button>
          <Button variant="secondary" size="sm">Export</Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left font-medium text-gray-500 pb-3 pl-3">Guest Name</th>
              <th className="text-left font-medium text-gray-500 pb-3">Booking Type</th>
              <th className="text-left font-medium text-gray-500 pb-3">Dates</th>
              <th className="text-left font-medium text-gray-500 pb-3">Amount</th>
              <th className="text-left font-medium text-gray-500 pb-3">Status</th>
              <th className="text-left font-medium text-gray-500 pb-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 pl-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-earth text-white flex items-center justify-center mr-2">JD</div>
                  <div>John Doe</div>
                </div>
              </td>
              <td className="py-3">Luxury Eco Suite</td>
              <td className="py-3">Jun 15-20, 2024</td>
              <td className="py-3 font-medium">$1,250</td>
              <td className="py-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Confirmed</span>
              </td>
              <td className="py-3">
                <Button variant="secondary" size="sm">View Details</Button>
              </td>
            </tr>
            
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 pl-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2">AS</div>
                  <div>Anna Smith</div>
                </div>
              </td>
              <td className="py-3">Safari Package</td>
              <td className="py-3">Jun 18-25, 2024</td>
              <td className="py-3 font-medium">$2,400</td>
              <td className="py-3">
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Pending Payment</span>
              </td>
              <td className="py-3">
                <Button variant="secondary" size="sm">View Details</Button>
              </td>
            </tr>
            
            <tr className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 pl-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center mr-2">RT</div>
                  <div>Robert Thompson</div>
                </div>
              </td>
              <td className="py-3">Conservation Experience</td>
              <td className="py-3">Jun 22, 2024</td>
              <td className="py-3 font-medium">$350</td>
              <td className="py-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Confirmed</span>
              </td>
              <td className="py-3">
                <Button variant="secondary" size="sm">View Details</Button>
              </td>
            </tr>
            
            <tr className="hover:bg-gray-50">
              <td className="py-3 pl-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center mr-2">EJ</div>
                  <div>Emma Johnson</div>
                </div>
              </td>
              <td className="py-3">Standard Eco Room</td>
              <td className="py-3">Jun 25-30, 2024</td>
              <td className="py-3 font-medium">$875</td>
              <td className="py-3">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Confirmed</span>
              </td>
              <td className="py-3">
                <Button variant="secondary" size="sm">View Details</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-charcoal mb-4">Customer Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-blue-100 rounded-full mr-3">
              <Users className="h-5 w-5 text-blue-700" />
            </div>
            <h3 className="text-sm font-medium text-gray-600">Total Customers</h3>
          </div>
          <p className="text-2xl font-bold text-charcoal">1,287</p>
          <div className="text-xs text-green-600 mt-1">↑ 12% from last month</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-earth/20 rounded-full mr-3">
              <BarChart3 className="h-5 w-5 text-earth" />
            </div>
            <h3 className="text-sm font-medium text-gray-600">Repeat Booking Rate</h3>
          </div>
          <p className="text-2xl font-bold text-charcoal">38%</p>
          <div className="text-xs text-green-600 mt-1">↑ 5% from last month</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-amber-100 rounded-full mr-3">
              <CreditCard className="h-5 w-5 text-amber-700" />
            </div>
            <h3 className="text-sm font-medium text-gray-600">Avg. Booking Value</h3>
          </div>
          <p className="text-2xl font-bold text-charcoal">$950</p>
          <div className="text-xs text-green-600 mt-1">↑ 8% from last month</div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-charcoal mb-3">Customer Demographics</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-gray-500">Demographics Chart Placeholder</div>
        </div>
      </div>
    </div>
  </div>
);

const Analytics = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Business Analytics</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-earth/10 rounded-full mr-3">
            <CreditCard className="h-5 w-5 text-earth" />
          </div>
          <h2 className="text-sm font-medium text-gray-600">Monthly Revenue</h2>
        </div>
        <div className="text-2xl font-bold text-charcoal">$12,450</div>
        <div className="flex items-center mt-2">
          <span className="text-xs text-green-600 mr-1">↑ 18%</span>
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-green-100 rounded-full mr-3">
            <Building className="h-5 w-5 text-green-700" />
          </div>
          <h2 className="text-sm font-medium text-gray-600">Occupancy Rate</h2>
        </div>
        <div className="text-2xl font-bold text-charcoal">78%</div>
        <div className="flex items-center mt-2">
          <span className="text-xs text-green-600 mr-1">↑ 5%</span>
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-blue-100 rounded-full mr-3">
            <Shield className="h-5 w-5 text-blue-700" />
          </div>
          <h2 className="text-sm font-medium text-gray-600">Conservation Impact</h2>
        </div>
        <div className="text-2xl font-bold text-charcoal">$3,735</div>
        <div className="flex items-center mt-2">
          <span className="text-xs text-green-600 mr-1">↑ 18%</span>
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center mb-3">
          <div className="p-2 bg-amber-100 rounded-full mr-3">
            <Users className="h-5 w-5 text-amber-700" />
          </div>
          <h2 className="text-sm font-medium text-gray-600">New Customers</h2>
        </div>
        <div className="text-2xl font-bold text-charcoal">57</div>
        <div className="flex items-center mt-2">
          <span className="text-xs text-red-600 mr-1">↓ 3%</span>
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-charcoal mb-4">Revenue Trends</h2>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <div className="text-gray-500">Revenue Chart Placeholder</div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-earth rounded-full mr-2"></div>
            <span className="text-xs text-gray-600">Total Revenue</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-xs text-gray-600">Conservation Contribution</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-xs text-gray-600">Operational Costs</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-charcoal mb-4">Booking Channels</h2>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <div className="text-gray-500">Channels Chart Placeholder</div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-earth rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">Direct Website</span>
            </div>
            <span className="text-xs font-medium">42%</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">Guardian-IO Platform</span>
            </div>
            <span className="text-xs font-medium">35%</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">OTA Partners</span>
            </div>
            <span className="text-xs font-medium">23%</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-charcoal">Eco-Tourism Market Insights</h2>
        <Button variant="secondary" size="sm">View Full Report</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-100 rounded-lg p-4">
          <h3 className="font-medium text-charcoal mb-2">Market Growth</h3>
          <p className="text-sm text-gray-600 mb-3">Eco-tourism in your region is growing at 15% annually, outpacing traditional tourism.</p>
          <div className="text-xs text-earth">View trend analysis →</div>
        </div>
        
        <div className="border border-gray-100 rounded-lg p-4">
          <h3 className="font-medium text-charcoal mb-2">Competitor Analysis</h3>
          <p className="text-sm text-gray-600 mb-3">Your property ranks in the top 20% of eco-certified accommodations in the region.</p>
          <div className="text-xs text-earth">View competitive positioning →</div>
        </div>
        
        <div className="border border-gray-100 rounded-lg p-4">
          <h3 className="font-medium text-charcoal mb-2">Traveler Preferences</h3>
          <p className="text-sm text-gray-600 mb-3">85% of eco-travelers prioritize conservation impact when booking accommodations.</p>
          <div className="text-xs text-earth">View consumer insights →</div>
        </div>
      </div>
    </div>
  </div>
);

const BookingCalendar = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Booking Calendar</h1>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-charcoal">June 2024</h2>
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="sm">Today</Button>
          <div className="flex">
            <Button variant="secondary" size="sm" className="rounded-r-none">←</Button>
            <Button variant="secondary" size="sm" className="rounded-l-none">→</Button>
          </div>
          <Button variant="secondary" size="sm">Month</Button>
        </div>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-7 bg-gray-50 border-b">
          <div className="p-2 text-sm font-medium text-gray-500 text-center">Sun</div>
          <div className="p-2 text-sm font-medium text-gray-500 text-center">Mon</div>
          <div className="p-2 text-sm font-medium text-gray-500 text-center">Tue</div>
          <div className="p-2 text-sm font-medium text-gray-500 text-center">Wed</div>
          <div className="p-2 text-sm font-medium text-gray-500 text-center">Thu</div>
          <div className="p-2 text-sm font-medium text-gray-500 text-center">Fri</div>
          <div className="p-2 text-sm font-medium text-gray-500 text-center">Sat</div>
        </div>
        
        <div className="grid grid-cols-7 grid-rows-5 h-[30rem]">
          {/* Week 1 */}
          <div className="border-r border-b p-1 text-gray-400 text-sm">26</div>
          <div className="border-r border-b p-1 text-gray-400 text-sm">27</div>
          <div className="border-r border-b p-1 text-gray-400 text-sm">28</div>
          <div className="border-r border-b p-1 text-gray-400 text-sm">29</div>
          <div className="border-r border-b p-1 text-gray-400 text-sm">30</div>
          <div className="border-r border-b p-1 text-gray-400 text-sm">31</div>
          <div className="border-r border-b p-1">1</div>
          
          {/* Week 2 */}
          <div className="border-r border-b p-1">2</div>
          <div className="border-r border-b p-1">3</div>
          <div className="border-r border-b p-1">4</div>
          <div className="border-r border-b p-1">5</div>
          <div className="border-r border-b p-1">6</div>
          <div className="border-r border-b p-1">7</div>
          <div className="border-r border-b p-1">8</div>
          
          {/* Week 3 */}
          <div className="border-r border-b p-1">9</div>
          <div className="border-r border-b p-1">10</div>
          <div className="border-r border-b p-1">11</div>
          <div className="border-r border-b p-1">12</div>
          <div className="border-r border-b p-1">13</div>
          <div className="border-r border-b p-1">14</div>
          <div className="border-r border-b p-1">15</div>
          
          {/* Week 4 */}
          <div className="border-r border-b p-1">16</div>
          <div className="border-r border-b p-1">17</div>
          <div className="border-r border-b p-1 relative">
            18
            <div className="absolute bottom-0 left-0 right-0 bg-earth text-white text-xs p-1 mx-1 rounded truncate">
              4 bookings
            </div>
          </div>
          <div className="border-r border-b p-1 relative">
            19
            <div className="absolute bottom-0 left-0 right-0 bg-earth text-white text-xs p-1 mx-1 rounded truncate">
              6 bookings
            </div>
          </div>
          <div className="border-r border-b p-1 relative">
            20
            <div className="absolute bottom-0 left-0 right-0 bg-earth text-white text-xs p-1 mx-1 rounded truncate">
              5 bookings
            </div>
          </div>
          <div className="border-r border-b p-1 relative">
            21
            <div className="absolute bottom-0 left-0 right-0 bg-blue-500 text-white text-xs p-1 mx-1 rounded truncate">
              2 bookings
            </div>
          </div>
          <div className="border-r border-b p-1">22</div>
          
          {/* Week 5 */}
          <div className="border-r border-b p-1">23</div>
          <div className="border-r border-b p-1">24</div>
          <div className="border-r border-b p-1">25</div>
          <div className="border-r border-b p-1 relative">
            26
            <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-xs p-1 mx-1 rounded truncate">
              1 booking
            </div>
          </div>
          <div className="border-r border-b p-1 relative">
            27
            <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-xs p-1 mx-1 rounded truncate">
              3 bookings
            </div>
          </div>
          <div className="border-r border-b p-1">28</div>
          <div className="border-r border-b p-1">29</div>
          
          {/* Calendar legend */}
          <div className="col-span-7 border-t-0 p-3 flex items-center justify-end space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-earth rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">High Occupancy (&gt;75%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">Medium Occupancy (50-75%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-600">Low Occupancy (&lt;50%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-charcoal mb-4">Upcoming Events</h2>
      
      <div className="space-y-4">
        <div className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="p-2 bg-earth/10 rounded-full mr-3 mt-1">
            <Calendar className="h-5 w-5 text-earth" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-charcoal">Wildlife Conservation Week</h3>
              <span className="text-xs bg-earth/10 text-earth px-2 py-1 rounded-full">Special Event</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">A week of special conservation activities for guests</p>
            <div className="flex items-center mt-2">
              <div className="text-xs text-gray-500">June 18-25, 2024</div>
              <div className="mx-2 text-gray-300">•</div>
              <div className="text-xs text-blue-600">15 bookings</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="p-2 bg-earth/10 rounded-full mr-3 mt-1">
            <Calendar className="h-5 w-5 text-earth" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-charcoal">Facility Maintenance</h3>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Internal</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Scheduled maintenance for solar panel system</p>
            <div className="flex items-center mt-2">
              <div className="text-xs text-gray-500">June 27, 2024</div>
              <div className="mx-2 text-gray-300">•</div>
              <div className="text-xs text-amber-600">Limited bookings</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="p-2 bg-earth/10 rounded-full mr-3 mt-1">
            <Calendar className="h-5 w-5 text-earth" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium text-charcoal">Local Community Market</h3>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Community</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Weekly market showcasing local artisans and products</p>
            <div className="flex items-center mt-2">
              <div className="text-xs text-gray-500">Every Saturday, 9am-2pm</div>
              <div className="mx-2 text-gray-300">•</div>
              <div className="text-xs text-green-600">Open to all guests</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Business Dashboard Component
const BusinessDashboard = () => {
  const { user } = useAuth();
  
  if (!user || user.role !== 'business') {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <Routes>
      <Route path="/" element={<BusinessProfile />} />
      <Route path="/customers" element={<CustomerManagement />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/calendar" element={<BookingCalendar />} />
      <Route path="*" element={<Navigate to="/dashboard/business" replace />} />
    </Routes>
  );
};

export default BusinessDashboard;
