import React from 'react';
import styles from "./Call.module.scss"
import Container from "../../UI/Container";

const Call = () => {
    return (
        <div className={styles.bodyWrapper}>
            <Container>

                <div className={styles.wrapper}>
                    <div className={styles.tittle}>
                        Оставьте заявку на обратный звонок или задайте вопрос
                    </div>
                    <form className={styles.form}>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" name="name" placeholder="Имя" />
                    </form>
                    <form className={styles.form}>
                        <label htmlFor="phone"></label>
                        <input type="tel" id="phone" name="phone" placeholder="Телефон" />
                    </form>
                    <div className={styles.bigform}>
                    <label htmlFor="question"></label>
                        <textarea id="question" name="question" placeholder="Вопрос"></textarea>
                    </div>
                    <div className={styles.button}>Отправить заявку</div>
                </div>

            </Container>
        </div>
    );
};

export default Call;