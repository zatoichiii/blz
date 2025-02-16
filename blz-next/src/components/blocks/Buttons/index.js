import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa'; // Импорт нужных иконок
import styles from "./Buttons.module.scss";

const Buttons = () => {
  const socials = [
    { 
      id: 1,
      icon: <FaWhatsapp />, // Иконка WhatsApp
      text: 'WhatsApp',
      href: 'https://wa.me/79281502060',
      color: '#25D366'
    },
    { 
      id: 2,
      icon: <FiInstagram />,
      text: 'Instagram',
      href: 'https://www.instagram.com/your_instagram_username',
      color: '#E1306C'
    },
    { 
      id: 3,
      icon: <FaTelegram />, // Иконка Telegram
      text: 'Telegram',
      href: 'https://t.me/telegram_username',
      color: '#0088CC'
    },
    { 
      id: 4,
      icon: <FiMail />,
      text: 'support@blz-lifts.ru',
      href: 'mailto:support@blz-lifts.ru',
      color: '#EA4335'
    }
  ];

  // Остальной код без изменений
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const hoverVariants = {
    hover: { 
      width: 160,
      backgroundColor: '#ffffff',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }
  };

  return (
    <motion.div 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socials.map((item) => (
        <motion.div
          key={item.id}
          className={styles.item}
          variants={itemVariants}
          whileHover="hover"
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            variants={hoverVariants}
            style={{ '--color': item.color }}
          >
            <span className={styles.icon} style={{ color: item.color }}>
              {item.icon}
            </span>
            <span className={styles.text}>{item.text}</span>
            <FiArrowUpRight className={styles.arrow} />
          </motion.a>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Buttons;