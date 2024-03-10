import React from 'react';
import styles from "./ButtonsStyle.module.scss"
import Menu_Container from "../../UI/Menu_Container";
import Show from "../../UI/Show";


const Banner_News = () => {
    return (

        <div className={styles.wrapper}>
            <Menu_Container>
                <div className={styles.inner}>
                <Show>
                    <div className={styles.info}>
                        <div className={styles.title}>
                           Новости
                        </div>
                        <div className={styles.subtittle}> Будьте в курсе последних событий компании </div>
                    </div>
                    </Show>
                </div>
                </Menu_Container>
        </div>
    );
};

export default Banner_News;