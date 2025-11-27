"use client";
import { Phone, Home, Clock } from "lucide-react";
import Image from "next/image";

export default function FeaturesAndStats() {
  return (
    <section className="w-full bg-[#0A3A32] pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 md:pb-16 lg:pb-20 relative overflow-hidden">

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 xl:-mt-36 2xl:-mt-40">

        {/* Card 1 */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 lg:p-6 xl:p-7 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[160px] xl:min-h-[170px] group hover:scale-[1.02] transition-transform duration-300 border border-gray-100">
          <div className="flex-shrink-0">
            <div className="bg-[#0A3A32] text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl group-hover:bg-[#0c4a40] group-hover:scale-110 transition-all duration-300 shadow-md">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
          </div>
          <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
            <h3 className="text-[#0A3A32] font-bold text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl leading-tight">
              Quality Service
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-sm leading-relaxed sm:leading-snug line-clamp-3">
              We deliver reliable and high-quality property management services, ensuring every requirement is handled with professionalism and care.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 lg:p-6 xl:p-7 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[160px] xl:min-h-[170px] group hover:scale-[1.02] transition-transform duration-300 border border-gray-100">
          <div className="flex-shrink-0">
            <div className="bg-[#0A3A32] text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl group-hover:bg-[#0c4a40] group-hover:scale-110 transition-all duration-300 shadow-md">
              <Home className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
          </div>
          <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
            <h3 className="text-[#0A3A32] font-bold text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl leading-tight">
              Trusted Property
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-sm leading-relaxed sm:leading-snug line-clamp-3">
              Your property is managed with complete transparency, accountability, and trust—ensuring long-term value and peace of mind.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex gap-4 sm:gap-5 p-5 sm:p-6 md:p-7 lg:p-6 xl:p-7 min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[160px] xl:min-h-[170px] group hover:scale-[1.02] transition-transform duration-300 border border-gray-100">
          <div className="flex-shrink-0">
            <div className="bg-[#0A3A32] text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center rounded-lg sm:rounded-xl md:rounded-2xl group-hover:bg-[#0c4a40] group-hover:scale-110 transition-all duration-300 shadow-md">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
            </div>
          </div>
          <div className="flex-1 min-w-0 space-y-2 sm:space-y-3">
            <h3 className="text-[#0A3A32] font-bold text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl leading-tight">
              24/7 Availability
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-base xl:text-sm leading-relaxed sm:leading-snug line-clamp-3">
              Our team is available round-the-clock to support your property needs, ensuring quick responses and timely solutions.
            </p>
          </div>
        </div>

      </div>

    {/* Stats Section */}
<div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 lg:gap-8 text-center text-white mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-3 sm:px-5 lg:px-6">

  {/* Stat 1 */}
  <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-transparent hover:border-white/20">
    <div className="relative">
      <div className="absolute inset-0 bg-[#86efac]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      <img
        src="/Images/V3.png"
        alt="Happy Clients"
        className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300 z-10"
      />
    </div>
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-[#86efac] transition-colors duration-300">
      1,245<span className="text-base sm:text-lg md:text-xl lg:text-2xl">+</span>
    </p>
    <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
      Happy Clients
    </p>
  </div>

  {/* Stat 2 */}
  <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-transparent hover:border-white/20">
    <div className="relative">
      <div className="absolute inset-0 bg-[#86efac]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      <img
        src="/Images/V4.png"
        alt="Projects Completed"
        className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300 z-10"
      />
    </div>
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-[#86efac] transition-colors duration-300">
      3,452<span className="text-base sm:text-lg md:text-xl lg:text-2xl">+</span>
    </p>
    <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
      Projects Completed
    </p>
  </div>

  {/* Stat 3 */}
  <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-transparent hover:border-white/20">
    <div className="relative">
      <div className="absolute inset-0 bg-[#86efac]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      <img
        src="/Images/V5.png"
        alt="Years Of Experience"
        className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300 z-10"
      />
    </div>
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-[#86efac] transition-colors duration-300">
      1<span className="text-base sm:text-lg md:text-xl lg:text-2xl">+</span>
    </p>
    <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
      Years Of Experience
    </p>
  </div>

  {/* Stat 4 */}
  <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-transparent hover:border-white/20">
    <div className="relative">
      <div className="absolute inset-0 bg-[#86efac]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      <img
        src="/Images/V6.png"
        alt="Professional Team"
        className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300 z-10"
      />
    </div>
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-[#86efac] transition-colors duration-300">
      20<span className="text-base sm:text-lg md:text-xl lg:text-2xl">+</span>
    </p>
    <p className="text-xs sm:text-sm md:text-base lg:text-base text-gray-200 group-hover:text-white transition-colors duration-300 font-medium">
      Professional Team
    </p>
  </div>

</div>


      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-[#86efac]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-6 h-6 bg-[#86efac]/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#86efac]/40 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-[#86efac]/25 rounded-full animate-pulse delay-500"></div>
      </div>

    </section>
  );
}