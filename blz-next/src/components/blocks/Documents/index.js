import React, {useEffect, useRef, useState} from 'react';
import Show from "../../UI/Show";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation, Thumbs, Zoom, FreeMode } from 'swiper';
import styles from "./Documents.module.scss"
import Container from "../../UI/Container";

const Documents = () => {
    const [carouselSwiper, setCarouselSwiper] = useState(null)
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
        console.log(carouselSwiper)
    },[carouselSwiper])
    return (
        <div className={styles.bodyWrapper}>
            <Container>


                <div className={styles.wrapper}>
                    <div onClick={()=>setVisible(!visible)} className={styles.tittle}>
                        Документация
                    </div>
                    <div>
                        <Swiper
                            navigation={true}
                            spaceBetween={10}
                            slidesPerView={1}
                            modules={[FreeMode, Thumbs, Navigation]}
                            onSwiper={(e)=>setCarouselSwiper(e)}
                        >
                            <SwiperSlide><img src={"/images/Main/man1.png"}/></SwiperSlide>
                            <SwiperSlide><img src={"/images/Main/man 2.png"}/></SwiperSlide>
                            <SwiperSlide><img src={"/images/Main/man 3.png"}/></SwiperSlide>
                            <SwiperSlide><img src={"/images/Main/man4.png"}/></SwiperSlide>

                        </Swiper>
                    </div>
                </div>

            </Container>
            {visible === true && <SeeDocuments carouselSwiper={carouselSwiper}/>}
        </div>
    );
};

const SeeDocuments = ({carouselSwiper}) => {
    console.log(carouselSwiper)
    return (
        <div className={styles.blurBack}>
                <Swiper
                    className='mySwiper'
                    modules={[Zoom, Thumbs, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    thumbs={{swiper: carouselSwiper}}
                    zoom={true}
                >
                    <SwiperSlide><img src={"/images/Main/man1.png"}/></SwiperSlide>
                    <SwiperSlide><img src={"/images/Main/man 2.png"}/></SwiperSlide>
                    <SwiperSlide><img src={"/images/Main/man 3.png"}/></SwiperSlide>
                    <SwiperSlide><img src={"/images/Main/man4.png"}/></SwiperSlide>
                </Swiper>
        </div>
    );
};

export default Documents;