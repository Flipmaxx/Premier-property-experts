"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="relative w-full bg-white py-10 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 w-full opacity-80 pointer-events-none">
        <img
          src="./Images/A1.png"
          alt="background city"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
        
        {/* LEFT SECTION */}
        <div>
          <p className="text-sm font-semibold text-gray-600 uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Your Gateway To Exceptional <br className="hidden sm:block" /> Properties
          </h2>

          <p className="text-gray-500 mb-8 max-w-md text-sm sm:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Phone, title: "Phone Number", value: "+91 0000000000" },
              { icon: Mail, title: "Email Address", value: "premium@gmail.com" },
              { icon: MapPin, title: "Location", value: "Lorem Ipsum Text, City" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white text-black rounded-xl p-5 flex flex-col items-start shadow-md transition-all duration-300 hover:bg-[#2D7462] hover:text-white hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-5 h-5 text-[#2D7462] group-hover:text-white transition-colors duration-300" />
                  <h4 className="font-semibold text-base">{item.title}</h4>
                </div>
                <p className="text-sm opacity-90">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold text-gray-800 mb-3">
              Follow Our Social Media
            </p>
            <div className="flex flex-wrap gap-3">
              {["facebook-f", "twitter", "linkedin-in", "instagram"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2D7462] text-white hover:bg-[#225b4e] transition"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10 relative z-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Get In Touch</h3>
          <p className="text-sm text-gray-500 mb-6">Lorem Ipsum is simply dummy text.</p>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="input-bordered"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Email Address</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="input-bordered"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Phone</label>
              <input
                type="text"
                placeholder="+91 0000000000"
                className="input-bordered"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Select Subject</label>
              <select className="input-bordered">
                <option>Select subject</option>
                <option>Buying</option>
                <option>Selling</option>
                <option>Leasing</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm text-gray-600 mb-1 block">Message</label>
              <textarea rows="4" placeholder="Enter message" className="input-bordered"></textarea>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="bg-[#2D7462] text-white px-6 py-3 rounded-md text-sm sm:text-base w-full sm:w-auto hover:bg-[#225b4e] transition"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Input Style */}
      <style>{`
        .input-bordered {
          @apply w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#2D7462];
        }
      `}</style>
    </section>
  );
}
