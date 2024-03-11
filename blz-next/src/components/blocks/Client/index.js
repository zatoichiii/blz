import React from 'react';
import styles from "./Client.module.scss";
import Container from "../../UI/Container";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Thumbs, Zoom, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Security = () => {
    return (
        <Container>
            <div className={styles.bodyWrapper}>

                <div className={styles.wrapper}>
                    <div className={styles.text}>
                        <div className={styles.title}>
                            Наши Клиенты
                        </div>
                        <div className={styles.subTittle}>
                            Компания BLZ предоставляет свои услуги во множество городов, не только по Ростовской области.
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
                 modules={[FreeMode, Thumbs, Navigation]}
                 onSlideChange={() => console.log('slide change')}
             >
                    <SwiperSlide>
                    <img src={"/images/lifts-photo/1/0.png"}/>
                    <div className={styles.photoText}>
                        <div className={styles.photoTittle}>Пассажирский лифт</div>
                        <div className={styles.photoLocation}>г.Ростов-на-Дону</div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={"/images/lifts-photo/1/0.png"}/>
                    <div className={styles.photoText}>
                        <div className={styles.photoTittle}>Не Пассажирский лифт</div>
                        <div className={styles.photoLocation}>г.Ростов-на-Дону</div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={"/images/lifts-photo/1/0.png"}/>
                    <div className={styles.photoText}>
                        <div className={styles.photoTittle}>Пассажирский лифт</div>
                        <div className={styles.photoLocation}>г.Ростов-на-Дону</div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={"/images/lifts-photo/1/0.png"}/>
                    <div className={styles.photoText}>
                        <div className={styles.photoTittle}>Пассажирский лифт</div>
                        <div className={styles.photoLocation}>г.Ростов-на-Дону</div>
                    </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </Container>
    );
};

export default Security;