import React from 'react';
import styles from "./Banner_FAQ.module.scss"
import Menu_Container from "../../UI/Menu_Container";
import Show from "../../UI/Show";



const Banner_FAQ = () => {
    return (

        <div className={styles.wrapper}>
            <Menu_Container>
                <div className={styles.inner}>
                <Show>
                    <div className={styles.info}>
                        <div className={styles.title}>
                        Часто задаваемые вопросы
                        </div>
                        <div className={styles.subtittle}> Готовы помочь вам с любым вопросом, связанным с нашим оборудованием</div>
                    </div>
                    </Show>
                </div>
                </Menu_Container>
        </div>
    );
};

export default Banner_FAQ;