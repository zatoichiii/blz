import React from 'react';
import styles from "./Banner_Products.module.scss"
import Menu_Container from "../../UI/Menu_Container";
import Show from "../../UI/Show";


const Banner_Products = () => {
    return (

        <div className={styles.wrapper}>
            <Menu_Container>
                <div className={styles.inner}>
                <Show>
                    <div className={styles.info}>
                        <div className={styles.title}>
                           Ассортимент
                        </div>
                        <div className={styles.subtittle}> BLZ имеет множество видов различных лифтов </div>
                    </div>
                </Show>      
                </div>
                </Menu_Container>
        </div>
    );
};

export default Banner_Products;