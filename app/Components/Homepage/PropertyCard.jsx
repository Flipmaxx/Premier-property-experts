"use client";

import { Heart, MapPin, Bed, Bath, Square } from "lucide-react";
import { useState } from "react";

const PropertyCard = ({ property }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Property Image */}
      <div className="relative group">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 sm:h-52 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 shadow-sm"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              isLiked ? "text-red-500 fill-red-500" : "text-gray-600 hover:text-red-500"
            }`}
          />
        </button>
        {property.badge && (
          <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            {property.badge}
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-1 flex-1 mr-2">
            {property.title}
          </h3>
          <span className="text-lg sm:text-xl font-bold text-green-600 whitespace-nowrap">
            ₹{property.price}
          </span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm sm:text-base truncate">{property.location}</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-sm text-gray-600 mb-4 flex-wrap">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span className="text-xs sm:text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span className="text-xs sm:text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            <span className="text-xs sm:text-sm">{property.area} sq ft</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-xs sm:text-sm text-gray-500">
            {property.type} • {property.availability}
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors duration-200 w-full sm:w-auto">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;