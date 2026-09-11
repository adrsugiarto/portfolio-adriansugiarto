import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, BookOpen, Code2, Award, ExternalLink } from 'lucide-react';
import { IconOrcid } from './SocialIcons';
import { profileData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background Decorative Glow Effects */}
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>

      <div className="container hero-container">
        {/* Left Column: Text & Academic Info */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Peneliti Sistem Informasi & Software Engineer</span>
          </div>

          <h1 className="hero-title">
            {profileData.name}
          </h1>

          <p className="hero-subtitle">
            {profileData.bio}
          </p>

          {/* Action Buttons with ORCID & Publications CTA */}
          <div className="hero-actions">
            <a href="#publications" className="btn btn-primary">
              <BookOpen size={18} />
              <span>Riset & Publikasi Jurnal</span>
            </a>

            <a 
              href={profileData.orcid} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-orcid-hero"
            >
              <IconOrcid size={20} />
              <span>ORCID: {profileData.orcidId}</span>
            </a>

            <a href="#contact" className="btn btn-secondary btn-icon-only" title="Hubungi Saya">
              <Mail size={18} />
            </a>
          </div>

          {/* Quick Academic & Tech Badges */}
          <div className="hero-tech-ticker">
            <span className="ticker-label">Bidang Fokus:</span>
            <div className="ticker-badges">
              <span className="tech-tag"><BookOpen size={14} /> Adopsi Sistem Informasi (QRIS)</span>
              <span className="tech-tag"><Code2 size={14} /> Rekayasa Perangkat Lunak (SELC)</span>
              <span className="tech-tag"><Sparkles size={14} /> Full-Stack Development</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Academic Spotlight Card */}
        <div className="hero-visual">
          <div className="spotlight-card glass-card animate-float">
            <div className="card-top-bar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">orcid.org/0009-0002-6704-2507</div>
            </div>

            <div className="profile-wrapper">
              <div className="avatar-frame">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
                  alt={profileData.name} 
                  className="profile-img"
                />
                <div className="avatar-glow"></div>
              </div>

              <div className="profile-info-box">
                <h3 className="profile-name">{profileData.shortName}</h3>
                <p className="profile-role">M.Kom. & S.SI. - UKSW Salatiga</p>
              </div>
            </div>

            {/* Floating Academic Badges */}
            <div className="floating-badge badge-top-right">
              <div className="badge-icon"><IconOrcid size={20} /></div>
              <div className="badge-text">
                <span className="badge-val">ORCID Verified</span>
                <span className="badge-lbl">Peneliti Terdaftar</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon"><Award size={18} /></div>
              <div className="badge-text">
                <span className="badge-val">IPK 3.94</span>
                <span className="badge-lbl">Cum Laude (S.SI)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
