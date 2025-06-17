import React from 'react';

export const ProductsSection = () => {
  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section__title">Продукты и модули</h2>
        <div className="products-grid">
          <div className="product-card">
            <h3>eGov Mobile</h3>
            <p>Мобильное приложение для граждан</p>
            <div className="download-links">
              <a href="#" className="btn">App Store</a>
              <a href="#" className="btn">Play Market</a>
            </div>
          </div>
          <div className="product-card">
            <h3>eGov Business</h3>
            <p>Приложение для бизнеса</p>
            <a href="#" className="btn">Скачать</a>
          </div>
          <div className="product-card">
            <h3>Цифровые документы</h3>
            <p>Доступ к цифровым документам</p>
            <a href="#" className="btn">Подробнее</a>
          </div>
        </div>
      </div>
    </section>
  );
};