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
                    <img className={styles.gridImg} src="/images/dbbaf65d-3e6c-4a89-996d-7511e477366f.jpg" alt="Person 1" />
                    <div className={styles.name}>Чермантеев Владимир Петрович</div>
                    <div className={styles.position}>Генеральный Директор</div>
                    <div className={styles.phone}>+7 (908) 519-85-07</div>
                </div>
                <div className={styles.gridItem}>
                    <img className={styles.gridImg} src="https://avatars.mds.yandex.net/get-ydo/4079136/2a000001882a0c5d981765b8d9668542315b/diploma" alt="Person 1" />
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