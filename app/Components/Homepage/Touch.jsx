"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="relative w-full bg-white py-16 px-5 sm:px-10 lg:px-20 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full opacity-90 pointer-events-none">
        <img
          src="./Images/A1.png"
          alt="background city"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
        <div>
          <p className="text-sm font-semibold text-gray-600 tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Your Gateway To Exceptional{" "}
            <br className="hidden sm:block" /> Properties
          </h2>
          <p className="text-gray-500 mb-10 max-w-md text-sm sm:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            <div className="group bg-white text-black rounded-xl p-5 flex flex-col items-start shadow-md transition-all duration-300 hover:bg-[#2D7462] hover:text-white hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-[#2D7462] group-hover:text-white transition-colors duration-300" />
                <h4 className="font-semibold text-base">Phone Number</h4>
              </div>
              <p className="text-sm opacity-90">+91 0000000000</p>
            </div>

            <div className="group bg-white text-black rounded-xl p-5 flex flex-col items-start shadow-md transition-all duration-300 hover:bg-[#2D7462] hover:text-white hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-[#2D7462] group-hover:text-white transition-colors duration-300" />
                <h4 className="font-semibold text-base">Email Address</h4>
              </div>
              <p className="text-sm opacity-90">premium@gmail.com</p>
            </div>
            <div className="group bg-white text-black rounded-xl p-5 flex flex-col items-start shadow-md transition-all duration-300 hover:bg-[#2D7462] hover:text-white hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#2D7462] group-hover:text-white transition-colors duration-300" />
                <h4 className="font-semibold text-base">Location</h4>
              </div>
              <p className="text-sm opacity-90">
                Lorem Ipsum is simply dummy text of the printing.
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-3">
              Follow Our Social Media
            </p>
            <div className="flex flex-wrap gap-3">
              {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2D7462] text-white hover:bg-[#225b4e] transition"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 relative z-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Get In Touch
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Your name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2D7462]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Email address
              </label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2D7462]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Phone</label>
              <input
                type="text"
                placeholder="+91 0000000000"
                className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2D7462]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Select subjects
              </label>
              <select className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2D7462]">
                <option>Select subject</option>
                <option>Buying</option>
                <option>Selling</option>
                <option>Leasing</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm text-gray-600 mb-1 block">
                Message
              </label>
              <textarea
                rows="3"
                placeholder="Enter message"
                className="w-full p-3 border border-gray-200 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2D7462]"
              ></textarea>
            </div>
            <div className="sm:col-span-2 flex justify-start mt-2">
              <button
                type="submit"
                className="bg-[#2D7462] text-white px-6 py-3 rounded-md text-sm sm:text-base hover:bg-[#225b4e] transition"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
