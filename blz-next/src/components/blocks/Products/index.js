import React from 'react';
import { motion } from 'framer-motion';
import styles from "./Products.module.scss";
import Container from "../../UI/Container";
import { products } from "@/productConfig";
import { ArrowRight } from 'react-feather'; // Или любая другая иконка

const Products = () => {    
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const buttonVariants = {
        hidden: { opacity: 0, x: 20 },
        hover: { opacity: 1, x: 0 }
    };

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.productsContainer}>
                    <h2 className={styles.mainTitle}>Наша продукция</h2>
                    <div className={styles.productsGrid}>
                        {products.map((product, index) => (
                            <motion.a 
                                href={`/products/${product.id}`} 
                                key={index} 
                                className={styles.productCard}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <img 
                                        src={`${product.imgPath}/0.png`} 
                                        alt={product.name} 
                                        className={styles.productImage} 
                                        loading="lazy"
                                    />
                                    <motion.div 
                                        className={styles.detailsButton}
                                        variants={buttonVariants}
                                        whileHover="hover"
                                    >
                                        <span>Подробнее</span>
                                        <ArrowRight size={18} />
                                    </motion.div>
                                </div>
                                <div className={styles.productInfo}>
                                    <h3 className={styles.productTitle}>{product.name}</h3>
                                    <p className={styles.productType}>{product.type}</p>
                                    <div className={styles.priceContainer}>
                                        <span className={styles.price}>{product.price} ₽</span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Products;