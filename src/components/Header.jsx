import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="topbarSocial" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><Youtube size={16} /></a>
        </div>
        <div className="topbarContact" style={{ display: 'flex', gap: '24px' }}>
          <span style={{ fontSize: '13px' }}>Tel: +1 5432167890</span>
          <span style={{ fontSize: '13px' }}>mail: info@chidiyaghar.com</span>
        </div>
      </div>

      <header className="header">
        {/* Logo — tightly stacked, no gap */}
        <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', lineHeight: 1 }}>
          <img
            src="/image/Group 1171275756.png"
            alt="Chidiya Ghar"
            style={{ maxWidth: '110px', height: 'auto', display: 'block' }}
          />
          <img
            src="/image/NESTING PROFESSIONALS.svg"
            alt="Nesting Professionals"
            style={{ maxWidth: '92px', width: '100%', display: 'block', marginTop: '3px' }}
          />
        </Link>

        {/* Nav links */}
        <nav className="nav" style={{ marginLeft: 'auto', marginRight: '18px' }}>
          <div className="navDrop">
            <button>Home <span style={{ fontSize: '10px', opacity: 0.7 }}>▼</span></button>
            <div className="dropdown">
              <Link to="/">Home 1</Link>
            </div>
          </div>
          <Link to="/accommodations">Accommodations</Link>
          <div className="navDrop">
            <button>Pages <span style={{ fontSize: '10px', opacity: 0.7 }}>▼</span></button>
            <div className="dropdown">
              <Link to="/about-us">About us</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/search-results">Search Results</Link>
            </div>
          </div>
          <Link to="/our-services">Our Services</Link>
          <Link to="/my-account">My Account</Link>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {/* Circular profile icon */}
          <Link
            to="/my-account"
            title="My Account"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'var(--brown)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              flexShrink: 0,
              transition: 'background 250ms ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--dark-brown)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--brown)'}
          >
            {/* SVG person icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </Link>

          <button
            className="menuBtn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--ink)', padding: 0 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{ background: 'var(--cream)', padding: '18px', borderTop: '1px solid rgba(0,0,0,0.05)', position: 'absolute', width: '100%', zIndex: 19 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link to="/" style={{ fontSize: '15px', color: 'var(--ink)' }} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/accommodations" style={{ fontSize: '15px', color: 'var(--ink)' }} onClick={() => setIsMobileMenuOpen(false)}>Accommodations</Link>
            <Link to="/about-us" style={{ fontSize: '15px', color: 'var(--ink)' }} onClick={() => setIsMobileMenuOpen(false)}>Pages</Link>
            <Link to="/our-services" style={{ fontSize: '15px', color: 'var(--ink)' }} onClick={() => setIsMobileMenuOpen(false)}>Our Services</Link>
            <Link to="/my-account" style={{ fontSize: '15px', color: 'var(--ink)' }} onClick={() => setIsMobileMenuOpen(false)}>My Account</Link>
          </div>
        </div>
      )}
    </>
  );
}
