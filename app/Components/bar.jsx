"use client";
import { Phone, Home, Clock } from "lucide-react";
import Image from "next/image";

export default function FeaturesAndStats() {
  return (
    <section className="w-full bg-[#0A3A32] pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-12 md:pb-16 lg:pb-20 relative overflow-hidden\">

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-28 md:-mt-32 lg:-mt-36 xl:-mt-40 2xl:-mt-44">

        {/* Card 1 */}
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 flex gap-3 sm:gap-4 md:gap-5 items-start p-4 sm:p-5 md:p-6 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[140px] xl:min-h-[150px] group hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-[#0A3A32] text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 flex-shrink-0 flex items-center justify-center rounded sm:rounded-md md:rounded-lg group-hover:bg-[#0c4a40] transition-colors duration-300">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[#0A3A32] font-semibold text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-tight sm:leading-snug">
              Quality Service
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed sm:leading-snug mt-1 sm:mt-2 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 flex gap-3 sm:gap-4 md:gap-5 items-start  min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[140px] xl:min-h-[150px] group hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-[#0A3A32] text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 flex-shrink-0 flex items-center justify-center rounded sm:rounded-md md:rounded-lg group-hover:bg-[#0c4a40] transition-colors duration-300">
            <Home className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[#0A3A32] font-semibold text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-tight sm:leading-snug">
              Trusted Property
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed sm:leading-snug mt-1 sm:mt-2 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg hover:shadow-xl transition-all duration-300 flex gap-3 sm:gap-4 md:gap-5 items-start p-4 sm:p-5 md:p-6 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[140px] xl:min-h-[150px] group hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-[#0A3A32] text-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 flex-shrink-0 flex items-center justify-center rounded sm:rounded-md md:rounded-lg group-hover:bg-[#0c4a40] transition-colors duration-300">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-5 lg:h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[#0A3A32] font-semibold text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl leading-tight sm:leading-snug">
              24/7 Availability
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base leading-relaxed sm:leading-snug mt-1 sm:mt-2 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
        </div>

      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-center text-white mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">

        {/* Stat 1 */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
          <div className="relative">
            <Image
              src="/Images/V3.png"
              alt="Happy Clients"
              width={40}
              height={40}
              className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-[#86efac] transition-colors duration-300">
            1,245<span className="text-base sm:text-lg md:text-xl lg:text-2xl">+</span>
          </p>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight">
            Happy Clients
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
          <div className="relative">
            <Image
              src="/Images/V4.png"
              alt="Projects Completed"
              width={40}
              height={40}
              className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-[#86efac] transition-colors duration-300">
            3,452<span className="text-base sm:text-lg md:text-xl lg:text-2xl">+</span>
          </p>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight">
            Projects Completed
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
          <div className="relative">
            <Image
              src="/Images/V5.png"
              alt="Years Of Experience"
              width={40}
              height={40}
              className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-[#86efac] transition-colors duration-300">
            1<span className="text-base sm:text-lg md:text-xl lg:text-2xl">+</span>
          </p>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight">
            Years Of Experience
          </p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group">
          <div className="relative">
            <Image
              src="/Images/V6.png"
              alt="Professional Team"
              width={40}
              height={40}
              className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight group-hover:text-[#86efac] transition-colors duration-300">
            20<span className="text-base sm:text-lg md:text-xl lg:text-2xl">+</span>
          </p>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-200 group-hover:text-white transition-colors duration-300 leading-tight">
            Professional Team
          </p>
        </div>

      </div>

    </section>
  );
}