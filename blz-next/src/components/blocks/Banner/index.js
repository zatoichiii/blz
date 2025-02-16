import React from 'react';
import styles from "./Banner.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Banner = () => {
    return (
        <Swiper 
            className={styles.swiperContainer}
            modules={[Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 8000 }}
            speed={1000}
        >
            <SwiperSlide className={styles.slide}>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>
                            <span className={styles.highlight}>BLZ</span> - Белорусский лифтовый завод
                        </h1>
                        <p className={styles.subtitle}>Выбор профессионалов</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className={styles.slide2}>
                <div className={styles.content}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title}>
                            Первый дистрибьютор лифтов
                        </h1>
                        <p className={styles.subtitle}>
                            класса <span className={styles.highlight}>А1</span> в Ростовской области
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;