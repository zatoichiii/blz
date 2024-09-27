import styles from "./AbotGlz.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";
import { set } from "lodash";

const AboutGLz = () => {


    return (
        <div className={styles.wrapper}>
            <Container>
                <Show>
                    <div className={styles.bodywrapper}>
                        <div className={styles.background}>
                            <div className={styles.textBlock}>
                                <div className={styles.tittle}>Представители ООО «Гомельский лифтовый завод» </div>
                                <div className={styles.text}>Мы являемся официальными представителями ООО «Гомельский лифтовый
                                завод» » - это современное
предприятие по производству
качественного лифтового
оборудования.
Нашей отличительной чертой
являетсястремление к
достижению оптимального
соотношения цены и качества
производимой продукции.
Основными видами изготавливаемой продукции
являются пассажирские лифты, подъемники грузовые,
подъемники для инвалидов, пандусы и др. Мы
оказываем весь комплекс услуг по подбору,
проектированию, монтажу и наладке, модернизации,
обслуживанию и ремонту лифтового оборудования,
усердно работая над развитием производства.
Гомельский лифтовый завод создаёт SMART системы
для платформы «Умный лифт» - наиболее комфортной
и безопасной для пассажиров.
    </div>
                            </div>
                            <div className={styles.imagesAbout}>
                            <img src={"/images/About/avhcnb4eg.png"} />
                            </div>
                        </div>
                    </div>
                </Show>
            </Container>
        </div>
    );
};

export default AboutGLz;