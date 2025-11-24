'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Plus, ChevronRight, Headphones } from 'lucide-react';

const faqs = [
  {
    q: 'How do I search for properties on premium property exports',
    a: 'Use the search bar to filter by location, property type, price range, and amenities. You can also save your filters and receive alerts when new listings match your criteria.'
  },
  {
    q: 'How do I contact an agent for a property',
    a: 'Open the property page and click “Contact Agent”. You can call, send a message, or schedule a viewing directly from the listing.'
  },
  {
    q: 'Can I list my property on your platform',
    a: 'Yes. Create an account, go to “List Property”, and follow the guided steps. Our team can help you with photos, pricing, and promotion.'
  },
  {
    q: 'Do you verify the properties and owners',
    a: 'We conduct multi-step verification, including ownership checks and on-site media verification, to maintain a safe and trusted marketplace.'
  }
];

const AccordionItem = ({ index, isOpen, onToggle, question, answer }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 transition">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        className="w-full flex items-center justify-between px-5 py-4 text-left rounded-xl"
      >
        <div className="flex items-center gap-3">
          <ChevronRight
            className={`w-4 h-4 text-teal-600 transition-transform duration-300 ${
              isOpen ? 'rotate-90' : ''
            }`}
          />
          <span className="text-sm sm:text-base font-medium text-gray-900">
            {question}
          </span>
        </div>
        <Plus
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-45 text-teal-600' : ''
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        id={`faq-panel-${index}`}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-[max-height] duration-400 ease-in-out"
        aria-hidden={!isOpen}
      >
        <div
          ref={contentRef}
          className="px-12 pb-4 text-sm text-gray-600 leading-relaxed"
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <section className="w-full  py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg w-full h-[300px] sm:h-[400px] lg:h-[460px]">
              <Image
                src="/Images/Fm1.png"
                alt="Luxury villa with infinity pool"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 flex justify-center">
              <div className="flex items-center gap-3 rounded-sm bg-teal-700 text-white px-6 py-4 shadow-md">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">24/7 Support</p>
                  <p className="text-xs text-white/80">
                    Have any questions? Contact Us
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <p className="uppercase tracking-wide text-xs font-semibold text-gray-500 mb-2">
              FAQ
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-8">
              If You Want To Know <br />
              Frequently Ask Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  index={idx}
                  isOpen={openIndex === idx}
                  onToggle={() => toggle(idx)}
                  question={item.q}
                  answer={item.a}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;