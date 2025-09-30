'use client';

import Image from 'next/image';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavLink = ({ active, children }) => (
  <a
    href="#"
    className={
      active
        ? 'inline-flex items-center rounded-md bg-white px-5 py-2 text-sm font-medium text-black hover:bg-teal-600 hover:text-white'
        : 'inline-flex items-center rounded-md bg-white px-5 py-2 text-sm font-medium text-black hover:bg-teal-600 hover:text-white'
    }
  >
    {children}
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-gray-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <Image src="/Images/2.png" alt="Premier Property" width={120} height={80} className="w-auto h-19 object-contain" />
          </div>

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink active>Home</NavLink>
            <NavLink>About Us</NavLink>
            <a href="#" className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-800 hover:text-teal-700">
              Services
              <ChevronDown className="w-4 h-4" />
            </a>
            <NavLink>Contact Us</NavLink>
          </nav>

          {/* Right: Call us */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-teal-700 text-white grid place-items-center">
              <Phone className="w-4 h-4" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-gray-900">Call Us Now</div>
              <div className="text-[11px] text-gray-500">Ph No: +91 0000000000</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <>
            {/* Overlay */}
            <div className="md:hidden fixed inset-0 bg-black/20" onClick={() => setOpen(false)} />
            {/* Panel */}
            <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-white border-t border-gray-100 overflow-y-auto animate-[slideDown_200ms_ease-out]">
              <nav className="px-4 py-4 space-y-2">
                <a href="#" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-900 bg-gray-50">Home</a>
                <a href="#" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">About Us</a>
                <a href="#" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Services</a>
                <a href="#" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Contact Us</a>
                <div className="mt-3 flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-2">
                  <div className="w-9 h-9 rounded-md bg-teal-700 text-white grid place-items-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-gray-900">Call Us Now</div>
                    <div className="text-[11px] text-gray-500">Ph No: +91 0000000000</div>
                  </div>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
