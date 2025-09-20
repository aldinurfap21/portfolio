// src/components/Footer.tsx
import { inter } from '../Font';

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-950 py-8 transition-colors duration-500">
      <hr className="my-8 md:my-12 w-24 mx-auto border-0 h-1 bg-purple-600 dark:bg-purple-400 transition-colors duration-500" />

      <div className="max-w-7xl mx-auto px-6 text-center text-gray-700 dark:text-gray-100">
        <p className="font-normal text-base">
          Created by{' '}
          <span className={`${inter.variable} font-bold text-lg text-purple-600 dark:text-purple-400`}>
            Aldi Nurfa Pratama
          </span>
        </p>
        <p className="font-normal text-sm mt-1">
          in Bandung, Indonesia using{' '}
          <span className={`${inter.variable} font-bold text-base text-purple-600 dark:text-purple-400`}>
            Next.js
          </span>
          {' '}and{' '}
          <span className={`${inter.variable} font-bold text-base text-purple-600 dark:text-purple-400`}>
            Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
}