import React, { useEffect, useState } from 'react';
import styles from "./Header.module.scss";
import Menu_Container from "../../UI/Menu_Container";
import Menu from '../../UI/Menu';
import Modal from '../../UI/Modal/Modal';
import Call from '../Call';

const items = [
    { value: "Главная", href: '/' },
    { value: "О нас", href: '/about' },
    { value: "Технологии", href: '/technologies' },
    { value: "Каталог", href: '/products' },
    { value: "FAQ", href: '/faq' },
    { value: "Статьи", href: '/news' },
    { value: "Контакты", href: '/contacty' },
];

const Index = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


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
        <div className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ""}`}>
            <Menu_Container>
                <div className={styles.inner}>
                    <a href={'/'} className={styles.logo}>
                        <img src={"/images/logo2.png"} alt="Logo" />
                        <img className={styles.newLogo} src={"/images/logo3.png"} alt="Logo" />

                        
                    </a>
                    <div className={styles.headerItems}>
                        <a href={"/"} className={styles.headerItem}>Главная</a>
                        <a href={"/about"} className={styles.headerItem}>О нас</a>
                        <a href={"/technologies"} className={styles.headerItem}>Технологии</a>
                        <a href={"/products"} className={styles.headerItem}>Каталог</a>
                        <a href={"/faq"} className={styles.headerItem}>FAQ</a>
                        <a href={"/news"} className={styles.headerItem}>Статьи</a>
                        <a href={"/contacty"} className={styles.headerItem}>Контакты</a>
                        <a 
                            href="#" 
                            className={styles.headerItem} 
                            onClick={(e) => {
                                e.preventDefault();
                                setIsModalOpen(true);
                            }}
                        >
                            Оставить заявку
                        </a>
                        <a href={"tel:+79281502060"} className={styles.phone}>+7 (908) 519-85-07</a>
                    </div>
                    <div className={styles.burger} onClick={() => setMenuActive(!menuActive)}>
                        <div className={styles.burger_bar}></div>
                        <div className={styles.burger_bar}></div>
                        <div className={styles.burger_bar}></div>
                    </div>
                </div>
            </Menu_Container>
            <Menu active={menuActive} setActive={setMenuActive} header={"BLZ"} items={items} />
            {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
                <Call 
                isModal 
                onSuccess={() => setIsModalOpen(false)} 
                />
            </Modal>
            )}
        </div>
    );
};

export default Index;
