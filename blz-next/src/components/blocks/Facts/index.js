import React from 'react';
import styles from "./Facts.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const Facts = () => {
    return (
        <Container>

                <div className={styles.bodyWrapper}>
                <Show>
                    <div className={styles.wrapper}>
                    <div className={styles.image}> <img src='/images/About/first people.png'></img></div>
                    <div className={styles.info}> 
                    <div className={styles.tittle}>
                        Оглавление
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    </div>
                    </div>
                    </Show>
                <Show>

                    <div className={styles.wrapper_reverse}>
                    
                    <div className={styles.info}> 
                    <div className={styles.tittle}>
                        Оглавление
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    </div>

                    <div className={styles.image}> <img src='/images/About/people2.png'></img></div>

                    </div>
                    </Show>
                    <Show>
                    <div className={styles.wrapper}>
                    <div className={styles.image}> <img src='/images/About/people3.png'></img></div>
                    <div className={styles.info}> 
                    <div className={styles.tittle}>
                        Оглавление
                    </div>
                    <div className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    </div>

                    

                    </div>
                    </Show>

                </div>
                
                </Container>
    );
};

export default Facts;