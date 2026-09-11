import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Code, Terminal, Layers, CheckCircle } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background Decorative Glow Effects */}
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>

      <div className="container hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Tersedia untuk Proyek & Kolaborasi</span>
          </div>

          <h1 className="hero-title">
            Membangun Pengalaman Digital yang <span className="text-gradient">Elegan, Cepat</span> & Skalabel.
          </h1>

          <p className="hero-subtitle">
            Halo! Saya <strong>{profileData.name}</strong>, seorang {profileData.title}. Saya mengombinasikan desain estetis bertema biru & putih yang bersih dengan arsitektur kode kelas dunia.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Lihat Portfolio</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              <Mail size={18} />
              <span>Hubungi Saya</span>
            </a>

            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("Unduh CV Simulation: File PDF Adrian_Herma_Sugiarto_CV.pdf siap diunduh."); }}
              className="btn btn-secondary btn-icon-only" 
              title="Unduh Resume / CV"
            >
              <Download size={18} />
            </a>
          </div>

          {/* Quick Highlights / Tech ticker */}
          <div className="hero-tech-ticker">
            <span className="ticker-label">Tech Stack Utama:</span>
            <div className="ticker-badges">
              <span className="tech-tag"><Code size={14} /> React.js</span>
              <span className="tech-tag"><Terminal size={14} /> Node.js</span>
              <span className="tech-tag"><Layers size={14} /> TypeScript</span>
              <span className="tech-tag"><Sparkles size={14} /> Figma UI/UX</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Spotlight Card */}
        <div className="hero-visual">
          <div className="spotlight-card glass-card animate-float">
            <div className="card-top-bar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">adrian-sugiarto.dev</div>
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
                <h3 className="profile-name">{profileData.name}</h3>
                <p className="profile-role">{profileData.title}</p>
              </div>
            </div>

            {/* Floating Info Badges */}
            <div className="floating-badge badge-top-right">
              <div className="badge-icon"><CheckCircle size={16} /></div>
              <div className="badge-text">
                <span className="badge-val">45+ Proyek</span>
                <span className="badge-lbl">Selesai Tepat Waktu</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon"><Sparkles size={16} /></div>
              <div className="badge-text">
                <span className="badge-val">Biru & Putih</span>
                <span className="badge-lbl">Estetika Elegan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
