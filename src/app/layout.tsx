// src/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from './providers/ThemeProviders';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Aldi Nurfa Pratama - Full-Stack Web Developer | Jasa Website Professional',
  description:
    'Web developer profesional dari Bandung, Indonesia. Spesialis React, Next.js, PHP Laravel. Melayani jasa pembuatan website, aplikasi web, dan development freelance untuk klien lokal & internasional.',
  keywords: [
    'Aldi Nurfa Pratama',
    'Web Developer Bandung',
    'Jasa Website Bandung',
    'Full Stack Web Developer',
    'React Developer',
    'Next.js Expert',
    'PHP Laravel Developer',
    'Freelance Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Development Services',
  ],
  authors: [{ name: 'Aldi Nurfa Pratama', url: 'https://aldinurfapratama.vercel.app' }],
  creator: 'Aldi Nurfa Pratama',
  publisher: 'Aldi Nurfa Pratama',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'bbb24566d543f311',
  },
  icons: {
    icon: '/Favicon.png',
    shortcut: '/Favicon.png',
    apple: '/Favicon.png',
  },
  alternates: {
    canonical: 'https://aldinurfapratama.vercel.app',
  },
  openGraph: {
    title: 'Aldi Nurfa Pratama - Web Developer Professional | Jasa Website Terpercaya',
    description:
      'Web developer berpengalaman dari Bandung. Spesialis pembuatan website modern, aplikasi web, dan sistem custom. Melayani klien lokal Indonesia dan internasional dengan kualitas profesional.',
    url: 'https://aldinurfapratama.vercel.app',
    siteName: 'Aldi Nurfa Pratama - Web Developer Portfolio',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Aldi Nurfa Pratama - Web Developer Professional dari Bandung, Indonesia',
      },
    ],
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aldi Nurfa Pratama - Web Developer | Jasa Website Professional',
    description:
      'Web developer profesional dari Bandung. Spesialis React, Next.js, PHP. Melayani jasa website & development untuk klien lokal dan internasional.',
    images: ['/preview.png'],
  },
  applicationName: 'Aldi Nurfa Pratama Portfolio',
  category: 'Technology',
  classification: 'Web Development Portfolio',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'geo.region': 'ID-JB',
    'geo.placename': 'Bandung',
    'geo.position': '-6.917464;107.619125',
    ICBM: '-6.917464, 107.619125',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${playfair.variable} bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
