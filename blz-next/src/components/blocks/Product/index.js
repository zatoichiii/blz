import React from 'react';
import styles from "./Product.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Product = () => {
    return (
        <Container>
                <Show>
                <div className={styles.bodyWrapper}>
                <div className={styles.images}>
                        <img src={"/images/Technologies/elevator.png"}/>
                    </div>
                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                            Пассажирский лифт
                            </div>
                            <div className={styles.numbers}>Серийный номер:</div>                            
                            <div className={styles.numbers}>Продукт:</div>
                            <div className={styles.numbers}>Ключевое слово:</div>
                            <div className={styles.button}>Отправить сообщение</div>
                            <div className={styles.button}>Консультация:+7(999)999-99-99</div>
                            <div className={styles.description}>Характеристики </div>
                            <div className={styles.description}>Side car panel: Fire-proof wood + hairline stainless steel panel, hairline stainless steel </div>
                            <div className={styles.description}>
Rear car panel: Mirror stainless steel on both sides and art glass decorative lamination in the middle
Front car panel: mirror stainless steel
Ceiling: SGLT-18-006, mirror stainless steel, lighting, LED flush light panelCar bottom: SGLD-18-006, wear-resistant PVC floorCOP: SGL-COP-12, integrated mirror stainless steelButton: HA1Q01</div>
                        </div>
                    </div>


        
                </div>
                </Show>
                </Container>
    );
};

export default Product;