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
                    <img src="https://thumbs.dreamstime.com/b/бизнесмен-говоря-на-те-ефоне-в-автомоби-е-58517156.jpg" alt="Person 1" />
                    <div className={styles.name}>Иванов Иван Иванович</div>
                    <div className={styles.position}>Position 1</div>
                    <div className={styles.phone}>+123 456 7890</div>
                </div>
                <div className={styles.gridItem}>
                    <img src="https://thumbs.dreamstime.com/b/бизнесмен-говоря-на-те-ефоне-в-автомоби-е-58517156.jpg" alt="Person 1" />
                    <div className={styles.name}>Иванов Иван Иванович</div>
                    <div className={styles.position}>Position 1</div>
                    <div className={styles.phone}>+123 456 7890</div>
                </div>
                <div className={styles.gridItem}>
                    <img src="https://thumbs.dreamstime.com/b/бизнесмен-говоря-на-те-ефоне-в-автомоби-е-58517156.jpg" alt="Person 1" />
                    <div className={styles.name}>Иванов Иван Иванович</div>
                    <div className={styles.position}>Position 1</div>
                    <div className={styles.phone}>+123 456 7890</div>
                </div>
                <div className={styles.gridItem}>
                    <img src="https://thumbs.dreamstime.com/b/бизнесмен-говоря-на-те-ефоне-в-автомоби-е-58517156.jpg" alt="Person 1" />
                    <div className={styles.name}>Иванов Иван Иванович</div>
                    <div className={styles.position}>Position 1</div>
                    <div className={styles.phone}>+123 456 7890</div>
                </div>
                    </div>
                    </div>
                </Container>
    );
};

export default Faces;