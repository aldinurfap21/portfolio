// src/components/TypingText.tsx
'use client';

import { useEffect, useState } from 'react';

interface TypingTextProps {
  texts: string[];
  speed?: number;
  delay?: number;
}

export default function TypingText({
  texts,
  speed = 100,
  delay = 1500,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[textIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayed((prev) => prev + currentText[charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed((prev) => prev.slice(0, -1));
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
      className="inline-block font-bold text-purple-600 dark:text-purple-600"
      style={{ minWidth: '220px' }}
    >
      {displayed}
    </span>
  );
}