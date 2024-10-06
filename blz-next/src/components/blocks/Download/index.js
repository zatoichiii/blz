import styles from "./Download.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";
import Link from 'next/link';


const Download = () => {


  return (
    <div className={styles.wrapper}>
      <Container>
        <Show>
          <div className={styles.inner}>
            <div className={styles.tittle}>Полезные ссылки</div>
            <div className={styles.ssylky}>
            <a className={styles.ssylka} href="https://glz.by/images/custom/glz2024catalog.pdf?" target="_blank" rel="noopener noreferrer" >
            <div className={styles.desc}>Каталог GLZ 2024-2025</div>
            <button>Скачать</button>
            </a>
            <a className={styles.ssylka} href="https://docs.google.com/document/d/1W65Xs9dOtNBPZE7qlWY4PqM0wOOjhi5qERRt3_jNTUM" target="_blank" rel="noopener noreferrer" >
            <div className={styles.desc}>Опросный лист</div>
            <button>Скачать</button>
            </a>
            <Link className={styles.ssylka} href="/glz.pdf">
            <div className={styles.desc}>Каталог Смарт-технологии</div>
            <button>Скачать</button>

      </Link>
            </div>
          </div>
        </Show>
      </Container>
    </div>
  );
};

export default Download;