import React, { useEffect, useState } from 'react';
import styles from "./Stats.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Stats = () => {
    const [count1, setCount1] = useState(0);
    const [count67, setCount67] = useState(0);
    const [count50, setCount50] = useState(0);
    const [count24, setCount24] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const parallax = document.querySelector('.wrapper');
            if (parallax) {
                let scrollPosition = window.pageYOffset;
                parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px'; 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const counters = [
            { id: 1, count: 1, setState: setCount1 },
            { id: 67, count: 67, setState: setCount67 },
            { id: 50, count: 50, setState: setCount50 },
            { id: 24, count: 24, setState: setCount24 },
        ];

        counters.forEach((counter) => {
            let currentCount = 0;
            const intervalId = setInterval(() => {
                if (currentCount < counter.count) {
                    currentCount += 1;
                    counter.setState(currentCount);
                } else {
                    clearInterval(intervalId);
                }
            }, 45);
        });
    }, []);

    return (
        <div className={styles.wrapper}>
            <Container>
                <Show>
                    <div className={styles.bodywrapper}>
                        <div className={styles.inner}>
                            <div className={styles.number}>{count1}</div> Единственный производитель лифтов А1 класса в Ростове и Ростовской области
                        </div>
                        <div className={styles.inner}>
                            <div className={styles.number}>{count67}</div>  Объединение лучших мировых достижений в области научных исследований, накопление 67 запатентованных технологий               
                        </div>
                        <div className={styles.inner}>
                            <div className={styles.number}>{count50}</div>  Продукция экспортируется или обслуживается более чем в 50 стран и регионов 
                        </div>
                        <div className={styles.inner}>
                            <div className={styles.number}>{count24}</div>  Мы готов предложить более 24 различных видов лифтового оборудования 
                        </div>
                    </div>
                </Show>
            </Container>
        </div>
    );
};

export default Stats;