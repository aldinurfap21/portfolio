// src/components/Shared/NavLink.tsx
'use client';

import Link from 'next/link';

interface NavLinkProps {
  name: string;
  href: string;
  activeLink: string;
  isMobile?: boolean;
  onClick?: () => void;
}

export default function NavLink({
  name,
  href,
  activeLink,
  isMobile = false,
  onClick,
}: NavLinkProps) {
  const isActive = href === `/${activeLink}` || (href === '/' && activeLink === 'home');

  const baseClasses = 'px-4 py-2 rounded-full font-semibold transition-all duration-300';
  const mobileClasses = isMobile ? 'block w-full' : '';
  const activeClasses = 'bg-purple-600/80 text-white dark:bg-white dark:text-purple-600';
  const inactiveClasses = 'text-black hover:bg-purple-600/80 hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-purple-600';

  const finalClasses = `${baseClasses} ${mobileClasses} ${isActive ? activeClasses : inactiveClasses}`;

  return (
    <Link href={href} className={finalClasses} onClick={onClick}>
      {name}
    </Link>
  );
}