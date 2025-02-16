import React from 'react';
import styles from "./Ticks.module.scss";
import Container from "../../UI/Container";
import { motion } from 'framer-motion';

const Ticks = () => {
  const items = [
    {
      title: "ЛУЧШЕЕ СЕРВИСНОЕ ОБСЛУЖИВАНИЕ",
      text: "Наша компания предоставляет лучшее сервисное обслуживание. Мы не только осуществляем продажу качественных китайских лифтов, но и производим работы по проектированию, монтажу, обслуживанию и ремонту оборудования."
    },
    {
      title: "НАДЕЖНОСТЬ И БЕЗОПАСНОСТЬ",
      text: "Надежность и безопасность подъемников - первая и важная часть нашей компании. Мы гарантируем качество поставляемого на российский рынок оборудования."
    },
    {
      title: "ВЫГОДНЫЕ ЦЕНЫ ОТ ПРОИЗВОДИТЕЛЯ",
      text: "Являясь официальным представителем лифтового завода Siglen, мы предлагаем электрические лифты китайского производства по ценам производителя."
    },
    {
      title: "РЕПУТАЦИЯ НАШЕЙ КОМПАНИИ",
      text: "Мы дорожим своей репутацией и отвечаем за качество оборудования. Наши продукты отличаются высоким качеством и уровнем безопасности."
    }
  ];

  return (
    <div className={styles.bg}>
    <Container>
      <div className={styles.section}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Купить лифты у нас - <span>это...</span>
        </motion.h2>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.icon}>
                <svg viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
    </div>
  );
};

export default Ticks;