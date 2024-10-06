import React from 'react';
import styles from "./Call.module.scss"
import Container from "../../UI/Container";
import {useEffect, useState} from 'react';
import axios from 'axios';


const Call = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mail: '',
    question: ''
  });

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('/api/contact', formData);
          alert('Message sent successfully!');
        } catch (error) {
          console.error('Error sending message:', error);
          alert('An error occurred while sending the message.');
        }
      };
    
    return (
        <div className={styles.bodyWrapper}>
            <Container>

                <div className={styles.wrapper}>
                    <div className={styles.tittle}>
                        Оставьте заявку на обратный звонок или задайте вопрос
                    </div>
                    <form  onSubmit={handleSubmit}>
                        <label htmlFor="name"></label>
                        <input className={styles.form} type="text" id="name" name="name" placeholder="Имя" onChange={handleChange}/>
                    
                        <label htmlFor="phone"></label>
                        <input   className={styles.form} type="tel" id="phone" name="phone" placeholder="Телефон" onChange={handleChange}/>
                    
                        <label htmlFor="mail"></label>
                        <input className={styles.form} type="email" id="mail" name="mail" placeholder="Почта" onChange={handleChange}/>

                        <div className={styles.bigform}>
                            <textarea className={styles.textareea} name="question" placeholder="Вопрос" onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className={styles.button}>Отправить заявку</button>
                    </form>
                </div>

            </Container>
        </div>
    );
};

export default Call;