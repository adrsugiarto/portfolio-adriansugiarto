import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './data/translations';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('ahs_theme') || 'light';
  });

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ahs_lang') || 'id';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ahs_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('ahs_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const t = translations[lang] || translations.id;

  return (
    <div className="app-container">
      {/* Top Fixed Glass Navigation */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
        toggleLang={toggleLang} 
        t={t.nav} 
      />

      {/* Main Content Sections */}
      <main>
        <Hero t={t.hero} />
        <Publications t={t.publications} />
        <About t={t.about} />
        <Experience t={t.experience} />
        <Skills t={t.skills} lang={lang} />
        <Projects t={t.projects} />
        <Contact t={t.contact} />
      </main>

      {/* Footer */}
      <Footer t={t.footer} navT={t.nav} />
    </div>
  );
}

export default App;
