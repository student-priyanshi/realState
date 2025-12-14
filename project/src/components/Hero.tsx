import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
}

export function Hero({ onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-white mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-stone-300 mb-8">
            Discover the perfect property from our extensive collection of homes, apartments, and villas
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-2 shadow-lg">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 px-4 py-2">
                <MapPin className="w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Enter location or property name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-stone-900"
                />
              </div>
              <button
                type="submit"
                className="bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12">
            <div>
              <div className="text-white mb-1">1,200+</div>
              <div className="text-stone-400 text-sm">Properties</div>
            </div>
            <div>
              <div className="text-white mb-1">800+</div>
              <div className="text-stone-400 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-white mb-1">50+</div>
              <div className="text-stone-400 text-sm">Cities</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}