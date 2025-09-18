'use client';
import { useEffect, useState } from 'react';

interface TypingTextProps {
  texts: string[];
  speed?: number; // Kecepatan ketik per karakter (dalam ms)
  delay?: number; // Jeda sebelum mulai menghapus (dalam ms)
}

export default function TypingText({ texts, speed = 100, delay = 1500 }: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Function utama yang mengatur alur ketik dan hapus
    const handleTyping = () => {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayed(prev => prev + currentText[charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCharIndex(0);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, charIndex, textIndex, texts, speed, delay]);

  return (
    <span
      className="font-bold text-primary inline-block"
      style={{ minWidth: '220px' }}
    >
      {displayed}
    </span>
  );
}