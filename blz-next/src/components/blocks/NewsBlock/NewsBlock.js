import React from 'react';
import styles from "./NewsBlock.module.scss";
import Show from "../../UI/Show";
import Container from '../../UI/Container';
import {news} from "@/newsConfig";


const NewsBlock = () => {
    return (
        <Container>
            {/* <Show> */}
                <div className={styles.bodyWrapper}>
                    <div className={styles.wrapper}>
                        <div className={styles.title}>Новости</div>
                        <div className={styles.line}></div>
                        {news.map((item) => (
                        <a href={`/news/${item.id}/`} className={styles.news} key={item.id}>
                            <div className={styles.imageof}>
                                <img src={`${item.imgPath}/0.png`} alt="News Image" />
                            </div>
                            <div className={styles.headline}>
                                <div className={styles.headlineTitle}>{item.title}</div>
                                <div className={styles.headlineDate}>{item.data}</div>
                                <div className={styles.headlineDescription}>
                                    {item["subtittle"]}
                                </div>
                            </div>
                        </a>
))}


                    </div>
                </div>
            {/* </Show> */}
            </Container>
    );
};

export default NewsBlock;
