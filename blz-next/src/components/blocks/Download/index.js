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
            <div className={styles.tittle}>Посмотрите наш каталог в PDF формате</div>
            <a className={styles.ssylka} href="https://glz.by/images/custom/glz2024catalog.pdf?" target="_blank" rel="noopener noreferrer" >
            <div className={styles.desc}>Каталог GLZ 2024-2025</div>
            <button>Скачать</button>
            </a>
          </div>
        </Show>
      </Container>
    </div>
  );
};

export default Download;