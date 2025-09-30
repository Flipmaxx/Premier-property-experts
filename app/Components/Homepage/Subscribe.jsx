'use client';

import { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full py-12 sm:py-16 bg-white"  style={{ backgroundImage: "url('/Images/S.png')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="relative">
          <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
                {/* Heading and text */}
                <div className="lg:col-span-2">
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">
                    The Key To Real Estate
                    <br  className='hidden md:inline'/>
                    Success
                  </h3>
                  <p className="mt-3 text-xs sm:text-[15px] text-gray-600 max-w-xl">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text.
                  </p>
                </div>

                {/* Form */}
                <div className="w-full ">
                  <form onSubmit={onSubmit} className="flex items-center justify-center lg:mt-10 gap-3 w-full">
                    <div className="flex-1 relative">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                        className="w-full rounded-md border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 outline-none"
                        aria-label="Email address"
                      />
                    </div>
                    <button
                      type="submit"
                      className="shrink-0 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-teal-700 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                    >
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
