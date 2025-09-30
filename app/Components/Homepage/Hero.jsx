"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");

  const tabs = ["Buy", "Rent", "Plots/Land", "New Launch", "Projects"];

  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/1.png')" }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-700/50" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-medium text-white text-start leading-tight max-w-4xl mx-auto md:mx-0">
          Where Premium Properties <br /> Meet Perfect Opportunities
        </h1>
        <p className="mt-4 text-gray-100 max-w-lg leading-relaxed mx-auto md:mx-0 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard.
        </p>

        <div className="mt-6">
          <button className="bg-white text-green-600 px-6 py-2.5 rounded-md font-semibold shadow hover:bg-green-50 transition text-sm md:text-base">
            Explore Now →
          </button>
        </div>
      </div>

      {/* Search Box */}
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[94%] md:w-4/5 bg-white rounded-xl shadow-2xl p-4 md:p-6 lg:py-10 flex flex-col gap-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 md:gap-6 border-b border-gray-200 pb-2 justify-center md:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-sm md:text-base font-semibold transition ${
                activeTab === tab
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-green-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

         {/* Search Filters */}
         <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 sm:gap-4 w-full">
           <div className="flex items-center px-4 py-2 w-full md:w-1/4 bg-gray-50 rounded-md">
             <span className="text-gray-600 text-sm flex-1">All Residential</span>
             <ChevronDown className="w-4 h-4 text-gray-500" />
           </div>
           <div className="hidden md:block h-8 w-px bg-gray-200" />
           <input
             type="text"
             placeholder='Search "Kochi"'
             className="flex-1 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600/30 text-sm md:text-base"
           />

           <div className="flex gap-2 justify-between md:justify-start">
             <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition">
               <img src="./Images/F1.png" alt="filter" className="w-7 h-7" />
             </button>
             <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition">
                <img src="./Images/F2.png" alt="filter 2" className="w-7 h-7" />
             </button>
             <button className="bg-[#2D7462] text-white px-4 md:px-6 py-2 rounded-lg font-semibold hover:opacity-95 transition text-sm md:text-base">
               Get Started
             </button>
           </div>
         </div>
      </div>
    </section>
  );
}
