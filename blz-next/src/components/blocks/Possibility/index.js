import React from 'react';
import styles from "./Possibility.module.scss"
import Container from "../../UI/Container";

const Possibility = () => {
    return (
        <Container>
                <div className={styles.bodyWrapper}>
                <div className={styles.images}>
                        <img src={"/images/Technologies/elevator.png"}/>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                            Возможность настройки сверхмалой шахты лифта                            </div>
                            <div className={styles.subtittle}>Гибкие и бесплатные настройки компьютерного зала,эффективно улучшающие использование пространства здания</div>
                                <div className={styles.description}>
                                Размер шахты лифта может составлять всего 1000*1150 мм? Без шуток, БЛЗ может адаптировать ее для вас! Нижняя яма органического помещения может быть более 1200 мм, а размер помещения без машин может быть более 1300 мм. </div>
                        </div>
                    </div>


        
                </div>
                </Container>
    );
};

export default Possibility;