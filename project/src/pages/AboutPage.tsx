import React from 'react';
import { Award, Users, Home, TrendingUp, Target, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">About DreamHome</h1>
          <p className="text-stone-300 max-w-2xl mx-auto">
            We're on a mission to make finding and selling properties simple, transparent, and rewarding for everyone.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-amber-600 mb-2">15+</div>
              <p className="text-stone-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-amber-600 mb-2">1,200+</div>
              <p className="text-stone-600">Properties Sold</p>
            </div>
            <div className="text-center">
              <div className="text-amber-600 mb-2">800+</div>
              <p className="text-stone-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-amber-600 mb-2">50+</div>
              <p className="text-stone-600">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2009, DreamHome started with a simple vision: to revolutionize the real estate industry by making property transactions more transparent, efficient, and customer-friendly.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown from a small local agency to a nationwide platform, helping thousands of families find their dream homes and investors discover lucrative opportunities.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be one of the most trusted names in real estate, known for our integrity, expertise, and commitment to client satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-stone-200">
                  <Award className="w-10 h-10 text-amber-600 mb-3" />
                  <h3 className="text-stone-900 mb-2">Award Winning</h3>
                  <p className="text-stone-600 text-sm">Recognized for excellence</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-stone-200">
                  <Users className="w-10 h-10 text-stone-700 mb-3" />
                  <h3 className="text-stone-900 mb-2">Expert Team</h3>
                  <p className="text-stone-600 text-sm">Professional agents</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-stone-200">
                  <Home className="w-10 h-10 text-amber-600 mb-3" />
                  <h3 className="text-stone-900 mb-2">Wide Selection</h3>
                  <p className="text-stone-600 text-sm">Diverse properties</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-stone-200">
                  <TrendingUp className="w-10 h-10 text-stone-700 mb-3" />
                  <h3 className="text-stone-900 mb-2">Market Leader</h3>
                  <p className="text-stone-600 text-sm">Industry pioneer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-stone-900 mb-2">Integrity</h3>
              <p className="text-stone-600 text-sm">
                We believe in honest, transparent dealings with every client, building trust through our actions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-stone-700" />
              </div>
              <h3 className="text-stone-900 mb-2">Excellence</h3>
              <p className="text-stone-600 text-sm">
                We strive for excellence in every aspect of our service, from property listings to client support.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-stone-900 mb-2">Customer First</h3>
              <p className="text-stone-600 text-sm">
                Our clients are at the heart of everything we do. Your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-3">Meet Our Leadership</h2>
            <p className="text-gray-600">The experts behind DreamHome's success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'John Anderson', role: 'CEO & Founder', experience: '20 years' },
              { name: 'Sarah Mitchell', role: 'Chief Operations Officer', experience: '15 years' },
              { name: 'David Chen', role: 'Head of Sales', experience: '12 years' },
              { name: 'Emily Roberts', role: 'Marketing Director', experience: '10 years' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-stone-200">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-stone-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 text-sm mb-2">{member.role}</p>
                <p className="text-stone-500 text-sm">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}