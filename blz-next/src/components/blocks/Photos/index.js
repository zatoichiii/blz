import React from 'react';
import styles from "./Photos.module.scss"
import Container from "../../UI/Container";

const Photos = () => {
    return (

        <div className={styles.wrapper}>
            <Container>
            <div className={`${styles.bodywrapper} ${styles.second}`}>
                <div className={styles.inner}> <img src='/images/Main/man1.png'></img>
                </div>
                <div className={styles.inner}> <img src='/images/Main/man 2.png'></img>
                </div>
                <div className={styles.inner}> <img src='/images/Main/man 3.png'></img>
                </div>
                <div className={styles.inner}> <img src='/images/Main/man4.png'></img>
                </div>
                </div>
                </Container>
        </div>
    );
};

export default Photos;