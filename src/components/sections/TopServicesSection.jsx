import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaArrowRight } from 'react-icons/fa';
import './TopServicesSection.css';

const TopServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t.topServices.services.criminalRecord,
      link: 'https://egov.kz/cms/ru',
      icon: '📄'
    },
    {
      id: 2,
      title: t.topServices.services.registerLLP,
      link: 'https://egov.kz/cms/ru',
      icon: '🏢'
    },
    {
      id: 3,
      title: t.topServices.services.digitalID,
      link: 'https://egov.kz/cms/ru',
      icon: '🪪'
    },
    {
      id: 4,
      title: t.topServices.services.taxPayment,
      link: 'https://egov.kz/cms/ru',
      icon: '💰'
    }
  ];

  return (
    <section id="top-services" className="top-services-section">
      <div className="container">
        <h2 className="section-title">{t.topServices.title}</h2>
        <p className="section-description">{t.topServices.description}</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <a 
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="service-link"
              >
                {t.topServices.goToService}
                <FaArrowRight className="arrow-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopServicesSection; 