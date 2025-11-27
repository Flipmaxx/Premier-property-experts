"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="relative w-full bg-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-20 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] xs:h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] opacity-70 pointer-events-none">
        <img
          src="./Images/A1.png"
          alt="background city"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">

        {/* LEFT SECTION */}
        <div className="w-full">
          <p className="text-xs xs:text-sm font-semibold text-gray-600 uppercase mb-2">
            Get In Touch
          </p>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 leading-tight sm:leading-snug mb-4">
            Your Gateway To Exceptional <br className="hidden xs:block" /> Properties
          </h2>

          <p className="text-gray-500 mb-6 sm:mb-8 max-w-md text-sm leading-relaxed">
        At Premium Property Experts, we don’t just manage properties — we build lasting relationships based on trust, results, and excellence.
          </p>

          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
            {[
              { icon: Phone, title: "Phone Number", value: "+91 8590208940" },
              { icon: Mail, title: "Email Address", value: "premierpropertyxperts@gmail.com" },
              { icon: MapPin, title: "Location", value: "Flipmaxx Global LLP, North Kalamassery, Kochi" },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg sm:rounded-xl p-3 xs:p-4 shadow-sm sm:shadow-md transition-all duration-300 hover:bg-[#2D7462] hover:text-white hover:shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4 xs:w-5 xs:h-5 text-[#2D7462] group-hover:text-white transition" />
                  <h4 className="font-semibold text-xs xs:text-sm">{item.title}</h4>
                </div>
                <p className="text-xs xs:text-sm opacity-90 leading-relaxed break-words">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* SOCIAL */}
          <div>
            <p className="font-semibold text-gray-800 mb-3 text-sm xs:text-base">
              Follow Our Social Media
            </p>
            <div className="flex flex-wrap gap-2 xs:gap-3">
              {["facebook-f", "twitter", "linkedin-in", "instagram"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 xs:w-9 xs:h-9 flex items-center justify-center rounded-full bg-[#2D7462] text-white hover:bg-[#225b4e] transition transform hover:scale-105"
                >
                  <i className={`fab fa-${icon} text-xs xs:text-sm`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
<div className="bg-white shadow-lg sm:shadow-xl rounded-xl p-5 xs:p-6 sm:p-8 lg:p-10 w-full z-10">
  <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
    Get In Touch
  </h3>
  <p className="text-xs xs:text-sm text-gray-500 mb-5">
    Lorem Ipsum is simply dummy text.
  </p>

  <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
    {/* NAME */}
    <div className="flex flex-col col-span-1">
      <label className="text-xs xs:text-sm text-gray-600 mb-1">Your Name</label>
      <input
        type="text"
        placeholder="John Doe"
        className="form-input text-xs xs:text-sm w-full"
      />
    </div>

    {/* EMAIL */}
    <div className="flex flex-col col-span-1">
      <label className="text-xs xs:text-sm text-gray-600 mb-1">Email Address</label>
      <input
        type="email"
        placeholder="johndoe@gmail.com"
        className="form-input text-xs xs:text-sm w-full"
      />
    </div>

    {/* PHONE */}
    <div className="flex flex-col col-span-1">
      <label className="text-xs xs:text-sm text-gray-600 mb-1">Phone</label>
      <input
        type="text"
        placeholder="+91 0000000000"
        className="form-input text-xs xs:text-sm w-full"
      />
    </div>

    {/* SUBJECT */}
    <div className="flex flex-col col-span-1">
      <label className="text-xs xs:text-sm text-gray-600 mb-1">Select Subject</label>
      <select className="form-input text-xs xs:text-sm w-full">
        <option>Select subject</option>
        <option>Buying</option>
        <option>Selling</option>
        <option>Leasing</option>
      </select>
    </div>

    {/* MESSAGE — full width */}
    <div className="col-span-1 sm:col-span-2">
      <label className="text-xs xs:text-sm text-gray-600 mb-1">Message</label>
      <textarea
        rows="4"
        placeholder="Enter message"
        className="form-input text-xs xs:text-sm w-full resize-vertical"
      />
    </div>

    {/* SUBMIT BUTTON — full width */}
    <div className="col-span-1 sm:col-span-2">
      <button
        type="submit"
        className="bg-[#2D7462] text-white px-6 py-3 rounded-md text-sm sm:text-base w-full 
        hover:bg-[#225B4E] transition transform hover:scale-105 active:scale-95"
      >
        Submit →
      </button>
    </div>
  </form>
</div>

      </div>

      {/* FORM INPUT UTILITY CLASS */}
      <style>{`
        .form-input {
          @apply w-full p-2 xs:p-3 border border-gray-300 rounded-md text-xs xs:text-sm bg-white
          focus:outline-none focus:ring-2 focus:ring-[#2D7462] focus:border-transparent
          transition duration-200 ease-in-out;
        }
      `}</style>
    </section>
  );
}