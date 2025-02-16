import React from 'react';
import { motion } from 'framer-motion';
import styles from "./NewsElement.module.scss";
import Container from "../../UI/Container";
import { ArrowLeft } from 'react-feather';
import { useRouter } from 'next/router';

const NewsElement = ({ news }) => {
    const router = useRouter();

    return (
        <Container>
            <motion.div 
                className={styles.wrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.a 
                    onClick={() => router.back()}
                    className={styles.backButton}
                    whileHover={{ x: -5 }}
                >
                    <ArrowLeft size={20} />
                    Назад к статьям
                </motion.a>

                <article className={styles.content}>
                    <motion.header 
                        className={styles.header}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.meta}>
                            <span className={styles.date}>{news.data}</span>
                            <span className={styles.category}>Статьи</span>
                        </div>
                        <h1 className={styles.title}>{news.title}</h1>
                    </motion.header>

                    <motion.div 
                        className={styles.imageWrapper}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <img 
                            src={`/${news.imgPath}/0.png`} 
                            alt={news.title} 
                            loading="lazy"
                        />
                    </motion.div>

                    <motion.div 
                        className={styles.description}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {news.all}
                    </motion.div>
                </article>
            </motion.div>
        </Container>
    );
};

export default NewsElement;