import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { IconGithub, IconLinkedin, IconOrcid, IconInstagram, IconFacebook, IconTiktok } from './SocialIcons';
import { profileData } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top Footer Content */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-badge">
                <span>AHS</span>
              </div>
              <span className="logo-text">{profileData.name}</span>
            </div>
            <p className="footer-tagline">
              {profileData.tagline}
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-heading">Navigasi Cepat</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Beranda</a></li>
              <li><a href="#publications">Publikasi Jurnal</a></li>
              <li><a href="#experience">Pendidikan & Karir</a></li>
              <li><a href="#skills">Keahlian</a></li>
              <li><a href="#projects">Portfolio Proyek</a></li>
              <li><a href="#contact">Hubungi Saya</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-heading">Reach Me / Media Sosial</h4>
            <div className="footer-social-icons">
              <a href={profileData.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Instagram">
                <IconInstagram size={18} />
              </a>
              <a href={profileData.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Facebook">
                <IconFacebook size={18} />
              </a>
              <a href={profileData.tiktok} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="TikTok">
                <IconTiktok size={18} />
              </a>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="GitHub">
                <IconGithub size={18} />
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="LinkedIn">
                <IconLinkedin size={18} />
              </a>
              <a href={profileData.orcid} target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="ORCID iD">
                <IconOrcid size={18} />
              </a>
              <a href={`mailto:${profileData.email}`} className="footer-social-btn" title="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>{profileData.shortName}</strong>. Dikembangkan menggunakan React.
          </p>

          <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top" title="Kembali ke Atas">
            <span>Kembali ke Atas</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
