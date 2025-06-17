import React, { useState } from 'react';
import { validateName, validatePhone, validateIin } from '../../utils/validation';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    iin: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!validateName(formData.name)) {
      newErrors.name = 'Имя должно содержать только буквы';
    }
    
    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Неверный формат телефона (начинается с +7 или 8, затем 10 цифр)';
    }
    
    if (!validateIin(formData.iin)) {
      newErrors.iin = 'ИИН должен содержать ровно 12 цифр';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Здесь будет запрос к API
      // const response = await submitForm(formData);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация запроса
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        iin: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section__title">Обратная связь</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Имя*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Телефон*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
              placeholder="+7XXXXXXXXXX или 8XXXXXXXXXX"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="iin">ИИН*</label>
            <input
              type="text"
              id="iin"
              name="iin"
              value={formData.iin}
              onChange={handleChange}
              className={errors.iin ? 'error' : ''}
              maxLength="12"
            />
            {errors.iin && <span className="error-message">{errors.iin}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>
          
          <button type="submit" disabled={isSubmitting} className="submit-btn">
            {isSubmitting ? 'Отправка...' : 'Отправить'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              Спасибо! Ваша заявка отправлена.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message">
              Произошла ошибка при отправке. Пожалуйста, попробуйте позже.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};