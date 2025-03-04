
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ArrowRight, BarChart3, CreditCard, MapPin, Shield, Ticket, TreeDeciduous } from 'lucide-react';
import Button from '@/components/Button';

// Tourist Dashboard Components
const TravelImpact = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Your Travel Impact</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-green-100 rounded-full mr-3">
            <TreeDeciduous className="h-6 w-6 text-green-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Carbon Offset</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">0.8 tons</div>
        <p className="text-sm text-gray-600">CO₂ offset through travel</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Goal: 1.5 tons</span>
            <span className="text-xs font-medium text-green-700">53%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '53%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-amber-100 rounded-full mr-3">
            <Shield className="h-6 w-6 text-amber-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Wildlife Protection</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">$143</div>
        <p className="text-sm text-gray-600">Contributed to conservation</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Your contributions help protect:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Elephants</span>
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Lions</span>
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Giraffes</span>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 rounded-full mr-3">
            <BarChart3 className="h-6 w-6 text-blue-700" />
          </div>
          <h2 className="text-lg font-medium text-charcoal">Local Impact</h2>
        </div>
        <div className="text-3xl font-bold text-charcoal mb-2">27 hrs</div>
        <p className="text-sm text-gray-600">Sustainable local experiences</p>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600">Communities supported:</p>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Maasai</span>
            <span className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">San</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-xl font-semibold text-charcoal mb-4">Your Conservation Timeline</h2>
      
      <div className="space-y-6">
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="w-8 h-8 bg-earth rounded-full flex items-center justify-center text-white">
              <MapPin size={16} />
            </div>
            <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
          </div>
          <div>
            <h3 className="font-medium text-charcoal">Eco Safari Booking</h3>
            <p className="text-sm text-gray-600 mt-1">You booked an eco-certified safari experience in Serengeti National Park</p>
            <div className="flex items-center mt-2">
              <div className="text-xs text-gray-500">May 15, 2024</div>
              <div className="mx-2 text-gray-300">•</div>
              <div className="text-xs text-green-600">+$78 to conservation</div>
            </div>
          </div>
        </div>
        
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
              <TreeDeciduous size={16} />
            </div>
            <div className="h-full w-0.5 bg-gray-200 mt-2"></div>
          </div>
          <div>
            <h3 className="font-medium text-charcoal">Carbon Offset Complete</h3>
            <p className="text-sm text-gray-600 mt-1">Your flight carbon footprint was offset through reforestation projects</p>
            <div className="flex items-center mt-2">
              <div className="text-xs text-gray-500">May 10, 2024</div>
              <div className="mx-2 text-gray-300">•</div>
              <div className="text-xs text-green-600">+0.5 tons CO₂ offset</div>
            </div>
          </div>
        </div>
        
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white">
              <CreditCard size={16} />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-charcoal">Guardian-Pay Activated</h3>
            <p className="text-sm text-gray-600 mt-1">You set up your Guardian-Pay wallet for eco-tourism transactions</p>
            <div className="flex items-center mt-2">
              <div className="text-xs text-gray-500">May 5, 2024</div>
              <div className="mx-2 text-gray-300">•</div>
              <div className="text-xs text-blue-600">Wallet activated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Bookings = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">My Bookings</h1>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-xl font-semibold text-charcoal mb-4">Upcoming Trips</h2>
      
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <h3 className="font-medium text-charcoal">Serengeti Eco Safari</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">3-day guided tour with conservation activities</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">June 15-18, 2024</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-earth font-medium">Confirmed</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-charcoal">$1,250</span>
              <span className="text-xs text-green-600 mt-1">$125 to conservation</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Eco-Certified</div>
              <div className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">Wildlife Protection</div>
            </div>
            <Button variant="secondary" size="sm">View Details</Button>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <h3 className="font-medium text-charcoal">Eco Lodge Stay</h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">5 nights at Sustainable Savanna Lodge</p>
              <div className="flex items-center mt-2">
                <div className="text-xs text-gray-500">June 18-23, 2024</div>
                <div className="mx-2 text-gray-300">•</div>
                <div className="text-xs text-earth font-medium">Confirmed</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-charcoal">$875</span>
              <span className="text-xs text-green-600 mt-1">$87 to conservation</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-earth/10 text-earth text-xs px-2 py-1 rounded-full">Solar Powered</div>
              <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Community Owned</div>
            </div>
            <Button variant="secondary" size="sm">View Details</Button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-charcoal mb-4">Guardian-Wild Experiences</h2>
      <p className="text-gray-600 mb-6">Discover eco-certified experiences that directly fund conservation efforts.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="h-40 bg-gray-200 relative">
            <div className="absolute top-2 left-2 bg-earth text-white text-xs px-2 py-1 rounded-full">Popular</div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-charcoal">Elephant Sanctuary Visit</h3>
            <p className="text-sm text-gray-600 mt-1">Meet rescued elephants and learn about conservation</p>
            <div className="flex items-center mt-2">
              <div className="text-xs text-gray-500">1 day experience</div>
              <div className="mx-2 text-gray-300">•</div>
              <div className="text-xs text-earth font-medium">$95 per person</div>
            </div>
            <Button variant="secondary" size="sm" className="w-full mt-4 justify-center">Book Now</Button>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="h-40 bg-gray-200 relative">
            <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">High Impact</div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-charcoal">Reforestation Project</h3>
            <p className="text-sm text-gray-600 mt-1">Plant trees and restore habitat with local guides</p>
            <div className="flex items-center mt-2">
              <div className="text-xs text-gray-500">Half-day activity</div>
              <div className="mx-2 text-gray-300">•</div>
              <div className="text-xs text-earth font-medium">$45 per person</div>
            </div>
            <Button variant="secondary" size="sm" className="w-full mt-4 justify-center">Book Now</Button>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="h-40 bg-gray-200 relative">
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Community</div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-charcoal">Maasai Village Tour</h3>
            <p className="text-sm text-gray-600 mt-1">Cultural exchange with conservation-focused community</p>
            <div className="flex items-center mt-2">
              <div className="text-xs text-gray-500">3-hour experience</div>
              <div className="mx-2 text-gray-300">•</div>
              <div className="text-xs text-earth font-medium">$65 per person</div>
            </div>
            <Button variant="secondary" size="sm" className="w-full mt-4 justify-center">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Wallet = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Guardian-Pay Wallet</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="col-span-2 bg-gradient-to-r from-earth to-forest rounded-xl shadow-sm p-6 text-white">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-sm font-medium text-white/80">Your Guardian-Pay Balance</h2>
            <div className="text-3xl font-bold mt-1">$487.25</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-2 rounded-md">
              <CreditCard className="h-5 w-5" />
            </div>
            <div className="text-lg font-medium">Guardian-Pay</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-white/80">Name</div>
            <div className="font-medium">Eco Traveler</div>
          </div>
          <div>
            <div className="text-sm text-white/80">Conservation Impact</div>
            <div className="font-medium">$48.72 (10%)</div>
          </div>
          <div>
            <div className="text-sm text-white/80">Wallet ID</div>
            <div className="font-medium">•••• 4832</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-charcoal mb-4">Quick Actions</h2>
        
        <div className="space-y-3">
          <Button variant="secondary" className="w-full justify-between">
            <span>Add Funds</span>
            <ArrowRight size={16} />
          </Button>
          
          <Button variant="secondary" className="w-full justify-between">
            <span>Transfer Money</span>
            <ArrowRight size={16} />
          </Button>
          
          <Button variant="secondary" className="w-full justify-between">
            <span>Scan QR to Pay</span>
            <ArrowRight size={16} />
          </Button>
          
          <Button variant="secondary" className="w-full justify-between">
            <span>Settings</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-xl font-semibold text-charcoal mb-4">Recent Transactions</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <Ticket className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <h3 className="font-medium text-charcoal">Safari Booking Payment</h3>
              <p className="text-xs text-gray-500">May 15, 2024</p>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-red-600">-$1,250.00</div>
            <p className="text-xs text-green-600">$125.00 to conservation</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <CreditCard className="h-5 w-5 text-blue-700" />
            </div>
            <div>
              <h3 className="font-medium text-charcoal">Wallet Top-up</h3>
              <p className="text-xs text-gray-500">May 10, 2024</p>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-green-600">+$2,000.00</div>
            <p className="text-xs text-gray-500">From bank account</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
              <TreeDeciduous className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <h3 className="font-medium text-charcoal">Conservation Donation</h3>
              <p className="text-xs text-gray-500">May 7, 2024</p>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-red-600">-$50.00</div>
            <p className="text-xs text-green-600">100% to wildlife protection</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Rewards = () => (
  <div>
    <h1 className="text-2xl font-bold text-charcoal mb-6">Eco-Rewards</h1>
    
    <div className="bg-gradient-to-r from-earth/90 to-forest/90 rounded-xl shadow-sm p-6 text-white mb-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-sm font-medium text-white/80">Your Eco-Rewards Points</h2>
          <div className="text-4xl font-bold mt-1">2,750</div>
          <p className="text-sm text-white/80 mt-2">Conservation Member Status</p>
        </div>
        <div className="bg-white/90 text-earth p-3 rounded-lg">
          <TreeDeciduous className="h-10 w-10" />
        </div>
      </div>
      
      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Current Level: Bronze</span>
          <span>Next Level: Silver (5,000 pts)</span>
        </div>
        <div className="w-full bg-white/30 rounded-full h-2">
          <div className="bg-white h-2 rounded-full" style={{ width: '55%' }}></div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h2 className="text-xl font-semibold text-charcoal mb-4">Available Rewards</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-green-100 rounded-full mr-3">
              <TreeDeciduous className="h-5 w-5 text-green-700" />
            </div>
            <h3 className="font-medium text-charcoal">Free Safari Upgrade</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Upgrade your safari experience to premium with guide</p>
          <div className="flex justify-between items-center">
            <div className="text-earth font-medium">1,500 points</div>
            <Button variant="secondary" size="sm">Redeem</Button>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-blue-100 rounded-full mr-3">
              <MapPin className="h-5 w-5 text-blue-700" />
            </div>
            <h3 className="font-medium text-charcoal">Eco-Lodge Discount</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">25% off your next stay at partner eco-lodges</p>
          <div className="flex justify-between items-center">
            <div className="text-earth font-medium">2,000 points</div>
            <Button variant="secondary" size="sm">Redeem</Button>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-amber-100 rounded-full mr-3">
              <Shield className="h-5 w-5 text-amber-700" />
            </div>
            <h3 className="font-medium text-charcoal">Wildlife Sponsorship</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Sponsor an elephant or lion with exclusive updates</p>
          <div className="flex justify-between items-center">
            <div className="text-earth font-medium">3,000 points</div>
            <Button variant="secondary" size="sm">Redeem</Button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold text-charcoal mb-4">How to Earn Points</h2>
      
      <div className="space-y-4">
        <div className="flex">
          <div className="w-10 h-10 bg-earth/10 rounded-full flex items-center justify-center mr-3">
            <CreditCard className="h-5 w-5 text-earth" />
          </div>
          <div>
            <h3 className="font-medium text-charcoal">Guardian-Pay Transactions</h3>
            <p className="text-sm text-gray-600 mt-1">Earn 1 point for every $1 spent using Guardian-Pay</p>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-10 h-10 bg-earth/10 rounded-full flex items-center justify-center mr-3">
            <MapPin className="h-5 w-5 text-earth" />
          </div>
          <div>
            <h3 className="font-medium text-charcoal">Eco-Certified Stays</h3>
            <p className="text-sm text-gray-600 mt-1">Earn 500 bonus points for each night at eco-certified accommodations</p>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-10 h-10 bg-earth/10 rounded-full flex items-center justify-center mr-3">
            <TreeDeciduous className="h-5 w-5 text-earth" />
          </div>
          <div>
            <h3 className="font-medium text-charcoal">Conservation Activities</h3>
            <p className="text-sm text-gray-600 mt-1">Earn 250-1,000 points for participating in conservation experiences</p>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-10 h-10 bg-earth/10 rounded-full flex items-center justify-center mr-3">
            <Shield className="h-5 w-5 text-earth" />
          </div>
          <div>
            <h3 className="font-medium text-charcoal">Referrals</h3>
            <p className="text-sm text-gray-600 mt-1">Earn 1,000 points for each friend who joins Guardian-IO</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Tourist Dashboard Component
const TouristDashboard = () => {
  const { user } = useAuth();
  
  if (!user || user.role !== 'tourist') {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <Routes>
      <Route path="/" element={<TravelImpact />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="*" element={<Navigate to="/dashboard/tourist" replace />} />
    </Routes>
  );
};

export default TouristDashboard;
