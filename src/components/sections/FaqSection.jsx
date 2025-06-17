import React, { useState, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import './FaqSection.css';

const FaqSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];
  const answerRefs = useRef([]);

  const handleFaqClick = (index) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2>{t.faqTitle}</h2>
        <div className="faq-list">
          {t.faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${expandedFaq === index ? 'expanded' : ''}`}
                onClick={() => handleFaqClick(index)}
                aria-expanded={expandedFaq === index}
              >
                {faq.question}
                <span className="arrow">▼</span>
              </button>
              <div 
                className="faq-answer-wrapper"
                style={{
                  height: expandedFaq === index ? answerRefs.current[index]?.scrollHeight + 'px' : '0px'
                }}
              >
                <div 
                  className="faq-answer"
                  ref={el => answerRefs.current[index] = el}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 