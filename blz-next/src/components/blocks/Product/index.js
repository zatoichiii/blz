import React from 'react';
import styles from "./Product.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Product = ({lift}) => {
    return (
        <Container>
                <Show>
                <div className={styles.bodyWrapper}>
                <div className={styles.images}>
                <img src={`/${lift.imgPath}/0.png`} alt={lift.name} className={styles.productImage} />
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                                {lift.name}
                            </div>
                            <div className={styles.numbers}>Серийный номер: {lift.serialNumber}</div>                            
                            <div className={styles.numbers}>Продукт: {lift.type}</div>
                            <div className={styles.numbers}>Ключевое слово: {lift.keyWord}</div>
                            <a href='/contacty'>
                            <div className={styles.button}>Отправить сообщение</div>
                            </a>
                            <div className={styles.button}>Консультация:+7(999)999-99-99</div>
                            <div className={styles.description}>Характеристики </div>
                            <div className={styles.description}>{lift.characteristics}</div>
                        </div>
                    </div>


        
                </div>
                </Show>
                </Container>
    );
};

export default Product;