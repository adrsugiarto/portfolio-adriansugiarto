import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, Send } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme, lang = 'id', toggleLang, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t?.home || 'Beranda', href: '#hero' },
    { name: t?.publications || 'Publikasi Jurnal', href: '#publications' },
    { name: t?.education || 'Pendidikan & Karir', href: '#experience' },
    { name: t?.skills || 'Keahlian', href: '#skills' },
    { name: t?.projects || 'Aplikasi & Proyek', href: '#projects' },
    { name: t?.contact || 'Kontak', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <div className="logo-badge">
            <span>AHS</span>
          </div>
          <div className="logo-text">
            <span className="logo-name">{profileData.shortName}</span>
            <span className="logo-dot">.</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions & Theme/Lang Toggles */}
        <div className="nav-actions">
          {/* Language Switcher ID/EN Button */}
          <button 
            className="lang-toggle-btn" 
            onClick={toggleLang}
            aria-label="Toggle Language"
            title={lang === 'id' ? 'Switch to English' : 'Ubah ke Bahasa Indonesia'}
          >
            <span className="lang-badge">{lang.toUpperCase()}</span>
          </button>

          {/* Dark/Light Mode Toggle Button */}
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
          >
            {theme === 'dark' ? <Sun className="icon-theme" size={20} /> : <Moon className="icon-theme" size={20} />}
          </button>

          <a 
            href="#contact" 
            className="btn btn-primary btn-sm btn-nav-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>{t?.contactBtn || 'Hubungi Saya'}</span>
            <Send size={15} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
