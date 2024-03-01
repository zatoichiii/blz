import React from 'react';
import styles from "./NewsBlock.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const NewsBlock = () => {
    return (
        <Container>
                <Show>

                <div className={styles.bodyWrapper}>
                    <div className={styles.wrapper}>
                    <div className={styles.tittle}>Новости</div>
                    <div className={styles.line}></div>
                        <div className={styles.news}>
                            
                            <div className={styles.imageof}>
                                <img src='/images/Main/man4.png'/>
                            </div>
                             <div className={styles.headline}>
                                <div className={styles.headlineTittle}>Открытие завода!</div>
                                <div className={styles.headlineData}>30.03.2024</div>
                                <div className={styles.headlineDescription}>
                                Мы с радостью готовы представить Вам открытие завода компании BLZ! Мы находимся по адресу... и готовы предложить Вам такие услуги как.... Ждем вас!
                                Мы с радостью готовы представить Вам открытие завода компании BLZ! Мы находимся по адресу... и готовы предложить Вам такие услуги как.... Ждем вас!
                                </div>
                             </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.news}>
                            
                            <div className={styles.imageof}>
                                <img src='/images/Main/man 3.png'/>
                            </div>
                             <div className={styles.headline}>
                                <div className={styles.headlineTittle}>Открытие завода!</div>
                                <div className={styles.headlineData}>30.03.2024</div>
                                <div className={styles.headlineDescription}>
                                Мы с радостью готовы представить Вам открытие завода компании BLZ! Мы находимся по адресу... и готовы предложить Вам такие услуги как.... Ждем вас!
                                Мы с радостью готовы представить Вам открытие завода компании BLZ! Мы находимся по адресу... и готовы предложить Вам такие услуги как.... Ждем вас!
                                </div>
                             </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.news}>
                            
                            <div className={styles.imageof}>
                                <img src='/images/Main/man 2.png'/>
                            </div>
                             <div className={styles.headline}>
                                <div className={styles.headlineTittle}>Открытие завода!</div>
                                <div className={styles.headlineData}>30.03.2024</div>
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