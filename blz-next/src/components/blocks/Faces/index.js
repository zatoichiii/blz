import React from 'react';
import styles from "./Faces.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const Faces = () => {
    return (
        <Container>
                <div className={styles.wrapper}>
                <Show>
                <div className={styles.Tittle}>Представители компании</div>
                </Show>
                <div className={styles.gridWrapper}>
                <div className={styles.gridItem}>
                    <img src="/images/dbbaf65d-3e6c-4a89-996d-7511e477366f.jpg" alt="Person 1" />
                    <div className={styles.name}>Чермантеев Владимир Петрович</div>
                    <div className={styles.position}>Генеральный Директор</div>
                    <div className={styles.phone}>+7 (928) 150-20-60</div>
                </div>
                <div className={styles.gridItem}>
                    <img src="/images/speaker_azzurro_1.png" alt="Person 1" />
                    <div className={styles.name}>Нозин Александр Александрович </div>
                    <div className={styles.position}>Директор </div>
                    <div className={styles.phone}>+7 (928) 174-41-79</div>
                </div>
                    </div>
                    </div>
                </Container>
    );
};

export default Faces;