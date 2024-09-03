import React from 'react';
import styles from "./Contacts.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const Contacts = () => {
    return (
        <Container>
                <Show>

                <div className={styles.bodyWrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.contact}>
                    <div className={styles.ico}>
                        <img src={"/images/Icons/icon1.png"}/>
                    </div>
                    <div className={styles.text}>
                    <div className={styles.tittle}>Адрес</div>
                    <div className={styles.subtittle}>Ростов-на-Дону</div>
                    <div className={styles.subtittle}>Микрорайон Северный</div>
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
                    <div className={styles.subtittle}>+7 (928) 150-20-60</div>
                    </div>
                    </div>
                    <div className={styles.contact}>
                    <div className={styles.ico}>
                        <img src={"/images/Icons/icon4.png"}/>
                    </div>
                    <div className={styles.text}>
                    <div className={styles.tittle}>Электронная почта</div>
                    <div className={styles.subtittle}>support@blz.ru</div>
                    </div>
                    </div>

                    </div>
                </div>
                </Show>
                </Container>
    );
};

export default Contacts;