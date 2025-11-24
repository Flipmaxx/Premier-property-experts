'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Whowe = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-0 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 uppercase tracking-widest">
              WHO WE ARE
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-gray-900 leading-snug">
              Passionate Experts Defining <br className="hidden sm:block" />
              <span className="text-[#2D7462]">Premium Living Standards.</span>
            </h1>
            <div className="space-y-4 sm:space-y-6 max-w-2xl mx-auto lg:mx-0">
              <div className="relative pl-5 sm:pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2D7462] rounded-full"></div>
                <p className="text-gray-700 text-sm sm:text-sm md:text-lg leading-relaxed">
                  We bring together vision, expertise, and innovation to deliver
                  extraordinary living spaces designed for comfort and
                  sophistication.
                </p>
              </div>

              <p className="text-gray-600 text-sm sm:text-sm md:text-lg leading-relaxed">
                From residential masterpieces to commercial landmarks, our
                projects redefine luxury and functionality. With a legacy built
                on trust, quality, and design excellence, we continue to elevate
                living standards across communities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-4 sm:pt-6 justify-center lg:justify-start flex-wrap">
              <button className="bg-[#2D7462] hover:bg-[#245a4d] text-white px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300 group">
                Explore Our Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-white hover:bg-gray-50 text-[#2D7462] border-2 border-[#2D7462] px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 rounded-lg font-medium flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300 group">
                Learn More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-sm sm:max-w-md lg:max-w-none mx-auto">
              <div className="w-full aspect-square relative">
                <img
                  src="/Images/C1.png"
                  alt="Professional real estate experts"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-4 right-4 sm:bottom-4 sm:right-4 bg-white rounded-md p-3 sm:p-4 shadow-lg border border-gray-200">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      Properties
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Whowe;
