import React from 'react';
import styles from "./About.module.scss"
import Container from "../../UI/Container";

const About = () => {
    return (
        <Container>
                <div className={styles.bodyWrapper}>
                    <div className={styles.wrapper}>
                    <div className={styles.info}> 
                    <div className={styles.tittle}>
                    Производство BLZ 
                    </div>
                    <div className={styles.subtittle}>
                    Унаследуйте дух шведского индустриализма и создайте модель лифтов высокого класса.
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={styles.button}>Подробнее</div>
                    </div>
                    <div className={styles.image}> <img src='/images/Main/fabric.png'></img></div>

                    </div>

                </div>
                </Container>
    );
};

export default About;