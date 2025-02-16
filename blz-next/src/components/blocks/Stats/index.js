import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from "./Stats.module.scss";
import Container from "../../UI/Container";
import * as FeatherIcons from 'react-feather';

const StatsData = [
  { 
    icon: 'Building', 
    value: 67, 
    title: "Лет на рынке", 
    suffix: "г", 
    description: "Опыт работы в лифтостроении" 
  },
  { 
    icon: 'Globe', 
    value: 89, 
    title: "География", 
    suffix: "+", 
    description: "Регионов присутствия в ЕАЭС" 
  },
  { 
    icon: 'Settings', 
    value: 50, 
    title: "Моделей", 
    suffix: "+", 
    description: "Лифтового оборудования" 
  },
  { 
    icon: 'Shield', 
    value: 60, 
    title: "Гарантия", 
    suffix: " мес", 
    description: "Расширенная гарантия на услуги" 
  },
  { 
    icon: 'Award', 
    value: 1, 
    title: "Эксперт", 
    suffix: " в Ростове", 
    description: "Официальный дистрибьютор ГЛЗ" 
  },
];

const Stats = () => {
  const [counters, setCounters] = useState(StatsData.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      StatsData.forEach((stat, index) => {
        let current = 0;
        const interval = setInterval(() => {
          current += Math.ceil(stat.value / 40);
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(interval);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = current;
            return newCounters;
          });
        }, 30);
      });
    }
  }, [inView]);

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.overlay} />
      <Container>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Профессионалы лифтостроения</h2>
          <div className={styles.grid}>
            {StatsData.map((stat, index) => {
              const IconComponent = FeatherIcons[stat.icon];
              
              if (!IconComponent) {
                console.error(`Иконка "${stat.icon}" не найдена в react-feather`);
                return null;
              }

              return (
                <motion.div 
                  key={stat.title}
                  className={styles.card}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ minHeight: '100%' }} // Добавляем это свойство

                >
                  <IconComponent className={styles.icon} size={40} />
                  <div className={styles.value}>
                    {counters[index]}
                    <span>{stat.suffix}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{stat.title}</h3>
                  <p className={styles.description}>{stat.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Stats;