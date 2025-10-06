'use client'

import Image from 'next/image'

export default function Services() {
  const serviceButtons = [
    'Cleaning Services',
    'Pest Control', 
    'Plumbing Repairs',
    'Electrical Works',
    'Painting & Polishing',
    'HVAC Maintenance',
    'Garden Care',
    'Waste Removal',
    'Appliance Repairs'
  ]

  const serviceImages = [
    { src: '/Images/C1.png', alt: 'Cleaning Services' },
    { src: '/Images/C2.png', alt: 'Professional Cleaning' },
    { src: '/Images/C3.png', alt: 'Home Cleaning' },
    { src: '/Images/C4.png', alt: 'Window Cleaning' },
    { src: '/Images/C5.png', alt: 'Living Room Cleaning' },
    { src: '/Images/C1.png', alt: 'Garden Care' }
  ]

  return (
    <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 services-section">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12 sm:mb-16">
          <h1 className="services-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            Smart Services For Every<br />
            Property Need
          </h1>
          <p className="services-subtitle text-sm sm:text-sm md:text-sm lg:text-sm text-gray-500 max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </p>
        </div>

        <div className="service-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16 max-w-6xl mx-auto">
          {serviceButtons.map((service, index) => (
            <button
              key={index}
              className="service-button bg-white rounded-md px-2 sm:px-3 py-2 sm:py-3 text-gray-700 text-xs sm:text-sm md:text-base font-medium text-center min-h-[48px] flex items-center justify-center transition-transform duration-200 hover:scale-105"
            >
              {service}
            </button>
          ))}
        </div>

        <div className="image-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {serviceImages.map((image, index) => (
            <div key={index} className="relative group">
              <div className="service-image relative overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={280}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="services-title text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold text-black">
            1200k More Connect With Our Customers
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">P</span>
              </div>
              <span className="text-gray-700 font-medium text-xs sm:text-sm md:text-base">logoipsum</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
