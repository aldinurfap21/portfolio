// src/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from './providers/ThemeProviders';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Aldi Pratama Portfolio',
  description: 'Professional Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};