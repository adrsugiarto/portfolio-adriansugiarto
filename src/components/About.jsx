import React from 'react';
import { Award, CheckCircle2, Smile, Code2, ShieldCheck, Zap, Users, HeartHandshake } from 'lucide-react';
import { profileData } from '../data/portfolioData';
import './About.css';

const About = () => {
  const iconMap = {
    Award: <Award size={24} />,
    CheckCircle2: <CheckCircle2 size={24} />,
    Smile: <Smile size={24} />,
    Code2: <Code2 size={24} />
  };

  const coreValues = [
    {
      icon: <ShieldCheck size={28} className="value-icon" />,
      title: "Arsitektur Kode Bersih",
      desc: "Menulis kode yang mudah dipelihara, teruji, dan terstruktur sesuai best practice industri."
    },
    {
      icon: <Zap size={28} className="value-icon" />,
      title: "Performa & Kecepatan",
      desc: "Optimasi waktu muat aplikasi hingga milidetik untuk meningkatkan angka konversi pengguna."
    },
    {
      icon: <HeartHandshake size={28} className="value-icon" />,
      title: "Desain Berfokus UX",
      desc: "Estetika biru & putih yang bersih memberikan visual intuitif dan kenyamanan berinteraksi."
    },
    {
      icon: <Users size={28} className="value-icon" />,
      title: "Komunikasi Transparan",
      desc: "Kolaborasi aktif dengan stakeholders untuk menghasilkan solusi bisnis tepat sasaran."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Code2 size={16} />
            <span>Mengenal Lebih Dekat</span>
          </div>
          <h2 className="section-title">
            Tentang <span className="text-gradient">Adrian Herma Sugiarto</span>
          </h2>
          <p className="section-description">
            Memadukan kreativitas antarmuka visual dengan kekuatan arsitektur backend scalable.
          </p>
        </div>

        {/* Top Story Grid */}
        <div className="about-grid">
          {/* Bio Story Card */}
          <div className="glass-card about-bio-card">
            <h3 className="bio-title">Dedikasi Pada Keunggulan Perangkat Lunak</h3>
            <p className="bio-paragraph">
              {profileData.bio}
            </p>
            <p className="bio-paragraph">
              Berbasis di <strong>{profileData.location}</strong>, saya berpengalaman mengelola siklus pengembangan perangkat lunak dari konsep desain wireframe Figma hingga eksekusi pendeplotan server cloud AWS/Vercel.
            </p>
            
            <div className="about-quote">
              "Kualitas sebuah perangkat lunak tidak hanya terlihat dari tampilannya, melainkan bagaimana kode di baliknya memberikan rasa aman dan kenyamanan tanpa celah."
            </div>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {profileData.stats.map((stat, idx) => (
              <div key={idx} className="glass-card stat-card">
                <div className="stat-icon-wrapper">
                  {iconMap[stat.icon]}
                </div>
                <div className="stat-value text-gradient">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles Cards */}
        <div className="values-container">
          <h3 className="values-heading">Prinsip & Nilai Kerja Utama</h3>
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
