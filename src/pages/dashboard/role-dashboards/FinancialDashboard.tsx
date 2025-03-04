
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ArrowRight, BarChart3, CreditCard, LineChart, PieChart, Shield } from 'lucide-react';
import Button from '@/components/Button';

// Financial Dashboard Components
const TransactionOverview = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Guardian-Pay Transaction Overview</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-3">
            <CreditCard className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Transaction Volume</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">$2.8M</div>
        <p className="text-sm text-gray-600">Total transaction volume</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Last Month: $2.1M</span>
            <span className="text-xs font-medium text-green-700">+33%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-full mr-3">
            <Shield className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Conservation Impact</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">$280K</div>
        <p className="text-sm text-gray-600">Funds directed to conservation</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Conservation allocation:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Wildlife: $140K</span>
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Habitat: $85K</span>
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Community: $55K</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-amber-100 rounded-full mr-3">
            <BarChart3 className="h-6 w-6 text-amber-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">User Growth</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">24,750</div>
        <p className="text-sm text-gray-600">Active Guardian-Pay users</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Last Month: 21,200</span>
            <span className="text-xs font-medium text-green-700">+17%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-charcoal">Transaction Timeline</h2>
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">Daily</Button>
          <Button variant="secondary" size="sm">Weekly</Button>
          <Button variant="outline" size="sm">Monthly</Button>
        </div>
      </div>
      
      <div className="h-80 w-full bg-gray-50 rounded-lg flex items-center justify-center">
        <div className="text-gray-400">Transaction Chart Visualization</div>
      </div>
      
      <div className="mt-4 grid grid-cols-4 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Eco-Hotels</h3>
          <div className="text-xl font-bold text-charcoal mt-1">$1.2M</div>
          <div className="text-xs text-green-600 mt-1">+18% from last month</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Safari Tours</h3>
          <div className="text-xl font-bold text-charcoal mt-1">$850K</div>
          <div className="text-xs text-green-600 mt-1">+24% from last month</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Conservation</h3>
          <div className="text-xl font-bold text-charcoal mt-1">$480K</div>
          <div className="text-xs text-green-600 mt-1">+29% from last month</div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-600">Other</h3>
          <div className="text-xl font-bold text-charcoal mt-1">$270K</div>
          <div className="text-xs text-green-600 mt-1">+12% from last month</div>
        </div>
      </div>
    </div>
  </div>
);

const ESGLoans = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">ESG Loans & Conservation Bonds</h1>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-xl font-semibold text-charcoal mb-4">Active ESG Loans</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Business</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loan Type</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Term</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Savanna Eco Lodge</div>
                <div className="text-xs text-gray-500">Lodge Expansion</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Sustainable Infrastructure</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">$450,000</td>
              <td className="px-4 py-4 whitespace-nowrap">60 months</td>
              <td className="px-4 py-4 whitespace-nowrap">3.75%</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Active</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="outline" size="sm">View Details</Button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Wildlife Tours Inc.</div>
                <div className="text-xs text-gray-500">Electric Safari Vehicles</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">Green Transport</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">$275,000</td>
              <td className="px-4 py-4 whitespace-nowrap">36 months</td>
              <td className="px-4 py-4 whitespace-nowrap">4.25%</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Active</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="outline" size="sm">View Details</Button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="font-medium text-charcoal">Maasai Community Trust</div>
                <div className="text-xs text-gray-500">Solar Power Infrastructure</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Renewable Energy</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap font-medium">$320,000</td>
              <td className="px-4 py-4 whitespace-nowrap">48 months</td>
              <td className="px-4 py-4 whitespace-nowrap">3.50%</td>
              <td className="px-4 py-4 whitespace-nowrap">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Active</span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Button variant="outline" size="sm">View Details</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-charcoal mb-4">Conservation Bonds Overview</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div>
              <div className="font-medium text-charcoal">Serengeti Wildlife Bond</div>
              <div className="text-xs text-gray-500">5-year term, 4.25% yield</div>
            </div>
            <div className="text-right">
              <div className="font-medium text-charcoal">$1.2M / $2M</div>
              <div className="text-xs text-gray-500">60% funded</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div>
              <div className="font-medium text-charcoal">Reforestation Project Bond</div>
              <div className="text-xs text-gray-500">3-year term, 3.75% yield</div>
            </div>
            <div className="text-right">
              <div className="font-medium text-charcoal">$850K / $1M</div>
              <div className="text-xs text-gray-500">85% funded</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
            <div>
              <div className="font-medium text-charcoal">Marine Conservation Bond</div>
              <div className="text-xs text-gray-500">7-year term, 4.75% yield</div>
            </div>
            <div className="text-right">
              <div className="font-medium text-charcoal">$620K / $1.5M</div>
              <div className="text-xs text-gray-500">41% funded</div>
            </div>
          </div>
        </div>
        
        <Button variant="default" className="w-full mt-4">View All Conservation Bonds</Button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-charcoal mb-4">Automated Approval System</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-charcoal">ESG Loan Applications</h3>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-charcoal">12</div>
                <div className="text-xs text-gray-500">Pending</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">8</div>
                <div className="text-xs text-gray-500">Approved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">3</div>
                <div className="text-xs text-gray-500">Rejected</div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-gray-100 rounded-lg">
            <h3 className="font-medium text-charcoal mb-2">Latest Applications</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Savanna Safari Co.</div>
                  <div className="text-xs text-gray-500">Electric Vehicle Fleet</div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pending Review</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">EcoStay Resorts</div>
                  <div className="text-xs text-gray-500">Solar Panel Installation</div>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">AI Assessment</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Conservation First Ltd.</div>
                  <div className="text-xs text-gray-500">Wildlife Corridor Purchase</div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Approved</span>
              </div>
            </div>
          </div>
          
          <Button variant="default" className="w-full">Review Pending Applications</Button>
        </div>
      </div>
    </div>
  </div>
);

