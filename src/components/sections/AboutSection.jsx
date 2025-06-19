import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './AboutSection.css';
// import Image from 'next/image'; // Uncomment if you add an image

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
          {/* Example for adding an image:
          <div className="about-image">
            <Image
              src="/assets/images/about-image.jpg"
              alt="About us"
              width={400}
              height={300}
              style={{ objectFit: 'cover', borderRadius: '1rem' }}
            />
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 