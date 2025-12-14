import React, { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterSectionProps {
  onFilter: (type: string, status: string, priceRange: [number, number]) => void;
}

export function FilterSection({ onFilter }: FilterSectionProps) {
  const [propertyType, setPropertyType] = useState('all');
  const [propertyStatus, setPropertyStatus] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000000]);
  const [showFilters, setShowFilters] = useState(false);

  const handleApplyFilters = () => {
    onFilter(propertyType, propertyStatus, priceRange);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-stone-200">
      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="md:hidden flex items-center gap-2 text-stone-700 mb-4"
      >
        <SlidersHorizontal className="w-5 h-5" />
        <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
      </button>

      {/* Filters */}
      <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Property Type */}
          <div>
            <label className="block text-stone-700 mb-2 text-sm">Property Type</label>
            <select
              value={propertyType}
              onChange={(e) => {
                setPropertyType(e.target.value);
                onFilter(e.target.value, propertyStatus, priceRange);
              }}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="condo">Condo</option>
            </select>
          </div>

          {/* Property Status */}
          <div>
            <label className="block text-stone-700 mb-2 text-sm">Status</label>
            <select
              value={propertyStatus}
              onChange={(e) => {
                setPropertyStatus(e.target.value);
                onFilter(propertyType, e.target.value, priceRange);
              }}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Status</option>
              <option value="sale">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
          </div>

          {/* Min Price */}
          <div>
            <label className="block text-stone-700 mb-2 text-sm">Min Price</label>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => {
                const newRange: [number, number] = [Number(e.target.value), priceRange[1]];
                setPriceRange(newRange);
              }}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Min"
            />
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-stone-700 mb-2 text-sm">Max Price</label>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => {
                const newRange: [number, number] = [priceRange[0], Number(e.target.value)];
                setPriceRange(newRange);
              }}
              className="w-full px-4 py-2 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Max"
            />
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleApplyFilters}
            className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}