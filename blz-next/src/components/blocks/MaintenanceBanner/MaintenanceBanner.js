import { useState, useEffect } from 'react';
import styles from './MaintenanceBanner.module.scss';

const MaintenanceBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 300);
    };

    if (!shouldRender) return null;

    return (
        <div className={`${styles.banner} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.content}>
                <h3 className={styles.title}>⚠️ Технические работы</h3>
                <p className={styles.text}>
                    В настоящее время на сайте ведутся технические работы.
                    Некоторый контент может быть временно недоступен.
                    Для уточнения информации звоните:
                </p>
                <a href="tel:+79085198507" className={styles.phone}>+7 (908) 519-85-07</a>
                <button
                    onClick={handleClose}
                    className={styles.closeButton}
                    aria-label="Закрыть уведомление"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default MaintenanceBanner;