import React from 'react';
import styles from "./Banner.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'; 
SwiperCore.use([Autoplay, Navigation, Pagination]); 
import Show from "../../UI/Show";

import 'swiper/css';


const Banner = () => {
    return (

        <Swiper className={styles.swiperr}
            slidesPerView={1}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{delay: 3000}}
            speed={1000}
        >
            <SwiperSlide className={styles.slider}>
                <div className={styles.inner}>
                    <div className={styles.info}>
                    <Show>
                        <div className={styles.title}> <b>BLZ</b> - Белорусский лифтовый завод это выбор профессионалов!</div>
                    </Show>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slider2}>
   
                <div className={styles.inner}>
                    <div className={styles.info}>
                    <Show>
                        <div className={styles.title}>Наш завод - первый производитель лифтов класса <b>А1</b> в Ростове-на-Дону и Ростовской области
                        </div>
                        </Show>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>


    );
};

export default Banner;