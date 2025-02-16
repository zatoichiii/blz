import React from 'react';
import styles from "./Client.module.scss";
import Container from "../../UI/Container";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Thumbs, FreeMode, Navigation} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Show from '../../UI/Show';

const Client2 = () => {
    return (
        <Container>
            <Show>
                <div className={styles.bodyWrapper}>

                    <div className={styles.wrapper}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                                Наши Клиенты
                            </div>
                            <div className={styles.subTittle}>
                                Компания BLZ предоставляет свои услуги во множество городов, не только по Ростовской
                                области.
                            </div>
                            <div className={styles.description}>
                                Предлагаем ознакомиться с некоторыми из них.
                            </div>
                            <a href='/products'>
                                <div className={styles.button}>
                                    Каталог
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className={styles.slider}>
                        <Swiper
                            navigation={true}
                            spaceBetween={50}
                            slidesPerView={1.5}
                            slidesPerGroup={1}
                            modules={[FreeMode, Thumbs, Navigation ]}

                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <div className={styles.slideItem}>
                                    <img src={"/images/lifts-photo/1/0.png"}/>
                                    <div className={styles.photoText}>
                                        <div className={styles.photoTittle}>Пассажирский лифт</div>
                                        <div className={styles.photoLocation}>г.Ростов-на-Дону1</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.slideItem}>
                                    <img src={"/images/lifts-photo/1/0.png"}/>
                                    <div className={styles.photoText}>
                                        <div className={styles.photoTittle}>Не Пассажирский лифт</div>
                                        <div className={styles.photoLocation}>г.Ростов-на-Дону2</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.slideItem}>
                                    <img src={"/images/lifts-photo/1/0.png"}/>
                                    <div className={styles.photoText}>
                                        <div className={styles.photoTittle}>Пассажирский лифт</div>
                                        <div className={styles.photoLocation}>г.Ростов-на-Дону3</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.slideItem}>
                                    <img src={"/images/lifts-photo/1/0.png"}/>
                                    <div className={styles.photoText}>
                                        <div className={styles.photoTittle}>Пассажирский лифт</div>
                                        <div className={styles.photoLocation}>г.Ростов-на-Дону4</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Show>
        </Container>
    );
};

export default Client2;