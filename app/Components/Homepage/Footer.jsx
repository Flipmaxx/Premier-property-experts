'use client';

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#052213] text-white/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <img src="./Images/2.png" alt="" className='w-1/2 h-20'/>
            <p className="text-sm text-white/80 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white text-[#0E2A1F] grid place-items-center hover:bg-teal-400 hover:text-white transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white text-[#0E2A1F] grid place-items-center hover:bg-teal-400 hover:text-white transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white text-[#0E2A1F] grid place-items-center hover:bg-teal-400 hover:text-white transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white text-[#0E2A1F] grid place-items-center hover:bg-teal-400 hover:text-white transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><a href="#" className="hover:text-white">Homepage</a></li>
              <li><a href="#" className="hover:text-white">All Listings</a></li>
              <li><a href="#" className="hover:text-white">All Locations</a></li>
              <li><a href="#" className="hover:text-white">Package</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><a href="#" className="hover:text-white">Real-Estate Ad Videos</a></li>
              <li><a href="#" className="hover:text-white">Rental Solutions</a></li>
              <li><a href="#" className="hover:text-white">Buying &amp; Selling</a></li>
              <li><a href="#" className="hover:text-white">Property Maintenance &amp; Management</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-4 text-white/90 text-sm">
              <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +91 0000000000</li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> premiumproperty@gmail.com</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Mangalassery Tower, Eloor Rd, Opposite Ganapathy Temple</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




