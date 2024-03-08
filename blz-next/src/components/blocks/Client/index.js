import React from 'react';
import styles from "./Client.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'; 
SwiperCore.use([Autoplay, Navigation, Pagination]); 
import Show from "../../UI/Show";

import 'swiper/css';
import 'swiper/css/navigation';


const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textBlocks}>
                <div className={styles.textBlock}>
                <div className={styles.titlee}>
                                Безопасность
                            </div>
                            <div className={styles.descriptionn}>
                                Разумно определите возможность сбоя в работе лифта. Когда лифт выходит из строя или выходит из строя из-за перебоев в подаче электроэнергии, система автоматически переключается и берет на себя основную систему управления. 
                            </div>
                </div>
                <div className={styles.buttonn}>
                            Ассортимент
                        </div>
            </div>
            <Swiper className={styles.swiperr}
                slidesPerView={1}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{delay: 2000}}
                navigation = {true}
                spaceBetween={20}
            >
                <SwiperSlide className={styles.slider}>
                    <div className={styles.inner}>
                        <div className={styles.info}>
                            
                                <div className={styles.title}> г. Ростов-на-Дону</div>
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slider}>
                    <div className={styles.inner}>
                        <div className={styles.info}>
                            
                                <div className={styles.title}>Г.Ростов-на-Дону</div>

                        </div>
                    </div>
                </SwiperSlide>
   
            </Swiper>
        </div>
    );
};

export default Banner;