const CarbonMarketplace = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Carbon Credit Marketplace</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-full mr-3">
            <LineChart className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Market Overview</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">$45.75</div>
        <p className="text-sm text-gray-600">Avg price per carbon credit</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Last Month: $42.30</span>
            <span className="text-xs font-medium text-green-700">+8.1%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-3">
            <PieChart className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Total Volume</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">85,420</div>
        <p className="text-sm text-gray-600">Carbon credits traded</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Credit types:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Forest: 45%</span>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Marine: 30%</span>
            <span className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">Renewable: 25%</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-amber-100 rounded-full mr-3">
            <CreditCard className="h-6 w-6 text-amber-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Your Portfolio</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">1,250</div>
        <p className="text-sm text-gray-600">Credits owned</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Value: $57,187.50</span>
            <Button variant="outline" size="sm">Trade</Button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-charcoal">Available Carbon Credit Projects</h2>
        <Button variant="outline" size="sm">Filter Options</Button>
      </div>
      
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <h3 className="font-medium text-charcoal">Serengeti Grassland Preservation</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">Conservation of 50,000 hectares of critical grassland ecosystem</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Project ID: SER-2024-01</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-earth font-medium">Verified</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-charcoal">$48.50 per credit</span>
              <span className="text-xs text-green-600 mt-1">25,000 available</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Gold Standard</div>
              <div className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">High Impact</div>
            </div>
            <Button variant="secondary" size="sm">Purchase Credits</Button>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <h3 className="font-medium text-charcoal">Tanzania Mangrove Restoration</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">Coastal ecosystem restoration and carbon sequestration</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Project ID: MAN-2024-03</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-earth font-medium">Verified</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-charcoal">$52.25 per credit</span>
              <span className="text-xs text-green-600 mt-1">18,500 available</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Verra Certified</div>
              <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Biodiversity+</div>
            </div>
            <Button variant="secondary" size="sm">Purchase Credits</Button>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                <h3 className="font-medium text-charcoal">Kenya Solar Farm</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">Renewable energy project replacing diesel generators</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">Project ID: SOL-2024-07</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-earth font-medium">Verified</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-charcoal">$41.75 per credit</span>
              <span className="text-xs text-green-600 mt-1">32,000 available</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Clean Development</div>
              <div className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">Community Benefits</div>
            </div>
            <Button variant="secondary" size="sm">Purchase Credits</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Financial Dashboard Component
const FinancialDashboard = () => {
  const { user } = useAuth();
  
  if (!user || user.role !== 'financial') {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <Routes>
      <Route path="/" element={<TransactionOverview />} />
      <Route path="/esg-loans" element={<ESGLoans />} />
      <Route path="/carbon-marketplace" element={<CarbonMarketplace />} />
      <Route path="*" element={<Navigate to="/dashboard/financial" replace />} />
    </Routes>
  );
};

export default FinancialDashboard;
