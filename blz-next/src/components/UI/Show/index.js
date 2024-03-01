import React, { useState, useEffect, useRef } from 'react';
import styles from "./Show.module.scss";

const Show = ({children}) => {
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
        <div ref={productRef} className={`${styles.ShowStyleOff} ${isVisible ? styles.ShowStyleOn : ''}`}>
            {children}
        </div>
    );
};

export default Show;
