import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import {Dropdown} from "antd";
import Menu_Container from "../../UI/Menu_Container";
import {UnorderedListOutlined} from "@ant-design/icons";

const items = [
    {
        key: '1',
        label: (
            <a href={"#main"} className={styles.burgerItem}>Главная</a>
        ),
    },
    {
        key: '2',
        label: (
            <a href={"#about"} className={styles.burgerItem}>О нас</a>
        ),
    },
    {
        key: '3',
        label: (
            <a href={"#technologies"} className={styles.burgerItem}>Технологии</a>
        ),
    },
    {
        key: '4',
        label: (
            <a href={"products"} className={styles.burgerItem}>Ассортимент</a>
        ),
    },
    {
        key: '5',
        label: (
            <a href={"faq"} className={styles.burgerItem}>FAQ</a>
        ),
    },
    {
        key: '6',
        label: (
            <a href={"news"} className={styles.burgerItem}>Новости</a>
        ),
    },
    {
        key: '7',
        label: (
            <a href={"contact"} className={styles.burgerItem}>Контакты</a>
        ),
    },
    
];

const Index = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`} >
            <Menu_Container>
            <div className={styles.inner}>
                <a href={"/"} className={styles.logo}>
                    <img src={"/images/logo.png"}/>
                </a>
                <div className={styles.headerItems}>
                    <a href={"#main"} className={styles.headerItem}>Главная</a>
                    <a href={"#about"} className={styles.headerItem}>О нас</a>
                    <a href={"#technologies"} className={styles.headerItem}>Технологии</a>
                    <a href={"#products"} className={styles.headerItem}>Ассортимент</a>
                    <a href={"#faq"} className={styles.headerItem}>FAQ</a>
                    <a href={"#news"} className={styles.headerItem}>Новости</a>
                    <a href={"#contact"} className={styles.headerItem}>Контакты</a>
                </div>
                <div className={styles.burger}>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomRight"
                    >
                        <UnorderedListOutlined style={{color: "#FFFFFF"}} />
                    </Dropdown>
                </div>
            </div>

            </Menu_Container>
        </div>
    );
};

export default Index;