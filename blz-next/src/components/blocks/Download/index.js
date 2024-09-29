import styles from "./Download.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const Download = () => {
  const handleDownload = () => {
    fetch(process.env.PUBLIC_URL + "/public/glz.pdf")
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'glz.pdf';
        a.click();
      });
  };

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
            </div>
          </div>
        </Show>
      </Container>
    </div>
  );
};

export default Download;