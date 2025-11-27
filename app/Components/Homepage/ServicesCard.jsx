"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// SVG Icon Components
const HomeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2L4 10V28H12V20H20V28H28V10L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V28H20V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ManageIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M4 12H28" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 22H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="22" cy="20" r="2" fill="currentColor"/>
  </svg>
);

const InvestIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 20L14 14L19 19L24 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M26 10H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M26 14H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 10H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 14H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const RentIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10H26C27.1046 10 28 10.8954 28 12V26C28 27.1046 27.1046 28 26 28H10C8.89543 28 8 27.1046 8 26V22" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 12V8C16 6.89543 15.1046 6 14 6H8C6.89543 6 6 6.89543 6 8V14C6 15.1046 6.89543 16 8 16H12" stroke="currentColor" strokeWidth="2"/>
    <path d="M19 9L23 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M23 9L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function ServicesSlider() {
  const services = [
    {
      title: "Property Sales & Purchases",
      desc: "Expert assistance in buying and selling premium residential and commercial properties.",
      icon: HomeIcon,
    },
    {
      title: "Property Management",
      desc: "End-to-end management solutions, ensuring your property stays profitable and well-maintained.",
      icon: ManageIcon,
    },
    {
      title: "Investment Consulting",
      desc: "Strategic advice to help you make informed, profitable real estate decisions.",
      icon: InvestIcon,
    },
    {
      title: "Rental & Leasing Services",
      desc: "Comprehensive tenant management and leasing support for owners and investors.",
      icon: RentIcon,
    },
  ];

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    if (index === services.length - (isMobile ? 1 : 2)) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index === 0) {
      setIndex(services.length - (isMobile ? 1 : 2));
    } else {
      setIndex(index - 1);
    }
  };

  const getTranslateX = () => {
    if (isMobile) {
      return `translateX(-${index * 100}vw)`;
    }
    return `translateX(-${index * 384}px)`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      
      {/* Headings */}
      <div className="text-center sm:text-left">
        <p className="text-sm sm:text-base text-gray-500 font-semibold uppercase tracking-wide">
          OUR SERVICES
        </p>
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-3xl font-bold text-gray-900 leading-tight">
            What Service We <br className="hidden sm:block" />Offer
          </h2>
          <p className="text-sm sm:text-base md:text-base text-gray-600 leading-relaxed max-w-xl">
            At Premium Property Experts, we provide comprehensive real estate solutions 
            tailored to meet your unique needs and investment goals.
          </p>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative flex items-center mt-8 sm:mt-12 lg:mt-16">
        
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute -left-4 sm:-left-6 md:-left-8 z-20 bg-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-xl border border-gray-100"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>

        {/* Cards Container */}
        <div className="w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 lg:gap-8 transition-transform duration-500 ease-out"
            style={{ transform: getTranslateX() }}
          >
            {services.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={i}
                  className={`flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[450px] lg:w-[500px] p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 ${
                    i === index
                      ? "bg-[#2D7462] text-white scale-100 sm:scale-105"
                      : "bg-white text-gray-800 scale-95 sm:scale-100 opacity-90 sm:opacity-100"
                  } hover:scale-105 hover:shadow-xl`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 ${
                    i === index ? "bg-white/20" : "bg-[#0A3A32]/10"
                  }`}>
                    <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
                      i === index ? "text-white" : "text-[#0A3A32]"
                    }`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 ${
                      i === index ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>

                  {/* Read More */}
                  <div
                    className={`inline-flex items-center gap-2 text-sm sm:text-base font-semibold transition-all duration-300 ${
                      i === index ? "text-white hover:text-white/80" : "text-[#0A3A32] hover:text-[#0c4a40]"
                    }`}
                  >
                    Read More
                    <span className={`transition-transform duration-300 group-hover:translate-x-1 ${
                      i === index ? "text-white" : "text-[#0A3A32]"
                    }`}>
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute -right-4 sm:-right-6 md:-right-8 z-20 bg-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-xl border border-gray-100"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 gap-2 sm:gap-3">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              i === index 
                ? "bg-[#0A3A32] scale-125" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Mobile Instructions */}
      <div className="sm:hidden text-center mt-4">
        <p className="text-xs text-gray-500">Swipe to navigate</p>
      </div>
    </div>
  );
}