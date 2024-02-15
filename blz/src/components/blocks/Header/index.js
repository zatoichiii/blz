import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss"
import Menu_Container from "../../UI/Menu_Container";
import Menu from '../../UI/Menu';


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

 {/*const Items = [
    {value: "Главная", href: '/main'},
    {value: "О нас", href: '/about'},
    {value: "Технологии", href: '/technologies'},
    {value: "Ассортимент", href: '/products'},
    {value: "FAQ", href: '/faq'},
    {value: "Новости", href: '/news'},
    {value: "Контакты", href: '/contact'},
]*/}
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
                    <div className={styles.burger_btn}>
                        <span/>
                    </div>
            </div>
            </div>



            </Menu_Container>
           {/* <Menu items={items}/> */}
        </div>
    );
};

export default Index;