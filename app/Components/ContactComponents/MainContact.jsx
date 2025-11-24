"use client";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function MainContact() {
  return (
    <div className="w-full bg-white py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <h6 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
            Contact Us
          </h6>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4">
            We Value Your Queries And Feedback
          </h2>
          <p className="text-gray-600 mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className="space-y-5">
            {/* Address */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-5 bg-[#2D7462] text-white rounded-lg">
                <FiMapPin size={22} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-5 bg-[#2D7462] text-white rounded-lg">
                <FiPhone size={22} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Mobile</h4>
                <p className="text-gray-600 text-sm">+91 0000000000</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-5 bg-[#2D7462] text-white rounded-lg">
                <FiMail size={22} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600 text-sm">premm@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
          <p className="text-gray-600 mb-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
            />

            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:border-green-600"
            >
              <option>Select subject</option>
              <option>General Inquiry</option>
              <option>Business</option>
            </select>

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-600"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#2D7462] hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Submit →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
