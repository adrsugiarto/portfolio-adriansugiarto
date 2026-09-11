import React from 'react';
import { Award, BookOpen, GraduationCap, Code2, ShieldCheck, Cpu, Layers, HeartHandshake } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import './About.css';

const About = () => {
  const iconMap = {
    BookOpen: <BookOpen size={24} />,
    Award: <Award size={24} />,
    GraduationCap: <GraduationCap size={24} />,
    Code2: <Code2 size={24} />
  };

  const coreValues = [
    {
      icon: <BookOpen size={26} className="value-icon" />,
      title: "Riset Empiris Terstruktur",
      desc: "Pendekatan berbasis data ilmiah, analisis kuantitatif (UTAUT2), dan metodologi riset teruji."
    },
    {
      icon: <ShieldCheck size={26} className="value-icon" />,
      title: "Prinsip Rekayasa Perangkat Lunak",
      desc: "Implementasi siklus SELC/SDLC untuk menghasilkan arsitektur perangkat lunak yang andal."
    },
    {
      icon: <Cpu size={26} className="value-icon" />,
      title: "Pengembangan Software Modern",
      desc: "Menulis kode React.js, Laravel, dan Node.js yang bersih, teruji, dan mudah dipelihara."
    },
    {
      icon: <Layers size={26} className="value-icon" />,
      title: "Integritas Akademis",
      desc: "Berdedikasi pada transparansi publikasi ilmiah (ORCID) dan kontribusi ilmu pengetahuan."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={16} />
            <span>Filosofi & Profil</span>
          </div>
          <h2 className="section-title">
            Tentang <span className="text-gradient">{profileData.shortName}</span>
          </h2>
          <p className="section-description">
            Mengombinasikan keilmuan akademis Sistem Informasi dengan keahlian praktis pengembangan perangkat lunak.
          </p>
        </div>

        {/* Top Story Grid */}
        <div className="about-grid">
          {/* Bio Story Card */}
          <div className="glass-card about-bio-card">
            <h3 className="bio-title">Latar Belakang Akademis & Pemrograman</h3>
            <p className="bio-paragraph">
              {profileData.bio}
            </p>
            <p className="bio-paragraph">
              Berbasis di <strong>{profileData.location}</strong>, saya menyelesaikan pendidikan Sarjana Sistem Informasi (S.SI) di Universitas Kristen Satya Wacana dengan predikat <strong>Cum Laude (IPK 3.94)</strong> dan melanjutkan studi Magister Sistem Informasi (M.Kom).
            </p>
            
            <div className="about-quote">
              "Ilmu pengetahuan dan teknologi berkembang harmonis ketika riset ilmiah dipadukan dengan implementasi kode praktis yang bermanfaat nyata."
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
          <h3 className="values-heading">Fokus Keilmuan & Nilai Utama</h3>
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
