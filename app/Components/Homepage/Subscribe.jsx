'use client';

import { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full py-16 sm:py-20 bg-gray-50">
      <img
        src="./Images/G1.png"
        alt="Decorative Background"
        className="absolute inset-0 w-full h-[55vh] object-cover opacity-50 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl ring-1 ring-black/5 overflow-hidden">
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  The Key To Real Estate <br className="hidden md:inline" />
                  Success
                </h3>
                <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl">
                  We take pride in delivering transparent, efficient, and high-quality services, designed to help property owners maximize returns and maintain peace of mind.
                </p>
              </div>

              <div className="w-full">
                <form
                  onSubmit={onSubmit}
                  className="flex flex-col sm:flex-row items-center gap-3 w-full"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    className="flex-1 w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 outline-none"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-teal-700 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
