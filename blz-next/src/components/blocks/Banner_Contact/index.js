import React from 'react';
import styles from "./Banner_Contact.module.scss"
import Menu_Container from "../../UI/Menu_Container";
import Show from "../../UI/Show";


const Banner_Contact = () => {
    return (

        <div className={styles.wrapper}>
            <Menu_Container>
                <div className={styles.inner}>
                <Show>
                    <div className={styles.info}>
                        <div className={styles.title}>
                           Контакты
                        </div>
                        <div className={styles.subtittle}> Не упустите свою возможность заказать лучшее лифтовое оборудование в Ростовской области  </div>
                    </div>
                    </Show>
                </div>
                </Menu_Container>
        </div>
    );
};

export default Banner_Contact;