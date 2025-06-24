import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './ServicesSection.css';

export default function ServicesSection() {
  const { t } = useLanguage();
  const services = t.servicesSection.services;
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">{t.servicesSection.title}</h2>
        <div className="services-list">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} target="_blank" rel="noopener noreferrer" className="service-link">{t.servicesSection.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 