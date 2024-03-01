import React from 'react';
import styles from "./Tittle.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const Tittle = () => {
    return (
        <Container>
                <Show>

            <div className={styles.wrapper}>
                <div className={styles.text}>
                    Белорусский лифтовый завод является одним из самых быстроразвивающихся предприятий лифтовой промышленности в Ростовской области
                </div>
            </div>
            </Show>
        </Container>
    );
};

export default Tittle;