import React, { useState } from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { FilterSection } from '../components/FilterSection';
import { Property } from '../App';

interface RentPageProps {
  properties: Property[];
}

export function RentPage({ properties }: RentPageProps) {
  const rentProperties = properties.filter(p => p.status === 'rent');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(rentProperties);

  const handleFilter = (type: string, status: string, priceRange: [number, number]) => {
    let filtered = rentProperties;

    if (type !== 'all') {
      filtered = filtered.filter(p => p.type === type);
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-3">Properties for Rent</h1>
          <p className="text-gray-600">
            Discover rental properties that fit your lifestyle and budget. Flexible lease terms available.
          </p>
        </div>

        <FilterSection onFilter={handleFilter} />

        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900">
              {filteredProperties.length} Rental Properties Available
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No rental properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
