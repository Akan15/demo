import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import './ProductsSection.css';

const ProductsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2>{t.productsTitle}</h2>
        <div className="products-grid">
          <div className="product-card">
            <h3>{t.egovMobileTitle}</h3>
            <p>{t.egovMobileDesc}</p>
            <div className="app-links">
              <a href="https://apps.apple.com/kz/app/egov-mobile/id1476128386" target="_blank" rel="noopener noreferrer" className="app-store">
                {t.appStore}
              </a>
              <a href="https://play.google.com/store/search?q=egov+mobile+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5&c=apps&hl=ru" target="_blank" rel="noopener noreferrer" className="play-market">
                {t.playMarket}
              </a>
            </div>
          </div>

          <div className="product-card">
            <h3>{t.egovBusinessTitle}</h3>
            <p>{t.egovBusinessDesc}</p>
            <div className="app-links">
              <a href="https://apps.apple.com/kz/app/egov-business/id1597880144" target="_blank" rel="noopener noreferrer" className="app-store">
                {t.appStore}
              </a>
              <a href="https://play.google.com/store/search?q=egov+business&c=apps&hl=ru" target="_blank" rel="noopener noreferrer" className="play-market">
                {t.playMarket}
              </a>
            </div>
          </div>

          <div className="product-card">
            <h3>{t.digitalDocsTitle}</h3>
            <p>{t.digitalDocsDesc}</p>
            <a href="#" className="learn-more">{t.learnMore}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 