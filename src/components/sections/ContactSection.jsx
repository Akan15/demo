import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import { submitFeedback } from '../../services/feedbackService';
import './ContactSection.css';

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

 

  // useEffect(() => {
  //   alert('ContactSection loaded!');
  // }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    iin: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation (only letters)
    if (!/^[а-яА-Яa-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = t.nameError;
    }

    // Phone validation (Kazakhstan format)
    if (!/^(\+7|8)[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = t.phoneError;
    }

    // IIN validation (12 digits)
    if (!/^[0-9]{12}$/.test(formData.iin)) {
      newErrors.iin = t.iinError;
    }

    // Message validation (max 300 characters)
    if (formData.message.length > 300) {
      newErrors.message = t.messageError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Form submitted!');
    
    if (!validateForm()) {
      alert('Form validation failed');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      alert('Attempting to submit feedback...');
      const response = await submitFeedback(formData);
      alert('Feedback submitted successfully!');
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', iin: '', message: '' });
    } catch (error) {
      alert('Error submitting feedback: ' + error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>{t.contactTitle}</h2>
        <p className="section-subtitle">{t.contactSubtitle}</p>

    

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t.nameLabel}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">{t.phoneLabel}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.phonePlaceholder}
              required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="iin">{t.iinLabel}</label>
            <input
              type="text"
              id="iin"
              name="iin"
              value={formData.iin}
              onChange={handleChange}
              required
            />
            {errors.iin && <span className="error">{errors.iin}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">{t.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? t.submitting : t.submitButton}
          </button>

          {submitStatus === 'success' && (
            <div className="success-message">{t.successMessage}</div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message">{t.errorMessage}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection; 