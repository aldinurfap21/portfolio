// src/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from './providers/ThemeProviders';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  metadataBase: new URL('https://aldinurfapratama.vercel.app'),
  title: {
    default: 'Aldi Nurfa Pratama - Full-Stack Web Developer | Jasa Website Professional Bandung',
    template: '%s | Aldi Nurfa Pratama'
  },
  description:
    'Aldi Nurfa Pratama - Web developer profesional dari Bandung, Indonesia. Spesialis React, Next.js, PHP Laravel. Melayani jasa pembuatan website, aplikasi web, dan development freelance untuk klien lokal & internasional dengan harga terjangkau.',
  keywords: [
    'Aldi Nurfa Pratama',
    'Web Developer Bandung',
    'Jasa Website Bandung',
    'Full Stack Web Developer',
    'React Developer Indonesia',
    'Next.js Expert',
    'PHP Laravel Developer',
    'Freelance Web Developer Bandung',
    'Frontend Developer',
    'Backend Developer',
    'Jasa Pembuatan Website Murah',
    'Web Development Services Indonesia',
    'Portfolio Aldi Nurfa Pratama',
  ],
  authors: [{ name: 'Aldi Nurfa Pratama', url: 'https://aldinurfapratama.vercel.app' }],
  creator: 'Aldi Nurfa Pratama',
  publisher: 'Aldi Nurfa Pratama',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
      'Aldi Nurfa Pratama - Web developer berpengalaman dari Bandung, Indonesia. Spesialis pembuatan website modern, aplikasi web, dan sistem custom. Melayani klien lokal Indonesia dan internasional dengan kualitas profesional.',
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
      'Aldi Nurfa Pratama - Web developer profesional dari Bandung. Spesialis React, Next.js, PHP. Melayani jasa website & development untuk klien lokal dan internasional.',
    images: ['/preview.png'],
  },
  applicationName: 'Aldi Nurfa Pratama Portfolio',
  category: 'Technology',
  classification: 'Web Development Portfolio',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aldi Nurfa Pratama',
  alternateName: 'Aldi Pratama',
  url: 'https://aldinurfapratama.vercel.app',
  image: 'https://aldinurfapratama.vercel.app/preview.png',
  jobTitle: 'Full-Stack Web Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bandung',
    addressRegion: 'Jawa Barat',
    addressCountry: 'ID',
  },
  sameAs: [
    'https://github.com/aldinurfapratama',
    'https://linkedin.com/in/aldinurfapratama',
  ],
  knowsAbout: [
    'Web Development',
    'React',
    'Next.js',
    'PHP',
    'Laravel',
    'JavaScript',
    'TypeScript',
    'Full Stack Development',
  ],
  description: 'Web developer profesional dari Bandung, Indonesia. Spesialis React, Next.js, PHP Laravel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://aldinurfapratama.vercel.app" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bandung" />
        <meta name="geo.position" content="-6.917464;107.619125" />
        <meta name="ICBM" content="-6.917464, 107.619125" />
      </head>
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