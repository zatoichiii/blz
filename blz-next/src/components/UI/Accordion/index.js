// Accordion.js
import React, { useState } from 'react';
import styles from "./Accordion.module.scss";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.active : ''}`}>
      <button 
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="content"
      >
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.icon}>
          <div className={styles.line}></div>
          <div className={`${styles.line} ${styles.vertical}`}></div>
        </div>
      </button>
      <div 
        id="content" 
        className={styles.content} 
        aria-hidden={!isOpen}
      >
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Accordion;