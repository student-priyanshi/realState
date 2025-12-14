import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { PropertyCard } from '../components/PropertyCard';
import { FilterSection } from '../components/FilterSection';
import { TabSection } from '../components/TabSection';
import { Property } from '../App';

interface HomePageProps {
  properties: Property[];
}

export function HomePage({ properties }: HomePageProps) {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = (type: string, status: string, priceRange: [number, number]) => {
    let filtered = properties;

    if (type !== 'all') {
      filtered = filtered.filter(p => p.type === type);
    }

    if (status !== 'all') {
      filtered = filtered.filter(p => p.status === status);
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProperties(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = properties.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  return (
    <>
      <Hero onSearch={handleSearch} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilterSection onFilter={handleFilter} />
        
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900">
              {filteredProperties.length} Properties Available
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <TabSection />
    </>
  );
}
