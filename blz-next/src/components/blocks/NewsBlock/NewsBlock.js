import React from 'react';
import styles from "./NewsBlock.module.scss";
import Show from "../../UI/Show";
import Container from '../../UI/Container';


const NewsBlock = ({news}) => {
    return (
        <Container>
            <Show>
                <div className={styles.bodyWrapper}>
                    <div className={styles.wrapper}>
                        <div className={styles.title}>Новости</div>
                        <div className={styles.line}></div>
                        <div className={styles.news}>
                            <div className={styles.imageof}>
                                <img src='/images/Main/man4.png' alt="News Image" />
                            </div>
                            <div className={styles.headline}>
                                <div className={styles.headlineTitle}>Открытие завода</div>
                                <div className={styles.headlineDate}>30.03.2024</div>
                                <div className={styles.headlineDescription}>
                                    Мы с радостью готовы представить Вам открытие завода компании BLZ! Мы находимся по адресу... и готовы предложить Вам такие услуги как.... Ждем вас!
                                    Мы с радостью готовы представить Вам открытие завода компании BLZ! Мы находимся по адресу... и готовы предложить Вам такие услуги как.... Ждем вас!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Show>
            </Container>
    );
};

export default NewsBlock;
