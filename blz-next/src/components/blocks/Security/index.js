import React from 'react';
import styles from "./Security.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const Security = () => {
    return (
        <Container>
                <Show>

                <div className={styles.bodyWrapper}>

                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                                Безопасность
                            </div>
                                <div className={styles.description}>
                                Разумно определите возможность сбоя в работе лифта. Когда лифт выходит из строя или выходит из строя из-за перебоев в подаче электроэнергии, система автоматически переключается и берет на себя основную систему управления. 
                            </div>
                            <div className={styles.description}>
                            Без помощи обслуживающего и аварийно-спасательногоперсонала машина поднимается на ближайший этаж.После остановки дверь лифта откроется автоматически, так что оказавшиеся в ловушке пассажиры смогут безопасно выйти из лифта.                               
                            </div>
                                <a href='/technologies'>
                                <div className={styles.button}>
                            Подробнее
                        </div>
                        </a>
                        </div>
                    </div>


                    <div className={styles.images}>
                        <img src={"/images/Main/security.png"}/>
                    </div>
                </div>
                </Show>
                </Container>
    );
};

export default Security;