import React from 'react';
import styles from "./FAQ.module.scss"
import Container from "../../UI/Container";
import Accordion from "../../UI/Accordion";
import Show from "../../UI/Show";

const FAQ = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <Show>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>FAQ</div>
                </div>
                <div className={styles.faqContainer}>
                    <div className={styles.faq}>
                        {/*<div className={styles.padd}>*/}
                            <Accordion title={"Вопрос"} description={"Ответ."}/>
                        {/*</div>*/}
                        {/*<div className={styles.padd}>*/}
                            <Accordion title={"Вопрос"} description={"Ответ"}/>
                        {/*</div>*/}
                        {/*<div className={styles.padd}>*/}
                            <Accordion title={"Сколько вопросов можно задать?"} description={"Ответ"}/>
                        {/*</div>*/}
                        {/*<div className={styles.padd}>*/}
                            <Accordion title={"Почему лифт едет только вверх и вниз?"} description={"Ответ"}/>
                        {/*</div>*/}
                        {/*<div className={styles.padd}>*/}
                            <Accordion title={"Как долго ждать доставку?"} description={"Ответ"}/>
                        {/*</div>*/}
                        {/*<div className={styles.padd}>*/}
                            <Accordion title={"Сложно ли придумать вопрос?"} description={"Ответ"}/>
                        {/*</div>*/}
                        {/*<div className={styles.padd}>*/}
                            <Accordion title={"Сложно ли придумать вопрос?"} description={"Ответ"}/>
                        {/*</div>*/}
                        {/*<div className={styles.padd}>*/}
                            <Accordion title={"Сложно ли придумать вопрос?"} description={"Ответ"}/>
                        {/*</div>*/}
                        {/*<div className={styles.padd}>*/}
                            <Accordion title={"Сложно ли придумать вопрос?"} description={"Ответ"}/>
                        {/*</div>*/}
                    </div>
                </div>
                </Show>
            </div>
        </Container>
    );
};

export default FAQ;
