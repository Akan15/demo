import React, { useEffect, useState } from "react";
import { fetchFAQs } from "../services/faqService";

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetchFAQs()
      .then(setFaqs)
      .catch((error) => {
        console.error("Ошибка загрузки FAQ:", error);
      });
  }, []);

  return (
    <div className="faq-page">
      <h2>Часто задаваемые вопросы</h2>
      {faqs.map((f) => (
        <div key={f.id} className="faq-item">
          <h3>{f.question}</h3>
          <p>{f.answer}</p>
          <small>Категория: {f.category}</small>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
