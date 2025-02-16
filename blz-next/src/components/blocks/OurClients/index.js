import styles from "./OurClients.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";
import Image from "next/image";

const partners = [
  '/images/Partners/platov.png',
  '/images/Partners/1.png',
  '/images/Partners/2.png',
  '/images/Partners/3.png',
  '/images/Partners/5.png',
  '/images/Partners/6.png',
  '/images/Partners/7.png',
  '/images/Partners/13.png',
  '/images/Partners/16.png',
  '/images/Partners/20.png',
  '/images/Partners/14.png',
  '/images/Partners/9.png',
  '/images/Partners/partner-2-gomelpromstroy2.png',
  '/images/Partners/partner-3-gomeldsk.png',
  '/images/Partners/partner-4-zms.png'
];

const OurClients = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
          <div className={styles.content}>
            <h2 className={styles.title}>Нам доверяют</h2>
            <p className={styles.subtitle}>Более 50 компаний по всей России</p>
            <div className={styles.logoWall}>
              {partners.map((src, index) => (
                <div key={index} className={styles.logoItem}>
                  <Image
                    src={src}
                    alt="Логотип партнера"
                    width={200}
                    height={100}
                    className={styles.logoImage}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
      </Container>
    </section>
  );
};

export default OurClients;