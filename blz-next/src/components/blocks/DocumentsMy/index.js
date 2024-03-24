import React, { useState } from 'react';
import styles from "./DocumentsMy.module.scss"
import Container from "../../UI/Container";

const DocumentsMy = () => {
    const [overlayOpen, setOverlayOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        setOverlayOpen(false);
    };

    return (
        <div className={styles.bodyWrapper}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.tittle}>
                        Документация
                    </div>
                    <div className={styles.photosRow}>
                        <div className={styles.element} onClick={() => handleImageClick('/images/Documents/1.jpg')}>
                            <img src='/images/Documents/1.jpg'/>
                        </div>
                        <div className={styles.element} onClick={() => handleImageClick('/images/Documents/1.jpg')}>
                            <img src='/images/Documents/1.jpg'/>
                        </div>
                        <div className={styles.element} onClick={() => handleImageClick('/images/Documents/1.jpg')}>
                            <img src='/images/Documents/1.jpg'/>
                        </div>
                        <div className={styles.element} onClick={() => handleImageClick('/images/Documents/1.jpg')}>
                            <img src='/images/Documents/1.jpg' />
                        </div>
                        <div className={styles.element} onClick={() => handleImageClick('/images/Documents/1.jpg')}>
                            <img src='/images/Documents/1.jpg'/>
                        </div>
                        <div className={styles.element} onClick={() => handleImageClick('/images/Documents/1.jpg')}>
                            <img src='/images/Documents/1.jpg'/>
                        </div>
                    </div>

                </div>
                {overlayOpen && (
                    <div className={styles.overlay} onClick={handleCloseOverlay}>
                        <div className={styles.overlayContent}>
                            <img src={selectedImage} className={styles.overlayImage}/>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default DocumentsMy;
