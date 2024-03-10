import React from 'react';
import styles from "./Buttons.module.scss"

const Buttons = () => {
    return (
        <div className={styles.all}>
            <div className={styles.element}>
                <a className={styles.elementOf} href='/'>
                    <img src='/images/whatsapp.png' className={styles.elementImg}/>
                    <div className={styles.text}>Whatsapp</div>
                </a>
            </div>
            <div className={styles.element}>
                <a className={styles.elementOf} href='/'>
                    <img src='/images/inst.png' className={styles.elementImg}/>
                    <div className={styles.text}>Instargam</div>
                </a>
            </div>
            <div className={styles.element}>
                <a className={styles.elementOf} href='/'>
                    <img src='/images/telegram.png' className={styles.elementImg}/>
                    <div className={styles.text}>Telegram</div>
                </a>
            </div>
                        <div className={styles.element}>
                <a className={styles.elementOf} href='/'>
                    <img src='/images/mail.png' className={styles.elementImg}/>
                    <div className={styles.text}>support@blz.ru</div>
                </a>
            </div>
        </div>
    );
};

export default Buttons;
