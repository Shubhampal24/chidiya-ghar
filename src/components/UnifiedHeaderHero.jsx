import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { CloudShader } from './ui/cloud-shader.jsx';
import { Menu, MenuItem, HoveredLink } from './ui/navbar-menu.jsx';

export default function UnifiedHeaderHero({ isHomePage = false, title = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFooter = (e) => {
    e.preventDefault();
    const footerEl = document.getElementById('site-footer') || document.querySelector('footer');
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative w-full overflow-hidden flex flex-col ${isHomePage ? 'min-h-[85vh]' : 'min-h-[40vh]'}`}>
      {/* Cloud Shader Background spanning entire component */}
      <CloudShader className="absolute inset-0 z-0" brightness={0.8} />

      {/* Header Layout */}
      <header className="header">
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
    {/* Logo - Extreme Left */}
    <Link to="/" className="flex flex-col items-center flex-shrink-0" style={{ textDecoration: 'none', lineHeight: 1 }}>
          <img
            src="/image/chidiya-ghar-white-logo-fixed-counters.svg"
            alt="Chidiya Ghar"
            style={{ maxWidth: '110px', height: 'auto', display: 'block' }}
          />
          {/* <img
            src="/image/NESTING PROFESSIONALS.svg"
            alt="Nesting Professionals"
            style={{ maxWidth: '92px', width: '100%', display: 'block', marginTop: '3px', filter: 'brightness(0) invert(1)' }}
          /> */}
        </Link>

        {/* Navigation - Centered (Aceternity Navbar Menu) */}
        <div
  className="nav z-50"
  style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
>
  <Menu setActive={setActive}>
            {/* Direct Link styled like a MenuItem */}
            <Link 
              to="/" 
              style={{ color: 'white', fontSize: '14px', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              className="hover:opacity-80"
              onMouseEnter={() => setActive(null)}
            >
              Home
            </Link>
            
            {/* Direct Link styled like a MenuItem */}
            <a
  href="#accommodations-section"
  style={{ color: 'white', fontSize: '14px', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
  className="hover:opacity-80"
  onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById('accommodations-section');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
  onMouseEnter={() => setActive(null)}
>
  Accommodations
</a>

            <MenuItem setActive={setActive} active={active} item="Pages">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <HoveredLink href="#about-us">About us</HoveredLink>
                {/* <HoveredLink href="/blog">Blog</HoveredLink> */}
                <HoveredLink href="#site-footer">Contact Us</HoveredLink>
                {/* <HoveredLink href="/search-results">Search Results</HoveredLink> */}
              </div>
            </MenuItem>

            {/* Direct Link styled like a MenuItem */}
            <a
  href="#services-section"
  style={{ color: 'white', fontSize: '14px', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
  className="hover:opacity-80"
  onClick={(e) => {
    e.preventDefault();

    const section = document.getElementById('services-section');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
  onMouseEnter={() => setActive(null)}
>
  Our Services
</a>
          </Menu>
        </div>

        {/* Actions - Extreme Right */}
        <div 
          className="flex items-center gap-2 md:gap-3 flex-shrink-0"
          onMouseEnter={() => setIsRightHovered(true)}
          onMouseLeave={() => setIsRightHovered(false)}
          style={{
            opacity: isScrolled ? (isRightHovered ? 1 : 0.35) : 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          <a
            href="tel:+15432167890"
            style={{
              boxShadow: 'inset 0 0 0 1.5px rgba(255, 255, 255, 0.45)',
              color: '#ffffff',
              height: '50px',
              padding: '0 24px',
              borderRadius: '9999px',
              letterSpacing: '0.08em',
              fontWeight: 700,
              fontSize: '13px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 200ms ease',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.boxShadow = 'inset 0 0 0 1.5px rgba(255, 255, 255, 0.85), 0 4px 16px rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'inset 0 0 0 1.5px rgba(255, 255, 255, 0.45)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Call Us
          </a>

          <a
            href="#site-footer"
            onClick={scrollToFooter}
            style={{
              boxShadow: 'inset 0 0 0 1.5px rgba(255, 255, 255, 0.45)',
              color: '#ffffff',
              height: '50px',
              padding: '0 24px',
              borderRadius: '9999px',
              letterSpacing: '0.08em',
              fontWeight: 700,
              fontSize: '13px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 200ms ease',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.boxShadow = 'inset 0 0 0 1.5px rgba(255, 255, 255, 0.85), 0 4px 16px rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'inset 0 0 0 1.5px rgba(255, 255, 255, 0.45)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Now
          </a>

          <button
            className="menuBtn md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'white', padding: 0 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
         </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="relative z-50 w-full" style={{ background: 'var(--cream)', padding: '18px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link to="/" style={{ fontSize: '15px', color: 'var(--ink)' }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <a
  href="#accommodations-section"
  style={{ fontSize: '15px', color: 'var(--ink)' }}
  onClick={(e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const section = document.getElementById('accommodations-section');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
>
  Accommodations
</a>
            <Link to="/about-us" style={{ fontSize: '15px', color: 'var(--ink)' }} onClick={() => setIsMobileMenuOpen(false)}>Pages</Link>
            <a
  href="#services-section"
  style={{ fontSize: '15px', color: 'var(--ink)' }}
  onClick={(e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const section = document.getElementById('services-section');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }}
>
  Our Services
</a>
            <a href="tel:+15432167890" style={{ fontSize: '15px', color: 'var(--brown)', fontWeight: 600 }} onClick={() => setIsMobileMenuOpen(false)}>Call Us</a>
            <a href="#site-footer" style={{ fontSize: '15px', color: 'var(--brown)', fontWeight: 600 }} onClick={(e) => { setIsMobileMenuOpen(false); scrollToFooter(e); }}>Book Now</a>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full">
        {isHomePage ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '70px', gap: '0' }}>

            {/* HEADLINE */}
            <h2 style={{
              fontFamily: "'Grift', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(2.8rem, 6.2vw, 5.2rem)',
              lineHeight: 0.95,
              color: 'white',
              letterSpacing: '0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.35)',
              marginBottom: '20px',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
              A PLACE THAT<br />FEELS LIKE GHAR
            </h2>

            {/* SUBTITLE */}
            <p style={{
              fontFamily: "'Delight', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.95)',
              maxWidth: '680px',
              margin: '0 auto 28px',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              textAlign: 'center'
            }}>
              Thoughtfully designed spaces where comfort,<br />character and everyday living come together.
            </p>
          </div>
        ) : (
          <h1 style={{ fontFamily: "'Grift', sans-serif", fontWeight: 700, fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            {title}
          </h1>
        )}
      </div>

      {/* Seamless Fog, Mist Blur & Cloud Horizon Transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: isHomePage ? '220px' : '110px',
          overflow: 'hidden',
        }}
      >
        {/* Deep Atmospheric Mist & Backdrop Blur */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(253, 251, 248, 0) 0%, rgba(253, 251, 248, 0.25) 30%, rgba(253, 251, 248, 0.65) 60%, rgba(253, 251, 248, 0.95) 88%, #FDFBF8 100%)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 35%, black 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 35%, black 85%)',
          }}
        />

        {/* Soft Organic Cloud Wave Silhouette */}
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: isHomePage ? '65px' : '35px',
            display: 'block',
            zIndex: 2,
            marginBottom: '-1px',
          }}
        >
          {/* Ambient cloud crest */}
          <path
            d="M0,45 C220,20 440,65 720,35 C1000,10 1220,55 1440,30 L1440,90 L0,90 Z"
            fill="rgba(253, 251, 248, 0.55)"
          />
          {/* Main soft rolling cloud base */}
          <path
            d="M0,60 C160,40 340,75 560,50 C780,25 980,68 1200,42 C1320,28 1390,52 1440,46 L1440,90 L0,90 Z"
            fill="#FDFBF8"
          />
        </svg>
      </div>
    </div>
  );
}
