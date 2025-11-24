"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="bg-white">
      <section className="py-12 sm:py-16 py-6 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase text-gray-500 tracking-wider">
                ABOUT US
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 leading-tight">
                Explore Real Estate In Popular Indian Cities
              </h2>
              <p className="text-gray-600 mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed">
                At Premium Property Experts, we specialize in creating seamless real estate experiences — 
                from buying and selling to property management and investment consulting.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                { 
                  img: "/Images/V1.png", 
                  title: "Best solutions", 
                  desc: "designed to help property owners maximize returns" 
                },
                { 
                  img: "/Images/V2.png", 
                  title: "Quality services", 
                  desc: "We take pride in delivering transparent and maintain peace of mind." 
                },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.img}
                      alt="icon"
                      width={28}
                      height={28}
                      className="w-7 h-7"
                    />
                    <h1 className="text-lg font-medium text-gray-900">{item.title}</h1>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-[#2D7462] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-[#256d5c] transition-all text-sm sm:text-base w-fit">
              More About Us
              <FaArrowRight className="text-sm" />
            </button>
          </div>
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/Images/A4.png"
                alt="Real Estate Service"
                width={600}
                height={500}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white shadow-lg rounded-lg p-4 flex items-center gap-3 max-w-[200px]">
                <div className="w-10 h-10 bg-[#2D7462] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Contact Us</h4>
                  <p className="text-xs text-gray-600">+91 0000000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}