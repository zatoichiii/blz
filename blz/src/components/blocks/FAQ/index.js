import React from 'react';
import styles from "./FAQ.module.scss"
import Container from "../../UI/Container";
import Accordion from "../../UI/Accordion";

const FAQ = () => {
    return (
        <Container>
                <div className={styles.bodyWrapper}>
                    <div className={styles.wrapper}>

                    <div className={styles.faq}>
                        <div className={styles.padd}>
                        <Accordion title={"Вопрос"} description={"Ответ."}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Вопрос"} description={"Ответ"}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Вопрос"} description={"Ответ"}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Вопрос"} description={"Ответ"}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Вопрос"} description={"Ответ"}/>
                        </div>
                        <div className={styles.padd}>
                        <Accordion title={"Вопрос"} description={"Ответ"}/>
                        </div>

                    </div>
                </div>
                </div>

                </Container>
    );
};

export default FAQ;