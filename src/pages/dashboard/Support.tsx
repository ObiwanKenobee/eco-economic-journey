
import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

const Support = () => {
  return (
    <div>
      {/* Page header */}
      <div className="pb-5 border-b border-gray-200 mb-6">
        <h1 className="text-2xl font-bold text-charcoal">Support</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Help center content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-xl font-semibold text-charcoal mb-4">How can we help you?</h2>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <h3 className="font-medium text-charcoal">Getting Started with the Platform</h3>
                <p className="text-gray-600 text-sm mt-1">Learn the basics of using the Guardian-IO ecosystem</p>
              </div>
              
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <h3 className="font-medium text-charcoal">Account Settings & Security</h3>
                <p className="text-gray-600 text-sm mt-1">Manage your profile, login options, and security features</p>
              </div>
              
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <h3 className="font-medium text-charcoal">Conservation Impact Tracking</h3>
                <p className="text-gray-600 text-sm mt-1">Understanding how your activities support wildlife conservation</p>
              </div>
              
              <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <h3 className="font-medium text-charcoal">Payments & Transactions</h3>
                <p className="text-gray-600 text-sm mt-1">Learn about Guardian-Pay and financial features</p>
              </div>
            </div>
          </div>
          
          {/* Live chat */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-charcoal">Chat with Support</h2>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Online</span>
            </div>
            
            <div className="border rounded-lg bg-gray-50 h-80 mb-4 p-4 overflow-y-auto">
              <div className="flex flex-col space-y-3">
                <div className="flex items-start">
                  <div className="bg-earth text-white p-2 rounded-full mr-3">
                    <MessageSquare size={16} />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                    <p className="text-sm text-charcoal">Hello! Welcome to Guardian-IO support. How can I help you today?</p>
                    <span className="text-xs text-gray-500 mt-1 block">10:30 AM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-earth focus:border-transparent"
              />
              <button className="bg-earth text-white p-2 rounded-r-lg">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* FAQs and contact info */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <h2 className="text-lg font-semibold text-charcoal mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-3">
                <h3 className="font-medium text-charcoal text-sm">How is my tourism spending used for conservation?</h3>
                <p className="text-gray-600 text-xs mt-1">All Guardian-IO transactions direct a percentage to local conservation efforts, tracked through your dashboard.</p>
              </div>
              
              <div className="border-b border-gray-100 pb-3">
                <h3 className="font-medium text-charcoal text-sm">Can I track my personal conservation impact?</h3>
                <p className="text-gray-600 text-xs mt-1">Yes, your dashboard shows your carbon offset, wildlife protection contribution, and community support metrics.</p>
              </div>
              
              <div className="border-b border-gray-100 pb-3">
                <h3 className="font-medium text-charcoal text-sm">How does the Guardian-Pay system work?</h3>
                <p className="text-gray-600 text-xs mt-1">Guardian-Pay is our integrated payment system that connects tourism spending directly to conservation funding.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-charcoal text-sm">Is my data secure on the platform?</h3>
                <p className="text-gray-600 text-xs mt-1">Yes, we use ISO 27001 certified data protection and encryption for all user data and transactions.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-charcoal mb-4">Contact Information</h2>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-xs font-medium text-gray-500">Email Support</h3>
                <p className="text-sm text-charcoal">support@guardian-io.com</p>
              </div>
              
              <div>
                <h3 className="text-xs font-medium text-gray-500">Phone Support</h3>
                <p className="text-sm text-charcoal">+212 522 123 456</p>
              </div>
              
              <div>
                <h3 className="text-xs font-medium text-gray-500">Hours</h3>
                <p className="text-sm text-charcoal">24/7 for urgent matters</p>
                <p className="text-xs text-gray-500">Business hours: 8am-8pm WAT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
