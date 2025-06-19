import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './TopServicesSection.css';

const TopServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t.topServices.services.criminalRecord,
      qrCode: require('../../assets/qr_code/CriminalRecordCertificate.jpg'),
      icon: '📄'
    },
    {
      id: 2,
      title: t.topServices.services.UAPF,
      qrCode: require('../../assets/qr_code/UAPF.jpg'),
      icon: '💳'
    },
    {
      id: 3,
      title: t.topServices.services.birthCertificates,
      qrCode: require('../../assets/qr_code/birthCertificate.jpg'),
      icon: '🪪'
    },
    {
      id: 4,
      title: t.topServices.services.pensionCertificates,
      qrCode: require('../../assets/qr_code/pensionCertificates.jpg'),
      icon: '📑'
    },
    {
      id: 5,
      title: t.topServices.services.f6Certificate,
      qrCode: require('../../assets/qr_code/HelpF-6.jpg'),
      icon: '🏠'
    },
    {
      id: 6,
      title: t.topServices.services.legalEntityCertificate,
      qrCode: require('../../assets/qr_code/certificateOfRegistration.jpg'),
      icon: '📄'
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