import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, BookOpen, Code2, Award, ExternalLink } from 'lucide-react';
import { IconOrcid } from './SocialIcons';
import { profileData } from '../data/portfolioData';
import './Hero.css';

const Hero = ({ t }) => {
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
            <span>{t?.badge || 'Akademisi'}</span>
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
              <span>{t?.pubBtn || 'Riset & Publikasi Jurnal'}</span>
            </a>

            <a
              href={profileData.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-orcid-hero"
            >
              <IconOrcid size={20} />
              <span>{t?.orcidBtn || 'ORCID:'} {profileData.orcidId}</span>
            </a>

            <a href="#contact" className="btn btn-secondary btn-icon-only" title="Hubungi Saya">
              <Mail size={18} />
            </a>
          </div>

          {/* Quick Academic & Tech Badges */}
          <div className="hero-tech-ticker">
            <span className="ticker-label">{t?.focusLabel || 'Bidang Fokus:'}</span>
            <div className="ticker-badges">
              <span className="tech-tag"><BookOpen size={14} /> {t?.focus1 || 'Evaluasi Sistem Informasi'}</span>
              <span className="tech-tag"><Code2 size={14} /> {t?.focus2 || 'Rekayasa Perangkat Lunak'}</span>
              <span className="tech-tag"><Sparkles size={14} /> {t?.focus3 || 'Full-Stack Development'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Seamless Cutout Portrait */}
        <div className="hero-visual">
          <div className="portrait-container">
            <div className="portrait-backdrop-glow"></div>
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="portrait-standalone-img profile-img-bw"
            />
            <div className="portrait-bottom-fade"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
