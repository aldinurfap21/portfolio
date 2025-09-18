import { useState, useEffect } from 'react';

export function useActiveLink(sections: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = section;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return active;
}