// src/components/navbar/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from '../Shared/NavLink'; // Sesuaikan path
import { useTheme } from '@/app/providers/ThemeProviders';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const menuItems = [
    { name: 'Home', href: '/'},
    { name: 'About Me', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  // Function to get active link based on current pathname
  const getActiveLink = () => {
    const currentPath = pathname.split('/')[1] || 'home';
    return currentPath;
  };

  const activeLink = getActiveLink();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 transition-colors duration-300 bg-white/30 dark:bg-purple-500/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-purple-700 transition-colors duration-300 dark:text-purple-100">
          Hallo
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink name={item.name} href={item.href} activeLink={activeLink} />
            </li>
          ))}
        </ul>

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          {/* Tombol Dark Mode */}
          <div className="relative group">
            <button
              className="w-10 h-10 rounded-full border border-gray-400 dark:border-purple-300 flex items-center justify-center transition-colors duration-300 hover:bg-purple-200 dark:hover:bg-purple-700"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            
            {/* Tooltip */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-800 dark:border-b-gray-200"></div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 dark:text-purple-100 focus:outline-none transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white/90 dark:bg-purple-500/90 backdrop-blur-md px-6 py-4 space-y-4 text-lg font-medium transition-colors duration-300">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink name={item.name} href={item.href} activeLink={activeLink} isMobile onClick={toggleMenu} />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}