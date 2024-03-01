import React from 'react';
import styles from "./Experts.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Experts = () => {
    return (
        <Container>
                <Show>

                <div className={styles.bodyWrapper}>

                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                                Эксперты в области безопасности
                            </div>
                                <div className={styles.description}>
                                Исходя из соображений безопасности, в наших продуктах присутствует система активной безопасности. Сочетание трех основных компонентов безопасности, сосредоточение внимания на исследованиях и разработке технологий активной превентивной безопасности, заблаговременный учет всех факторов и обслуживание позволяют нам стать экспертом по активным элементам безопасности.                            </div>
                        </div>
                    </div>


                    <div className={styles.images}>
                        <img src={"/images/Technologies/inelevator.png"}/>
                    </div>
                </div>
                </Show>
                </Container>
    );
};

export default Experts;