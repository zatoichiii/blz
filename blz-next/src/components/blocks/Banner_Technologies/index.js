import React from 'react';
import styles from "./Banner_Technologies.module.scss"
import Menu_Container from "../../UI/Menu_Container";
import Show from "../../UI/Show";


const Banner_Technologies = () => {
    return (

        <div className={styles.wrapper}>
            <Menu_Container>
                <div className={styles.inner}>
                <Show>
                    <div className={styles.info}>
                        <div className={styles.title}>
                           Технологии
                        </div>
                        <div className={styles.subtittle}> BLZ - это не только о безопасности, но и об уникальном опыте </div>
                    </div>
                    </Show>
                </div>
                </Menu_Container>
        </div>
    );
};

export default Banner_Technologies;