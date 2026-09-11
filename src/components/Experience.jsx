import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, ExternalLink, BookOpen } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={16} />
            <span>Jejak Karir & Pendidikan</span>
          </div>
          <h2 className="section-title">
            Pengalaman <span className="text-gradient">Profesional</span>
          </h2>
          <p className="section-description">
            Perjalanan karir saya dalam industri teknologi dan latar belakang akademis.
          </p>
        </div>

        <div className="experience-grid">
          {/* Work Experience Timeline */}
          <div className="timeline-column">
            <h3 className="column-heading">
              <Briefcase size={22} className="column-icon" />
              <span>Pengalaman Kerja</span>
            </h3>

            <div className="timeline-wrapper">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>

                  <div className="glass-card timeline-card">
                    <div className="timeline-card-header">
                      <h4 className="exp-role">{exp.role}</h4>
                      <span className="exp-period">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>

                    <div className="exp-sub">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-loc">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="exp-desc">{exp.description}</p>

                    <div className="exp-achievements">
                      <span className="achieve-title">Pencapaian Utama:</span>
                      <ul>
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx}>{ach}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="timeline-column">
            <h3 className="column-heading">
              <GraduationCap size={24} className="column-icon" />
              <span>Pendidikan & Kualifikasi</span>
            </h3>

            <div className="timeline-wrapper">
              {educationData.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-dot"></div>
                  </div>

                  <div className="glass-card timeline-card">
                    <div className="timeline-card-header">
                      <h4 className="exp-role">{edu.degree}</h4>
                      <span className="exp-period">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                    </div>

                    <div className="exp-sub edu-inst-row">
                      {edu.logo && (
                        <img src={edu.logo} alt="UKSW Logo" className="edu-logo-img" />
                      )}
                      <span className="exp-company">{edu.institution}</span>
                      <span className="edu-gpa-badge">
                        <Award size={13} />
                        {edu.gpa}
                      </span>
                    </div>

                    <p className="exp-desc">{edu.description}</p>

                    {edu.thesisTitle && (
                      <div className="exp-achievements edu-thesis-box">
                        <span className="achieve-title edu-thesis-heading">
                          <BookOpen size={14} />
                          Tugas Akhir / Jurnal Publikasi:
                        </span>
                        <p className="edu-thesis-text">"{edu.thesisTitle}"</p>
                        {edu.thesisUrl && (
                          <a 
                            href={edu.thesisUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="edu-doi-link"
                          >
                            <span>Jurnal DOI: {edu.thesisUrl}</span>
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
