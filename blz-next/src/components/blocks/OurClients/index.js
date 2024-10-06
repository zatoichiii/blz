import styles from "./OurClients.module.scss";
import Container from "../../UI/Container";
import Show from "../../UI/Show";

const OurClients = () => {

  return (
    <div className={styles.wrapper}>
      <Container>
        <Show>
          <div className={styles.tittle}>Нам Доверяют</div>
          <div className={styles.partners}>
            
          <img className={styles.imgPartNew}  src='/images/Partners/platov.png'/> 
          <img className={styles.imgPart} src='/images/Partners/1.png'/> 
          <img className={styles.imgPart} src='/images/Partners/2.png'/> 
          <img className={styles.imgPart} src='/images/Partners/3.png'/> 
          <img className={styles.imgPart} src='/images/Partners/5.png'/> 
          <img className={styles.imgPart} src='/images/Partners/6.png'/> 
          <img className={styles.imgPart} src='/images/Partners/7.png'/> 
          <img className={styles.imgPart} src='/images/Partners/13.png'/> 
          <img className={styles.imgPart} src='/images/Partners/16.png'/> 
          <img className={styles.imgPart} src='/images/Partners/20.png'/> 
          <img className={styles.imgPart} src='/images/Partners/14.png'/> 
          <img className={styles.imgPart} src='/images/Partners/9.png'/> 
          <img className={styles.imgPart}  src='/images/Partners/partner-2-gomelpromstroy2.png'/> 
          <img className={styles.imgPart}  src='/images/Partners/partner-3-gomeldsk.png'/> 
          <img className={styles.imgPart}  src='/images/Partners/partner-4-zms.png'/> 
          
          </div>
        </Show>
      </Container>
    </div>
  );
};

export default OurClients;