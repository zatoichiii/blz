import React from 'react';
import styles from "./NewsBlock.module.scss";
import Container from '../../UI/Container';
import { news } from "@/newsConfig";
import { motion } from 'framer-motion';

const NewsBlock = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <motion.h2 
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    Последние публикации
                </motion.h2>
                
                <div className={styles.grid}>
                    {news.map((item, index) => (
                        <motion.a 
                            href={`/news/${item.id}/`} 
                            className={styles.card}
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.imageWrapper}>
                                <img 
                                    src={`${item.imgPath}/0.png`} 
                                    alt={item.title} 
                                    loading="lazy"
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span className={styles.category}>Статьи</span>
                                    <span className={styles.date}>{item.data}</span>
                                </div>
                                <h3 className={styles.headline}>{item.title}</h3>
                                <p className={styles.excerpt}>{item.subtittle}</p>
                                <div className={styles.cta}>
                                    Читать статью
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default NewsBlock;