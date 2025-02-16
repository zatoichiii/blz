import React from 'react';
import styles from "./Call.module.scss";
import Container from "../../UI/Container";
import { useState } from 'react';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Call = ({ onSuccess, isModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    recaptcha: ''
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

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
      onSuccess?.();
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Произошла ошибка при отправке сообщения');
    }
  };

  const content = (
    <div className={styles.wrapper}>
      <div className={styles.formSection}>
        <div className={styles.title}>
          {isModal ? 'Заказать обратный звонок' : 'Оставьте заявку на обратный звонок'}
        </div>
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
          <input 
            className={styles.form} 
            type="text" 
            name="name" 
            placeholder="Имя" 
            onChange={handleChange}
            required
          />
          <input 
            className={styles.form} 
            type="tel" 
            name="phone" 
            placeholder="Телефон" 
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.button}>
            Отправить заявку
          </button>
        </form>
      </div>

      {!isModal && (
        <div className={styles.contactsSection}>
          <div className={styles.contactsTitle}>Контактная информация</div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📞</span>
            <div>
              <div>+7 (908) 519-85-07</div>
              <div>+7 (928) 174-41-79</div>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>🕒</span>
            <div>
              <div>Пн-Сб: 9:00 - 18:00</div>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <a href="https://yandex.ru/maps/39/rostov-na-donu/house/ulitsa_vavilova_74b/Z0AYcA9jQUEGQFptfX55cn9qYQ==/?ll=39.683841%2C47.283395&z=17">г. Ростов-на-Дону, ул. Вавилова, 74Б</a>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉️</span>
            <div>support@blz-lifts.ru</div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className={isModal ? styles.modalWrapper : styles.bodyWrapper}>
      {isModal ? content : <Container>{content}</Container>}
    </div>
  );
};

export default Call;