import React, {useState} from 'react';
import styles from "./Products.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";
import {products} from "@/productConfig";


const Products = () => {
    const [type,  setType] = useState(products[0].type)
    return (

        <div className={styles.wrapper}>
            <Container>
            <Show>
            <div className={styles.bodywrapper}>
                <div className={styles.inner}>
                    <div className={styles.menu}>
                        <div className={styles.tittle}>Ассортимент</div>
                        {products.map((item)=>item.type).map((itemType, index)=>(
                            <div key={index} onClick={()=>setType(itemType)} className={styles.subtittle}>{itemType}</div>
                        ))}
                    </div>
                </div>
                <div className={styles.products}>
                    {products.filter((item)=>item.type === type).map((itemLift, index)=>(
                        <>
                            <img src={`${itemLift.imgPath}/0.png`}/>
                            <a href={`/products/${itemLift.id}`} key={index} className={styles.number}>{itemLift.name}</a>
                        </>
                    ))}
                    {/*<div className={styles.number}></div>*/}
                    {/*<div className={styles.number}></div>*/}
                    {/*<div className={styles.number}></div>*/}
                    {/*<div className={styles.number}></div>*/}
                    {/*<div className={styles.number}></div>*/}
                    {/*<div className={styles.number}></div>*/}
                    {/*<div className={styles.number}></div>*/}
                    {/*<div className={styles.number}></div>*/}
                </div>
                </div>
                </Show>
                </Container>
        </div>
    );
};

export default Products;