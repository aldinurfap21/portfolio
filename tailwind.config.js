// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // <--- UBAH INI
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', // Contoh warna ungu
        // Tambahkan warna lain jika diperlukan
      },
    },
  },
  plugins: [],
};