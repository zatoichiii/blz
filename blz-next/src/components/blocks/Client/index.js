import React from 'react';
import styles from "./Client.module.scss";
import Container from "../../UI/Container";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Thumbs, FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Show from '../../UI/Show';

const Client = () => {
    return (
        <Container >
            {/* <Show> */}
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
                                    Ассортимент
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
                            modules={[FreeMode, Thumbs]}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <div className={styles.slideItem}>
                                    <img src={"/images/bc6b624e-73bb-43bd-a800-41844c846f79.jpg"}/>
                                    <div className={styles.photoText}>
                                        <div className={styles.photoTittle}>Пассажирский лифт</div>
                                        <div className={styles.photoLocation}>г.Ростов-на-Дону</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.slideItem}>
                                    <img src={"/images/f5fd84e3-47fa-4df4-aae9-43f383e63633.jpg"}/>
                                    <div className={styles.photoText}>
                                        <div className={styles.photoTittle}>Не Пассажирский лифт</div>
                                        <div className={styles.photoLocation}>г.Ростов-на-Дону</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.slideItem}>
                                    <img src={"/images/e1a84a63-2864-4fad-8e6e-95cfdb7173dd.jpg"}/>
                                    <div className={styles.photoText}>
                                        <div className={styles.photoTittle}>Пассажирский лифт</div>
                                        <div className={styles.photoLocation}>г.Ростов-на-Дону</div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            {/* </Show> */}
        </Container>
    );
};

export default Client;