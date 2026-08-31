import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Direct to top"
      title="Direct to top"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'var(--brown, #895737)',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: isHovered ? 1 : 0.35,
        transform: isHovered ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
        transition: 'all 0.25s ease',
        backdropFilter: 'blur(4px)',
        padding: 0
      }}
    >
      <ChevronUp size={18} strokeWidth={2.4} />
    </button>
  );
}
