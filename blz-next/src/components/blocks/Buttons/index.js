import React from 'react';
import styles from "./Buttons.module.scss"

const Buttons = () => {
    return (
        <div className={styles.all}>
<div className={styles.element}>
    <a className={styles.elementOf} href="https://wa.me/79281502060">
        <img src="/images/whatsapp.png" className={styles.elementImg}/>
        <div className={styles.text}>Whatsapp</div>
    </a>
</div>
<div className={styles.element}>
    <a className={styles.elementOf} href="https://www.instagram.com/your_instagram_username">
        <img src="/images/inst.png" className={styles.elementImg}/>
        <div className={styles.text}>Instagram</div>
    </a>
</div>
<div className={styles.element}>
    <a className={styles.elementOf} href="https://t.me/telegram_username">
        <img src="/images/telegram.png" className={styles.elementImg}/>
        <div className={styles.text}>Telegram</div>
    </a>
</div>
<div className={styles.element}>
    <a className={styles.elementOf} href="mailto:support@blz.ru">
        <img src="/images/mail.png" className={styles.elementImg}/>
        <div className={styles.text}>support@blz.ru</div>
    </a>
</div>

        </div>
    );
};

export default Buttons;
