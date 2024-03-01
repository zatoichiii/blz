import React from 'react';
import styles from "./Banner_About.module.scss"
import Menu_Container from "../../UI/Menu_Container";
import Show from "../../UI/Show";


const Banner_About = () => {
    return (

        <div className={styles.wrapper}>
            <Menu_Container>
                <div className={styles.inner}>
                <Show>
                    <div className={styles.info}>
                        <div className={styles.title}>
                           О Нас
                        </div>
                        <div className={styles.subtittle}> Узнайте больше о BLZ</div>
                    </div>
                    </Show>
                </div>
                </Menu_Container>
        </div>
    );
};

export default Banner_About;