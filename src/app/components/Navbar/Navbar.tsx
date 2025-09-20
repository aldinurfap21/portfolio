// src/components/navbar/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from '../Shared/NavLink';
import { useTheme } from '@/app/providers/ThemeProviders';
import { menuItems } from '../../data/navbarData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const getActiveLink = () => {
    const currentPath = pathname.split('/')[1] || 'home';
    return currentPath;
  };

  const activeLink = getActiveLink();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full backdrop-blur-md bg-white/30 transition-colors duration-300 dark:bg-purple-500/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="text-2xl font-bold text-purple-700 transition-colors duration-300 dark:text-purple-100"
        >
          Hallo
        </Link>

        <ul className="hidden space-x-4 text-lg font-medium md:flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                name={item.name}
                href={item.href}
                activeLink={activeLink}
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <div className="group relative">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 transition-colors duration-300 hover:bg-purple-200 dark:border-purple-300 dark:hover:bg-purple-700"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 transform whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-200 dark:text-gray-800">
              {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-gray-800 dark:border-b-gray-200"></div>
            </div>
          </div>

          <button
            className="text-gray-700 transition-colors duration-300 focus:outline-none dark:text-purple-100 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="space-y-4 bg-white/90 px-6 py-4 text-lg font-medium backdrop-blur-md transition-colors duration-300 dark:bg-purple-500/90 md:hidden">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                name={item.name}
                href={item.href}
                activeLink={activeLink}
                isMobile
                onClick={toggleMenu}
              />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}