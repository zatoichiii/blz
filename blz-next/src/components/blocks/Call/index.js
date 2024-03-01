import React from 'react';
import styles from "./Call.module.scss"
import Container from "../../UI/Container";
import Show from '../../UI/Show';

const Call = () => {
    return (
        <div className={styles.bodyWrapper}>
            <Container>

                <div className={styles.wrapper}>
                    <Show>
                    <div className={styles.tittle}>
                        Оставьте заявку на обратный звонок или задайте вопрос
                    </div>
                    </Show>
                    <Show>
                    <form className={styles.form}>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" name="name" placeholder="Имя" />
                    </form>
                    </Show>
                    <Show>
                    <form className={styles.form}>
                        <label htmlFor="phone"></label>
                        <input type="tel" id="phone" name="phone" placeholder="Телефон" />
                    </form>
                    <Show>
                    </Show>
                    <div className={styles.bigform}>
                    <label htmlFor="question"></label>
                        <textarea className={styles.textareea} name="question" placeholder="Вопрос"></textarea>
                    </div>
                    </Show>
                    <Show>
                    <div className={styles.button}>Отправить заявку</div>
                    </Show>
                </div>

            </Container>
        </div>
    );
};

export default Call;