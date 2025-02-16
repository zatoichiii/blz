import styles from "./Download.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";
import Link from 'next/link';
import { FiDownloadCloud } from "react-icons/fi";

const Download = () => {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Show>
          <div className={styles.content}>
            <h2 className={styles.title}>Полезные материалы</h2>
            <div className={styles.grid}>
              <a 
                className={styles.card} 
                href="https://glz.by/images/custom/glz2024catalog.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className={styles.cardContent}>
                  <FiDownloadCloud className={styles.icon} />
                  <div className={styles.textGroup}>
                    <h3 className={styles.cardTitle}>Каталог GLZ 2024-2025</h3>
                    <p className={styles.fileInfo}>PDF · 15 MB</p>
                  </div>
                </div>
                <div className={styles.downloadBadge}>Скачать</div>
              </a>

              <a 
                className={styles.card} 
                href="https://docs.google.com/document/d/1W65Xs9dOtNBPZE7qlWY4PqM0wOOjhi5qERRt3_jNTUM" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className={styles.cardContent}>
                  <FiDownloadCloud className={styles.icon} />
                  <div className={styles.textGroup}>
                    <h3 className={styles.cardTitle}>Опросный лист</h3>
                    <p className={styles.fileInfo}>DOCX · 2.5 MB</p>
                  </div>
                </div>
                <div className={styles.downloadBadge}>Скачать</div>
              </a>

              <Link 
                className={styles.card} 
                href="/glz.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className={styles.cardContent}>
                  <FiDownloadCloud className={styles.icon} />
                  <div className={styles.textGroup}>
                    <h3 className={styles.cardTitle}>Смарт-технологии</h3>
                    <p className={styles.fileInfo}>PDF · 12 MB</p>
                  </div>
                </div>
                <div className={styles.downloadBadge}>Скачать</div>
              </Link>
            </div>
          </div>
        </Show>
      </Container>
    </section>
  );
};

export default Download;