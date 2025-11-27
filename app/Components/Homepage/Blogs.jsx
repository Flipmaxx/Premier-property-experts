'use client';

import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: "Top 5 Emerging Property Hotspots in Kochi for 2025",
    author: "Premier Property Xperts",
    date: "Jan, 2025",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/4/UL/HI/OT/127776968/property-dealers-500x500.jpeg",
    href: "#"
  },
  {
    id: 2,
    title: "Why Investing in Premium Villas Is the Smartest Move Today",
    author: "Premier Property Xperts",
    date: "Jan, 2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    href: "#"
  },
  {
    id: 3,
    title: "A Buyer’s Guide: What to Check Before Purchasing a New Apartment",
    author: "Premier Property Xperts",
    date: "Jan, 2025",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    href: "#"
  },
  {
    id: 4,
    title: "Real Estate Market Trends in Kerala: What to Expect in 2025",
    author: "Premier Property Xperts",
    date: "Jan, 2025",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    href: "#"
  },
  {
    id: 5,
    title: "How Premier Property Xperts Ensures Safe & Transparent Property Deals",
    author: "Premier Property Xperts",
    date: "Jan, 2025",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    href: "#"
  },
  {
    id: 6,
    title: "Top Mistakes First-Time Home Buyers Make & How to Avoid Them",
    author: "Premier Property Xperts",
    date: "Jan, 2025",
    image: "https://media.istockphoto.com/id/1498811925/photo/real-estate-agent-or-real-estate-agent-was-holding-the-key-to-the-new-landlord-tenant-or.jpg?s=612x612&w=0&k=20&c=DYZP5A7Cmv7jZZGq-pza6y-HJDK5RN0hN62RS8ILHIs=",
    href: "#"
  }
];


const BlogCard = ({ post }) => {
  return (
    <article className="group rounded-2xl overflow-hidden bg-white">
      <div className="relative w-full h-48 sm:h-56 lg:h-60 overflow-hidden rounded-xl">
       <img
  src={post.image}
  alt={post.title}
  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
/>

      </div>
      <div className="pt-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <h3 className="mt-2 text-gray-900 font-semibold leading-snug">
          {post.title}
        </h3>
        <a href={post.href} className="mt-3 inline-block text-teal-700 text-sm font-medium hover:underline">
          Detail Stories
        </a>
      </div>
    </article>
  );
};

const Blogs = () => {
  return (
    <section className="w-full py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] tracking-wide font-semibold text-gray-500">OUR BLOGS</p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Your Gateway To Exceptional Properties
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-gray-600">
         Property management ensures that your residential or commercial
          property is maintained, rented, and handled with complete care.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-teal-700 text-white text-sm font-medium px-5 py-2 shadow-sm hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3.75 12a.75.75 0 0 1 .75-.75h12.638l-3.439-3.44a.75.75 0 1 1 1.061-1.06l4.75 4.75a.75.75 0 0 1 0 1.06l-4.75 4.75a.75.75 0 1 1-1.06-1.06l3.44-3.44H4.5A.75.75 0 0 1 3.75 12Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
