
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { 
  BarChart3, Building, Calendar, CreditCard, Shield, Users, Leaf, 
  Globe, Radio, Zap, PieChart, TrendingUp, PanelTop, LineChart, 
  Award, MapPin, Settings, Bell, ThumbsUp, RefreshCw
} from 'lucide-react';
import Button from '@/components/Button';

// Business Dashboard Components
const BusinessProfile = () => {
  const { user } = useAuth();
  const [certificateProgress, setCertificateProgress] = useState(85);
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-charcoal">Business Command Center</h1>
        <p className="text-earth mt-2">Your eco-tourism hub for sustainable growth and conservation impact</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-charcoal">Organization Information</h2>
                <p className="text-sm text-gray-500">Guardian-Wild Certified Business</p>
              </div>
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
            <h2 className="text-xl font-semibold text-charcoal mb-4">Guardian-Wild Certification Status</h2>
            
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-charcoal">Certification Progress</span>
                <span className="text-sm font-medium text-earth">{certificateProgress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-earth to-forest rounded-full" 
                  style={{ width: `${certificateProgress}%` }}
                ></div>
              </div>
            </div>
            
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

      {/* AI-Driven Eco-Commerce Suite Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">AI-Driven Eco-Commerce Suite</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mr-3">
                <TrendingUp className="h-5 w-5 text-forest" />
              </div>
              <h3 className="font-medium">Dynamic Pricing</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">AI optimizes your rates based on demand, occupancy & conservation impact.</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-green-600">12% Revenue Increase</span>
              <Button variant="outline" size="sm">Adjust Settings</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-earth/10 flex items-center justify-center mr-3">
                <Globe className="h-5 w-5 text-earth" />
              </div>
              <h3 className="font-medium">Sustainable Booking</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Show guests their conservation impact with every booking.</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-green-600">94% Guest Approval</span>
              <Button variant="outline" size="sm">Manage Impact</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-savanna/10 flex items-center justify-center mr-3">
                <CreditCard className="h-5 w-5 text-savanna" />
              </div>
              <h3 className="font-medium">Guardian-Pay</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Process eco-verified payments with lower transaction fees.</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-green-600">1.2% Fee vs 2.9%</span>
              <Button variant="outline" size="sm">Payment Settings</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mr-3">
                <Award className="h-5 w-5 text-forest" />
              </div>
              <h3 className="font-medium">Wildlife Loyalty</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Reward customers with wildlife-backed points and experiences.</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-green-600">36% Higher Retention</span>
              <Button variant="outline" size="sm">Loyalty Program</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Eco-Certification Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">Smart Eco-Certification & Compliance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-green-700" />
              </div>
              <h3 className="font-medium">Eco-Certification Status</h3>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Water Usage</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Excellent</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2 mb-3">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Energy Efficiency</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Excellent</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2 mb-3">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
              
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Waste Reduction</span>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Good</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>
            
            <Button variant="primary" size="sm" className="w-full">View Full Certification Details</Button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Leaf className="h-5 w-5 text-blue-700" />
              </div>
              <h3 className="font-medium">Carbon Offset Tracking</h3>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Total Carbon Offset</span>
                <span className="font-medium text-charcoal">382 Tonnes</span>
              </div>
              <div className="bg-gray-100 rounded-full h-2 mb-3">
                <div className="bg-forest h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-forest rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Reforestation</span>
                  </div>
                  <span className="text-xs font-medium">210 tonnes</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-earth rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Renewable Energy</span>
                  </div>
                  <span className="text-xs font-medium">142 tonnes</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-savanna rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Ocean Conservation</span>
                  </div>
                  <span className="text-xs font-medium">30 tonnes</span>
                </div>
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full">Generate ESG Report</Button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                <Bell className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="font-medium">Regulatory Compliance Alerts</h3>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="p-3 border border-gray-100 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                  <h4 className="text-sm font-medium">Eco-Tourism Tax Rate Update</h4>
                </div>
                <p className="text-xs text-gray-600 mt-1">New conservation fee structure effective Jul 1. Action required before Jun 15.</p>
              </div>
              
              <div className="p-3 border border-gray-100 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <h4 className="text-sm font-medium">Water Usage Compliance</h4>
                </div>
                <p className="text-xs text-gray-600 mt-1">Your property exceeds conservation requirements by 22%. No action needed.</p>
              </div>
              
              <div className="p-3 border border-gray-100 rounded-lg">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <h4 className="text-sm font-medium">Wildlife Proximity Guidelines</h4>
                </div>
                <p className="text-xs text-gray-600 mt-1">Updated safe distance regulations for safari operations now available.</p>
              </div>
            </div>
            
            <Button variant="outline" size="sm" className="w-full">View All Alerts</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomerManagement = () => {
  // AI wildlife recommendations state
  const [animalSightings, setAnimalSightings] = useState([
    { animal: 'Lion Pride', location: 'North Savanna', probability: 87, lastSeen: '2 hours ago' },
    { animal: 'Elephant Herd', location: 'Eastern Waterhole', probability: 92, lastSeen: '1 hour ago' },
    { animal: 'Leopard', location: 'Southern Acacia Grove', probability: 65, lastSeen: '4 hours ago' }
  ]);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-charcoal">Guardian-Wild Guest Experience</h1>
        <p className="text-earth mt-2">Create unforgettable eco-experiences for your guests</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-charcoal">Wildlife Concierge AI</h2>
                <p className="text-sm text-gray-500">Provide real-time wildlife tracking for optimal safari experiences</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm"><RefreshCw className="h-4 w-4 mr-1" /> Refresh</Button>
                <Button variant="primary" size="sm">Send to Guests</Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left font-medium text-gray-500 pb-3">Wildlife</th>
                    <th className="text-left font-medium text-gray-500 pb-3">Location</th>
                    <th className="text-left font-medium text-gray-500 pb-3">Probability</th>
                    <th className="text-left font-medium text-gray-500 pb-3">Last Seen</th>
                    <th className="text-left font-medium text-gray-500 pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {animalSightings.map((sighting, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3">
                        <div className="font-medium">{sighting.animal}</div>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-earth mr-1" />
                          {sighting.location}
                        </div>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="w-12 bg-gray-100 rounded-full h-2 mr-2">
                            <div 
                              className={`h-2 rounded-full ${sighting.probability > 80 ? 'bg-green-500' : 'bg-amber-500'}`}
                              style={{ width: `${sighting.probability}%` }}
                            ></div>
                          </div>
                          <span>{sighting.probability}%</span>
                        </div>
                      </td>
                      <td className="py-3">{sighting.lastSeen}</td>
                      <td className="py-3">
                        <Button variant="outline" size="sm">Book Safari</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
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
                    <th className="text-left font-medium text-gray-500 pb-3">Conservation</th>
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
                      <div className="flex items-center">
                        <Leaf className="h-4 w-4 text-green-600 mr-1" />
                        <span>$125</span>
                      </div>
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
                      <div className="flex items-center">
                        <Leaf className="h-4 w-4 text-green-600 mr-1" />
                        <span>$240</span>
                      </div>
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
                      <div className="flex items-center">
                        <Leaf className="h-4 w-4 text-green-600 mr-1" />
                        <span>$70</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <Button variant="secondary" size="sm">View Details</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-charcoal mb-4">Live Conservation Impact</h2>
            
            <div className="bg-earth/5 rounded-lg p-4 mb-4 border border-earth/10">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full bg-earth/20 flex items-center justify-center mr-3">
                  <Leaf className="h-5 w-5 text-earth" />
                </div>
                <div>
                  <h3 className="font-medium">Guest Impact Dashboard</h3>
                  <p className="text-xs text-gray-600">Real-time conservation metrics for guests</p>
                </div>
              </div>
              
              <div className="space-y-2 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Trees Planted</span>
                  <span className="text-sm font-medium">328</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Water Conserved</span>
                  <span className="text-sm font-medium">17,420 Liters</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Wildlife Protected</span>
                  <span className="text-sm font-medium">42 Animals</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Carbon Offset</span>
                  <span className="text-sm font-medium">86 tonnes</span>
                </div>
              </div>
              
              <Button variant="primary" size="sm" className="w-full mt-3">Share With Guests</Button>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-lg p-4">
                <h3 className="font-medium text-charcoal mb-2">Guardian-IO Verified Reviews</h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.8/5.0 (146 reviews)</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">AI has filtered 28 fake reviews this month</p>
                <Button variant="outline" size="sm">View All Reviews</Button>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4">
                <h3 className="font-medium text-charcoal mb-2">Exclusive Eco-Experiences</h3>
                <p className="text-sm text-gray-600 mb-2">Create and sell unique conservation experiences</p>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between items-center text-sm">
                    <span>Rhino Tracking Tour</span>
                    <span className="font-medium">$420</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Reforestation Day</span>
                    <span className="font-medium">$150</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Conservation Dinner</span>
                    <span className="font-medium">$95</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">Manage Experiences</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Analytics = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-charcoal">Financial & Revenue Intelligence</h1>
        <p className="text-earth mt-2">Optimize your eco-business performance with AI-powered insights</p>
      </div>
      
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-charcoal">Automated Profit Distribution</h2>
              <p className="text-sm text-gray-500">AI allocation of profits to conservation funds</p>
            </div>
            <Button variant="outline" size="sm">Adjust Settings</Button>
          </div>
          
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <div className="text-gray-500">Profit Distribution Chart</div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-gray-100 rounded-lg p-3">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Business Operations</h3>
              <div className="text-xl font-bold text-charcoal">65%</div>
              <div className="text-xs text-gray-500 mt-1">$8,093 this month</div>
            </div>
            
            <div className="border border-earth/20 bg-earth/5 rounded-lg p-3">
              <h3 className="text-sm font-medium text-earth mb-1">Conservation Fund</h3>
              <div className="text-xl font-bold text-charcoal">25%</div>
              <div className="text-xs text-gray-500 mt-1">$3,113 this month</div>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-3">
              <h3 className="text-sm font-medium text-gray-600 mb-1">Community Support</h3>
              <div className="text-xl font-bold text-charcoal">10%</div>
              <div className="text-xs text-gray-500 mt-1">$1,245 this month</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-charcoal">Revenue Forecasting</h2>
            <Button variant="outline" size="sm">View Details</Button>
          </div>
          
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            <div className="text-gray-500">Revenue Forecast Chart</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">July 2024 (Estimated)</span>
              <span className="text-sm font-medium text-charcoal">$14,250</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">High Season Boost</span>
              <span className="text-sm font-medium text-green-600">+22%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Conservation Premium</span>
              <span className="text-sm font-medium text-green-600">+8%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Annual Projection</span>
              <span className="text-sm font-medium text-charcoal">$165,750</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-charcoal">Eco-Finance Dashboard</h2>
              <p className="text-sm text-gray-500">Sustainable investment opportunities</p>
            </div>
            <Button variant="outline" size="sm">View Portfolio</Button>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mr-3">
                  <Leaf className="h-5 w-5 text-forest" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal">Wildlife-Backed Bonds</h3>
                  <p className="text-xs text-gray-600">Projected yield: 7.2% annually</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Invest</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-earth/10 flex items-center justify-center mr-3">
                  <Globe className="h-5 w-5 text-earth" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal">Carbon Credit Trading</h3>
                  <p className="text-xs text-gray-600">Current value: $38 per credit</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Trade</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-savanna/10 flex items-center justify-center mr-3">
                  <LineChart className="h-5 w-5 text-savanna" />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal">ESG Investment Fund</h3>
                  <p className="text-xs text-gray-600">Performance: +12.4% YTD</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Details</Button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-charcoal">Smart Payroll & ESG Compliance</h2>
              <p className="text-sm text-gray-500">Ethical worker payment dashboard</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div className="border border-gray-100 rounded-lg p-3">
                <h3 className="text-sm font-medium text-gray-600 mb-1">Fair Wage Ratio</h3>
                <div className="text-xl font-bold text-charcoal">4.2:1</div>
                <div className="text-xs text-green-600 mt-1">Exceeds standard (5:1)</div>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-3">
                <h3 className="text-sm font-medium text-gray-600 mb-1">Local Employment</h3>
                <div className="text-xl font-bold text-charcoal">86%</div>
                <div className="text-xs text-green-600 mt-1">+6% from target</div>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-3">
                <h3 className="text-sm font-medium text-gray-600 mb-1">Training Hours</h3>
                <div className="text-xl font-bold text-charcoal">42 hrs</div>
                <div className="text-xs text-green-600 mt-1">Per employee avg.</div>
              </div>
            </div>
            
            <div className="p-3 border border-gray-100 rounded-lg">
              <h3 className="font-medium text-charcoal mb-2">Diversity & Inclusion</h3>
              <div className="h-4 bg-gray-100 rounded-full overflow-hidden mb-3">
                <div className="flex h-full">
                  <div className="bg-forest h-full" style={{ width: '52%' }}></div>
                  <div className="bg-earth h-full" style={{ width: '32%' }}></div>
                  <div className="bg-savanna h-full" style={{ width: '16%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-forest rounded-full mr-1"></div>
                  <span>Local Community (52%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-earth rounded-full mr-1"></div>
                  <span>Women (32%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-savanna rounded-full mr-1"></div>
                  <span>Youth (16%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-charcoal">AI-Powered Tourism & Conservation Data</h2>
            <p className="text-sm text-gray-500">Actionable insights for business planning</p>
          </div>
          <Button variant="primary" size="sm">Generate Report</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-earth/10 flex items-center justify-center mr-3">
                <MapPin className="h-5 w-5 text-earth" />
              </div>
              <h3 className="font-medium">Traveler Heatmaps</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">AI predicts high-demand locations for marketing and inventory planning.</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-earth">4 hot zones identified</span>
              <Button variant="outline" size="sm">View Map</Button>
            </div>
          </div>
          
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center mr-3">
                <Globe className="h-5 w-5 text-forest" />
              </div>
              <h3 className="font-medium">Wildlife Tracking</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">Get real-time updates on protected zones to prevent over-tourism.</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-forest">2 new protected areas</span>
              <Button variant="outline" size="sm">View Zones</Button>
            </div>
          </div>
          
          <div className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-savanna/10 flex items-center justify-center mr-3">
                <Users className="h-5 w-5 text-savanna" />
              </div>
              <h3 className="font-medium">Customer Analytics</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">AI identifies high-value eco-tourists and suggests personalized offers.</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-savanna">36 high-value prospects</span>
              <Button variant="outline" size="sm">View Segments</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingCalendar = () => (
  <div>
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-charcoal">Sustainable Booking Calendar</h1>
      <p className="text-earth mt-2">Optimize bookings while maintaining ecological balance</p>
    </div>
    
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
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-charcoal mb-4">Conservation Events</h2>
        
        <div className="space-y-4">
          <div className="flex items-start p-3 border border-forest/20 bg-forest/5 rounded-lg hover:bg-forest/10 transition-colors">
            <div className="p-2 bg-forest/20 rounded-full mr-3 mt-1">
              <Calendar className="h-5 w-5 text-forest" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium text-charcoal">Wildlife Conservation Week</h3>
                <span className="text-xs bg-forest/10 text-forest px-2 py-1 rounded-full">Special Event</span>
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
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-charcoal">Sustainable Capacity Planning</h2>
          <Button variant="outline" size="sm">Adjust Thresholds</Button>
        </div>
        
        <div className="space-y-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Wildlife Stress Levels</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Low Impact</span>
            </div>
            <div className="bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Minimal</span>
              <span>Moderate</span>
              <span>High</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Resource Consumption</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Moderate</span>
            </div>
            <div className="bg-gray-100 rounded-full h-2">
              <div className="bg-amber-500 h-2 rounded-full" style={{ width: '58%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Sustainable</span>
              <span>Balanced</span>
              <span>Excessive</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Community Benefit</span>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Excellent</span>
            </div>
            <div className="bg-gray-100 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Limited</span>
              <span>Balanced</span>
              <span>Optimal</span>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-4 mt-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-charcoal">AI Recommendation</h3>
              <span className="text-xs bg-forest/10 text-forest px-2 py-1 rounded-full">+12% Capacity Available</span>
            </div>
            <p className="text-sm text-gray-600">You can safely increase bookings by 12% while maintaining ecological balance. Consider adding midweek special offers for June 22-28.</p>
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
    <div className="bg-gray-50 min-h-screen">
      <div className="container px-4 py-6 mx-auto">
        <div className="bg-gradient-to-r from-earth to-forest/80 rounded-xl p-6 mb-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Guardian-IO Business Dashboard</h1>
              <p className="mt-1 text-white/80">AI-Powered Eco-Tourism Command Center</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              <Link to="/dashboard/business">
                <Button variant="secondary" size="sm">
                  <Building className="h-4 w-4 mr-2" />
                  Overview
                </Button>
              </Link>
              <Link to="/dashboard/business/customers">
                <Button variant="secondary" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Guest Experience
                </Button>
              </Link>
              <Link to="/dashboard/business/analytics">
                <Button variant="secondary" size="sm">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Revenue
                </Button>
              </Link>
              <Link to="/dashboard/business/calendar">
                <Button variant="secondary" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Bookings
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <Routes>
          <Route path="/" element={<BusinessProfile />} />
          <Route path="/customers" element={<CustomerManagement />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/calendar" element={<BookingCalendar />} />
          <Route path="*" element={<Navigate to="/dashboard/business" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default BusinessDashboard;
