"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Tv,
  Lightbulb,
  Settings,
  Home,
  Building,
  Wrench,
} from "lucide-react";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const services = [
    {
      id: 1,
      title: "Real-Estate Ad Videos",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting.",
      icon: Tv,
    },
    {
      id: 2,
      title: "Rental Solutions",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting.",
      icon: Lightbulb,
    },
    {
      id: 3,
      title: "Property Maintenance & Management",
      description:
        "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply",
      icon: Settings,
    },
    {
      id: 4,
      title: "Property Investment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting.",
      icon: Home,
    },
    {
      id: 5,
      title: "Commercial Real Estate",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting.",
      icon: Building,
    },
    {
      id: 6,
      title: "Property Renovation",
      description:
        "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing and typesetting.",
      icon: Wrench,
    },
  ];
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1); 
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2); 
      } else {
        setCardsPerSlide(3);  
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(services.length / cardsPerSlide);
  const maxSlide = totalSlides - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlide));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 xl:px-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:text-left mb-12">
          <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between">
            <div className="lg:flex-1">
              <p className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
                OUR SERVICES
              </p>
              <h2 className="text-xl md:text-2xl lg:text-4xl lg:mb-7 font-bold text-gray-900 mb-4">
                What Service We Offer
              </h2> 
            </div>
            <div className="lg:flex-1 ">
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

    <div className="overflow-hidden">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
      <div key={slideIndex} className="w-full flex-shrink-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services
            .slice(
              slideIndex * cardsPerSlide,
              slideIndex * cardsPerSlide + cardsPerSlide
            )
            .map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
        </div>
      </div>
    ))}
  </div>
</div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide
                    ? "bg-[#2D7462]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  return (
    <div
      className="relative group cursor-pointer transition-all duration-300 
        bg-white text-gray-900 shadow-lg rounded-2xl p-8 h-full flex flex-col
        hover:bg-[#2D7462] hover:text-white "
    >
      <div className="mb-6">
        <IconComponent
          className="w-12 h-12 text-[#2D7462] group-hover:text-white transition-colors duration-300"
        />
      </div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-sm leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>
      <div className="mt-auto">
        <span
          className="text-sm font-medium text-[#2D7462] group-hover:text-white transition-colors duration-300"
        >
          Read More
        </span>
      </div>
    </div>
  );
};

export default Services;
