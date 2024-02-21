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
                        <img src="/images/logo.png" alt='' />
                    </div>
                    <div className={styles.row}>
                        <a href={'#main'}>Главная</a>
                        <a href={'#about'}>О нас</a>
                        <a href={'#technologies'}>Технологии</a>
                    </div>
                    <div className={styles.row}>
                        <a href={'#products'}>Ассортимент</a>
                        <a href={'#faq'}>FAQ</a>
                        <a href={'#news'}>Новости</a>
                    </div>
                    <div className={styles.row}>
                        <a href={'#phone'}>Телефон:</a>
                        <a href={'#phone'}>WhatsApp:</a>
                        <a href={'#phone'}>Telegram:</a>
                        <a href={'#phone'}>Email:</a>
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