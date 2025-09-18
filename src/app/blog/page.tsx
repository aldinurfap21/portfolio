// src/app/blog/page.tsx
"use client";
import { useState, useEffect } from "react";
import { inter } from "../components/Font";

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <section className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h1 className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Blog
          </h1>
          <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400 mt-2"></div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: Text */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <section className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className={`${inter.variable} font-semibold text-2xl md:text-3xl mb-6 text-purple-600 dark:text-purple-400`}>
                Coming Soon
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Thoughts, tips, and tech insights are coming soon… <span className="font-semibold">Stay tuned!</span>
              </p>
            </section>
          </div>

          {/* Right: Avatar */}
          <div className="lg:col-span-1 flex justify-center items-start">
            <section className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl p-8 text-center shadow-md">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-600 dark:border-purple-500">
                  <img 
                    src="/pixel5.png" 
                    alt="Pixel avatar writing blog" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`${inter.variable} font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2`}>
                  Sharing Ideas
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  Full-Stack Developer
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Writing about tech, code, and creativity
                </p>
              </div>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}
