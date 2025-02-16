import styles from "./AbotGlz.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";
import Image from "next/image";

const AboutGLz = () => {
    return (
        <section className={styles.wrapper}>
            <Container>
                    <div className={styles.contentWrapper}>
                        <div className={styles.gridContainer}>
                            <div className={styles.textContent}>
                                <h1 className={styles.title}>
                                    Официальный представитель<br/>
                                    <span className={styles.highlight}>Гомельского лифтового завода</span>
                                </h1>
                                
                                <div className={styles.description}>
                                    <p className={styles.leadText}>
                                        Производство современных лифтовых систем класса А1 с оптимальным 
                                        соотношением цены и качества
                                    </p>
                                    
                                    <div className={styles.features}>
                                        <div className={styles.featureItem}>
                                            <h3>Основные направления</h3>
                                            <ul className={styles.featureList}>
                                                <li>Пассажирские лифты</li>
                                                <li>Грузовые подъемники</li>
                                                <li>Платформы для маломобильных</li>
                                                <li>Пандусы и рампы</li>
                                            </ul>
                                        </div>
                                        
                                        <div className={styles.featureItem}>
                                            <h3>Комплекс услуг</h3>
                                            <ul className={styles.featureList}>
                                                <li>Проектирование и подбор</li>
                                                <li>Монтаж и наладка</li>
                                                <li>Модернизация</li>
                                                <li>Техническое обслуживание</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <figure className={styles.imageContainer}>
                                <Image
                                    src="/images/About/avhcnb4eg.png"
                                    alt="Производство лифтового оборудования"
                                    width={800}
                                    height={600}
                                    className={styles.image}
                                    priority
                                />
                            </figure>
                        </div>
                    </div>
            </Container>
        </section>
    );
};

export default AboutGLz;