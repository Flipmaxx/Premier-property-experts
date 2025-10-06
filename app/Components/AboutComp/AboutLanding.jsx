import React from 'react';
import Image from 'next/image';

const AboutLanding = () => {
  return (
    <section className="relative w-full h-[30vh] sm:h-[50vh] md:h-[50vh] overflow-hidden">
      <Image
        src="/Images/1.png"
        alt="Kitchen background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[#2D7462]/80"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
          About Us
        </h1>
        <p className="text-sm sm:text-sm md:text-xl lg:text-xl text-white font-medium">
          Expert care for your premium properties.
        </p>
      </div>
    </section>
  );
};

export default AboutLanding;
