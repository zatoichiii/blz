import React from 'react';
import styles from "./Menu_Container.module.scss"

const Container = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default Container;