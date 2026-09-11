import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Layers } from 'lucide-react';
import { IconGithub } from './SocialIcons';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={20} />
        </button>

        {/* Modal Banner Image */}
        <div className="modal-image-wrapper">
          <img src={project.image} alt={project.title} className="modal-image" />
          <span className="modal-category-badge">{project.category}</span>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          
          <div className="modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="modal-tag">{tag}</span>
            ))}
          </div>

          <p className="modal-long-desc">{project.longDescription}</p>

          {/* Key Project Highlights / Metrics */}
          {project.metrics && (
            <div className="modal-metrics-box">
              <h4 className="metrics-title">Pencapaian Utama & Dampak:</h4>
              <div className="metrics-list">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="metric-badge">
                    <CheckCircle size={16} className="metric-icon" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* External Links */}
          <div className="modal-footer-actions">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                <span>Demo Langsung</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                <IconGithub size={16} />
                <span>Lihat Repositori Kode</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
