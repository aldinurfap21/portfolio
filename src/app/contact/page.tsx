// src/app/contact/page.tsx
"use client";
import { useState, useEffect } from "react";
import { inter } from "../components/Font";

const socials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/628xxxxxx",
    src: "/logo/WhatsApp.svg.png",
  },
  {
    name: "Gmail",
    href: "mailto:email@example.com",
    src: "/logo/Gmail.svg.png",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/username",
    src: "/logo/linkedin.png",
  },
  {
    name: "Telegram",
    href: "https://instagram.com/username",
    src: "/logo/Telegram.svg.webp",
  },
];

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
            Contact Me
          </h1>
          <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400 mt-2"></div>
        </section>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: Intro */}
          <div className="lg:col-span-2">

            <section className={`mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className={`${inter.variable} font-semibold text-2xl md:text-3xl mb-6 text-purple-600 dark:text-purple-400`}>
                Let's Connect
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Whether you have a project, a question, or just want to say hi, I’d love to hear from you. 
                I’m always open to meaningful conversations, collaborations, or even sharing a tech tip or two.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Reach out via any of the platforms below. Let’s build, share, and innovate together!
              </p>
            </section>

            {/* Socials Grid */}
            <section className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {socials.map((social, i) => {
                  const isHovered = hoverIndex === i;

                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoverIndex(i)}
                      onMouseLeave={() => setHoverIndex(null)}
                      className="flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-purple-50 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      <img
                        src={social.src}
                        alt={social.name}
                        className={`w-12 h-12 object-contain transition-all duration-300 ${
                          isHovered ? "scale-110 drop-shadow-md filter-none" : "scale-100 filter grayscale"
                        }`}
                      />
                      <span className={`mt-3 text-sm font-medium transition-colors duration-300 ${
                        isHovered ? "text-purple-700 dark:text-purple-400" : "text-purple-600 dark:text-purple-400"
                      }`}>
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>

          </div>

          {/* Right: Avatar Card */}
          <div className="lg:col-span-1">
            <section className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl p-8 text-center shadow-md">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-purple-600 dark:border-purple-500">
                  <img 
                    src="/pixel3.png" 
                    alt="Pixel avatar connecting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className={`${inter.variable} font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2`}>
                  Ready to Connect
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                  Full-Stack Developer
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Always learning, building, and sharing ideas
                </p>
              </div>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}
