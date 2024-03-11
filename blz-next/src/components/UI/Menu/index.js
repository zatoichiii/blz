import React from 'react';
import styles from "./Menu.module.scss";

const Menu = ({ header, items, active, setActive }) => {
    return (
        <div className={active ? `${styles.menu} ${styles.active}` : styles.menu} onClick={() => setActive(false)}>
            <div className={styles.menuContent}>
                <div className={styles.menuHeader}>{header}</div>
                <div className={styles.menuItems}>
                    {items.map(item => (
                        <div className={styles.menuItem} key={item.value}>
                            <a className={styles.ItemWord} href={item.href}>{item.value}</a>
                        </div>
                    ))}
                </div>
                <div className={styles.footer}>
                    <div className={styles.footerEl}>whatsapp : 8 000 000 00 00</div>
                    <div className={styles.footerEl}>telegram: 8 000 000 00 00</div>
                    <div className={styles.footerEl}>email: example@mail.ru</div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
