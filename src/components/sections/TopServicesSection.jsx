import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './TopServicesSection.css';

const TopServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t.topServices.services.criminalRecord,
      qrCode: '/qr_code/CriminalRecordCertificate.jpg',
      icon: '📄'
    },
    {
      id: 2,
      title: t.topServices.services.UAPF,
      qrCode: '/qr_code/UAPF.jpg',
      icon: '💳'
    },
    {
      id: 3,
      title: t.topServices.services.birthCertificates,
      qrCode: '/qr_code/birthCertificate.jpg',
      icon: '🪪'
    },
    {
      id: 4,
      title: t.topServices.services.pensionCertificates,
      qrCode: '/qr_code/pensionCertificates.jpg',
      icon: '📑'
    },
    {
      id: 5,
      title: t.topServices.services.f6Certificate,
      qrCode: '/qr_code/HelpF-6.jpg',
      icon: '🏠'
    },
    {
      id: 6,
      title: t.topServices.services.legalEntityCertificate,
      qrCode: '/qr_code/certificateOfRegistration.jpg',
      icon: '📄'
    }
  ];

  // Анимация появления карточек
  const [visibleCards, setVisibleCards] = useState([]);
  useEffect(() => {
    services.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, idx]);
      }, idx * 100 + 100);
    });
  }, []);

  return ( 
    <section id="top-services" className="top-services-section">
      <div className="container">
        <h2 className="section-title">{t.topServices.title}</h2>
        <p className="section-description">{t.topServices.description}</p>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`top-service-card${visibleCards.includes(idx) ? ' animate-slide-up' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-qr">
                <img 
                  src={service.qrCode} 
                  alt="QR code for service"
                  style={{ width: '100px', height: '100px', objectFit: 'contain', marginTop: '1rem' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopServicesSection; 