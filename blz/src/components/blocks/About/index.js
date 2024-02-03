import React from 'react';
import styles from "./About.module.scss"
import Container from "../../UI/Container";

const About = () => {
    return (
        <Container>
                <div className={styles.bodyWrapper}>

                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                                Производство BLZ
                            </div>
                                <div className={styles.subtittle}>
                                Унаследуйте дух шведского индустриализма и создайте модель лифтов высокого класса.                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.description}>
                                Основными видами изготавливаемой продукции являются пассажирские лифты, подъемники грузовые,подъемники для инвалидов, пандусы и др. Мы оказываем весь комплекс услуг по подбору, проектированию, монтажу и наладке, модернизации, обслуживанию и ремонту лифтового оборудования, усердно работая над развитием производства. Белорусский лифтовый завод создаёт SMART системы для платформы «Умный лифт» - наиболее комфортной и безопасной для пассажиров.
                                </div>
                                <div className={styles.button}>
                            Подробнее
                        </div>
                        </div>
                    </div>


                    <div className={styles.images}>
                        <img src={"/images/Main/fabric.png"}/>
                    </div>
                </div>
                </Container>
    );
};

export default About;