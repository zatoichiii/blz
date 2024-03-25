import React, { useState } from 'react';
import styles from "./Products.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";
import { products } from "@/productConfig";
import _ from "lodash";


const Products = () => {
    const [type, setType] = useState(products[0].type);
    const folterTypes = () => {
      return  _.uniqBy(products, 'type');
    }
    
    return (
        <div className={styles.wrapper}>
            <Container>
                {/* <Show> */}
                    <div className={styles.bodywrapper}>
                        <div className={styles.inner}>
                            <div className={styles.menu}>
                                <div className={styles.tittle}>Ассортимент</div>
                                {folterTypes().map((item) => (
                                    <div key={item.type} onClick={() => setType(item.type)} className={styles.subtittle}>
                                        {item.type}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.products}>
                            {products.filter((item) => item.type === type).map((itemLift, index) => (
                                <a href={`/products/${itemLift.id}`} key={index} className={styles.product}>
                                    <img src={`${itemLift.imgPath}/0.png`} alt={itemLift.name} className={styles.productImage} />
                                    <div className={styles.description}>
                                        <p className={styles.title}>{itemLift.name}</p>
                                        <p className={styles.price}>{itemLift.price}</p>
                                        <p className={styles.type}>{itemLift.type}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                    </div>
                {/* </Show> */}
            </Container>
        </div>
    );
};

export default Products;
