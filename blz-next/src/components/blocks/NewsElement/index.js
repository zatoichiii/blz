import React from 'react';
import styles from "./NewsElement.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const NewsElement = ({news}) => {
    return (
        <Container>
                <Show>

                <div className={styles.bodyWrapper}>

                    <div className={styles.wrapper}>
                    <a href="javascript:history.back()"> ❮ Назад</a>
                        <div className={styles.text}>
                            <div className={styles.title}>
                                {news.title}
                            </div>
                            <div className={styles.data}>
                                {news.data}
                            </div>
                                <div className={styles.description}>
                                    {news.all}                            </div>
                        </div>
                        <div className={styles.images}>
                        <img src={`${news.imgPath}/0.png`} alt={news.name}/>
                    </div>
                    </div>

                </div>
                </Show>
                </Container>
    );
};

export default NewsElement;