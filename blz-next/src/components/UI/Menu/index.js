import React from 'react';
import styles from "./Menu.module.scss";
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';

const Menu = ({ header, items, active, setActive }) => {
    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { 
            opacity: 0, 
            y: 20,
            transition: { duration: 0.2 } 
        },
    };

    return (
        <div className={`${styles.menu} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
            <motion.div 
                className={styles.menuContent}
                initial={false}
                animate={active ? "open" : "closed"}
                variants={{
                    open: { x: 0 },
                    closed: { x: "-100%" },
                }}
                transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            >
                <div className={styles.menuHeader}>
                    <div className={styles.logoWrapper}>
                        <img src="/images/logo3.png" alt="Logo" className={styles.menuLogo} />
                    </div>
                </div>

                <nav className={styles.menuItems}>
                    {items.map((item, index) => (
                        <motion.div 
                            className={styles.menuItem} 
                            key={item.value}
                            variants={itemVariants}
                        >
                            <a 
                                className={styles.ItemWord} 
                                href={item.href}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                {item.value}
                                <div className={styles.hoverLine} />
                            </a>
                        </motion.div>
                    ))}
                </nav>

                <div className={styles.footer}>
                    <a href="https://wa.me/79085198507" className={styles.socialLink}>
                        <FaWhatsapp className={styles.icon} />
                        <span>WhatsApp</span>
                    </a>
                    <a href="tg://resolve?phone=79085198507" className={styles.socialLink}>
                        <FaTelegram className={styles.icon} />
                        <span>Telegram</span>
                    </a>
                    <a href="mailto:support@blz-lifts.ru" className={styles.socialLink}>
                        <FaEnvelope className={styles.icon} />
                        <span>Email</span>
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Menu;