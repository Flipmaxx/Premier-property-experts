"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");

  const tabs = ["Buy", "Rent", "Plots/Land", "New Launch", "Projects"];

  return (
    <section
      className="relative w-full min-h-[95vh] md:min-h-[70vh] lg:min-h-[65vh] xl:min-h-[75vh] flex items-center justify-center bg-cover bg-center pt-16 pb-40"
      style={{ backgroundImage: "url('/Images/1.png')" }}
    >
      <div className="absolute inset-0 bg-[#2D7462]/90" />

      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-semibold text-white leading-snug max-w-3xl mx-auto md:mx-0">
          Your Trusted Partner in Real Estate & Property Management
        </h1>

        <p className="mt-4 text-gray-100 max-w-lg md:max-w-xl mx-auto md:mx-0 text-xs md:text-sm lg:text-base leading-relaxed">
          At Premium Property Experts, we specialize in creating seamless real estate experiences —
          from buying and selling to property management and investment consulting. With years of
          expertise in the property market, our mission is to connect clients with premium spaces that
          combine luxury, value, and lifestyle.
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-white text-[#2D7462] px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-[#2D7462] hover:text-white transition text-sm sm:text-sm">
            Explore Now →
          </button>
        </div>
      </div>

      {/* Floating Search Box */}
      <div
        className="
          absolute 
          bottom-[-100px] sm:bottom-[-80px] 
          left-1/2 -translate-x-1/2 
          w-[92%] sm:w-[75%] lg:w-[84%] xl:w-[80%]
          bg-white rounded-2xl shadow-2xl 
          p-5 sm:p-6 lg:p-8 
          flex flex-col gap-6
        "
      >
        {/* Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 border-b border-gray-200 pb-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-sm sm:text-base font-semibold transition ${
                activeTab === tab
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-green-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full">
          <div className="flex items-center justify-between px-4 py-3 w-full md:w-1/3 border-r ">
            <span className="text-gray-600 text-sm sm:text-base font-bold">All Residential</span>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>

         <div className="relative flex-1">
  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m1.21-5.09A7.5 7.5 0 1110.5 3a7.5 7.5 0 017.36 8.56z"
      />
    </svg>
  </span>

  <input
    type="text"
    placeholder='Search "Kochi"'
    className="w-full pl-11 pr-4 py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-green-600/30 text-sm sm:text-base"
  />
</div>

         
          <div className="flex gap-3 justify-between md:justify-start">
            <button className="p-3 rounded-full text-gray-600 bg-blue-100  transition">
              <img src="./Images/F1.png" alt="filter 1" className="w-7 h-7" />
            </button>

            <button className="p-2 rounded-full text-gray-600 bg-blue-100  transition">
              <img src="./Images/F2.png" alt="filter 2" className="w-8 h-6" />
            </button>

            <button className="bg-[#2D7462] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-95 transition text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
