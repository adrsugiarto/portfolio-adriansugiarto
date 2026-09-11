import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Eye, Sparkles } from 'lucide-react';
import { IconGithub } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['Semua', 'Web App', 'Mobile', 'UI/UX'];

  const filteredProjects = activeCategory === 'Semua'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={16} />
            <span>Karya Terpilih</span>
          </div>
          <h2 className="section-title">
            Portfolio <span className="text-gradient">Proyek Unggulan</span>
          </h2>
          <p className="section-description">
            Kumpulan solusi perangkat lunak yang telah saya rancang dan kembangkan dengan standar estetika tinggi.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`project-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-thumb-container">
                <img src={project.image} alt={project.title} className="project-thumb" />
                <div className="project-overlay">
                  <button 
                    className="btn btn-primary btn-sm overlay-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={16} />
                    <span>Detail Proyek</span>
                  </button>
                </div>
                <span className="project-category-tag">{project.category}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-tags">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="p-tag">{t}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <button 
                    className="detail-text-link"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Selengkapnya</span>
                    <Eye size={14} />
                  </button>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-link-icon" title="GitHub Source">
                        <IconGithub size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-link-icon" title="Live Preview">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
