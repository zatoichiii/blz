import React from 'react';
import styles from "./Client.module.scss";
import Container from "../../UI/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import Image from 'next/image';

const Client = () => {
  const slides = [
    {
      img: "/images/bc6b624e-73bb-43bd-a800-41844c846f79.jpg",
      title: "Пассажирский лифт",
      location: "г. Ростов-на-Дону"
    },
    {
      img: "/images/f5fd84e3-47fa-4df4-aae9-43f383e63633.jpg",
      title: "Пассажирский лифт",
      location: "г. Ростов-на-Дону"
    },
    {
      img: "/images/e1a84a63-2864-4fad-8e6e-95cfdb7173dd.jpg",
      title: "Пассажирский лифт",
      location: "г. Ростов-на-Дону"
    }
  ];

  return (
    <Container>
      <div className={styles.bodyWrapper}>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h2 className={styles.title}>Наши Клиенты</h2>
            <p className={styles.subTitle}>
              Компания BLZ предоставляет свои услуги во множество городов, 
              не только по Ростовской области.
            </p>
            <p className={styles.description}>
              Предлагаем ознакомиться с некоторыми из них.
            </p>
            <a href='/products' className={styles.button}>
              Каталог
            </a>
          </div>
        </div>

        <div className={styles.slider}>
          <Swiper
            modules={[FreeMode, Navigation]}
            spaceBetween={30}
            slidesPerView={1.3}
            breakpoints={{
              768: { 
                spaceBetween: 25 
              },
              1024: { 
                spaceBetween: 30 
              },
              1280: { 
                slidesPerView: 1.3,
                spaceBetween: 35 
              }
            }}
            navigation={{
              nextEl: `.${styles.navButtonNext}`,
              prevEl: `.${styles.navButtonPrev}`,
            }}
            freeMode={false}
            className={styles.customSwiper}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className={styles.slide}>
                <div className={styles.slideItem}>
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={600}
                    height={400}
                    className={styles.slideImage}
                  />
                  <div className={styles.photoText}>
                    <h3 className={styles.photoTitle}>{slide.title}</h3>
                    <p className={styles.photoLocation}>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className={`${styles.navButton} ${styles.navButtonPrev}`}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" 
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={`${styles.navButton} ${styles.navButtonNext}`}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" 
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Client;