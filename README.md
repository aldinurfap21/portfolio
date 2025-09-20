# Aldi Nurfa Pratama - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my journey as a self-taught full-stack developer from Bandung, Indonesia.

## 🚀 Live Demo


## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contact](#contact)

## 🎯 About

This portfolio website represents my passion for web development and showcases my skills as a self-taught developer. Built with modern web technologies, it features a clean design, smooth animations, and responsive layout that works perfectly across all devices.

### Who Am I?

- **Name**: Aldi Nurfa Pratama
- **Location**: Bandung, Indonesia
- **Role**: Full-Stack Web Developer
- **Learning Style**: Self-Taught
- **Environment**: Linux & Windows
- **Status**: Available for collaborations and freelance projects

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Theme** - Toggle between light and dark modes
- **Smooth Animations** - CSS transitions and custom animations
- **Interactive Components** - Hover effects, typing animation, auto-highlighting
- **Clean Architecture** - Separated data from components for better maintainability
- **Modern UI/UX** - Contemporary design with purple accent colors
- **SEO Optimized** - Built with Next.js for better search engine visibility

## 🛠 Tech Stack

### Frontend
- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - Modern React state management

### Core Technologies I Work With
- **JavaScript** - Primary frontend language
- **PHP** - Backend development (Laravel, CodeIgniter)
- **Node.js** - Server-side JavaScript
- **Linux** - Development environment
- **MySQL & MongoDB** - Database management
- **Git** - Version control

### Additional Tools
- **React** - Component-based UI library
- **Vue.js** - Progressive framework
- **Express** - Node.js web framework
- **Various APIs** - RESTful services integration

## 📁 Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About me page
│   ├── blog/page.tsx           # Blog section (coming soon)
│   ├── contact/page.tsx        # Contact information
│   ├── portfolio/page.tsx      # Portfolio showcase (coming soon)
│   ├── skills/page.tsx         # Skills and technologies
│   ├── components/
│   │   ├── Font.ts            # Font configurations
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero/              # Hero section components
│   │   ├── navbar/            # Navigation components
│   │   └── Shared/            # Reusable components
│   ├── data/                  # Data constants
│   │   ├── aboutData.ts       # About page data
│   │   ├── contactData.ts     # Contact information
│   │   ├── heroData.ts        # Hero section data
│   │   ├── navbarData.ts      # Navigation menu items
│   │   ├── skillsData.ts      # Skills categorization
│   │   └── logos.ts           # Technology logos
│   └── providers/             # Theme and context providers
└── public/                    # Static assets
```

## 📄 Pages Overview

### 🏠 Home (`/`)
- Hero section with pixel art avatar
- Animated typing text showing roles
- Call-to-action buttons
- Inspirational quote

### 👨‍💻 About (`/about`)
- Personal introduction and journey
- Core technologies showcase
- Services offered
- Quick facts and availability status
- Professional highlight box

### 💼 Skills (`/skills`)
- Technology stack overview
- Interactive logo grid with auto-highlight
- Skill categories (Frontend, Backend, DevOps)
- Current focus areas
- Detailed descriptions of expertise

### 📞 Contact (`/contact`)
- Social media links
- Interactive hover effects
- Professional avatar
- Contact invitation message

### 📝 Blog (`/blog`) - Coming Soon
- Future content about tech insights
- Coding tips and tutorials
- Creative development thoughts

### 🎨 Portfolio (`/portfolio`) - Coming Soon
- Project showcases
- Case studies
- Technology implementations

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/aldinurfap21/portfolio.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Development

### Code Structure

The project follows a clean architecture pattern:

- **Separation of Concerns** - Data is separated from UI components
- **Reusable Components** - Shared components for consistency
- **Type Safety** - TypeScript for better development experience
- **Modern Hooks** - useState, useEffect for state management
- **Responsive Design** - Mobile-first approach

### Key Components

- **TypingText** - Animated typing effect
- **NavLink** - Dynamic navigation with active states
- **ThemeProvider** - Dark/light mode functionality
- **Hero** - Landing section with animations

### Data Management

All static data is organized in separate files under `src/data/`:
- Contact information
- Skill categories
- Navigation items
- Technology listings
- Personal information

## 🌐 Deployment

The website can be deployed on various platforms:

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
npm run export
# Deploy the 'out' directory
```

### Traditional Hosting
```bash
npm run build
# Upload the .next/static files to your hosting provider
```

## 🎨 Customization

### Theme Colors
The website uses a purple-focused color scheme. To customize:
- Edit Tailwind classes in components
- Modify the color palette in `tailwind.config.js`

### Content Updates
- Update personal information in `src/data/` files
- Replace images in `public/` directory
- Modify text content in respective page components

### Adding New Sections
1. Create new page in `src/app/`
2. Add corresponding data file in `src/data/`
3. Update navigation in `navbarData.ts`

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic with Next.js routing

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Contact

**Aldi Nurfa Pratama**
- Location: Bandung, Indonesia
- Email: [aldibusnisess.com]
- WhatsApp: [+62 83137450560]
- LinkedIn: [https://www.linkedin.com/in/aldi-pratama-8075082a8/]
- Telegram: [@aldinurfap]

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ in Bandung, Indonesia using Next.js and Tailwind CSS**

*Always learning, building, and sharing ideas*