import React from 'react';
import styles from "./Banner.module.scss"
import Menu_Container from "../../UI/Menu_Container";


const Banner = () => {
    return (

        <div className={styles.wrapper}>
            <Menu_Container>
                <div className={styles.inner}>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <b>BLZ</b> - Белорусский лифтовый завод это выбор <b>профессионалов</b>.
                        </div>
                    </div>
                </div>
                </Menu_Container>
        </div>
    );
};

export default Banner;