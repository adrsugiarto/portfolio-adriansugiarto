import React from 'react';
import { Quote, Star, MessageSquare } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={16} />
            <span>Testimoni & Rekomendasi</span>
          </div>
          <h2 className="section-title">
            Apa Kata <span className="text-gradient">Klien & Rekan Kerja</span>
          </h2>
          <p className="section-description">
            Ulasan nyata dari pemimpin tim dan pemilik proyek yang telah berkolaborasi bersama saya.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((t, idx) => (
            <div key={idx} className="glass-card testimonial-card">
              <div className="quote-icon-box">
                <Quote size={28} />
              </div>

              <div className="rating-stars">
                {[...Array(5)].map((_, sIdx) => (
                  <Star key={sIdx} size={16} className="star-filled" />
                ))}
              </div>

              <p className="testimonial-quote">"{t.quote}"</p>

              <div className="author-row">
                <img src={t.avatar} alt={t.author} className="author-avatar" />
                <div className="author-details">
                  <h4 className="author-name">{t.author}</h4>
                  <span className="author-title">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
