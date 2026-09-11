import React, { useState } from 'react';
import { Layout, Server, Database, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { IconFigma } from './SocialIcons';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', ...skillsData.map((item) => item.category)];

  const categoryIcons = {
    'Frontend Development': <Layout size={20} />,
    'Backend & API Architecture': <Server size={20} />,
    'Database & Cloud Infrastructure': <Database size={20} />,
    'UI/UX & Design Systems': <IconFigma size={20} />
  };

  const filteredData = activeCategory === 'Semua' 
    ? skillsData 
    : skillsData.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={16} />
            <span>Keahlian & Spesialisasi</span>
          </div>
          <h2 className="section-title">
            Teknologi & <span className="text-gradient">Ekosistem Utama</span>
          </h2>
          <p className="section-description">
            Alat dan stack teknologi pilihan yang saya gunakan untuk mewujudkan solusi digital berkinerja tinggi.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-wrapper">
          <div className="skills-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`skill-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat !== 'Semua' && categoryIcons[cat]}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display Grid */}
        <div className="skills-categories-grid">
          {filteredData.map((catGroup, idx) => (
            <div key={idx} className="skill-group-card glass-card">
              <div className="group-header">
                <div className="group-icon-box">
                  {categoryIcons[catGroup.category] || <Cpu size={22} />}
                </div>
                <h3 className="group-title">{catGroup.category}</h3>
              </div>

              <div className="skills-list">
                {catGroup.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-name-row">
                        <span className="skill-name">
                          <CheckCircle2 size={16} className="skill-check-icon" />
                          {skill.name}
                        </span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <p className="skill-desc">{skill.desc}</p>
                    </div>

                    <div className="progress-bar-bg">
                      <div 
                        className="progress-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
