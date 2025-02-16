import React from 'react';
import styles from "./Product.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";
import { motion } from "framer-motion";
import { FiMessageSquare, FiPhoneCall } from "react-icons/fi";

const Product = ({ lift }) => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <Container>
        <motion.div 
          className={styles.bodyWrapper}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div 
            className={styles.images}
            variants={slideUp}
          >
            <img 
              src={`/${lift.imgPath}/0.png`} 
              alt={lift.name} 
              className={styles.productImage}
              loading="lazy"
            />
          </motion.div>

          <motion.div 
            className={styles.wrapper}
            variants={slideUp}
          >
            <div className={styles.text}>
              <h1 className={styles.title}>{lift.name}</h1>
              
              <div className={styles.infoGrid}>
                <InfoCard label="Серийный номер" value={lift.serialNumber} />
                <InfoCard label="Тип продукта" value={lift.type} />
                <InfoCard label="Ключевое слово" value={lift.keyWord} />
              </div>

              <div className={styles.buttonGroup}>
                <motion.a 
                  href="/contacty"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.button}
                >
                  <FiMessageSquare className={styles.icon} />
                  Отправить сообщение
                </motion.a>

                <motion.a
                  href="tel:+79085198507"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.button}
                >
                  <FiPhoneCall className={styles.icon} />
                  +7 (908) 519-85-07
                </motion.a>
              </div>

              <div className={styles.specs}>
                <h2 className={styles.specsTitle}>Характеристики</h2>
                <ul className={styles.specsList}>
                  {lift.characteristics.split('\n').map((item, i) => (
                    <li key={i} className={styles.specItem}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
    </Container>
  );
};

const InfoCard = ({ label, value }) => (
  <motion.div 
    className={styles.infoCard}
    whileHover={{ y: -5 }}
  >
    <span className={styles.cardLabel}>{label}</span>
    <span className={styles.cardValue}>{value}</span>
  </motion.div>
);

export default Product;