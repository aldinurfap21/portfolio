// src/components/Hero/Hero.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import TypingText from './TypingText';
import { inter, playfair } from '../Font';
import { typingTexts, heroQuote } from '../../data/heroData';

export default function Hero() {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-start bg-white px-6 pt-28 text-gray-900 transition-colors duration-500 dark:bg-gray-950 dark:text-gray-100">
      <div className={`mb-12 flex justify-center transform transition-all duration-700 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="relative h-40 w-40 md:h-56 md:w-56">
          <img
            src="/pixel.png"
            alt="Aldi Pixel"
            className="h-full w-full rounded-full border-8 border-purple-600 object-contain shadow-lg dark:border-purple-600"
          />
        </div>
      </div>

      <div className={`mb-8 flex flex-col items-center transform transition-all duration-700 delay-200 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <h1 className={`${inter.variable} mb-4 text-center text-4xl font-bold md:text-5xl`}>
          Hi 👋, I'm Aldi Nurfa Pratama
        </h1>

        <p className={`${inter.variable} relative mb-4 flex h-[2.5rem] justify-center text-center text-xl md:text-2xl`}>
          <span className="absolute left-1/2 top-0 -translate-x-1/2 transform text-purple-600 dark:text-purple-600">
            <TypingText texts={typingTexts} />
          </span>
        </p>

        <p className={`${playfair.variable} mt-4 max-w-xl text-center text-lg italic text-gray-700 dark:text-purple-100 md:text-xl`}>
          {heroQuote.text} – {heroQuote.author}
        </p>
      </div>

      <div className={`flex space-x-4 transform transition-all duration-700 delay-400 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <Link
          href="/portfolio"
          className={`${inter.variable} rounded-lg bg-purple-600 px-6 py-3 text-lg font-medium text-white transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] dark:bg-purple-600 dark:hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]`}
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className={`${inter.variable} rounded-lg border-2 border-purple-600 px-6 py-3 text-lg font-medium text-purple-600 transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.4)] dark:border-purple-600 dark:text-purple-600 dark:hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]`}
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}