import React from 'react';
import styles from "./Footer.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";


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
                        <a className={styles.footerItem} href={'#phone'}>Телефон: 7 999 999 99 99</a>
                        <a className={styles.footerItem} href={'#phone'}>WhatsApp:7 999 999 99 99</a>
                        <a className={styles.footerItem} href={'#phone'}>Telegram:7 999 999 99 99</a>
                        <a className={styles.footerItem} href={'#phone'}>Email:example@mail.ru</a>
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