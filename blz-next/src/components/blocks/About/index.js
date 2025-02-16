import styles from "./About.module.scss";
import Container from "../../UI/Container";
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Container>
      <motion.div 
        ref={ref}
        className={styles.section}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className={styles.grid}>
          <div className={styles.content}>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              {item.title}
            </motion.h2>
            
            <motion.div 
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: item.description }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <a href={item.href} className={styles.button}>
                Подробнее
                <svg viewBox="0 0 24 24">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div 
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <img 
              src={item.image} 
              alt="About" 
              className={styles.image}
            />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default About;