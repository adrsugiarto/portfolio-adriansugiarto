import React from 'react';
import { BookOpen, ExternalLink, Award, Sparkles, Tag, CheckCircle2 } from 'lucide-react';
import { IconOrcid } from './SocialIcons';
import { publicationsData, profileData } from '../data/portfolioData';
import './Publications.css';

const Publications = () => {
  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={16} />
            <span>Karya Ilmiah & Riset Akademis</span>
          </div>
          <h2 className="section-title">
            Publikasi <span className="text-gradient">Jurnal Ilmiah</span>
          </h2>
          <p className="section-description">
            Riset bidang Sistem Informasi yang telah dipublikasikan pada jurnal ilmiah terakreditasi.
          </p>
        </div>

        {/* ORCID Profile Card Accent */}
        <div className="orcid-highlight-card glass-card">
          <div className="orcid-left">
            <div className="orcid-badge-icon">
              <IconOrcid size={36} />
            </div>
            <div className="orcid-text-info">
              <h3 className="orcid-name">{profileData.name}</h3>
              <span className="orcid-id">ORCID iD: {profileData.orcidId}</span>
            </div>
          </div>
          <a 
            href={profileData.orcid} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary btn-sm orcid-btn"
          >
            <span>Buka Profil ORCID</span>
            <ExternalLink size={15} />
          </a>
        </div>

        {/* Publications List */}
        <div className="publications-list">
          {publicationsData.map((pub) => (
            <div key={pub.id} className="glass-card pub-card">
              <div className="pub-header">
                <span className="pub-category-tag">{pub.category}</span>
                <span className="pub-year">{pub.year}</span>
              </div>

              <h3 className="pub-title">{pub.title}</h3>

              <div className="pub-meta">
                <span className="pub-authors">Peneliti: <strong>{pub.authors}</strong></span>
                <span className="pub-journal">Jurnal: <strong>{pub.journal}</strong></span>
              </div>

              <p className="pub-abstract">{pub.abstract}</p>

              <div className="pub-keywords">
                <span className="kw-label"><Tag size={13} /> Kata Kunci:</span>
                {pub.keywords.map((kw, kIdx) => (
                  <span key={kIdx} className="kw-badge">{kw}</span>
                ))}
              </div>

              <div className="pub-footer">
                <a 
                  href={pub.doiUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-sm pub-doi-btn"
                >
                  <span>DOI Jurnal: {pub.doi}</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
