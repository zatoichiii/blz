import React from 'react';
import styles from "./Tittle.module.scss"
import Container from "../../UI/Container";

const Tittle = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    Белорусский лифтовый завод является одним из самых быстроразвивающихся предприятий лифтовой промышленности в Ростовской области
                </div>
            </div>
        </Container>
    );
};

export default Tittle;