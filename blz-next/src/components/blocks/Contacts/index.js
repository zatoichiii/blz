import React from 'react';
import styles from "./Contacts.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Contacts = () => {
    return (
        <Container>
            <Show>
                <div className={styles.bodyWrapper}>
                    {/* Контактная информация */}
                    <div className={styles.contactsColumn}>
                        <div className={styles.contact}>
                            <div className={styles.ico}>
                                <img src={"/images/Icons/icon1.png"}/>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.tittle}>Адрес</div>
                                <div className={styles.subtittle}>Ростов-на-Дону</div>
                                <div className={styles.subtittle}>Вавилова 74Б</div>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.ico}>
                                <img src={"/images/Icons/icon2.png"}/>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.tittle}>Время работы</div>
                                <div className={styles.subtittle}>с 09:00 до 21:00, без выходных</div>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.ico}>
                                <img src={"/images/Icons/icon3.png"}/>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.tittle}>Контакты</div>
                                <div className={styles.subtittle}>+7 (908) 519-85-07</div>
                            </div>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.ico}>
                                <img src={"/images/Icons/icon4.png"}/>
                            </div>
                            <div className={styles.text}>
                                <div className={styles.tittle}>Электронная почта</div>
                                <div className={styles.subtittle}>support@blz-lifts.ru</div>
                            </div>
                        </div>
                    </div>

                    {/* Форма */}
                    <div className={styles.formColumn}>
                        <div className={styles.formWrapper}>
                            <h2 className={styles.formTitle}>Оставьте заявку</h2>
                            <form className={styles.formContainer}>
                                <input
                                    type="text"
                                    placeholder="Имя"
                                    className={styles.formInput}
                                />
                                <input
                                    type="tel"
                                    placeholder="Телефон"
                                    className={styles.formInput}
                                />
                                <button className={styles.submitButton}>
                                    Отправить заявку
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Show>
        </Container>
    );
};

export default Contacts;