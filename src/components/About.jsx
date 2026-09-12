import React from 'react';
import { Award, BookOpen, GraduationCap, Code2, ShieldCheck, Cpu, Layers, HeartHandshake } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import './About.css';

const About = ({ t }) => {
  const iconMap = {
    BookOpen: <BookOpen size={24} />,
    Award: <Award size={24} />,
    GraduationCap: <GraduationCap size={24} />,
    Code2: <Code2 size={24} />
  };

  const coreValues = [
    {
      icon: <BookOpen size={26} className="value-icon" />,
      title: t?.val1Title || "Riset Empiris Terstruktur",
      desc: t?.val1Desc || "Pendekatan berbasis data ilmiah, analisis kuantitatif (UTAUT2), dan metodologi riset teruji."
    },
    {
      icon: <ShieldCheck size={26} className="value-icon" />,
      title: t?.val2Title || "Prinsip Rekayasa Perangkat Lunak",
      desc: t?.val2Desc || "Implementasi siklus SELC/SDLC untuk menghasilkan arsitektur perangkat lunak yang andal."
    },
    {
      icon: <Cpu size={26} className="value-icon" />,
      title: t?.val3Title || "Pengembangan Software Modern",
      desc: t?.val3Desc || "Menulis kode React.js, Laravel, dan Node.js yang bersih, teruji, dan mudah dipelihara."
    },
    {
      icon: <Layers size={26} className="value-icon" />,
      title: t?.val4Title || "Integritas Akademis",
      desc: t?.val4Desc || "Berdedikasi pada transparansi publikasi ilmiah (ORCID) dan kontribusi ilmu pengetahuan."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={16} />
            <span>{t?.badge || 'Filosofi & Profil'}</span>
          </div>
          <h2 className="section-title">
            {t?.title || 'Tentang'} <span className="text-gradient">{profileData.shortName}</span>
          </h2>
          <p className="section-description">
            {t?.sub || 'Mengombinasikan keilmuan akademis Sistem Informasi dengan keahlian praktis pengembangan perangkat lunak.'}
          </p>
        </div>

        {/* Top Story Grid */}
        <div className="about-grid">
          {/* Bio Story Card */}
          <div className="glass-card about-bio-card">
            <h3 className="bio-title">{t?.bioTitle || 'Latar Belakang Akademis & Pemrograman'}</h3>
            <p className="bio-paragraph">
              {profileData.bio}
            </p>
            
            <div className="about-quote">
              {t?.quote || '"Ilmu pengetahuan dan teknologi berkembang harmonis ketika riset ilmiah dipadukan dengan implementasi kode praktis yang bermanfaat nyata."'}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {profileData.stats.map((stat, idx) => (
              <div key={idx} className="glass-card stat-card">
                <div className="stat-icon-wrapper">
                  {iconMap[stat.icon] || <Award size={24} />}
                </div>
                <div className="stat-value text-gradient">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles Cards */}
        <div className="values-container">
          <h3 className="values-heading">{t?.valuesHeading || 'Fokus Keilmuan & Nilai Utama'}</h3>
          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <div key={idx} className="glass-card value-card">
                <div className="value-icon-box">{val.icon}</div>
                <h4 className="value-title">{val.title}</h4>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
