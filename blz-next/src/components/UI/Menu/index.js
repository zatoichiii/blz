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
                    <div className={styles.footerEl}>whatsapp : <br/>+7 (928) 150-20-60</div>
                    <div className={styles.footerEl}>telegram: <br/>+7 (928) 150-20-60</div>
                    <div className={styles.footerEl}>email: <br/> support@blz-lifts.ru</div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
