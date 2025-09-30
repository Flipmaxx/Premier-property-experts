'use client';

import Image from "next/image";
import { Star } from "lucide-react";

const Environment = () => {
  const images = [
    { id: 1, src: "/Images/C1.png", alt: "Professional cleaning team cleaning sofa" },
    { id: 2, src: "/Images/C2.png", alt: "Professional cleaner dusting ceiling fan" },
    { id: 3, src: "/Images/C3.png", alt: "Professional cleaner mopping floor" },
    { id: 4, src: "/Images/C4.png", alt: "Professional cleaner dusting ceiling fan" },
    { id: 5, src: "/Images/C5.png", alt: "Professional cleaning team in office" }
  ];

  const statistics = [
    { value: "208K", label: "Happy Customers" },
    { value: "350+", label: "Cleaning Experts" },
    { value: "4.8", label: "Average Rating", rating: true },
    { value: "25+", label: "Years Experience" },
    { value: "150+", label: "Corporate Clients" }
  ];

  return (
    <main className="w-full min-h-full bg-white flex flex-col">
      <section className="flex-1 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl leading-relaxed md:text-4xl lg:text-5xl font-bold text-black mb-4">
              Keeping The Environment <br /> Clean Together
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
              We believe in a cleaner, healthier environment for everyone. Our professional team ensures every space
              is spotless, fresh, and hygienic.
            </p>
          </div>
          <div className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 lg:hidden">
              {images.map((image) => (
                <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-6 mb-6">
                {images.slice(0, 3).map((image) => (
                  <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                   
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {images.slice(3, 5).map((image) => (
                  <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="relative w-full h-64 lg:h-80">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transform group-hover:scale-110 transition duration-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our mission is to maintain cleanliness and hygiene across every environment we touch.
                From homes to offices, we bring expertise, dedication, and eco-friendly solutions to
                ensure spotless results.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                With years of industry experience, we take pride in delivering high-quality service.
                Each client’s satisfaction is our top priority, and we continuously strive to improve
                our methods for a greener tomorrow.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {statistics.map((stat, index) => (
                <div key={index}>
                  <div className="mb-2">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                      {stat.value}
                    </span>
                    {stat.rating && (
                      <div className="flex justify-center items-center mt-2 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Environment;
