import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { IconGithub, IconLinkedin } from './SocialIcons';
import { profileData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending form API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto close toast after 6 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Mail size={16} />
            <span>Mari Berdiskusi</span>
          </div>
          <h2 className="section-title">
            Hubungi <span className="text-gradient">Adrian Herma Sugiarto</span>
          </h2>
          <p className="section-description">
            Punya ide proyek menarik, tawaran kerjasama, atau ingin sekadar menyapa? Jangan ragu untuk mengirim pesan.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Info Cards */}
          <div className="contact-info-col">
            <h3 className="contact-col-title">Informasi Kontak Direct</h3>
            <p className="contact-col-sub">
              Saya selalu terbuka untuk mendiskusikan ide baru, arsitektur sistem, dan peluang kolaborasi.
            </p>

            <div className="info-cards-list">
              <a href={`mailto:${profileData.email}`} className="glass-card contact-info-card">
                <div className="contact-icon-box">
                  <Mail size={22} />
                </div>
                <div className="info-details">
                  <span className="info-label">Email Saya</span>
                  <span className="info-val">{profileData.email}</span>
                </div>
              </a>

              <a href={profileData.whatsapp} target="_blank" rel="noopener noreferrer" className="glass-card contact-info-card">
                <div className="contact-icon-box">
                  <Phone size={22} />
                </div>
                <div className="info-details">
                  <span className="info-label">Telepon / WhatsApp</span>
                  <span className="info-val">{profileData.phone}</span>
                </div>
              </a>

              <div className="glass-card contact-info-card">
                <div className="contact-icon-box">
                  <MapPin size={22} />
                </div>
                <div className="info-details">
                  <span className="info-label">Lokasi Domisili</span>
                  <span className="info-val">{profileData.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials-box">
              <span className="socials-label">Kunjungi Profil Profesional:</span>
              <div className="socials-buttons">
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <IconGithub size={16} />
                  <span>GitHub</span>
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                  <IconLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col">
            <div className="glass-card form-card">
              <h3 className="form-title">Kirim Pesan Langsung</h3>

              {submitted ? (
                <div className="form-success-box">
                  <div className="success-icon-wrapper">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4>Pesan Berhasil Terkirim!</h4>
                  <p>
                    Terima kasih telah menghubungi. Saya akan merespons pesan Anda dalam kurun waktu 1x24 jam.
                  </p>
                  <button 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">Nama Lengkap *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="form-input" 
                        placeholder="Contoh: Budi Pratama"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email Anda *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-input" 
                        placeholder="budi@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subjek Pesan *</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className="form-input" 
                      placeholder="Diskusi Proyek / Penawaran Kerjasama"
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Detail Pesan *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      className="form-input form-textarea" 
                      placeholder="Tuliskan ide proyek atau pertanyaan Anda di sini..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-submit-form"
                    disabled={loading}
                  >
                    {loading ? (
                      <span>Mengirim...</span>
                    ) : (
                      <>
                        <span>Kirim Pesan Sekarang</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
