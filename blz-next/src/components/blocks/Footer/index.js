import React from 'react';
import styles from "./Footer.module.scss"
import Container from "../../UI/Container";


const Footer = () => {
    return (
        <div className={styles.body}>
            <Container>

        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.rows}>
                    <div className={styles.logo}>
                        <img src="/images/logo.png" alt='' href={'/'}/>
                    </div>
                    <div className={styles.row}>
                        <a className={styles.footerItem} href={'/'}>Главная</a>
                        <a className={styles.footerItem} href={'/about'}>О нас</a>
                        <a className={styles.footerItem} href={'/technologies'}>Технологии</a>
                    </div>
                    <div className={styles.row}>
                        <a className={styles.footerItem} href={'/products'}>Ассортимент</a>
                        <a className={styles.footerItem} href={'/faq'}>FAQ</a>
                        <a className={styles.footerItem} href={'/news'}>Новости</a>
                    </div>
                    <div className={styles.row}>
                    <a className={styles.footerItem} href="tel:+79281502060">Телефон: +7 (928) 150-20-60</a>
                    <a className={styles.footerItem} href="https://wa.me/79281502060">WhatsApp: +7 (928) 150-20-60</a>
                    <a className={styles.footerItem} href="https://t.me/+79281502060">Telegram: +7 (928) 150-20-60</a>
                    <a className={styles.footerItem} href="mailto:support@blz.ru">Email: support@blz.ru</a>
                    </div>
                    <div className={styles.row}>
                    <div className={styles.map}>
                </div>
                    </div>
                </div>

            <div className={styles.line}></div>
            <div className={styles.copyright}>
            Copyright 2024 BLZ “Белорусский Лифтовой Завод” Ростовская Область, город Ростов-на-Дону
            </div>
            </div>
        </div>
            </Container>
        </div>
    );
};

export default Footer;