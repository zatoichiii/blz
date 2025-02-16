import React from 'react';
import styles from "./Footer.module.scss";
import Container from "../../UI/Container";
import { FaPhoneAlt, FaWhatsapp, FaTelegram, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const contacts = [
    { icon: <FaPhoneAlt />, text: '+7 (908) 519-85-07', href: 'tel:+79281502060' },
    { icon: <FaWhatsapp />, text: 'WhatsApp', href: 'https://wa.me/79281502060' },
    { icon: <FaTelegram />, text: 'Telegram', href: 'https://t.me/+79281502060' },
    { icon: <FaEnvelope />, text: 'support@blz-lifts.ru', href: 'mailto:support@blz-lifts.ru' }
  ];

  const links = [
    { title: 'Главная', href: '/' },
    { title: 'О нас', href: '/about' },
    { title: 'Технологии', href: '/technologies' },
    { title: 'Каталог', href: '/products' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Статьи', href: '/news' }
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <motion.div 
          className={styles.wrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={styles.grid}>
            <div className={styles.brand}>
              <motion.img 
                src="/images/logo3.png" 
                alt="BLZ Logo" 
                className={styles.logo}
                whileHover={{ scale: 1.05 }}
              />
              <p className={styles.slogan}>
                Лифтовое оборудование<br/>
                нового поколения
              </p>
            </div>

            <nav className={styles.nav}>
              <h4 className={styles.navTitle}>Навигация</h4>
              <ul className={styles.navList}>
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.navLink}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.contacts}>
              <h4 className={styles.contactsTitle}>Контакты</h4>
              <ul className={styles.contactsList}>
                {contacts.map((contact, index) => (
                  <li key={index}>
                    <a href={contact.href} className={styles.contactLink}>
                      <span className={styles.contactIcon}>{contact.icon}</span>
                      <span>{contact.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.bottom}>
            <div className={styles.copyright}>
              © 2025 BLZ “Белорусский Лифтовой Завод”
            </div>
            <div className={styles.address}>
              Ростовская Область, город Ростов-на-Дону
            </div>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;