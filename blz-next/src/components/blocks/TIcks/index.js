import React from 'react';
import styles from "./Ticks.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Ticks = () => {
    return (
        <Container>
            <Show>
                <div className={styles.bodyWrapper}>
                    <div className={styles.wrapper}>
                        <div className={styles.Tittle}>Купить лифты у нас - <b>это...</b></div>
                        <div className={styles.elements}>
                            <div className={styles.element}>
                                <div className={styles.tick}>
                                    <img src='/images/Ticks/check.png' alt='photo'/>
                                </div>
                                <div className={styles.elText}>
                                    <div className={styles.elTittle}>
                                        ЛУЧШЕЕ СЕРВИСНОЕ ОБСЛУЖИВАНИЕ
                                    </div>
                                    <div className={styles.elDescription}>
                                        Наша компания предоставляет лучшее сервисное обслуживание. Мы не только осуществляем продажу качественных китайских лифтов, но и производим работы по проектированию, монтажу, обслуживанию и ремонту оборудования.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.element}>
                                <div className={styles.tick}>
                                    <img src='/images/Ticks/check.png' alt='photo'/>
                                </div>
                                <div className={styles.elText}>
                                    <div className={styles.elTittle}>
                                        НАДЕЖНОСТЬ И БЕЗОПАСНОСТЬ
                                    </div>
                                    <div className={styles.elDescription}>
                                        Надежность и безопасность подъемников - первая и важная часть нашей компании. Наша фирма не просто осуществляет продажу китайских лифтов - мы гарантируем качество поставляемого на российский рынок оборудования.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.element}>
                                <div className={styles.tick}>
                                    <img src='/images/Ticks/check.png' alt='photo'/>
                                </div>
                                <div className={styles.elText}>
                                    <div className={styles.elTittle}>
                                        ВЫГОДНЫЕ ЦЕНЫ ОТ ПРОИЗВОДИТЕЛЯ
                                    </div>
                                    <div className={styles.elDescription}>
                                        Являясь официальным представителем лифтового завода Siglen мы можем предложить электрические лифты китайского производства по ценам самого производителя.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.element}>
                                <div className={styles.tick}>
                                    <img src='/images/Ticks/check.png' alt='photo'/>
                                </div>
                                <div className={styles.elText}>
                                    <div className={styles.elTittle}>
                                        РЕПУТАЦИЯ НАШЕЙ КОМПАНИИ
                                    </div>
                                    <div className={styles.elDescription}>
                                        Мы дорожим своей репутацией и отвечаем за качество поставляемого оборудования. Наши продукты отличного качества и с высоким уровнем безопасности.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Show>
        </Container>
    );
};

export default Ticks;
