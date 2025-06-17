import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import { LanguageSelector } from './LanguageSelector';
import logo from '../../assets/images/egov-m-logo-1.png';
import './Header.css';

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="NITEC Logo" />
          </div>
          
          <button 
            className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.about}</a>
            <a href="#products" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.products}</a>
            <a href="#instructions" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.instructions}</a>
            <a href="#faq" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.faq}</a>
            {/* <a href="#team" className="nav-link">{t.team.title}</a> */}
            <a href="#statistics" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.statistics.title}</a>
            {/* <a href="#contact" className="nav-link">{t.contact}</a> */}
            <a href="#top-services" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.topServices.title}</a>
            <div className="mobile-language-selector">
              <LanguageSelector />
            </div>
          </nav>
          
          <div className="desktop-language-selector">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;