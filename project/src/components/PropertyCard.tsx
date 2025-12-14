import React from 'react';
import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';
import { Property } from '../App';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number, status: string) => {
    if (status === 'rent') {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-stone-200">
      {/* Image */}
      <div className="relative h-64 overflow-hidden group">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-stone-50 transition-colors">
          <Heart className="w-5 h-5 text-stone-600 hover:text-amber-600" />
        </button>
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm capitalize">
            For {property.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <div className="text-amber-600 mb-2">
            {formatPrice(property.price, property.status)}
          </div>
          <h3 className="text-stone-900 mb-2">{property.title}</h3>
          <div className="flex items-center gap-1 text-stone-500">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{property.location}</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
          <div className="flex items-center gap-1 text-stone-600">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1 text-stone-600">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1 text-stone-600">
            <Maximize className="w-4 h-4" />
            <span className="text-sm">{property.area} sqft</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-4 bg-stone-100 text-stone-900 py-2 rounded-lg hover:bg-amber-600 hover:text-white transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}