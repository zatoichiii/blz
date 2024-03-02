import React from 'react';
import styles from "./SliderNews.module.scss"
import Container from "../../UI/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'; 
SwiperCore.use([Autoplay, Navigation, Pagination]); 
import 'swiper/swiper-bundle.min.css'; 

const SliderNews = () => {
    return (
        <Container>
         <Swiper
                className={styles.swiperr}
                slidesPerView={4}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={styles.slider}>
                    <div className={styles.slideContent}>
                        <img src='/images/Main/man4.png' alt="Slide Image" className={styles.image} />
                        <div className={styles.info}>
                            <div className={styles.title}>
                            Открытие завода!
                            </div>
                            <div className={styles.description}>
                              Описание
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slider}>
                    <div className={styles.slideContent}>
                        <img src='/images/Main/man4.png' alt="Slide Image" className={styles.image} />
                        <div className={styles.info}>
                            <div className={styles.title}>
                                Открытие завода!
                            </div>
                            <div className={styles.description}>
                            Описание
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slider}>
                    <div className={styles.slideContent}>
                        <img src='/images/Main/man4.png' alt="Slide Image" className={styles.image} />
                        <div className={styles.info}>
                            <div className={styles.title}>
                            Открытие завода!
                            </div>
                            <div className={styles.description}>
                            Описание
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slider}>
                    <div className={styles.slideContent}>
                        <img src='/images/Main/man4.png' alt="Slide Image" className={styles.image} />
                        <div className={styles.info}>
                            <div className={styles.title}>
                            Открытие завода!
                            </div>
                            <div className={styles.description}>
                            Описание
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slider}>
                    <div className={styles.slideContent}>
                        <img src='/images/Main/man4.png' alt="Slide Image" className={styles.image} />
                        <div className={styles.info}>
                            <div className={styles.title}>
                            Открытие завода!
                            </div>
                            <div className={styles.description}>
                            Описание
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default SliderNews;
