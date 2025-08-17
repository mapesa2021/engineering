'use client';
import { useState, useEffect } from 'react';
import AnimatedButton from './AnimatedButton';
import { getButtonsBySection, Button } from '../utils/adminData';

interface DynamicButtonProps {
  section: string;
  className?: string;
}

export default function DynamicButton({ section, className = '' }: DynamicButtonProps) {
  const [buttons, setButtons] = useState<Button[]>([]);

  useEffect(() => {
    const loadButtons = () => {
      const sectionButtons = getButtonsBySection(section);
      setButtons(sectionButtons);
    };

    loadButtons();

    // Listen for storage changes to update buttons in real-time
    const handleStorageChange = () => {
      loadButtons();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('localStorageChange', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorageChange', handleStorageChange);
    };
  }, [section]);

  if (buttons.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      {buttons.map((button) => (
        <AnimatedButton
          key={button.id}
          variant={button.variant}
          className="text-lg px-8 py-4"
          onClick={() => {
            if (button.url.startsWith('http')) {
              window.open(button.url, '_blank');
            } else if (button.url.startsWith('#')) {
              // Handle anchor links
              const element = document.querySelector(button.url);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            } else {
              // Handle internal navigation
              window.location.href = button.url;
            }
          }}
        >
          {button.text}
        </AnimatedButton>
      ))}
    </div>
  );
} 