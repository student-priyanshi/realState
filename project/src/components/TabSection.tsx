import React, { useState } from 'react';
import { TrendingUp, Award, Users, HeadphonesIcon } from 'lucide-react';

export function TabSection() {
  const [activeTab, setActiveTab] = useState('featured');

  const tabs = [
    { id: 'featured', label: 'Featured Properties', icon: TrendingUp },
    { id: 'services', label: 'Our Services', icon: Award },
    { id: 'agents', label: 'Our Agents', icon: Users },
    { id: 'support', label: 'Support', icon: HeadphonesIcon },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-stone-900 mb-3">Why Choose DreamHome</h2>
          <p className="text-stone-600">Explore our features and services</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-stone-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-stone-600 hover:text-amber-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm md:text-base">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'featured' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-stone-100">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-stone-900 mb-2">Premium Listings</h3>
                <p className="text-stone-600 text-sm">
                  Access to exclusive properties before they hit the market. Get first dibs on the best homes.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-stone-100 to-white rounded-lg border border-stone-100">
                <div className="w-12 h-12 bg-stone-200 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-stone-700" />
                </div>
                <h3 className="text-stone-900 mb-2">Verified Properties</h3>
                <p className="text-stone-600 text-sm">
                  All listings are thoroughly verified and authenticated to ensure quality and legitimacy.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-lg border border-stone-100">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-stone-900 mb-2">Expert Guidance</h3>
                <p className="text-stone-600 text-sm">
                  Work with experienced real estate professionals who understand your needs.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-stone-900 mb-2">Property Buying</h3>
                  <p className="text-stone-600 text-sm">
                    Find your dream home with our extensive collection of properties. We guide you through every step of the buying process.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-stone-700" />
                </div>
                <div>
                  <h3 className="text-stone-900 mb-2">Property Rental</h3>
                  <p className="text-stone-600 text-sm">
                    Looking to rent? Browse thousands of rental properties in prime locations with flexible lease terms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-stone-900 mb-2">Property Selling</h3>
                  <p className="text-stone-600 text-sm">
                    Get the best value for your property. Our agents help you market and sell your home quickly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-stone-700" />
                </div>
                <div>
                  <h3 className="text-stone-900 mb-2">Property Management</h3>
                  <p className="text-stone-600 text-sm">
                    Professional property management services to handle maintenance, tenants, and everything in between.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'agents' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Sarah Johnson', role: 'Senior Agent', properties: 150 },
                { name: 'Michael Chen', role: 'Property Specialist', properties: 120 },
                { name: 'Emily Davis', role: 'Luxury Homes Expert', properties: 95 },
                { name: 'James Wilson', role: 'Commercial Agent', properties: 80 },
              ].map((agent, index) => (
                <div key={index} className="bg-stone-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-stone-200">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                    {agent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-stone-900 mb-1">{agent.name}</h3>
                  <p className="text-stone-500 text-sm mb-3">{agent.role}</p>
                  <div className="text-amber-600 text-sm">
                    {agent.properties}+ Properties Sold
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'support' && (
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-amber-50 rounded-lg p-6 border border-stone-200">
                  <HeadphonesIcon className="w-10 h-10 text-amber-600 mb-4" />
                  <h3 className="text-stone-900 mb-2">24/7 Customer Support</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Our dedicated support team is available round the clock to assist you with any queries.
                  </p>
                  <a href="#" className="text-amber-600 text-sm hover:underline">
                    Contact Support →
                  </a>
                </div>
                <div className="bg-stone-100 rounded-lg p-6 border border-stone-200">
                  <Award className="w-10 h-10 text-stone-700 mb-4" />
                  <h3 className="text-stone-900 mb-2">Quality Assurance</h3>
                  <p className="text-stone-600 text-sm mb-4">
                    Every property listing goes through rigorous verification to ensure accuracy and quality.
                  </p>
                  <a href="#" className="text-stone-700 text-sm hover:underline">
                    Learn More →
                  </a>
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-stone-800 to-stone-700 rounded-lg p-8 text-center text-white">
                <h3 className="text-white mb-2">Need Help Finding Your Dream Home?</h3>
                <p className="text-stone-300 mb-4">
                  Schedule a free consultation with one of our expert agents
                </p>
                <button className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}