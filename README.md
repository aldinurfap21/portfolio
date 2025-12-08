# Aldi Nurfa Pratama - Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-online-success)](https://aldinurfapratama.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A modern, responsive portfolio website showcasing my journey as a **self-taught full-stack web developer** from Bandung, Indonesia. Built with cutting-edge technologies and optimized for performance and SEO.

## 🚀 Live Demo

**[Visit Portfolio →](https://aldinurfapratama.vercel.app/)**

Experience the live website featuring:
- 🎨 Smooth dark/light theme transitions
- 📱 Fully responsive design
- ⚡ Lightning-fast page loads
- 🎭 Interactive animations and effects

## 📋 Table of Contents

- [About Me](#-about-me)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages Overview](#-pages-overview)
- [Getting Started](#-getting-started)
- [SEO Optimization](#-seo-optimization)
- [Performance](#-performance)
- [Deployment](#-deployment)
- [Contact](#-contact)

## 🎯 About Me

Hi! I'm **Aldi Nurfa Pratama**, a passionate full-stack web developer based in **Bandung, Indonesia**. I specialize in creating modern, user-friendly web applications using the latest technologies.

### Quick Facts

- 👨‍💻 **Role**: Full-Stack Web Developer
- 📍 **Location**: Bandung, West Java, Indonesia
- 🎓 **Learning Style**: Self-Taught & Continuous Learning
- 💻 **Environment**: Linux & Windows
- 🌐 **Languages**: Indonesian (Native), English (Professional)
- ✅ **Status**: Available for freelance projects & collaborations

### What I Do

- 🔧 Custom web application development
- 🎨 Responsive UI/UX design implementation
- 🚀 Full-stack development (Frontend & Backend)
- 📊 Database design and optimization
- 🔌 API development and integration
- 🛠️ Website maintenance and optimization

## ✨ Key Features

### Design & UX
- ✅ **Fully Responsive** - Seamless experience across all devices (mobile, tablet, desktop)
- 🌓 **Dark/Light Theme** - User-preferred theme with smooth transitions
- 🎭 **Smooth Animations** - CSS transitions and custom keyframe animations
- 🎨 **Modern UI/UX** - Clean design with purple accent colors
- 🖱️ **Interactive Elements** - Hover effects, typing animations, auto-highlighting

### Technical Excellence
- ⚡ **Performance Optimized** - Fast loading times with Next.js optimization
- 🔍 **SEO Friendly** - Structured data, meta tags, sitemap, and robots.txt
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 📱 **PWA Ready** - Progressive web app capabilities
- 🔒 **Secure** - Modern security best practices

### Code Quality
- 📦 **Component-Based** - Reusable React components
- 🎯 **Type-Safe** - TypeScript for better development experience
- 🗂️ **Clean Architecture** - Separation of concerns with data layer
- 🔄 **Easy Maintenance** - Well-documented and organized code

## 🛠 Tech Stack

### Frontend Development
```
Next.js 14      - React framework with App Router
TypeScript      - Type-safe JavaScript
Tailwind CSS    - Utility-first CSS framework
React 18        - UI component library
```

### Core Technologies I Work With

**Frontend**
- JavaScript (ES6+)
- React.js & Next.js
- Vue.js
- HTML5 & CSS3
- Tailwind CSS & Bootstrap

**Backend**
- PHP (Laravel, CodeIgniter)
- Node.js & Express.js
- RESTful API Development

**Database**
- MySQL
- MongoDB
- PostgreSQL

**DevOps & Tools**
- Git & GitHub
- Linux (Ubuntu, Debian)
- Docker (Basic)
- Vercel & Netlify

**Design**
- Figma
- Adobe XD
- Responsive Design Principles

## 📁 Project Structure

```
portfolio-website/
├── public/                     # Static assets
│   ├── Favicon.png            # Site favicon
│   ├── preview.png            # OG image for social sharing
│   └── assets/                # Images and media files
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx       # About me page
│   │   ├── blog/
│   │   │   └── page.tsx       # Blog section (coming soon)
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact information
│   │   ├── portfolio/
│   │   │   └── page.tsx       # Portfolio showcase (coming soon)
│   │   ├── skills/
│   │   │   └── page.tsx       # Skills and technologies
│   │   │
│   │   ├── components/
│   │   │   ├── Font.ts        # Font configurations
│   │   │   ├── Footer/        # Footer component
│   │   │   ├── Hero/          # Hero section components
│   │   │   ├── Navbar/        # Navigation components
│   │   │   └── Shared/        # Reusable components
│   │   │
│   │   ├── data/              # Data layer (separated from UI)
│   │   │   ├── aboutData.ts   # About page content
│   │   │   ├── contactData.ts # Contact information
│   │   │   ├── heroData.ts    # Hero section data
│   │   │   ├── navbarData.ts  # Navigation menu items
│   │   │   ├── skillsData.ts  # Skills categorization
│   │   │   └── logos.ts       # Technology logos
│   │   │
│   │   ├── providers/
│   │   │   └── ThemeProvider.tsx  # Dark/light theme context
│   │   │
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── sitemap.ts         # Dynamic sitemap generation
│   │   ├── robots.ts          # Robots.txt configuration
│   │   └── globals.css        # Global styles
│   │
│   └── types/                 # TypeScript type definitions
│
├── .env.local                 # Environment variables
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Project dependencies
```

## 📄 Pages Overview

### 🏠 Home (`/`)
**The landing page that makes a first impression**
- Pixel art avatar with subtle animations
- Animated typing text showing multiple roles
- Call-to-action buttons (View Portfolio, Contact Me)
- Inspirational quote section
- Quick introduction to who I am

### 👨‍💻 About (`/about`)
**Detailed information about my journey and expertise**
- Personal introduction and developer journey
- Core technologies showcase with logos
- Professional services offered
- Quick facts (location, availability, languages)
- "Why Work With Me" highlight section
- Educational background and self-learning path

### 💼 Skills (`/skills`)
**Comprehensive overview of technical capabilities**
- Interactive technology logo grid
- Auto-highlighting animation effect
- Categorized skills:
  - Frontend Development
  - Backend Development
  - Database & DevOps
  - Design & Tools
- Current learning focus
- Skill proficiency levels
- Technologies I'm excited about

### 📞 Contact (`/contact`)
**Multiple ways to get in touch**
- Professional avatar with hover effects
- Social media links:
  - WhatsApp (Direct messaging)
  - LinkedIn (Professional network)
  - GitHub (Code repositories)
  - Telegram (Quick chat)
- Email contact
- Interactive hover animations
- Clear call-to-action message

### 📝 Blog (`/blog`) - 🚧 Coming Soon
**Future content hub for sharing knowledge**
- Web development tutorials
- Coding best practices
- Technology insights
- Project case studies
- Tips and tricks
- Personal development journey

### 🎨 Portfolio (`/portfolio`) - 🚧 Coming Soon
**Showcase of completed projects**
- Client projects
- Personal projects
- Open source contributions
- Technology implementations
- Case studies with results
- Live demos and GitHub links

## 🚀 Getting Started

### Prerequisites

Make sure you have these installed:

```bash
Node.js >= 18.0.0
npm >= 9.0.0 or yarn >= 1.22.0
Git >= 2.0.0
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables** (if needed)
```bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Check TypeScript types
```

## 🔍 SEO Optimization

This portfolio is fully optimized for search engines:

### Meta Tags
- ✅ Comprehensive meta descriptions
- ✅ Keywords optimization for "Aldi Nurfa Pratama", "Web Developer Bandung"
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card tags
- ✅ Canonical URLs

### Structured Data
- ✅ JSON-LD Schema.org markup
- ✅ Person schema with professional details
- ✅ Geographic location data

### Technical SEO
- ✅ Dynamic sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Google Search Console verification
- ✅ Mobile-friendly responsive design
- ✅ Fast page load speeds
- ✅ Semantic HTML structure

### How to Submit to Google

1. **Google Search Console**
   - Visit [Google Search Console](https://search.google.com/search-console)
   - Add property: `https://aldinurfapratama.vercel.app`
   - Verify ownership using meta tag (already included)
   - Submit sitemap: `/sitemap.xml`

2. **Request Indexing**
   - Go to URL Inspection tool
   - Enter your homepage URL
   - Click "Request Indexing"

3. **Monitor Performance**
   - Check indexing status
   - Review search queries
   - Analyze click-through rates

## 📈 Performance

### Lighthouse Scores
```
Performance:  95+  ⚡
Accessibility: 98+  ♿
Best Practices: 100 ✅
SEO:          100 🔍
```

### Optimizations Applied
- ⚡ Next.js automatic code splitting
- 🖼️ Image optimization with Next/Image
- 📦 Dynamic imports for heavy components
- 🗜️ CSS/JS minification
- 🚀 Static generation where possible
- 💾 Browser caching strategies
- 📱 Mobile-first responsive design

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

2. **Using GitHub Integration**
   - Push code to GitHub
   - Connect repository to Vercel
   - Automatic deployments on push

### Deploy to Netlify

```bash
npm run build
# Connect GitHub repo or drag & drop the .next folder
```

### Deploy to Traditional Hosting

```bash
npm run build
npm run export
# Upload the 'out' directory to your hosting provider
```

### Environment Variables

Set these in your deployment platform:
```env
NEXT_PUBLIC_SITE_URL=https://aldinurfapratama.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id (optional)
```

## 🎨 Customization Guide

### Update Personal Information

1. **Contact Details** - Edit `src/data/contactData.ts`
2. **Skills** - Modify `src/data/skillsData.ts`
3. **About Content** - Update `src/data/aboutData.ts`
4. **Navigation** - Change `src/data/navbarData.ts`

### Change Theme Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
}
```

### Add New Pages

1. Create `src/app/your-page/page.tsx`
2. Add route to `navbarData.ts`
3. Update `sitemap.ts` with new URL

## 🤝 Contributing

While this is a personal portfolio, feedback and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📧 Contact

**Aldi Nurfa Pratama**

📍 **Location**: Bandung, West Java, Indonesia  
📧 **Email**: aldibusnisess@gmail.com  
📱 **WhatsApp**: [+62 831-4305-3581](https://wa.me/623143053581)  
💼 **LinkedIn**: [Aldi Pratama](https://www.linkedin.com/in/aldi-pratama-8075082a8/)  
💬 **Telegram**: [@aldinurfap](https://t.me/aldinurfap)  
🌐 **Website**: [aldinurfapratama.vercel.app](https://aldinurfapratama.vercel.app)

### Services Offered

✅ Custom Web Application Development  
✅ Responsive Website Design  
✅ Full-Stack Development  
✅ API Development & Integration  
✅ Website Maintenance & Optimization  
✅ Technical Consultation  

💼 **Available for freelance projects and collaborations!**

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by Aldi Nurfa Pratama**

🚀 Powered by Next.js | 🎨 Styled with Tailwind CSS | 📍 Made in Bandung, Indonesia

*Always learning, building, and sharing ideas*

[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=social&logo=github)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=social&logo=linkedin)](https://www.linkedin.com/in/aldi-pratama-8075082a8/)

</div>