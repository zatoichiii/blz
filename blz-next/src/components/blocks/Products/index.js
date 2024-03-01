import React from 'react';
import styles from "./Products.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const Products = () => {
    return (

        <div className={styles.wrapper}>
            <Container>
            <Show>
            <div className={styles.bodywrapper}>
                <div className={styles.inner}>
                    <div className={styles.menu}>
                        <div className={styles.tittle}>Ассортимент</div>
                        <div className={styles.subtittle}> Пассажирский лифт</div>
                        <div className={styles.subtittle}> Пассажирский лифт</div>
                        <div className={styles.subtittle}> Пассажирский лифт</div>
                        <div className={styles.subtittle}> Пассажирский лифт</div>
                        <div className={styles.subtittle}> Пассажирский лифт</div>
                        <div className={styles.subtittle}> Пассажирский лифт</div>
                    </div>
                </div>
                <div className={styles.products}>
                    <div className={styles.number}></div>
                    <div className={styles.number}></div>
                    <div className={styles.number}></div>
                    <div className={styles.number}></div>
                    <div className={styles.number}></div>
                    <div className={styles.number}></div>
                    <div className={styles.number}></div>
                    <div className={styles.number}></div>
                </div>
                </div>
                </Show>
                </Container>
        </div>
    );
};

export default Products;