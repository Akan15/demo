import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './AboutSection.css';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2>{t.aboutTitle}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{t.aboutText1}</p>
            <p>{t.aboutText2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 