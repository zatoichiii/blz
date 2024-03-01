import React from 'react';
import styles from "./Info.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const Info = () => {
    return (
        <Container>
                <Show>

                <div className={styles.bodyWrapper}>
                   
                        <div className={styles.first_block}>
                            <div className={styles.tittle}>Предотвращение случайного перемещения авто</div>
                            <div className={styles.description}>Он может эффективно обнаруживать движение лифта, покидающего лестничную площадку без инструкций в зоне отпирания и открытом состоянии двери, и может эффективно останавливать неожиданное движение лифта.</div>
                        </div>
                        <div className={styles.scnd_block}>
                            <div className={styles.tittle}>Самоконтроль тормозного усилия</div>
                            <div className={styles.description}>Износ тормозной колодки, вызванный длительным использованием тормоза лифта, приведет к снижению его тормозного усилия, и система своевременно определит его тормозное усилие в соответствии со стандартом и выдаст предупреждение.</div>
                        </div>
                        <div className={styles.thrd_block}>
                            <div className={styles.tittle}>Безопасность </div>
                            <div className={styles.description}>При поступлении раннего предупреждения о состоянии безопасности обслуживающий персонал будет уведомлен как можно скорее, чтобы предотвратить несчастные случаи.</div>
                        </div>
                    
                </div>
                </Show>
                </Container>
    );
};

export default Info;