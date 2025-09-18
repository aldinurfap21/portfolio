// src/app/about/page.tsx
"use client";

import { inter, playfair } from '../components/Font';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        
       {/* Header Section */}
<section
  className={`mb-12 transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
  }`}
>
  <h1 className="text-sm font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
    About Me
  </h1>
  <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400 mt-2"></div>
</section>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            
            {/* Introduction */}
            <section className={`mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className={`${inter.variable} font-semibold text-2xl md:text-3xl mb-8 text-purple-600 dark:text-purple-400`}>
                Hello, I'm Aldi 👋
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I'm a self-taught developer from <span className="font-semibold text-purple-600 dark:text-purple-400">Bandung, Indonesia</span>, 
                driven by curiosity and a passion for technology. My journey didn't start in a classroom, but through late nights, 
                countless tutorials, and the excitement of seeing code come to life.
              </p>
            </section>

            {/* Development Journey */}
            <section className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Over time, this curiosity has grown into a deep interest in building practical digital solutions. 
                I've learned to be resourceful, persistent, and adaptable—skills that come naturally when you teach yourself to code.
              </p>
            </section>

            {/* Technical Foundation */}
            <section className={`mb-10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                My technical foundation lies in <span className="font-bold text-purple-600 dark:text-purple-400">JavaScript and PHP</span>, 
                with experience building everything from dynamic web applications to backend systems, often running on 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> Linux</span> as my daily environment.
              </p>
            </section>

            {/* Collaboration & Projects */}
            <section className={`mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-800 rounded-lg p-8 border-l-4 border-purple-600 dark:border-purple-500 shadow-md">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  I'm open to <span className="font-bold text-purple-600 dark:text-purple-400">collaborations and freelance projects</span>, 
                  especially those involving web applications, backend development, or system management.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  For me, every project is not just about writing code—it's about solving problems and creating something valuable.
                </p>
              </div>
            </section>

            {/* Quote */}
            <section className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center p-8 bg-gradient-to-r from-white via-purple-50 to-white dark:from-gray-800 dark:via-gray-850 dark:to-gray-800 rounded-2xl border border-purple-100 dark:border-gray-700 shadow-lg">
                <p className={`${playfair.variable} italic text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-4`}>
                  "The future belongs to those who learn more skills and combine them in creative ways."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  — Robert Greene
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            
            {/* Profile Card */}
<section className={`mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl p-8 text-center shadow-md">
    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-600 dark:border-purple-500">
      <img 
        src="/pixel2.png" 
        alt="Aldi Pixel Photo" 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className={`${inter.variable} font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2`}>
      Aldi Nurfa Pratama
    </h3>
    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
      Mostly Web Developer
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Passionate about building practical solutions
    </p>
  </div>
</section>


            {/* Core Technologies */}
            <section className={`mb-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className={`${inter.variable} font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100`}>
                Core Technologies
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">JavaScript</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full shadow-sm"></div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">PHP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-800 dark:bg-gray-400 rounded-full shadow-sm"></div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Linux</span>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className={`mb-8 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className={`${inter.variable} font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100`}>
                Services Available
              </h3>
              <div className="space-y-3 text-sm">
                {["Web Applications", "Backend Development", "System Management", "Collaborations"].map((service, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Facts */}
            <section className={`transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className={`${inter.variable} font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100`}>
                Quick Facts
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Location:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Bandung, ID</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Learning Style:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Self-Taught</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Environment:</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">Linux & Windows</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Status:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Available</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
