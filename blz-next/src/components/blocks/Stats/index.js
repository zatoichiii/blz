import React from 'react';
import styles from "./Stats.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Stats = () => {
    return (

        <div className={styles.wrapper}>
            <Container>
                <Show>
                <div className={styles.bodywrapper}>
                <div className={styles.inner}>
                <div className={styles.number}>1</div> Единственный производитель лифтов А1 класса в Ростове и Ростовской области
                </div>
                <div className={styles.inner}>
                <div className={styles.number}>67</div>  Объединение лучших мировых достижений в области научных исследований, накопление 67 запатентованных технологий               
                </div>
                <div className={styles.inner}>
                <div className={styles.number}>50</div>  Продукция экспортируется или обслуживается более чем в 50 стран и регионов 
                </div>
                <div className={styles.inner}>
                <div className={styles.number}>24</div>  Мы готов предложить более 24 различных видов лифтового оборудования 
                </div>
                </div>
                </Show>
                </Container>
        </div>
    );
};

export default Stats;