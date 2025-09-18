// src/components/Hero.tsx
'use client';
import Link from 'next/link';
import TypingText from './TypingText';
import { inter, playfair } from '../Font';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 200); // sama kayak di About
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-start items-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-6 pt-28 relative transition-colors duration-500">
      {/* Pixel Avatar */}
      <div
        className={`mb-12 flex justify-center transform transition-all duration-700 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="relative w-40 h-40 md:w-56 md:h-56">
          <img
            src="/pixel.png"
            alt="Aldi Pixel"
            className="w-full h-full object-contain rounded-full border-8 border-purple-600 dark:border-purple-600 shadow-lg"
          />
        </div>
      </div>

      {/* TypingText + Quote Container */}
      <div
        className={`flex flex-col items-center mb-8 transform transition-all duration-700 delay-200 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h1
          className={`${inter.variable} font-bold text-4xl md:text-5xl text-center mb-4`}
        >
          Hi 👋, I'm Aldi Nurfa Pratama
        </h1>

        {/* TypingText */}
        <p
          className={`text-xl md:text-2xl text-center flex justify-center h-[2.5rem] mb-4 relative ${inter.variable}`}
        >
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-purple-600 dark:text-purple-600">
            <TypingText texts={['Programmer', 'Web Developer', 'Freelancer', 'Nonstop Learner']} />
          </span>
        </p>

        {/* Quote */}
        <p
          className={`${playfair.variable} text-lg md:text-xl text-center italic text-gray-700 dark:text-purple-100 max-w-xl mt-4`}
        >
          "Intelligence without ambition is a bird without wings." – Salvador Dali
        </p>
      </div>

      {/* CTA Buttons */}
      <div
        className={`flex space-x-4 transform transition-all duration-700 delay-400 ${
          showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <Link
          href="/portfolio"
          className={`${inter.variable} font-medium text-lg px-6 py-3 bg-purple-600 text-white rounded-lg transition-all duration-300
            hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]
            dark:bg-purple-600 dark:hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]`}
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className={`${inter.variable} font-medium text-lg px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg transition-all duration-300
            hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.4)]
            dark:border-purple-600 dark:text-purple-600 dark:hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]`}
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
