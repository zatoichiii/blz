import React from 'react';
import styles from "./FAQ.module.scss"
import Container from "../../UI/Container";
import Accordion from "../../UI/Accordion";
import Show from "../../UI/Show";

const FAQ = () => {
    return (
        <Container>
            <Show>
                <div className={styles.wrapper}>

                    <div className={styles.titleContainer}>
                        <div className={styles.title}>FAQ</div>
                    </div>
                    <div className={styles.faqContainer}>
                        <div className={styles.faq}>
                            <Accordion title={"Вопрос"} description={"Ответ."}/>
                            <Accordion title={"Вопрос"} description={"Ответ"}/>
                            <Accordion title={"Сколько вопросов можно задать?"} description={"Ответ"}/>

                            <Accordion title={"Почему лифт едет только вверх и вниз?"} description={"Ответ"}/>

                            <Accordion title={"Как долго ждать доставку?"} description={"Ответ"}/>

                            <Accordion title={"Сложно ли придумать вопрос?"} description={"Ответ"}/>

                            <Accordion title={"Сложно ли придумать вопрос?"} description={"Ответ"}/>

                            <Accordion title={"Сложно ли придумать вопрос?"} description={"Ответ"}/>

                            <Accordion title={"Сложно ли придумать вопрос?"} description={"Ответ"}/>

                        </div>
                    </div>

                </div>
            </Show>
        </Container>
    );
};

export default FAQ;
