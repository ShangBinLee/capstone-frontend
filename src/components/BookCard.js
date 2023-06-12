import React, { useState } from 'react';
import DetailInfo from './DetailInfo.js';
import ToggleArrow from './ToggleArrow.js';
import styles from './BookCard.module.css';
import { Link, useNavigate } from 'react-router-dom';

const BookCard = ({ bookCardInfo }) => {
    const [opened, setOpened] = useState(false);
    const toggleDetailInfo = () => {
        setOpened(!opened);
    };

    const {
        mainInfo,
        detailInfo,
        productId
    } = bookCardInfo;

    const {
        img,
        infoText
    } = mainInfo;

    return (
        <div className={['card', opened === true ? `${styles.book_card} ${styles.opened}` : styles.book_card].join(' ')}>
            <div className={styles.main_info_box}>
            <Link to={`/detail/${productId}`}>
                <div className={styles.main_info}>
                    <img width={img.width} height={img.height} src={img.src} alt=""/>
                    <div className={styles.info_box}>
                        <p className={[styles.info_text, styles.title].join(' ')}>{infoText.title}</p>
                        <p className={[styles.info_text, styles.author].join(' ')}>{infoText.author}</p>
                        <p className={[styles.info_text, styles.price].join(' ')}>{infoText.price}원</p>
                        <p className={[styles.info_text, styles.date].join(' ')}>{infoText.date}</p>
                    </div>
                </div>
            </Link>
                <ToggleArrow opened={opened} onClick={toggleDetailInfo}/>
            </div>
            <DetailInfo opened={opened} detailInfo={detailInfo}/>
        </div>
    );
};

export default BookCard;