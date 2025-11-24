'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { name: 'Home', href: '/', active: false },
  { name: 'About Us', href: '/About' },
  { name: 'Services', href: '/services', dropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact Us', href: '/Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <header
      className={`w-full sticky top-0 z-[60] transition-all duration-300 px-2 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto ">
        <div className="flex h-20 items-center justify-between gap-6">
          <div
            onClick={() => router.push('/')}
            className="flex items-center gap-3 shrink-0 cursor-pointer"
          >
            <Image
              src="/Images/2.png"
              alt="Premier Property"
              width={140}
              height={80}
              className="w-auto h-16 object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition group ${
                  link.active
                    ? 'text-[#2D7462]'
                    : 'text-gray-700 hover:text-[#2D7462]'
                }`}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown className="w-4 h-4 inline-block ml-1 text-gray-500 group-hover:text-[#2D7462]" />
                )}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#2D7462] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

       
          <div className="hidden sm:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2D7462] text-white grid place-items-center shadow-md hover:scale-105 transition-transform duration-300">
              <Phone className="w-4 h-4" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">Call Us Now</p>
              <p className="text-[12px] text-gray-600">+91 00000 00000</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-[#2D7462] hover:bg-gray-100 transition"
            aria-label="Toggle Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white z-[70] flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out h-screen ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-5 p-3 rounded-full hover:bg-gray-100 transition"
          aria-label="Close Menu"
        >
          <X className="w-7 h-7 text-[#2D7462]" />
        </button>

        <div className="mb-12">
          <Image
            src="/Images/2.png"
            alt="Premier Property"
            width={150}
            height={90}
            className="object-contain cursor-pointer"
            onClick={() => handleNavClick('/')}
          />
        </div>

  
        <nav className="flex flex-col space-y-8 w-full max-w-xs">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => handleNavClick(link.href)}
              className={`text-xl font-semibold py-3 transition-all duration-200 ${
                link.active
                  ? 'text-[#2D7462] border-b-2 border-[#2D7462]'
                  : 'text-[#2D7462] hover:bg-gray-50 rounded-lg'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-[#2D7462] mt-8">
          <div className="w-14 h-14 rounded-full bg-[#2D7462] text-white grid place-items-center shadow-md">
            <Phone className="w-6 h-6" />
          </div>
          <div className="leading-tight text-left">
            <p className="text-lg font-semibold">Call Us Now</p>
            <p className="text-base">+91 00000 00000</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
