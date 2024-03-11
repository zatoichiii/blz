
import styles from "./About.module.scss"
import Container from "../../UI/Container";
import React, { useEffect, useState, useRef } from 'react';


const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const productRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (productRef.current) {
      observer.observe(productRef.current);
    }

    return () => {
      if (productRef.current) {
        observer.unobserve(productRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <div ref={productRef} className={`${styles.bodyWrapper} ${isVisible ? styles.bodyWrapperShow : ''}`}>
        <div className={styles.wrapper}>
          <div ref={productRef} className={styles.text}>
            <div className={styles.title}>
              Производство BLZ
            </div>
            <div className={styles.subtitle}>
              Унаследуйте дух шведского индустриализма и создайте модель лифтов высокого класса.
            </div>
            <div className={styles.description}>
              Разумно определите возможность сбоя в работе лифта. Когда лифт выходит из строя или выходит из строя из-за перебоев в подаче электроэнергии, система автоматически переключается и берет на себя основную систему управления.
            </div>
            <div className={styles.description}>
              Без помощи обслуживающего и аварийно-спасательногоперсонала машина поднимается на ближайший этаж.После остановки дверь лифта откроется автоматически, так что оказавшиеся в ловушке пассажиры смогут безопасно выйти из лифта.
            </div>
            <a href="/about"> 
              <div className={styles.button}>
                Подробнее
              </div>
            </a>
          </div>
        </div>


        <div className={styles.images}>
          <img src={"/images/Main/fabric.png"} />
        </div>
      </div>
    </Container>
  );
};

export default About;