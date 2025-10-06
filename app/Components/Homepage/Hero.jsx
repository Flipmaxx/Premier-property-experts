"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Buy");

  const tabs = ["Buy", "Rent", "Plots/Land", "New Launch", "Projects"];

  return (
    <section
      className="relative w-full h-[110vh]  md:h-[60vh] lg:h-[50vh] xl:h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/1.png')" }}
    >
      <div className="absolute inset-0 bg-[#2D7462]/80" />

      <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16 text-start md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-xl xl:text-4xl font-medium text-white leading-tight max-w-3xl mx-auto md:mx-0">
          Where Premium Properties Meet Perfect Opportunities
        </h1>

        <p className="mt-4 text-gray-100 max-w-md sm:max-w-lg leading-relaxed mx-auto md:mx-0 text-sm sm:text-base md:text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard.
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          <button className="bg-white text-[#2D7462] px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-semibold shadow-md hover:bg-[#2D7462] transition text-sm sm:text-sm">
            Explore Now →
          </button>
        </div>
      </div>
      <div
        className="absolute bottom-[-70px] sm:bottom-[-60px] left-1/2 -translate-x-1/2 
                   w-[92%] sm:w-4/5 bg-white rounded-2xl shadow-2xl 
                   p-4 sm:p-6 lg:px-10 lg:py-8 flex flex-col gap-4 sm:gap-6"
      >
        <div className="flex flex-wrap justify-center md:justify-start gap-4 border-b border-gray-200 pb-2">
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
                <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-green-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 sm:gap-4 w-full">
          <div className="flex items-center justify-between px-4 py-2.5 w-full md:w-1/4 bg-gray-50 rounded-md border border-gray-200">
            <span className="text-gray-600 text-sm sm:text-base">
              All Residential
            </span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
          </div>
          <div className="hidden md:block h-8 w-px bg-gray-200" />
          <input
            type="text"
            placeholder='Search "Kochi"'
            className="flex-1 px-4 py-2.5 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600/30 text-sm sm:text-base"
          />

          <div className="flex gap-2 sm:gap-3 justify-between md:justify-start">
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition">
              <img src="./Images/F1.png" alt="filter" className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
            <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition">
              <img src="./Images/F2.png" alt="filter 2" className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
            <button className="bg-[#2D7462] text-white px-4 sm:px-6 py-2.5 rounded-lg font-semibold hover:opacity-95 transition text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
