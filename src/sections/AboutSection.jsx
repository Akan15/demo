import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section__title">О проекте ИС МГОВ</h2>
        <div className="about-section__content">
          <div className="about-section__text">
            <p>Краткое описание проекта. ИС МГОВ - это информационная система для управления государственными услугами.</p>
            <p>Система предоставляет удобный доступ к государственным сервисам через мобильные приложения.</p>
          </div>
          <div className="about-section__image">
            <img src="/images/department-logo.png" alt="Департамент" />
          </div>
        </div>
      </div>
    </section>
  );
};