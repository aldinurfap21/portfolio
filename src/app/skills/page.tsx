// src/app/skills/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { logos } from '../data/logos';
import { inter } from '../components/Font';
import { skillCategories, currentFocus } from '../data/skillsData';

export default function SkillsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % logos.length),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <section className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h1 className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Skills & Tools
          </h1>
          <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400 mt-2" />
        </section>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <section className={`mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className={`${inter.variable} font-semibold text-2xl md:text-3xl mb-8 text-purple-600 dark:text-purple-400`}>
                Technologies I Work With
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I work with a variety of tools and frameworks—frontend, backend,
                databases, and servers—to build modern web applications. From
                responsive interfaces to robust backend systems, I focus on
                clean, maintainable, and high-performance solutions.
              </p>
            </section>

            <section className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className={`${inter.variable} font-semibold text-xl mb-6 text-gray-900 dark:text-gray-100`}>
                Frontend Development
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I build responsive interfaces with{' '}
                <span className="font-bold text-purple-600 dark:text-purple-400">
                  JavaScript
                </span>
                {' '}and frameworks like{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  React
                </span>
                ,{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Next.js
                </span>
                , and{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Vue.js
                </span>
                .{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Tailwind CSS
                </span>
                {' '}keeps designs clean, scalable, and modern.
              </p>
            </section>

            <section className={`mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className={`${inter.variable} font-semibold text-xl mb-6 text-gray-900 dark:text-gray-100`}>
                Backend & Server-Side
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I build scalable backends with{' '}
                <span className="font-bold text-purple-600 dark:text-purple-400">
                  PHP
                </span>
                {' '}(
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Laravel
                </span>
                ,{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  CodeIgniter
                </span>
                ),{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Node.js
                </span>
                , and APIs. I manage{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  MySQL
                </span>
                ,{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  MongoDB
                </span>
                , and deploy apps on{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  Linux
                </span>
                {' '}servers.
              </p>
            </section>

            <section className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                {logos.map((logo, i) => {
                  const isActive = i === activeIndex;
                  const isHovered = i === hoverIndex;
                  const showEffect = isActive || isHovered;

                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center cursor-pointer"
                      onMouseEnter={() => setHoverIndex(i)}
                      onMouseLeave={() => setHoverIndex(null)}
                    >
                      <a
                        href={logo.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-purple-50 dark:hover:bg-gray-800"
                      >
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className={`w-12 h-12 object-contain transition-all duration-300 ${
                            showEffect
                              ? 'grayscale-0 scale-110 drop-shadow-md'
                              : 'grayscale opacity-60 scale-100'
                          }`}
                        />
                        <span
                          className={`mt-3 text-sm font-medium text-center text-gray-700 dark:text-gray-300 transition-opacity duration-300 ${
                            showEffect ? 'opacity-100' : 'opacity-70'
                          }`}
                        >
                          {logo.name}
                        </span>
                      </a>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <section className={`mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl p-8 text-center shadow-md">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-600 dark:border-purple-500">
                  <img
                    src="/lucu.png"
                    alt="Aldi with Development Tools"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`${inter.variable} font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2`}>
                  My Tech Stack
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  Mostly Web Developer 
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Always learning, building, and improving
                </p>
              </div>
            </section>

            <section className={`mb-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className={`${inter.variable} font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100`}>
                Skill Categories
              </h3>
              <div className="space-y-4">
                {skillCategories.map((category) => (
                  <div key={category.title} className={`p-3 ${category.color} rounded-lg`}>
                    <span className="flex items-center space-x-2 mb-2">
                      <span className={`w-3 h-3 ${category.dotColor} rounded-full shadow-sm`} />
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        {category.title}
                      </span>
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className={`${inter.variable} font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100`}>
                Current Focus
              </h3>
              <div className="space-y-3 text-sm">
                {currentFocus.map(({ label, value, className }) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      {label}:
                    </span>
                    <span className={`font-medium text-gray-800 dark:text-gray-200 ${className || ''}`}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}