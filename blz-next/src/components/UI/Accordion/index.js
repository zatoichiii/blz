import React, {useState} from 'react';
import styles from "./Accordion.module.scss"

const Accordion = ({ title, description }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.accordion}>
            <div className={styles.main}>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.plus}  onClick={()=>setOpen(!open)} >
            +
            </div>
            </div>
            <div className={`${styles.description} ${open ? styles.descriptionOpen : ""}`}>
                {description}
            </div>
        </div>
    );
};

export default Accordion;