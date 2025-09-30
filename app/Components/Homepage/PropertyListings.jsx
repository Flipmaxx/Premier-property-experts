"use client";

import PropertyCard from "./PropertyCard";

const PropertyListings = () => {
  // Sample property data - in a real app, this would come from an API
  const properties = [
    {
      id: 1,
      title: "Luxury Villa with Pool",
      price: "2.5 Cr",
      location: "Whitefield, Bangalore",
      bedrooms: 4,
      bathrooms: 3,
      area: "2500",
      type: "Villa",
      availability: "Ready to Move",
      image: "/Images/1.png",
      badge: "Premium"
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "85 L",
      location: "Koramangala, Bangalore",
      bedrooms: 3,
      bathrooms: 2,
      area: "1200",
      type: "Apartment",
      availability: "Under Construction",
      image: "/Images/2.png"
    },
    {
      id: 3,
      title: "Spacious Family Home",
      price: "1.2 Cr",
      location: "Indiranagar, Bangalore",
      bedrooms: 3,
      bathrooms: 2,
      area: "1800",
      type: "House",
      availability: "Ready to Move",
      image: "/Images/1.png"
    },
    {
      id: 4,
      title: "Penthouse with Terrace",
      price: "3.5 Cr",
      location: "MG Road, Bangalore",
      bedrooms: 4,
      bathrooms: 3,
      area: "3000",
      type: "Penthouse",
      availability: "Ready to Move",
      image: "/Images/2.png",
      badge: "New Launch"
    },
    {
      id: 5,
      title: "Cozy 2BHK Apartment",
      price: "65 L",
      location: "Electronic City, Bangalore",
      bedrooms: 2,
      bathrooms: 2,
      area: "950",
      type: "Apartment",
      availability: "Ready to Move",
      image: "/Images/1.png"
    },
    {
      id: 6,
      title: "Garden Villa",
      price: "1.8 Cr",
      location: "JP Nagar, Bangalore",
      bedrooms: 3,
      bathrooms: 2,
      area: "2000",
      type: "Villa",
      availability: "Under Construction",
      image: "/Images/2.png"
    },
    {
      id: 7,
      title: "Executive Apartment",
      price: "95 L",
      location: "Marathahalli, Bangalore",
      bedrooms: 2,
      bathrooms: 2,
      area: "1100",
      type: "Apartment",
      availability: "Ready to Move",
      image: "/Images/1.png"
    },
    {
      id: 8,
      title: "Premium Villa",
      price: "2.8 Cr",
      location: "Sarjapur, Bangalore",
      bedrooms: 4,
      bathrooms: 3,
      area: "2800",
      type: "Villa",
      availability: "Under Construction",
      image: "/Images/2.png",
      badge: "Premium"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Featured Properties
            </h2>
            <p className="text-gray-600">
              Discover our handpicked selection of premium properties
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex gap-2">
            <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition">
              Sort by Price
            </button>
            <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-200 transition">
              Sort by Date
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Load More Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;