import React from 'react';
import styles from "./Facts.module.scss"
import Container from "../../UI/Container";
import Show from "../../UI/Show";


const Facts = () => {
    return (
        <Container>

                <div className={styles.bodyWrapper}>
                <Show>
                    <div className={styles.wrapper}>
                    <div className={styles.image}> <img src='/images/About/first people.png'></img></div>
                    <div className={styles.info}> 
                    <div className={styles.tittle}>
                    Безопасность лифтов
                    </div>
                    <div className={styles.text}>
                     - соответствует требованиям ТР ТС 011/2011 безопасность лифтов и гостам по которым он выпущен .
Необходимо отметь что лифт оснащен устройствами безопасности - ловители, ограничитель скорости, замки дверей шахты , буфер кабины и противовеса , система защиты от неконтролируемого движение кабины и превышение движение кабины. 
Лифты  в соответствии  с руководством по эксплуатации подвергаются ежемесячному осмотру , а также от зависимости моделей лифта и требований завода изготовителя ежеквартальному полугодовому или годовому техническому обслуживанию.
Лифты проходят проверку периодического технического освидетельствования ежегодного.
                    </div>
                    </div>
                    </div>
                    </Show>
                <Show>

                    <div className={styles.wrapper_reverse}>
                    
                    <div className={styles.info}> 
                    <div className={styles.tittle}>
                    Достижения Лифтового Завода
                    </div>
                    <div className={styles.text}>
                    Широкий ассортимент продукции: Мы являемся   официальными дилером лифтовых заводов -Гомельской лифтовой завод GLZ, Серпуховский лифтостроительный завод, Siglen Elevator , Fuji Elevator.
                    Мы предлагаем разнообразные модели лифтов, включая пассажирские, грузовые и специализированные решения. Мы учитываем потребности различных секторов, от жилых зданий до промышленных объектов.                    </div>
                    </div>

                    <div className={styles.image}> <img src='/images/About/people2.png'></img></div>

                    </div>
                    </Show>

                </div>
                
                </Container>
    );
};

export default Facts;