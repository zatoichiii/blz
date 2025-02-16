import React from 'react';
import styles from "./Faces.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Faces = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <Show>
                    <h1 className={styles.title}>Представители компании</h1>
                </Show>
                <div className={styles.gridWrapper}>
                    <div className={styles.gridItem}>
                        <img className={styles.gridImg} src="/images/dbbaf65d-3e6c-4a89-996d-7511e477366f.jpg" alt="Владимир Чермантеев" />
                        <div className={styles.name}>Чермантеев Владимир Петрович</div>
                        <div className={styles.position}>Генеральный Директор</div>
                        <a href="tel:+79085198507" className={styles.phone}>+7 (908) 519-85-07</a>
                    </div>
                    <div className={styles.gridItem}>
                        <img className={styles.gridImg} src="https://avatars.mds.yandex.net/get-ydo/4079136/2a000001882a0c5d981765b8d9668542315b/diploma" alt="Александр Нозин" />
                        <div className={styles.name}>Нозин Александр Александрович </div>
                        <div className={styles.position}>Директор </div>
                        <a href="tel:+79281744179" className={styles.phone}>+7 (928) 174-41-79</a>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Faces;