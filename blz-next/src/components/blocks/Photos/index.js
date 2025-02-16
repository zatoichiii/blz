import React, { useState } from 'react';
import styles from "./Photos.module.scss";
import Container from "../../UI/Container";
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Photos = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    recaptcha: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      alert("Ошибка загрузки reCAPTCHA");
      return;
    }

    try {
      const token = await executeRecaptcha('formSubmit');
      
      await axios.post('/api/contact', {
        ...formData,
        recaptcha: token
      });
      
      alert('Сообщение успешно отправлено!');
      setFormData({ name: '', phone: '', recaptcha: '' });
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке сообщения');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage} />
      <Container>
        <div className={styles.contentWrapper}>
          {/* Секция с слоганом */}
          <div className={styles.sloganSection}>
            <h2 className={styles.sloganTitle}>Ваш комфорт — наша забота! Стань одним из немногих, получи расширенную гарантию "Turnkey Elevator"</h2>
            <p className={styles.sloganText}>Заполните форму и узнайте о специальных предложениях!</p>
          </div>

          {/* Секция с формой */}
          <div className={styles.formSection}>
            <h2 className={styles.formTitle}>Оставьте заявку</h2>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                required
              />
              
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                className={styles.formInput}
                required
              />

              <button type="submit" className={styles.submitButton}>
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Photos;