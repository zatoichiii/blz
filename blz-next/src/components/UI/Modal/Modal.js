import React , { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ children, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={onClose}>×</button>
            {children}
          </div>
        </div>
      );
};

export default Modal;